function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./index-7MmEg4M7.js","./index-XiNr8FW2.js","./_commonjsHelpers-5-cIlDoe.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as p}from"./iframe-iLion_5K.js";import{R as e,r as c}from"./index-XiNr8FW2.js";import{r as l,u}from"./react-18-sFOusbzT.js";import{C as h,A as E,H as d,D as x}from"./index-Ps0A1obj.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-5-cIlDoe.js";import"./index-9vG4XYWr.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-CNfL2PbK.js";import"./index-ogXoivrg.js";import"./index-mLPG47JP.js";import"./index-PPLHz8o0.js";var _={code:h,a:E,...d},D=class extends c.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(t){let{showException:r}=this.props;r(t)}render(){let{hasError:t}=this.state,{children:r}=this.props;return t?null:e.createElement(e.Fragment,null,r)}},O=class{constructor(){this.render=async(t,r,o)=>{let n={..._,...r==null?void 0:r.components},s=x;return new Promise((m,i)=>{p(()=>import("./index-7MmEg4M7.js"),__vite__mapDeps([0,1,2]),import.meta.url).then(({MDXProvider:a})=>l(e.createElement(D,{showException:i,key:Math.random()},e.createElement(a,{components:n},e.createElement(s,{context:t,docsParameter:r}))),o)).then(()=>m())})},this.unmount=t=>{u(t)}}};export{O as DocsRenderer,_ as defaultComponents};
