import{j as t}from"./jsx-runtime-c3de6e4e.js";import{c as l,d as x}from"./index-39c2c6b0.js";import{r as n}from"./index-65d0a824.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-725317a4.js";function T(o){const[f,s]=n.useState(!1),a=n.useRef(0);function g(){s(!1),window.clearTimeout(a.current),a.current=window.setTimeout(()=>{s(!0)},100)}return n.useEffect(()=>()=>clearTimeout(a.current),[]),t.jsxs("div",{children:[t.jsx(x,{onClick:g,children:"Agendar"}),t.jsx(l,{open:f,onOpenChange:s,...o})]})}const E={title:"Data display/Toast",component:l,tags:["autodocs"]},e={args:{title:"Hello World",description:"Lorem ipsum lorem..."}},r={args:{title:"Agendamento realizado",description:"Quarta-feira, 23 de Outubro às 16h"},render:o=>t.jsx(T,{...o})};var i,c,m;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    title: 'Hello World',
    description: 'Lorem ipsum lorem...'
  }
}`,...(m=(c=e.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var d,u,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    title: 'Agendamento realizado',
    description: 'Quarta-feira, 23 de Outubro às 16h'
  },
  render: args => <DemoToast {...args} />
}`,...(p=(u=r.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const S=["Primary","Action"];export{r as Action,e as Primary,S as __namedExportsOrder,E as default};
//# sourceMappingURL=Toast.stories-56977079.js.map
