function E(){}const at=t=>t;function ft(t,e){for(const n in e)t[n]=e[n];return t}function X(t){return t()}function K(){return Object.create(null)}function M(t){t.forEach(X)}function B(t){return typeof t=="function"}function Ft(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let D;function Ht(t,e){return D||(D=document.createElement("a")),D.href=e,t===D.href}function ut(t){return Object.keys(t).length===0}function It(t,e,n,i){if(t){const r=Y(t,e,n,i);return t[0](r)}}function Y(t,e,n,i){return t[1]&&i?ft(n.ctx.slice(),t[1](i(e))):n.ctx}function Gt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const c=[],s=Math.max(e.dirty.length,r.length);for(let l=0;l<s;l+=1)c[l]=e.dirty[l]|r[l];return c}return e.dirty|r}return e.dirty}function Jt(t,e,n,i,r,c){if(r){const s=Y(e,n,i,c);t.p(s,r)}}function Kt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Qt(t){return t??""}function Wt(t){return t&&B(t.destroy)?t.destroy:E}const Z=typeof window<"u";let _t=Z?()=>window.performance.now():()=>Date.now(),J=Z?t=>requestAnimationFrame(t):E;const b=new Set;function tt(t){b.forEach(e=>{e.c(t)||(b.delete(e),e.f())}),b.size!==0&&J(tt)}function dt(t){let e;return b.size===0&&J(tt),{promise:new Promise(n=>{b.add(e={c:t,f:n})}),abort(){b.delete(e)}}}let F=!1;function ht(){F=!0}function mt(){F=!1}function pt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function yt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let a=0;a<e.length;a++){const u=e[a];u.claim_order!==void 0&&o.push(u)}e=o}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let o=0;o<e.length;o++){const a=e[o].claim_order,u=(r>0&&e[n[r]].claim_order<=a?r+1:pt(1,r,_=>e[n[_]].claim_order,a))-1;i[o]=n[u]+1;const f=u+1;n[f]=o,r=Math.max(f,r)}const c=[],s=[];let l=e.length-1;for(let o=n[r]+1;o!=0;o=i[o-1]){for(c.push(e[o-1]);l>=o;l--)s.push(e[l]);l--}for(;l>=0;l--)s.push(e[l]);c.reverse(),s.sort((o,a)=>o.claim_order-a.claim_order);for(let o=0,a=0;o<s.length;o++){for(;a<c.length&&s[o].claim_order>=c[a].claim_order;)a++;const u=a<c.length?c[a]:null;t.insertBefore(s[o],u)}}function gt(t,e){t.appendChild(e)}function et(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function wt(t){const e=it("style");return xt(et(t),e),e.sheet}function xt(t,e){return gt(t.head||t,e),e.sheet}function $t(t,e){if(F){for(yt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Ut(t,e,n){F&&!n?$t(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function nt(t){t.parentNode&&t.parentNode.removeChild(t)}function Vt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function it(t){return document.createElement(t)}function vt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function rt(t){return document.createTextNode(t)}function Xt(){return rt(" ")}function Yt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function bt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Zt(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:bt(t,i,e[i])}function Et(t){return Array.from(t.childNodes)}function kt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function st(t,e,n,i,r=!1){kt(t);const c=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const l=t[s];if(e(l)){const o=n(l);return o===void 0?t.splice(s,1):t[s]=o,r||(t.claim_info.last_index=s),l}}for(let s=t.claim_info.last_index-1;s>=0;s--){const l=t[s];if(e(l)){const o=n(l);return o===void 0?t.splice(s,1):t[s]=o,r?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,l}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function ot(t,e,n,i){return st(t,r=>r.nodeName===e,r=>{const c=[];for(let s=0;s<r.attributes.length;s++){const l=r.attributes[s];n[l.name]||c.push(l.name)}c.forEach(s=>r.removeAttribute(s))},()=>i(e))}function te(t,e,n){return ot(t,e,n,it)}function ee(t,e,n){return ot(t,e,n,vt)}function Nt(t,e){return st(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>rt(e),!0)}function ne(t){return Nt(t," ")}function ie(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function re(t,e){t.value=e??""}function se(t,e,n){t.classList[n?"add":"remove"](e)}function St(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}const P=new Map;let R=0;function At(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function jt(t,e){const n={stylesheet:wt(e),rules:{}};return P.set(t,n),n}function Ct(t,e,n,i,r,c,s,l=0){const o=16.666/i;let a=`{
`;for(let p=0;p<=1;p+=o){const g=e+(n-e)*c(p);a+=p*100+`%{${s(g,1-g)}}
`}const u=a+`100% {${s(n,1-n)}}
}`,f=`__svelte_${At(u)}_${l}`,_=et(t),{stylesheet:h,rules:m}=P.get(_)||jt(_,t);m[f]||(m[f]=!0,h.insertRule(`@keyframes ${f} ${u}`,h.cssRules.length));const y=t.style.animation||"";return t.style.animation=`${y?`${y}, `:""}${f} ${i}ms linear ${r}ms 1 both`,R+=1,f}function Q(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?c=>c.indexOf(e)<0:c=>c.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),R-=r,R||Mt())}function Mt(){J(()=>{R||(P.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&nt(e)}),P.clear())})}let C;function j(t){C=t}function Ot(){if(!C)throw new Error("Function called outside component initialization");return C}function oe(t){Ot().$$.on_mount.push(t)}const A=[],W=[],q=[],U=[],Dt=Promise.resolve();let G=!1;function Tt(){G||(G=!0,Dt.then(ct))}function z(t){q.push(t)}const I=new Set;let T=0;function ct(){const t=C;do{for(;T<A.length;){const e=A[T];T++,j(e),qt(e.$$)}for(j(null),A.length=0,T=0;W.length;)W.pop()();for(let e=0;e<q.length;e+=1){const n=q[e];I.has(n)||(I.add(n),n())}q.length=0}while(A.length);for(;U.length;)U.pop()();G=!1,I.clear(),j(t)}function qt(t){if(t.fragment!==null){t.update(),M(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(z)}}let S;function Lt(){return S||(S=Promise.resolve(),S.then(()=>{S=null})),S}function V(t,e,n){t.dispatchEvent(St(`${e?"intro":"outro"}${n}`))}const L=new Set;let $;function ce(){$={r:0,c:[],p:$}}function le(){$.r||M($.c),$=$.p}function lt(t,e){t&&t.i&&(L.delete(t),t.i(e))}function ae(t,e,n,i){if(t&&t.o){if(L.has(t))return;L.add(t),$.c.push(()=>{L.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Pt={duration:0};function fe(t,e,n){const i={direction:"in"};let r=e(t,n,i),c=!1,s,l,o=0;function a(){s&&Q(t,s)}function u(){const{delay:_=0,duration:h=300,easing:m=at,tick:y=E,css:p}=r||Pt;p&&(s=Ct(t,0,1,h,_,m,p,o++)),y(0,1);const g=_t()+_,k=g+h;l&&l.abort(),c=!0,z(()=>V(t,!0,"start")),l=dt(v=>{if(c){if(v>=k)return y(1,0),V(t,!0,"end"),a(),c=!1;if(v>=g){const N=m((v-g)/h);y(N,1-N)}}return c})}let f=!1;return{start(){f||(f=!0,Q(t),B(r)?(r=r(i),Lt().then(u)):u())},invalidate(){f=!1},end(){c&&(a(),c=!1)}}}function ue(t,e){t.d(1),e.delete(t.key)}function _e(t,e,n,i,r,c,s,l,o,a,u,f){let _=t.length,h=c.length,m=_;const y={};for(;m--;)y[t[m].key]=m;const p=[],g=new Map,k=new Map;for(m=h;m--;){const d=f(r,c,m),w=n(d);let x=s.get(w);x?i&&x.p(d,e):(x=a(w,d),x.c()),g.set(w,p[m]=x),w in y&&k.set(w,Math.abs(m-y[w]))}const v=new Set,N=new Set;function H(d){lt(d,1),d.m(l,u),s.set(d.key,d),u=d.first,h--}for(;_&&h;){const d=p[h-1],w=t[_-1],x=d.key,O=w.key;d===w?(u=d.first,_--,h--):g.has(O)?!s.has(x)||v.has(x)?H(d):N.has(O)?_--:k.get(x)>k.get(O)?(N.add(x),H(d)):(v.add(O),_--):(o(w,s),_--)}for(;_--;){const d=t[_];g.has(d.key)||o(d,s)}for(;h;)H(p[h-1]);return p}function de(t,e){const n={},i={},r={$$scope:1};let c=t.length;for(;c--;){const s=t[c],l=e[c];if(l){for(const o in s)o in l||(i[o]=1);for(const o in l)r[o]||(n[o]=l[o],r[o]=1);t[c]=l}else for(const o in s)r[o]=1}for(const s in i)s in n||(n[s]=void 0);return n}function he(t){t&&t.c()}function me(t,e){t&&t.l(e)}function Rt(t,e,n,i){const{fragment:r,after_update:c}=t.$$;r&&r.m(e,n),i||z(()=>{const s=t.$$.on_mount.map(X).filter(B);t.$$.on_destroy?t.$$.on_destroy.push(...s):M(s),t.$$.on_mount=[]}),c.forEach(z)}function zt(t,e){const n=t.$$;n.fragment!==null&&(M(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Bt(t,e){t.$$.dirty[0]===-1&&(A.push(t),Tt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function pe(t,e,n,i,r,c,s,l=[-1]){const o=C;j(t);const a=t.$$={fragment:null,ctx:[],props:c,update:E,not_equal:r,bound:K(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:K(),dirty:l,skip_bound:!1,root:e.target||o.$$.root};s&&s(a.root);let u=!1;if(a.ctx=n?n(t,e.props||{},(f,_,...h)=>{const m=h.length?h[0]:_;return a.ctx&&r(a.ctx[f],a.ctx[f]=m)&&(!a.skip_bound&&a.bound[f]&&a.bound[f](m),u&&Bt(t,f)),_}):[],a.update(),u=!0,M(a.before_update),a.fragment=i?i(a.ctx):!1,e.target){if(e.hydrate){ht();const f=Et(e.target);a.fragment&&a.fragment.l(f),f.forEach(nt)}else a.fragment&&a.fragment.c();e.intro&&lt(t.$$.fragment),Rt(t,e.target,e.anchor,e.customElement),mt(),ct()}j(o)}class ye{$destroy(){zt(this,1),this.$destroy=E}$on(e,n){if(!B(n))return E;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!ut(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Vt as A,ue as B,W as C,vt as D,ee as E,lt as F,le as G,ae as H,he as I,me as J,Rt as K,zt as L,z as M,fe as N,ce as O,It as P,Wt as Q,Jt as R,ye as S,Kt as T,Gt as U,Xt as a,Et as b,te as c,ne as d,it as e,Nt as f,nt as g,bt as h,pe as i,Ht as j,se as k,Ut as l,$t as m,re as n,Yt as o,ie as p,E as q,M as r,Ft as s,rt as t,_e as u,oe as v,ft as w,Zt as x,Qt as y,de as z};
