import{S as C,i as L,s as T,P as Z,e as k,D as w,a as j,c as E,b as _,E as b,g as f,d as y,h as o,k as N,l as m,m as $,o as B,Q as D,R as M,T as O,U as S,F as U,H as V,r as q}from"./chunks/index.e2928994.js";/* empty css                              */function F(a){const t=s=>{a.contains(s.target)||a.dispatchEvent(new CustomEvent("outclick"))};return document.addEventListener("click",t,!0),{destroy(){document.removeEventListener("click",t,!0)}}}function H(a){let t,s,c,u,l,r,h,d;const v=a[2].default,i=Z(v,a,a[1],null);return{c(){t=k("button"),s=w("svg"),c=w("path"),u=j(),l=k("div"),i&&i.c(),this.h()},l(e){t=E(e,"BUTTON",{"aria-label":!0,"aria-selected":!0,class:!0});var n=_(t);s=b(n,"svg",{xmlns:!0,height:!0,width:!0,viewBox:!0,fill:!0});var p=_(s);c=b(p,"path",{d:!0}),_(c).forEach(f),p.forEach(f),n.forEach(f),u=y(e),l=E(e,"DIV",{class:!0});var g=_(l);i&&i.l(g),g.forEach(f),this.h()},h(){o(c,"d","M6 36v-3h36v3Zm0-10.5v-3h36v3ZM6 15v-3h36v3Z"),o(s,"xmlns","http://www.w3.org/2000/svg"),o(s,"height","36"),o(s,"width","36"),o(s,"viewBox","0 0 48 48"),o(s,"fill","white"),o(t,"aria-label","View Navigation"),o(t,"aria-selected",a[0]),o(t,"class","svelte-ejghnk"),o(l,"class","slot svelte-ejghnk"),N(l,"hide",!a[0])},m(e,n){m(e,t,n),$(t,s),$(s,c),m(e,u,n),m(e,l,n),i&&i.m(l,null),r=!0,h||(d=[B(t,"click",a[3]),D(F.call(null,t)),B(t,"outclick",a[4])],h=!0)},p(e,[n]){(!r||n&1)&&o(t,"aria-selected",e[0]),i&&i.p&&(!r||n&2)&&M(i,v,e,e[1],r?S(v,e[1],n,null):O(e[1]),null),(!r||n&1)&&N(l,"hide",!e[0])},i(e){r||(U(i,e),r=!0)},o(e){V(i,e),r=!1},d(e){e&&f(t),e&&f(u),e&&f(l),i&&i.d(e),h=!1,q(d)}}}function I(a,t,s){let{$$slots:c={},$$scope:u}=t,l=!1;const r=()=>s(0,l=!l),h=()=>s(0,l=!1);return a.$$set=d=>{"$$scope"in d&&s(1,u=d.$$scope)},[l,u,c,r,h]}class R extends C{constructor(t){super(),L(this,t,I,H,T,{})}}export{R as default};
