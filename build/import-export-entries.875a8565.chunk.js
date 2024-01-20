"use strict";(self.webpackChunkevent_server=self.webpackChunkevent_server||[]).push([[3770],{2788:(L,h,n)=>{n.r(h),n.d(h,{default:()=>U});var e=n(74081),g=n(12146),x=n(27279),c=n(51447),u=n(11919),E=n.n(u),m=n(74758),t=n(10701),o=n(93415),l=n(32370),P=n(22572),r=n(5627),a=n(78955),d=n(68412),p=n(83395),j=n.n(p),v=n(94007),y=n(27875),f=n(41756);const I=()=>{const{i18n:s}=(0,f.Q)();return(0,e.jsx)(o.x,{background:"neutral100",children:(0,e.jsx)(y.A,{title:s("plugin.name","Import Export"),subtitle:s("plugin.description","Import/Export data from and to your database in just few clicks"),as:"h2"})})};var C=n(87939),B=n(92838),M=n(83726),R=n(35842),W=n(93574);const F=()=>{const{i18n:s}=(0,f.Q)(),{getPreferences:D,updatePreferences:K}=(0,M._)(),[O,Z]=(0,x.useState)(D()),A=(i,$)=>{K({[i]:$}),Z(D())};return(0,e.jsxs)(g.O4,{permissions:R.I.main,children:[(0,e.jsx)(I,{}),(0,e.jsx)(m.D,{children:(0,e.jsxs)(t.k,{direction:"column",alignItems:"start",gap:8,children:[(0,e.jsx)(o.x,{style:{alignSelf:"stretch"},background:"neutral0",padding:"32px",hasRadius:!0,children:(0,e.jsxs)(t.k,{direction:"column",alignItems:"start",gap:6,children:[(0,e.jsx)(l.Z,{variant:"alpha",children:s("plugin.page.homepage.section.quick-actions.title","Quick Actions")}),(0,e.jsx)(o.x,{children:(0,e.jsx)(t.k,{direction:"column",alignItems:"start",gap:4,children:(0,e.jsxs)(t.k,{gap:4,children:[(0,e.jsx)(C.r,{}),(0,e.jsx)(v.j,{availableExportFormats:[W.g.JSON_V2]})]})})})]})}),(0,e.jsx)(o.x,{style:{alignSelf:"stretch"},background:"neutral0",padding:"32px",hasRadius:!0,children:(0,e.jsxs)(t.k,{direction:"column",alignItems:"start",gap:6,children:[(0,e.jsx)(l.Z,{variant:"alpha",children:s("plugin.page.homepage.section.preferences.title","Preferences")}),(0,e.jsx)(o.x,{children:(0,e.jsxs)(t.k,{direction:"column",alignItems:"start",gap:4,children:[(0,e.jsx)(t.k,{justifyContent:"space-between",children:(0,e.jsx)(P.X,{value:O.applyFilters,onValueChange:i=>A("applyFilters",i),children:(0,e.jsx)(l.Z,{children:s("plugin.export.apply-filters-and-sort","Apply filters and sort to exported data")})})}),(0,e.jsx)(t.k,{justifyContent:"space-between",children:(0,e.jsx)(r.P,{label:s("plugin.export.deepness","Deepness"),placeholder:s("plugin.export.deepness","Deepness"),value:O.deepness,onChange:i=>A("deepness",i),children:j()(1,21).map(i=>(0,e.jsx)(a.W,{value:i,children:i},i))})})]})})]})}),(0,e.jsx)(o.x,{style:{alignSelf:"stretch"},background:"neutral0",padding:"32px",hasRadius:!0,children:(0,e.jsxs)(t.k,{direction:"column",alignItems:"start",gap:6,children:[(0,e.jsx)(l.Z,{variant:"alpha",children:s("plugin.page.homepage.section.need-help.title","Feature Request / Bug Report")}),(0,e.jsx)(o.x,{children:(0,e.jsxs)(t.k,{direction:"column",alignItems:"start",gap:4,children:[(0,e.jsx)(l.Z,{children:s("plugin.page.homepage.section.need-help.description","Feel free to reach out on the product roadmap, discord or github \u270C\uFE0F")}),(0,e.jsxs)(t.k,{gap:4,children:[(0,e.jsx)(d.r,{href:"https://strapi-import-export-entries.canny.io",isExternal:!0,children:s("plugin.page.homepage.section.need-help.product-roadmap","Product Roadmap")}),(0,e.jsx)(d.r,{href:"https://discord.gg/dcqCAFFdP8",isExternal:!0,children:s("plugin.page.homepage.section.need-help.discord","Discord")}),(0,e.jsx)(d.r,{href:"https://github.com/Baboo7/strapi-plugin-import-export-entries/issues",isExternal:!0,children:s("plugin.page.homepage.section.need-help.github","GitHub")})]})]})})]})})]})}),(0,e.jsx)(B.p,{})]})},T=(0,x.memo)(F),U=()=>(0,e.jsx)("div",{children:(0,e.jsxs)(c.rs,{children:[(0,e.jsx)(c.AW,{path:`/plugins/${E()}`,component:T,exact:!0}),(0,e.jsx)(c.AW,{component:g.Hn})]})})},68412:(L,h,n)=>{n.d(h,{r:()=>P});var e=n(74081),g=n(27279),x=n(48157),c=n(47533),u=n(72450),E=n(61657),m=n(32370),t=n(93415);const o=u.default.a`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  pointer-events: ${({disabled:r})=>r?"none":void 0};
  color: ${({disabled:r,theme:a})=>r?a.colors.neutral600:a.colors.primary600};

  svg path {
    transition: fill 150ms ease-out;
    fill: currentColor;
  }

  svg {
    font-size: ${10/16}rem;
  }

  ${m.Z} {
    transition: color 150ms ease-out;
    color: currentColor;
  }

  &:hover {
    color: ${({theme:r})=>r.colors.primary500};
  }

  &:active {
    color: ${({theme:r})=>r.colors.primary700};
  }

  ${E.BF};
`,l=(0,u.default)(t.x)`
  display: flex;
`,P=g.forwardRef(({children:r,href:a,to:d,disabled:p=!1,startIcon:j,endIcon:v,...y},f)=>{const I=a?"_blank":void 0,C=a?"noreferrer noopener":void 0;return(0,e.jsxs)(o,{as:d&&!p?c.NavLink:"a",target:I,rel:C,to:p?void 0:d,href:p?"#":a,disabled:p,ref:f,...y,children:[j&&(0,e.jsx)(l,{as:"span","aria-hidden":!0,paddingRight:2,children:j}),(0,e.jsx)(m.Z,{children:r}),v&&!a&&(0,e.jsx)(l,{as:"span","aria-hidden":!0,paddingLeft:2,children:v}),a&&(0,e.jsx)(l,{as:"span","aria-hidden":!0,paddingLeft:2,children:(0,e.jsx)(x.Z,{})})]})})}}]);
