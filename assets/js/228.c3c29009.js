"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[228],{6828:function(e,t,r){r.d(t,{Z:function(){return v}});var n=r(102),a=r(7294),l=r(6010),i=r(2729),o=r(8746),c="sidebar_a9qW",m="sidebarItemTitle_uKok",s="sidebarItemList_Kvuv",u="sidebarItem_CF0Q",d="sidebarItemLink_miNk",p="sidebarItemLinkActive_RRTD",g=r(1614);function f(e){var t=e.sidebar;return 0===t.items.length?null:a.createElement("nav",{className:(0,l.Z)(c,"thin-scrollbar"),"aria-label":(0,g.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},a.createElement("div",{className:(0,l.Z)(m,"margin-bottom--md")},t.title),a.createElement("ul",{className:s},t.items.map((function(e){return a.createElement("li",{key:e.permalink,className:u},a.createElement(o.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:p},e.title))}))))}var h=["sidebar","toc","children"];function v(e){var t=e.sidebar,r=e.toc,o=e.children,c=(0,n.Z)(e,h),m=t&&t.items.length>0;return a.createElement(i.Z,c,a.createElement("div",{className:"container margin-vert--lg"},a.createElement("div",{className:"row"},m&&a.createElement("aside",{className:"col col--3"},a.createElement(f,{sidebar:t})),a.createElement("main",{className:(0,l.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},o),r&&a.createElement("div",{className:"col col--2"},r))))}},528:function(e,t,r){r.d(t,{Z:function(){return _}});var n=r(7294),a=r(6010),l=r(3905),i=r(1614),o=r(8746),c=r(1402),m=r(7338),s=r(9861),u=r(8826),d=r(7267),p="blogPostTitle_rzP5",g="blogPostData_Zg1s",f="blogPostDetailsFull_h6_j",h=r(4854),v="image_o0gy";function b(e){return e.href?n.createElement(o.Z,e):n.createElement(n.Fragment,null,e.children)}function E(e){var t=e.author,r=t.name,a=t.title,l=t.url,i=t.imageURL,o=t.email,c=l||o&&"mailto:"+o||void 0;return n.createElement("div",{className:"avatar margin-bottom--sm"},i&&n.createElement("span",{className:"avatar__photo-link avatar__photo"},n.createElement(b,{href:c},n.createElement("img",{className:v,src:i,alt:r}))),r&&n.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:"avatar__name"},n.createElement(b,{href:c,itemProp:"url"},n.createElement("span",{itemProp:"name"},r))),a&&n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},a)))}var y="authorCol_FlmR",Z="imageOnlyAuthorRow_trpF",N="imageOnlyAuthorCol_S2np";function k(e){var t=e.authors,r=e.assets;if(0===t.length)return null;var l=t.every((function(e){return!e.name}));return n.createElement("div",{className:(0,a.Z)("margin-top--md margin-bottom--sm",l?Z:"row")},t.map((function(e,t){var i;return n.createElement("div",{className:(0,a.Z)(!l&&"col col--6",l?N:y),key:t},n.createElement(E,{author:Object.assign({},e,{imageURL:null!=(i=r.authorsImageUrls[t])?i:e.imageURL})}))})))}function _(e){var t,r,v,b=(v=(0,m.c2)().selectMessage,function(e){var t=Math.ceil(e);return v(t,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),E=(0,c.C)().withBaseUrl,y=e.children,Z=e.frontMatter,N=e.assets,_=e.metadata,T=e.truncated,P=e.isBlogPostPage,O=void 0!==P&&P,w=_.date,C=_.formattedDate,j=_.permalink,x=_.tags,A=_.readingTime,R=_.title,S=_.editUrl,I=_.authors,D=null!=(t=N.image)?t:Z.image,L=!O&&T,B=x.length>0,U=O?"h1":"h2";return n.createElement("article",{className:O?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},n.createElement("header",null,n.createElement(U,{className:p,itemProp:"headline"},O?R:n.createElement(o.Z,{itemProp:"url",to:j},R)),n.createElement("div",{className:(0,a.Z)(g,"margin-vert--md")},n.createElement("time",{dateTime:w,itemProp:"datePublished"},C),void 0!==A&&n.createElement(n.Fragment,null," \xb7 ",b(A))),n.createElement(k,{authors:I,assets:N})),D&&n.createElement("meta",{itemProp:"image",content:E(D,{absolute:!0})}),n.createElement("div",{id:O?s.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},n.createElement(l.Zo,{components:u.Z},y)),(B||T)&&n.createElement("footer",{className:(0,a.Z)("row docusaurus-mt-lg",(r={},r[f]=O,r))},B&&n.createElement("div",{className:(0,a.Z)("col",{"col--9":L})},n.createElement(h.Z,{tags:x})),O&&S&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(d.Z,{editUrl:S})),L&&n.createElement("div",{className:(0,a.Z)("col text--right",{"col--3":B})},n.createElement(o.Z,{to:_.permalink,"aria-label":(0,i.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:R})},n.createElement("b",null,n.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},7267:function(e,t,r){r.d(t,{Z:function(){return d}});var n=r(7294),a=r(1614),l=r(3117),i=r(102),o=r(6010),c="iconEdit_dcUD",m=["className"];function s(e){var t=e.className,r=(0,i.Z)(e,m);return n.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,o.Z)(c,t),"aria-hidden":"true"},r),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}var u=r(7338);function d(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:u.kM.common.editThisPage},n.createElement(s,null),n.createElement(a.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},9056:function(e,t,r){r.d(t,{Z:function(){return g}});var n=r(3117),a=r(102),l=r(7294),i=r(6010),o=r(1614),c=r(7338),m="anchorWithStickyNavbar_mojV",s="anchorWithHideOnScrollNavbar_R0VQ",u=["as","id"],d=["as"];function p(e){var t,r=e.as,d=e.id,p=(0,a.Z)(e,u),g=(0,c.LU)().navbar.hideOnScroll;return d?l.createElement(r,(0,n.Z)({},p,{className:(0,i.Z)("anchor",(t={},t[s]=g,t[m]=!g,t)),id:d}),p.children,l.createElement("a",{className:"hash-link",href:"#"+d,title:(0,o.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):l.createElement(r,p)}function g(e){var t=e.as,r=(0,a.Z)(e,d);return"h1"===t?l.createElement("h1",(0,n.Z)({},r,{id:void 0}),r.children):l.createElement(p,(0,n.Z)({as:t},r))}},1428:function(e,t,r){r.d(t,{Z:function(){return l}});var n=r(7294),a=r(8746);function l(e){var t=e.permalink,r=e.title,l=e.subLabel;return n.createElement(a.Z,{className:"pagination-nav__link",to:t},l&&n.createElement("div",{className:"pagination-nav__sublabel"},l),n.createElement("div",{className:"pagination-nav__label"},r))}},5869:function(e,t,r){r.d(t,{Z:function(){return m}});var n=r(7294),a=r(6010),l=r(8746),i="tag_hD8n",o="tagRegular_D6E_",c="tagWithCount_i0QQ";function m(e){var t,r=e.permalink,m=e.name,s=e.count;return n.createElement(l.Z,{href:r,className:(0,a.Z)(i,(t={},t[o]=!s,t[c]=s,t))},m,s&&n.createElement("span",null,s))}},4854:function(e,t,r){r.d(t,{Z:function(){return m}});var n=r(7294),a=r(6010),l=r(1614),i=r(5869),o="tags_XVD_",c="tag_JSN8";function m(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,a.Z)(o,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,r=e.permalink;return n.createElement("li",{key:r,className:c},n.createElement(i.Z,{name:t,permalink:r}))}))))}},8826:function(e,t,r){r.d(t,{Z:function(){return b}});var n=r(7294),a=r(3117),l=r(102);var i=r(1614),o=["children"],c=function(e){var t=e.children,r=(0,l.Z)(e,o),c=(0,n.useRef)(null),m=(0,n.useState)(!1),s=m[0],u=m[1];return n.createElement("pre",(0,a.Z)({},r,{ref:c}),t,n.createElement("button",{type:"button","aria-label":(0,i.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:"copy-button",onClick:function(){c.current&&function(e,t){var r=(void 0===t?{}:t).target,n=void 0===r?document.body:r,a=document.createElement("textarea"),l=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";var i=document.getSelection(),o=!1;i.rangeCount>0&&(o=i.getRangeAt(0)),n.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;var c=!1;try{c=document.execCommand("copy")}catch(m){}a.remove(),o&&(i.removeAllRanges(),i.addRange(o)),l&&l.focus()}(Array.from(c.current.querySelectorAll("code div.line")).map((function(e){return e.textContent})).join("\n")),u(!0),setTimeout((function(){return u(!1)}),2e3)}},s?n.createElement(i.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):n.createElement(i.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy")))},m=r(2411),s=r(8746),u=r(9056),d=r(6010),p=r(7338),g="details_BAp3";function f(e){var t=Object.assign({},e);return n.createElement(p.PO,(0,a.Z)({},t,{className:(0,d.Z)("alert alert--info",g,t.className)}))}var h=["mdxType","originalType"];var v={head:function(e){var t=n.Children.map(e.children,(function(e){return function(e){var t,r;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(r=e.props)&&r.originalType){var a=e.props,i=(a.mdxType,a.originalType,(0,l.Z)(a,h));return n.createElement(e.props.originalType,i)}return e}(e)}));return n.createElement(m.Z,e,t)},code:function(e){var t=["a","b","big","i","span","em","strong","sup","sub","small"];return n.Children.toArray(e.children).every((function(e){return"string"==typeof e&&!e.includes("\n")||n.isValidElement(e)&&t.includes(e.props.mdxType)}))?n.createElement("code",e):n.createElement(c,e)},a:function(e){return n.createElement(s.Z,e)},pre:function(e){var t;return n.createElement(c,(0,n.isValidElement)(e.children)&&"code"===e.children.props.originalType?null==(t=e.children)?void 0:t.props:Object.assign({},e))},details:function(e){var t=n.Children.toArray(e.children),r=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),l=n.createElement(n.Fragment,null,t.filter((function(e){return e!==r})));return n.createElement(f,(0,a.Z)({},e,{summary:r}),l)},h1:function(e){return n.createElement(u.Z,(0,a.Z)({as:"h1"},e))},h2:function(e){return n.createElement(u.Z,(0,a.Z)({as:"h2"},e))},h3:function(e){return n.createElement(u.Z,(0,a.Z)({as:"h3"},e))},h4:function(e){return n.createElement(u.Z,(0,a.Z)({as:"h4"},e))},h5:function(e){return n.createElement(u.Z,(0,a.Z)({as:"h5"},e))},h6:function(e){return n.createElement(u.Z,(0,a.Z)({as:"h6"},e))}},b=Object.assign({},v,{div:function(e){return"shiki-twoslash-fragment"===e.className?n.createElement(n.Fragment,null,e.children):n.createElement("div",e)},pre:function(e){return n.createElement(c,e)},code:function(e){return n.createElement("code",e)}})},3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return p}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),m=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=m(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=m(r),p=a,g=d["".concat(c,".").concat(p)]||d[p]||u[p]||l;return r?n.createElement(g,i(i({ref:t},s),{},{components:r})):n.createElement(g,i({ref:t},s))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var m=2;m<l;m++)i[m]=r[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);