param([string]$WslDistribution = 'Ubuntu')

$ErrorActionPreference = 'Stop'
$repoRoot = Split-Path -Parent $PSScriptRoot
$themeRoot = Join-Path $repoRoot 'modern'
$previousJekyllEnvironment = $env:JEKYLL_ENV
Push-Location $repoRoot
try {
    $env:JEKYLL_ENV = 'production'
    & node (Join-Path $PSScriptRoot 'prepare-modern.js')
    if ($LASTEXITCODE -ne 0) { throw 'Preparing the shared content failed.' }

    $nativeBundle = Get-Command bundle -ErrorAction SilentlyContinue
    function Invoke-ModernBundle {
        param([string[]]$BundleArguments)
        if ($nativeBundle) {
            Push-Location $themeRoot
            try { & $nativeBundle.Source @BundleArguments | Out-Host }
            finally { Pop-Location }
        } else {
            $portableScriptPath = (Join-Path $PSScriptRoot 'modern-bundle.sh').Replace('\', '/')
            $linuxScriptPath = (& wsl --distribution $WslDistribution -- wslpath -a $portableScriptPath | Out-String).Trim()
            if ($LASTEXITCODE -ne 0) { throw 'Could not locate the WSL build helper.' }
            & wsl --distribution $WslDistribution -- bash $linuxScriptPath @BundleArguments | Out-Host
        }
        return $LASTEXITCODE
    }

    $bundlePath = 'vendor/bundle'
    if (-not $nativeBundle) {
        $linuxBuildHome = (& wsl --distribution $WslDistribution -- printenv HOME | Out-String).Trim()
        if ($LASTEXITCODE -ne 0 -or -not $linuxBuildHome.StartsWith('/')) { throw 'Could not locate the Ubuntu build cache.' }
        $bundlePath = "$linuxBuildHome/.cache/resume-al-folio/bundle"
    }
    $result = Invoke-ModernBundle -BundleArguments @('config', 'set', '--local', 'path', $bundlePath)
    if ($result -ne 0) { throw 'Ruby and Bundler are required, either natively or in the selected WSL distribution.' }
    $result = Invoke-ModernBundle -BundleArguments @('check')
    if ($result -ne 0) {
        $result = Invoke-ModernBundle -BundleArguments @('install', '--jobs', '4', '--retry', '2')
        if ($result -ne 0) { throw 'Installing the pinned al-folio dependencies failed.' }
    }
    $result = Invoke-ModernBundle -BundleArguments @('exec', 'jekyll', 'build', '--config', 'upstream-config.yml,_config.yml')
    if ($result -ne 0) { throw 'The al-folio Jekyll build failed.' }
    $result = Invoke-ModernBundle -BundleArguments @('exec', 'al-folio', 'upgrade', 'overrides', 'audit')
    if ($result -ne 0) { throw 'The al-folio override audit needs attention.' }

    & node (Join-Path $PSScriptRoot 'publish-modern.js')
    if ($LASTEXITCODE -ne 0) { throw 'Copying the compiled homepage failed.' }
} finally {
    $env:JEKYLL_ENV = $previousJekyllEnvironment
    Pop-Location
}
