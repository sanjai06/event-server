"use strict";(self.webpackChunkevent_server=self.webpackChunkevent_server||[]).push([[9870],{9870:(B,M,t)=>{t.r(M),t.d(M,{default:()=>_s});var s=t(74081),n=t(12146),_=t(59461),h=t(38178),r=t(27279),c=t(51926),P=t(27997),m=t(73354),o=t(27875),d=t(37472),l=t(32370),D=t(48102),x=t(74758),T=t(93415),W=t(70774),A=t(38566),J=t(38101),Z=t(93153),E=t(50086),F=t(73411),q=t(10989),ss=t(86967),k=t(10701),ts=t(89053),z=t(4987),es=t(6191),R=t(36938),Q=t(78665),ns=t(26784),as=t(52448),os=t(61020),I=t(40464),V=t(51447),vs=t(64797),Ts=t(85811),us=t(66333),js=t(15816),Ls=t(97442),fs=t(13576),Bs=t(87830),Ws=t(47184),As=t(364),Rs=t(71563),Is=t(49204),Us=t(47853),Ks=t(75719),ys=t(74919),ps=t(29206),bs=t(98934),Ss=t(43433),$s=t(8175);const is=()=>{const[U,C]=(0,r.useState)(!1),[K,g]=(0,r.useState)([]),ds=(0,_.v9)(h.s),{formatMessage:a}=(0,os.Z)(),{formatAPIError:u}=(0,n.So)(),j=(0,n.lm)();(0,n.go)();const{push:ls}=(0,V.k6)(),{pathname:N}=(0,V.TH)(),{isLoading:rs,allowedActions:{canCreate:y,canUpdate:Y,canDelete:w}}=(0,n.ss)(ds.settings.webhooks),{get:Es,post:hs,put:Ms}=(0,n.kY)(),{notifyStatus:G}=(0,c.G)(),cs="webhooks",{isLoading:Ds,data:O,error:p,refetch:H}=(0,I.useQuery)(cs,async()=>{const{data:{data:e}}=await Es("/admin/webhooks");return e});(0,r.useEffect)(()=>{if(p){j({type:"warning",message:u(p)});return}O&&G(a({id:"Settings.webhooks.list.loading.success",defaultMessage:"Webhooks have been loaded"}))},[O,p,j,a,G,u]);const X=(0,I.useMutation)(async()=>{await hs("/admin/webhooks/batch-delete",{ids:K})},{onError(e){j({type:"warning",message:u(e)}),C(!1)},onSuccess(){g([]),C(!1),H()}}),gs=(0,I.useMutation)(async({isEnabled:e,id:i})=>{const{id:f,...$}=O.find(Cs=>Cs.id===i)??{},xs={...$,isEnabled:e};await Ms(`/admin/webhooks/${i}`,xs)},{onError(e){j({type:"warning",message:u(e)})},onSuccess(){H()}}),Os=()=>X.mutate(),Ps=e=>g(e?O.map(i=>i.id):[]),ms=(e,i)=>g(e?f=>[...f,i]:f=>f.filter($=>$!==i)),b=e=>ls(`${N}/${e}`),S=rs||Ds,L=O?.length??0,v=K.length;return(0,s.jsxs)(P.A,{children:[(0,s.jsx)(n.SL,{name:"Webhooks"}),(0,s.jsxs)(m.o,{"aria-busy":S,children:[(0,s.jsx)(o.T,{title:a({id:"Settings.webhooks.title",defaultMessage:"Webhooks"}),subtitle:a({id:"Settings.webhooks.list.description",defaultMessage:"Get POST changes notifications"}),primaryAction:y&&!S&&(0,s.jsx)(n.Qj,{startIcon:(0,s.jsx)(R.Z,{}),variant:"default",to:`${N}/create`,size:"S",children:a({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"})})}),v>0&&w&&(0,s.jsx)(d.Z,{startActions:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.Z,{variant:"epsilon",textColor:"neutral600",children:a({id:"Settings.webhooks.to.delete",defaultMessage:"{webhooksToDeleteLength, plural, one {# webhook} other {# webhooks}} selected"},{webhooksToDeleteLength:v})}),(0,s.jsx)(D.z,{onClick:()=>C(!0),startIcon:(0,s.jsx)(Q.Z,{}),size:"L",variant:"danger-light",children:a({id:"global.delete",defaultMessage:"Delete"})})]})}),(0,s.jsx)(x.D,{children:S?(0,s.jsx)(T.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,children:(0,s.jsx)(n.dO,{})}):L>0?(0,s.jsxs)(W.i,{colCount:5,rowCount:L+1,footer:(0,s.jsx)(A.c,{onClick:()=>y?b("create"):{},icon:(0,s.jsx)(R.Z,{}),children:a({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"})}),children:[(0,s.jsx)(J.h,{children:(0,s.jsxs)(Z.Tr,{children:[(0,s.jsx)(E.Th,{children:(0,s.jsx)(F.C,{"aria-label":a({id:"global.select-all-entries",defaultMessage:"Select all entries"}),indeterminate:v>0&&v<L,value:v===L,onValueChange:Ps})}),(0,s.jsx)(E.Th,{width:"20%",children:(0,s.jsx)(l.Z,{variant:"sigma",textColor:"neutral600",children:a({id:"global.name",defaultMessage:"Name"})})}),(0,s.jsx)(E.Th,{width:"60%",children:(0,s.jsx)(l.Z,{variant:"sigma",textColor:"neutral600",children:a({id:"Settings.webhooks.form.url",defaultMessage:"URL"})})}),(0,s.jsx)(E.Th,{width:"20%",children:(0,s.jsx)(l.Z,{variant:"sigma",textColor:"neutral600",children:a({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"})})}),(0,s.jsx)(E.Th,{children:(0,s.jsx)(q.T,{children:a({id:"Settings.webhooks.list.th.actions",defaultMessage:"Actions"})})})]})}),(0,s.jsx)(ss.p,{children:O.map(e=>(0,s.jsxs)(Z.Tr,{...(0,n.X7)({fn:()=>b(e.id),condition:Y}),children:[(0,s.jsx)(E.Td,{...n.UW,children:(0,s.jsx)(F.C,{"aria-label":`${a({id:"global.select",defaultMessage:"Select"})} ${e.name}`,value:K?.includes(e.id),onValueChange:i=>ms(i,e.id),name:"select"})}),(0,s.jsx)(E.Td,{children:(0,s.jsx)(l.Z,{fontWeight:"semiBold",textColor:"neutral800",children:e.name})}),(0,s.jsx)(E.Td,{children:(0,s.jsx)(l.Z,{textColor:"neutral800",children:e.url})}),(0,s.jsx)(E.Td,{children:(0,s.jsx)(k.k,{children:(0,s.jsx)(ts.r,{onLabel:a({id:"global.enabled",defaultMessage:"Enabled"}),offLabel:a({id:"global.disabled",defaultMessage:"Disabled"}),label:`${e.name} ${a({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"})}`,selected:e.isEnabled,onChange:i=>{i.stopPropagation(),gs.mutate({isEnabled:!e.isEnabled,id:e.id})},visibleLabels:!0})})}),(0,s.jsx)(E.Td,{children:(0,s.jsxs)(k.k,{gap:1,children:[Y&&(0,s.jsx)(z.h,{label:a({id:"Settings.webhooks.events.update",defaultMessage:"Update"}),icon:(0,s.jsx)(ns.Z,{}),noBorder:!0}),w&&(0,s.jsx)(z.h,{onClick:i=>{i.stopPropagation(),g([e.id]),C(!0)},label:a({id:"Settings.webhooks.events.delete",defaultMessage:"Delete webhook"}),icon:(0,s.jsx)(Q.Z,{}),noBorder:!0})]})})]},e.id))})]}):(0,s.jsx)(es.x,{icon:(0,s.jsx)(as.Z,{width:"160px"}),content:a({id:"Settings.webhooks.list.empty.description",defaultMessage:"No webhooks found"}),action:(0,s.jsx)(D.z,{variant:"secondary",startIcon:(0,s.jsx)(R.Z,{}),onClick:()=>y?b("create"):{},children:a({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"})})})})]}),(0,s.jsx)(n.QH,{isOpen:U,onToggleDialog:()=>C(e=>!e),onConfirm:Os,isConfirmButtonLoading:X.isLoading})]})},_s=()=>{const U=(0,_.v9)(h.s);return(0,s.jsx)(n.O4,{permissions:U.settings.webhooks.main,children:(0,s.jsx)(is,{})})}},37472:(B,M,t)=>{t.d(M,{Z:()=>_});var s=t(74081),n=t(10701);const _=({startActions:h,endActions:r})=>!h&&!r?null:(0,s.jsxs)(n.k,{justifyContent:"space-between",alignItems:"flex-start",paddingBottom:4,paddingLeft:10,paddingRight:10,children:[(0,s.jsx)(n.k,{gap:2,wrap:"wrap",children:h}),(0,s.jsx)(n.k,{gap:2,shrink:0,wrap:"wrap",children:r})]})},89053:(B,M,t)=>{t.d(M,{r:()=>m});var s=t(74081),n=t(27279),_=t(72450),h=t(10701),r=t(93415);const c=_.default.div`
  background: ${({theme:o})=>o.colors.danger500};
  border: none;
  border-radius: 16px;
  position: relative;
  height: ${24/16}rem;
  width: ${40/16}rem;

  & span {
    font-size: ${({visibleLabels:o})=>o?"1rem":0};
  }

  &:before {
    content: '';
    background: ${({theme:o})=>o.colors.neutral0};
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    position: absolute;
    transition: all 0.5s;
    left: ${({theme:o})=>o.spaces[1]};
    top: ${({theme:o})=>o.spaces[1]};
  }

  @media (prefers-reduced-motion: reduce) {
    &:before {
      transition: none;
    }
  }
`,P=_.default.button`
  background: transparent;
  padding: 0;
  border: none;

  &[aria-checked='true'] ${c} {
    background: ${({theme:o})=>o.colors.success500};
  }

  &[aria-checked='true'] ${c}:before {
    transform: translateX(1rem);
  }
`,m=n.forwardRef(({label:o,onChange:d,onLabel:l="On",offLabel:D="Off",selected:x,visibleLabels:T=!1,...W},A)=>(0,s.jsx)(P,{ref:A,role:"switch","aria-checked":x,"aria-label":o,onClick:d,visibleLabels:T,type:"button",...W,children:(0,s.jsxs)(h.k,{children:[(0,s.jsxs)(c,{children:[(0,s.jsx)("span",{children:l}),(0,s.jsx)("span",{children:D})]}),T&&(0,s.jsx)(r.x,{as:"span","aria-hidden":!0,paddingLeft:2,color:x?"success600":"danger600",children:x?l:D})]})}))},38566:(B,M,t)=>{t.d(M,{c:()=>o});var s=t(74081),n=t(72450),_=t(93415),h=t(84366),r=t(10701),c=t(32370);const P=(0,n.default)(_.x)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:d})=>d.colors.primary600};
  }
`,m=(0,n.default)(_.x)`
  border-radius: 0 0 ${({theme:d})=>d.borderRadius} ${({theme:d})=>d.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,o=({children:d,icon:l,...D})=>(0,s.jsxs)("div",{children:[(0,s.jsx)(h.i,{}),(0,s.jsx)(m,{as:"button",background:"primary100",padding:5,...D,children:(0,s.jsxs)(r.k,{children:[(0,s.jsx)(P,{"aria-hidden":!0,background:"primary200",children:l}),(0,s.jsx)(_.x,{paddingLeft:3,children:(0,s.jsx)(c.Z,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:d})})]})})]})}}]);
