(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{167:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return d})),n.d(t,"metadata",(function(){return m})),n.d(t,"rightToc",(function(){return h})),n.d(t,"default",(function(){return y}));var a=n(2),i=n(9),r=n(0),s=n.n(r),l=n(180),c=(n(77),n(280),n(19),n(52),n(176)),o=n(177),p=n(225),u=function(e){var t=[],n=function(e,n){n=null==(n="function"==typeof n?n():n)?"":n,t[t.length]=encodeURIComponent(e)+"="+encodeURIComponent(n)},a=function(e,i){var r,s,l;if(e)if(Array.isArray(i))for(r=0,s=i.length;r<s;r++)a(e+"["+("object"==typeof i[r]&&i[r]?r:"")+"]",i[r]);else if("[object Object]"===String(i))for(l in i)a(e+"["+l+"]",i[l]);else n(e,i);else if(Array.isArray(i))for(r=0,s=i.length;r<s;r++)n(i[r].name,i[r].value);else for(l in i)a(l,i[l]);return t};return a("",e).join("&")},b=function(e){var t=e.endpoint,n=e.method,a=void 0===n?"GET":n,r=e.query,l=void 0===r?{}:r,b=Object(i.a)(e,["endpoint","method","query"]);console.log({endpoint:t,method:a,query:l,props:b});var d=Object.assign({},l,{token:"YOUR_TREFLE_TOKEN"}),m=u(d),h=[{label:"CURL",value:"curl"},{label:"Browser",value:"browser"},{label:"NodeJS",value:"node"},{label:"Python",value:"python"},{label:"Ruby",value:"ruby"}];return s.a.createElement("div",{className:"codeBlock"},s.a.createElement(c.a,{groupId:"supports",defaultValue:"browser",values:h},h.map((function(e){switch(e.value){case"browser":return s.a.createElement(o.a,{value:"browser",key:"browser"},"Open your browser and navigate to ",s.a.createElement("a",{href:"https://trefle.io"+t+"?"+m.toString()},"https://trefle.io"+t+"?"+m.toString()));case"curl":return s.a.createElement(o.a,{value:"curl",key:"curl"},s.a.createElement(p.a,{className:"bash"},"\ncurl -X "+a.toString().toUpperCase()+' "https://trefle.io'+t+"?"+m.toString()+'"\n          '));case"node":return s.a.createElement(o.a,{value:"node",key:"node"},s.a.createElement(p.a,{className:"js"},"\nconst fetch = require('node-fetch');\n\n(async () => {\n  const response = await fetch('https://trefle.io"+t+"?"+m.toString()+"');\n  const json = await response.json();\n  console.log(json);\n})();\n          "));case"python":return s.a.createElement(o.a,{value:"python",key:"python"},s.a.createElement(p.a,{className:"py"},"\nimport requests\n\nr = requests."+a.toString().toLowerCase()+"('https://trefle.io"+t+"?"+m.toString()+"')\nr.json\n"));case"ruby":return s.a.createElement(o.a,{value:"ruby",key:"ruby"},s.a.createElement(p.a,{className:"rb"},"\nrequire 'httparty'\n\nr = HTTParty."+a.toString().toLowerCase()+"(\n  'https://trefle.io"+t+"',\n  query: "+JSON.stringify(d,null,2).split("\n").join("\n  ")+"\n)\nr.parsed_response\n"));default:return s.a.createElement(o.a,{value:"?",key:"?"},s.a.createElement("span",null,"?"))}}))))},d={id:"snippets",title:"Snippets"},m={id:"examples/snippets",isDocsHomePage:!1,title:"Snippets",description:"Here is some request samples",source:"@site/docs/examples/snippets.md",permalink:"/docs/examples/snippets",editUrl:"https://github.com/treflehq/documentation/edit/master/docs/examples/snippets.md",lastUpdatedBy:"Andr\xe9 Aubin",lastUpdatedAt:1594564898,sidebar:"someSidebar",previous:{title:"Distributions",permalink:"/docs/advanced/distributions"}},h=[{value:"Genus",id:"genus",children:[{value:"Get all genus",id:"get-all-genus",children:[]}]},{value:"Plants &amp; Species",id:"plants--species",children:[{value:"Get all plants",id:"get-all-plants",children:[]},{value:"Get all species",id:"get-all-species",children:[]},{value:"Get only edible plants",id:"get-only-edible-plants",children:[]},{value:"Get tallest trees",id:"get-tallest-trees",children:[]},{value:"Get plants in Antartica",id:"get-plants-in-antartica",children:[]},{value:"Get plants introduced in Marion-Prince Edward",id:"get-plants-introduced-in-marion-prince-edward",children:[]},{value:"Get plants native from Tibet",id:"get-plants-native-from-tibet",children:[]},{value:"Get species with height between 5cm and 20cm",id:"get-species-with-height-between-5cm-and-20cm",children:[]},{value:"Get species with red flowers",id:"get-species-with-red-flowers",children:[]},{value:"Get search for coconut species",id:"get-search-for-coconut-species",children:[]},{value:"Get species with oldest discoveries first",id:"get-species-with-oldest-discoveries-first",children:[]}]},{value:"Zones &amp; Distributions",id:"zones--distributions",children:[{value:"Get all countries / zones",id:"get-all-countries--zones",children:[]},{value:"Get countries / zones with less than 10 species",id:"get-countries--zones-with-less-than-10-species",children:[]}]}],g={rightToc:h};function y(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},g,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Here is some request samples"),Object(l.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(l.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(l.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Third party libraries")),Object(l.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"The ",Object(l.b)("inlineCode",{parentName:"p"},"node"),", ",Object(l.b)("inlineCode",{parentName:"p"},"ruby")," and ",Object(l.b)("inlineCode",{parentName:"p"},"python")," snippets require third-party libraries:"),Object(l.b)("ul",{parentName:"div"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"node"),": ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/node-fetch/node-fetch"}),"node-fetch")," library."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"python"),": ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://requests.readthedocs.io/en/master/"}),"request")," library."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"ruby"),": ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/jnunemaker/httparty"}),"HTTParty")," library.")))),Object(l.b)("br",null),Object(l.b)("br",null),Object(l.b)("h2",{id:"genus"},"Genus"),Object(l.b)("h3",{id:"get-all-genus"},"Get all genus"),Object(l.b)(b,{endpoint:"/api/v1/genus",mdxType:"MultiLanguageSnippet"}),Object(l.b)("br",null),Object(l.b)("br",null),Object(l.b)("hr",null),Object(l.b)("br",null),Object(l.b)("h2",{id:"plants--species"},"Plants & Species"),Object(l.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(l.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(l.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Reminder")),Object(l.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},Object(l.b)("strong",{parentName:"p"},"In all the following samples, ",Object(l.b)("inlineCode",{parentName:"strong"},"/plants")," can be switched to ",Object(l.b)("inlineCode",{parentName:"strong"},"/species")," and ",Object(l.b)("inlineCode",{parentName:"strong"},"/species")," can be switched to ",Object(l.b)("inlineCode",{parentName:"strong"},"/plants"),"."),"\nThe only difference is that ",Object(l.b)("inlineCode",{parentName:"p"},"/species")," API calls will return matching species, subspecies, varieties etc..., and ",Object(l.b)("inlineCode",{parentName:"p"},"/plants")," API calls will only return main species (without all the children species)."))),Object(l.b)("h3",{id:"get-all-plants"},"Get all plants"),Object(l.b)(b,{endpoint:"/api/v1/plants",mdxType:"MultiLanguageSnippet"}),Object(l.b)("br",null),Object(l.b)("h3",{id:"get-all-species"},"Get all species"),Object(l.b)(b,{endpoint:"/api/v1/species",mdxType:"MultiLanguageSnippet"}),Object(l.b)("br",null),Object(l.b)("h3",{id:"get-only-edible-plants"},"Get only edible plants"),Object(l.b)(b,{endpoint:"/api/v1/plants",query:{filter_not:{edible_part:"null"}},mdxType:"MultiLanguageSnippet"}),Object(l.b)("br",null),Object(l.b)("h3",{id:"get-tallest-trees"},"Get tallest trees"),Object(l.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(l.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(l.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Explanation")),Object(l.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("ul",{parentName:"div"},Object(l.b)("li",{parentName:"ul"},"Get all plants"),Object(l.b)("li",{parentName:"ul"},"With ",Object(l.b)("strong",{parentName:"li"},"tree")," ligneous type ",Object(l.b)("inlineCode",{parentName:"li"},"filter[ligneous_type]=tree")),Object(l.b)("li",{parentName:"ul"},"Without plants with no maximum height ",Object(l.b)("inlineCode",{parentName:"li"},"filter_not[maximum_height_cm]=null")),Object(l.b)("li",{parentName:"ul"},"Ordered by maximum height descending (highest first) ",Object(l.b)("inlineCode",{parentName:"li"},"order[maximum_height_cm]=desc"))))),Object(l.b)(b,{endpoint:"/api/v1/plants",query:{filter_not:{maximum_height_cm:"null"},filter:{ligneous_type:"tree"},order:{maximum_height_cm:"desc"}},mdxType:"MultiLanguageSnippet"}),Object(l.b)("br",null),Object(l.b)("h3",{id:"get-plants-in-antartica"},"Get plants in Antartica"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"See ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"advanced/distributions"}),"Distributions")," to learn more about distributions zones.")),Object(l.b)(b,{endpoint:"/api/v1/distributions/antarctica/plants",query:{},mdxType:"MultiLanguageSnippet"}),Object(l.b)("br",null),Object(l.b)("h3",{id:"get-plants-introduced-in-marion-prince-edward"},"Get plants introduced in Marion-Prince Edward"),Object(l.b)(b,{endpoint:"/api/v1/distributions/marion-prince-edward/plants",query:{filter:{establishment:"introduced"}},mdxType:"MultiLanguageSnippet"}),Object(l.b)("br",null),Object(l.b)("h3",{id:"get-plants-native-from-tibet"},"Get plants native from Tibet"),Object(l.b)(b,{endpoint:"/api/v1/distributions/tibet/plants",query:{filter:{establishment:"native"}},mdxType:"MultiLanguageSnippet"}),Object(l.b)("br",null),Object(l.b)("h3",{id:"get-species-with-height-between-5cm-and-20cm"},"Get species with height between 5cm and 20cm"),Object(l.b)(b,{endpoint:"/api/v1/species",query:{range:{maximum_height_cm:"5,20"}},mdxType:"MultiLanguageSnippet"}),Object(l.b)("br",null),Object(l.b)("h3",{id:"get-species-with-red-flowers"},"Get species with red flowers"),Object(l.b)(b,{endpoint:"/api/v1/species",query:{filter:{flower_color:"red"}},mdxType:"MultiLanguageSnippet"}),Object(l.b)("br",null),Object(l.b)("h3",{id:"get-search-for-coconut-species"},"Get search for coconut species"),Object(l.b)(b,{endpoint:"/api/v1/species",query:{q:"coconut"},mdxType:"MultiLanguageSnippet"}),Object(l.b)("br",null),Object(l.b)("h3",{id:"get-species-with-oldest-discoveries-first"},"Get species with oldest discoveries first"),Object(l.b)(b,{endpoint:"/api/v1/species",query:{order:{year:"asc"}},mdxType:"MultiLanguageSnippet"}),Object(l.b)("br",null),Object(l.b)("hr",null),Object(l.b)("br",null),Object(l.b)("h2",{id:"zones--distributions"},"Zones & Distributions"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"See ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"advanced/distributions"}),"Distributions")," to learn more about distributions zones.")),Object(l.b)("h3",{id:"get-all-countries--zones"},"Get all countries / zones"),Object(l.b)(b,{endpoint:"/api/v1/distributions",mdxType:"MultiLanguageSnippet"}),Object(l.b)("br",null),Object(l.b)("h3",{id:"get-countries--zones-with-less-than-10-species"},"Get countries / zones with less than 10 species"),Object(l.b)(b,{endpoint:"/api/v1/distributions",query:{range:{species_count:",10"}},mdxType:"MultiLanguageSnippet"}))}y.isMDXComponent=!0},176:function(e,t,n){"use strict";n(24),n(20),n(19);var a=n(0),i=n.n(a),r=n(184),s=n(172),l=n(129),c=n.n(l),o=37,p=39;t.a=function(e){var t=e.block,n=e.children,l=e.defaultValue,u=e.values,b=e.groupId,d=Object(r.a)(),m=d.tabGroupChoices,h=d.setTabGroupChoices,g=Object(a.useState)(l),y=g[0],v=g[1];if(null!=b){var f=m[b];null!=f&&f!==y&&u.some((function(e){return e.value===f}))&&v(f)}var j=function(e){v(e),null!=b&&h(b,e)},O=[];return i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":t})},u.map((function(e){var t=e.value,n=e.label;return i.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":y===t,className:Object(s.a)("tabs__item",c.a.tabItem,{"tabs__item--active":y===t}),key:t,ref:function(e){return O.push(e)},onKeyDown:function(e){return function(e,t,n){switch(n.keyCode){case p:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case o:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(O,e.target,e)},onFocus:function(){return j(t)},onClick:function(){return j(t)}},n)}))),i.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===y}))[0]))}},177:function(e,t,n){"use strict";var a=n(0),i=n.n(a);t.a=function(e){return i.a.createElement("div",null,e.children)}},196:function(e,t,n){"use strict";var a=n(12),i=n(79)(!0);a(a.P,"Array",{includes:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),n(78)("includes")},197:function(e,t,n){"use strict";var a=n(12),i=n(209);a(a.P+a.F*n(210)("includes"),"String",{includes:function(e){return!!~i(this,e,"includes").indexOf(e,arguments.length>1?arguments[1]:void 0)}})},212:function(e,t,n){"use strict";var a=n(8),i=n(26),r=n(56),s=n(53);n(54)("match",1,(function(e,t,n,l){return[function(n){var a=e(this),i=null==n?void 0:n[t];return void 0!==i?i.call(n,a):new RegExp(n)[t](String(a))},function(e){var t=l(n,e,this);if(t.done)return t.value;var c=a(e),o=String(this);if(!c.global)return s(c,o);var p=c.unicode;c.lastIndex=0;for(var u,b=[],d=0;null!==(u=s(c,o));){var m=String(u[0]);b[d]=m,""===m&&(c.lastIndex=r(o,i(c.lastIndex),p)),d++}return 0===d?null:b}]}))},213:function(e,t,n){"use strict";const a=(e,{target:t=document.body}={})=>{const n=document.createElement("textarea"),a=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const i=document.getSelection();let r=!1;i.rangeCount>0&&(r=i.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let s=!1;try{s=document.execCommand("copy")}catch(l){}return n.remove(),r&&(i.removeAllRanges(),i.addRange(r)),a&&a.focus(),s};e.exports=a,e.exports.default=a},214:function(e,t){e.exports.parse=function(e){var t=e.split(",").map((function(e){return function(e){if(/^-?\d+$/.test(e))return parseInt(e,10);var t;if(t=e.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){var n=t[1],a=t[2],i=t[3];if(n&&i){var r=[],s=(n=parseInt(n))<(i=parseInt(i))?1:-1;"-"!=a&&".."!=a&&"\u2025"!=a||(i+=s);for(var l=n;l!=i;l+=s)r.push(l);return r}}return[]}(e)}));return 0===t.length?[]:1===t.length?Array.isArray(t[0])?t[0]:t:t.reduce((function(e,t){return Array.isArray(e)||(e=[e]),Array.isArray(t)||(t=[t]),e.concat(t)}))}},225:function(e,t,n){"use strict";var a=n(2),i=(n(196),n(197),n(77),n(76),n(212),n(227),n(0)),r=n.n(i),s=n(172),l={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},c={Prism:n(51).a,theme:l};function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var u=/\r\n|\r|\n/,b=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},d=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},m=function(e,t){var n=e.plain,a=Object.create(null),i=e.styles.reduce((function(e,n){var a=n.languages,i=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=p({},e[t],i);e[t]=n})),e}),a);return i.root=n,i.plain=p({},n,{backgroundColor:null}),i};function h(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var g=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),o(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?m(e.theme,e.language):void 0;return t.themeDict=n})),o(this,"getLineProps",(function(e){var n=e.key,a=e.className,i=e.style,r=p({},h(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),s=t.getThemeDict(t.props);return void 0!==s&&(r.style=s.plain),void 0!==i&&(r.style=void 0!==r.style?p({},r.style,i):i),void 0!==n&&(r.key=n),a&&(r.className+=" "+a),r})),o(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,i=n.length,r=t.getThemeDict(t.props);if(void 0!==r){if(1===i&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===i&&!a)return r[n[0]];var s=a?{display:"inline-block"}:{},l=n.map((function(e){return r[e]}));return Object.assign.apply(Object,[s].concat(l))}})),o(this,"getTokenProps",(function(e){var n=e.key,a=e.className,i=e.style,r=e.token,s=p({},h(e,["key","className","style","token"]),{className:"token "+r.types.join(" "),children:r.content,style:t.getStyleForToken(r),key:void 0});return void 0!==i&&(s.style=void 0!==s.style?p({},s.style,i):i),void 0!==n&&(s.key=n),a&&(s.className+=" "+a),s}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,i=e.children,r=this.getThemeDict(this.props),s=t.languages[n];return i({tokens:function(e){for(var t=[[]],n=[e],a=[0],i=[e.length],r=0,s=0,l=[],c=[l];s>-1;){for(;(r=a[s]++)<i[s];){var o=void 0,p=t[s],m=n[s][r];if("string"==typeof m?(p=s>0?p:["plain"],o=m):(p=d(p,m.type),m.alias&&(p=d(p,m.alias)),o=m.content),"string"==typeof o){var h=o.split(u),g=h.length;l.push({types:p,content:h[0]});for(var y=1;y<g;y++)b(l),c.push(l=[]),l.push({types:p,content:h[y]})}else s++,t.push(p),n.push(o),a.push(0),i.push(o.length)}s--,t.pop(),n.pop(),a.pop(),i.pop()}return b(l),c}(void 0!==s?t.tokenize(a,s,n):[a]),className:"prism-code language-"+n,style:void 0!==r?r.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(i.Component),y=n(213),v=n.n(y),f=n(214),j=n.n(f),O=n(173),N={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},w=n(211),k=function(){var e=Object(O.a)().siteConfig.themeConfig.prism,t=void 0===e?{}:e,n=Object(w.a)().isDarkTheme,a=t.theme||N,i=t.darkTheme||a;return n?i:a},x=n(130),C=n.n(x),S=/{([\d,-]+)}/,T=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),a=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+a+")\\s*$")},E=/title=".*"/;t.a=function(e){var t=e.children,n=e.className,l=e.metastring,o=Object(O.a)().siteConfig.themeConfig.prism,p=void 0===o?{}:o,u=Object(i.useState)(!1),b=u[0],d=u[1],m=Object(i.useState)(!1),h=m[0],y=m[1];Object(i.useEffect)((function(){y(!0)}),[]);var f=Object(i.useRef)(null),N=[],w="",x=k();if(l&&S.test(l)){var G=l.match(S)[1];N=j.a.parse(G).filter((function(e){return e>0}))}l&&E.test(l)&&(w=l.match(E)[0].split("title=")[1].replace(/"+/g,""));var L=n&&n.replace(/language-/,"");!L&&p.defaultLanguage&&(L=p.defaultLanguage);var q=t.replace(/\n$/,"");if(0===N.length&&void 0!==L){for(var _,M="",P=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return T(["js","jsBlock"]);case"jsx":case"tsx":return T(["js","jsBlock","jsx"]);case"html":return T(["js","jsBlock","html"]);case"python":case"py":return T(["python"]);default:return T()}}(L),z=t.replace(/\n$/,"").split("\n"),A=0;A<z.length;){var D=A+1,B=z[A].match(P);if(null!==B){switch(B.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":M+=D+",";break;case"highlight-start":_=D;break;case"highlight-end":M+=_+"-"+(D-1)+","}z.splice(A,1)}else A+=1}N=j.a.parse(M),q=z.join("\n")}var I=function(){v()(q),d(!0),setTimeout((function(){return d(!1)}),2e3)};return r.a.createElement(g,Object(a.a)({},c,{key:h,theme:x,code:q,language:L}),(function(e){var t,n,i=e.className,l=e.style,c=e.tokens,o=e.getLineProps,p=e.getTokenProps;return r.a.createElement(r.a.Fragment,null,w&&r.a.createElement("div",{style:l,className:C.a.codeBlockTitle},w),r.a.createElement("div",{className:C.a.codeBlockContent},r.a.createElement("button",{ref:f,type:"button","aria-label":"Copy code to clipboard",className:Object(s.a)(C.a.copyButton,(t={},t[C.a.copyButtonWithTitle]=w,t)),onClick:I},b?"Copied":"Copy"),r.a.createElement("div",{tabIndex:"0",className:Object(s.a)(i,C.a.codeBlock,(n={},n[C.a.codeBlockWithTitle]=w,n))},r.a.createElement("div",{className:C.a.codeBlockLines,style:l},c.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=o({line:e,key:t});return N.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),r.a.createElement("div",Object(a.a)({key:t},n),e.map((function(e,t){return r.a.createElement("span",Object(a.a)({key:t},p({token:e,key:t})))})))}))))))}))}}}]);