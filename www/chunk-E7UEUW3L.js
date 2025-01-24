import{b as N,d as O,f as k}from"./chunk-QCCNCSFP.js";import"./chunk-F7XBNY6P.js";import{a as p,e as T,f as I,h as _}from"./chunk-BQEIKGZW.js";import{b as F,c as H}from"./chunk-J6ICYO4L.js";import{a as S,b as A}from"./chunk-LF5XB4YN.js";import{f as w}from"./chunk-RW4GY4BD.js";var C=new WeakMap,P=(e,o,t,s=0,i=!1)=>{C.has(e)!==t&&(t?W(e,o,s,i):z(e,o))},G=e=>e===e.getRootNode().activeElement,W=(e,o,t,s=!1)=>{let i=o.parentNode,r=o.cloneNode(!1);r.classList.add("cloned-input"),r.tabIndex=-1,s&&(r.disabled=!0),i.appendChild(r),C.set(e,r);let a=e.ownerDocument.dir==="rtl"?9999:-9999;e.style.pointerEvents="none",o.style.transform=`translate3d(${a}px,${t}px,0) scale(0)`},z=(e,o)=>{let t=C.get(e);t&&(C.delete(e),t.remove()),e.style.pointerEvents="",o.style.transform=""},q=50,j=(e,o,t)=>{if(!t||!o)return()=>{};let s=a=>{G(o)&&P(e,o,a)},i=()=>P(e,o,!1),r=()=>s(!0),c=()=>s(!1);return T(t,"ionScrollStart",r),T(t,"ionScrollEnd",c),o.addEventListener("blur",i),()=>{I(t,"ionScrollStart",r),I(t,"ionScrollEnd",c),o.removeEventListener("blur",i)}},B="input, textarea, [no-blur], [contenteditable]",J=()=>{let e=!0,o=!1,t=document,s=()=>{o=!0},i=()=>{e=!0},r=c=>{if(o){o=!1;return}let a=t.activeElement;if(!a||a.matches(B))return;let f=c.target;f!==a&&(f.matches(B)||f.closest(B)||(e=!1,setTimeout(()=>{e||a.blur()},50)))};return T(t,"ionScrollStart",s),t.addEventListener("focusin",i,!0),t.addEventListener("touchend",r,!1),()=>{I(t,"ionScrollStart",s,!0),t.removeEventListener("focusin",i,!0),t.removeEventListener("touchend",r,!1)}},Q=.3,V=(e,o,t,s)=>{var i;let r=(i=e.closest("ion-item,[ion-item]"))!==null&&i!==void 0?i:e;return X(r.getBoundingClientRect(),o.getBoundingClientRect(),t,s)},X=(e,o,t,s)=>{let i=e.top,r=e.bottom,c=o.top,a=Math.min(o.bottom,s-t),f=c+15,l=a-q-r,d=f-i,m=Math.round(l<0?-l:d>0?-d:0),v=Math.min(m,i-c),n=Math.abs(v)/Q,y=Math.min(400,Math.max(150,n));return{scrollAmount:v,scrollDuration:y,scrollPadding:t,inputSafeY:-(i-f)+4}},U="$ionPaddingTimer",K=(e,o,t)=>{let s=e[U];s&&clearTimeout(s),o>0?e.style.setProperty("--keyboard-offset",`${o}px`):e[U]=setTimeout(()=>{e.style.setProperty("--keyboard-offset","0px"),t&&t()},120)},Y=(e,o,t)=>{let s=()=>{o&&K(o,0,t)};e.addEventListener("focusout",s,{once:!0})},D=0,x="data-ionic-skip-scroll-assist",Z=(e,o,t,s,i,r,c,a=!1)=>{let f=r&&(c===void 0||c.mode===F.None),u=!1,l=S!==void 0?S.innerHeight:0,d=h=>{if(u===!1){u=!0;return}$(e,o,t,s,h.detail.keyboardHeight,f,a,l,!1)},m=()=>{u=!1,S===null||S===void 0||S.removeEventListener("ionKeyboardDidShow",d),e.removeEventListener("focusout",m)},v=()=>w(void 0,null,function*(){if(o.hasAttribute(x)){o.removeAttribute(x);return}$(e,o,t,s,i,f,a,l),S===null||S===void 0||S.addEventListener("ionKeyboardDidShow",d),e.addEventListener("focusout",m)});return e.addEventListener("focusin",v),()=>{e.removeEventListener("focusin",v),S===null||S===void 0||S.removeEventListener("ionKeyboardDidShow",d),e.removeEventListener("focusout",m)}},M=e=>{document.activeElement!==e&&(e.setAttribute(x,"true"),e.focus())},$=(e,o,t,s,i,r,c=!1,a=0,f=!0)=>w(void 0,null,function*(){if(!t&&!s)return;let u=V(e,t||s,i,a);if(t&&Math.abs(u.scrollAmount)<4){M(o),r&&t!==null&&(K(t,D),Y(o,t,()=>D=0));return}if(P(e,o,!0,u.inputSafeY,c),M(o),_(()=>e.click()),r&&t&&(D=u.scrollPadding,K(t,D)),typeof window<"u"){let l,d=()=>w(void 0,null,function*(){l!==void 0&&clearTimeout(l),window.removeEventListener("ionKeyboardDidShow",m),window.removeEventListener("ionKeyboardDidShow",d),t&&(yield k(t,0,u.scrollAmount,u.scrollDuration)),P(e,o,!1,u.inputSafeY),M(o),r&&Y(o,t,()=>D=0)}),m=()=>{window.removeEventListener("ionKeyboardDidShow",m),window.addEventListener("ionKeyboardDidShow",d)};if(t){let v=yield N(t),h=v.scrollHeight-v.clientHeight;if(f&&u.scrollAmount>h-v.scrollTop){o.type==="password"?(u.scrollAmount+=q,window.addEventListener("ionKeyboardDidShow",m)):window.addEventListener("ionKeyboardDidShow",d),l=setTimeout(d,1e3);return}}d()}}),E=!0,ne=(e,o)=>w(void 0,null,function*(){if(A===void 0)return;let t=o==="ios",s=o==="android",i=e.getNumber("keyboardHeight",290),r=e.getBoolean("scrollAssist",!0),c=e.getBoolean("hideCaretOnScroll",t),a=e.getBoolean("inputBlurring",!1),f=e.getBoolean("scrollPadding",!0),u=Array.from(A.querySelectorAll("ion-input, ion-textarea")),l=new WeakMap,d=new WeakMap,m=yield H.getResizeMode(),v=n=>w(void 0,null,function*(){yield new Promise(g=>p(n,g));let y=n.shadowRoot||n,L=y.querySelector("input")||y.querySelector("textarea"),b=O(n),R=b?null:n.closest("ion-footer");if(!L)return;if(b&&c&&!l.has(n)){let g=j(n,L,b);l.set(n,g)}if(!(L.type==="date"||L.type==="datetime-local")&&(b||R)&&r&&!d.has(n)){let g=Z(n,L,b,R,i,f,m,s);d.set(n,g)}}),h=n=>{if(c){let y=l.get(n);y&&y(),l.delete(n)}if(r){let y=d.get(n);y&&y(),d.delete(n)}};a&&E&&J();for(let n of u)v(n);A.addEventListener("ionInputDidLoad",n=>{v(n.detail)}),A.addEventListener("ionInputDidUnload",n=>{h(n.detail)})});export{ne as startInputShims};
