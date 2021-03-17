(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{88:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(98)),i={id:"styled",title:"styled",sidebar_label:"styled"},c={unversionedId:"api/styled",id:"api/styled",isDocsHomePage:!1,title:"styled",description:"styled(tagName Function)",source:"@site/docs/api/styled.md",slug:"/api/styled",permalink:"/api/styled",editUrl:"https://github.com/cristianbote/goober/edit/master/docs/api/styled.md",version:"current",sidebar_label:"styled",sidebar:"docs",previous:{title:"Introduction",permalink:"/"},next:{title:"setup",permalink:"/api/setup"}},s=[{value:"Different ways of customizing the styles",id:"different-ways-of-customizing-the-styles",children:[{value:"Tagged templates functions",id:"tagged-templates-functions",children:[]},{value:"Function that returns a string",id:"function-that-returns-a-string",children:[]},{value:"JSON/Object",id:"jsonobject",children:[]},{value:"Arrays",id:"arrays",children:[]}]}],l={toc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"styled(tagName: String | Function, forwardRef?: Function)")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"@param {String|Function} tagName")," The name of the dom element you'd like the styled to be applied to"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"@param {Function} forwardRef")," Forward ref function. Usually ",Object(o.b)("inlineCode",{parentName:"li"},"React.forwardRef")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"@returns {Function}")," Returns the tag template function.")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'import { styled } from "goober";\n\nconst Btn = styled("button")`\n  border-radius: 4px;\n`;\n')),Object(o.b)("h2",{id:"different-ways-of-customizing-the-styles"},"Different ways of customizing the styles"),Object(o.b)("h3",{id:"tagged-templates-functions"},"Tagged templates functions"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'import { styled } from "goober";\n\nconst Btn = styled("button")`\n  border-radius: ${(props) => props.size}px;\n`;\n\n<Btn size={20} />;\n')),Object(o.b)("h3",{id:"function-that-returns-a-string"},"Function that returns a string"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'import { styled } from "goober";\n\nconst Btn = styled("button")(\n  (props) => `\n  border-radius: ${props.size}px;\n`\n);\n\n<Btn size={20} />;\n')),Object(o.b)("h3",{id:"jsonobject"},"JSON/Object"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'import { styled } from "goober";\n\nconst Btn = styled("button")((props) => ({\n  borderRadius: props.size + "px",\n}));\n\n<Btn size={20} />;\n')),Object(o.b)("h3",{id:"arrays"},"Arrays"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'import { styled } from "goober";\n\nconst Btn = styled("button")([\n  { color: "tomato" },\n  ({ isPrimary }) => ({ background: isPrimary ? "cyan" : "gray" }),\n]);\n\n<Btn />; // This will render the `Button` with `background: gray;`\n<Btn isPrimary />; // This will render the `Button` with `background: cyan;`\n')))}u.isMDXComponent=!0},98:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||o;return n?a.a.createElement(m,c(c({ref:t},l),{},{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);