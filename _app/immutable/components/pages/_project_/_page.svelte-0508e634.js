import{S as F,i as O,s as Q,C as J,D as K,m as k,h as m,n as h,b as A,E as f,B as I,e as M,t as y,d as U,f as C,J as W,g as X,k as E,q as V,l as L,r as z,w as Y,a as D,x,c as H,y as $,u as T,z as ee,K as te}from"../../../chunks/index-8eabeaf3.js";import{p as le}from"../../../chunks/stores-5abbd0b8.js";import{p as q}from"../../../chunks/project_data-7226c937.js";function ae(r){let e,t;return{c(){e=J("svg"),t=J("path"),this.h()},l(l){e=K(l,"svg",{viewBox:!0,width:!0,height:!0});var a=k(e);t=K(a,"path",{d:!0,fill:!0}),k(t).forEach(m),a.forEach(m),this.h()},h(){h(t,"d","M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"),h(t,"fill",r[2]),h(e,"viewBox",r[3]),h(e,"width",r[0]),h(e,"height",r[1])},m(l,a){A(l,e,a),f(e,t)},p(l,[a]){a&4&&h(t,"fill",l[2]),a&8&&h(e,"viewBox",l[3]),a&1&&h(e,"width",l[0]),a&2&&h(e,"height",l[1])},i:I,o:I,d(l){l&&m(e)}}}function re(r,e,t){let{size:l="1em"}=e,{width:a=l}=e,{height:d=l}=e,{color:n="currentColor"}=e,{viewBox:v="0 0 24 24"}=e;return r.$$set=i=>{"size"in i&&t(4,l=i.size),"width"in i&&t(0,a=i.width),"height"in i&&t(1,d=i.height),"color"in i&&t(2,n=i.color),"viewBox"in i&&t(3,v=i.viewBox)},[a,d,n,v,l]}class ie extends F{constructor(e){super(),O(this,e,re,ae,Q,{size:4,width:0,height:1,color:2,viewBox:3})}}function N(r,e,t){const l=r.slice();return l[3]=e[t],l}function se(r){let e,t;return{c(){e=E("h1"),t=V("Project not found")},l(l){e=L(l,"H1",{});var a=k(e);t=z(a,"Project not found"),a.forEach(m)},m(l,a){A(l,e,a),f(e,t)},p:I,i:I,o:I,d(l){l&&m(e)}}}function oe(r){let e,t,l,a,d,n=r[1].name+"",v,i,s,u,_,P;l=new ie({});let j=q,p=[];for(let c=0;c<j.length;c+=1)p[c]=Z(N(r,j,c));return{c(){e=E("div"),t=E("a"),Y(l.$$.fragment),a=D(),d=E("p"),v=V(n),i=D(),s=E("hr"),u=D(),_=E("div");for(let c=0;c<p.length;c+=1)p[c].c();this.h()},l(c){e=L(c,"DIV",{class:!0});var b=k(e);t=L(b,"A",{href:!0,class:!0});var o=k(t);x(l.$$.fragment,o),a=H(o),d=L(o,"P",{});var g=k(d);v=z(g,n),g.forEach(m),o.forEach(m),i=H(b),s=L(b,"HR",{class:!0}),u=H(b),_=L(b,"DIV",{class:!0});var w=k(_);for(let B=0;B<p.length;B+=1)p[B].l(w);w.forEach(m),b.forEach(m),this.h()},h(){h(t,"href","/"),h(t,"class","h-6 flex items-center gap-2"),h(s,"class","border-dashed !my-2"),h(_,"class","relative"),h(e,"class","md:flex flex-col space-y-2 md:space-y-0")},m(c,b){A(c,e,b),f(e,t),$(l,t,null),f(t,a),f(t,d),f(d,v),f(e,i),f(e,s),f(e,u),f(e,_);for(let o=0;o<p.length;o+=1)p[o].m(_,null);P=!0},p(c,b){if((!P||b&2)&&n!==(n=c[1].name+"")&&T(v,n),b&1){j=q;let o;for(o=0;o<j.length;o+=1){const g=N(c,j,o);p[o]?p[o].p(g,b):(p[o]=Z(g),p[o].c(),p[o].m(_,null))}for(;o<p.length;o+=1)p[o].d(1);p.length=j.length}},i(c){P||(C(l.$$.fragment,c),P=!0)},o(c){y(l.$$.fragment,c),P=!1},d(c){c&&m(e),ee(l),te(p,c)}}}function R(r){let e,t,l,a,d,n,v,i=r[3].date+"",s,u,_,P=r[3].description+"",j,p,c,b=r[3].live&&ne(r),o=r[3].github&&ce(r);return{c(){e=E("div"),t=E("div"),l=V(r[0]),a=D(),b&&b.c(),d=D(),o&&o.c(),n=D(),v=E("p"),s=V(i),u=D(),_=E("p"),j=V(P),p=D(),c=E("div"),this.h()},l(g){e=L(g,"DIV",{class:!0});var w=k(e);t=L(w,"DIV",{class:!0});var B=k(t);l=z(B,r[0]),a=H(B),b&&b.l(B),d=H(B),o&&o.l(B),n=H(B),v=L(B,"P",{class:!0});var G=k(v);s=z(G,i),G.forEach(m),B.forEach(m),u=H(w),_=L(w,"P",{class:!0});var S=k(_);j=z(S,P),S.forEach(m),p=H(w),c=L(w,"DIV",{class:!0}),k(c).forEach(m),w.forEach(m),this.h()},h(){h(v,"class","ml-auto"),h(t,"class","flex gap-2"),h(_,"class","normal-case"),h(c,"class","mt-auto"),h(e,"class","md:w-10/12 md:absolute left-[16.66667%] -top-2 bottom-0 box-border md:border-l border-dashed md:p-2 h-full flex flex-col")},m(g,w){A(g,e,w),f(e,t),f(t,l),f(t,a),b&&b.m(t,null),f(t,d),o&&o.m(t,null),f(t,n),f(t,v),f(v,s),f(e,u),f(e,_),f(_,j),f(e,p),f(e,c)},p(g,w){w&1&&T(l,g[0]),g[3].live&&b.p(g,w),g[3].github&&o.p(g,w)},d(g){g&&m(e),b&&b.d(),o&&o.d()}}}function ne(r){let e,t;return{c(){e=E("a"),t=V("Live"),this.h()},l(l){e=L(l,"A",{class:!0,href:!0});var a=k(e);t=z(a,"Live"),a.forEach(m),this.h()},h(){h(e,"class","bg-white text-black"),h(e,"href",r[3].live)},m(l,a){A(l,e,a),f(e,t)},p:I,d(l){l&&m(e)}}}function ce(r){let e,t;return{c(){e=E("a"),t=V("GitHub"),this.h()},l(l){e=L(l,"A",{class:!0,href:!0});var a=k(e);t=z(a,"GitHub"),a.forEach(m),this.h()},h(){h(e,"class","bg-white text-black"),h(e,"href",r[3].github)},m(l,a){A(l,e,a),f(e,t)},p:I,d(l){l&&m(e)}}}function Z(r){let e,t,l=r[3].name+"",a,d,n,v,i,s=r[3].name===r[0]&&R(r);return{c(){e=E("a"),t=E("p"),a=V(l),n=D(),s&&s.c(),v=D(),this.h()},l(u){e=L(u,"A",{href:!0,class:!0});var _=k(e);t=L(_,"P",{class:!0});var P=k(t);a=z(P,l),P.forEach(m),n=H(_),s&&s.l(_),v=H(_),_.forEach(m),this.h()},h(){h(t,"class",d="hidden md:block hover:bg-white hover:text-black w-2/12 text-blue-500 cursor-pointer "+(r[3].name===r[0]?"bg-white text-black":"")),h(e,"href",i=r[3].name===r[0]?"/":`${r[3].name}`),h(e,"class","flex transition-colors duration-75 cursor-default")},m(u,_){A(u,e,_),f(e,t),f(t,a),f(e,n),s&&s.m(e,null),f(e,v)},p(u,_){_&1&&d!==(d="hidden md:block hover:bg-white hover:text-black w-2/12 text-blue-500 cursor-pointer "+(u[3].name===u[0]?"bg-white text-black":""))&&h(t,"class",d),u[3].name===u[0]?s?s.p(u,_):(s=R(u),s.c(),s.m(e,v)):s&&(s.d(1),s=null),_&1&&i!==(i=u[3].name===u[0]?"/":`${u[3].name}`)&&h(e,"href",i)},d(u){u&&m(e),s&&s.d()}}}function fe(r){let e,t,l,a;const d=[oe,se],n=[];function v(i,s){return i[1]?0:1}return e=v(r),t=n[e]=d[e](r),{c(){t.c(),l=M()},l(i){t.l(i),l=M()},m(i,s){n[e].m(i,s),A(i,l,s),a=!0},p(i,[s]){let u=e;e=v(i),e===u?n[e].p(i,s):(X(),y(n[u],1,1,()=>{n[u]=null}),U(),t=n[e],t?t.p(i,s):(t=n[e]=d[e](i),t.c()),C(t,1),t.m(l.parentNode,l))},i(i){a||(C(t),a=!0)},o(i){y(t),a=!1},d(i){n[e].d(i),i&&m(l)}}}function he(r,e,t){let l,a,d;return W(r,le,n=>t(2,d=n)),r.$$.update=()=>{r.$$.dirty&4&&t(0,l=d.params.project),r.$$.dirty&1&&t(1,a=q.find(n=>n.name===l))},[l,a,d]}class me extends F{constructor(e){super(),O(this,e,he,fe,Q,{})}}export{me as default};
