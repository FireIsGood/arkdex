function d(){}function D(t,e){for(const n in e)t[n]=e[n];return t}function L(t){return t()}function q(){return Object.create(null)}function $(t){t.forEach(L)}function M(t){return typeof t=="function"}function H(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let b;function st(t,e){return b||(b=document.createElement("a")),b.href=e,t===b.href}function I(t){return Object.keys(t).length===0}function P(t,...e){if(t==null)return d;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ft(t,e,n){t.$$.on_destroy.push(P(e,n))}function ot(t,e,n,i){if(t){const r=T(t,e,n,i);return t[0](r)}}function T(t,e,n,i){return t[1]&&i?D(n.ctx.slice(),t[1](i(e))):n.ctx}function at(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const f=[],l=Math.max(e.dirty.length,r.length);for(let s=0;s<l;s+=1)f[s]=e.dirty[s]|r[s];return f}return e.dirty|r}return e.dirty}function dt(t,e,n,i,r,f){if(r){const l=T(e,n,i,f);t.p(l,r)}}function _t(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}let w=!1;function W(){w=!0}function F(){w=!1}function G(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function J(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const u=[];for(let c=0;c<e.length;c++){const a=e[c];a.claim_order!==void 0&&u.push(a)}e=u}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let u=0;u<e.length;u++){const c=e[u].claim_order,a=(r>0&&e[n[r]].claim_order<=c?r+1:G(1,r,p=>e[n[p]].claim_order,c))-1;i[u]=n[a]+1;const o=a+1;n[o]=u,r=Math.max(o,r)}const f=[],l=[];let s=e.length-1;for(let u=n[r]+1;u!=0;u=i[u-1]){for(f.push(e[u-1]);s>=u;s--)l.push(e[s]);s--}for(;s>=0;s--)l.push(e[s]);f.reverse(),l.sort((u,c)=>u.claim_order-c.claim_order);for(let u=0,c=0;u<l.length;u++){for(;c<f.length&&l[u].claim_order>=f[c].claim_order;)c++;const a=c<f.length?f[c]:null;t.insertBefore(l[u],a)}}function K(t,e){if(w){for(J(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function ht(t,e,n){w&&!n?K(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function Q(t){t.parentNode.removeChild(t)}function R(t){return document.createElement(t)}function z(t){return document.createTextNode(t)}function mt(){return z(" ")}function pt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function bt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function V(t){return Array.from(t.childNodes)}function X(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function B(t,e,n,i,r=!1){X(t);const f=(()=>{for(let l=t.claim_info.last_index;l<t.length;l++){const s=t[l];if(e(s)){const u=n(s);return u===void 0?t.splice(l,1):t[l]=u,r||(t.claim_info.last_index=l),s}}for(let l=t.claim_info.last_index-1;l>=0;l--){const s=t[l];if(e(s)){const u=n(s);return u===void 0?t.splice(l,1):t[l]=u,r?u===void 0&&t.claim_info.last_index--:t.claim_info.last_index=l,s}}return i()})();return f.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,f}function Y(t,e,n,i){return B(t,r=>r.nodeName===e,r=>{const f=[];for(let l=0;l<r.attributes.length;l++){const s=r.attributes[l];n[s.name]||f.push(s.name)}f.forEach(l=>r.removeAttribute(l))},()=>i(e))}function yt(t,e,n){return Y(t,e,n,R)}function Z(t,e){return B(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>z(e),!0)}function gt(t){return Z(t," ")}function xt(t,e){t.value=e??""}function $t(t,e,n){t.classList[n?"add":"remove"](e)}let N;function m(t){N=t}const h=[],C=[],g=[],k=[],U=Promise.resolve();let S=!1;function tt(){S||(S=!0,U.then(O))}function v(t){g.push(t)}const E=new Set;let y=0;function O(){const t=N;do{for(;y<h.length;){const e=h[y];y++,m(e),et(e.$$)}for(m(null),h.length=0,y=0;C.length;)C.pop()();for(let e=0;e<g.length;e+=1){const n=g[e];E.has(n)||(E.add(n),n())}g.length=0}while(h.length);for(;k.length;)k.pop()();S=!1,E.clear(),m(t)}function et(t){if(t.fragment!==null){t.update(),$(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(v)}}const x=new Set;let nt;function it(t,e){t&&t.i&&(x.delete(t),t.i(e))}function wt(t,e,n,i){if(t&&t.o){if(x.has(t))return;x.add(t),nt.c.push(()=>{x.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function rt(t,e,n,i){const{fragment:r,after_update:f}=t.$$;r&&r.m(e,n),i||v(()=>{const l=t.$$.on_mount.map(L).filter(M);t.$$.on_destroy?t.$$.on_destroy.push(...l):$(l),t.$$.on_mount=[]}),f.forEach(v)}function ct(t,e){const n=t.$$;n.fragment!==null&&($(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function lt(t,e){t.$$.dirty[0]===-1&&(h.push(t),tt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Et(t,e,n,i,r,f,l,s=[-1]){const u=N;m(t);const c=t.$$={fragment:null,ctx:[],props:f,update:d,not_equal:r,bound:q(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:q(),dirty:s,skip_bound:!1,root:e.target||u.$$.root};l&&l(c.root);let a=!1;if(c.ctx=n?n(t,e.props||{},(o,p,...A)=>{const j=A.length?A[0]:p;return c.ctx&&r(c.ctx[o],c.ctx[o]=j)&&(!c.skip_bound&&c.bound[o]&&c.bound[o](j),a&&lt(t,o)),p}):[],c.update(),a=!0,$(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){W();const o=V(e.target);c.fragment&&c.fragment.l(o),o.forEach(Q)}else c.fragment&&c.fragment.c();e.intro&&it(t.$$.fragment),rt(t,e.target,e.anchor,e.customElement),F(),O()}m(u)}class St{$destroy(){ct(this,1),this.$destroy=d}$on(e,n){if(!M(n))return d;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!I(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const _=[];function ut(t,e=d){let n;const i=new Set;function r(s){if(H(t,s)&&(t=s,n)){const u=!_.length;for(const c of i)c[1](),_.push(c,t);if(u){for(let c=0;c<_.length;c+=2)_[c][0](_[c+1]);_.length=0}}}function f(s){r(s(t))}function l(s,u=d){const c=[s,u];return i.add(c),i.size===1&&(n=e(r)||d),s(t),()=>{i.delete(c),i.size===0&&(n(),n=null)}}return{set:r,update:f,subscribe:l}}const vt=ut("");function Nt(t){return t.replace(/[^\w(-)]+/g,"").toLowerCase()}export{wt as A,St as S,mt as a,V as b,yt as c,gt as d,R as e,Q as f,bt as g,st as h,Et as i,ht as j,K as k,xt as l,pt as m,d as n,ft as o,vt as p,C as q,$ as r,H as s,$t as t,Nt as u,ot as v,dt as w,_t as x,at as y,it as z};