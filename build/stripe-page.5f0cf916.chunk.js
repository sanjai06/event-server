"use strict";(self.webpackChunkevent_server=self.webpackChunkevent_server||[]).push([[1092],{65713:(L,v,a)=>{const e=a(74081),p=C=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...C,children:e.jsx("path",{fill:"#212134",d:"M20.727 2.97a.2.2 0 0 1 .286 0l2.85 2.89a.2.2 0 0 1 0 .28L9.554 20.854a.2.2 0 0 1-.285 0l-9.13-9.243a.2.2 0 0 1 0-.281l2.85-2.892a.2.2 0 0 1 .284 0l6.14 6.209L20.726 2.97Z"})}),d=p;L.exports=d},8802:(L,v,a)=>{a.r(v),a.d(v,{default:()=>$});var e=a(74081),p=a(27279),d=a(12146),C=a(65713),U=a.n(C),y=a(73354),m=a(27875),k=a(48102),o=a(74758),c=a(93415),t=a(95857),s=a(32370),n=a(23298),r=a(74577),h=a(10701),g=a(89053),x=a(12881),j=a(63738);const D=[{label:"USD - US Dollar",value:"USD"},{label:"AUD - Australian Dollar",value:"AUD"},{label:"BRL - Brazilian Real",value:"BRL"},{label:"CAD - Canadian Dollar",value:"CAD"},{label:"CNY - Chinese Renmenbi",value:"CNY"},{label:"CZK - Czech koruna",value:"CZK"},{label:"DKK - Danish krone",value:"DKK"},{label:"EUR - Euro",value:"EUR"},{label:"HKD - Hong Kong Dollar",value:"HKD"},{label:"HUF - Hungarian Forint",value:"HUF"},{label:"ILS - Israeli New Sheqel",value:"ILS"},{label:"JPY - Japanese Yen",value:"JPY"},{label:"MYR - Malaysian Ringgit",value:"MYR"},{label:"MXN - Mexican Peso",value:"MXN"},{label:"TWD - New Taiwan Dollar",value:"TWD"},{label:"NZD - New Zealand Dollar",value:"NZD"},{label:"NOK - Norwegian Krone",value:"NOK"},{label:"PHP - Philippine Peso",value:"PHP"},{label:"PLN - Polish Zloty",value:"PLN"},{label:"GBP - Pound Sterling",value:"GBP"},{label:"RUB - Russian Ruble",value:"RUB"},{label:"SGD - Singapore Dollar",value:"SGD"},{label:"SEK - Swedish Krona",value:"SEK"},{label:"CHF - Swiss Franc",value:"CHF"},{label:"THB - Thai Baht",value:"THB"}];var M=a(25974);const I=process.env.STRAPI_ADMIN_API_TOKEN,K=()=>{const[l,b]=(0,p.useState)({isLiveMode:!1,checkoutSuccessUrl:"",checkoutCancelUrl:"",currency:void 0,callbackUrl:""}),[w,E]=(0,p.useState)(!1),[A,S]=(0,p.useState)(!1),[i,P]=(0,p.useState)({checkoutSuccessUrl:"",checkoutCancelUrl:"",currency:""});(0,p.useEffect)(()=>{(async()=>{const u=await(0,M.eQ)(I);if(u.data?.response){const{isLiveMode:f,checkoutSuccessUrl:B,checkoutCancelUrl:H,currency:Z,callbackUrl:F}=u.data.response;b({...l,isLiveMode:f,checkoutSuccessUrl:B,checkoutCancelUrl:H,currency:Z,callbackUrl:F})}})()},[]);const N=u=>{b({...l,currency:u}),P({...i,currency:""})},R=u=>{const{name:f,value:B}=u.target;b({...l,[f]:B}),f==="checkoutSuccessUrl"?P({...i,checkoutSuccessUrl:""}):f==="checkoutCancelUrl"&&P({...i,checkoutCancelUrl:""})},O=async()=>{S(!0),!l.checkoutSuccessUrl&&!l.checkoutCancelUrl&&!l.currency?(P({...i,checkoutSuccessUrl:"Checkout Success Page URL is required",checkoutCancelUrl:"Checkout Cancel Page URL is required",currency:"Currency is required"}),S(!1)):l.checkoutSuccessUrl?l.checkoutCancelUrl?l.currency?((await(0,M.ij)(l,I)).data.ok&&E(!0),S(!1)):(P({...i,currency:"Currency is required"}),S(!1)):(P({...i,checkoutCancelUrl:"Checkout Cancel Page URL is required"}),S(!1)):(P({...i,checkoutSuccessUrl:"Checkout Success Page URL is required"}),S(!1))};return(0,e.jsxs)(y.o,{children:[(0,e.jsx)(d.SL,{name:"Paypal"}),(0,e.jsx)(m.T,{title:"Paypal Configuration",primaryAction:(0,e.jsx)(k.z,{type:"submit",loading:A,onClick:O,startIcon:(0,e.jsx)(U(),{}),size:"L",children:"Save"})}),(0,e.jsxs)(o.D,{children:[(0,e.jsx)(c.x,{paddingBottom:2,children:w?(0,e.jsx)(t.b,{closeLabel:"Close alert",title:"Stripe configuration",variant:"success",onClose:()=>{E(!1)},children:"saved successfully."}):""}),(0,e.jsxs)(c.x,{shadow:"tableShadow",background:"neutral0",paddingTop:6,paddingLeft:7,paddingRight:7,paddingBottom:6,hasRadius:!0,children:[(0,e.jsx)(c.x,{paddingBottom:2,children:(0,e.jsx)(s.Z,{variant:"delta",children:"Global Setting"})}),(0,e.jsx)(c.x,{paddingTop:2,children:(0,e.jsx)(n.r,{gap:4,children:(0,e.jsx)(r.P,{col:12,s:12,children:(0,e.jsx)(c.x,{paddingTop:3,children:(0,e.jsxs)(h.k,{alignItems:"center",children:[(0,e.jsx)(c.x,{paddingRight:4,children:(0,e.jsx)(s.Z,{variant:"delta",children:"Live Mode"})}),(0,e.jsx)(g.r,{label:"Live Mode",visibleLabels:!0,offLabel:"Paypal is in sandbox mode",onLabel:"Paypal is ready to accept payment",selected:l.isLiveMode,onChange:()=>{b({...l,isLiveMode:!l.isLiveMode})}})]})})})})}),(0,e.jsx)(c.x,{paddingTop:2,children:(0,e.jsxs)(n.r,{gap:4,children:[(0,e.jsx)(r.P,{col:6,s:12,children:(0,e.jsx)(c.x,{paddingTop:2,paddingBottom:2,children:(0,e.jsx)(x.o,{name:"checkoutSuccessUrl",label:"Payment Success Page URL",required:!0,value:l.checkoutSuccessUrl,error:i.checkoutSuccessUrl?i.checkoutSuccessUrl:"",onChange:R,hint:"Redirects to the success page after the  payment successful"})})}),(0,e.jsx)(r.P,{col:6,s:12,children:(0,e.jsx)(c.x,{paddingTop:2,paddingBottom:2,children:(0,e.jsx)(x.o,{name:"checkoutCancelUrl",label:"Payment Cancel Page URL",required:!0,value:l.checkoutCancelUrl,error:i.checkoutCancelUrl?i.checkoutCancelUrl:"",onChange:R,hint:"Redirects to the cancel page after the  payment failed"})})}),(0,e.jsx)(r.P,{col:6,s:12,children:(0,e.jsx)(c.x,{paddingBottom:2,children:(0,e.jsx)(j.q4,{id:"select1",label:"Choose Currency",required:!0,placeholder:"Choose Currency",clearLabel:"Clear the Currency",error:i.currency?i.currency:"",onClear:()=>b({...l,currency:void 0}),onChange:u=>N(u),value:l.currency,children:D&&D.map((u,f)=>(0,e.jsx)(j.ag,{value:u.value,children:u.label},f))})})}),(0,e.jsx)(r.P,{col:6,s:12,children:(0,e.jsx)(c.x,{paddingBottom:2,children:(0,e.jsx)(x.o,{name:"callbackUrl",label:"Webhook URL",value:l.callbackUrl,onChange:R,hint:"The response from Paypal will be posted to this URL."})})})]})})]}),(0,e.jsx)("br",{}),(0,e.jsx)(c.x,{shadow:"tableShadow",background:"neutral0",paddingTop:6,paddingLeft:7,paddingRight:7,paddingBottom:6,hasRadius:!0,children:(0,e.jsx)(c.x,{paddingTop:2,children:(0,e.jsx)(n.r,{gap:4,children:(0,e.jsx)(r.P,{col:6,s:12,children:(0,e.jsx)(s.Z,{variant:"pi",children:"Need help? Contact us at : support@asyncweb.io"})})})})})]})]})},$=()=>(0,e.jsx)(K,{})},25974:(L,v,a)=>{a.d(v,{bK:()=>y,eQ:()=>U,md:()=>m,ij:()=>C});var e=a(5466);const d=t=>{const s=e.default.create({baseURL:""});return s.interceptors.request.use(async n=>(n.headers={Accept:"application/json","Content-Type":"application/json"},n.headers.Authorization=`Bearer ${t}`,n),n=>{Promise.reject(n)}),s.interceptors.response.use(n=>n,n=>{throw n.response?.status===401&&window.location.reload(),n}),s};async function C(t,s){return await d(s).put("/strapi-paypal/updateSettings",{data:t})}async function U(t){return await d(t).get("/strapi-paypal/getSettings")}async function y(t,s,n,r,h,g,x,j){return await d(j).post("/strapi-paypal/createProduct",{title:t,price:s,description:n,isSubscription:r,paymentInterval:h,trialPeriodDays:g,productType:x})}async function m(t,s,n,r,h){return await d(h).get(`/strapi-paypal/getProduct/${t}/${s}/${n}/${r}`)}async function k(t,s){return await createInstance(s).get(`/strapi-paypal/getProduct/${t}`)}async function o(t,s,n,r,h,g,x){return await createInstance(x).put(`/strapi-paypal/updateProduct/${t}`,{title:s,url:n,description:r,productImage:h,stripeProductId:g})}async function c(t,s,n,r,h,g){return await createInstance(g).get(`/strapi-paypal/getPayments/${t}/${s}/${n}/${r}/${h}`)}},89053:(L,v,a)=>{a.d(v,{r:()=>k});var e=a(74081),p=a(27279),d=a(72450),C=a(10701),U=a(93415);const y=d.default.div`
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
`,m=d.default.button`
  background: transparent;
  padding: 0;
  border: none;

  &[aria-checked='true'] ${y} {
    background: ${({theme:o})=>o.colors.success500};
  }

  &[aria-checked='true'] ${y}:before {
    transform: translateX(1rem);
  }
`,k=p.forwardRef(({label:o,onChange:c,onLabel:t="On",offLabel:s="Off",selected:n,visibleLabels:r=!1,...h},g)=>(0,e.jsx)(m,{ref:g,role:"switch","aria-checked":n,"aria-label":o,onClick:c,visibleLabels:r,type:"button",...h,children:(0,e.jsxs)(C.k,{children:[(0,e.jsxs)(y,{children:[(0,e.jsx)("span",{children:t}),(0,e.jsx)("span",{children:s})]}),r&&(0,e.jsx)(U.x,{as:"span","aria-hidden":!0,paddingLeft:2,color:n?"success600":"danger600",children:n?t:s})]})}))}}]);
