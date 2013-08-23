module Liquid
  class SidebarBlock < Liquid::Block
    alias :super_render :render

    def initialize(tag_name, identifier, tokens)
      super
    end

    def render(context)
      context.environments.first["page"]["sidebar"] = super_render(context)
      ''
    end
  end
end
puts "registering new sidebar template"
Liquid::Template.register_tag('sidebar', Liquid::SidebarBlock)