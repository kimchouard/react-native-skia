"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3089],{6655:function(e,t,a){a.r(t),a.d(t,{default:function(){return g}});var n=a(7294),i=a(6832),r=a(6828),l=a(528),s=a(7606),o=a(7338);function g(e){var t=e.metadata,a=e.items,g=e.sidebar,p=(0,i.Z)().siteConfig.title,m=t.blogDescription,c=t.blogTitle,d="/"===t.permalink?p:c;return n.createElement(r.Z,{title:d,description:m,wrapperClassName:o.kM.wrapper.blogPages,pageClassName:o.kM.page.blogListPage,searchMetadata:{tag:"blog_posts_list"},sidebar:g},a.map((function(e){var t=e.content;return n.createElement(l.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:t.metadata.truncated},n.createElement(t,null))})),n.createElement(s.Z,{metadata:t}))}},7606:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(7294),i=a(1614),r=a(1428);function l(e){var t=e.metadata,a=t.previousPage,l=t.nextPage;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,i.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(r.Z,{permalink:a,title:n.createElement(i.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")})),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},l&&n.createElement(r.Z,{permalink:l,title:n.createElement(i.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")})))}}}]);