# Supply navigation destinations to al-folio's unmodified header.
# These entries link to existing content and do not produce placeholder pages.
module AcademicNavigation
  class Link < Jekyll::PageWithoutAFile
    def initialize(site, entry, order)
      super(site, site.source, '', "navigation-#{order}.html")
      self.data = { 'title' => entry['title'], 'nav' => true,
                    'nav_order' => entry.fetch('order', order), 'permalink' => entry['url'],
                    'sitemap' => false, 'search' => false }
    end

    def url
      data['permalink']
    end

    def write(_destination)
      false
    end
  end

  class Generator < Jekyll::Generator
    def generate(site)
      site.config.fetch('homepage_navigation', []).each_with_index do |entry, index|
        site.pages << Link.new(site, entry, index + 1)
      end
    end
  end
end
