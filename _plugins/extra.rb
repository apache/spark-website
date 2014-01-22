# A custom block for "extra" content to put at the bottom of pages.
# This will appear below the two-column layout pages normally have.

module Liquid
  class ExtraBlock < Liquid::Block
    alias :super_render :render

    def initialize(tag_name, identifier, tokens)
      super
    end

    def render(context)
      context.environments.first["page"]["extra"] = super_render(context)
      ''
    end
  end
end
puts "registering new extra template"
Liquid::Template.register_tag('extra', Liquid::ExtraBlock)
