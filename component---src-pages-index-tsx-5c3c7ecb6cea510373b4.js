"use strict";(self.webpackChunkhyeokjaelee_github_io=self.webpackChunkhyeokjaelee_github_io||[]).push([[245],{4612:function(e,t,n){n.r(t),n.d(t,{Head:function(){return P},default:function(){return L}});var r=n(582),l=n(6086),o=n(8775),i=n(3192),s=n(758),a=n(2736),c=n.n(a);function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}function d(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var f=(0,s.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,l=e.size,o=void 0===l?24:l,i=d(e,["color","size"]);return s.createElement("svg",u({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},i),s.createElement("polyline",{points:"15 18 9 12 15 6"}))}));f.propTypes={color:c().string,size:c().oneOfType([c().string,c().number])},f.displayName="ChevronLeft";var p=f;function h(){return h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},h.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var g=(0,s.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,l=e.size,o=void 0===l?24:l,i=m(e,["color","size"]);return s.createElement("svg",h({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},i),s.createElement("polyline",{points:"9 18 15 12 9 6"}))}));g.propTypes={color:c().string,size:c().oneOfType([c().string,c().number])},g.displayName="ChevronRight";var v=g,x=n(2143),w=n(9469),y=n(6412),j=n(5348),b=n(1308),k=n(1049),O=n(7637),N=n(6070);const C=[["all","📚"],["issues","🚧"],["frontend","🎨"],["backend","🔧"],["devOps","📦"],["etc","🎁"],["project","📝"],["data","📊"]];var L=e=>{let{location:{search:t},data:{allMarkdownRemark:{nodes:n}}}=e;const a=new URLSearchParams(t),c=Number(a.get("page"))||1,u=a.get("tag")||"all",[d,f]=(0,k.o)((e=>[e.likePostMap,e.setLikePostMap]),i.x),h=n.filter((e=>{var t;let{frontmatter:n}=e;return"all"===u||(null==n||null===(t=n.tags)||void 0===t?void 0:t.includes(u))})),m=h.length,g=h.slice(12*(c-1),12*c),w=!(!m||!c),L=w?Math.ceil(m/12):0,P=!w||c<=1,z=!w||c>=L,S=w?[c]:Array.from({length:7});if(w)for(let r=1;r<=7;r+=1){const e=c+r;if(e<=L&&S.push(e),S.length>=7)break;const t=c-r;if(t>0&&S.unshift(t),S.length>=7)break}const E=e=>{const n=new URLSearchParams(t);return n.set("page",String(e)),`?${n.toString()}`},R=()=>{var e;return null===(e=document.getElementById(j.or.MAIN))||void 0===e?void 0:e.scrollTo({top:0})},I=(0,s.useRef)(null);return(0,s.useEffect)((()=>{const e=C.findIndex((e=>{let[t]=e;return t===u}));I.current&&I.current.slideTo(e)}),[c,u]),(0,N.jsxs)("article",{className:"flex h-full flex-col items-center justify-between",children:[(0,N.jsx)("header",{className:"py-7",children:(0,N.jsx)(x.z,{})}),(0,N.jsxs)("div",{className:"flex w-full flex-col items-center gap-1",children:[(0,N.jsx)(o.RC,{mousewheel:!0,autoplay:{delay:3e3,disableOnInteraction:!0},className:"mx-auto w-fit max-w-full",modules:[l.FJ,l.Ij],slidesPerView:"auto",spaceBetween:4,onSwiper:e=>I.current=e,children:C.map((e=>{let[t,n]=e;const l=t===u;return(0,N.jsx)(o.qr,{className:(0,O.cn)("my-4 w-fit","phone:first:ml-4"),children:(0,N.jsxs)(r.Link,{className:(0,O.cn)("flex justify-center items-center gap-1 transition-colors rounded-full px-4 py-1 shadow-sm text-sm","bg-white dark:bg-zinc-800",{"bg-zinc-800 text-white dark:bg-white dark:text-zinc-900":l}),to:`?tag=${t}`,children:[l?(0,N.jsx)("div",{className:"w-5 animate-flip-up text-base animate-duration-500",children:n}):null,t]})},t)}))}),(0,N.jsx)("ul",{className:"mx-auto flex w-full max-w-6xl flex-wrap gap-9 px-9",children:g.map((e=>{var t;let{fields:n,frontmatter:r}=e;const{slug:l}=null!=n?n:{};return l?(0,N.jsx)(y.W,{date:null==r?void 0:r.date,description:null==r?void 0:r.description,href:l,isLiked:d.get(l),tags:null!==(t=null==r?void 0:r.tags)&&void 0!==t?t:[],title:(null==r?void 0:r.title)||"무제",onClickLikeButton:()=>{f((e=>(e.set(l,!e.get(l)),e)))}},l):null}))})]}),(0,N.jsxs)("ul",{className:"my-9 flex",children:[(0,N.jsx)("li",{children:(0,N.jsx)(b.$n,{className:"min-w-12 shadow-none",color:"gray",disabled:P,type:"button",variant:"outline",onClick:()=>{(0,r.navigate)(E(c-1)),R()},children:(0,N.jsx)(p,{})})}),S.map((e=>{const t=e===c;return(0,N.jsx)("li",{children:(0,N.jsx)(b.$n,{asChild:!0,className:"min-w-12 shadow-none",color:"gray",variant:t?"solid":"outline",children:(0,N.jsx)(r.Link,{to:E(e),onClick:()=>{R()},children:e})})},e)})),(0,N.jsx)("li",{children:(0,N.jsx)(b.$n,{className:"min-w-12 shadow-none",color:"gray",disabled:z,type:"button",variant:"outline",onClick:()=>{(0,r.navigate)(E(c+1)),R()},children:(0,N.jsx)(v,{})})})]})]})};const P=()=>(0,N.jsx)(w.W,{})}}]);
//# sourceMappingURL=component---src-pages-index-tsx-5c3c7ecb6cea510373b4.js.map