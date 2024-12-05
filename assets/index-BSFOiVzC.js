(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Kh(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Be={},Gi=[],Dn=()=>{},sw=()=>!1,Xl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Gh=t=>t.startsWith("onUpdate:"),ft=Object.assign,Qh=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},iw=Object.prototype.hasOwnProperty,De=(t,e)=>iw.call(t,e),ce=Array.isArray,Qi=t=>Zo(t)==="[object Map]",Jl=t=>Zo(t)==="[object Set]",wp=t=>Zo(t)==="[object Date]",pe=t=>typeof t=="function",nt=t=>typeof t=="string",Bn=t=>typeof t=="symbol",qe=t=>t!==null&&typeof t=="object",Sg=t=>(qe(t)||pe(t))&&pe(t.then)&&pe(t.catch),bg=Object.prototype.toString,Zo=t=>bg.call(t),rw=t=>Zo(t).slice(8,-1),Pg=t=>Zo(t)==="[object Object]",Yh=t=>nt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ho=Kh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Zl=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},ow=/-(\w)/g,hn=Zl(t=>t.replace(ow,(e,n)=>n?n.toUpperCase():"")),aw=/\B([A-Z])/g,Ci=Zl(t=>t.replace(aw,"-$1").toLowerCase()),ec=Zl(t=>t.charAt(0).toUpperCase()+t.slice(1)),nu=Zl(t=>t?`on${ec(t)}`:""),Os=(t,e)=>!Object.is(t,e),Qa=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},kg=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},Vu=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Ap;const tc=()=>Ap||(Ap=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Xh(t){if(ce(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=nt(s)?hw(s):Xh(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(nt(t)||qe(t))return t}const lw=/;(?![^(]*\))/g,cw=/:([^]+)/,uw=/\/\*[^]*?\*\//g;function hw(t){const e={};return t.replace(uw,"").split(lw).forEach(n=>{if(n){const s=n.split(cw);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function nc(t){let e="";if(nt(t))e=t;else if(ce(t))for(let n=0;n<t.length;n++){const s=nc(t[n]);s&&(e+=s+" ")}else if(qe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const dw="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",fw=Kh(dw);function Ng(t){return!!t||t===""}function pw(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=sc(t[s],e[s]);return n}function sc(t,e){if(t===e)return!0;let n=wp(t),s=wp(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=Bn(t),s=Bn(e),n||s)return t===e;if(n=ce(t),s=ce(e),n||s)return n&&s?pw(t,e):!1;if(n=qe(t),s=qe(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!sc(t[o],e[o]))return!1}}return String(t)===String(e)}function Og(t,e){return t.findIndex(n=>sc(n,e))}const Dg=t=>!!(t&&t.__v_isRef===!0),Zt=t=>nt(t)?t:t==null?"":ce(t)||qe(t)&&(t.toString===bg||!pe(t.toString))?Dg(t)?Zt(t.value):JSON.stringify(t,Mg,2):String(t),Mg=(t,e)=>Dg(e)?Mg(t,e.value):Qi(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[su(s,r)+" =>"]=i,n),{})}:Jl(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>su(n))}:Bn(e)?su(e):qe(e)&&!ce(e)&&!Pg(e)?String(e):e,su=(t,e="")=>{var n;return Bn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Xt;class mw{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Xt,!e&&Xt&&(this.index=(Xt.scopes||(Xt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Xt;try{return Xt=this,e()}finally{Xt=n}}}on(){Xt=this}off(){Xt=this.parent}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function _w(){return Xt}let $e;const iu=new WeakSet;class xg{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Xt&&Xt.active&&Xt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,iu.has(this)&&(iu.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Vg(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Rp(this),Fg(this);const e=$e,n=yn;$e=this,yn=!0;try{return this.fn()}finally{Ug(this),$e=e,yn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)ed(e);this.deps=this.depsTail=void 0,Rp(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?iu.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Fu(this)&&this.run()}get dirty(){return Fu(this)}}let Lg=0,fo,po;function Vg(t,e=!1){if(t.flags|=8,e){t.next=po,po=t;return}t.next=fo,fo=t}function Jh(){Lg++}function Zh(){if(--Lg>0)return;if(po){let e=po;for(po=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;fo;){let e=fo;for(fo=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function Fg(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Ug(t){let e,n=t.depsTail,s=n;for(;s;){const i=s.prevDep;s.version===-1?(s===n&&(n=i),ed(s),gw(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}t.deps=e,t.depsTail=n}function Fu(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Bg(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Bg(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===ko))return;t.globalVersion=ko;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!Fu(t)){t.flags&=-3;return}const n=$e,s=yn;$e=t,yn=!0;try{Fg(t);const i=t.fn(t._value);(e.version===0||Os(i,t._value))&&(t._value=i,e.version++)}catch(i){throw e.version++,i}finally{$e=n,yn=s,Ug(t),t.flags&=-3}}function ed(t,e=!1){const{dep:n,prevSub:s,nextSub:i}=t;if(s&&(s.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)ed(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function gw(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let yn=!0;const $g=[];function Hs(){$g.push(yn),yn=!1}function zs(){const t=$g.pop();yn=t===void 0?!0:t}function Rp(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=$e;$e=void 0;try{e()}finally{$e=n}}}let ko=0;class yw{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class td{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!$e||!yn||$e===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==$e)n=this.activeLink=new yw($e,this),$e.deps?(n.prevDep=$e.depsTail,$e.depsTail.nextDep=n,$e.depsTail=n):$e.deps=$e.depsTail=n,qg(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=$e.depsTail,n.nextDep=void 0,$e.depsTail.nextDep=n,$e.depsTail=n,$e.deps===n&&($e.deps=s)}return n}trigger(e){this.version++,ko++,this.notify(e)}notify(e){Jh();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Zh()}}}function qg(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)qg(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Uu=new WeakMap,hi=Symbol(""),Bu=Symbol(""),No=Symbol("");function St(t,e,n){if(yn&&$e){let s=Uu.get(t);s||Uu.set(t,s=new Map);let i=s.get(n);i||(s.set(n,i=new td),i.map=s,i.key=n),i.track()}}function es(t,e,n,s,i,r){const o=Uu.get(t);if(!o){ko++;return}const a=c=>{c&&c.trigger()};if(Jh(),e==="clear")o.forEach(a);else{const c=ce(t),u=c&&Yh(n);if(c&&n==="length"){const h=Number(s);o.forEach((f,m)=>{(m==="length"||m===No||!Bn(m)&&m>=h)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),u&&a(o.get(No)),e){case"add":c?u&&a(o.get("length")):(a(o.get(hi)),Qi(t)&&a(o.get(Bu)));break;case"delete":c||(a(o.get(hi)),Qi(t)&&a(o.get(Bu)));break;case"set":Qi(t)&&a(o.get(hi));break}}Zh()}function Fi(t){const e=me(t);return e===t?e:(St(e,"iterate",No),un(t)?e:e.map(bt))}function ic(t){return St(t=me(t),"iterate",No),t}const vw={__proto__:null,[Symbol.iterator](){return ru(this,Symbol.iterator,bt)},concat(...t){return Fi(this).concat(...t.map(e=>ce(e)?Fi(e):e))},entries(){return ru(this,"entries",t=>(t[1]=bt(t[1]),t))},every(t,e){return Yn(this,"every",t,e,void 0,arguments)},filter(t,e){return Yn(this,"filter",t,e,n=>n.map(bt),arguments)},find(t,e){return Yn(this,"find",t,e,bt,arguments)},findIndex(t,e){return Yn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Yn(this,"findLast",t,e,bt,arguments)},findLastIndex(t,e){return Yn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Yn(this,"forEach",t,e,void 0,arguments)},includes(...t){return ou(this,"includes",t)},indexOf(...t){return ou(this,"indexOf",t)},join(t){return Fi(this).join(t)},lastIndexOf(...t){return ou(this,"lastIndexOf",t)},map(t,e){return Yn(this,"map",t,e,void 0,arguments)},pop(){return Qr(this,"pop")},push(...t){return Qr(this,"push",t)},reduce(t,...e){return Cp(this,"reduce",t,e)},reduceRight(t,...e){return Cp(this,"reduceRight",t,e)},shift(){return Qr(this,"shift")},some(t,e){return Yn(this,"some",t,e,void 0,arguments)},splice(...t){return Qr(this,"splice",t)},toReversed(){return Fi(this).toReversed()},toSorted(t){return Fi(this).toSorted(t)},toSpliced(...t){return Fi(this).toSpliced(...t)},unshift(...t){return Qr(this,"unshift",t)},values(){return ru(this,"values",bt)}};function ru(t,e,n){const s=ic(t),i=s[e]();return s!==t&&!un(t)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.value&&(r.value=n(r.value)),r}),i}const Ew=Array.prototype;function Yn(t,e,n,s,i,r){const o=ic(t),a=o!==t&&!un(t),c=o[e];if(c!==Ew[e]){const f=c.apply(t,r);return a?bt(f):f}let u=n;o!==t&&(a?u=function(f,m){return n.call(this,bt(f),m,t)}:n.length>2&&(u=function(f,m){return n.call(this,f,m,t)}));const h=c.call(o,u,s);return a&&i?i(h):h}function Cp(t,e,n,s){const i=ic(t);let r=n;return i!==t&&(un(t)?n.length>3&&(r=function(o,a,c){return n.call(this,o,a,c,t)}):r=function(o,a,c){return n.call(this,o,bt(a),c,t)}),i[e](r,...s)}function ou(t,e,n){const s=me(t);St(s,"iterate",No);const i=s[e](...n);return(i===-1||i===!1)&&id(n[0])?(n[0]=me(n[0]),s[e](...n)):i}function Qr(t,e,n=[]){Hs(),Jh();const s=me(t)[e].apply(t,n);return Zh(),zs(),s}const Tw=Kh("__proto__,__v_isRef,__isVue"),jg=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Bn));function Iw(t){Bn(t)||(t=String(t));const e=me(this);return St(e,"has",t),e.hasOwnProperty(t)}class Wg{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?Ow:Gg:r?Kg:zg).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=ce(e);if(!i){let c;if(o&&(c=vw[n]))return c;if(n==="hasOwnProperty")return Iw}const a=Reflect.get(e,n,Mt(e)?e:s);return(Bn(n)?jg.has(n):Tw(n))||(i||St(e,"get",n),r)?a:Mt(a)?o&&Yh(n)?a:a.value:qe(a)?i?Yg(a):Cn(a):a}}class Hg extends Wg{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._isShallow){const c=fi(r);if(!un(s)&&!fi(s)&&(r=me(r),s=me(s)),!ce(e)&&Mt(r)&&!Mt(s))return c?!1:(r.value=s,!0)}const o=ce(e)&&Yh(n)?Number(n)<e.length:De(e,n),a=Reflect.set(e,n,s,Mt(e)?e:i);return e===me(i)&&(o?Os(s,r)&&es(e,"set",n,s):es(e,"add",n,s)),a}deleteProperty(e,n){const s=De(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&es(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!Bn(n)||!jg.has(n))&&St(e,"has",n),s}ownKeys(e){return St(e,"iterate",ce(e)?"length":hi),Reflect.ownKeys(e)}}class ww extends Wg{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Aw=new Hg,Rw=new ww,Cw=new Hg(!0);const $u=t=>t,Va=t=>Reflect.getPrototypeOf(t);function Sw(t,e,n){return function(...s){const i=this.__v_raw,r=me(i),o=Qi(r),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=i[t](...s),h=n?$u:e?qu:bt;return!e&&St(r,"iterate",c?Bu:hi),{next(){const{value:f,done:m}=u.next();return m?{value:f,done:m}:{value:a?[h(f[0]),h(f[1])]:h(f),done:m}},[Symbol.iterator](){return this}}}}function Fa(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function bw(t,e){const n={get(i){const r=this.__v_raw,o=me(r),a=me(i);t||(Os(i,a)&&St(o,"get",i),St(o,"get",a));const{has:c}=Va(o),u=e?$u:t?qu:bt;if(c.call(o,i))return u(r.get(i));if(c.call(o,a))return u(r.get(a));r!==o&&r.get(i)},get size(){const i=this.__v_raw;return!t&&St(me(i),"iterate",hi),Reflect.get(i,"size",i)},has(i){const r=this.__v_raw,o=me(r),a=me(i);return t||(Os(i,a)&&St(o,"has",i),St(o,"has",a)),i===a?r.has(i):r.has(i)||r.has(a)},forEach(i,r){const o=this,a=o.__v_raw,c=me(a),u=e?$u:t?qu:bt;return!t&&St(c,"iterate",hi),a.forEach((h,f)=>i.call(r,u(h),u(f),o))}};return ft(n,t?{add:Fa("add"),set:Fa("set"),delete:Fa("delete"),clear:Fa("clear")}:{add(i){!e&&!un(i)&&!fi(i)&&(i=me(i));const r=me(this);return Va(r).has.call(r,i)||(r.add(i),es(r,"add",i,i)),this},set(i,r){!e&&!un(r)&&!fi(r)&&(r=me(r));const o=me(this),{has:a,get:c}=Va(o);let u=a.call(o,i);u||(i=me(i),u=a.call(o,i));const h=c.call(o,i);return o.set(i,r),u?Os(r,h)&&es(o,"set",i,r):es(o,"add",i,r),this},delete(i){const r=me(this),{has:o,get:a}=Va(r);let c=o.call(r,i);c||(i=me(i),c=o.call(r,i)),a&&a.call(r,i);const u=r.delete(i);return c&&es(r,"delete",i,void 0),u},clear(){const i=me(this),r=i.size!==0,o=i.clear();return r&&es(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=Sw(i,t,e)}),n}function nd(t,e){const n=bw(t,e);return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(De(n,i)&&i in s?n:s,i,r)}const Pw={get:nd(!1,!1)},kw={get:nd(!1,!0)},Nw={get:nd(!0,!1)};const zg=new WeakMap,Kg=new WeakMap,Gg=new WeakMap,Ow=new WeakMap;function Dw(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Mw(t){return t.__v_skip||!Object.isExtensible(t)?0:Dw(rw(t))}function Cn(t){return fi(t)?t:sd(t,!1,Aw,Pw,zg)}function Qg(t){return sd(t,!1,Cw,kw,Kg)}function Yg(t){return sd(t,!0,Rw,Nw,Gg)}function sd(t,e,n,s,i){if(!qe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=Mw(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function Yi(t){return fi(t)?Yi(t.__v_raw):!!(t&&t.__v_isReactive)}function fi(t){return!!(t&&t.__v_isReadonly)}function un(t){return!!(t&&t.__v_isShallow)}function id(t){return t?!!t.__v_raw:!1}function me(t){const e=t&&t.__v_raw;return e?me(e):t}function xw(t){return!De(t,"__v_skip")&&Object.isExtensible(t)&&kg(t,"__v_skip",!0),t}const bt=t=>qe(t)?Cn(t):t,qu=t=>qe(t)?Yg(t):t;function Mt(t){return t?t.__v_isRef===!0:!1}function Je(t){return Xg(t,!1)}function Lw(t){return Xg(t,!0)}function Xg(t,e){return Mt(t)?t:new Vw(t,e)}class Vw{constructor(e,n){this.dep=new td,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:me(e),this._value=n?e:bt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||un(e)||fi(e);e=s?e:me(e),Os(e,n)&&(this._rawValue=e,this._value=s?e:bt(e),this.dep.trigger())}}function Bt(t){return Mt(t)?t.value:t}const Fw={get:(t,e,n)=>e==="__v_raw"?t:Bt(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Mt(i)&&!Mt(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function Jg(t){return Yi(t)?t:new Proxy(t,Fw)}class Uw{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new td(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ko-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&$e!==this)return Vg(this,!0),!0}get value(){const e=this.dep.track();return Bg(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Bw(t,e,n=!1){let s,i;return pe(t)?s=t:(s=t.get,i=t.set),new Uw(s,i,n)}const Ua={},fl=new WeakMap;let ii;function $w(t,e=!1,n=ii){if(n){let s=fl.get(n);s||fl.set(n,s=[]),s.push(t)}}function qw(t,e,n=Be){const{immediate:s,deep:i,once:r,scheduler:o,augmentJob:a,call:c}=n,u=U=>i?U:un(U)||i===!1||i===0?ts(U,1):ts(U);let h,f,m,_,E=!1,S=!1;if(Mt(t)?(f=()=>t.value,E=un(t)):Yi(t)?(f=()=>u(t),E=!0):ce(t)?(S=!0,E=t.some(U=>Yi(U)||un(U)),f=()=>t.map(U=>{if(Mt(U))return U.value;if(Yi(U))return u(U);if(pe(U))return c?c(U,2):U()})):pe(t)?e?f=c?()=>c(t,2):t:f=()=>{if(m){Hs();try{m()}finally{zs()}}const U=ii;ii=h;try{return c?c(t,3,[_]):t(_)}finally{ii=U}}:f=Dn,e&&i){const U=f,oe=i===!0?1/0:i;f=()=>ts(U(),oe)}const b=_w(),F=()=>{h.stop(),b&&b.active&&Qh(b.effects,h)};if(r&&e){const U=e;e=(...oe)=>{U(...oe),F()}}let D=S?new Array(t.length).fill(Ua):Ua;const L=U=>{if(!(!(h.flags&1)||!h.dirty&&!U))if(e){const oe=h.run();if(i||E||(S?oe.some((le,A)=>Os(le,D[A])):Os(oe,D))){m&&m();const le=ii;ii=h;try{const A=[oe,D===Ua?void 0:S&&D[0]===Ua?[]:D,_];c?c(e,3,A):e(...A),D=oe}finally{ii=le}}}else h.run()};return a&&a(L),h=new xg(f),h.scheduler=o?()=>o(L,!1):L,_=U=>$w(U,!1,h),m=h.onStop=()=>{const U=fl.get(h);if(U){if(c)c(U,4);else for(const oe of U)oe();fl.delete(h)}},e?s?L(!0):D=h.run():o?o(L.bind(null,!0),!0):h.run(),F.pause=h.pause.bind(h),F.resume=h.resume.bind(h),F.stop=F,F}function ts(t,e=1/0,n){if(e<=0||!qe(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Mt(t))ts(t.value,e,n);else if(ce(t))for(let s=0;s<t.length;s++)ts(t[s],e,n);else if(Jl(t)||Qi(t))t.forEach(s=>{ts(s,e,n)});else if(Pg(t)){for(const s in t)ts(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&ts(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ea(t,e,n,s){try{return s?t(...s):t()}catch(i){rc(i,e,n)}}function $n(t,e,n,s){if(pe(t)){const i=ea(t,e,n,s);return i&&Sg(i)&&i.catch(r=>{rc(r,e,n)}),i}if(ce(t)){const i=[];for(let r=0;r<t.length;r++)i.push($n(t[r],e,n,s));return i}}function rc(t,e,n,s=!0){const i=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Be;if(e){let a=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const h=a.ec;if(h){for(let f=0;f<h.length;f++)if(h[f](t,c,u)===!1)return}a=a.parent}if(r){Hs(),ea(r,null,10,[t,c,u]),zs();return}}jw(t,n,i,s,o)}function jw(t,e,n,s=!0,i=!1){if(i)throw t;console.error(t)}const $t=[];let Pn=-1;const Xi=[];let As=null,Bi=0;const Zg=Promise.resolve();let pl=null;function ta(t){const e=pl||Zg;return t?e.then(this?t.bind(this):t):e}function Ww(t){let e=Pn+1,n=$t.length;for(;e<n;){const s=e+n>>>1,i=$t[s],r=Oo(i);r<t||r===t&&i.flags&2?e=s+1:n=s}return e}function rd(t){if(!(t.flags&1)){const e=Oo(t),n=$t[$t.length-1];!n||!(t.flags&2)&&e>=Oo(n)?$t.push(t):$t.splice(Ww(e),0,t),t.flags|=1,ey()}}function ey(){pl||(pl=Zg.then(ny))}function Hw(t){ce(t)?Xi.push(...t):As&&t.id===-1?As.splice(Bi+1,0,t):t.flags&1||(Xi.push(t),t.flags|=1),ey()}function Sp(t,e,n=Pn+1){for(;n<$t.length;n++){const s=$t[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;$t.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function ty(t){if(Xi.length){const e=[...new Set(Xi)].sort((n,s)=>Oo(n)-Oo(s));if(Xi.length=0,As){As.push(...e);return}for(As=e,Bi=0;Bi<As.length;Bi++){const n=As[Bi];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}As=null,Bi=0}}const Oo=t=>t.id==null?t.flags&2?-1:1/0:t.id;function ny(t){try{for(Pn=0;Pn<$t.length;Pn++){const e=$t[Pn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ea(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Pn<$t.length;Pn++){const e=$t[Pn];e&&(e.flags&=-2)}Pn=-1,$t.length=0,ty(),pl=null,($t.length||Xi.length)&&ny()}}let en=null,sy=null;function ml(t){const e=en;return en=t,sy=t&&t.type.__scopeId||null,e}function od(t,e=en,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Lp(-1);const r=ml(e);let o;try{o=t(...i)}finally{ml(r),s._d&&Lp(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function os(t,e){if(en===null)return t;const n=uc(en),s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,a,c=Be]=e[i];r&&(pe(r)&&(r={mounted:r,updated:r}),r.deep&&ts(o),s.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function ni(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let c=a.dir[s];c&&(Hs(),$n(c,n,8,[t.el,a,t,e]),zs())}}const zw=Symbol("_vte"),Kw=t=>t.__isTeleport;function ad(t,e){t.shapeFlag&6&&t.component?(t.transition=e,ad(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function wr(t,e){return pe(t)?ft({name:t.name},e,{setup:t}):t}function iy(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function _l(t,e,n,s,i=!1){if(ce(t)){t.forEach((E,S)=>_l(E,e&&(ce(e)?e[S]:e),n,s,i));return}if(mo(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&_l(t,e,n,s.component.subTree);return}const r=s.shapeFlag&4?uc(s.component):s.el,o=i?null:r,{i:a,r:c}=t,u=e&&e.r,h=a.refs===Be?a.refs={}:a.refs,f=a.setupState,m=me(f),_=f===Be?()=>!1:E=>De(m,E);if(u!=null&&u!==c&&(nt(u)?(h[u]=null,_(u)&&(f[u]=null)):Mt(u)&&(u.value=null)),pe(c))ea(c,a,12,[o,h]);else{const E=nt(c),S=Mt(c);if(E||S){const b=()=>{if(t.f){const F=E?_(c)?f[c]:h[c]:c.value;i?ce(F)&&Qh(F,r):ce(F)?F.includes(r)||F.push(r):E?(h[c]=[r],_(c)&&(f[c]=h[c])):(c.value=[r],t.k&&(h[t.k]=c.value))}else E?(h[c]=o,_(c)&&(f[c]=o)):S&&(c.value=o,t.k&&(h[t.k]=o))};o?(b.id=-1,Yt(b,n)):b()}}}tc().requestIdleCallback;tc().cancelIdleCallback;const mo=t=>!!t.type.__asyncLoader,ry=t=>t.type.__isKeepAlive;function Gw(t,e){oy(t,"a",e)}function Qw(t,e){oy(t,"da",e)}function oy(t,e,n=Ot){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(oc(e,s,n),n){let i=n.parent;for(;i&&i.parent;)ry(i.parent.vnode)&&Yw(s,e,n,i),i=i.parent}}function Yw(t,e,n,s){const i=oc(e,t,s,!0);ac(()=>{Qh(s[e],i)},n)}function oc(t,e,n=Ot,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{Hs();const a=na(n),c=$n(e,n,t,o);return a(),zs(),c});return s?i.unshift(r):i.push(r),r}}const ps=t=>(e,n=Ot)=>{(!xo||t==="sp")&&oc(t,(...s)=>e(...s),n)},Xw=ps("bm"),Ar=ps("m"),Jw=ps("bu"),Zw=ps("u"),e0=ps("bum"),ac=ps("um"),t0=ps("sp"),n0=ps("rtg"),s0=ps("rtc");function i0(t,e=Ot){oc("ec",t,e)}const r0="components";function ld(t,e){return a0(r0,t,!0,e)||t}const o0=Symbol.for("v-ndc");function a0(t,e,n=!0,s=!1){const i=en||Ot;if(i){const r=i.type;{const a=K0(r,!1);if(a&&(a===e||a===hn(e)||a===ec(hn(e))))return r}const o=bp(i[t]||r[t],e)||bp(i.appContext[t],e);return!o&&s?r:o}}function bp(t,e){return t&&(t[e]||t[hn(e)]||t[ec(hn(e))])}function ay(t,e,n,s){let i;const r=n,o=ce(t);if(o||nt(t)){const a=o&&Yi(t);let c=!1;a&&(c=!un(t),t=ic(t)),i=new Array(t.length);for(let u=0,h=t.length;u<h;u++)i[u]=e(c?bt(t[u]):t[u],u,void 0,r)}else if(typeof t=="number"){i=new Array(t);for(let a=0;a<t;a++)i[a]=e(a+1,a,void 0,r)}else if(qe(t))if(t[Symbol.iterator])i=Array.from(t,(a,c)=>e(a,c,void 0,r));else{const a=Object.keys(t);i=new Array(a.length);for(let c=0,u=a.length;c<u;c++){const h=a[c];i[c]=e(t[h],h,c,r)}}else i=[];return i}const ju=t=>t?Cy(t)?uc(t):ju(t.parent):null,_o=ft(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ju(t.parent),$root:t=>ju(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>cd(t),$forceUpdate:t=>t.f||(t.f=()=>{rd(t.update)}),$nextTick:t=>t.n||(t.n=ta.bind(t.proxy)),$watch:t=>b0.bind(t)}),au=(t,e)=>t!==Be&&!t.__isScriptSetup&&De(t,e),l0={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(au(s,e))return o[e]=1,s[e];if(i!==Be&&De(i,e))return o[e]=2,i[e];if((u=t.propsOptions[0])&&De(u,e))return o[e]=3,r[e];if(n!==Be&&De(n,e))return o[e]=4,n[e];Wu&&(o[e]=0)}}const h=_o[e];let f,m;if(h)return e==="$attrs"&&St(t.attrs,"get",""),h(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==Be&&De(n,e))return o[e]=4,n[e];if(m=c.config.globalProperties,De(m,e))return m[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return au(i,e)?(i[e]=n,!0):s!==Be&&De(s,e)?(s[e]=n,!0):De(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==Be&&De(t,o)||au(e,o)||(a=r[0])&&De(a,o)||De(s,o)||De(_o,o)||De(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:De(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Pp(t){return ce(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Wu=!0;function c0(t){const e=cd(t),n=t.proxy,s=t.ctx;Wu=!1,e.beforeCreate&&kp(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:c,inject:u,created:h,beforeMount:f,mounted:m,beforeUpdate:_,updated:E,activated:S,deactivated:b,beforeDestroy:F,beforeUnmount:D,destroyed:L,unmounted:U,render:oe,renderTracked:le,renderTriggered:A,errorCaptured:v,serverPrefetch:w,expose:R,inheritAttrs:C,components:P,directives:I,filters:Lt}=e;if(u&&u0(u,s,null),o)for(const Te in o){const ge=o[Te];pe(ge)&&(s[Te]=ge.bind(n))}if(i){const Te=i.call(n,n);qe(Te)&&(t.data=Cn(Te))}if(Wu=!0,r)for(const Te in r){const ge=r[Te],Gt=pe(ge)?ge.bind(n,n):pe(ge.get)?ge.get.bind(n,n):Dn,fn=!pe(ge)&&pe(ge.set)?ge.set.bind(n):Dn,an=Pe({get:Gt,set:fn});Object.defineProperty(s,Te,{enumerable:!0,configurable:!0,get:()=>an.value,set:Ge=>an.value=Ge})}if(a)for(const Te in a)ly(a[Te],s,n,Te);if(c){const Te=pe(c)?c.call(n):c;Reflect.ownKeys(Te).forEach(ge=>{Ya(ge,Te[ge])})}h&&kp(h,t,"c");function Ze(Te,ge){ce(ge)?ge.forEach(Gt=>Te(Gt.bind(n))):ge&&Te(ge.bind(n))}if(Ze(Xw,f),Ze(Ar,m),Ze(Jw,_),Ze(Zw,E),Ze(Gw,S),Ze(Qw,b),Ze(i0,v),Ze(s0,le),Ze(n0,A),Ze(e0,D),Ze(ac,U),Ze(t0,w),ce(R))if(R.length){const Te=t.exposed||(t.exposed={});R.forEach(ge=>{Object.defineProperty(Te,ge,{get:()=>n[ge],set:Gt=>n[ge]=Gt})})}else t.exposed||(t.exposed={});oe&&t.render===Dn&&(t.render=oe),C!=null&&(t.inheritAttrs=C),P&&(t.components=P),I&&(t.directives=I),w&&iy(t)}function u0(t,e,n=Dn){ce(t)&&(t=Hu(t));for(const s in t){const i=t[s];let r;qe(i)?"default"in i?r=Mn(i.from||s,i.default,!0):r=Mn(i.from||s):r=Mn(i),Mt(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function kp(t,e,n){$n(ce(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function ly(t,e,n,s){let i=s.includes(".")?Ty(n,s):()=>n[s];if(nt(t)){const r=e[t];pe(r)&&Ja(i,r)}else if(pe(t))Ja(i,t.bind(n));else if(qe(t))if(ce(t))t.forEach(r=>ly(r,e,n,s));else{const r=pe(t.handler)?t.handler.bind(n):e[t.handler];pe(r)&&Ja(i,r,t)}}function cd(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let c;return a?c=a:!i.length&&!n&&!s?c=e:(c={},i.length&&i.forEach(u=>gl(c,u,o,!0)),gl(c,e,o)),qe(e)&&r.set(e,c),c}function gl(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&gl(t,r,n,!0),i&&i.forEach(o=>gl(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=h0[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const h0={data:Np,props:Op,emits:Op,methods:so,computed:so,beforeCreate:Ut,created:Ut,beforeMount:Ut,mounted:Ut,beforeUpdate:Ut,updated:Ut,beforeDestroy:Ut,beforeUnmount:Ut,destroyed:Ut,unmounted:Ut,activated:Ut,deactivated:Ut,errorCaptured:Ut,serverPrefetch:Ut,components:so,directives:so,watch:f0,provide:Np,inject:d0};function Np(t,e){return e?t?function(){return ft(pe(t)?t.call(this,this):t,pe(e)?e.call(this,this):e)}:e:t}function d0(t,e){return so(Hu(t),Hu(e))}function Hu(t){if(ce(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ut(t,e){return t?[...new Set([].concat(t,e))]:e}function so(t,e){return t?ft(Object.create(null),t,e):e}function Op(t,e){return t?ce(t)&&ce(e)?[...new Set([...t,...e])]:ft(Object.create(null),Pp(t),Pp(e??{})):e}function f0(t,e){if(!t)return e;if(!e)return t;const n=ft(Object.create(null),t);for(const s in e)n[s]=Ut(t[s],e[s]);return n}function cy(){return{app:null,config:{isNativeTag:sw,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let p0=0;function m0(t,e){return function(s,i=null){pe(s)||(s=ft({},s)),i!=null&&!qe(i)&&(i=null);const r=cy(),o=new WeakSet,a=[];let c=!1;const u=r.app={_uid:p0++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:Q0,get config(){return r.config},set config(h){},use(h,...f){return o.has(h)||(h&&pe(h.install)?(o.add(h),h.install(u,...f)):pe(h)&&(o.add(h),h(u,...f))),u},mixin(h){return r.mixins.includes(h)||r.mixins.push(h),u},component(h,f){return f?(r.components[h]=f,u):r.components[h]},directive(h,f){return f?(r.directives[h]=f,u):r.directives[h]},mount(h,f,m){if(!c){const _=u._ceVNode||_e(s,i);return _.appContext=r,m===!0?m="svg":m===!1&&(m=void 0),f&&e?e(_,h):t(_,h,m),c=!0,u._container=h,h.__vue_app__=u,uc(_.component)}},onUnmount(h){a.push(h)},unmount(){c&&($n(a,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(h,f){return r.provides[h]=f,u},runWithContext(h){const f=Ji;Ji=u;try{return h()}finally{Ji=f}}};return u}}let Ji=null;function Ya(t,e){if(Ot){let n=Ot.provides;const s=Ot.parent&&Ot.parent.provides;s===n&&(n=Ot.provides=Object.create(s)),n[t]=e}}function Mn(t,e,n=!1){const s=Ot||en;if(s||Ji){const i=Ji?Ji._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&pe(e)?e.call(s&&s.proxy):e}}const uy={},hy=()=>Object.create(uy),dy=t=>Object.getPrototypeOf(t)===uy;function _0(t,e,n,s=!1){const i={},r=hy();t.propsDefaults=Object.create(null),fy(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Qg(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function g0(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=me(i),[c]=t.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let f=0;f<h.length;f++){let m=h[f];if(lc(t.emitsOptions,m))continue;const _=e[m];if(c)if(De(r,m))_!==r[m]&&(r[m]=_,u=!0);else{const E=hn(m);i[E]=zu(c,a,E,_,t,!1)}else _!==r[m]&&(r[m]=_,u=!0)}}}else{fy(t,e,i,r)&&(u=!0);let h;for(const f in a)(!e||!De(e,f)&&((h=Ci(f))===f||!De(e,h)))&&(c?n&&(n[f]!==void 0||n[h]!==void 0)&&(i[f]=zu(c,a,f,void 0,t,!0)):delete i[f]);if(r!==a)for(const f in r)(!e||!De(e,f))&&(delete r[f],u=!0)}u&&es(t.attrs,"set","")}function fy(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(ho(c))continue;const u=e[c];let h;i&&De(i,h=hn(c))?!r||!r.includes(h)?n[h]=u:(a||(a={}))[h]=u:lc(t.emitsOptions,c)||(!(c in s)||u!==s[c])&&(s[c]=u,o=!0)}if(r){const c=me(n),u=a||Be;for(let h=0;h<r.length;h++){const f=r[h];n[f]=zu(i,c,f,u[f],t,!De(u,f))}}return o}function zu(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=De(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&pe(c)){const{propsDefaults:u}=i;if(n in u)s=u[n];else{const h=na(i);s=u[n]=c.call(null,e),h()}}else s=c;i.ce&&i.ce._setProp(n,s)}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===Ci(n))&&(s=!0))}return s}const y0=new WeakMap;function py(t,e,n=!1){const s=n?y0:e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let c=!1;if(!pe(t)){const h=f=>{c=!0;const[m,_]=py(f,e,!0);ft(o,m),_&&a.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!r&&!c)return qe(t)&&s.set(t,Gi),Gi;if(ce(r))for(let h=0;h<r.length;h++){const f=hn(r[h]);Dp(f)&&(o[f]=Be)}else if(r)for(const h in r){const f=hn(h);if(Dp(f)){const m=r[h],_=o[f]=ce(m)||pe(m)?{type:m}:ft({},m),E=_.type;let S=!1,b=!0;if(ce(E))for(let F=0;F<E.length;++F){const D=E[F],L=pe(D)&&D.name;if(L==="Boolean"){S=!0;break}else L==="String"&&(b=!1)}else S=pe(E)&&E.name==="Boolean";_[0]=S,_[1]=b,(S||De(_,"default"))&&a.push(f)}}const u=[o,a];return qe(t)&&s.set(t,u),u}function Dp(t){return t[0]!=="$"&&!ho(t)}const my=t=>t[0]==="_"||t==="$stable",ud=t=>ce(t)?t.map(kn):[kn(t)],v0=(t,e,n)=>{if(e._n)return e;const s=od((...i)=>ud(e(...i)),n);return s._c=!1,s},_y=(t,e,n)=>{const s=t._ctx;for(const i in t){if(my(i))continue;const r=t[i];if(pe(r))e[i]=v0(i,r,s);else if(r!=null){const o=ud(r);e[i]=()=>o}}},gy=(t,e)=>{const n=ud(e);t.slots.default=()=>n},yy=(t,e,n)=>{for(const s in e)(n||s!=="_")&&(t[s]=e[s])},E0=(t,e,n)=>{const s=t.slots=hy();if(t.vnode.shapeFlag&32){const i=e._;i?(yy(s,e,n),n&&kg(s,"_",i,!0)):_y(e,s)}else e&&gy(t,e)},T0=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=Be;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:yy(i,e,n):(r=!e.$stable,_y(e,i)),o=e}else e&&(gy(t,e),o={default:1});if(r)for(const a in i)!my(a)&&o[a]==null&&delete i[a]},Yt=x0;function I0(t){return w0(t)}function w0(t,e){const n=tc();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:c,setText:u,setElementText:h,parentNode:f,nextSibling:m,setScopeId:_=Dn,insertStaticContent:E}=t,S=(y,T,N,B=null,M=null,q=null,K=void 0,H=null,W=!!T.dynamicChildren)=>{if(y===T)return;y&&!Yr(y,T)&&(B=x(y),Ge(y,M,q,!0),y=null),T.patchFlag===-2&&(W=!1,T.dynamicChildren=null);const{type:j,ref:re,shapeFlag:Y}=T;switch(j){case cc:b(y,T,N,B);break;case pi:F(y,T,N,B);break;case uu:y==null&&D(T,N,B,K);break;case Ht:P(y,T,N,B,M,q,K,H,W);break;default:Y&1?oe(y,T,N,B,M,q,K,H,W):Y&6?I(y,T,N,B,M,q,K,H,W):(Y&64||Y&128)&&j.process(y,T,N,B,M,q,K,H,W,Z)}re!=null&&M&&_l(re,y&&y.ref,q,T||y,!T)},b=(y,T,N,B)=>{if(y==null)s(T.el=a(T.children),N,B);else{const M=T.el=y.el;T.children!==y.children&&u(M,T.children)}},F=(y,T,N,B)=>{y==null?s(T.el=c(T.children||""),N,B):T.el=y.el},D=(y,T,N,B)=>{[y.el,y.anchor]=E(y.children,T,N,B,y.el,y.anchor)},L=({el:y,anchor:T},N,B)=>{let M;for(;y&&y!==T;)M=m(y),s(y,N,B),y=M;s(T,N,B)},U=({el:y,anchor:T})=>{let N;for(;y&&y!==T;)N=m(y),i(y),y=N;i(T)},oe=(y,T,N,B,M,q,K,H,W)=>{T.type==="svg"?K="svg":T.type==="math"&&(K="mathml"),y==null?le(T,N,B,M,q,K,H,W):w(y,T,M,q,K,H,W)},le=(y,T,N,B,M,q,K,H)=>{let W,j;const{props:re,shapeFlag:Y,transition:se,dirs:ee}=y;if(W=y.el=o(y.type,q,re&&re.is,re),Y&8?h(W,y.children):Y&16&&v(y.children,W,null,B,M,lu(y,q),K,H),ee&&ni(y,null,B,"created"),A(W,y,y.scopeId,K,B),re){for(const Ne in re)Ne!=="value"&&!ho(Ne)&&r(W,Ne,null,re[Ne],q,B);"value"in re&&r(W,"value",null,re.value,q),(j=re.onVnodeBeforeMount)&&bn(j,B,y)}ee&&ni(y,null,B,"beforeMount");const ae=A0(M,se);ae&&se.beforeEnter(W),s(W,T,N),((j=re&&re.onVnodeMounted)||ae||ee)&&Yt(()=>{j&&bn(j,B,y),ae&&se.enter(W),ee&&ni(y,null,B,"mounted")},M)},A=(y,T,N,B,M)=>{if(N&&_(y,N),B)for(let q=0;q<B.length;q++)_(y,B[q]);if(M){let q=M.subTree;if(T===q||wy(q.type)&&(q.ssContent===T||q.ssFallback===T)){const K=M.vnode;A(y,K,K.scopeId,K.slotScopeIds,M.parent)}}},v=(y,T,N,B,M,q,K,H,W=0)=>{for(let j=W;j<y.length;j++){const re=y[j]=H?Rs(y[j]):kn(y[j]);S(null,re,T,N,B,M,q,K,H)}},w=(y,T,N,B,M,q,K)=>{const H=T.el=y.el;let{patchFlag:W,dynamicChildren:j,dirs:re}=T;W|=y.patchFlag&16;const Y=y.props||Be,se=T.props||Be;let ee;if(N&&si(N,!1),(ee=se.onVnodeBeforeUpdate)&&bn(ee,N,T,y),re&&ni(T,y,N,"beforeUpdate"),N&&si(N,!0),(Y.innerHTML&&se.innerHTML==null||Y.textContent&&se.textContent==null)&&h(H,""),j?R(y.dynamicChildren,j,H,N,B,lu(T,M),q):K||ge(y,T,H,null,N,B,lu(T,M),q,!1),W>0){if(W&16)C(H,Y,se,N,M);else if(W&2&&Y.class!==se.class&&r(H,"class",null,se.class,M),W&4&&r(H,"style",Y.style,se.style,M),W&8){const ae=T.dynamicProps;for(let Ne=0;Ne<ae.length;Ne++){const Ce=ae[Ne],Tt=Y[Ce],at=se[Ce];(at!==Tt||Ce==="value")&&r(H,Ce,Tt,at,M,N)}}W&1&&y.children!==T.children&&h(H,T.children)}else!K&&j==null&&C(H,Y,se,N,M);((ee=se.onVnodeUpdated)||re)&&Yt(()=>{ee&&bn(ee,N,T,y),re&&ni(T,y,N,"updated")},B)},R=(y,T,N,B,M,q,K)=>{for(let H=0;H<T.length;H++){const W=y[H],j=T[H],re=W.el&&(W.type===Ht||!Yr(W,j)||W.shapeFlag&70)?f(W.el):N;S(W,j,re,null,B,M,q,K,!0)}},C=(y,T,N,B,M)=>{if(T!==N){if(T!==Be)for(const q in T)!ho(q)&&!(q in N)&&r(y,q,T[q],null,M,B);for(const q in N){if(ho(q))continue;const K=N[q],H=T[q];K!==H&&q!=="value"&&r(y,q,H,K,M,B)}"value"in N&&r(y,"value",T.value,N.value,M)}},P=(y,T,N,B,M,q,K,H,W)=>{const j=T.el=y?y.el:a(""),re=T.anchor=y?y.anchor:a("");let{patchFlag:Y,dynamicChildren:se,slotScopeIds:ee}=T;ee&&(H=H?H.concat(ee):ee),y==null?(s(j,N,B),s(re,N,B),v(T.children||[],N,re,M,q,K,H,W)):Y>0&&Y&64&&se&&y.dynamicChildren?(R(y.dynamicChildren,se,N,M,q,K,H),(T.key!=null||M&&T===M.subTree)&&vy(y,T,!0)):ge(y,T,N,re,M,q,K,H,W)},I=(y,T,N,B,M,q,K,H,W)=>{T.slotScopeIds=H,y==null?T.shapeFlag&512?M.ctx.activate(T,N,B,K,W):Lt(T,N,B,M,q,K,W):on(y,T,W)},Lt=(y,T,N,B,M,q,K)=>{const H=y.component=q0(y,B,M);if(ry(y)&&(H.ctx.renderer=Z),j0(H,!1,K),H.asyncDep){if(M&&M.registerDep(H,Ze,K),!y.el){const W=H.subTree=_e(pi);F(null,W,T,N)}}else Ze(H,y,T,N,M,q,K)},on=(y,T,N)=>{const B=T.component=y.component;if(D0(y,T,N))if(B.asyncDep&&!B.asyncResolved){Te(B,T,N);return}else B.next=T,B.update();else T.el=y.el,B.vnode=T},Ze=(y,T,N,B,M,q,K)=>{const H=()=>{if(y.isMounted){let{next:Y,bu:se,u:ee,parent:ae,vnode:Ne}=y;{const It=Ey(y);if(It){Y&&(Y.el=Ne.el,Te(y,Y,K)),It.asyncDep.then(()=>{y.isUnmounted||H()});return}}let Ce=Y,Tt;si(y,!1),Y?(Y.el=Ne.el,Te(y,Y,K)):Y=Ne,se&&Qa(se),(Tt=Y.props&&Y.props.onVnodeBeforeUpdate)&&bn(Tt,ae,Y,Ne),si(y,!0);const at=cu(y),pt=y.subTree;y.subTree=at,S(pt,at,f(pt.el),x(pt),y,M,q),Y.el=at.el,Ce===null&&M0(y,at.el),ee&&Yt(ee,M),(Tt=Y.props&&Y.props.onVnodeUpdated)&&Yt(()=>bn(Tt,ae,Y,Ne),M)}else{let Y;const{el:se,props:ee}=T,{bm:ae,m:Ne,parent:Ce,root:Tt,type:at}=y,pt=mo(T);if(si(y,!1),ae&&Qa(ae),!pt&&(Y=ee&&ee.onVnodeBeforeMount)&&bn(Y,Ce,T),si(y,!0),se&&Fe){const It=()=>{y.subTree=cu(y),Fe(se,y.subTree,y,M,null)};pt&&at.__asyncHydrate?at.__asyncHydrate(se,y,It):It()}else{Tt.ce&&Tt.ce._injectChildStyle(at);const It=y.subTree=cu(y);S(null,It,N,B,y,M,q),T.el=It.el}if(Ne&&Yt(Ne,M),!pt&&(Y=ee&&ee.onVnodeMounted)){const It=T;Yt(()=>bn(Y,Ce,It),M)}(T.shapeFlag&256||Ce&&mo(Ce.vnode)&&Ce.vnode.shapeFlag&256)&&y.a&&Yt(y.a,M),y.isMounted=!0,T=N=B=null}};y.scope.on();const W=y.effect=new xg(H);y.scope.off();const j=y.update=W.run.bind(W),re=y.job=W.runIfDirty.bind(W);re.i=y,re.id=y.uid,W.scheduler=()=>rd(re),si(y,!0),j()},Te=(y,T,N)=>{T.component=y;const B=y.vnode.props;y.vnode=T,y.next=null,g0(y,T.props,B,N),T0(y,T.children,N),Hs(),Sp(y),zs()},ge=(y,T,N,B,M,q,K,H,W=!1)=>{const j=y&&y.children,re=y?y.shapeFlag:0,Y=T.children,{patchFlag:se,shapeFlag:ee}=T;if(se>0){if(se&128){fn(j,Y,N,B,M,q,K,H,W);return}else if(se&256){Gt(j,Y,N,B,M,q,K,H,W);return}}ee&8?(re&16&&Wt(j,M,q),Y!==j&&h(N,Y)):re&16?ee&16?fn(j,Y,N,B,M,q,K,H,W):Wt(j,M,q,!0):(re&8&&h(N,""),ee&16&&v(Y,N,B,M,q,K,H,W))},Gt=(y,T,N,B,M,q,K,H,W)=>{y=y||Gi,T=T||Gi;const j=y.length,re=T.length,Y=Math.min(j,re);let se;for(se=0;se<Y;se++){const ee=T[se]=W?Rs(T[se]):kn(T[se]);S(y[se],ee,N,null,M,q,K,H,W)}j>re?Wt(y,M,q,!0,!1,Y):v(T,N,B,M,q,K,H,W,Y)},fn=(y,T,N,B,M,q,K,H,W)=>{let j=0;const re=T.length;let Y=y.length-1,se=re-1;for(;j<=Y&&j<=se;){const ee=y[j],ae=T[j]=W?Rs(T[j]):kn(T[j]);if(Yr(ee,ae))S(ee,ae,N,null,M,q,K,H,W);else break;j++}for(;j<=Y&&j<=se;){const ee=y[Y],ae=T[se]=W?Rs(T[se]):kn(T[se]);if(Yr(ee,ae))S(ee,ae,N,null,M,q,K,H,W);else break;Y--,se--}if(j>Y){if(j<=se){const ee=se+1,ae=ee<re?T[ee].el:B;for(;j<=se;)S(null,T[j]=W?Rs(T[j]):kn(T[j]),N,ae,M,q,K,H,W),j++}}else if(j>se)for(;j<=Y;)Ge(y[j],M,q,!0),j++;else{const ee=j,ae=j,Ne=new Map;for(j=ae;j<=se;j++){const Vt=T[j]=W?Rs(T[j]):kn(T[j]);Vt.key!=null&&Ne.set(Vt.key,j)}let Ce,Tt=0;const at=se-ae+1;let pt=!1,It=0;const ys=new Array(at);for(j=0;j<at;j++)ys[j]=0;for(j=ee;j<=Y;j++){const Vt=y[j];if(Tt>=at){Ge(Vt,M,q,!0);continue}let ln;if(Vt.key!=null)ln=Ne.get(Vt.key);else for(Ce=ae;Ce<=se;Ce++)if(ys[Ce-ae]===0&&Yr(Vt,T[Ce])){ln=Ce;break}ln===void 0?Ge(Vt,M,q,!0):(ys[ln-ae]=j+1,ln>=It?It=ln:pt=!0,S(Vt,T[ln],N,null,M,q,K,H,W),Tt++)}const Oi=pt?R0(ys):Gi;for(Ce=Oi.length-1,j=at-1;j>=0;j--){const Vt=ae+j,ln=T[Vt],Di=Vt+1<re?T[Vt+1].el:B;ys[j]===0?S(null,ln,N,Di,M,q,K,H,W):pt&&(Ce<0||j!==Oi[Ce]?an(ln,N,Di,2):Ce--)}}},an=(y,T,N,B,M=null)=>{const{el:q,type:K,transition:H,children:W,shapeFlag:j}=y;if(j&6){an(y.component.subTree,T,N,B);return}if(j&128){y.suspense.move(T,N,B);return}if(j&64){K.move(y,T,N,Z);return}if(K===Ht){s(q,T,N);for(let Y=0;Y<W.length;Y++)an(W[Y],T,N,B);s(y.anchor,T,N);return}if(K===uu){L(y,T,N);return}if(B!==2&&j&1&&H)if(B===0)H.beforeEnter(q),s(q,T,N),Yt(()=>H.enter(q),M);else{const{leave:Y,delayLeave:se,afterLeave:ee}=H,ae=()=>s(q,T,N),Ne=()=>{Y(q,()=>{ae(),ee&&ee()})};se?se(q,ae,Ne):Ne()}else s(q,T,N)},Ge=(y,T,N,B=!1,M=!1)=>{const{type:q,props:K,ref:H,children:W,dynamicChildren:j,shapeFlag:re,patchFlag:Y,dirs:se,cacheIndex:ee}=y;if(Y===-2&&(M=!1),H!=null&&_l(H,null,N,y,!0),ee!=null&&(T.renderCache[ee]=void 0),re&256){T.ctx.deactivate(y);return}const ae=re&1&&se,Ne=!mo(y);let Ce;if(Ne&&(Ce=K&&K.onVnodeBeforeUnmount)&&bn(Ce,T,y),re&6)Sn(y.component,N,B);else{if(re&128){y.suspense.unmount(N,B);return}ae&&ni(y,null,T,"beforeUnmount"),re&64?y.type.remove(y,T,N,Z,B):j&&!j.hasOnce&&(q!==Ht||Y>0&&Y&64)?Wt(j,T,N,!1,!0):(q===Ht&&Y&384||!M&&re&16)&&Wt(W,T,N),B&&Qe(y)}(Ne&&(Ce=K&&K.onVnodeUnmounted)||ae)&&Yt(()=>{Ce&&bn(Ce,T,y),ae&&ni(y,null,T,"unmounted")},N)},Qe=y=>{const{type:T,el:N,anchor:B,transition:M}=y;if(T===Ht){gs(N,B);return}if(T===uu){U(y);return}const q=()=>{i(N),M&&!M.persisted&&M.afterLeave&&M.afterLeave()};if(y.shapeFlag&1&&M&&!M.persisted){const{leave:K,delayLeave:H}=M,W=()=>K(N,q);H?H(y.el,q,W):W()}else q()},gs=(y,T)=>{let N;for(;y!==T;)N=m(y),i(y),y=N;i(T)},Sn=(y,T,N)=>{const{bum:B,scope:M,job:q,subTree:K,um:H,m:W,a:j}=y;Mp(W),Mp(j),B&&Qa(B),M.stop(),q&&(q.flags|=8,Ge(K,y,T,N)),H&&Yt(H,T),Yt(()=>{y.isUnmounted=!0},T),T&&T.pendingBranch&&!T.isUnmounted&&y.asyncDep&&!y.asyncResolved&&y.suspenseId===T.pendingId&&(T.deps--,T.deps===0&&T.resolve())},Wt=(y,T,N,B=!1,M=!1,q=0)=>{for(let K=q;K<y.length;K++)Ge(y[K],T,N,B,M)},x=y=>{if(y.shapeFlag&6)return x(y.component.subTree);if(y.shapeFlag&128)return y.suspense.next();const T=m(y.anchor||y.el),N=T&&T[zw];return N?m(N):T};let X=!1;const Q=(y,T,N)=>{y==null?T._vnode&&Ge(T._vnode,null,null,!0):S(T._vnode||null,y,T,null,null,null,N),T._vnode=y,X||(X=!0,Sp(),ty(),X=!1)},Z={p:S,um:Ge,m:an,r:Qe,mt:Lt,mc:v,pc:ge,pbc:R,n:x,o:t};let Ie,Fe;return{render:Q,hydrate:Ie,createApp:m0(Q,Ie)}}function lu({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function si({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function A0(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function vy(t,e,n=!1){const s=t.children,i=e.children;if(ce(s)&&ce(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=Rs(i[r]),a.el=o.el),!n&&a.patchFlag!==-2&&vy(o,a)),a.type===cc&&(a.el=o.el)}}function R0(t){const e=t.slice(),n=[0];let s,i,r,o,a;const c=t.length;for(s=0;s<c;s++){const u=t[s];if(u!==0){if(i=n[n.length-1],t[i]<u){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<u?r=a+1:o=a;u<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function Ey(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Ey(e)}function Mp(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const C0=Symbol.for("v-scx"),S0=()=>Mn(C0);function Xa(t,e){return hd(t,null,e)}function Ja(t,e,n){return hd(t,e,n)}function hd(t,e,n=Be){const{immediate:s,deep:i,flush:r,once:o}=n,a=ft({},n),c=e&&s||!e&&r!=="post";let u;if(xo){if(r==="sync"){const _=S0();u=_.__watcherHandles||(_.__watcherHandles=[])}else if(!c){const _=()=>{};return _.stop=Dn,_.resume=Dn,_.pause=Dn,_}}const h=Ot;a.call=(_,E,S)=>$n(_,h,E,S);let f=!1;r==="post"?a.scheduler=_=>{Yt(_,h&&h.suspense)}:r!=="sync"&&(f=!0,a.scheduler=(_,E)=>{E?_():rd(_)}),a.augmentJob=_=>{e&&(_.flags|=4),f&&(_.flags|=2,h&&(_.id=h.uid,_.i=h))};const m=qw(t,e,a);return xo&&(u?u.push(m):c&&m()),m}function b0(t,e,n){const s=this.proxy,i=nt(t)?t.includes(".")?Ty(s,t):()=>s[t]:t.bind(s,s);let r;pe(e)?r=e:(r=e.handler,n=e);const o=na(this),a=hd(i,r.bind(s),n);return o(),a}function Ty(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}const P0=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${hn(e)}Modifiers`]||t[`${Ci(e)}Modifiers`];function k0(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Be;let i=n;const r=e.startsWith("update:"),o=r&&P0(s,e.slice(7));o&&(o.trim&&(i=n.map(h=>nt(h)?h.trim():h)),o.number&&(i=n.map(Vu)));let a,c=s[a=nu(e)]||s[a=nu(hn(e))];!c&&r&&(c=s[a=nu(Ci(e))]),c&&$n(c,t,6,i);const u=s[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,$n(u,t,6,i)}}function Iy(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!pe(t)){const c=u=>{const h=Iy(u,e,!0);h&&(a=!0,ft(o,h))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!r&&!a?(qe(t)&&s.set(t,null),null):(ce(r)?r.forEach(c=>o[c]=null):ft(o,r),qe(t)&&s.set(t,o),o)}function lc(t,e){return!t||!Xl(e)?!1:(e=e.slice(2).replace(/Once$/,""),De(t,e[0].toLowerCase()+e.slice(1))||De(t,Ci(e))||De(t,e))}function cu(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:a,emit:c,render:u,renderCache:h,props:f,data:m,setupState:_,ctx:E,inheritAttrs:S}=t,b=ml(t);let F,D;try{if(n.shapeFlag&4){const U=i||s,oe=U;F=kn(u.call(oe,U,h,f,_,m,E)),D=a}else{const U=e;F=kn(U.length>1?U(f,{attrs:a,slots:o,emit:c}):U(f,null)),D=e.props?a:N0(a)}}catch(U){go.length=0,rc(U,t,1),F=_e(pi)}let L=F;if(D&&S!==!1){const U=Object.keys(D),{shapeFlag:oe}=L;U.length&&oe&7&&(r&&U.some(Gh)&&(D=O0(D,r)),L=mi(L,D,!1,!0))}return n.dirs&&(L=mi(L,null,!1,!0),L.dirs=L.dirs?L.dirs.concat(n.dirs):n.dirs),n.transition&&ad(L,n.transition),F=L,ml(b),F}const N0=t=>{let e;for(const n in t)(n==="class"||n==="style"||Xl(n))&&((e||(e={}))[n]=t[n]);return e},O0=(t,e)=>{const n={};for(const s in t)(!Gh(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function D0(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:c}=e,u=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?xp(s,o,u):!!o;if(c&8){const h=e.dynamicProps;for(let f=0;f<h.length;f++){const m=h[f];if(o[m]!==s[m]&&!lc(u,m))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?xp(s,o,u):!0:!!o;return!1}function xp(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!lc(n,r))return!0}return!1}function M0({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const wy=t=>t.__isSuspense;function x0(t,e){e&&e.pendingBranch?ce(t)?e.effects.push(...t):e.effects.push(t):Hw(t)}const Ht=Symbol.for("v-fgt"),cc=Symbol.for("v-txt"),pi=Symbol.for("v-cmt"),uu=Symbol.for("v-stc"),go=[];let tn=null;function it(t=!1){go.push(tn=t?null:[])}function L0(){go.pop(),tn=go[go.length-1]||null}let Do=1;function Lp(t,e=!1){Do+=t,t<0&&tn&&e&&(tn.hasOnce=!0)}function Ay(t){return t.dynamicChildren=Do>0?tn||Gi:null,L0(),Do>0&&tn&&tn.push(t),t}function ht(t,e,n,s,i,r){return Ay(ne(t,e,n,s,i,r,!0))}function V0(t,e,n,s,i){return Ay(_e(t,e,n,s,i,!0))}function lr(t){return t?t.__v_isVNode===!0:!1}function Yr(t,e){return t.type===e.type&&t.key===e.key}const Ry=({key:t})=>t??null,Za=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?nt(t)||Mt(t)||pe(t)?{i:en,r:t,k:e,f:!!n}:t:null);function ne(t,e=null,n=null,s=0,i=null,r=t===Ht?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ry(e),ref:e&&Za(e),scopeId:sy,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:en};return a?(dd(c,n),r&128&&t.normalize(c)):n&&(c.shapeFlag|=nt(n)?8:16),Do>0&&!o&&tn&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&tn.push(c),c}const _e=F0;function F0(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===o0)&&(t=pi),lr(t)){const a=mi(t,e,!0);return n&&dd(a,n),Do>0&&!r&&tn&&(a.shapeFlag&6?tn[tn.indexOf(t)]=a:tn.push(a)),a.patchFlag=-2,a}if(G0(t)&&(t=t.__vccOpts),e){e=U0(e);let{class:a,style:c}=e;a&&!nt(a)&&(e.class=nc(a)),qe(c)&&(id(c)&&!ce(c)&&(c=ft({},c)),e.style=Xh(c))}const o=nt(t)?1:wy(t)?128:Kw(t)?64:qe(t)?4:pe(t)?2:0;return ne(t,e,n,s,i,o,r,!0)}function U0(t){return t?id(t)||dy(t)?ft({},t):t:null}function mi(t,e,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:a,transition:c}=t,u=e?ms(i||{},e):i,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Ry(u),ref:e&&e.ref?n&&r?ce(r)?r.concat(Za(e)):[r,Za(e)]:Za(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ht?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&mi(t.ssContent),ssFallback:t.ssFallback&&mi(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&s&&ad(h,c.clone(h)),h}function Mo(t=" ",e=0){return _e(cc,null,t,e)}function Ds(t="",e=!1){return e?(it(),V0(pi,null,t)):_e(pi,null,t)}function kn(t){return t==null||typeof t=="boolean"?_e(pi):ce(t)?_e(Ht,null,t.slice()):lr(t)?Rs(t):_e(cc,null,String(t))}function Rs(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:mi(t)}function dd(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(ce(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),dd(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!dy(e)?e._ctx=en:i===3&&en&&(en.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else pe(e)?(e={default:e,_ctx:en},n=32):(e=String(e),s&64?(n=16,e=[Mo(e)]):n=8);t.children=e,t.shapeFlag|=n}function ms(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=nc([e.class,s.class]));else if(i==="style")e.style=Xh([e.style,s.style]);else if(Xl(i)){const r=e[i],o=s[i];o&&r!==o&&!(ce(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function bn(t,e,n,s=null){$n(t,e,7,[n,s])}const B0=cy();let $0=0;function q0(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||B0,r={uid:$0++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new mw(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:py(s,i),emitsOptions:Iy(s,i),emit:null,emitted:null,propsDefaults:Be,inheritAttrs:s.inheritAttrs,ctx:Be,data:Be,props:Be,attrs:Be,slots:Be,refs:Be,setupState:Be,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=k0.bind(null,r),t.ce&&t.ce(r),r}let Ot=null,yl,Ku;{const t=tc(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};yl=e("__VUE_INSTANCE_SETTERS__",n=>Ot=n),Ku=e("__VUE_SSR_SETTERS__",n=>xo=n)}const na=t=>{const e=Ot;return yl(t),t.scope.on(),()=>{t.scope.off(),yl(e)}},Vp=()=>{Ot&&Ot.scope.off(),yl(null)};function Cy(t){return t.vnode.shapeFlag&4}let xo=!1;function j0(t,e=!1,n=!1){e&&Ku(e);const{props:s,children:i}=t.vnode,r=Cy(t);_0(t,s,r,e),E0(t,i,n);const o=r?W0(t,e):void 0;return e&&Ku(!1),o}function W0(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,l0);const{setup:s}=n;if(s){Hs();const i=t.setupContext=s.length>1?z0(t):null,r=na(t),o=ea(s,t,0,[t.props,i]),a=Sg(o);if(zs(),r(),(a||t.sp)&&!mo(t)&&iy(t),a){if(o.then(Vp,Vp),e)return o.then(c=>{Fp(t,c,e)}).catch(c=>{rc(c,t,0)});t.asyncDep=o}else Fp(t,o,e)}else Sy(t,e)}function Fp(t,e,n){pe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:qe(e)&&(t.setupState=Jg(e)),Sy(t,n)}let Up;function Sy(t,e,n){const s=t.type;if(!t.render){if(!e&&Up&&!s.render){const i=s.template||cd(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,u=ft(ft({isCustomElement:r,delimiters:a},o),c);s.render=Up(i,u)}}t.render=s.render||Dn}{const i=na(t);Hs();try{c0(t)}finally{zs(),i()}}}const H0={get(t,e){return St(t,"get",""),t[e]}};function z0(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,H0),slots:t.slots,emit:t.emit,expose:e}}function uc(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Jg(xw(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in _o)return _o[n](t)},has(e,n){return n in e||n in _o}})):t.proxy}function K0(t,e=!0){return pe(t)?t.displayName||t.name:t.name||e&&t.__name}function G0(t){return pe(t)&&"__vccOpts"in t}const Pe=(t,e)=>Bw(t,e,xo);function ai(t,e,n){const s=arguments.length;return s===2?qe(e)&&!ce(e)?lr(e)?_e(t,null,[e]):_e(t,e):_e(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&lr(n)&&(n=[n]),_e(t,e,n))}const Q0="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Gu;const Bp=typeof window<"u"&&window.trustedTypes;if(Bp)try{Gu=Bp.createPolicy("vue",{createHTML:t=>t})}catch{}const by=Gu?t=>Gu.createHTML(t):t=>t,Y0="http://www.w3.org/2000/svg",X0="http://www.w3.org/1998/Math/MathML",Zn=typeof document<"u"?document:null,$p=Zn&&Zn.createElement("template"),J0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?Zn.createElementNS(Y0,t):e==="mathml"?Zn.createElementNS(X0,t):n?Zn.createElement(t,{is:n}):Zn.createElement(t);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Zn.createTextNode(t),createComment:t=>Zn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Zn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{$p.innerHTML=by(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const a=$p.content;if(s==="svg"||s==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Z0=Symbol("_vtc");function eA(t,e,n){const s=t[Z0];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const qp=Symbol("_vod"),tA=Symbol("_vsh"),nA=Symbol(""),sA=/(^|;)\s*display\s*:/;function iA(t,e,n){const s=t.style,i=nt(n);let r=!1;if(n&&!i){if(e)if(nt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&el(s,a,"")}else for(const o in e)n[o]==null&&el(s,o,"");for(const o in n)o==="display"&&(r=!0),el(s,o,n[o])}else if(i){if(e!==n){const o=s[nA];o&&(n+=";"+o),s.cssText=n,r=sA.test(n)}}else e&&t.removeAttribute("style");qp in t&&(t[qp]=r?s.display:"",t[tA]&&(s.display="none"))}const jp=/\s*!important$/;function el(t,e,n){if(ce(n))n.forEach(s=>el(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=rA(t,e);jp.test(n)?t.setProperty(Ci(s),n.replace(jp,""),"important"):t[s]=n}}const Wp=["Webkit","Moz","ms"],hu={};function rA(t,e){const n=hu[e];if(n)return n;let s=hn(e);if(s!=="filter"&&s in t)return hu[e]=s;s=ec(s);for(let i=0;i<Wp.length;i++){const r=Wp[i]+s;if(r in t)return hu[e]=r}return e}const Hp="http://www.w3.org/1999/xlink";function zp(t,e,n,s,i,r=fw(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Hp,e.slice(6,e.length)):t.setAttributeNS(Hp,e,n):n==null||r&&!Ng(n)?t.removeAttribute(e):t.setAttribute(e,r?"":Bn(n)?String(n):n)}function Kp(t,e,n,s,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?by(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Ng(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(i||e)}function li(t,e,n,s){t.addEventListener(e,n,s)}function oA(t,e,n,s){t.removeEventListener(e,n,s)}const Gp=Symbol("_vei");function aA(t,e,n,s,i=null){const r=t[Gp]||(t[Gp]={}),o=r[e];if(s&&o)o.value=s;else{const[a,c]=lA(e);if(s){const u=r[e]=hA(s,i);li(t,a,u,c)}else o&&(oA(t,a,o,c),r[e]=void 0)}}const Qp=/(?:Once|Passive|Capture)$/;function lA(t){let e;if(Qp.test(t)){e={};let s;for(;s=t.match(Qp);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ci(t.slice(2)),e]}let du=0;const cA=Promise.resolve(),uA=()=>du||(cA.then(()=>du=0),du=Date.now());function hA(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;$n(dA(s,n.value),e,5,[s])};return n.value=t,n.attached=uA(),n}function dA(t,e){if(ce(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Yp=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,fA=(t,e,n,s,i,r)=>{const o=i==="svg";e==="class"?eA(t,s,o):e==="style"?iA(t,n,s):Xl(e)?Gh(e)||aA(t,e,n,s,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):pA(t,e,s,o))?(Kp(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&zp(t,e,s,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!nt(s))?Kp(t,hn(e),s,r,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),zp(t,e,s,o))};function pA(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Yp(e)&&pe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Yp(e)&&nt(n)?!1:e in t}const vl=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ce(e)?n=>Qa(e,n):e};function mA(t){t.target.composing=!0}function Xp(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Zi=Symbol("_assign"),Ms={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t[Zi]=vl(i);const r=s||i.props&&i.props.type==="number";li(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=Vu(a)),t[Zi](a)}),n&&li(t,"change",()=>{t.value=t.value.trim()}),e||(li(t,"compositionstart",mA),li(t,"compositionend",Xp),li(t,"change",Xp))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:i,number:r}},o){if(t[Zi]=vl(o),t.composing)return;const a=(r||t.type==="number")&&!/^0\d/.test(t.value)?Vu(t.value):t.value,c=e??"";a!==c&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||i&&t.value.trim()===c)||(t.value=c))}},_A={deep:!0,created(t,e,n){t[Zi]=vl(n),li(t,"change",()=>{const s=t._modelValue,i=gA(t),r=t.checked,o=t[Zi];if(ce(s)){const a=Og(s,i),c=a!==-1;if(r&&!c)o(s.concat(i));else if(!r&&c){const u=[...s];u.splice(a,1),o(u)}}else if(Jl(s)){const a=new Set(s);r?a.add(i):a.delete(i),o(a)}else o(Py(t,r))})},mounted:Jp,beforeUpdate(t,e,n){t[Zi]=vl(n),Jp(t,e,n)}};function Jp(t,{value:e,oldValue:n},s){t._modelValue=e;let i;if(ce(e))i=Og(e,s.props.value)>-1;else if(Jl(e))i=e.has(s.props.value);else{if(e===n)return;i=sc(e,Py(t,!0))}t.checked!==i&&(t.checked=i)}function gA(t){return"_value"in t?t._value:t.value}function Py(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const yA=ft({patchProp:fA},J0);let Zp;function vA(){return Zp||(Zp=I0(yA))}const ky=(...t)=>{const e=vA().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=TA(s);if(!i)return;const r=e._component;!pe(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,EA(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function EA(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function TA(t){return nt(t)?document.querySelector(t):t}const Rr=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},IA={},wA={class:"container_display"},AA={class:"display"};function RA(t,e){const n=ld("router-view");return it(),ht("div",wA,[ne("div",AA,[_e(n)])])}const CA=Rr(IA,[["render",RA],["__scopeId","data-v-52a58a4f"]]);/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const $i=typeof document<"u";function Ny(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function SA(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Ny(t.default)}const Oe=Object.assign;function fu(t,e){const n={};for(const s in e){const i=e[s];n[s]=Tn(i)?i.map(t):t(i)}return n}const yo=()=>{},Tn=Array.isArray,Oy=/#/g,bA=/&/g,PA=/\//g,kA=/=/g,NA=/\?/g,Dy=/\+/g,OA=/%5B/g,DA=/%5D/g,My=/%5E/g,MA=/%60/g,xy=/%7B/g,xA=/%7C/g,Ly=/%7D/g,LA=/%20/g;function fd(t){return encodeURI(""+t).replace(xA,"|").replace(OA,"[").replace(DA,"]")}function VA(t){return fd(t).replace(xy,"{").replace(Ly,"}").replace(My,"^")}function Qu(t){return fd(t).replace(Dy,"%2B").replace(LA,"+").replace(Oy,"%23").replace(bA,"%26").replace(MA,"`").replace(xy,"{").replace(Ly,"}").replace(My,"^")}function FA(t){return Qu(t).replace(kA,"%3D")}function UA(t){return fd(t).replace(Oy,"%23").replace(NA,"%3F")}function BA(t){return t==null?"":UA(t).replace(PA,"%2F")}function Lo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const $A=/\/$/,qA=t=>t.replace($A,"");function pu(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),r=e.slice(c+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=zA(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:Lo(o)}}function jA(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function em(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function WA(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&cr(e.matched[s],n.matched[i])&&Vy(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function cr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Vy(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!HA(t[n],e[n]))return!1;return!0}function HA(t,e){return Tn(t)?tm(t,e):Tn(e)?tm(e,t):t===e}function tm(t,e){return Tn(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function zA(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o).join("/")}const Is={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Vo;(function(t){t.pop="pop",t.push="push"})(Vo||(Vo={}));var vo;(function(t){t.back="back",t.forward="forward",t.unknown=""})(vo||(vo={}));function KA(t){if(!t)if($i){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),qA(t)}const GA=/^[^#]+#/;function QA(t,e){return t.replace(GA,"#")+e}function YA(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const hc=()=>({left:window.scrollX,top:window.scrollY});function XA(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=YA(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function nm(t,e){return(history.state?history.state.position-e:-1)+t}const Yu=new Map;function JA(t,e){Yu.set(t,e)}function ZA(t){const e=Yu.get(t);return Yu.delete(t),e}let eR=()=>location.protocol+"//"+location.host;function Fy(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,c=i.slice(a);return c[0]!=="/"&&(c="/"+c),em(c,"")}return em(n,t)+s+i}function tR(t,e,n,s){let i=[],r=[],o=null;const a=({state:m})=>{const _=Fy(t,location),E=n.value,S=e.value;let b=0;if(m){if(n.value=_,e.value=m,o&&o===E){o=null;return}b=S?m.position-S.position:0}else s(_);i.forEach(F=>{F(n.value,E,{delta:b,type:Vo.pop,direction:b?b>0?vo.forward:vo.back:vo.unknown})})};function c(){o=n.value}function u(m){i.push(m);const _=()=>{const E=i.indexOf(m);E>-1&&i.splice(E,1)};return r.push(_),_}function h(){const{history:m}=window;m.state&&m.replaceState(Oe({},m.state,{scroll:hc()}),"")}function f(){for(const m of r)m();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:c,listen:u,destroy:f}}function sm(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?hc():null}}function nR(t){const{history:e,location:n}=window,s={value:Fy(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(c,u,h){const f=t.indexOf("#"),m=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+c:eR()+t+c;try{e[h?"replaceState":"pushState"](u,"",m),i.value=u}catch(_){console.error(_),n[h?"replace":"assign"](m)}}function o(c,u){const h=Oe({},e.state,sm(i.value.back,c,i.value.forward,!0),u,{position:i.value.position});r(c,h,!0),s.value=c}function a(c,u){const h=Oe({},i.value,e.state,{forward:c,scroll:hc()});r(h.current,h,!0);const f=Oe({},sm(s.value,c,null),{position:h.position+1},u);r(c,f,!1),s.value=c}return{location:s,state:i,push:a,replace:o}}function sR(t){t=KA(t);const e=nR(t),n=tR(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=Oe({location:"",base:t,go:s,createHref:QA.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function iR(t){return typeof t=="string"||t&&typeof t=="object"}function Uy(t){return typeof t=="string"||typeof t=="symbol"}const By=Symbol("");var im;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(im||(im={}));function ur(t,e){return Oe(new Error,{type:t,[By]:!0},e)}function Xn(t,e){return t instanceof Error&&By in t&&(e==null||!!(t.type&e))}const rm="[^/]+?",rR={sensitive:!1,strict:!1,start:!0,end:!0},oR=/[.+*?^${}()[\]/\\]/g;function aR(t,e){const n=Oe({},rR,e),s=[];let i=n.start?"^":"";const r=[];for(const u of t){const h=u.length?[]:[90];n.strict&&!u.length&&(i+="/");for(let f=0;f<u.length;f++){const m=u[f];let _=40+(n.sensitive?.25:0);if(m.type===0)f||(i+="/"),i+=m.value.replace(oR,"\\$&"),_+=40;else if(m.type===1){const{value:E,repeatable:S,optional:b,regexp:F}=m;r.push({name:E,repeatable:S,optional:b});const D=F||rm;if(D!==rm){_+=10;try{new RegExp(`(${D})`)}catch(U){throw new Error(`Invalid custom RegExp for param "${E}" (${D}): `+U.message)}}let L=S?`((?:${D})(?:/(?:${D}))*)`:`(${D})`;f||(L=b&&u.length<2?`(?:/${L})`:"/"+L),b&&(L+="?"),i+=L,_+=20,b&&(_+=-8),S&&(_+=-20),D===".*"&&(_+=-50)}h.push(_)}s.push(h)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&!i.endsWith("/")&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(u){const h=u.match(o),f={};if(!h)return null;for(let m=1;m<h.length;m++){const _=h[m]||"",E=r[m-1];f[E.name]=_&&E.repeatable?_.split("/"):_}return f}function c(u){let h="",f=!1;for(const m of t){(!f||!h.endsWith("/"))&&(h+="/"),f=!1;for(const _ of m)if(_.type===0)h+=_.value;else if(_.type===1){const{value:E,repeatable:S,optional:b}=_,F=E in u?u[E]:"";if(Tn(F)&&!S)throw new Error(`Provided param "${E}" is an array but it is not repeatable (* or + modifiers)`);const D=Tn(F)?F.join("/"):F;if(!D)if(b)m.length<2&&(h.endsWith("/")?h=h.slice(0,-1):f=!0);else throw new Error(`Missing required param "${E}"`);h+=D}}return h||"/"}return{re:o,score:s,keys:r,parse:a,stringify:c}}function lR(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function $y(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=lR(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(om(s))return 1;if(om(i))return-1}return i.length-s.length}function om(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const cR={type:0,value:""},uR=/[a-zA-Z0-9_]/;function hR(t){if(!t)return[[]];if(t==="/")return[[cR]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${u}": ${_}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,c,u="",h="";function f(){u&&(n===0?r.push({type:0,value:u}):n===1||n===2||n===3?(r.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:u,regexp:h,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(u&&f(),o()):c===":"?(f(),n=1):m();break;case 4:m(),n=s;break;case 1:c==="("?n=2:uR.test(c)?m():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+c:n=3:h+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,h="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),f(),o(),i}function dR(t,e,n){const s=aR(hR(t.path),n),i=Oe(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function fR(t,e){const n=[],s=new Map;e=um({strict:!1,end:!0,sensitive:!1},e);function i(f){return s.get(f)}function r(f,m,_){const E=!_,S=lm(f);S.aliasOf=_&&_.record;const b=um(e,f),F=[S];if("alias"in f){const U=typeof f.alias=="string"?[f.alias]:f.alias;for(const oe of U)F.push(lm(Oe({},S,{components:_?_.record.components:S.components,path:oe,aliasOf:_?_.record:S})))}let D,L;for(const U of F){const{path:oe}=U;if(m&&oe[0]!=="/"){const le=m.record.path,A=le[le.length-1]==="/"?"":"/";U.path=m.record.path+(oe&&A+oe)}if(D=dR(U,m,b),_?_.alias.push(D):(L=L||D,L!==D&&L.alias.push(D),E&&f.name&&!cm(D)&&o(f.name)),qy(D)&&c(D),S.children){const le=S.children;for(let A=0;A<le.length;A++)r(le[A],D,_&&_.children[A])}_=_||D}return L?()=>{o(L)}:yo}function o(f){if(Uy(f)){const m=s.get(f);m&&(s.delete(f),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(f);m>-1&&(n.splice(m,1),f.record.name&&s.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function c(f){const m=_R(f,n);n.splice(m,0,f),f.record.name&&!cm(f)&&s.set(f.record.name,f)}function u(f,m){let _,E={},S,b;if("name"in f&&f.name){if(_=s.get(f.name),!_)throw ur(1,{location:f});b=_.record.name,E=Oe(am(m.params,_.keys.filter(L=>!L.optional).concat(_.parent?_.parent.keys.filter(L=>L.optional):[]).map(L=>L.name)),f.params&&am(f.params,_.keys.map(L=>L.name))),S=_.stringify(E)}else if(f.path!=null)S=f.path,_=n.find(L=>L.re.test(S)),_&&(E=_.parse(S),b=_.record.name);else{if(_=m.name?s.get(m.name):n.find(L=>L.re.test(m.path)),!_)throw ur(1,{location:f,currentLocation:m});b=_.record.name,E=Oe({},m.params,f.params),S=_.stringify(E)}const F=[];let D=_;for(;D;)F.unshift(D.record),D=D.parent;return{name:b,path:S,params:E,matched:F,meta:mR(F)}}t.forEach(f=>r(f));function h(){n.length=0,s.clear()}return{addRoute:r,resolve:u,removeRoute:o,clearRoutes:h,getRoutes:a,getRecordMatcher:i}}function am(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function lm(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:pR(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function pR(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function cm(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function mR(t){return t.reduce((e,n)=>Oe(e,n.meta),{})}function um(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function _R(t,e){let n=0,s=e.length;for(;n!==s;){const r=n+s>>1;$y(t,e[r])<0?s=r:n=r+1}const i=gR(t);return i&&(s=e.lastIndexOf(i,s-1)),s}function gR(t){let e=t;for(;e=e.parent;)if(qy(e)&&$y(t,e)===0)return e}function qy({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function yR(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(Dy," "),o=r.indexOf("="),a=Lo(o<0?r:r.slice(0,o)),c=o<0?null:Lo(r.slice(o+1));if(a in e){let u=e[a];Tn(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function hm(t){let e="";for(let n in t){const s=t[n];if(n=FA(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Tn(s)?s.map(r=>r&&Qu(r)):[s&&Qu(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function vR(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Tn(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const ER=Symbol(""),dm=Symbol(""),pd=Symbol(""),md=Symbol(""),Xu=Symbol("");function Xr(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Cs(t,e,n,s,i,r=o=>o()){const o=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((a,c)=>{const u=m=>{m===!1?c(ur(4,{from:n,to:e})):m instanceof Error?c(m):iR(m)?c(ur(2,{from:e,to:m})):(o&&s.enterCallbacks[i]===o&&typeof m=="function"&&o.push(m),a())},h=r(()=>t.call(s&&s.instances[i],e,n,u));let f=Promise.resolve(h);t.length<3&&(f=f.then(u)),f.catch(m=>c(m))})}function mu(t,e,n,s,i=r=>r()){const r=[];for(const o of t)for(const a in o.components){let c=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Ny(c)){const h=(c.__vccOpts||c)[e];h&&r.push(Cs(h,n,s,o,a,i))}else{let u=c();r.push(()=>u.then(h=>{if(!h)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=SA(h)?h.default:h;o.mods[a]=h,o.components[a]=f;const _=(f.__vccOpts||f)[e];return _&&Cs(_,n,s,o,a,i)()}))}}return r}function fm(t){const e=Mn(pd),n=Mn(md),s=Pe(()=>{const c=Bt(t.to);return e.resolve(c)}),i=Pe(()=>{const{matched:c}=s.value,{length:u}=c,h=c[u-1],f=n.matched;if(!h||!f.length)return-1;const m=f.findIndex(cr.bind(null,h));if(m>-1)return m;const _=pm(c[u-2]);return u>1&&pm(h)===_&&f[f.length-1].path!==_?f.findIndex(cr.bind(null,c[u-2])):m}),r=Pe(()=>i.value>-1&&RR(n.params,s.value.params)),o=Pe(()=>i.value>-1&&i.value===n.matched.length-1&&Vy(n.params,s.value.params));function a(c={}){if(AR(c)){const u=e[Bt(t.replace)?"replace":"push"](Bt(t.to)).catch(yo);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:s,href:Pe(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}function TR(t){return t.length===1?t[0]:t}const IR=wr({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:fm,setup(t,{slots:e}){const n=Cn(fm(t)),{options:s}=Mn(pd),i=Pe(()=>({[mm(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[mm(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&TR(e.default(n));return t.custom?r:ai("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),wR=IR;function AR(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function RR(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!Tn(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function pm(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const mm=(t,e,n)=>t??e??n,CR=wr({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Mn(Xu),i=Pe(()=>t.route||s.value),r=Mn(dm,0),o=Pe(()=>{let u=Bt(r);const{matched:h}=i.value;let f;for(;(f=h[u])&&!f.components;)u++;return u}),a=Pe(()=>i.value.matched[o.value]);Ya(dm,Pe(()=>o.value+1)),Ya(ER,a),Ya(Xu,i);const c=Je();return Ja(()=>[c.value,a.value,t.name],([u,h,f],[m,_,E])=>{h&&(h.instances[f]=u,_&&_!==h&&u&&u===m&&(h.leaveGuards.size||(h.leaveGuards=_.leaveGuards),h.updateGuards.size||(h.updateGuards=_.updateGuards))),u&&h&&(!_||!cr(h,_)||!m)&&(h.enterCallbacks[f]||[]).forEach(S=>S(u))},{flush:"post"}),()=>{const u=i.value,h=t.name,f=a.value,m=f&&f.components[h];if(!m)return _m(n.default,{Component:m,route:u});const _=f.props[h],E=_?_===!0?u.params:typeof _=="function"?_(u):_:null,b=ai(m,Oe({},E,e,{onVnodeUnmounted:F=>{F.component.isUnmounted&&(f.instances[h]=null)},ref:c}));return _m(n.default,{Component:b,route:u})||b}}});function _m(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const SR=CR;function bR(t){const e=fR(t.routes,t),n=t.parseQuery||yR,s=t.stringifyQuery||hm,i=t.history,r=Xr(),o=Xr(),a=Xr(),c=Lw(Is);let u=Is;$i&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=fu.bind(null,x=>""+x),f=fu.bind(null,BA),m=fu.bind(null,Lo);function _(x,X){let Q,Z;return Uy(x)?(Q=e.getRecordMatcher(x),Z=X):Z=x,e.addRoute(Z,Q)}function E(x){const X=e.getRecordMatcher(x);X&&e.removeRoute(X)}function S(){return e.getRoutes().map(x=>x.record)}function b(x){return!!e.getRecordMatcher(x)}function F(x,X){if(X=Oe({},X||c.value),typeof x=="string"){const T=pu(n,x,X.path),N=e.resolve({path:T.path},X),B=i.createHref(T.fullPath);return Oe(T,N,{params:m(N.params),hash:Lo(T.hash),redirectedFrom:void 0,href:B})}let Q;if(x.path!=null)Q=Oe({},x,{path:pu(n,x.path,X.path).path});else{const T=Oe({},x.params);for(const N in T)T[N]==null&&delete T[N];Q=Oe({},x,{params:f(T)}),X.params=f(X.params)}const Z=e.resolve(Q,X),Ie=x.hash||"";Z.params=h(m(Z.params));const Fe=jA(s,Oe({},x,{hash:VA(Ie),path:Z.path})),y=i.createHref(Fe);return Oe({fullPath:Fe,hash:Ie,query:s===hm?vR(x.query):x.query||{}},Z,{redirectedFrom:void 0,href:y})}function D(x){return typeof x=="string"?pu(n,x,c.value.path):Oe({},x)}function L(x,X){if(u!==x)return ur(8,{from:X,to:x})}function U(x){return A(x)}function oe(x){return U(Oe(D(x),{replace:!0}))}function le(x){const X=x.matched[x.matched.length-1];if(X&&X.redirect){const{redirect:Q}=X;let Z=typeof Q=="function"?Q(x):Q;return typeof Z=="string"&&(Z=Z.includes("?")||Z.includes("#")?Z=D(Z):{path:Z},Z.params={}),Oe({query:x.query,hash:x.hash,params:Z.path!=null?{}:x.params},Z)}}function A(x,X){const Q=u=F(x),Z=c.value,Ie=x.state,Fe=x.force,y=x.replace===!0,T=le(Q);if(T)return A(Oe(D(T),{state:typeof T=="object"?Oe({},Ie,T.state):Ie,force:Fe,replace:y}),X||Q);const N=Q;N.redirectedFrom=X;let B;return!Fe&&WA(s,Z,Q)&&(B=ur(16,{to:N,from:Z}),an(Z,Z,!0,!1)),(B?Promise.resolve(B):R(N,Z)).catch(M=>Xn(M)?Xn(M,2)?M:fn(M):ge(M,N,Z)).then(M=>{if(M){if(Xn(M,2))return A(Oe({replace:y},D(M.to),{state:typeof M.to=="object"?Oe({},Ie,M.to.state):Ie,force:Fe}),X||N)}else M=P(N,Z,!0,y,Ie);return C(N,Z,M),M})}function v(x,X){const Q=L(x,X);return Q?Promise.reject(Q):Promise.resolve()}function w(x){const X=gs.values().next().value;return X&&typeof X.runWithContext=="function"?X.runWithContext(x):x()}function R(x,X){let Q;const[Z,Ie,Fe]=PR(x,X);Q=mu(Z.reverse(),"beforeRouteLeave",x,X);for(const T of Z)T.leaveGuards.forEach(N=>{Q.push(Cs(N,x,X))});const y=v.bind(null,x,X);return Q.push(y),Wt(Q).then(()=>{Q=[];for(const T of r.list())Q.push(Cs(T,x,X));return Q.push(y),Wt(Q)}).then(()=>{Q=mu(Ie,"beforeRouteUpdate",x,X);for(const T of Ie)T.updateGuards.forEach(N=>{Q.push(Cs(N,x,X))});return Q.push(y),Wt(Q)}).then(()=>{Q=[];for(const T of Fe)if(T.beforeEnter)if(Tn(T.beforeEnter))for(const N of T.beforeEnter)Q.push(Cs(N,x,X));else Q.push(Cs(T.beforeEnter,x,X));return Q.push(y),Wt(Q)}).then(()=>(x.matched.forEach(T=>T.enterCallbacks={}),Q=mu(Fe,"beforeRouteEnter",x,X,w),Q.push(y),Wt(Q))).then(()=>{Q=[];for(const T of o.list())Q.push(Cs(T,x,X));return Q.push(y),Wt(Q)}).catch(T=>Xn(T,8)?T:Promise.reject(T))}function C(x,X,Q){a.list().forEach(Z=>w(()=>Z(x,X,Q)))}function P(x,X,Q,Z,Ie){const Fe=L(x,X);if(Fe)return Fe;const y=X===Is,T=$i?history.state:{};Q&&(Z||y?i.replace(x.fullPath,Oe({scroll:y&&T&&T.scroll},Ie)):i.push(x.fullPath,Ie)),c.value=x,an(x,X,Q,y),fn()}let I;function Lt(){I||(I=i.listen((x,X,Q)=>{if(!Sn.listening)return;const Z=F(x),Ie=le(Z);if(Ie){A(Oe(Ie,{replace:!0,force:!0}),Z).catch(yo);return}u=Z;const Fe=c.value;$i&&JA(nm(Fe.fullPath,Q.delta),hc()),R(Z,Fe).catch(y=>Xn(y,12)?y:Xn(y,2)?(A(Oe(D(y.to),{force:!0}),Z).then(T=>{Xn(T,20)&&!Q.delta&&Q.type===Vo.pop&&i.go(-1,!1)}).catch(yo),Promise.reject()):(Q.delta&&i.go(-Q.delta,!1),ge(y,Z,Fe))).then(y=>{y=y||P(Z,Fe,!1),y&&(Q.delta&&!Xn(y,8)?i.go(-Q.delta,!1):Q.type===Vo.pop&&Xn(y,20)&&i.go(-1,!1)),C(Z,Fe,y)}).catch(yo)}))}let on=Xr(),Ze=Xr(),Te;function ge(x,X,Q){fn(x);const Z=Ze.list();return Z.length?Z.forEach(Ie=>Ie(x,X,Q)):console.error(x),Promise.reject(x)}function Gt(){return Te&&c.value!==Is?Promise.resolve():new Promise((x,X)=>{on.add([x,X])})}function fn(x){return Te||(Te=!x,Lt(),on.list().forEach(([X,Q])=>x?Q(x):X()),on.reset()),x}function an(x,X,Q,Z){const{scrollBehavior:Ie}=t;if(!$i||!Ie)return Promise.resolve();const Fe=!Q&&ZA(nm(x.fullPath,0))||(Z||!Q)&&history.state&&history.state.scroll||null;return ta().then(()=>Ie(x,X,Fe)).then(y=>y&&XA(y)).catch(y=>ge(y,x,X))}const Ge=x=>i.go(x);let Qe;const gs=new Set,Sn={currentRoute:c,listening:!0,addRoute:_,removeRoute:E,clearRoutes:e.clearRoutes,hasRoute:b,getRoutes:S,resolve:F,options:t,push:U,replace:oe,go:Ge,back:()=>Ge(-1),forward:()=>Ge(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:Ze.add,isReady:Gt,install(x){const X=this;x.component("RouterLink",wR),x.component("RouterView",SR),x.config.globalProperties.$router=X,Object.defineProperty(x.config.globalProperties,"$route",{enumerable:!0,get:()=>Bt(c)}),$i&&!Qe&&c.value===Is&&(Qe=!0,U(i.location).catch(Ie=>{}));const Q={};for(const Ie in Is)Object.defineProperty(Q,Ie,{get:()=>c.value[Ie],enumerable:!0});x.provide(pd,X),x.provide(md,Qg(Q)),x.provide(Xu,c);const Z=x.unmount;gs.add(x),x.unmount=function(){gs.delete(x),gs.size<1&&(u=Is,I&&I(),I=null,c.value=Is,Qe=!1,Te=!1),Z()}}};function Wt(x){return x.reduce((X,Q)=>X.then(()=>w(Q)),Promise.resolve())}return Sn}function PR(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(u=>cr(u,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(u=>cr(u,c))||i.push(c))}return[n,s,i]}function kR(t){return Mn(md)}var gm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jy={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G=function(t,e){if(!t)throw Cr(e)},Cr=function(t){return new Error("Firebase Database ("+jy.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wy=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},NR=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},dc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,u=c?t[i+2]:0,h=r>>2,f=(r&3)<<4|a>>4;let m=(a&15)<<2|u>>6,_=u&63;c||(_=64,o||(m=64)),s.push(n[h],n[f],n[m],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Wy(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):NR(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||u==null||f==null)throw new OR;const m=r<<2|a>>4;if(s.push(m),u!==64){const _=a<<4&240|u>>2;if(s.push(_),f!==64){const E=u<<6&192|f;s.push(E)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class OR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Hy=function(t){const e=Wy(t);return dc.encodeByteArray(e,!0)},El=function(t){return Hy(t).replace(/\./g,"")},Tl=function(t){try{return dc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DR(t){return zy(void 0,t)}function zy(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!MR(n)||(t[n]=zy(t[n],e[n]));return t}function MR(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LR=()=>xR().__FIREBASE_DEFAULTS__,VR=()=>{if(typeof process>"u"||typeof gm>"u")return;const t=gm.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},FR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Tl(t[1]);return e&&JSON.parse(e)},fc=()=>{try{return LR()||VR()||FR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ky=t=>{var e,n;return(n=(e=fc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},UR=t=>{const e=Ky(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Gy=()=>{var t;return(t=fc())===null||t===void 0?void 0:t.config},Qy=t=>{var e;return(e=fc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BR(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[El(JSON.stringify(n)),El(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function _d(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(xt())}function $R(){var t;const e=(t=fc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function qR(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function jR(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Yy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function WR(){const t=xt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Xy(){return jy.NODE_ADMIN===!0}function HR(){return!$R()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Jy(){try{return typeof indexedDB=="object"}catch{return!1}}function zR(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KR="FirebaseError";class zn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=KR,Object.setPrototypeOf(this,zn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Sr.prototype.create)}}class Sr{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?GR(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new zn(i,a,s)}}function GR(t,e){return t.replace(QR,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const QR=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uo(t){return JSON.parse(t)}function gt(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zy=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Uo(Tl(r[0])||""),n=Uo(Tl(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},YR=function(t){const e=Zy(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},XR=function(t){const e=Zy(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _s(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function hr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Ju(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Il(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function wl(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(ym(r)&&ym(o)){if(!wl(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function ym(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function br(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function io(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function ro(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JR{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)s[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)s[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const m=s[f-3]^s[f-8]^s[f-14]^s[f-16];s[f]=(m<<1|m>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],u,h;for(let f=0;f<80;f++){f<40?f<20?(u=a^r&(o^a),h=1518500249):(u=r^o^a,h=1859775393):f<60?(u=r&o|a&(r|o),h=2400959708):(u=r^o^a,h=3395469782);const m=(i<<5|i>>>27)+u+c+h+s[f]&4294967295;c=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=m}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function ZR(t,e){const n=new eC(t,e);return n.subscribe.bind(n)}class eC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");tC(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=_u),i.error===void 0&&(i.error=_u),i.complete===void 0&&(i.complete=_u);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function tC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function _u(){}function nC(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sC=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,G(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},pc=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(t){return t&&t._delegate?t._delegate:t}class In{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ri="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Fo;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(oC(e))try{this.getOrInitializeService({instanceIdentifier:ri})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=ri){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ri){return this.instances.has(e)}getOptions(e=ri){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:rC(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ri){return this.component?this.component.multipleInstances?e:ri:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function rC(t){return t===ri?void 0:t}function oC(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new iC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ye;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ye||(ye={}));const lC={debug:ye.DEBUG,verbose:ye.VERBOSE,info:ye.INFO,warn:ye.WARN,error:ye.ERROR,silent:ye.SILENT},cC=ye.INFO,uC={[ye.DEBUG]:"log",[ye.VERBOSE]:"log",[ye.INFO]:"info",[ye.WARN]:"warn",[ye.ERROR]:"error"},hC=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=uC[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class sa{constructor(e){this.name=e,this._logLevel=cC,this._logHandler=hC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ye))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?lC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ye.DEBUG,...e),this._logHandler(this,ye.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ye.VERBOSE,...e),this._logHandler(this,ye.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ye.INFO,...e),this._logHandler(this,ye.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ye.WARN,...e),this._logHandler(this,ye.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ye.ERROR,...e),this._logHandler(this,ye.ERROR,...e)}}const dC=(t,e)=>e.some(n=>t instanceof n);let vm,Em;function fC(){return vm||(vm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function pC(){return Em||(Em=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ev=new WeakMap,Zu=new WeakMap,tv=new WeakMap,gu=new WeakMap,gd=new WeakMap;function mC(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(xs(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ev.set(n,t)}).catch(()=>{}),gd.set(e,t),e}function _C(t){if(Zu.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Zu.set(t,e)}let eh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Zu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||tv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return xs(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function gC(t){eh=t(eh)}function yC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(yu(this),e,...n);return tv.set(s,e.sort?e.sort():[e]),xs(s)}:pC().includes(t)?function(...e){return t.apply(yu(this),e),xs(ev.get(this))}:function(...e){return xs(t.apply(yu(this),e))}}function vC(t){return typeof t=="function"?yC(t):(t instanceof IDBTransaction&&_C(t),dC(t,fC())?new Proxy(t,eh):t)}function xs(t){if(t instanceof IDBRequest)return mC(t);if(gu.has(t))return gu.get(t);const e=vC(t);return e!==t&&(gu.set(t,e),gd.set(e,t)),e}const yu=t=>gd.get(t);function EC(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=xs(o);return s&&o.addEventListener("upgradeneeded",c=>{s(xs(o.result),c.oldVersion,c.newVersion,xs(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const TC=["get","getKey","getAll","getAllKeys","count"],IC=["put","add","delete","clear"],vu=new Map;function Tm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(vu.get(e))return vu.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=IC.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||TC.includes(n)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&c.done]))[0]};return vu.set(e,r),r}gC(t=>({...t,get:(e,n,s)=>Tm(e,n)||t.get(e,n,s),has:(e,n)=>!!Tm(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(AC(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function AC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const th="@firebase/app",Im="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const us=new sa("@firebase/app"),RC="@firebase/app-compat",CC="@firebase/analytics-compat",SC="@firebase/analytics",bC="@firebase/app-check-compat",PC="@firebase/app-check",kC="@firebase/auth",NC="@firebase/auth-compat",OC="@firebase/database",DC="@firebase/data-connect",MC="@firebase/database-compat",xC="@firebase/functions",LC="@firebase/functions-compat",VC="@firebase/installations",FC="@firebase/installations-compat",UC="@firebase/messaging",BC="@firebase/messaging-compat",$C="@firebase/performance",qC="@firebase/performance-compat",jC="@firebase/remote-config",WC="@firebase/remote-config-compat",HC="@firebase/storage",zC="@firebase/storage-compat",KC="@firebase/firestore",GC="@firebase/vertexai-preview",QC="@firebase/firestore-compat",YC="firebase",XC="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nh="[DEFAULT]",JC={[th]:"fire-core",[RC]:"fire-core-compat",[SC]:"fire-analytics",[CC]:"fire-analytics-compat",[PC]:"fire-app-check",[bC]:"fire-app-check-compat",[kC]:"fire-auth",[NC]:"fire-auth-compat",[OC]:"fire-rtdb",[DC]:"fire-data-connect",[MC]:"fire-rtdb-compat",[xC]:"fire-fn",[LC]:"fire-fn-compat",[VC]:"fire-iid",[FC]:"fire-iid-compat",[UC]:"fire-fcm",[BC]:"fire-fcm-compat",[$C]:"fire-perf",[qC]:"fire-perf-compat",[jC]:"fire-rc",[WC]:"fire-rc-compat",[HC]:"fire-gcs",[zC]:"fire-gcs-compat",[KC]:"fire-fst",[QC]:"fire-fst-compat",[GC]:"fire-vertex","fire-js":"fire-js",[YC]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Al=new Map,ZC=new Map,sh=new Map;function wm(t,e){try{t.container.addComponent(e)}catch(n){us.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function qn(t){const e=t.name;if(sh.has(e))return us.debug(`There were multiple attempts to register component ${e}.`),!1;sh.set(e,t);for(const n of Al.values())wm(n,t);for(const n of ZC.values())wm(n,t);return!0}function yd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Nn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ls=new Sr("app","Firebase",eS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tS{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new In("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ls.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ks=XC;function nv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:nh,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Ls.create("bad-app-name",{appName:String(i)});if(n||(n=Gy()),!n)throw Ls.create("no-options");const r=Al.get(i);if(r){if(wl(n,r.options)&&wl(s,r.config))return r;throw Ls.create("duplicate-app",{appName:i})}const o=new aC(i);for(const c of sh.values())o.addComponent(c);const a=new tS(n,s,o);return Al.set(i,a),a}function sv(t=nh){const e=Al.get(t);if(!e&&t===nh&&Gy())return nv();if(!e)throw Ls.create("no-app",{appName:t});return e}function sn(t,e,n){var s;let i=(s=JC[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),us.warn(a.join(" "));return}qn(new In(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nS="firebase-heartbeat-database",sS=1,Bo="firebase-heartbeat-store";let Eu=null;function iv(){return Eu||(Eu=EC(nS,sS,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Bo)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ls.create("idb-open",{originalErrorMessage:t.message})})),Eu}async function iS(t){try{const n=(await iv()).transaction(Bo),s=await n.objectStore(Bo).get(rv(t));return await n.done,s}catch(e){if(e instanceof zn)us.warn(e.message);else{const n=Ls.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});us.warn(n.message)}}}async function Am(t,e){try{const s=(await iv()).transaction(Bo,"readwrite");await s.objectStore(Bo).put(e,rv(t)),await s.done}catch(n){if(n instanceof zn)us.warn(n.message);else{const s=Ls.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});us.warn(s.message)}}}function rv(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rS=1024,oS=30*24*60*60*1e3;class aS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new cS(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Rm();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=oS}),this._storage.overwrite(this._heartbeatsCache))}catch(s){us.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Rm(),{heartbeatsToSend:s,unsentEntries:i}=lS(this._heartbeatsCache.heartbeats),r=El(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return us.warn(n),""}}}function Rm(){return new Date().toISOString().substring(0,10)}function lS(t,e=rS){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Cm(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Cm(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class cS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Jy()?zR().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await iS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Am(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Am(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Cm(t){return El(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uS(t){qn(new In("platform-logger",e=>new wC(e),"PRIVATE")),qn(new In("heartbeat",e=>new aS(e),"PRIVATE")),sn(th,Im,t),sn(th,Im,"esm2017"),sn("fire-js","")}uS("");function vd(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function ov(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const hS=ov,av=new Sr("auth","Firebase",ov());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rl=new sa("@firebase/auth");function dS(t,...e){Rl.logLevel<=ye.WARN&&Rl.warn(`Auth (${Ks}): ${t}`,...e)}function tl(t,...e){Rl.logLevel<=ye.ERROR&&Rl.error(`Auth (${Ks}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wn(t,...e){throw Ed(t,...e)}function xn(t,...e){return Ed(t,...e)}function lv(t,e,n){const s=Object.assign(Object.assign({},hS()),{[e]:n});return new Sr("auth","Firebase",s).create(e,{appName:t.name})}function as(t){return lv(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ed(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return av.create(t,...e)}function ue(t,e,...n){if(!t)throw Ed(e,...n)}function ns(t){const e="INTERNAL ASSERTION FAILED: "+t;throw tl(e),new Error(e)}function hs(t,e){t||ns(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ih(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function fS(){return Sm()==="http:"||Sm()==="https:"}function Sm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(fS()||jR()||"connection"in navigator)?navigator.onLine:!0}function mS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(e,n){this.shortDelay=e,this.longDelay=n,hs(n>e,"Short delay should be less than long delay!"),this.isMobile=_d()||Yy()}get(){return pS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Td(t,e){hs(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cv{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ns("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ns("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ns("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _S={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gS=new ia(3e4,6e4);function Gs(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Qs(t,e,n,s,i={}){return uv(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=br(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},r);return qR()||(u.referrerPolicy="no-referrer"),cv.fetch()(hv(t,t.config.apiHost,n,a),u)})}async function uv(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},_S),e);try{const i=new vS(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Ba(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ba(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Ba(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Ba(t,"user-disabled",o);const h=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw lv(t,h,u);wn(t,h)}}catch(i){if(i instanceof zn)throw i;wn(t,"network-request-failed",{message:String(i)})}}async function ra(t,e,n,s,i={}){const r=await Qs(t,e,n,s,i);return"mfaPendingCredential"in r&&wn(t,"multi-factor-auth-required",{_serverResponse:r}),r}function hv(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?Td(t.config,i):`${t.config.apiScheme}://${i}`}function yS(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class vS{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(xn(this.auth,"network-request-failed")),gS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ba(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=xn(t,e,s);return i.customData._tokenResponse=n,i}function bm(t){return t!==void 0&&t.enterprise!==void 0}class ES{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return yS(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function TS(t,e){return Qs(t,"GET","/v2/recaptchaConfig",Gs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IS(t,e){return Qs(t,"POST","/v1/accounts:delete",e)}async function dv(t,e){return Qs(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function wS(t,e=!1){const n=ot(t),s=await n.getIdToken(e),i=Id(s);ue(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Eo(Tu(i.auth_time)),issuedAtTime:Eo(Tu(i.iat)),expirationTime:Eo(Tu(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Tu(t){return Number(t)*1e3}function Id(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return tl("JWT malformed, contained fewer than 3 sections"),null;try{const i=Tl(n);return i?JSON.parse(i):(tl("Failed to decode base64 JWT payload"),null)}catch(i){return tl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Pm(t){const e=Id(t);return ue(e,"internal-error"),ue(typeof e.exp<"u","internal-error"),ue(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $o(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof zn&&AS(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function AS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Eo(this.lastLoginAt),this.creationTime=Eo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cl(t){var e;const n=t.auth,s=await t.getIdToken(),i=await $o(t,dv(n,{idToken:s}));ue(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?fv(r.providerUserInfo):[],a=SS(t.providerData,o),c=t.isAnonymous,u=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),h=c?u:!1,f={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new rh(r.createdAt,r.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function CS(t){const e=ot(t);await Cl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function SS(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function fv(t){return t.map(e=>{var{providerId:n}=e,s=vd(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bS(t,e){const n=await uv(t,{},async()=>{const s=br({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=hv(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",cv.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function PS(t,e){return Qs(t,"POST","/v2/accounts:revokeToken",Gs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ue(e.idToken,"internal-error"),ue(typeof e.idToken<"u","internal-error"),ue(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Pm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ue(e.length!==0,"internal-error");const n=Pm(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ue(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await bS(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new er;return s&&(ue(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(ue(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(ue(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new er,this.toJSON())}_performRefresh(){return ns("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ws(t,e){ue(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ss{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=vd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new RS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new rh(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await $o(this,this.stsTokenManager.getToken(this.auth,e));return ue(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return wS(this,e)}reload(){return CS(this)}_assign(e){this!==e&&(ue(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ss(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ue(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Cl(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Nn(this.auth.app))return Promise.reject(as(this.auth));const e=await this.getIdToken();return await $o(this,IS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,c,u,h;const f=(s=n.displayName)!==null&&s!==void 0?s:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,_=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,E=(o=n.photoURL)!==null&&o!==void 0?o:void 0,S=(a=n.tenantId)!==null&&a!==void 0?a:void 0,b=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,F=(u=n.createdAt)!==null&&u!==void 0?u:void 0,D=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:L,emailVerified:U,isAnonymous:oe,providerData:le,stsTokenManager:A}=n;ue(L&&A,e,"internal-error");const v=er.fromJSON(this.name,A);ue(typeof L=="string",e,"internal-error"),ws(f,e.name),ws(m,e.name),ue(typeof U=="boolean",e,"internal-error"),ue(typeof oe=="boolean",e,"internal-error"),ws(_,e.name),ws(E,e.name),ws(S,e.name),ws(b,e.name),ws(F,e.name),ws(D,e.name);const w=new ss({uid:L,auth:e,email:m,emailVerified:U,displayName:f,isAnonymous:oe,photoURL:E,phoneNumber:_,tenantId:S,stsTokenManager:v,createdAt:F,lastLoginAt:D});return le&&Array.isArray(le)&&(w.providerData=le.map(R=>Object.assign({},R))),b&&(w._redirectEventId=b),w}static async _fromIdTokenResponse(e,n,s=!1){const i=new er;i.updateFromServerResponse(n);const r=new ss({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Cl(r),r}static async _fromGetAccountInfoResponse(e,n,s){const i=n.users[0];ue(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?fv(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),a=new er;a.updateFromIdToken(s);const c=new ss({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new rh(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const km=new Map;function is(t){hs(t instanceof Function,"Expected a class definition");let e=km.get(t);return e?(hs(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,km.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}pv.type="NONE";const Nm=pv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nl(t,e,n){return`firebase:${t}:${e}:${n}`}class tr{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=nl(this.userKey,i.apiKey,r),this.fullPersistenceKey=nl("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ss._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new tr(is(Nm),e,s);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let r=i[0]||is(Nm);const o=nl(s,e.config.apiKey,e.name);let a=null;for(const u of n)try{const h=await u._get(o);if(h){const f=ss._fromJSON(e,h);u!==r&&(a=f),r=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new tr(r,e,s):(r=c[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==r)try{await u._remove(o)}catch{}})),new tr(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Om(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(yv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(mv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ev(e))return"Blackberry";if(Tv(e))return"Webos";if(_v(e))return"Safari";if((e.includes("chrome/")||gv(e))&&!e.includes("edge/"))return"Chrome";if(vv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function mv(t=xt()){return/firefox\//i.test(t)}function _v(t=xt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function gv(t=xt()){return/crios\//i.test(t)}function yv(t=xt()){return/iemobile/i.test(t)}function vv(t=xt()){return/android/i.test(t)}function Ev(t=xt()){return/blackberry/i.test(t)}function Tv(t=xt()){return/webos/i.test(t)}function wd(t=xt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function kS(t=xt()){var e;return wd(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function NS(){return WR()&&document.documentMode===10}function Iv(t=xt()){return wd(t)||vv(t)||Tv(t)||Ev(t)||/windows phone/i.test(t)||yv(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wv(t,e=[]){let n;switch(t){case"Browser":n=Om(xt());break;case"Worker":n=`${Om(xt())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ks}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const c=e(r);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DS(t,e={}){return Qs(t,"GET","/v2/passwordPolicy",Gs(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MS=6;class xS{constructor(e){var n,s,i,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:MS,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,i,r,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(s=c.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(r=c.containsUppercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LS{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Dm(this),this.idTokenSubscription=new Dm(this),this.beforeStateQueue=new OS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=av,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=is(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await tr.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await dv(this,{idToken:e}),s=await ss._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Nn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ue(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Cl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=mS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Nn(this.app))return Promise.reject(as(this));const n=e?ot(e):null;return n&&ue(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ue(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Nn(this.app)?Promise.reject(as(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Nn(this.app)?Promise.reject(as(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(is(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await DS(this),n=new xS(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Sr("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await PS(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&is(e)||this._popupRedirectResolver;ue(n,this,"argument-error"),this.redirectPersistenceManager=await tr.create(this,[is(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ue(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,s,i);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ue(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=wv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&dS(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Si(t){return ot(t)}class Dm{constructor(e){this.auth=e,this.observer=null,this.addObserver=ZR(n=>this.observer=n)}get next(){return ue(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function VS(t){mc=t}function Av(t){return mc.loadJS(t)}function FS(){return mc.recaptchaEnterpriseScript}function US(){return mc.gapiScript}function BS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const $S="recaptcha-enterprise",qS="NO_RECAPTCHA";class jS{constructor(e){this.type=$S,this.auth=Si(e)}async verify(e="verify",n=!1){async function s(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{TS(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new ES(c);return r.tenantId==null?r._agentRecaptchaConfig=u:r._tenantRecaptchaConfigs[r.tenantId]=u,o(u.siteKey)}}).catch(c=>{a(c)})})}function i(r,o,a){const c=window.grecaptcha;bm(c)?c.enterprise.ready(()=>{c.enterprise.execute(r,{action:e}).then(u=>{o(u)}).catch(()=>{o(qS)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{s(this.auth).then(a=>{if(!n&&bm(window.grecaptcha))i(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=FS();c.length!==0&&(c+=a),Av(c).then(()=>{i(a,r,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function Mm(t,e,n,s=!1){const i=new jS(t);let r;try{r=await i.verify(n)}catch{r=await i.verify(n,!0)}const o=Object.assign({},e);return s?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function oh(t,e,n,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const r=await Mm(t,e,n,n==="getOobCode");return s(t,r)}else return s(t,e).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Mm(t,e,n,n==="getOobCode");return s(t,o)}else return Promise.reject(r)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WS(t,e){const n=yd(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(wl(r,e??{}))return i;wn(i,"already-initialized")}return n.initialize({options:e})}function HS(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(is);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function zS(t,e,n){const s=Si(t);ue(s._canInitEmulator,s,"emulator-config-failed"),ue(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!1,r=Rv(e),{host:o,port:a}=KS(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),GS()}function Rv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function KS(t){const e=Rv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:xm(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:xm(o)}}}function xm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function GS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ns("not implemented")}_getIdTokenResponse(e){return ns("not implemented")}_linkToIdToken(e,n){return ns("not implemented")}_getReauthenticationResolver(e){return ns("not implemented")}}async function QS(t,e){return Qs(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YS(t,e){return ra(t,"POST","/v1/accounts:signInWithPassword",Gs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XS(t,e){return ra(t,"POST","/v1/accounts:signInWithEmailLink",Gs(t,e))}async function JS(t,e){return ra(t,"POST","/v1/accounts:signInWithEmailLink",Gs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo extends Ad{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new qo(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new qo(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return oh(e,n,"signInWithPassword",YS);case"emailLink":return XS(e,{email:this._email,oobCode:this._password});default:wn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return oh(e,s,"signUpPassword",QS);case"emailLink":return JS(e,{idToken:n,email:this._email,oobCode:this._password});default:wn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nr(t,e){return ra(t,"POST","/v1/accounts:signInWithIdp",Gs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZS="http://localhost";class _i extends Ad{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new _i(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):wn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=vd(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new _i(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return nr(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,nr(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,nr(e,n)}buildRequest(){const e={requestUri:ZS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=br(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eb(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function tb(t){const e=io(ro(t)).link,n=e?io(ro(e)).deep_link_id:null,s=io(ro(t)).deep_link_id;return(s?io(ro(s)).link:null)||s||n||e||t}class Rd{constructor(e){var n,s,i,r,o,a;const c=io(ro(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,h=(s=c.oobCode)!==null&&s!==void 0?s:null,f=eb((i=c.mode)!==null&&i!==void 0?i:null);ue(u&&h&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=h,this.continueUrl=(r=c.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=tb(e);try{return new Rd(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(){this.providerId=Pr.PROVIDER_ID}static credential(e,n){return qo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Rd.parseLink(n);return ue(s,"argument-error"),qo._fromEmailAndCode(e,s.code,s.tenantId)}}Pr.PROVIDER_ID="password";Pr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Pr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa extends Cv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss extends oa{constructor(){super("facebook.com")}static credential(e){return _i._fromParams({providerId:Ss.PROVIDER_ID,signInMethod:Ss.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ss.credentialFromTaggedObject(e)}static credentialFromError(e){return Ss.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ss.credential(e.oauthAccessToken)}catch{return null}}}Ss.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ss.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs extends oa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return _i._fromParams({providerId:bs.PROVIDER_ID,signInMethod:bs.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return bs.credentialFromTaggedObject(e)}static credentialFromError(e){return bs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return bs.credential(n,s)}catch{return null}}}bs.GOOGLE_SIGN_IN_METHOD="google.com";bs.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps extends oa{constructor(){super("github.com")}static credential(e){return _i._fromParams({providerId:Ps.PROVIDER_ID,signInMethod:Ps.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ps.credentialFromTaggedObject(e)}static credentialFromError(e){return Ps.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ps.credential(e.oauthAccessToken)}catch{return null}}}Ps.GITHUB_SIGN_IN_METHOD="github.com";Ps.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks extends oa{constructor(){super("twitter.com")}static credential(e,n){return _i._fromParams({providerId:ks.PROVIDER_ID,signInMethod:ks.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ks.credentialFromTaggedObject(e)}static credentialFromError(e){return ks.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return ks.credential(n,s)}catch{return null}}}ks.TWITTER_SIGN_IN_METHOD="twitter.com";ks.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nb(t,e){return ra(t,"POST","/v1/accounts:signUp",Gs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await ss._fromIdTokenResponse(e,s,i),o=Lm(s);return new gi({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=Lm(s);return new gi({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function Lm(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl extends zn{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Sl.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new Sl(e,n,s,i)}}function Sv(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Sl._fromErrorAndOperation(t,r,e,s):r})}async function sb(t,e,n=!1){const s=await $o(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return gi._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ib(t,e,n=!1){const{auth:s}=t;if(Nn(s.app))return Promise.reject(as(s));const i="reauthenticate";try{const r=await $o(t,Sv(s,i,e,t),n);ue(r.idToken,s,"internal-error");const o=Id(r.idToken);ue(o,s,"internal-error");const{sub:a}=o;return ue(t.uid===a,s,"user-mismatch"),gi._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&wn(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bv(t,e,n=!1){if(Nn(t.app))return Promise.reject(as(t));const s="signIn",i=await Sv(t,s,e),r=await gi._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function rb(t,e){return bv(Si(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pv(t){const e=Si(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function ob(t,e,n){if(Nn(t.app))return Promise.reject(as(t));const s=Si(t),o=await oh(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",nb).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Pv(t),c}),a=await gi._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(a.user),a}function ab(t,e,n){return Nn(t.app)?Promise.reject(as(t)):rb(ot(t),Pr.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Pv(t),s})}function lb(t,e,n,s){return ot(t).onIdTokenChanged(e,n,s)}function cb(t,e,n){return ot(t).beforeAuthStateChanged(e,n)}function ub(t,e,n,s){return ot(t).onAuthStateChanged(e,n,s)}const bl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(bl,"1"),this.storage.removeItem(bl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hb=1e3,db=10;class Nv extends kv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Iv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);NS()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,db):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},hb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Nv.type="LOCAL";const fb=Nv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ov extends kv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ov.type="SESSION";const Dv=Ov;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pb(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new _c(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,r)),c=await pb(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}_c.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cd(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,c)=>{const u=Cd("",20);i.port1.start();const h=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(f){const m=f;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(h),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(m.data.response);break;default:clearTimeout(h),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(){return window}function _b(t){Ln().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mv(){return typeof Ln().WorkerGlobalScope<"u"&&typeof Ln().importScripts=="function"}async function gb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function yb(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function vb(){return Mv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xv="firebaseLocalStorageDb",Eb=1,Pl="firebaseLocalStorage",Lv="fbase_key";class aa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function gc(t,e){return t.transaction([Pl],e?"readwrite":"readonly").objectStore(Pl)}function Tb(){const t=indexedDB.deleteDatabase(xv);return new aa(t).toPromise()}function ah(){const t=indexedDB.open(xv,Eb);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Pl,{keyPath:Lv})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Pl)?e(s):(s.close(),await Tb(),e(await ah()))})})}async function Vm(t,e,n){const s=gc(t,!0).put({[Lv]:e,value:n});return new aa(s).toPromise()}async function Ib(t,e){const n=gc(t,!1).get(e),s=await new aa(n).toPromise();return s===void 0?null:s.value}function Fm(t,e){const n=gc(t,!0).delete(e);return new aa(n).toPromise()}const wb=800,Ab=3;class Vv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ah(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>Ab)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Mv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_c._getInstance(vb()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await gb(),!this.activeServiceWorker)return;this.sender=new mb(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||yb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ah();return await Vm(e,bl,"1"),await Fm(e,bl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Vm(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>Ib(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Fm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=gc(i,!1).getAll();return new aa(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),wb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Vv.type="LOCAL";const Rb=Vv;new ia(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cb(t,e){return e?is(e):(ue(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd extends Ad{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return nr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return nr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return nr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Sb(t){return bv(t.auth,new Sd(t),t.bypassAuthState)}function bb(t){const{auth:e,user:n}=t;return ue(n,e,"internal-error"),ib(n,new Sd(t),t.bypassAuthState)}async function Pb(t){const{auth:e,user:n}=t;return ue(n,e,"internal-error"),sb(n,new Sd(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fv{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Sb;case"linkViaPopup":case"linkViaRedirect":return Pb;case"reauthViaPopup":case"reauthViaRedirect":return bb;default:wn(this.auth,"internal-error")}}resolve(e){hs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){hs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kb=new ia(2e3,1e4);class Hi extends Fv{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Hi.currentPopupAction&&Hi.currentPopupAction.cancel(),Hi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ue(e,this.auth,"internal-error"),e}async onExecution(){hs(this.filter.length===1,"Popup operations only handle one event");const e=Cd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(xn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(xn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Hi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(xn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,kb.get())};e()}}Hi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nb="pendingRedirect",sl=new Map;class Ob extends Fv{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=sl.get(this.auth._key());if(!e){try{const s=await Db(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}sl.set(this.auth._key(),e)}return this.bypassAuthState||sl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Db(t,e){const n=Lb(e),s=xb(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function Mb(t,e){sl.set(t._key(),e)}function xb(t){return is(t._redirectPersistence)}function Lb(t){return nl(Nb,t.config.apiKey,t.name)}async function Vb(t,e,n=!1){if(Nn(t.app))return Promise.reject(as(t));const s=Si(t),i=Cb(s,e),o=await new Ob(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fb=10*60*1e3;class Ub{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Bb(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Uv(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(xn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Fb&&this.cachedEventUids.clear(),this.cachedEventUids.has(Um(e))}saveEventToCache(e){this.cachedEventUids.add(Um(e)),this.lastProcessedEventTime=Date.now()}}function Um(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Uv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Bb(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Uv(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $b(t,e={}){return Qs(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,jb=/^https?/;async function Wb(t){if(t.config.emulator)return;const{authorizedDomains:e}=await $b(t);for(const n of e)try{if(Hb(n))return}catch{}wn(t,"unauthorized-domain")}function Hb(t){const e=ih(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!jb.test(n))return!1;if(qb.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zb=new ia(3e4,6e4);function Bm(){const t=Ln().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Kb(t){return new Promise((e,n)=>{var s,i,r;function o(){Bm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Bm(),n(xn(t,"network-request-failed"))},timeout:zb.get()})}if(!((i=(s=Ln().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=Ln().gapi)===null||r===void 0)&&r.load)o();else{const a=BS("iframefcb");return Ln()[a]=()=>{gapi.load?o():n(xn(t,"network-request-failed"))},Av(`${US()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw il=null,e})}let il=null;function Gb(t){return il=il||Kb(t),il}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qb=new ia(5e3,15e3),Yb="__/auth/iframe",Xb="emulator/auth/iframe",Jb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Zb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function eP(t){const e=t.config;ue(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Td(e,Xb):`https://${t.config.authDomain}/${Yb}`,s={apiKey:e.apiKey,appName:t.name,v:Ks},i=Zb.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${br(s).slice(1)}`}async function tP(t){const e=await Gb(t),n=Ln().gapi;return ue(n,t,"internal-error"),e.open({where:document.body,url:eP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Jb,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=xn(t,"network-request-failed"),a=Ln().setTimeout(()=>{r(o)},Qb.get());function c(){Ln().clearTimeout(a),i(s)}s.ping(c).then(c,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},sP=500,iP=600,rP="_blank",oP="http://localhost";class $m{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function aP(t,e,n,s=sP,i=iP){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},nP),{width:s.toString(),height:i.toString(),top:r,left:o}),u=xt().toLowerCase();n&&(a=gv(u)?rP:n),mv(u)&&(e=e||oP,c.scrollbars="yes");const h=Object.entries(c).reduce((m,[_,E])=>`${m}${_}=${E},`,"");if(kS(u)&&a!=="_self")return lP(e||"",a),new $m(null);const f=window.open(e||"",a,h);ue(f,t,"popup-blocked");try{f.focus()}catch{}return new $m(f)}function lP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cP="__/auth/handler",uP="emulator/auth/handler",hP=encodeURIComponent("fac");async function qm(t,e,n,s,i,r){ue(t.config.authDomain,t,"auth-domain-config-required"),ue(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Ks,eventId:i};if(e instanceof Cv){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ju(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries({}))o[h]=f}if(e instanceof oa){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const c=await t._getAppCheckToken(),u=c?`#${hP}=${encodeURIComponent(c)}`:"";return`${dP(t)}?${br(a).slice(1)}${u}`}function dP({config:t}){return t.emulator?Td(t,uP):`https://${t.authDomain}/${cP}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iu="webStorageSupport";class fP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Dv,this._completeRedirectFn=Vb,this._overrideRedirectResult=Mb}async _openPopup(e,n,s,i){var r;hs((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await qm(e,n,s,ih(),i);return aP(e,o,Cd())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await qm(e,n,s,ih(),i);return _b(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(hs(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await tP(e),s=new Ub(e);return n.register("authEvent",i=>(ue(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Iu,{type:Iu},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[Iu];o!==void 0&&n(!!o),wn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Wb(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Iv()||_v()||wd()}}const pP=fP;var jm="@firebase/auth",Wm="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ue(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _P(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function gP(t){qn(new In("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;ue(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:wv(t)},u=new LS(s,i,r,c);return HS(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),qn(new In("auth-internal",e=>{const n=Si(e.getProvider("auth").getImmediate());return(s=>new mP(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),sn(jm,Wm,_P(t)),sn(jm,Wm,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yP=5*60,vP=Qy("authIdTokenMaxAge")||yP;let Hm=null;const EP=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>vP)return;const i=n==null?void 0:n.token;Hm!==i&&(Hm=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function yc(t=sv()){const e=yd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=WS(t,{popupRedirectResolver:pP,persistence:[Rb,fb,Dv]}),s=Qy("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(s,location.origin);if(location.origin===r.origin){const o=EP(r.toString());cb(n,o,()=>o(n.currentUser)),lb(n,a=>o(a))}}const i=Ky("auth");return i&&zS(n,`http://${i}`),n}function TP(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}VS({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=xn("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",TP().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});gP("Browser");const la={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},dr={LIGHT:"light",DARK:"dark",COLORED:"colored",AUTO:"auto"},jt={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},IP={BOUNCE:"bounce",SLIDE:"slide",FLIP:"flip",ZOOM:"zoom",NONE:"none"},Bv={dangerouslyHTMLString:!1,multiple:!0,position:la.TOP_RIGHT,autoClose:5e3,transition:"bounce",hideProgressBar:!1,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,className:"",bodyClassName:"",style:{},progressClassName:"",progressStyle:{},role:"alert",theme:"light"},wP={rtl:!1,newestOnTop:!1,toastClassName:""},$v={...Bv,...wP};({...Bv,type:jt.DEFAULT});var Me=(t=>(t[t.COLLAPSE_DURATION=300]="COLLAPSE_DURATION",t[t.DEBOUNCE_DURATION=50]="DEBOUNCE_DURATION",t.CSS_NAMESPACE="Toastify",t))(Me||{}),lh=(t=>(t.ENTRANCE_ANIMATION_END="d",t))(lh||{});const AP={enter:"Toastify--animate Toastify__bounce-enter",exit:"Toastify--animate Toastify__bounce-exit",appendPosition:!0},RP={enter:"Toastify--animate Toastify__slide-enter",exit:"Toastify--animate Toastify__slide-exit",appendPosition:!0},CP={enter:"Toastify--animate Toastify__zoom-enter",exit:"Toastify--animate Toastify__zoom-exit"},SP={enter:"Toastify--animate Toastify__flip-enter",exit:"Toastify--animate Toastify__flip-exit"},zm="Toastify--animate Toastify__none-enter";function qv(t,e=!1){var n;let s=AP;if(!t||typeof t=="string")switch(t){case"flip":s=SP;break;case"zoom":s=CP;break;case"slide":s=RP;break}else s=t;if(e)s.enter=zm;else if(s.enter===zm){const i=(n=s.exit.split("__")[1])==null?void 0:n.split("-")[0];s.enter=`Toastify--animate Toastify__${i}-enter`}return s}function bP(t){return t.containerId||String(t.position)}const vc="will-unmount";function PP(t=la.TOP_RIGHT){return!!document.querySelector(`.${Me.CSS_NAMESPACE}__toast-container--${t}`)}function kP(t=la.TOP_RIGHT){return`${Me.CSS_NAMESPACE}__toast-container--${t}`}function NP(t,e,n=!1){const s=[`${Me.CSS_NAMESPACE}__toast-container`,`${Me.CSS_NAMESPACE}__toast-container--${t}`,n?`${Me.CSS_NAMESPACE}__toast-container--rtl`:null].filter(Boolean).join(" ");return sr(e)?e({position:t,rtl:n,defaultClassName:s}):`${s} ${e||""}`}function OP(t){var e;const{position:n,containerClassName:s,rtl:i=!1,style:r={}}=t,o=Me.CSS_NAMESPACE,a=kP(n),c=document.querySelector(`.${o}`),u=document.querySelector(`.${a}`),h=!!u&&!((e=u.className)!=null&&e.includes(vc)),f=c||document.createElement("div"),m=document.createElement("div");m.className=NP(n,s,i),m.dataset.testid=`${Me.CSS_NAMESPACE}__toast-container--${n}`,m.id=bP(t);for(const _ in r)if(Object.prototype.hasOwnProperty.call(r,_)){const E=r[_];m.style[_]=E}return c||(f.className=Me.CSS_NAMESPACE,document.body.appendChild(f)),h||f.appendChild(m),m}function ch(t){var e,n,s;const i=typeof t=="string"?t:((e=t.currentTarget)==null?void 0:e.id)||((n=t.target)==null?void 0:n.id),r=document.getElementById(i);r&&r.removeEventListener("animationend",ch,!1);try{jo[i].unmount(),(s=document.getElementById(i))==null||s.remove(),delete jo[i],delete _t[i]}catch{}}const jo=Cn({});function DP(t,e){const n=document.getElementById(String(e));n&&(jo[n.id]=t)}function uh(t,e=!0){const n=String(t);if(!jo[n])return;const s=document.getElementById(n);s&&s.classList.add(vc),e?(xP(t),s&&s.addEventListener("animationend",ch,!1)):ch(n),jn.items=jn.items.filter(i=>i.containerId!==t)}function MP(t){for(const e in jo)uh(e,t);jn.items=[]}function jv(t,e){const n=document.getElementById(t.toastId);if(n){let s=t;s={...s,...qv(s.transition)};const i=s.appendPosition?`${s.exit}--${s.position}`:s.exit;n.className+=` ${i}`,e&&e(n)}}function xP(t){for(const e in _t)if(e===t)for(const n of _t[e]||[])jv(n)}function LP(t){const e=fr().find(n=>n.toastId===t);return e==null?void 0:e.containerId}function bd(t){return document.getElementById(t)}function VP(t){const e=bd(t.containerId);return e&&e.classList.contains(vc)}function Km(t){var e;const n=lr(t.content)?me(t.content.props):null;return n??me((e=t.data)!=null?e:{})}function FP(t){return t?jn.items.filter(e=>e.containerId===t).length>0:jn.items.length>0}function UP(){if(jn.items.length>0){const t=jn.items.shift();rl(t==null?void 0:t.toastContent,t==null?void 0:t.toastProps)}}const _t=Cn({}),jn=Cn({items:[]});function fr(){const t=me(_t);return Object.values(t).reduce((e,n)=>[...e,...n],[])}function BP(t){return fr().find(e=>e.toastId===t)}function rl(t,e={}){if(VP(e)){const n=bd(e.containerId);n&&n.addEventListener("animationend",hh.bind(null,t,e),!1)}else hh(t,e)}function hh(t,e={}){const n=bd(e.containerId);n&&n.removeEventListener("animationend",hh.bind(null,t,e),!1);const s=_t[e.containerId]||[],i=s.length>0;if(!i&&!PP(e.position)){const r=OP(e),o=ky(r1,e);o.mount(r),DP(o,r.id)}i&&!e.updateId&&(e.position=s[0].position),ta(()=>{e.updateId?Jt.update(e):Jt.add(t,e)})}const Jt={add(t,e){const{containerId:n=""}=e;n&&(_t[n]=_t[n]||[],_t[n].find(s=>s.toastId===e.toastId)||setTimeout(()=>{var s,i;e.newestOnTop?(s=_t[n])==null||s.unshift(e):(i=_t[n])==null||i.push(e),e.onOpen&&e.onOpen(Km(e))},e.delay||0))},remove(t){if(t){const e=LP(t);if(e){const n=_t[e];let s=n.find(i=>i.toastId===t);_t[e]=n.filter(i=>i.toastId!==t),!_t[e].length&&!FP(e)&&uh(e,!1),UP(),ta(()=>{s!=null&&s.onClose&&(s.onClose(Km(s)),s=void 0)})}}},update(t={}){const{containerId:e=""}=t;if(e&&t.updateId){_t[e]=_t[e]||[];const n=_t[e].find(r=>r.toastId===t.toastId),s=(n==null?void 0:n.position)!==t.position||(n==null?void 0:n.transition)!==t.transition,i={...t,disabledEnterTransition:!s,updateId:void 0};Jt.dismissForce(t==null?void 0:t.toastId),setTimeout(()=>{ke(i.content,i)},t.delay||0)}},clear(t,e=!0){t?uh(t,e):MP(e)},dismissCallback(t){var e;const n=(e=t.currentTarget)==null?void 0:e.id,s=document.getElementById(n);s&&(s.removeEventListener("animationend",Jt.dismissCallback,!1),setTimeout(()=>{Jt.remove(n)}))},dismiss(t){if(t){const e=fr();for(const n of e)if(n.toastId===t){jv(n,s=>{s.addEventListener("animationend",Jt.dismissCallback,!1)});break}}},dismissForce(t){if(t){const e=fr();for(const n of e)if(n.toastId===t){const s=document.getElementById(t);s&&(s.remove(),s.removeEventListener("animationend",Jt.dismissCallback,!1),Jt.remove(t));break}}}},Wv=Cn({}),kl=Cn({});function Hv(){return Math.random().toString(36).substring(2,9)}function $P(t){return typeof t=="number"&&!isNaN(t)}function dh(t){return typeof t=="string"}function sr(t){return typeof t=="function"}function Ec(...t){return ms(...t)}function ol(t){return typeof t=="object"&&(!!(t!=null&&t.render)||!!(t!=null&&t.setup)||typeof(t==null?void 0:t.type)=="object")}function qP(t={}){Wv[`${Me.CSS_NAMESPACE}-default-options`]=t}function jP(){return Wv[`${Me.CSS_NAMESPACE}-default-options`]||$v}function WP(){const t=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches;return document.documentElement.classList.contains("dark")||t?"dark":"light"}var al=(t=>(t[t.Enter=0]="Enter",t[t.Exit=1]="Exit",t))(al||{});const zv={containerId:{type:[String,Number],required:!1,default:""},clearOnUrlChange:{type:Boolean,required:!1,default:!0},disabledEnterTransition:{type:Boolean,required:!1,default:!1},dangerouslyHTMLString:{type:Boolean,required:!1,default:!1},multiple:{type:Boolean,required:!1,default:!0},limit:{type:Number,required:!1,default:void 0},position:{type:String,required:!1,default:la.TOP_LEFT},bodyClassName:{type:String,required:!1,default:""},autoClose:{type:[Number,Boolean],required:!1,default:!1},closeButton:{type:[Boolean,Function,Object],required:!1,default:void 0},transition:{type:[String,Object],required:!1,default:"bounce"},hideProgressBar:{type:Boolean,required:!1,default:!1},pauseOnHover:{type:Boolean,required:!1,default:!0},pauseOnFocusLoss:{type:Boolean,required:!1,default:!0},closeOnClick:{type:Boolean,required:!1,default:!0},progress:{type:Number,required:!1,default:void 0},progressClassName:{type:String,required:!1,default:""},toastStyle:{type:Object,required:!1,default(){return{}}},progressStyle:{type:Object,required:!1,default(){return{}}},role:{type:String,required:!1,default:"alert"},theme:{type:String,required:!1,default:dr.AUTO},content:{type:[String,Object,Function],required:!1,default:""},toastId:{type:[String,Number],required:!1,default:""},data:{type:[Object,String],required:!1,default(){return{}}},type:{type:String,required:!1,default:jt.DEFAULT},icon:{type:[Boolean,String,Number,Object,Function],required:!1,default:void 0},delay:{type:Number,required:!1,default:void 0},onOpen:{type:Function,required:!1,default:void 0},onClose:{type:Function,required:!1,default:void 0},onClick:{type:Function,required:!1,default:void 0},isLoading:{type:Boolean,required:!1,default:void 0},rtl:{type:Boolean,required:!1,default:!1},toastClassName:{type:String,required:!1,default:""},updateId:{type:[String,Number],required:!1,default:""},contentProps:{type:Object,required:!1,default:null}},HP={autoClose:{type:[Number,Boolean],required:!0},isRunning:{type:Boolean,required:!1,default:void 0},type:{type:String,required:!1,default:jt.DEFAULT},theme:{type:String,required:!1,default:dr.AUTO},hide:{type:Boolean,required:!1,default:void 0},className:{type:[String,Function],required:!1,default:""},controlledProgress:{type:Boolean,required:!1,default:void 0},rtl:{type:Boolean,required:!1,default:void 0},isIn:{type:Boolean,required:!1,default:void 0},progress:{type:Number,required:!1,default:void 0},closeToast:{type:Function,required:!1,default:void 0}},zP=wr({name:"ProgressBar",props:HP,setup(t,{attrs:e}){const n=Je(),s=Pe(()=>t.hide?"true":"false"),i=Pe(()=>({...e.style||{},animationDuration:`${t.autoClose===!0?5e3:t.autoClose}ms`,animationPlayState:t.isRunning?"running":"paused",opacity:t.hide||t.autoClose===!1?0:1,transform:t.controlledProgress?`scaleX(${t.progress})`:"none"})),r=Pe(()=>[`${Me.CSS_NAMESPACE}__progress-bar`,t.controlledProgress?`${Me.CSS_NAMESPACE}__progress-bar--controlled`:`${Me.CSS_NAMESPACE}__progress-bar--animated`,`${Me.CSS_NAMESPACE}__progress-bar-theme--${t.theme}`,`${Me.CSS_NAMESPACE}__progress-bar--${t.type}`,t.rtl?`${Me.CSS_NAMESPACE}__progress-bar--rtl`:null].filter(Boolean).join(" ")),o=Pe(()=>`${r.value} ${(e==null?void 0:e.class)||""}`),a=()=>{n.value&&(n.value.onanimationend=null,n.value.ontransitionend=null)},c=()=>{t.isIn&&t.closeToast&&t.autoClose!==!1&&(t.closeToast(),a())},u=Pe(()=>t.controlledProgress?null:c),h=Pe(()=>t.controlledProgress?c:null);return Xa(()=>{n.value&&(a(),n.value.onanimationend=u.value,n.value.ontransitionend=h.value)}),()=>_e("div",{ref:n,role:"progressbar","aria-hidden":s.value,"aria-label":"notification timer",class:o.value,style:i.value},null)}}),KP=wr({name:"CloseButton",inheritAttrs:!1,props:{theme:{type:String,required:!1,default:dr.AUTO},type:{type:String,required:!1,default:dr.LIGHT},ariaLabel:{type:String,required:!1,default:"close"},closeToast:{type:Function,required:!1,default:void 0}},setup(t){return()=>_e("button",{class:`${Me.CSS_NAMESPACE}__close-button ${Me.CSS_NAMESPACE}__close-button--${t.theme}`,type:"button",onClick:e=>{e.stopPropagation(),t.closeToast&&t.closeToast(e)},"aria-label":t.ariaLabel},[_e("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},[_e("path",{"fill-rule":"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"},null)])])}}),Tc=({theme:t,type:e,path:n,...s})=>_e("svg",ms({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":`var(--toastify-icon-color-${e})`},s),[_e("path",{d:n},null)]);function GP(t){return _e(Tc,ms(t,{path:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}),null)}function QP(t){return _e(Tc,ms(t,{path:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}),null)}function YP(t){return _e(Tc,ms(t,{path:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}),null)}function XP(t){return _e(Tc,ms(t,{path:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}),null)}function JP(){return _e("div",{class:`${Me.CSS_NAMESPACE}__spinner`},null)}const fh={info:QP,warning:GP,success:YP,error:XP,spinner:JP},ZP=t=>t in fh;function e1({theme:t,type:e,isLoading:n,icon:s}){let i;const r={theme:t,type:e};return n?i=fh.spinner():s===!1?i=void 0:ol(s)?i=me(s):sr(s)?i=s(r):lr(s)?i=mi(s,r):dh(s)||$P(s)?i=s:ZP(e)&&(i=fh[e](r)),i}const t1=()=>{};function n1(t,e,n=Me.COLLAPSE_DURATION){const{scrollHeight:s,style:i}=t,r=n;requestAnimationFrame(()=>{i.minHeight="initial",i.height=s+"px",i.transition=`all ${r}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(e,r)})})}function s1(t){const e=Je(!1),n=Je(!1),s=Je(!1),i=Je(al.Enter),r=Cn({...t,appendPosition:t.appendPosition||!1,collapse:typeof t.collapse>"u"?!0:t.collapse,collapseDuration:t.collapseDuration||Me.COLLAPSE_DURATION}),o=r.done||t1,a=Pe(()=>r.appendPosition?`${r.enter}--${r.position}`:r.enter),c=Pe(()=>r.appendPosition?`${r.exit}--${r.position}`:r.exit),u=Pe(()=>t.pauseOnHover?{onMouseenter:b,onMouseleave:S}:{});function h(){const D=a.value.split(" ");m().addEventListener(lh.ENTRANCE_ANIMATION_END,S,{once:!0});const L=oe=>{const le=m();oe.target===le&&(le.dispatchEvent(new Event(lh.ENTRANCE_ANIMATION_END)),le.removeEventListener("animationend",L),le.removeEventListener("animationcancel",L),i.value===al.Enter&&oe.type!=="animationcancel"&&le.classList.remove(...D))},U=()=>{const oe=m();oe.classList.add(...D),oe.addEventListener("animationend",L),oe.addEventListener("animationcancel",L)};t.pauseOnFocusLoss&&_(),U()}function f(){if(!m())return;const D=()=>{const U=m();U.removeEventListener("animationend",D),r.collapse?n1(U,o,r.collapseDuration):o()},L=()=>{const U=m();i.value=al.Exit,U&&(U.className+=` ${c.value}`,U.addEventListener("animationend",D))};n.value||(s.value?D():setTimeout(L))}function m(){return t.toastRef.value}function _(){document.hasFocus()||b(),window.addEventListener("focus",S),window.addEventListener("blur",b)}function E(){window.removeEventListener("focus",S),window.removeEventListener("blur",b)}function S(){(!t.loading.value||t.isLoading===void 0)&&(e.value=!0)}function b(){e.value=!1}function F(D){D&&(D.stopPropagation(),D.preventDefault()),n.value=!1}return Xa(f),Xa(()=>{const D=fr();n.value=D.findIndex(L=>L.toastId===r.toastId)>-1}),Xa(()=>{t.isLoading!==void 0&&(t.loading.value?b():S())}),Ar(h),ac(()=>{t.pauseOnFocusLoss&&E()}),{isIn:n,isRunning:e,hideToast:F,eventHandlers:u}}const i1=wr({name:"ToastItem",inheritAttrs:!1,props:zv,setup(t){const e=Je(),n=Pe(()=>!!t.isLoading),s=Pe(()=>t.progress!==void 0&&t.progress!==null),i=Pe(()=>e1(t)),r=Pe(()=>[`${Me.CSS_NAMESPACE}__toast`,`${Me.CSS_NAMESPACE}__toast-theme--${t.theme}`,`${Me.CSS_NAMESPACE}__toast--${t.type}`,t.rtl?`${Me.CSS_NAMESPACE}__toast--rtl`:void 0,t.toastClassName||""].filter(Boolean).join(" ")),{isRunning:o,isIn:a,hideToast:c,eventHandlers:u}=s1({toastRef:e,loading:n,done:()=>{Jt.remove(t.toastId)},...qv(t.transition,t.disabledEnterTransition),...t});return()=>_e("div",ms({id:t.toastId,class:r.value,style:t.toastStyle||{},ref:e,"data-testid":`toast-item-${t.toastId}`,onClick:h=>{t.closeOnClick&&c(),t.onClick&&t.onClick(h)}},u.value),[_e("div",{role:t.role,"data-testid":"toast-body",class:`${Me.CSS_NAMESPACE}__toast-body ${t.bodyClassName||""}`},[i.value!=null&&_e("div",{"data-testid":`toast-icon-${t.type}`,class:[`${Me.CSS_NAMESPACE}__toast-icon`,t.isLoading?"":`${Me.CSS_NAMESPACE}--animate-icon ${Me.CSS_NAMESPACE}__zoom-enter`].join(" ")},[ol(i.value)?ai(me(i.value),{theme:t.theme,type:t.type}):sr(i.value)?i.value({theme:t.theme,type:t.type}):i.value]),t.contentProps?_e("div",{"data-testid":"toast-content"},[ai(me(t.content),{contentProps:t.contentProps})]):_e("div",{"data-testid":"toast-content"},[ol(t.content)?ai(me(t.content),{toastProps:me(t),closeToast:c,data:t.data}):sr(t.content)?t.content({toastProps:me(t),closeToast:c,data:t.data}):t.dangerouslyHTMLString?ai("div",{innerHTML:t.content}):t.content])]),(t.closeButton===void 0||t.closeButton===!0)&&_e(KP,{theme:t.theme,closeToast:h=>{h.stopPropagation(),h.preventDefault(),c()}},null),ol(t.closeButton)?ai(me(t.closeButton),{closeToast:c,type:t.type,theme:t.theme}):sr(t.closeButton)?t.closeButton({closeToast:c,type:t.type,theme:t.theme}):null,_e(zP,{className:t.progressClassName,style:t.progressStyle,rtl:t.rtl,theme:t.theme,isIn:a.value,type:t.type,hide:t.hideProgressBar,isRunning:o.value,autoClose:t.autoClose,controlledProgress:s.value,progress:t.progress,closeToast:t.isLoading?void 0:c},null)])}});let To=0;function Kv(){typeof window>"u"||(To&&window.cancelAnimationFrame(To),To=window.requestAnimationFrame(Kv),kl.lastUrl!==window.location.href&&(kl.lastUrl=window.location.href,Jt.clear()))}const r1=wr({name:"ToastifyContainer",inheritAttrs:!1,props:zv,setup(t){const e=Pe(()=>t.containerId),n=Pe(()=>_t[e.value]||[]),s=Pe(()=>n.value.filter(i=>i.position===t.position));return Ar(()=>{typeof window<"u"&&t.clearOnUrlChange&&window.requestAnimationFrame(Kv)}),ac(()=>{typeof window<"u"&&To&&(window.cancelAnimationFrame(To),kl.lastUrl="")}),()=>_e(Ht,null,[s.value.map(i=>{const{toastId:r=""}=i;return _e(i1,ms({key:r},i),null)})])}});let wu=!1;function Gv(){const t=[];return fr().forEach(e=>{const n=document.getElementById(e.containerId);n&&!n.classList.contains(vc)&&t.push(e)}),t}function o1(t){const e=Gv().length,n=t??0;return n>0&&e+jn.items.length>=n}function a1(t){o1(t.limit)&&!t.updateId&&jn.items.push({toastId:t.toastId,containerId:t.containerId,toastContent:t.content,toastProps:t})}function Ys(t,e,n={}){if(wu)return;n=Ec(jP(),{type:e},me(n)),(!n.toastId||typeof n.toastId!="string"&&typeof n.toastId!="number")&&(n.toastId=Hv()),n={...n,content:t,containerId:n.containerId||String(n.position)};const s=Number(n==null?void 0:n.progress);return s<0&&(n.progress=0),s>1&&(n.progress=1),n.theme==="auto"&&(n.theme=WP()),a1(n),kl.lastUrl=window.location.href,n.multiple?jn.items.length?n.updateId&&rl(t,n):rl(t,n):(wu=!0,ke.clearAll(void 0,!1),setTimeout(()=>{rl(t,n)},0),setTimeout(()=>{wu=!1},390)),n.toastId}const ke=(t,e)=>Ys(t,jt.DEFAULT,e);ke.info=(t,e)=>Ys(t,jt.DEFAULT,{...e,type:jt.INFO});ke.error=(t,e)=>Ys(t,jt.DEFAULT,{...e,type:jt.ERROR});ke.warning=(t,e)=>Ys(t,jt.DEFAULT,{...e,type:jt.WARNING});ke.warn=ke.warning;ke.success=(t,e)=>Ys(t,jt.DEFAULT,{...e,type:jt.SUCCESS});ke.loading=(t,e)=>Ys(t,jt.DEFAULT,Ec(e,{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1}));ke.dark=(t,e)=>Ys(t,jt.DEFAULT,Ec(e,{theme:dr.DARK}));ke.remove=t=>{t?Jt.dismiss(t):Jt.clear()};ke.clearAll=(t,e)=>{ta(()=>{Jt.clear(t,e)})};ke.isActive=t=>{let e=!1;return e=Gv().findIndex(n=>n.toastId===t)>-1,e};ke.update=(t,e={})=>{setTimeout(()=>{const n=BP(t);if(n){const s=me(n),{content:i}=s,r={...s,...e,toastId:e.toastId||t,updateId:Hv()},o=r.render||i;delete r.render,Ys(o,r.type,r)}},0)};ke.done=t=>{ke.update(t,{isLoading:!1,progress:1})};ke.promise=l1;function l1(t,{pending:e,error:n,success:s},i){var r,o,a;let c;const u={...i||{},autoClose:!1};e&&(c=dh(e)?ke.loading(e,u):ke.loading(e.render,{...u,...e}));const h={autoClose:(r=i==null?void 0:i.autoClose)!=null?r:!0,closeOnClick:(o=i==null?void 0:i.closeOnClick)!=null?o:!0,closeButton:(a=i==null?void 0:i.autoClose)!=null?a:null,isLoading:void 0,draggable:null,delay:100},f=(_,E,S)=>{if(E==null){ke.remove(c);return}const b={type:_,...h,...i,data:S},F=dh(E)?{render:E}:E;return c?ke.update(c,{...b,...F,isLoading:!1}):ke(F.render,{...b,...F,isLoading:!1}),S},m=sr(t)?t():t;return m.then(_=>{f("success",s,_)}).catch(_=>{f("error",n,_)}),m}ke.POSITION=la;ke.THEME=dr;ke.TYPE=jt;ke.TRANSITIONS=IP;const c1={install(t,e={}){u1(e)}};typeof window<"u"&&(window.Vue3Toastify=c1);function u1(t={}){const e=Ec($v,t);qP(e)}const h1={class:"container"},d1={class:"auth-form"},f1={class:"auth-form_email"},p1={class:"auth-form_password"},m1={key:0,class:"auth-form_error"},_1={class:"auth-form_infoText"},g1={__name:"AuthorizationForm",setup(t){const e=Je(""),n=Je(""),s=Je("");function i(){const r=yc();ab(r,e.value,n.value).then(()=>{ls.push("/")}).catch(o=>{o.code==="auth/wrong-password"||o.code==="auth/user-not-found"?ke.error("Incorrect email or password.",{autoClose:3e3,position:"bottom-left",type:"error",theme:"colored"}):ke.error("An unexpected error occurred.",{autoClose:3e3,position:"bottom-left",type:"error",theme:"colored"})})}return(r,o)=>{const a=ld("router-link");return it(),ht("div",h1,[ne("div",d1,[o[6]||(o[6]=ne("h1",null,"Sign in",-1)),ne("div",f1,[o[2]||(o[2]=ne("p",{class:"auth-form_nameOfInput"},"Email",-1)),os(ne("input",{type:"email",class:"auth-form_input",placeholder:"Enter email","onUpdate:modelValue":o[0]||(o[0]=c=>e.value=c)},null,512),[[Ms,e.value]])]),ne("div",p1,[o[3]||(o[3]=ne("p",{class:"auth-form_nameOfInput"},"Password",-1)),os(ne("input",{type:"password",class:"auth-form_input",placeholder:"Enter password","onUpdate:modelValue":o[1]||(o[1]=c=>n.value=c)},null,512),[[Ms,n.value]])]),s.value?(it(),ht("p",m1,Zt(s.value),1)):Ds("",!0),ne("button",{class:"auth-form_button",onClick:i},"Sign in"),ne("p",_1,[o[5]||(o[5]=Mo("Don't have an account? ")),_e(a,{to:"/signup",class:"auth-form_link"},{default:od(()=>o[4]||(o[4]=[Mo("Sing up")])),_:1})])])])}}},y1=Rr(g1,[["__scopeId","data-v-ad2f2158"]]),v1={class:"container"},E1={class:"register-form"},T1={class:"register-form_email"},I1={class:"register-form_password"},w1={class:"register-form_password"},A1={key:0,class:"auth-form_error"},R1={class:"register-form_infoText"},C1={__name:"RegistrationForm",setup(t){const e=Je(""),n=Je(""),s=Je(""),i=Je();function r(){if(n.value!==s.value){i.value="Passwords miss match";return}ob(yc(),e.value,n.value).then(()=>{ls.push("/")}).catch(o=>{console.log(o.message),o.code==="auth/invalid-email"?ke.error("Incorrect email.",{autoClose:3e3,position:"bottom-left",type:"error",theme:"colored"}):o.code==="auth/weak-password"?ke.error("Password should be at least 6 characters.",{autoClose:3e3,position:"bottom-left",type:"error",theme:"colored"}):o.code==="auth/email-already-in-use"?ke.error("This email is already in use",{autoClose:3e3,position:"bottom-left",type:"error",theme:"colored"}):ke.error("An unexpected error occurred.",{autoClose:3e3,position:"bottom-left",type:"error",theme:"colored"})})}return(o,a)=>{const c=ld("router-link");return it(),ht("div",v1,[ne("div",E1,[a[8]||(a[8]=ne("h1",null,"Sign up",-1)),ne("div",T1,[a[3]||(a[3]=ne("p",{class:"register-form_nameOfInput"},"Email",-1)),os(ne("input",{type:"email",class:"register-form_input",placeholder:"Enter email","onUpdate:modelValue":a[0]||(a[0]=u=>e.value=u)},null,512),[[Ms,e.value]])]),ne("div",I1,[a[4]||(a[4]=ne("p",{class:"register-form_nameOfInput"},"Password",-1)),os(ne("input",{type:"password",class:"register-form_input",placeholder:"Enter password","onUpdate:modelValue":a[1]||(a[1]=u=>n.value=u)},null,512),[[Ms,n.value]])]),ne("div",w1,[a[5]||(a[5]=ne("p",{class:"register-form_nameOfInput"},"Confirm password",-1)),os(ne("input",{type:"password",class:"register-form_input",placeholder:"Enter password","onUpdate:modelValue":a[2]||(a[2]=u=>s.value=u)},null,512),[[Ms,s.value]])]),i.value?(it(),ht("p",A1,Zt(i.value),1)):Ds("",!0),ne("button",{class:"register-form_button",onClick:r},"Sign up"),ne("p",R1,[a[7]||(a[7]=Mo("Already have an account? ")),_e(c,{to:"/login",class:"register-form_link"},{default:od(()=>a[6]||(a[6]=[Mo("Sing in")])),_:1})])])])}}},S1=Rr(C1,[["__scopeId","data-v-87b2bb0e"]]),b1="data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%201024.00%201024.00'%20xmlns='http://www.w3.org/2000/svg'%20fill='%23333'%20stroke='%23333'%20stroke-width='20.48'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cpath%20fill='%23333'%20d='M224%20480h640a32%2032%200%201%201%200%2064H224a32%2032%200%200%201%200-64z'/%3e%3cpath%20fill='%23333'%20d='m237.248%20512%20265.408%20265.344a32%2032%200%200%201-45.312%2045.312l-288-288a32%2032%200%200%201%200-45.312l288-288a32%2032%200%201%201%2045.312%2045.312L237.248%20512z'/%3e%3c/g%3e%3c/svg%3e";var Gm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var di,Qv;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,v){function w(){}w.prototype=v.prototype,A.D=v.prototype,A.prototype=new w,A.prototype.constructor=A,A.C=function(R,C,P){for(var I=Array(arguments.length-2),Lt=2;Lt<arguments.length;Lt++)I[Lt-2]=arguments[Lt];return v.prototype[C].apply(R,I)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(A,v,w){w||(w=0);var R=Array(16);if(typeof v=="string")for(var C=0;16>C;++C)R[C]=v.charCodeAt(w++)|v.charCodeAt(w++)<<8|v.charCodeAt(w++)<<16|v.charCodeAt(w++)<<24;else for(C=0;16>C;++C)R[C]=v[w++]|v[w++]<<8|v[w++]<<16|v[w++]<<24;v=A.g[0],w=A.g[1],C=A.g[2];var P=A.g[3],I=v+(P^w&(C^P))+R[0]+3614090360&4294967295;v=w+(I<<7&4294967295|I>>>25),I=P+(C^v&(w^C))+R[1]+3905402710&4294967295,P=v+(I<<12&4294967295|I>>>20),I=C+(w^P&(v^w))+R[2]+606105819&4294967295,C=P+(I<<17&4294967295|I>>>15),I=w+(v^C&(P^v))+R[3]+3250441966&4294967295,w=C+(I<<22&4294967295|I>>>10),I=v+(P^w&(C^P))+R[4]+4118548399&4294967295,v=w+(I<<7&4294967295|I>>>25),I=P+(C^v&(w^C))+R[5]+1200080426&4294967295,P=v+(I<<12&4294967295|I>>>20),I=C+(w^P&(v^w))+R[6]+2821735955&4294967295,C=P+(I<<17&4294967295|I>>>15),I=w+(v^C&(P^v))+R[7]+4249261313&4294967295,w=C+(I<<22&4294967295|I>>>10),I=v+(P^w&(C^P))+R[8]+1770035416&4294967295,v=w+(I<<7&4294967295|I>>>25),I=P+(C^v&(w^C))+R[9]+2336552879&4294967295,P=v+(I<<12&4294967295|I>>>20),I=C+(w^P&(v^w))+R[10]+4294925233&4294967295,C=P+(I<<17&4294967295|I>>>15),I=w+(v^C&(P^v))+R[11]+2304563134&4294967295,w=C+(I<<22&4294967295|I>>>10),I=v+(P^w&(C^P))+R[12]+1804603682&4294967295,v=w+(I<<7&4294967295|I>>>25),I=P+(C^v&(w^C))+R[13]+4254626195&4294967295,P=v+(I<<12&4294967295|I>>>20),I=C+(w^P&(v^w))+R[14]+2792965006&4294967295,C=P+(I<<17&4294967295|I>>>15),I=w+(v^C&(P^v))+R[15]+1236535329&4294967295,w=C+(I<<22&4294967295|I>>>10),I=v+(C^P&(w^C))+R[1]+4129170786&4294967295,v=w+(I<<5&4294967295|I>>>27),I=P+(w^C&(v^w))+R[6]+3225465664&4294967295,P=v+(I<<9&4294967295|I>>>23),I=C+(v^w&(P^v))+R[11]+643717713&4294967295,C=P+(I<<14&4294967295|I>>>18),I=w+(P^v&(C^P))+R[0]+3921069994&4294967295,w=C+(I<<20&4294967295|I>>>12),I=v+(C^P&(w^C))+R[5]+3593408605&4294967295,v=w+(I<<5&4294967295|I>>>27),I=P+(w^C&(v^w))+R[10]+38016083&4294967295,P=v+(I<<9&4294967295|I>>>23),I=C+(v^w&(P^v))+R[15]+3634488961&4294967295,C=P+(I<<14&4294967295|I>>>18),I=w+(P^v&(C^P))+R[4]+3889429448&4294967295,w=C+(I<<20&4294967295|I>>>12),I=v+(C^P&(w^C))+R[9]+568446438&4294967295,v=w+(I<<5&4294967295|I>>>27),I=P+(w^C&(v^w))+R[14]+3275163606&4294967295,P=v+(I<<9&4294967295|I>>>23),I=C+(v^w&(P^v))+R[3]+4107603335&4294967295,C=P+(I<<14&4294967295|I>>>18),I=w+(P^v&(C^P))+R[8]+1163531501&4294967295,w=C+(I<<20&4294967295|I>>>12),I=v+(C^P&(w^C))+R[13]+2850285829&4294967295,v=w+(I<<5&4294967295|I>>>27),I=P+(w^C&(v^w))+R[2]+4243563512&4294967295,P=v+(I<<9&4294967295|I>>>23),I=C+(v^w&(P^v))+R[7]+1735328473&4294967295,C=P+(I<<14&4294967295|I>>>18),I=w+(P^v&(C^P))+R[12]+2368359562&4294967295,w=C+(I<<20&4294967295|I>>>12),I=v+(w^C^P)+R[5]+4294588738&4294967295,v=w+(I<<4&4294967295|I>>>28),I=P+(v^w^C)+R[8]+2272392833&4294967295,P=v+(I<<11&4294967295|I>>>21),I=C+(P^v^w)+R[11]+1839030562&4294967295,C=P+(I<<16&4294967295|I>>>16),I=w+(C^P^v)+R[14]+4259657740&4294967295,w=C+(I<<23&4294967295|I>>>9),I=v+(w^C^P)+R[1]+2763975236&4294967295,v=w+(I<<4&4294967295|I>>>28),I=P+(v^w^C)+R[4]+1272893353&4294967295,P=v+(I<<11&4294967295|I>>>21),I=C+(P^v^w)+R[7]+4139469664&4294967295,C=P+(I<<16&4294967295|I>>>16),I=w+(C^P^v)+R[10]+3200236656&4294967295,w=C+(I<<23&4294967295|I>>>9),I=v+(w^C^P)+R[13]+681279174&4294967295,v=w+(I<<4&4294967295|I>>>28),I=P+(v^w^C)+R[0]+3936430074&4294967295,P=v+(I<<11&4294967295|I>>>21),I=C+(P^v^w)+R[3]+3572445317&4294967295,C=P+(I<<16&4294967295|I>>>16),I=w+(C^P^v)+R[6]+76029189&4294967295,w=C+(I<<23&4294967295|I>>>9),I=v+(w^C^P)+R[9]+3654602809&4294967295,v=w+(I<<4&4294967295|I>>>28),I=P+(v^w^C)+R[12]+3873151461&4294967295,P=v+(I<<11&4294967295|I>>>21),I=C+(P^v^w)+R[15]+530742520&4294967295,C=P+(I<<16&4294967295|I>>>16),I=w+(C^P^v)+R[2]+3299628645&4294967295,w=C+(I<<23&4294967295|I>>>9),I=v+(C^(w|~P))+R[0]+4096336452&4294967295,v=w+(I<<6&4294967295|I>>>26),I=P+(w^(v|~C))+R[7]+1126891415&4294967295,P=v+(I<<10&4294967295|I>>>22),I=C+(v^(P|~w))+R[14]+2878612391&4294967295,C=P+(I<<15&4294967295|I>>>17),I=w+(P^(C|~v))+R[5]+4237533241&4294967295,w=C+(I<<21&4294967295|I>>>11),I=v+(C^(w|~P))+R[12]+1700485571&4294967295,v=w+(I<<6&4294967295|I>>>26),I=P+(w^(v|~C))+R[3]+2399980690&4294967295,P=v+(I<<10&4294967295|I>>>22),I=C+(v^(P|~w))+R[10]+4293915773&4294967295,C=P+(I<<15&4294967295|I>>>17),I=w+(P^(C|~v))+R[1]+2240044497&4294967295,w=C+(I<<21&4294967295|I>>>11),I=v+(C^(w|~P))+R[8]+1873313359&4294967295,v=w+(I<<6&4294967295|I>>>26),I=P+(w^(v|~C))+R[15]+4264355552&4294967295,P=v+(I<<10&4294967295|I>>>22),I=C+(v^(P|~w))+R[6]+2734768916&4294967295,C=P+(I<<15&4294967295|I>>>17),I=w+(P^(C|~v))+R[13]+1309151649&4294967295,w=C+(I<<21&4294967295|I>>>11),I=v+(C^(w|~P))+R[4]+4149444226&4294967295,v=w+(I<<6&4294967295|I>>>26),I=P+(w^(v|~C))+R[11]+3174756917&4294967295,P=v+(I<<10&4294967295|I>>>22),I=C+(v^(P|~w))+R[2]+718787259&4294967295,C=P+(I<<15&4294967295|I>>>17),I=w+(P^(C|~v))+R[9]+3951481745&4294967295,A.g[0]=A.g[0]+v&4294967295,A.g[1]=A.g[1]+(C+(I<<21&4294967295|I>>>11))&4294967295,A.g[2]=A.g[2]+C&4294967295,A.g[3]=A.g[3]+P&4294967295}s.prototype.u=function(A,v){v===void 0&&(v=A.length);for(var w=v-this.blockSize,R=this.B,C=this.h,P=0;P<v;){if(C==0)for(;P<=w;)i(this,A,P),P+=this.blockSize;if(typeof A=="string"){for(;P<v;)if(R[C++]=A.charCodeAt(P++),C==this.blockSize){i(this,R),C=0;break}}else for(;P<v;)if(R[C++]=A[P++],C==this.blockSize){i(this,R),C=0;break}}this.h=C,this.o+=v},s.prototype.v=function(){var A=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);A[0]=128;for(var v=1;v<A.length-8;++v)A[v]=0;var w=8*this.o;for(v=A.length-8;v<A.length;++v)A[v]=w&255,w/=256;for(this.u(A),A=Array(16),v=w=0;4>v;++v)for(var R=0;32>R;R+=8)A[w++]=this.g[v]>>>R&255;return A};function r(A,v){var w=a;return Object.prototype.hasOwnProperty.call(w,A)?w[A]:w[A]=v(A)}function o(A,v){this.h=v;for(var w=[],R=!0,C=A.length-1;0<=C;C--){var P=A[C]|0;R&&P==v||(w[C]=P,R=!1)}this.g=w}var a={};function c(A){return-128<=A&&128>A?r(A,function(v){return new o([v|0],0>v?-1:0)}):new o([A|0],0>A?-1:0)}function u(A){if(isNaN(A)||!isFinite(A))return f;if(0>A)return b(u(-A));for(var v=[],w=1,R=0;A>=w;R++)v[R]=A/w|0,w*=4294967296;return new o(v,0)}function h(A,v){if(A.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(A.charAt(0)=="-")return b(h(A.substring(1),v));if(0<=A.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=u(Math.pow(v,8)),R=f,C=0;C<A.length;C+=8){var P=Math.min(8,A.length-C),I=parseInt(A.substring(C,C+P),v);8>P?(P=u(Math.pow(v,P)),R=R.j(P).add(u(I))):(R=R.j(w),R=R.add(u(I)))}return R}var f=c(0),m=c(1),_=c(16777216);t=o.prototype,t.m=function(){if(S(this))return-b(this).m();for(var A=0,v=1,w=0;w<this.g.length;w++){var R=this.i(w);A+=(0<=R?R:4294967296+R)*v,v*=4294967296}return A},t.toString=function(A){if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(E(this))return"0";if(S(this))return"-"+b(this).toString(A);for(var v=u(Math.pow(A,6)),w=this,R="";;){var C=U(w,v).g;w=F(w,C.j(v));var P=((0<w.g.length?w.g[0]:w.h)>>>0).toString(A);if(w=C,E(w))return P+R;for(;6>P.length;)P="0"+P;R=P+R}},t.i=function(A){return 0>A?0:A<this.g.length?this.g[A]:this.h};function E(A){if(A.h!=0)return!1;for(var v=0;v<A.g.length;v++)if(A.g[v]!=0)return!1;return!0}function S(A){return A.h==-1}t.l=function(A){return A=F(this,A),S(A)?-1:E(A)?0:1};function b(A){for(var v=A.g.length,w=[],R=0;R<v;R++)w[R]=~A.g[R];return new o(w,~A.h).add(m)}t.abs=function(){return S(this)?b(this):this},t.add=function(A){for(var v=Math.max(this.g.length,A.g.length),w=[],R=0,C=0;C<=v;C++){var P=R+(this.i(C)&65535)+(A.i(C)&65535),I=(P>>>16)+(this.i(C)>>>16)+(A.i(C)>>>16);R=I>>>16,P&=65535,I&=65535,w[C]=I<<16|P}return new o(w,w[w.length-1]&-2147483648?-1:0)};function F(A,v){return A.add(b(v))}t.j=function(A){if(E(this)||E(A))return f;if(S(this))return S(A)?b(this).j(b(A)):b(b(this).j(A));if(S(A))return b(this.j(b(A)));if(0>this.l(_)&&0>A.l(_))return u(this.m()*A.m());for(var v=this.g.length+A.g.length,w=[],R=0;R<2*v;R++)w[R]=0;for(R=0;R<this.g.length;R++)for(var C=0;C<A.g.length;C++){var P=this.i(R)>>>16,I=this.i(R)&65535,Lt=A.i(C)>>>16,on=A.i(C)&65535;w[2*R+2*C]+=I*on,D(w,2*R+2*C),w[2*R+2*C+1]+=P*on,D(w,2*R+2*C+1),w[2*R+2*C+1]+=I*Lt,D(w,2*R+2*C+1),w[2*R+2*C+2]+=P*Lt,D(w,2*R+2*C+2)}for(R=0;R<v;R++)w[R]=w[2*R+1]<<16|w[2*R];for(R=v;R<2*v;R++)w[R]=0;return new o(w,0)};function D(A,v){for(;(A[v]&65535)!=A[v];)A[v+1]+=A[v]>>>16,A[v]&=65535,v++}function L(A,v){this.g=A,this.h=v}function U(A,v){if(E(v))throw Error("division by zero");if(E(A))return new L(f,f);if(S(A))return v=U(b(A),v),new L(b(v.g),b(v.h));if(S(v))return v=U(A,b(v)),new L(b(v.g),v.h);if(30<A.g.length){if(S(A)||S(v))throw Error("slowDivide_ only works with positive integers.");for(var w=m,R=v;0>=R.l(A);)w=oe(w),R=oe(R);var C=le(w,1),P=le(R,1);for(R=le(R,2),w=le(w,2);!E(R);){var I=P.add(R);0>=I.l(A)&&(C=C.add(w),P=I),R=le(R,1),w=le(w,1)}return v=F(A,C.j(v)),new L(C,v)}for(C=f;0<=A.l(v);){for(w=Math.max(1,Math.floor(A.m()/v.m())),R=Math.ceil(Math.log(w)/Math.LN2),R=48>=R?1:Math.pow(2,R-48),P=u(w),I=P.j(v);S(I)||0<I.l(A);)w-=R,P=u(w),I=P.j(v);E(P)&&(P=m),C=C.add(P),A=F(A,I)}return new L(C,A)}t.A=function(A){return U(this,A).h},t.and=function(A){for(var v=Math.max(this.g.length,A.g.length),w=[],R=0;R<v;R++)w[R]=this.i(R)&A.i(R);return new o(w,this.h&A.h)},t.or=function(A){for(var v=Math.max(this.g.length,A.g.length),w=[],R=0;R<v;R++)w[R]=this.i(R)|A.i(R);return new o(w,this.h|A.h)},t.xor=function(A){for(var v=Math.max(this.g.length,A.g.length),w=[],R=0;R<v;R++)w[R]=this.i(R)^A.i(R);return new o(w,this.h^A.h)};function oe(A){for(var v=A.g.length+1,w=[],R=0;R<v;R++)w[R]=A.i(R)<<1|A.i(R-1)>>>31;return new o(w,A.h)}function le(A,v){var w=v>>5;v%=32;for(var R=A.g.length-w,C=[],P=0;P<R;P++)C[P]=0<v?A.i(P+w)>>>v|A.i(P+w+1)<<32-v:A.i(P+w);return new o(C,A.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,Qv=s,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,di=o}).apply(typeof Gm<"u"?Gm:typeof self<"u"?self:typeof window<"u"?window:{});var $a=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Yv,oo,Xv,ll,ph,Jv,Zv,eE;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,d,p){return l==Array.prototype||l==Object.prototype||(l[d]=p.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof $a=="object"&&$a];for(var d=0;d<l.length;++d){var p=l[d];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var s=n(this);function i(l,d){if(d)e:{var p=s;l=l.split(".");for(var g=0;g<l.length-1;g++){var k=l[g];if(!(k in p))break e;p=p[k]}l=l[l.length-1],g=p[l],d=d(g),d!=g&&d!=null&&e(p,l,{configurable:!0,writable:!0,value:d})}}function r(l,d){l instanceof String&&(l+="");var p=0,g=!1,k={next:function(){if(!g&&p<l.length){var O=p++;return{value:d(O,l[O]),done:!1}}return g=!0,{done:!0,value:void 0}}};return k[Symbol.iterator]=function(){return k},k}i("Array.prototype.values",function(l){return l||function(){return r(this,function(d,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function c(l){var d=typeof l;return d=d!="object"?d:l?Array.isArray(l)?"array":d:"null",d=="array"||d=="object"&&typeof l.length=="number"}function u(l){var d=typeof l;return d=="object"&&l!=null||d=="function"}function h(l,d,p){return l.call.apply(l.bind,arguments)}function f(l,d,p){if(!l)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var k=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(k,g),l.apply(d,k)}}return function(){return l.apply(d,arguments)}}function m(l,d,p){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:f,m.apply(null,arguments)}function _(l,d){var p=Array.prototype.slice.call(arguments,1);return function(){var g=p.slice();return g.push.apply(g,arguments),l.apply(this,g)}}function E(l,d){function p(){}p.prototype=d.prototype,l.aa=d.prototype,l.prototype=new p,l.prototype.constructor=l,l.Qb=function(g,k,O){for(var z=Array(arguments.length-2),Ue=2;Ue<arguments.length;Ue++)z[Ue-2]=arguments[Ue];return d.prototype[k].apply(g,z)}}function S(l){const d=l.length;if(0<d){const p=Array(d);for(let g=0;g<d;g++)p[g]=l[g];return p}return[]}function b(l,d){for(let p=1;p<arguments.length;p++){const g=arguments[p];if(c(g)){const k=l.length||0,O=g.length||0;l.length=k+O;for(let z=0;z<O;z++)l[k+z]=g[z]}else l.push(g)}}class F{constructor(d,p){this.i=d,this.j=p,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function D(l){return/^[\s\xa0]*$/.test(l)}function L(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function U(l){return U[" "](l),l}U[" "]=function(){};var oe=L().indexOf("Gecko")!=-1&&!(L().toLowerCase().indexOf("webkit")!=-1&&L().indexOf("Edge")==-1)&&!(L().indexOf("Trident")!=-1||L().indexOf("MSIE")!=-1)&&L().indexOf("Edge")==-1;function le(l,d,p){for(const g in l)d.call(p,l[g],g,l)}function A(l,d){for(const p in l)d.call(void 0,l[p],p,l)}function v(l){const d={};for(const p in l)d[p]=l[p];return d}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function R(l,d){let p,g;for(let k=1;k<arguments.length;k++){g=arguments[k];for(p in g)l[p]=g[p];for(let O=0;O<w.length;O++)p=w[O],Object.prototype.hasOwnProperty.call(g,p)&&(l[p]=g[p])}}function C(l){var d=1;l=l.split(":");const p=[];for(;0<d&&l.length;)p.push(l.shift()),d--;return l.length&&p.push(l.join(":")),p}function P(l){a.setTimeout(()=>{throw l},0)}function I(){var l=Gt;let d=null;return l.g&&(d=l.g,l.g=l.g.next,l.g||(l.h=null),d.next=null),d}class Lt{constructor(){this.h=this.g=null}add(d,p){const g=on.get();g.set(d,p),this.h?this.h.next=g:this.g=g,this.h=g}}var on=new F(()=>new Ze,l=>l.reset());class Ze{constructor(){this.next=this.g=this.h=null}set(d,p){this.h=d,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let Te,ge=!1,Gt=new Lt,fn=()=>{const l=a.Promise.resolve(void 0);Te=()=>{l.then(an)}};var an=()=>{for(var l;l=I();){try{l.h.call(l.g)}catch(p){P(p)}var d=on;d.j(l),100>d.h&&(d.h++,l.next=d.g,d.g=l)}ge=!1};function Ge(){this.s=this.s,this.C=this.C}Ge.prototype.s=!1,Ge.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ge.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Qe(l,d){this.type=l,this.g=this.target=d,this.defaultPrevented=!1}Qe.prototype.h=function(){this.defaultPrevented=!0};var gs=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,d=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const p=()=>{};a.addEventListener("test",p,d),a.removeEventListener("test",p,d)}catch{}return l}();function Sn(l,d){if(Qe.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var p=this.type=l.type,g=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=d,d=l.relatedTarget){if(oe){e:{try{U(d.nodeName);var k=!0;break e}catch{}k=!1}k||(d=null)}}else p=="mouseover"?d=l.fromElement:p=="mouseout"&&(d=l.toElement);this.relatedTarget=d,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Wt[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Sn.aa.h.call(this)}}E(Sn,Qe);var Wt={2:"touch",3:"pen",4:"mouse"};Sn.prototype.h=function(){Sn.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var x="closure_listenable_"+(1e6*Math.random()|0),X=0;function Q(l,d,p,g,k){this.listener=l,this.proxy=null,this.src=d,this.type=p,this.capture=!!g,this.ha=k,this.key=++X,this.da=this.fa=!1}function Z(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Ie(l){this.src=l,this.g={},this.h=0}Ie.prototype.add=function(l,d,p,g,k){var O=l.toString();l=this.g[O],l||(l=this.g[O]=[],this.h++);var z=y(l,d,g,k);return-1<z?(d=l[z],p||(d.fa=!1)):(d=new Q(d,this.src,O,!!g,k),d.fa=p,l.push(d)),d};function Fe(l,d){var p=d.type;if(p in l.g){var g=l.g[p],k=Array.prototype.indexOf.call(g,d,void 0),O;(O=0<=k)&&Array.prototype.splice.call(g,k,1),O&&(Z(d),l.g[p].length==0&&(delete l.g[p],l.h--))}}function y(l,d,p,g){for(var k=0;k<l.length;++k){var O=l[k];if(!O.da&&O.listener==d&&O.capture==!!p&&O.ha==g)return k}return-1}var T="closure_lm_"+(1e6*Math.random()|0),N={};function B(l,d,p,g,k){if(Array.isArray(d)){for(var O=0;O<d.length;O++)B(l,d[O],p,g,k);return null}return p=se(p),l&&l[x]?l.K(d,p,u(g)?!!g.capture:!!g,k):M(l,d,p,!1,g,k)}function M(l,d,p,g,k,O){if(!d)throw Error("Invalid event type");var z=u(k)?!!k.capture:!!k,Ue=re(l);if(Ue||(l[T]=Ue=new Ie(l)),p=Ue.add(d,p,g,z,O),p.proxy)return p;if(g=q(),p.proxy=g,g.src=l,g.listener=p,l.addEventListener)gs||(k=z),k===void 0&&(k=!1),l.addEventListener(d.toString(),g,k);else if(l.attachEvent)l.attachEvent(W(d.toString()),g);else if(l.addListener&&l.removeListener)l.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return p}function q(){function l(p){return d.call(l.src,l.listener,p)}const d=j;return l}function K(l,d,p,g,k){if(Array.isArray(d))for(var O=0;O<d.length;O++)K(l,d[O],p,g,k);else g=u(g)?!!g.capture:!!g,p=se(p),l&&l[x]?(l=l.i,d=String(d).toString(),d in l.g&&(O=l.g[d],p=y(O,p,g,k),-1<p&&(Z(O[p]),Array.prototype.splice.call(O,p,1),O.length==0&&(delete l.g[d],l.h--)))):l&&(l=re(l))&&(d=l.g[d.toString()],l=-1,d&&(l=y(d,p,g,k)),(p=-1<l?d[l]:null)&&H(p))}function H(l){if(typeof l!="number"&&l&&!l.da){var d=l.src;if(d&&d[x])Fe(d.i,l);else{var p=l.type,g=l.proxy;d.removeEventListener?d.removeEventListener(p,g,l.capture):d.detachEvent?d.detachEvent(W(p),g):d.addListener&&d.removeListener&&d.removeListener(g),(p=re(d))?(Fe(p,l),p.h==0&&(p.src=null,d[T]=null)):Z(l)}}}function W(l){return l in N?N[l]:N[l]="on"+l}function j(l,d){if(l.da)l=!0;else{d=new Sn(d,this);var p=l.listener,g=l.ha||l.src;l.fa&&H(l),l=p.call(g,d)}return l}function re(l){return l=l[T],l instanceof Ie?l:null}var Y="__closure_events_fn_"+(1e9*Math.random()>>>0);function se(l){return typeof l=="function"?l:(l[Y]||(l[Y]=function(d){return l.handleEvent(d)}),l[Y])}function ee(){Ge.call(this),this.i=new Ie(this),this.M=this,this.F=null}E(ee,Ge),ee.prototype[x]=!0,ee.prototype.removeEventListener=function(l,d,p,g){K(this,l,d,p,g)};function ae(l,d){var p,g=l.F;if(g)for(p=[];g;g=g.F)p.push(g);if(l=l.M,g=d.type||d,typeof d=="string")d=new Qe(d,l);else if(d instanceof Qe)d.target=d.target||l;else{var k=d;d=new Qe(g,l),R(d,k)}if(k=!0,p)for(var O=p.length-1;0<=O;O--){var z=d.g=p[O];k=Ne(z,g,!0,d)&&k}if(z=d.g=l,k=Ne(z,g,!0,d)&&k,k=Ne(z,g,!1,d)&&k,p)for(O=0;O<p.length;O++)z=d.g=p[O],k=Ne(z,g,!1,d)&&k}ee.prototype.N=function(){if(ee.aa.N.call(this),this.i){var l=this.i,d;for(d in l.g){for(var p=l.g[d],g=0;g<p.length;g++)Z(p[g]);delete l.g[d],l.h--}}this.F=null},ee.prototype.K=function(l,d,p,g){return this.i.add(String(l),d,!1,p,g)},ee.prototype.L=function(l,d,p,g){return this.i.add(String(l),d,!0,p,g)};function Ne(l,d,p,g){if(d=l.i.g[String(d)],!d)return!0;d=d.concat();for(var k=!0,O=0;O<d.length;++O){var z=d[O];if(z&&!z.da&&z.capture==p){var Ue=z.listener,mt=z.ha||z.src;z.fa&&Fe(l.i,z),k=Ue.call(mt,g)!==!1&&k}}return k&&!g.defaultPrevented}function Ce(l,d,p){if(typeof l=="function")p&&(l=m(l,p));else if(l&&typeof l.handleEvent=="function")l=m(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:a.setTimeout(l,d||0)}function Tt(l){l.g=Ce(()=>{l.g=null,l.i&&(l.i=!1,Tt(l))},l.l);const d=l.h;l.h=null,l.m.apply(null,d)}class at extends Ge{constructor(d,p){super(),this.m=d,this.l=p,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:Tt(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function pt(l){Ge.call(this),this.h=l,this.g={}}E(pt,Ge);var It=[];function ys(l){le(l.g,function(d,p){this.g.hasOwnProperty(p)&&H(d)},l),l.g={}}pt.prototype.N=function(){pt.aa.N.call(this),ys(this)},pt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Oi=a.JSON.stringify,Vt=a.JSON.parse,ln=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function Di(){}Di.prototype.h=null;function Of(l){return l.h||(l.h=l.i())}function Df(){}var Vr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function qc(){Qe.call(this,"d")}E(qc,Qe);function jc(){Qe.call(this,"c")}E(jc,Qe);var Js={},Mf=null;function Ia(){return Mf=Mf||new ee}Js.La="serverreachability";function xf(l){Qe.call(this,Js.La,l)}E(xf,Qe);function Fr(l){const d=Ia();ae(d,new xf(d))}Js.STAT_EVENT="statevent";function Lf(l,d){Qe.call(this,Js.STAT_EVENT,l),this.stat=d}E(Lf,Qe);function Ft(l){const d=Ia();ae(d,new Lf(d,l))}Js.Ma="timingevent";function Vf(l,d){Qe.call(this,Js.Ma,l),this.size=d}E(Vf,Qe);function Ur(l,d){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},d)}function Br(){this.g=!0}Br.prototype.xa=function(){this.g=!1};function MI(l,d,p,g,k,O){l.info(function(){if(l.g)if(O)for(var z="",Ue=O.split("&"),mt=0;mt<Ue.length;mt++){var Se=Ue[mt].split("=");if(1<Se.length){var wt=Se[0];Se=Se[1];var At=wt.split("_");z=2<=At.length&&At[1]=="type"?z+(wt+"="+Se+"&"):z+(wt+"=redacted&")}}else z=null;else z=O;return"XMLHTTP REQ ("+g+") [attempt "+k+"]: "+d+`
`+p+`
`+z})}function xI(l,d,p,g,k,O,z){l.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+k+"]: "+d+`
`+p+`
`+O+" "+z})}function Mi(l,d,p,g){l.info(function(){return"XMLHTTP TEXT ("+d+"): "+VI(l,p)+(g?" "+g:"")})}function LI(l,d){l.info(function(){return"TIMEOUT: "+d})}Br.prototype.info=function(){};function VI(l,d){if(!l.g)return d;if(!d)return null;try{var p=JSON.parse(d);if(p){for(l=0;l<p.length;l++)if(Array.isArray(p[l])){var g=p[l];if(!(2>g.length)){var k=g[1];if(Array.isArray(k)&&!(1>k.length)){var O=k[0];if(O!="noop"&&O!="stop"&&O!="close")for(var z=1;z<k.length;z++)k[z]=""}}}}return Oi(p)}catch{return d}}var wa={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ff={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Wc;function Aa(){}E(Aa,Di),Aa.prototype.g=function(){return new XMLHttpRequest},Aa.prototype.i=function(){return{}},Wc=new Aa;function vs(l,d,p,g){this.j=l,this.i=d,this.l=p,this.R=g||1,this.U=new pt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Uf}function Uf(){this.i=null,this.g="",this.h=!1}var Bf={},Hc={};function zc(l,d,p){l.L=1,l.v=ba(Gn(d)),l.m=p,l.P=!0,$f(l,null)}function $f(l,d){l.F=Date.now(),Ra(l),l.A=Gn(l.v);var p=l.A,g=l.R;Array.isArray(g)||(g=[String(g)]),tp(p.i,"t",g),l.C=0,p=l.j.J,l.h=new Uf,l.g=vp(l.j,p?d:null,!l.m),0<l.O&&(l.M=new at(m(l.Y,l,l.g),l.O)),d=l.U,p=l.g,g=l.ca;var k="readystatechange";Array.isArray(k)||(k&&(It[0]=k.toString()),k=It);for(var O=0;O<k.length;O++){var z=B(p,k[O],g||d.handleEvent,!1,d.h||d);if(!z)break;d.g[z.key]=z}d=l.H?v(l.H):{},l.m?(l.u||(l.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,d)):(l.u="GET",l.g.ea(l.A,l.u,null,d)),Fr(),MI(l.i,l.u,l.A,l.l,l.R,l.m)}vs.prototype.ca=function(l){l=l.target;const d=this.M;d&&Qn(l)==3?d.j():this.Y(l)},vs.prototype.Y=function(l){try{if(l==this.g)e:{const At=Qn(this.g);var d=this.g.Ba();const Vi=this.g.Z();if(!(3>At)&&(At!=3||this.g&&(this.h.h||this.g.oa()||lp(this.g)))){this.J||At!=4||d==7||(d==8||0>=Vi?Fr(3):Fr(2)),Kc(this);var p=this.g.Z();this.X=p;t:if(qf(this)){var g=lp(this.g);l="";var k=g.length,O=Qn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Zs(this),$r(this);var z="";break t}this.h.i=new a.TextDecoder}for(d=0;d<k;d++)this.h.h=!0,l+=this.h.i.decode(g[d],{stream:!(O&&d==k-1)});g.length=0,this.h.g+=l,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=p==200,xI(this.i,this.u,this.A,this.l,this.R,At,p),this.o){if(this.T&&!this.K){t:{if(this.g){var Ue,mt=this.g;if((Ue=mt.g?mt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!D(Ue)){var Se=Ue;break t}}Se=null}if(p=Se)Mi(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Gc(this,p);else{this.o=!1,this.s=3,Ft(12),Zs(this),$r(this);break e}}if(this.P){p=!0;let pn;for(;!this.J&&this.C<z.length;)if(pn=FI(this,z),pn==Hc){At==4&&(this.s=4,Ft(14),p=!1),Mi(this.i,this.l,null,"[Incomplete Response]");break}else if(pn==Bf){this.s=4,Ft(15),Mi(this.i,this.l,z,"[Invalid Chunk]"),p=!1;break}else Mi(this.i,this.l,pn,null),Gc(this,pn);if(qf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),At!=4||z.length!=0||this.h.h||(this.s=1,Ft(16),p=!1),this.o=this.o&&p,!p)Mi(this.i,this.l,z,"[Invalid Chunked Response]"),Zs(this),$r(this);else if(0<z.length&&!this.W){this.W=!0;var wt=this.j;wt.g==this&&wt.ba&&!wt.M&&(wt.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),eu(wt),wt.M=!0,Ft(11))}}else Mi(this.i,this.l,z,null),Gc(this,z);At==4&&Zs(this),this.o&&!this.J&&(At==4?mp(this.j,this):(this.o=!1,Ra(this)))}else tw(this.g),p==400&&0<z.indexOf("Unknown SID")?(this.s=3,Ft(12)):(this.s=0,Ft(13)),Zs(this),$r(this)}}}catch{}finally{}};function qf(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function FI(l,d){var p=l.C,g=d.indexOf(`
`,p);return g==-1?Hc:(p=Number(d.substring(p,g)),isNaN(p)?Bf:(g+=1,g+p>d.length?Hc:(d=d.slice(g,g+p),l.C=g+p,d)))}vs.prototype.cancel=function(){this.J=!0,Zs(this)};function Ra(l){l.S=Date.now()+l.I,jf(l,l.I)}function jf(l,d){if(l.B!=null)throw Error("WatchDog timer not null");l.B=Ur(m(l.ba,l),d)}function Kc(l){l.B&&(a.clearTimeout(l.B),l.B=null)}vs.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(LI(this.i,this.A),this.L!=2&&(Fr(),Ft(17)),Zs(this),this.s=2,$r(this)):jf(this,this.S-l)};function $r(l){l.j.G==0||l.J||mp(l.j,l)}function Zs(l){Kc(l);var d=l.M;d&&typeof d.ma=="function"&&d.ma(),l.M=null,ys(l.U),l.g&&(d=l.g,l.g=null,d.abort(),d.ma())}function Gc(l,d){try{var p=l.j;if(p.G!=0&&(p.g==l||Qc(p.h,l))){if(!l.K&&Qc(p.h,l)&&p.G==3){try{var g=p.Da.g.parse(d)}catch{g=null}if(Array.isArray(g)&&g.length==3){var k=g;if(k[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<l.F)Ma(p),Oa(p);else break e;Zc(p),Ft(18)}}else p.za=k[1],0<p.za-p.T&&37500>k[2]&&p.F&&p.v==0&&!p.C&&(p.C=Ur(m(p.Za,p),6e3));if(1>=zf(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else ti(p,11)}else if((l.K||p.g==l)&&Ma(p),!D(d))for(k=p.Da.g.parse(d),d=0;d<k.length;d++){let Se=k[d];if(p.T=Se[0],Se=Se[1],p.G==2)if(Se[0]=="c"){p.K=Se[1],p.ia=Se[2];const wt=Se[3];wt!=null&&(p.la=wt,p.j.info("VER="+p.la));const At=Se[4];At!=null&&(p.Aa=At,p.j.info("SVER="+p.Aa));const Vi=Se[5];Vi!=null&&typeof Vi=="number"&&0<Vi&&(g=1.5*Vi,p.L=g,p.j.info("backChannelRequestTimeoutMs_="+g)),g=p;const pn=l.g;if(pn){const La=pn.g?pn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(La){var O=g.h;O.g||La.indexOf("spdy")==-1&&La.indexOf("quic")==-1&&La.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(Yc(O,O.h),O.h=null))}if(g.D){const tu=pn.g?pn.g.getResponseHeader("X-HTTP-Session-Id"):null;tu&&(g.ya=tu,je(g.I,g.D,tu))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-l.F,p.j.info("Handshake RTT: "+p.R+"ms")),g=p;var z=l;if(g.qa=yp(g,g.J?g.ia:null,g.W),z.K){Kf(g.h,z);var Ue=z,mt=g.L;mt&&(Ue.I=mt),Ue.B&&(Kc(Ue),Ra(Ue)),g.g=z}else fp(g);0<p.i.length&&Da(p)}else Se[0]!="stop"&&Se[0]!="close"||ti(p,7);else p.G==3&&(Se[0]=="stop"||Se[0]=="close"?Se[0]=="stop"?ti(p,7):Jc(p):Se[0]!="noop"&&p.l&&p.l.ta(Se),p.v=0)}}Fr(4)}catch{}}var UI=class{constructor(l,d){this.g=l,this.map=d}};function Wf(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Hf(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function zf(l){return l.h?1:l.g?l.g.size:0}function Qc(l,d){return l.h?l.h==d:l.g?l.g.has(d):!1}function Yc(l,d){l.g?l.g.add(d):l.h=d}function Kf(l,d){l.h&&l.h==d?l.h=null:l.g&&l.g.has(d)&&l.g.delete(d)}Wf.prototype.cancel=function(){if(this.i=Gf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Gf(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let d=l.i;for(const p of l.g.values())d=d.concat(p.D);return d}return S(l.i)}function BI(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(c(l)){for(var d=[],p=l.length,g=0;g<p;g++)d.push(l[g]);return d}d=[],p=0;for(g in l)d[p++]=l[g];return d}function $I(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(c(l)||typeof l=="string"){var d=[];l=l.length;for(var p=0;p<l;p++)d.push(p);return d}d=[],p=0;for(const g in l)d[p++]=g;return d}}}function Qf(l,d){if(l.forEach&&typeof l.forEach=="function")l.forEach(d,void 0);else if(c(l)||typeof l=="string")Array.prototype.forEach.call(l,d,void 0);else for(var p=$I(l),g=BI(l),k=g.length,O=0;O<k;O++)d.call(void 0,g[O],p&&p[O],l)}var Yf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function qI(l,d){if(l){l=l.split("&");for(var p=0;p<l.length;p++){var g=l[p].indexOf("="),k=null;if(0<=g){var O=l[p].substring(0,g);k=l[p].substring(g+1)}else O=l[p];d(O,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function ei(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof ei){this.h=l.h,Ca(this,l.j),this.o=l.o,this.g=l.g,Sa(this,l.s),this.l=l.l;var d=l.i,p=new Wr;p.i=d.i,d.g&&(p.g=new Map(d.g),p.h=d.h),Xf(this,p),this.m=l.m}else l&&(d=String(l).match(Yf))?(this.h=!1,Ca(this,d[1]||"",!0),this.o=qr(d[2]||""),this.g=qr(d[3]||"",!0),Sa(this,d[4]),this.l=qr(d[5]||"",!0),Xf(this,d[6]||"",!0),this.m=qr(d[7]||"")):(this.h=!1,this.i=new Wr(null,this.h))}ei.prototype.toString=function(){var l=[],d=this.j;d&&l.push(jr(d,Jf,!0),":");var p=this.g;return(p||d=="file")&&(l.push("//"),(d=this.o)&&l.push(jr(d,Jf,!0),"@"),l.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&l.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&l.push("/"),l.push(jr(p,p.charAt(0)=="/"?HI:WI,!0))),(p=this.i.toString())&&l.push("?",p),(p=this.m)&&l.push("#",jr(p,KI)),l.join("")};function Gn(l){return new ei(l)}function Ca(l,d,p){l.j=p?qr(d,!0):d,l.j&&(l.j=l.j.replace(/:$/,""))}function Sa(l,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);l.s=d}else l.s=null}function Xf(l,d,p){d instanceof Wr?(l.i=d,GI(l.i,l.h)):(p||(d=jr(d,zI)),l.i=new Wr(d,l.h))}function je(l,d,p){l.i.set(d,p)}function ba(l){return je(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function qr(l,d){return l?d?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function jr(l,d,p){return typeof l=="string"?(l=encodeURI(l).replace(d,jI),p&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function jI(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Jf=/[#\/\?@]/g,WI=/[#\?:]/g,HI=/[#\?]/g,zI=/[#\?@]/g,KI=/#/g;function Wr(l,d){this.h=this.g=null,this.i=l||null,this.j=!!d}function Es(l){l.g||(l.g=new Map,l.h=0,l.i&&qI(l.i,function(d,p){l.add(decodeURIComponent(d.replace(/\+/g," ")),p)}))}t=Wr.prototype,t.add=function(l,d){Es(this),this.i=null,l=xi(this,l);var p=this.g.get(l);return p||this.g.set(l,p=[]),p.push(d),this.h+=1,this};function Zf(l,d){Es(l),d=xi(l,d),l.g.has(d)&&(l.i=null,l.h-=l.g.get(d).length,l.g.delete(d))}function ep(l,d){return Es(l),d=xi(l,d),l.g.has(d)}t.forEach=function(l,d){Es(this),this.g.forEach(function(p,g){p.forEach(function(k){l.call(d,k,g,this)},this)},this)},t.na=function(){Es(this);const l=Array.from(this.g.values()),d=Array.from(this.g.keys()),p=[];for(let g=0;g<d.length;g++){const k=l[g];for(let O=0;O<k.length;O++)p.push(d[g])}return p},t.V=function(l){Es(this);let d=[];if(typeof l=="string")ep(this,l)&&(d=d.concat(this.g.get(xi(this,l))));else{l=Array.from(this.g.values());for(let p=0;p<l.length;p++)d=d.concat(l[p])}return d},t.set=function(l,d){return Es(this),this.i=null,l=xi(this,l),ep(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[d]),this.h+=1,this},t.get=function(l,d){return l?(l=this.V(l),0<l.length?String(l[0]):d):d};function tp(l,d,p){Zf(l,d),0<p.length&&(l.i=null,l.g.set(xi(l,d),S(p)),l.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],d=Array.from(this.g.keys());for(var p=0;p<d.length;p++){var g=d[p];const O=encodeURIComponent(String(g)),z=this.V(g);for(g=0;g<z.length;g++){var k=O;z[g]!==""&&(k+="="+encodeURIComponent(String(z[g]))),l.push(k)}}return this.i=l.join("&")};function xi(l,d){return d=String(d),l.j&&(d=d.toLowerCase()),d}function GI(l,d){d&&!l.j&&(Es(l),l.i=null,l.g.forEach(function(p,g){var k=g.toLowerCase();g!=k&&(Zf(this,g),tp(this,k,p))},l)),l.j=d}function QI(l,d){const p=new Br;if(a.Image){const g=new Image;g.onload=_(Ts,p,"TestLoadImage: loaded",!0,d,g),g.onerror=_(Ts,p,"TestLoadImage: error",!1,d,g),g.onabort=_(Ts,p,"TestLoadImage: abort",!1,d,g),g.ontimeout=_(Ts,p,"TestLoadImage: timeout",!1,d,g),a.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=l}else d(!1)}function YI(l,d){const p=new Br,g=new AbortController,k=setTimeout(()=>{g.abort(),Ts(p,"TestPingServer: timeout",!1,d)},1e4);fetch(l,{signal:g.signal}).then(O=>{clearTimeout(k),O.ok?Ts(p,"TestPingServer: ok",!0,d):Ts(p,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(k),Ts(p,"TestPingServer: error",!1,d)})}function Ts(l,d,p,g,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),g(p)}catch{}}function XI(){this.g=new ln}function JI(l,d,p){const g=p||"";try{Qf(l,function(k,O){let z=k;u(k)&&(z=Oi(k)),d.push(g+O+"="+encodeURIComponent(z))})}catch(k){throw d.push(g+"type="+encodeURIComponent("_badmap")),k}}function Pa(l){this.l=l.Ub||null,this.j=l.eb||!1}E(Pa,Di),Pa.prototype.g=function(){return new ka(this.l,this.j)},Pa.prototype.i=function(l){return function(){return l}}({});function ka(l,d){ee.call(this),this.D=l,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}E(ka,ee),t=ka.prototype,t.open=function(l,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=d,this.readyState=1,zr(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(d.body=l),(this.D||a).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Hr(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,zr(this)),this.g&&(this.readyState=3,zr(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;np(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function np(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var d=l.value?l.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!l.done}))&&(this.response=this.responseText+=d)}l.done?Hr(this):zr(this),this.readyState==3&&np(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,Hr(this))},t.Qa=function(l){this.g&&(this.response=l,Hr(this))},t.ga=function(){this.g&&Hr(this)};function Hr(l){l.readyState=4,l.l=null,l.j=null,l.v=null,zr(l)}t.setRequestHeader=function(l,d){this.u.append(l,d)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],d=this.h.entries();for(var p=d.next();!p.done;)p=p.value,l.push(p[0]+": "+p[1]),p=d.next();return l.join(`\r
`)};function zr(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(ka.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function sp(l){let d="";return le(l,function(p,g){d+=g,d+=":",d+=p,d+=`\r
`}),d}function Xc(l,d,p){e:{for(g in p){var g=!1;break e}g=!0}g||(p=sp(p),typeof l=="string"?p!=null&&encodeURIComponent(String(p)):je(l,d,p))}function Ye(l){ee.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}E(Ye,ee);var ZI=/^https?$/i,ew=["POST","PUT"];t=Ye.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,d,p,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);d=d?d.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Wc.g(),this.v=this.o?Of(this.o):Of(Wc),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(d,String(l),!0),this.B=!1}catch(O){ip(this,O);return}if(l=p||"",p=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var k in g)p.set(k,g[k]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const O of g.keys())p.set(O,g.get(O));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(p.keys()).find(O=>O.toLowerCase()=="content-type"),k=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(ew,d,void 0))||g||k||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,z]of p)this.g.setRequestHeader(O,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ap(this),this.u=!0,this.g.send(l),this.u=!1}catch(O){ip(this,O)}};function ip(l,d){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=d,l.m=5,rp(l),Na(l)}function rp(l){l.A||(l.A=!0,ae(l,"complete"),ae(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,ae(this,"complete"),ae(this,"abort"),Na(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Na(this,!0)),Ye.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?op(this):this.bb())},t.bb=function(){op(this)};function op(l){if(l.h&&typeof o<"u"&&(!l.v[1]||Qn(l)!=4||l.Z()!=2)){if(l.u&&Qn(l)==4)Ce(l.Ea,0,l);else if(ae(l,"readystatechange"),Qn(l)==4){l.h=!1;try{const z=l.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var p;if(!(p=d)){var g;if(g=z===0){var k=String(l.D).match(Yf)[1]||null;!k&&a.self&&a.self.location&&(k=a.self.location.protocol.slice(0,-1)),g=!ZI.test(k?k.toLowerCase():"")}p=g}if(p)ae(l,"complete"),ae(l,"success");else{l.m=6;try{var O=2<Qn(l)?l.g.statusText:""}catch{O=""}l.l=O+" ["+l.Z()+"]",rp(l)}}finally{Na(l)}}}}function Na(l,d){if(l.g){ap(l);const p=l.g,g=l.v[0]?()=>{}:null;l.g=null,l.v=null,d||ae(l,"ready");try{p.onreadystatechange=g}catch{}}}function ap(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function Qn(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<Qn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var d=this.g.responseText;return l&&d.indexOf(l)==0&&(d=d.substring(l.length)),Vt(d)}};function lp(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function tw(l){const d={};l=(l.g&&2<=Qn(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<l.length;g++){if(D(l[g]))continue;var p=C(l[g]);const k=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const O=d[k]||[];d[k]=O,O.push(p)}A(d,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Kr(l,d,p){return p&&p.internalChannelParams&&p.internalChannelParams[l]||d}function cp(l){this.Aa=0,this.i=[],this.j=new Br,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Kr("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Kr("baseRetryDelayMs",5e3,l),this.cb=Kr("retryDelaySeedMs",1e4,l),this.Wa=Kr("forwardChannelMaxRetries",2,l),this.wa=Kr("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Wf(l&&l.concurrentRequestLimit),this.Da=new XI,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=cp.prototype,t.la=8,t.G=1,t.connect=function(l,d,p,g){Ft(0),this.W=l,this.H=d||{},p&&g!==void 0&&(this.H.OSID=p,this.H.OAID=g),this.F=this.X,this.I=yp(this,null,this.W),Da(this)};function Jc(l){if(up(l),l.G==3){var d=l.U++,p=Gn(l.I);if(je(p,"SID",l.K),je(p,"RID",d),je(p,"TYPE","terminate"),Gr(l,p),d=new vs(l,l.j,d),d.L=2,d.v=ba(Gn(p)),p=!1,a.navigator&&a.navigator.sendBeacon)try{p=a.navigator.sendBeacon(d.v.toString(),"")}catch{}!p&&a.Image&&(new Image().src=d.v,p=!0),p||(d.g=vp(d.j,null),d.g.ea(d.v)),d.F=Date.now(),Ra(d)}gp(l)}function Oa(l){l.g&&(eu(l),l.g.cancel(),l.g=null)}function up(l){Oa(l),l.u&&(a.clearTimeout(l.u),l.u=null),Ma(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function Da(l){if(!Hf(l.h)&&!l.s){l.s=!0;var d=l.Ga;Te||fn(),ge||(Te(),ge=!0),Gt.add(d,l),l.B=0}}function nw(l,d){return zf(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=d.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=Ur(m(l.Ga,l,d),_p(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const k=new vs(this,this.j,l);let O=this.o;if(this.S&&(O?(O=v(O),R(O,this.S)):O=this.S),this.m!==null||this.O||(k.H=O,O=null),this.P)e:{for(var d=0,p=0;p<this.i.length;p++){t:{var g=this.i[p];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(d+=g,4096<d){d=p;break e}if(d===4096||p===this.i.length-1){d=p+1;break e}}d=1e3}else d=1e3;d=dp(this,k,d),p=Gn(this.I),je(p,"RID",l),je(p,"CVER",22),this.D&&je(p,"X-HTTP-Session-Id",this.D),Gr(this,p),O&&(this.O?d="headers="+encodeURIComponent(String(sp(O)))+"&"+d:this.m&&Xc(p,this.m,O)),Yc(this.h,k),this.Ua&&je(p,"TYPE","init"),this.P?(je(p,"$req",d),je(p,"SID","null"),k.T=!0,zc(k,p,null)):zc(k,p,d),this.G=2}}else this.G==3&&(l?hp(this,l):this.i.length==0||Hf(this.h)||hp(this))};function hp(l,d){var p;d?p=d.l:p=l.U++;const g=Gn(l.I);je(g,"SID",l.K),je(g,"RID",p),je(g,"AID",l.T),Gr(l,g),l.m&&l.o&&Xc(g,l.m,l.o),p=new vs(l,l.j,p,l.B+1),l.m===null&&(p.H=l.o),d&&(l.i=d.D.concat(l.i)),d=dp(l,p,1e3),p.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Yc(l.h,p),zc(p,g,d)}function Gr(l,d){l.H&&le(l.H,function(p,g){je(d,g,p)}),l.l&&Qf({},function(p,g){je(d,g,p)})}function dp(l,d,p){p=Math.min(l.i.length,p);var g=l.l?m(l.l.Na,l.l,l):null;e:{var k=l.i;let O=-1;for(;;){const z=["count="+p];O==-1?0<p?(O=k[0].g,z.push("ofs="+O)):O=0:z.push("ofs="+O);let Ue=!0;for(let mt=0;mt<p;mt++){let Se=k[mt].g;const wt=k[mt].map;if(Se-=O,0>Se)O=Math.max(0,k[mt].g-100),Ue=!1;else try{JI(wt,z,"req"+Se+"_")}catch{g&&g(wt)}}if(Ue){g=z.join("&");break e}}}return l=l.i.splice(0,p),d.D=l,g}function fp(l){if(!l.g&&!l.u){l.Y=1;var d=l.Fa;Te||fn(),ge||(Te(),ge=!0),Gt.add(d,l),l.v=0}}function Zc(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=Ur(m(l.Fa,l),_p(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,pp(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=Ur(m(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ft(10),Oa(this),pp(this))};function eu(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function pp(l){l.g=new vs(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var d=Gn(l.qa);je(d,"RID","rpc"),je(d,"SID",l.K),je(d,"AID",l.T),je(d,"CI",l.F?"0":"1"),!l.F&&l.ja&&je(d,"TO",l.ja),je(d,"TYPE","xmlhttp"),Gr(l,d),l.m&&l.o&&Xc(d,l.m,l.o),l.L&&(l.g.I=l.L);var p=l.g;l=l.ia,p.L=1,p.v=ba(Gn(d)),p.m=null,p.P=!0,$f(p,l)}t.Za=function(){this.C!=null&&(this.C=null,Oa(this),Zc(this),Ft(19))};function Ma(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function mp(l,d){var p=null;if(l.g==d){Ma(l),eu(l),l.g=null;var g=2}else if(Qc(l.h,d))p=d.D,Kf(l.h,d),g=1;else return;if(l.G!=0){if(d.o)if(g==1){p=d.m?d.m.length:0,d=Date.now()-d.F;var k=l.B;g=Ia(),ae(g,new Vf(g,p)),Da(l)}else fp(l);else if(k=d.s,k==3||k==0&&0<d.X||!(g==1&&nw(l,d)||g==2&&Zc(l)))switch(p&&0<p.length&&(d=l.h,d.i=d.i.concat(p)),k){case 1:ti(l,5);break;case 4:ti(l,10);break;case 3:ti(l,6);break;default:ti(l,2)}}}function _p(l,d){let p=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(p*=2),p*d}function ti(l,d){if(l.j.info("Error code "+d),d==2){var p=m(l.fb,l),g=l.Xa;const k=!g;g=new ei(g||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Ca(g,"https"),ba(g),k?QI(g.toString(),p):YI(g.toString(),p)}else Ft(2);l.G=0,l.l&&l.l.sa(d),gp(l),up(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),Ft(2)):(this.j.info("Failed to ping google.com"),Ft(1))};function gp(l){if(l.G=0,l.ka=[],l.l){const d=Gf(l.h);(d.length!=0||l.i.length!=0)&&(b(l.ka,d),b(l.ka,l.i),l.h.i.length=0,S(l.i),l.i.length=0),l.l.ra()}}function yp(l,d,p){var g=p instanceof ei?Gn(p):new ei(p);if(g.g!="")d&&(g.g=d+"."+g.g),Sa(g,g.s);else{var k=a.location;g=k.protocol,d=d?d+"."+k.hostname:k.hostname,k=+k.port;var O=new ei(null);g&&Ca(O,g),d&&(O.g=d),k&&Sa(O,k),p&&(O.l=p),g=O}return p=l.D,d=l.ya,p&&d&&je(g,p,d),je(g,"VER",l.la),Gr(l,g),g}function vp(l,d,p){if(d&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=l.Ca&&!l.pa?new Ye(new Pa({eb:p})):new Ye(l.pa),d.Ha(l.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ep(){}t=Ep.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function xa(){}xa.prototype.g=function(l,d){return new Qt(l,d)};function Qt(l,d){ee.call(this),this.g=new cp(d),this.l=l,this.h=d&&d.messageUrlParams||null,l=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(l?l["X-WebChannel-Content-Type"]=d.messageContentType:l={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(l?l["X-WebChannel-Client-Profile"]=d.va:l={"X-WebChannel-Client-Profile":d.va}),this.g.S=l,(l=d&&d.Sb)&&!D(l)&&(this.g.m=l),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!D(d)&&(this.g.D=d,l=this.h,l!==null&&d in l&&(l=this.h,d in l&&delete l[d])),this.j=new Li(this)}E(Qt,ee),Qt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Qt.prototype.close=function(){Jc(this.g)},Qt.prototype.o=function(l){var d=this.g;if(typeof l=="string"){var p={};p.__data__=l,l=p}else this.u&&(p={},p.__data__=Oi(l),l=p);d.i.push(new UI(d.Ya++,l)),d.G==3&&Da(d)},Qt.prototype.N=function(){this.g.l=null,delete this.j,Jc(this.g),delete this.g,Qt.aa.N.call(this)};function Tp(l){qc.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var d=l.__sm__;if(d){e:{for(const p in d){l=p;break e}l=void 0}(this.i=l)&&(l=this.i,d=d!==null&&l in d?d[l]:void 0),this.data=d}else this.data=l}E(Tp,qc);function Ip(){jc.call(this),this.status=1}E(Ip,jc);function Li(l){this.g=l}E(Li,Ep),Li.prototype.ua=function(){ae(this.g,"a")},Li.prototype.ta=function(l){ae(this.g,new Tp(l))},Li.prototype.sa=function(l){ae(this.g,new Ip)},Li.prototype.ra=function(){ae(this.g,"b")},xa.prototype.createWebChannel=xa.prototype.g,Qt.prototype.send=Qt.prototype.o,Qt.prototype.open=Qt.prototype.m,Qt.prototype.close=Qt.prototype.close,eE=function(){return new xa},Zv=function(){return Ia()},Jv=Js,ph={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},wa.NO_ERROR=0,wa.TIMEOUT=8,wa.HTTP_ERROR=6,ll=wa,Ff.COMPLETE="complete",Xv=Ff,Df.EventType=Vr,Vr.OPEN="a",Vr.CLOSE="b",Vr.ERROR="c",Vr.MESSAGE="d",ee.prototype.listen=ee.prototype.K,oo=Df,Ye.prototype.listenOnce=Ye.prototype.L,Ye.prototype.getLastError=Ye.prototype.Ka,Ye.prototype.getLastErrorCode=Ye.prototype.Ba,Ye.prototype.getStatus=Ye.prototype.Z,Ye.prototype.getResponseJson=Ye.prototype.Oa,Ye.prototype.getResponseText=Ye.prototype.oa,Ye.prototype.send=Ye.prototype.ea,Ye.prototype.setWithCredentials=Ye.prototype.Ha,Yv=Ye}).apply(typeof $a<"u"?$a:typeof self<"u"?self:typeof window<"u"?window:{});const Qm="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ct.UNAUTHENTICATED=new Ct(null),Ct.GOOGLE_CREDENTIALS=new Ct("google-credentials-uid"),Ct.FIRST_PARTY=new Ct("first-party-uid"),Ct.MOCK_USER=new Ct("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kr="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yi=new sa("@firebase/firestore");function Jr(){return yi.logLevel}function te(t,...e){if(yi.logLevel<=ye.DEBUG){const n=e.map(Pd);yi.debug(`Firestore (${kr}): ${t}`,...n)}}function ds(t,...e){if(yi.logLevel<=ye.ERROR){const n=e.map(Pd);yi.error(`Firestore (${kr}): ${t}`,...n)}}function pr(t,...e){if(yi.logLevel<=ye.WARN){const n=e.map(Pd);yi.warn(`Firestore (${kr}): ${t}`,...n)}}function Pd(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(t="Unexpected state"){const e=`FIRESTORE (${kr}) INTERNAL ASSERTION FAILED: `+t;throw ds(e),new Error(e)}function Le(t,e){t||he()}function fe(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class J extends zn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class P1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ct.UNAUTHENTICATED))}shutdown(){}}class k1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class N1{constructor(e){this.t=e,this.currentUser=Ct.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Le(this.o===void 0);let s=this.i;const i=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let r=new Vs;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Vs,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=r;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{te("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(te("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Vs)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(te("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Le(typeof s.accessToken=="string"),new tE(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Le(e===null||typeof e=="string"),new Ct(e)}}class O1{constructor(e,n,s){this.l=e,this.h=n,this.P=s,this.type="FirstParty",this.user=Ct.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class D1{constructor(e,n,s){this.l=e,this.h=n,this.P=s}getToken(){return Promise.resolve(new O1(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ct.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class M1{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class x1{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Le(this.o===void 0);const s=r=>{r.error!=null&&te("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.R;return this.R=r.token,te("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{te("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.A.getImmediate({optional:!0});r?i(r):te("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Le(typeof n.token=="string"),this.R=n.token,new M1(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L1(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=L1(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function be(t,e){return t<e?-1:t>e?1:0}function mr(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new J(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new J(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new J(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new J(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return rt.fromMillis(Date.now())}static fromDate(e){return rt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new rt(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?be(this.nanoseconds,e.nanoseconds):be(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e){this.timestamp=e}static fromTimestamp(e){return new de(e)}static min(){return new de(new rt(0,0))}static max(){return new de(new rt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(e,n,s){n===void 0?n=0:n>e.length&&he(),s===void 0?s=e.length-n:s>e.length-n&&he(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Wo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Wo?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ze extends Wo{construct(e,n,s){return new ze(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new J(V.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new ze(n)}static emptyPath(){return new ze([])}}const V1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class yt extends Wo{construct(e,n,s){return new yt(e,n,s)}static isValidIdentifier(e){return V1.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),yt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new yt(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new J(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new J(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new J(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new J(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new yt(n)}static emptyPath(){return new yt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e){this.path=e}static fromPath(e){return new ie(ze.fromString(e))}static fromName(e){return new ie(ze.fromString(e).popFirst(5))}static empty(){return new ie(ze.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ze.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ze.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ie(new ze(e.slice()))}}function F1(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=de.fromTimestamp(s===1e9?new rt(n+1,0):new rt(n,s));return new $s(i,ie.empty(),e)}function U1(t){return new $s(t.readTime,t.key,-1)}class $s{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new $s(de.min(),ie.empty(),-1)}static max(){return new $s(de.max(),ie.empty(),-1)}}function B1(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ie.comparator(t.documentKey,e.documentKey),n!==0?n:be(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class q1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ca(t){if(t.code!==V.FAILED_PRECONDITION||t.message!==$1)throw t;te("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&he(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new $((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof $?n:$.resolve(n)}catch(n){return $.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):$.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):$.reject(n)}static resolve(e){return new $((n,s)=>{n(e)})}static reject(e){return new $((n,s)=>{s(e)})}static waitFor(e){return new $((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},c=>s(c))}),o=!0,r===i&&n()})}static or(e){let n=$.resolve(!1);for(const s of e)n=n.next(i=>i?$.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new $((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let c=0;c<r;c++){const u=c;n(e[u]).next(h=>{o[u]=h,++a,a===r&&s(o)},h=>i(h))}})}static doWhile(e,n){return new $((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}function j1(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ua(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ie(s),this.se=s=>n.writeSequenceNumber(s))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}kd.oe=-1;function Ic(t){return t==null}function Nl(t){return t===0&&1/t==-1/0}function W1(t){return typeof t=="number"&&Number.isInteger(t)&&!Nl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ym(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function bi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function sE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let st=class mh{constructor(e,n){this.comparator=e,this.root=n||Fs.EMPTY}insert(e,n){return new mh(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Fs.BLACK,null,null))}remove(e){return new mh(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Fs.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new qa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new qa(this.root,e,this.comparator,!1)}getReverseIterator(){return new qa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new qa(this.root,e,this.comparator,!0)}},qa=class{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},Fs=class Jn{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Jn.RED,this.left=i??Jn.EMPTY,this.right=r??Jn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new Jn(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Jn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Jn.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Jn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Jn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw he();const e=this.left.check();if(e!==this.right.check())throw he();return e+(this.isRed()?0:1)}};Fs.EMPTY=null,Fs.RED=!0,Fs.BLACK=!1;Fs.EMPTY=new class{constructor(){this.size=0}get key(){throw he()}get value(){throw he()}get color(){throw he()}get left(){throw he()}get right(){throw he()}copy(e,n,s,i,r){return this}insert(e,n,s){return new Fs(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.comparator=e,this.data=new st(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Xm(this.data.getIterator())}getIteratorFrom(e){return new Xm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof vt)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new vt(this.comparator);return n.data=e,n}}class Xm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e){this.fields=e,e.sort(yt.comparator)}static empty(){return new nn([])}unionWith(e){let n=new vt(yt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new nn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return mr(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new iE("Invalid base64 string: "+r):r}}(e);return new Et(n)}static fromUint8Array(e){const n=function(i){let r="";for(let o=0;o<i.length;++o)r+=String.fromCharCode(i[o]);return r}(e);return new Et(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let i=0;i<n.length;i++)s[i]=n.charCodeAt(i);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return be(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Et.EMPTY_BYTE_STRING=new Et("");const H1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function qs(t){if(Le(!!t),typeof t=="string"){let e=0;const n=H1.exec(t);if(Le(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Xe(t.seconds),nanos:Xe(t.nanos)}}function Xe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function vi(t){return typeof t=="string"?Et.fromBase64String(t):Et.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nd(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Od(t){const e=t.mapValue.fields.__previous_value__;return Nd(e)?Od(e):e}function Ho(t){const e=qs(t.mapValue.fields.__local_write_time__.timestampValue);return new rt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z1{constructor(e,n,s,i,r,o,a,c,u){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u}}class zo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new zo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof zo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ja={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ei(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Nd(t)?4:G1(t)?9007199254740991:K1(t)?10:11:he()}function Wn(t,e){if(t===e)return!0;const n=Ei(t);if(n!==Ei(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ho(t).isEqual(Ho(e));case 3:return function(i,r){if(typeof i.timestampValue=="string"&&typeof r.timestampValue=="string"&&i.timestampValue.length===r.timestampValue.length)return i.timestampValue===r.timestampValue;const o=qs(i.timestampValue),a=qs(r.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,r){return vi(i.bytesValue).isEqual(vi(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,r){return Xe(i.geoPointValue.latitude)===Xe(r.geoPointValue.latitude)&&Xe(i.geoPointValue.longitude)===Xe(r.geoPointValue.longitude)}(t,e);case 2:return function(i,r){if("integerValue"in i&&"integerValue"in r)return Xe(i.integerValue)===Xe(r.integerValue);if("doubleValue"in i&&"doubleValue"in r){const o=Xe(i.doubleValue),a=Xe(r.doubleValue);return o===a?Nl(o)===Nl(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return mr(t.arrayValue.values||[],e.arrayValue.values||[],Wn);case 10:case 11:return function(i,r){const o=i.mapValue.fields||{},a=r.mapValue.fields||{};if(Ym(o)!==Ym(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!Wn(o[c],a[c])))return!1;return!0}(t,e);default:return he()}}function Ko(t,e){return(t.values||[]).find(n=>Wn(n,e))!==void 0}function _r(t,e){if(t===e)return 0;const n=Ei(t),s=Ei(e);if(n!==s)return be(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return be(t.booleanValue,e.booleanValue);case 2:return function(r,o){const a=Xe(r.integerValue||r.doubleValue),c=Xe(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return Jm(t.timestampValue,e.timestampValue);case 4:return Jm(Ho(t),Ho(e));case 5:return be(t.stringValue,e.stringValue);case 6:return function(r,o){const a=vi(r),c=vi(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(r,o){const a=r.split("/"),c=o.split("/");for(let u=0;u<a.length&&u<c.length;u++){const h=be(a[u],c[u]);if(h!==0)return h}return be(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,o){const a=be(Xe(r.latitude),Xe(o.latitude));return a!==0?a:be(Xe(r.longitude),Xe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Zm(t.arrayValue,e.arrayValue);case 10:return function(r,o){var a,c,u,h;const f=r.fields||{},m=o.fields||{},_=(a=f.value)===null||a===void 0?void 0:a.arrayValue,E=(c=m.value)===null||c===void 0?void 0:c.arrayValue,S=be(((u=_==null?void 0:_.values)===null||u===void 0?void 0:u.length)||0,((h=E==null?void 0:E.values)===null||h===void 0?void 0:h.length)||0);return S!==0?S:Zm(_,E)}(t.mapValue,e.mapValue);case 11:return function(r,o){if(r===ja.mapValue&&o===ja.mapValue)return 0;if(r===ja.mapValue)return 1;if(o===ja.mapValue)return-1;const a=r.fields||{},c=Object.keys(a),u=o.fields||{},h=Object.keys(u);c.sort(),h.sort();for(let f=0;f<c.length&&f<h.length;++f){const m=be(c[f],h[f]);if(m!==0)return m;const _=_r(a[c[f]],u[h[f]]);if(_!==0)return _}return be(c.length,h.length)}(t.mapValue,e.mapValue);default:throw he()}}function Jm(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return be(t,e);const n=qs(t),s=qs(e),i=be(n.seconds,s.seconds);return i!==0?i:be(n.nanos,s.nanos)}function Zm(t,e){const n=t.values||[],s=e.values||[];for(let i=0;i<n.length&&i<s.length;++i){const r=_r(n[i],s[i]);if(r)return r}return be(n.length,s.length)}function gr(t){return _h(t)}function _h(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const s=qs(n);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return vi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ie.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let s="[",i=!0;for(const r of n.values||[])i?i=!1:s+=",",s+=_h(r);return s+"]"}(t.arrayValue):"mapValue"in t?function(n){const s=Object.keys(n.fields||{}).sort();let i="{",r=!0;for(const o of s)r?r=!1:i+=",",i+=`${o}:${_h(n.fields[o])}`;return i+"}"}(t.mapValue):he()}function e_(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function gh(t){return!!t&&"integerValue"in t}function Dd(t){return!!t&&"arrayValue"in t}function t_(t){return!!t&&"nullValue"in t}function n_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function cl(t){return!!t&&"mapValue"in t}function K1(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Io(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return bi(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Io(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Io(t.arrayValue.values[n]);return e}return Object.assign({},t)}function G1(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e){this.value=e}static empty(){return new zt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!cl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Io(n)}setAll(e){let n=yt.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=Io(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());cl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Wn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];cl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){bi(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new zt(Io(this.value))}}function rE(t){const e=[];return bi(t.fields,(n,s)=>{const i=new yt([n]);if(cl(s)){const r=rE(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new nn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e,n,s,i,r,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Pt(e,0,de.min(),de.min(),de.min(),zt.empty(),0)}static newFoundDocument(e,n,s,i){return new Pt(e,1,n,de.min(),s,i,0)}static newNoDocument(e,n){return new Pt(e,2,n,de.min(),de.min(),zt.empty(),0)}static newUnknownDocument(e,n){return new Pt(e,3,n,de.min(),de.min(),zt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(de.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=zt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=zt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=de.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Pt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Pt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(e,n){this.position=e,this.inclusive=n}}function s_(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=ie.comparator(ie.fromName(o.referenceValue),n.key):s=_r(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function i_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Wn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(e,n="asc"){this.field=e,this.dir=n}}function Q1(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{}class tt extends oE{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new X1(e,n,s):n==="array-contains"?new ek(e,s):n==="in"?new tk(e,s):n==="not-in"?new nk(e,s):n==="array-contains-any"?new sk(e,s):new tt(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new J1(e,s):new Z1(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(_r(n,this.value)):n!==null&&Ei(this.value)===Ei(n)&&this.matchesComparison(_r(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return he()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class An extends oE{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new An(e,n)}matches(e){return aE(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function aE(t){return t.op==="and"}function lE(t){return Y1(t)&&aE(t)}function Y1(t){for(const e of t.filters)if(e instanceof An)return!1;return!0}function yh(t){if(t instanceof tt)return t.field.canonicalString()+t.op.toString()+gr(t.value);if(lE(t))return t.filters.map(e=>yh(e)).join(",");{const e=t.filters.map(n=>yh(n)).join(",");return`${t.op}(${e})`}}function cE(t,e){return t instanceof tt?function(s,i){return i instanceof tt&&s.op===i.op&&s.field.isEqual(i.field)&&Wn(s.value,i.value)}(t,e):t instanceof An?function(s,i){return i instanceof An&&s.op===i.op&&s.filters.length===i.filters.length?s.filters.reduce((r,o,a)=>r&&cE(o,i.filters[a]),!0):!1}(t,e):void he()}function uE(t){return t instanceof tt?function(n){return`${n.field.canonicalString()} ${n.op} ${gr(n.value)}`}(t):t instanceof An?function(n){return n.op.toString()+" {"+n.getFilters().map(uE).join(" ,")+"}"}(t):"Filter"}class X1 extends tt{constructor(e,n,s){super(e,n,s),this.key=ie.fromName(s.referenceValue)}matches(e){const n=ie.comparator(e.key,this.key);return this.matchesComparison(n)}}class J1 extends tt{constructor(e,n){super(e,"in",n),this.keys=hE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Z1 extends tt{constructor(e,n){super(e,"not-in",n),this.keys=hE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function hE(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>ie.fromName(s.referenceValue))}class ek extends tt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Dd(n)&&Ko(n.arrayValue,this.value)}}class tk extends tt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ko(this.value.arrayValue,n)}}class nk extends tt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ko(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ko(this.value.arrayValue,n)}}class sk extends tt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Dd(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Ko(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ik{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ue=null}}function r_(t,e=null,n=[],s=[],i=null,r=null,o=null){return new ik(t,e,n,s,i,r,o)}function Md(t){const e=fe(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>yh(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Ic(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>gr(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>gr(s)).join(",")),e.ue=n}return e.ue}function xd(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Q1(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!cE(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!i_(t.startAt,e.startAt)&&i_(t.endAt,e.endAt)}function vh(t){return ie.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function rk(t,e,n,s,i,r,o,a){return new ha(t,e,n,s,i,r,o,a)}function wc(t){return new ha(t)}function o_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function dE(t){return t.collectionGroup!==null}function wo(t){const e=fe(t);if(e.ce===null){e.ce=[];const n=new Set;for(const r of e.explicitOrderBy)e.ce.push(r),n.add(r.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new vt(yt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(r=>{n.has(r.canonicalString())||r.isKeyField()||e.ce.push(new Dl(r,s))}),n.has(yt.keyField().canonicalString())||e.ce.push(new Dl(yt.keyField(),s))}return e.ce}function Vn(t){const e=fe(t);return e.le||(e.le=ok(e,wo(t))),e.le}function ok(t,e){if(t.limitType==="F")return r_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const r=i.dir==="desc"?"asc":"desc";return new Dl(i.field,r)});const n=t.endAt?new Ol(t.endAt.position,t.endAt.inclusive):null,s=t.startAt?new Ol(t.startAt.position,t.startAt.inclusive):null;return r_(t.path,t.collectionGroup,e,t.filters,t.limit,n,s)}}function Eh(t,e){const n=t.filters.concat([e]);return new ha(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Th(t,e,n){return new ha(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ac(t,e){return xd(Vn(t),Vn(e))&&t.limitType===e.limitType}function fE(t){return`${Md(Vn(t))}|lt:${t.limitType}`}function qi(t){return`Query(target=${function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map(i=>uE(i)).join(", ")}]`),Ic(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map(i=>gr(i)).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map(i=>gr(i)).join(",")),`Target(${s})`}(Vn(t))}; limitType=${t.limitType})`}function Rc(t,e){return e.isFoundDocument()&&function(s,i){const r=i.key.path;return s.collectionGroup!==null?i.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(r):ie.isDocumentKey(s.path)?s.path.isEqual(r):s.path.isImmediateParentOf(r)}(t,e)&&function(s,i){for(const r of wo(s))if(!r.field.isKeyField()&&i.data.field(r.field)===null)return!1;return!0}(t,e)&&function(s,i){for(const r of s.filters)if(!r.matches(i))return!1;return!0}(t,e)&&function(s,i){return!(s.startAt&&!function(o,a,c){const u=s_(o,a,c);return o.inclusive?u<=0:u<0}(s.startAt,wo(s),i)||s.endAt&&!function(o,a,c){const u=s_(o,a,c);return o.inclusive?u>=0:u>0}(s.endAt,wo(s),i))}(t,e)}function ak(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function pE(t){return(e,n)=>{let s=!1;for(const i of wo(t)){const r=lk(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function lk(t,e,n){const s=t.field.isKeyField()?ie.comparator(e.key,n.key):function(r,o,a){const c=o.data.field(r),u=a.data.field(r);return c!==null&&u!==null?_r(c,u):he()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return he()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){bi(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return sE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ck=new st(ie.comparator);function fs(){return ck}const mE=new st(ie.comparator);function ao(...t){let e=mE;for(const n of t)e=e.insert(n.key,n);return e}function _E(t){let e=mE;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function ci(){return Ao()}function gE(){return Ao()}function Ao(){return new Nr(t=>t.toString(),(t,e)=>t.isEqual(e))}const uk=new st(ie.comparator),hk=new vt(ie.comparator);function ve(...t){let e=hk;for(const n of t)e=e.add(n);return e}const dk=new vt(be);function fk(){return dk}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ld(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Nl(e)?"-0":e}}function yE(t){return{integerValue:""+t}}function pk(t,e){return W1(e)?yE(e):Ld(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(){this._=void 0}}function mk(t,e,n){return t instanceof Ml?function(i,r){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return r&&Nd(r)&&(r=Od(r)),r&&(o.fields.__previous_value__=r),{mapValue:o}}(n,e):t instanceof Go?EE(t,e):t instanceof Qo?TE(t,e):function(i,r){const o=vE(i,r),a=a_(o)+a_(i.Pe);return gh(o)&&gh(i.Pe)?yE(a):Ld(i.serializer,a)}(t,e)}function _k(t,e,n){return t instanceof Go?EE(t,e):t instanceof Qo?TE(t,e):n}function vE(t,e){return t instanceof xl?function(s){return gh(s)||function(r){return!!r&&"doubleValue"in r}(s)}(e)?e:{integerValue:0}:null}class Ml extends Cc{}class Go extends Cc{constructor(e){super(),this.elements=e}}function EE(t,e){const n=IE(e);for(const s of t.elements)n.some(i=>Wn(i,s))||n.push(s);return{arrayValue:{values:n}}}class Qo extends Cc{constructor(e){super(),this.elements=e}}function TE(t,e){let n=IE(e);for(const s of t.elements)n=n.filter(i=>!Wn(i,s));return{arrayValue:{values:n}}}class xl extends Cc{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function a_(t){return Xe(t.integerValue||t.doubleValue)}function IE(t){return Dd(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function gk(t,e){return t.field.isEqual(e.field)&&function(s,i){return s instanceof Go&&i instanceof Go||s instanceof Qo&&i instanceof Qo?mr(s.elements,i.elements,Wn):s instanceof xl&&i instanceof xl?Wn(s.Pe,i.Pe):s instanceof Ml&&i instanceof Ml}(t.transform,e.transform)}class yk{constructor(e,n){this.version=e,this.transformResults=n}}class vn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new vn}static exists(e){return new vn(void 0,e)}static updateTime(e){return new vn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ul(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Sc{}function wE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Vd(t.key,vn.none()):new da(t.key,t.data,vn.none());{const n=t.data,s=zt.empty();let i=new vt(yt.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new Xs(t.key,s,new nn(i.toArray()),vn.none())}}function vk(t,e,n){t instanceof da?function(i,r,o){const a=i.value.clone(),c=c_(i.fieldTransforms,r,o.transformResults);a.setAll(c),r.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Xs?function(i,r,o){if(!ul(i.precondition,r))return void r.convertToUnknownDocument(o.version);const a=c_(i.fieldTransforms,r,o.transformResults),c=r.data;c.setAll(AE(i)),c.setAll(a),r.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(i,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ro(t,e,n,s){return t instanceof da?function(r,o,a,c){if(!ul(r.precondition,o))return a;const u=r.value.clone(),h=u_(r.fieldTransforms,c,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,s):t instanceof Xs?function(r,o,a,c){if(!ul(r.precondition,o))return a;const u=u_(r.fieldTransforms,c,o),h=o.data;return h.setAll(AE(r)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(f=>f.field))}(t,e,n,s):function(r,o,a){return ul(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function Ek(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=vE(s.transform,i||null);r!=null&&(n===null&&(n=zt.empty()),n.set(s.field,r))}return n||null}function l_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(s,i){return s===void 0&&i===void 0||!(!s||!i)&&mr(s,i,(r,o)=>gk(r,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class da extends Sc{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Xs extends Sc{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function AE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function c_(t,e,n){const s=new Map;Le(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,_k(o,a,n[i]))}return s}function u_(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,mk(r,o,e))}return s}class Vd extends Sc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Tk extends Sc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ik{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&vk(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Ro(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Ro(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=gE();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const c=wE(o,a);c!==null&&s.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(de.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ve())}isEqual(e){return this.batchId===e.batchId&&mr(this.mutations,e.mutations,(n,s)=>l_(n,s))&&mr(this.baseMutations,e.baseMutations,(n,s)=>l_(n,s))}}class Fd{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){Le(e.mutations.length===s.length);let i=function(){return uk}();const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new Fd(e,n,s,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wk{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ak{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var et,we;function Rk(t){switch(t){default:return he();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0}}function RE(t){if(t===void 0)return ds("GRPC error has no .code"),V.UNKNOWN;switch(t){case et.OK:return V.OK;case et.CANCELLED:return V.CANCELLED;case et.UNKNOWN:return V.UNKNOWN;case et.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case et.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case et.INTERNAL:return V.INTERNAL;case et.UNAVAILABLE:return V.UNAVAILABLE;case et.UNAUTHENTICATED:return V.UNAUTHENTICATED;case et.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case et.NOT_FOUND:return V.NOT_FOUND;case et.ALREADY_EXISTS:return V.ALREADY_EXISTS;case et.PERMISSION_DENIED:return V.PERMISSION_DENIED;case et.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case et.ABORTED:return V.ABORTED;case et.OUT_OF_RANGE:return V.OUT_OF_RANGE;case et.UNIMPLEMENTED:return V.UNIMPLEMENTED;case et.DATA_LOSS:return V.DATA_LOSS;default:return he()}}(we=et||(et={}))[we.OK=0]="OK",we[we.CANCELLED=1]="CANCELLED",we[we.UNKNOWN=2]="UNKNOWN",we[we.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",we[we.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",we[we.NOT_FOUND=5]="NOT_FOUND",we[we.ALREADY_EXISTS=6]="ALREADY_EXISTS",we[we.PERMISSION_DENIED=7]="PERMISSION_DENIED",we[we.UNAUTHENTICATED=16]="UNAUTHENTICATED",we[we.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",we[we.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",we[we.ABORTED=10]="ABORTED",we[we.OUT_OF_RANGE=11]="OUT_OF_RANGE",we[we.UNIMPLEMENTED=12]="UNIMPLEMENTED",we[we.INTERNAL=13]="INTERNAL",we[we.UNAVAILABLE=14]="UNAVAILABLE",we[we.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ck(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sk=new di([4294967295,4294967295],0);function h_(t){const e=Ck().encode(t),n=new Qv;return n.update(e),new Uint8Array(n.digest())}function d_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),i=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new di([n,s],0),new di([i,r],0)]}class Ud{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new lo(`Invalid padding: ${n}`);if(s<0)throw new lo(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new lo(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new lo(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=di.fromNumber(this.Ie)}Ee(e,n,s){let i=e.add(n.multiply(di.fromNumber(s)));return i.compare(Sk)===1&&(i=new di([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=h_(e),[s,i]=d_(n);for(let r=0;r<this.hashCount;r++){const o=this.Ee(s,i,r);if(!this.de(o))return!1}return!0}static create(e,n,s){const i=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),o=new Ud(r,i,n);return s.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=h_(e),[s,i]=d_(n);for(let r=0;r<this.hashCount;r++){const o=this.Ee(s,i,r);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class lo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const i=new Map;return i.set(e,fa.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new bc(de.min(),i,new st(be),fs(),ve())}}class fa{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new fa(s,n,ve(),ve(),ve())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(e,n,s,i){this.Re=e,this.removedTargetIds=n,this.key=s,this.Ve=i}}class CE{constructor(e,n){this.targetId=e,this.me=n}}class SE{constructor(e,n,s=Et.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class f_{constructor(){this.fe=0,this.ge=m_(),this.pe=Et.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ve(),n=ve(),s=ve();return this.ge.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:he()}}),new fa(this.pe,this.ye,e,n,s)}Ce(){this.we=!1,this.ge=m_()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Le(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class bk{constructor(e){this.Le=e,this.Be=new Map,this.ke=fs(),this.qe=p_(),this.Qe=new st(be)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const s=this.Ge(n);switch(e.state){case 0:this.ze(n)&&s.De(e.resumeToken);break;case 1:s.Oe(),s.Se||s.Ce(),s.De(e.resumeToken);break;case 2:s.Oe(),s.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(s.Ne(),s.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),s.De(e.resumeToken));break;default:he()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((s,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,s=e.me.count,i=this.Je(n);if(i){const r=i.target;if(vh(r))if(s===0){const o=new ie(r.path);this.Ue(n,o,Pt.newNoDocument(o,de.min()))}else Le(s===1);else{const o=this.Ye(n);if(o!==s){const a=this.Ze(e),c=a?this.Xe(a,e,o):1;if(c!==0){this.je(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,u)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:i=0},hashCount:r=0}=n;let o,a;try{o=vi(s).toUint8Array()}catch(c){if(c instanceof iE)return pr("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new Ud(o,i,r)}catch(c){return pr(c instanceof lo?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Ie===0?null:a}Xe(e,n,s){return n.me.count===s-this.nt(e,n.targetId)?0:2}nt(e,n){const s=this.Le.getRemoteKeysForTarget(n);let i=0;return s.forEach(r=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,r,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((r,o)=>{const a=this.Je(o);if(a){if(r.current&&vh(a.target)){const c=new ie(a.target.path);this.ke.get(c)!==null||this.it(o,c)||this.Ue(o,c,Pt.newNoDocument(c,e))}r.be&&(n.set(o,r.ve()),r.Ce())}});let s=ve();this.qe.forEach((r,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Je(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(r))}),this.ke.forEach((r,o)=>o.setReadTime(e));const i=new bc(e,n,this.Qe,this.ke,s);return this.ke=fs(),this.qe=p_(),this.Qe=new st(be),i}$e(e,n){if(!this.ze(e))return;const s=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,s),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,s){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),s&&(this.ke=this.ke.insert(n,s))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new f_,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new vt(be),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||te("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new f_),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function p_(){return new st(ie.comparator)}function m_(){return new st(ie.comparator)}const Pk={asc:"ASCENDING",desc:"DESCENDING"},kk={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Nk={and:"AND",or:"OR"};class Ok{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Ih(t,e){return t.useProto3Json||Ic(e)?e:{value:e}}function Ll(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function bE(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Dk(t,e){return Ll(t,e.toTimestamp())}function Fn(t){return Le(!!t),de.fromTimestamp(function(n){const s=qs(n);return new rt(s.seconds,s.nanos)}(t))}function Bd(t,e){return wh(t,e).canonicalString()}function wh(t,e){const n=function(i){return new ze(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function PE(t){const e=ze.fromString(t);return Le(ME(e)),e}function Ah(t,e){return Bd(t.databaseId,e.path)}function Au(t,e){const n=PE(e);if(n.get(1)!==t.databaseId.projectId)throw new J(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new J(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ie(NE(n))}function kE(t,e){return Bd(t.databaseId,e)}function Mk(t){const e=PE(t);return e.length===4?ze.emptyPath():NE(e)}function Rh(t){return new ze(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function NE(t){return Le(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function __(t,e,n){return{name:Ah(t,e),fields:n.value.mapValue.fields}}function xk(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:he()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(u,h){return u.useProto3Json?(Le(h===void 0||typeof h=="string"),Et.fromBase64String(h||"")):(Le(h===void 0||h instanceof Buffer||h instanceof Uint8Array),Et.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const h=u.code===void 0?V.UNKNOWN:RE(u.code);return new J(h,u.message||"")}(o);n=new SE(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=Au(t,s.document.name),r=Fn(s.document.updateTime),o=s.document.createTime?Fn(s.document.createTime):de.min(),a=new zt({mapValue:{fields:s.document.fields}}),c=Pt.newFoundDocument(i,r,o,a),u=s.targetIds||[],h=s.removedTargetIds||[];n=new hl(u,h,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=Au(t,s.document),r=s.readTime?Fn(s.readTime):de.min(),o=Pt.newNoDocument(i,r),a=s.removedTargetIds||[];n=new hl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=Au(t,s.document),r=s.removedTargetIds||[];n=new hl([],r,i,null)}else{if(!("filter"in e))return he();{e.filter;const s=e.filter;s.targetId;const{count:i=0,unchangedNames:r}=s,o=new Ak(i,r),a=s.targetId;n=new CE(a,o)}}return n}function Lk(t,e){let n;if(e instanceof da)n={update:__(t,e.key,e.value)};else if(e instanceof Vd)n={delete:Ah(t,e.key)};else if(e instanceof Xs)n={update:__(t,e.key,e.data),updateMask:Hk(e.fieldMask)};else{if(!(e instanceof Tk))return he();n={verify:Ah(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,o){const a=o.transform;if(a instanceof Ml)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Go)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Qo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof xl)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw he()}(0,s))),e.precondition.isNone||(n.currentDocument=function(i,r){return r.updateTime!==void 0?{updateTime:Dk(i,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:he()}(t,e.precondition)),n}function Vk(t,e){return t&&t.length>0?(Le(e!==void 0),t.map(n=>function(i,r){let o=i.updateTime?Fn(i.updateTime):Fn(r);return o.isEqual(de.min())&&(o=Fn(r)),new yk(o,i.transformResults||[])}(n,e))):[]}function Fk(t,e){return{documents:[kE(t,e.path)]}}function Uk(t,e){const n={structuredQuery:{}},s=e.path;let i;e.collectionGroup!==null?(i=s,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=kE(t,i);const r=function(u){if(u.length!==0)return DE(An.create(u,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const o=function(u){if(u.length!==0)return u.map(h=>function(m){return{field:ji(m.field),direction:qk(m.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Ih(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{_t:n,parent:i}}function Bk(t){let e=Mk(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){Le(s===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let r=[];n.where&&(r=function(f){const m=OE(f);return m instanceof An&&lE(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(m=>function(E){return new Dl(Wi(E.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(E.direction))}(m))}(n.orderBy));let a=null;n.limit&&(a=function(f){let m;return m=typeof f=="object"?f.value:f,Ic(m)?null:m}(n.limit));let c=null;n.startAt&&(c=function(f){const m=!!f.before,_=f.values||[];return new Ol(_,m)}(n.startAt));let u=null;return n.endAt&&(u=function(f){const m=!f.before,_=f.values||[];return new Ol(_,m)}(n.endAt)),rk(e,i,o,r,a,"F",c,u)}function $k(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return he()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function OE(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=Wi(n.unaryFilter.field);return tt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const i=Wi(n.unaryFilter.field);return tt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Wi(n.unaryFilter.field);return tt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Wi(n.unaryFilter.field);return tt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return he()}}(t):t.fieldFilter!==void 0?function(n){return tt.create(Wi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return he()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return An.create(n.compositeFilter.filters.map(s=>OE(s)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return he()}}(n.compositeFilter.op))}(t):he()}function qk(t){return Pk[t]}function jk(t){return kk[t]}function Wk(t){return Nk[t]}function ji(t){return{fieldPath:t.canonicalString()}}function Wi(t){return yt.fromServerFormat(t.fieldPath)}function DE(t){return t instanceof tt?function(n){if(n.op==="=="){if(n_(n.value))return{unaryFilter:{field:ji(n.field),op:"IS_NAN"}};if(t_(n.value))return{unaryFilter:{field:ji(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(n_(n.value))return{unaryFilter:{field:ji(n.field),op:"IS_NOT_NAN"}};if(t_(n.value))return{unaryFilter:{field:ji(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ji(n.field),op:jk(n.op),value:n.value}}}(t):t instanceof An?function(n){const s=n.getFilters().map(i=>DE(i));return s.length===1?s[0]:{compositeFilter:{op:Wk(n.op),filters:s}}}(t):he()}function Hk(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function ME(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(e,n,s,i,r=de.min(),o=de.min(),a=Et.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Ns(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Ns(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ns(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ns(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zk{constructor(e){this.ct=e}}function Kk(t){const e=Bk({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Th(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gk{constructor(){this.un=new Qk}addToCollectionParentIndex(e,n){return this.un.add(n),$.resolve()}getCollectionParents(e,n){return $.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return $.resolve()}deleteFieldIndex(e,n){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,n){return $.resolve()}getDocumentsMatchingTarget(e,n){return $.resolve(null)}getIndexType(e,n){return $.resolve(0)}getFieldIndexes(e,n){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,n){return $.resolve($s.min())}getMinOffsetFromCollectionGroup(e,n){return $.resolve($s.min())}updateCollectionGroup(e,n,s){return $.resolve()}updateIndexEntries(e,n){return $.resolve()}}class Qk{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new vt(ze.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new vt(ze.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new yr(0)}static kn(){return new yr(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yk{constructor(){this.changes=new Nr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Pt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?$.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xk{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jk{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(s!==null&&Ro(s.mutation,i,nn.empty(),rt.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,ve()).next(()=>s))}getLocalViewOfDocuments(e,n,s=ve()){const i=ci();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=ao();return r.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=ci();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,ve()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=fs();const o=Ao(),a=function(){return Ao()}();return n.forEach((c,u)=>{const h=s.get(u.key);i.has(u.key)&&(h===void 0||h.mutation instanceof Xs)?r=r.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),Ro(h.mutation,u,h.mutation.getFieldMask(),rt.now())):o.set(u.key,nn.empty())}),this.recalculateAndSaveOverlays(e,r).next(c=>(c.forEach((u,h)=>o.set(u,h)),n.forEach((u,h)=>{var f;return a.set(u,new Xk(h,(f=o.get(u))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Ao();let i=new st((o,a)=>o-a),r=ve();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let h=s.get(c)||nn.empty();h=a.applyToLocalView(u,h),s.set(c,h);const f=(i.get(a.batchId)||ve()).add(c);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,h=c.value,f=gE();h.forEach(m=>{if(!r.has(m)){const _=wE(n.get(m),s.get(m));_!==null&&f.set(m,_),r=r.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,f))}return $.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s,i){return function(o){return ie.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):dE(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,i):this.getDocumentsMatchingCollectionQuery(e,n,s,i)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):$.resolve(ci());let a=-1,c=r;return o.next(u=>$.forEach(u,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),r.get(h)?$.resolve():this.remoteDocumentCache.getEntry(e,h).next(m=>{c=c.insert(h,m)}))).next(()=>this.populateOverlays(e,u,r)).next(()=>this.computeViews(e,c,u,ve())).next(h=>({batchId:a,changes:_E(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ie(n)).next(s=>{let i=ao();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s,i){const r=n.collectionGroup;let o=ao();return this.indexManager.getCollectionParents(e,r).next(a=>$.forEach(a,c=>{const u=function(f,m){return new ha(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,c.child(r));return this.getDocumentsMatchingCollectionQuery(e,u,s,i).next(h=>{h.forEach((f,m)=>{o=o.insert(f,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,s,i){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(o=>(r=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,r,i))).next(o=>{r.forEach((c,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,Pt.newInvalidDocument(h)))});let a=ao();return o.forEach((c,u)=>{const h=r.get(c);h!==void 0&&Ro(h.mutation,u,nn.empty(),rt.now()),Rc(n,u)&&(a=a.insert(c,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zk{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return $.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Fn(i.createTime)}}(n)),$.resolve()}getNamedQuery(e,n){return $.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:Kk(i.bundledQuery),readTime:Fn(i.readTime)}}(n)),$.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eN{constructor(){this.overlays=new st(ie.comparator),this.Ir=new Map}getOverlay(e,n){return $.resolve(this.overlays.get(n))}getOverlays(e,n){const s=ci();return $.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.ht(e,n,r)}),$.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.Ir.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.Ir.delete(s)),$.resolve()}getOverlaysForCollection(e,n,s){const i=ci(),r=n.length+1,o=new ie(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===r&&c.largestBatchId>s&&i.set(c.getKey(),c)}return $.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new st((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let h=r.get(u.largestBatchId);h===null&&(h=ci(),r=r.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=ci(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=i)););return $.resolve(a)}ht(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(s.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new wk(n,s));let r=this.Ir.get(n);r===void 0&&(r=ve(),this.Ir.set(n,r)),this.Ir.set(n,r.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tN{constructor(){this.sessionToken=Et.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,$.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(){this.Tr=new vt(ct.Er),this.dr=new vt(ct.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const s=new ct(e,n);this.Tr=this.Tr.add(s),this.dr=this.dr.add(s)}Rr(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.Vr(new ct(e,n))}mr(e,n){e.forEach(s=>this.removeReference(s,n))}gr(e){const n=new ie(new ze([])),s=new ct(n,e),i=new ct(n,e+1),r=[];return this.dr.forEachInRange([s,i],o=>{this.Vr(o),r.push(o.key)}),r}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new ie(new ze([])),s=new ct(n,e),i=new ct(n,e+1);let r=ve();return this.dr.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new ct(e,0),s=this.Tr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class ct{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return ie.comparator(e.key,n.key)||be(e.wr,n.wr)}static Ar(e,n){return be(e.wr,n.wr)||ie.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nN{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new vt(ct.Er)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Ik(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.br=this.br.add(new ct(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return $.resolve(o)}lookupMutationBatch(e,n){return $.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.vr(s),r=i<0?0:i;return $.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new ct(n,0),i=new ct(n,Number.POSITIVE_INFINITY),r=[];return this.br.forEachInRange([s,i],o=>{const a=this.Dr(o.wr);r.push(a)}),$.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new vt(be);return n.forEach(i=>{const r=new ct(i,0),o=new ct(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([r,o],a=>{s=s.add(a.wr)})}),$.resolve(this.Cr(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;ie.isDocumentKey(r)||(r=r.child(""));const o=new ct(new ie(r),0);let a=new vt(be);return this.br.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===i&&(a=a.add(c.wr)),!0)},o),$.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(s=>{const i=this.Dr(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Le(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.br;return $.forEach(n.mutations,i=>{const r=new ct(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=s})}On(e){}containsKey(e,n){const s=new ct(n,0),i=this.br.firstAfterOrEqual(s);return $.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sN{constructor(e){this.Mr=e,this.docs=function(){return new st(ie.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return $.resolve(s?s.document.mutableCopy():Pt.newInvalidDocument(n))}getEntries(e,n){let s=fs();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():Pt.newInvalidDocument(i))}),$.resolve(s)}getDocumentsMatchingQuery(e,n,s,i){let r=fs();const o=n.path,a=new ie(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:h}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||B1(U1(h),s)<=0||(i.has(h.key)||Rc(n,h))&&(r=r.insert(h.key,h.mutableCopy()))}return $.resolve(r)}getAllFromCollectionGroup(e,n,s,i){he()}Or(e,n){return $.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new iN(this)}getSize(e){return $.resolve(this.size)}}class iN extends Yk{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(s)}),$.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rN{constructor(e){this.persistence=e,this.Nr=new Nr(n=>Md(n),xd),this.lastRemoteSnapshotVersion=de.min(),this.highestTargetId=0,this.Lr=0,this.Br=new $d,this.targetCount=0,this.kr=yr.Bn()}forEachTarget(e,n){return this.Nr.forEach((s,i)=>n(i)),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Lr&&(this.Lr=n),$.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new yr(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,$.resolve()}updateTargetData(e,n){return this.Kn(n),$.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Nr.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),$.waitFor(r).next(()=>i)}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,n){const s=this.Nr.get(n)||null;return $.resolve(s)}addMatchingKeys(e,n,s){return this.Br.Rr(n,s),$.resolve()}removeMatchingKeys(e,n,s){this.Br.mr(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),$.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),$.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Br.yr(n);return $.resolve(s)}containsKey(e,n){return $.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oN{constructor(e,n){this.qr={},this.overlays={},this.Qr=new kd(0),this.Kr=!1,this.Kr=!0,this.$r=new tN,this.referenceDelegate=e(this),this.Ur=new rN(this),this.indexManager=new Gk,this.remoteDocumentCache=function(i){return new sN(i)}(s=>this.referenceDelegate.Wr(s)),this.serializer=new zk(n),this.Gr=new Zk(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new eN,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.qr[e.toKey()];return s||(s=new nN(n,this.referenceDelegate),this.qr[e.toKey()]=s),s}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,s){te("MemoryPersistence","Starting transaction:",e);const i=new aN(this.Qr.next());return this.referenceDelegate.zr(),s(i).next(r=>this.referenceDelegate.jr(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Hr(e,n){return $.or(Object.values(this.qr).map(s=>()=>s.containsKey(e,n)))}}class aN extends q1{constructor(e){super(),this.currentSequenceNumber=e}}class qd{constructor(e){this.persistence=e,this.Jr=new $d,this.Yr=null}static Zr(e){return new qd(e)}get Xr(){if(this.Yr)return this.Yr;throw he()}addReference(e,n,s){return this.Jr.addReference(s,n),this.Xr.delete(s.toString()),$.resolve()}removeReference(e,n,s){return this.Jr.removeReference(s,n),this.Xr.add(s.toString()),$.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),$.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.Xr.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.Xr,s=>{const i=ie.fromPath(s);return this.ei(e,i).next(r=>{r||n.removeEntry(i,de.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(s=>{s?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return $.or([()=>$.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.$i=s,this.Ui=i}static Wi(e,n){let s=ve(),i=ve();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new jd(e,n.fromCache,s,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lN{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cN{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return HR()?8:j1(xt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,s,i){const r={result:null};return this.Yi(e,n).next(o=>{r.result=o}).next(()=>{if(!r.result)return this.Zi(e,n,i,s).next(o=>{r.result=o})}).next(()=>{if(r.result)return;const o=new lN;return this.Xi(e,n,o).next(a=>{if(r.result=a,this.zi)return this.es(e,n,o,a.size)})}).next(()=>r.result)}es(e,n,s,i){return s.documentReadCount<this.ji?(Jr()<=ye.DEBUG&&te("QueryEngine","SDK will not create cache indexes for query:",qi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),$.resolve()):(Jr()<=ye.DEBUG&&te("QueryEngine","Query:",qi(n),"scans",s.documentReadCount,"local documents and returns",i,"documents as results."),s.documentReadCount>this.Hi*i?(Jr()<=ye.DEBUG&&te("QueryEngine","The SDK decides to create cache indexes for query:",qi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Vn(n))):$.resolve())}Yi(e,n){if(o_(n))return $.resolve(null);let s=Vn(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Th(n,null,"F"),s=Vn(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=ve(...r);return this.Ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const u=this.ts(n,a);return this.ns(n,u,o,c.readTime)?this.Yi(e,Th(n,null,"F")):this.rs(e,u,n,c)}))})))}Zi(e,n,s,i){return o_(n)||i.isEqual(de.min())?$.resolve(null):this.Ji.getDocuments(e,s).next(r=>{const o=this.ts(n,r);return this.ns(n,o,s,i)?$.resolve(null):(Jr()<=ye.DEBUG&&te("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),qi(n)),this.rs(e,o,n,F1(i,-1)).next(a=>a))})}ts(e,n){let s=new vt(pE(e));return n.forEach((i,r)=>{Rc(e,r)&&(s=s.add(r))}),s}ns(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Xi(e,n,s){return Jr()<=ye.DEBUG&&te("QueryEngine","Using full collection scan to execute query:",qi(n)),this.Ji.getDocumentsMatchingQuery(e,n,$s.min(),s)}rs(e,n,s,i){return this.Ji.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uN{constructor(e,n,s,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new st(be),this._s=new Nr(r=>Md(r),xd),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(s)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Jk(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function hN(t,e,n,s){return new uN(t,e,n,s)}async function xE(t,e){const n=fe(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.ls(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let c=ve();for(const u of i){o.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}for(const u of r){a.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}return n.localDocuments.getDocuments(s,c).next(u=>({hs:u,removedBatchIds:o,addedBatchIds:a}))})})}function dN(t,e){const n=fe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=n.cs.newChangeBuffer({trackRemovals:!0});return function(a,c,u,h){const f=u.batch,m=f.keys();let _=$.resolve();return m.forEach(E=>{_=_.next(()=>h.getEntry(c,E)).next(S=>{const b=u.docVersions.get(E);Le(b!==null),S.version.compareTo(b)<0&&(f.applyToRemoteDocument(S,u),S.isValidDocument()&&(S.setReadTime(u.commitVersion),h.addEntry(S)))})}),_.next(()=>a.mutationQueue.removeMutationBatch(c,f))}(n,s,e,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(a){let c=ve();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(c=c.add(a.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(s,i))})}function LE(t){const e=fe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function fN(t,e){const n=fe(t),s=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const a=[];e.targetChanges.forEach((h,f)=>{const m=i.get(f);if(!m)return;a.push(n.Ur.removeMatchingKeys(r,h.removedDocuments,f).next(()=>n.Ur.addMatchingKeys(r,h.addedDocuments,f)));let _=m.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(f)!==null?_=_.withResumeToken(Et.EMPTY_BYTE_STRING,de.min()).withLastLimboFreeSnapshotVersion(de.min()):h.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(h.resumeToken,s)),i=i.insert(f,_),function(S,b,F){return S.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-S.snapshotVersion.toMicroseconds()>=3e8?!0:F.addedDocuments.size+F.modifiedDocuments.size+F.removedDocuments.size>0}(m,_,h)&&a.push(n.Ur.updateTargetData(r,_))});let c=fs(),u=ve();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,h))}),a.push(pN(r,o,e.documentUpdates).next(h=>{c=h.Ps,u=h.Is})),!s.isEqual(de.min())){const h=n.Ur.getLastRemoteSnapshotVersion(r).next(f=>n.Ur.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(h)}return $.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,c,u)).next(()=>c)}).then(r=>(n.os=i,r))}function pN(t,e,n){let s=ve(),i=ve();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=fs();return n.forEach((a,c)=>{const u=r.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(de.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):te("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Ps:o,Is:i}})}function mN(t,e){const n=fe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function _N(t,e){const n=fe(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Ur.getTargetData(s,e).next(r=>r?(i=r,$.resolve(i)):n.Ur.allocateTargetId(s).next(o=>(i=new Ns(e,o,"TargetPurposeListen",s.currentSequenceNumber),n.Ur.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.os.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(s.targetId,s),n._s.set(e,s.targetId)),s})}async function Ch(t,e,n){const s=fe(t),i=s.os.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ua(o))throw o;te("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.os=s.os.remove(e),s._s.delete(i.target)}function g_(t,e,n){const s=fe(t);let i=de.min(),r=ve();return s.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,h){const f=fe(c),m=f._s.get(h);return m!==void 0?$.resolve(f.os.get(m)):f.Ur.getTargetData(u,h)}(s,o,Vn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Ur.getMatchingKeysForTargetId(o,a.targetId).next(c=>{r=c})}).next(()=>s.ss.getDocumentsMatchingQuery(o,e,n?i:de.min(),n?r:ve())).next(a=>(gN(s,ak(e),a),{documents:a,Ts:r})))}function gN(t,e,n){let s=t.us.get(e)||de.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.us.set(e,s)}class y_{constructor(){this.activeTargetIds=fk()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class yN{constructor(){this.so=new y_,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,s){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new y_,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vN{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){te("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){te("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wa=null;function Ru(){return Wa===null?Wa=function(){return 268435456+Math.round(2147483648*Math.random())}():Wa++,"0x"+Wa.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TN{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rt="WebChannelConnection";class IN extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const s=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Do=s+"://"+n.host,this.vo=`projects/${i}/databases/${r}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${r}`}get Fo(){return!1}Mo(n,s,i,r,o){const a=Ru(),c=this.xo(n,s.toUriEncodedString());te("RestConnection",`Sending RPC '${n}' ${a}:`,c,i);const u={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(u,r,o),this.No(n,c,u,i).then(h=>(te("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw pr("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",c,"request:",i),h})}Lo(n,s,i,r,o,a){return this.Mo(n,s,i,r,o)}Oo(n,s,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+kr}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((r,o)=>n[o]=r),i&&i.headers.forEach((r,o)=>n[o]=r)}xo(n,s){const i=EN[n];return`${this.Do}/v1/${s}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,s,i){const r=Ru();return new Promise((o,a)=>{const c=new Yv;c.setWithCredentials(!0),c.listenOnce(Xv.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case ll.NO_ERROR:const h=c.getResponseJson();te(Rt,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(h)),o(h);break;case ll.TIMEOUT:te(Rt,`RPC '${e}' ${r} timed out`),a(new J(V.DEADLINE_EXCEEDED,"Request time out"));break;case ll.HTTP_ERROR:const f=c.getStatus();if(te(Rt,`RPC '${e}' ${r} failed with status:`,f,"response text:",c.getResponseText()),f>0){let m=c.getResponseJson();Array.isArray(m)&&(m=m[0]);const _=m==null?void 0:m.error;if(_&&_.status&&_.message){const E=function(b){const F=b.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(F)>=0?F:V.UNKNOWN}(_.status);a(new J(E,_.message))}else a(new J(V.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new J(V.UNAVAILABLE,"Connection failed."));break;default:he()}}finally{te(Rt,`RPC '${e}' ${r} completed.`)}});const u=JSON.stringify(i);te(Rt,`RPC '${e}' ${r} sending request:`,i),c.send(n,"POST",u,s,15)})}Bo(e,n,s){const i=Ru(),r=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=eE(),a=Zv(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Oo(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const h=r.join("");te(Rt,`Creating RPC '${e}' stream ${i}: ${h}`,c);const f=o.createWebChannel(h,c);let m=!1,_=!1;const E=new TN({Io:b=>{_?te(Rt,`Not sending because RPC '${e}' stream ${i} is closed:`,b):(m||(te(Rt,`Opening RPC '${e}' stream ${i} transport.`),f.open(),m=!0),te(Rt,`RPC '${e}' stream ${i} sending:`,b),f.send(b))},To:()=>f.close()}),S=(b,F,D)=>{b.listen(F,L=>{try{D(L)}catch(U){setTimeout(()=>{throw U},0)}})};return S(f,oo.EventType.OPEN,()=>{_||(te(Rt,`RPC '${e}' stream ${i} transport opened.`),E.yo())}),S(f,oo.EventType.CLOSE,()=>{_||(_=!0,te(Rt,`RPC '${e}' stream ${i} transport closed`),E.So())}),S(f,oo.EventType.ERROR,b=>{_||(_=!0,pr(Rt,`RPC '${e}' stream ${i} transport errored:`,b),E.So(new J(V.UNAVAILABLE,"The operation could not be completed")))}),S(f,oo.EventType.MESSAGE,b=>{var F;if(!_){const D=b.data[0];Le(!!D);const L=D,U=L.error||((F=L[0])===null||F===void 0?void 0:F.error);if(U){te(Rt,`RPC '${e}' stream ${i} received error:`,U);const oe=U.status;let le=function(w){const R=et[w];if(R!==void 0)return RE(R)}(oe),A=U.message;le===void 0&&(le=V.INTERNAL,A="Unknown error status: "+oe+" with message "+U.message),_=!0,E.So(new J(le,A)),f.close()}else te(Rt,`RPC '${e}' stream ${i} received:`,D),E.bo(D)}}),S(a,Jv.STAT_EVENT,b=>{b.stat===ph.PROXY?te(Rt,`RPC '${e}' stream ${i} detected buffering proxy`):b.stat===ph.NOPROXY&&te(Rt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{E.wo()},0),E}}function Cu(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pc(t){return new Ok(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VE{constructor(e,n,s=1e3,i=1.5,r=6e4){this.ui=e,this.timerId=n,this.ko=s,this.qo=i,this.Qo=r,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),s=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-s);i>0&&te("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FE{constructor(e,n,s,i,r,o,a,c){this.ui=e,this.Ho=s,this.Jo=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new VE(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===V.RESOURCE_EXHAUSTED?(ds(n.toString()),ds("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Yo===n&&this.P_(s,i)},s=>{e(()=>{const i=new J(V.UNKNOWN,"Fetching auth token failed: "+s.message);return this.I_(i)})})}P_(e,n){const s=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{s(()=>this.listener.Eo())}),this.stream.Ro(()=>{s(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{s(()=>this.I_(i))}),this.stream.onMessage(i=>{s(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return te("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(te("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class wN extends FE{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=xk(this.serializer,e),s=function(r){if(!("targetChange"in r))return de.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?de.min():o.readTime?Fn(o.readTime):de.min()}(e);return this.listener.d_(n,s)}A_(e){const n={};n.database=Rh(this.serializer),n.addTarget=function(r,o){let a;const c=o.target;if(a=vh(c)?{documents:Fk(r,c)}:{query:Uk(r,c)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=bE(r,o.resumeToken);const u=Ih(r,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(de.min())>0){a.readTime=Ll(r,o.snapshotVersion.toTimestamp());const u=Ih(r,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const s=$k(this.serializer,e);s&&(n.labels=s),this.a_(n)}R_(e){const n={};n.database=Rh(this.serializer),n.removeTarget=e,this.a_(n)}}class AN extends FE{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Le(!!e.streamToken),this.lastStreamToken=e.streamToken,Le(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Le(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=Vk(e.writeResults,e.commitTime),s=Fn(e.commitTime);return this.listener.g_(s,n)}p_(){const e={};e.database=Rh(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>Lk(this.serializer,s))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RN extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new J(V.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.Mo(e,wh(n,s),i,r,o)).catch(r=>{throw r.name==="FirebaseError"?(r.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new J(V.UNKNOWN,r.toString())})}Lo(e,n,s,i,r){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(e,wh(n,s),i,o,a,r)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new J(V.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class CN{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(ds(n),this.D_=!1):te("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SN{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=r,this.k_._o(o=>{s.enqueueAndForget(async()=>{Pi(this)&&(te("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=fe(c);u.L_.add(4),await pa(u),u.q_.set("Unknown"),u.L_.delete(4),await kc(u)}(this))})}),this.q_=new CN(s,i)}}async function kc(t){if(Pi(t))for(const e of t.B_)await e(!0)}async function pa(t){for(const e of t.B_)await e(!1)}function UE(t,e){const n=fe(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Kd(n)?zd(n):Or(n).r_()&&Hd(n,e))}function Wd(t,e){const n=fe(t),s=Or(n);n.N_.delete(e),s.r_()&&BE(n,e),n.N_.size===0&&(s.r_()?s.o_():Pi(n)&&n.q_.set("Unknown"))}function Hd(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(de.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Or(t).A_(e)}function BE(t,e){t.Q_.xe(e),Or(t).R_(e)}function zd(t){t.Q_=new bk({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Or(t).start(),t.q_.v_()}function Kd(t){return Pi(t)&&!Or(t).n_()&&t.N_.size>0}function Pi(t){return fe(t).L_.size===0}function $E(t){t.Q_=void 0}async function bN(t){t.q_.set("Online")}async function PN(t){t.N_.forEach((e,n)=>{Hd(t,e)})}async function kN(t,e){$E(t),Kd(t)?(t.q_.M_(e),zd(t)):t.q_.set("Unknown")}async function NN(t,e,n){if(t.q_.set("Online"),e instanceof SE&&e.state===2&&e.cause)try{await async function(i,r){const o=r.cause;for(const a of r.targetIds)i.N_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.N_.delete(a),i.Q_.removeTarget(a))}(t,e)}catch(s){te("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Vl(t,s)}else if(e instanceof hl?t.Q_.Ke(e):e instanceof CE?t.Q_.He(e):t.Q_.We(e),!n.isEqual(de.min()))try{const s=await LE(t.localStore);n.compareTo(s)>=0&&await function(r,o){const a=r.Q_.rt(o);return a.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const h=r.N_.get(u);h&&r.N_.set(u,h.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,u)=>{const h=r.N_.get(c);if(!h)return;r.N_.set(c,h.withResumeToken(Et.EMPTY_BYTE_STRING,h.snapshotVersion)),BE(r,c);const f=new Ns(h.target,c,u,h.sequenceNumber);Hd(r,f)}),r.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(s){te("RemoteStore","Failed to raise snapshot:",s),await Vl(t,s)}}async function Vl(t,e,n){if(!ua(e))throw e;t.L_.add(1),await pa(t),t.q_.set("Offline"),n||(n=()=>LE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{te("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await kc(t)})}function qE(t,e){return e().catch(n=>Vl(t,n,e))}async function Nc(t){const e=fe(t),n=js(e);let s=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;ON(e);)try{const i=await mN(e.localStore,s);if(i===null){e.O_.length===0&&n.o_();break}s=i.batchId,DN(e,i)}catch(i){await Vl(e,i)}jE(e)&&WE(e)}function ON(t){return Pi(t)&&t.O_.length<10}function DN(t,e){t.O_.push(e);const n=js(t);n.r_()&&n.V_&&n.m_(e.mutations)}function jE(t){return Pi(t)&&!js(t).n_()&&t.O_.length>0}function WE(t){js(t).start()}async function MN(t){js(t).p_()}async function xN(t){const e=js(t);for(const n of t.O_)e.m_(n.mutations)}async function LN(t,e,n){const s=t.O_.shift(),i=Fd.from(s,e,n);await qE(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Nc(t)}async function VN(t,e){e&&js(t).V_&&await async function(s,i){if(function(o){return Rk(o)&&o!==V.ABORTED}(i.code)){const r=s.O_.shift();js(s).s_(),await qE(s,()=>s.remoteSyncer.rejectFailedWrite(r.batchId,i)),await Nc(s)}}(t,e),jE(t)&&WE(t)}async function E_(t,e){const n=fe(t);n.asyncQueue.verifyOperationInProgress(),te("RemoteStore","RemoteStore received new credentials");const s=Pi(n);n.L_.add(3),await pa(n),s&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await kc(n)}async function FN(t,e){const n=fe(t);e?(n.L_.delete(2),await kc(n)):e||(n.L_.add(2),await pa(n),n.q_.set("Unknown"))}function Or(t){return t.K_||(t.K_=function(n,s,i){const r=fe(n);return r.w_(),new wN(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)}(t.datastore,t.asyncQueue,{Eo:bN.bind(null,t),Ro:PN.bind(null,t),mo:kN.bind(null,t),d_:NN.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Kd(t)?zd(t):t.q_.set("Unknown")):(await t.K_.stop(),$E(t))})),t.K_}function js(t){return t.U_||(t.U_=function(n,s,i){const r=fe(n);return r.w_(),new AN(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:MN.bind(null,t),mo:VN.bind(null,t),f_:xN.bind(null,t),g_:LN.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Nc(t)):(await t.U_.stop(),t.O_.length>0&&(te("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new Vs,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new Gd(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new J(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Qd(t,e){if(ds("AsyncQueue",`${e}: ${t}`),ua(t))return new J(V.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e){this.comparator=e?(n,s)=>e(n,s)||ie.comparator(n.key,s.key):(n,s)=>ie.comparator(n.key,s.key),this.keyedMap=ao(),this.sortedSet=new st(this.comparator)}static emptySet(e){return new ir(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ir)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new ir;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{constructor(){this.W_=new st(ie.comparator)}track(e){const n=e.doc.key,s=this.W_.get(n);s?e.type!==0&&s.type===3?this.W_=this.W_.insert(n,e):e.type===3&&s.type!==1?this.W_=this.W_.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.W_=this.W_.remove(n):e.type===1&&s.type===2?this.W_=this.W_.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):he():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,s)=>{e.push(s)}),e}}class vr{constructor(e,n,s,i,r,o,a,c,u){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new vr(e,n,ir.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ac(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UN{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class BN{constructor(){this.queries=I_(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,s){const i=fe(n),r=i.queries;i.queries=I_(),r.forEach((o,a)=>{for(const c of a.j_)c.onError(s)})})(this,new J(V.ABORTED,"Firestore shutting down"))}}function I_(){return new Nr(t=>fE(t),Ac)}async function HE(t,e){const n=fe(t);let s=3;const i=e.query;let r=n.queries.get(i);r?!r.H_()&&e.J_()&&(s=2):(r=new UN,s=e.J_()?0:1);try{switch(s){case 0:r.z_=await n.onListen(i,!0);break;case 1:r.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=Qd(o,`Initialization of query '${qi(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,r),r.j_.push(e),e.Z_(n.onlineState),r.z_&&e.X_(r.z_)&&Yd(n)}async function zE(t,e){const n=fe(t),s=e.query;let i=3;const r=n.queries.get(s);if(r){const o=r.j_.indexOf(e);o>=0&&(r.j_.splice(o,1),r.j_.length===0?i=e.J_()?0:1:!r.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function $N(t,e){const n=fe(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.j_)a.X_(i)&&(s=!0);o.z_=i}}s&&Yd(n)}function qN(t,e,n){const s=fe(t),i=s.queries.get(e);if(i)for(const r of i.j_)r.onError(n);s.queries.delete(e)}function Yd(t){t.Y_.forEach(e=>{e.next()})}var Sh,w_;(w_=Sh||(Sh={})).ea="default",w_.Cache="cache";class KE{constructor(e,n,s){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=s||{}}X_(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new vr(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const s=n!=="Offline";return(!this.options._a||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=vr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Sh.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GE{constructor(e){this.key=e}}class QE{constructor(e){this.key=e}}class jN{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ve(),this.mutatedKeys=ve(),this.Aa=pE(e),this.Ra=new ir(this.Aa)}get Va(){return this.Ta}ma(e,n){const s=n?n.fa:new T_,i=n?n.Ra:this.Ra;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,f)=>{const m=i.get(h),_=Rc(this.query,f)?f:null,E=!!m&&this.mutatedKeys.has(m.key),S=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let b=!1;m&&_?m.data.isEqual(_.data)?E!==S&&(s.track({type:3,doc:_}),b=!0):this.ga(m,_)||(s.track({type:2,doc:_}),b=!0,(c&&this.Aa(_,c)>0||u&&this.Aa(_,u)<0)&&(a=!0)):!m&&_?(s.track({type:0,doc:_}),b=!0):m&&!_&&(s.track({type:1,doc:m}),b=!0,(c||u)&&(a=!0)),b&&(_?(o=o.add(_),r=S?r.add(h):r.delete(h)):(o=o.delete(h),r=r.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),r=r.delete(h.key),s.track({type:1,doc:h})}return{Ra:o,fa:s,ns:a,mutatedKeys:r}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s,i){const r=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((h,f)=>function(_,E){const S=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return he()}};return S(_)-S(E)}(h.type,f.type)||this.Aa(h.doc,f.doc)),this.pa(s),i=i!=null&&i;const a=n&&!i?this.ya():[],c=this.da.size===0&&this.current&&!i?1:0,u=c!==this.Ea;return this.Ea=c,o.length!==0||u?{snapshot:new vr(this.query,e.Ra,r,o,e.mutatedKeys,c===0,u,!1,!!s&&s.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new T_,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ve(),this.Ra.forEach(s=>{this.Sa(s.key)&&(this.da=this.da.add(s.key))});const n=[];return e.forEach(s=>{this.da.has(s)||n.push(new QE(s))}),this.da.forEach(s=>{e.has(s)||n.push(new GE(s))}),n}ba(e){this.Ta=e.Ts,this.da=ve();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return vr.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class WN{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class HN{constructor(e){this.key=e,this.va=!1}}class zN{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Nr(a=>fE(a),Ac),this.Ma=new Map,this.xa=new Set,this.Oa=new st(ie.comparator),this.Na=new Map,this.La=new $d,this.Ba={},this.ka=new Map,this.qa=yr.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function KN(t,e,n=!0){const s=tT(t);let i;const r=s.Fa.get(e);return r?(s.sharedClientState.addLocalQueryTarget(r.targetId),i=r.view.Da()):i=await YE(s,e,n,!0),i}async function GN(t,e){const n=tT(t);await YE(n,e,!0,!1)}async function YE(t,e,n,s){const i=await _N(t.localStore,Vn(e)),r=i.targetId,o=t.sharedClientState.addLocalQueryTarget(r,n);let a;return s&&(a=await QN(t,e,r,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&UE(t.remoteStore,i),a}async function QN(t,e,n,s,i){t.Ka=(f,m,_)=>async function(S,b,F,D){let L=b.view.ma(F);L.ns&&(L=await g_(S.localStore,b.query,!1).then(({documents:A})=>b.view.ma(A,L)));const U=D&&D.targetChanges.get(b.targetId),oe=D&&D.targetMismatches.get(b.targetId)!=null,le=b.view.applyChanges(L,S.isPrimaryClient,U,oe);return R_(S,b.targetId,le.wa),le.snapshot}(t,f,m,_);const r=await g_(t.localStore,e,!0),o=new jN(e,r.Ts),a=o.ma(r.documents),c=fa.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,c);R_(t,n,u.wa);const h=new WN(e,n,o);return t.Fa.set(e,h),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),u.snapshot}async function YN(t,e,n){const s=fe(t),i=s.Fa.get(e),r=s.Ma.get(i.targetId);if(r.length>1)return s.Ma.set(i.targetId,r.filter(o=>!Ac(o,e))),void s.Fa.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(i.targetId),s.sharedClientState.isActiveQueryTarget(i.targetId)||await Ch(s.localStore,i.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(i.targetId),n&&Wd(s.remoteStore,i.targetId),bh(s,i.targetId)}).catch(ca)):(bh(s,i.targetId),await Ch(s.localStore,i.targetId,!0))}async function XN(t,e){const n=fe(t),s=n.Fa.get(e),i=n.Ma.get(s.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),Wd(n.remoteStore,s.targetId))}async function JN(t,e,n){const s=rO(t);try{const i=await function(o,a){const c=fe(o),u=rt.now(),h=a.reduce((_,E)=>_.add(E.key),ve());let f,m;return c.persistence.runTransaction("Locally write mutations","readwrite",_=>{let E=fs(),S=ve();return c.cs.getEntries(_,h).next(b=>{E=b,E.forEach((F,D)=>{D.isValidDocument()||(S=S.add(F))})}).next(()=>c.localDocuments.getOverlayedDocuments(_,E)).next(b=>{f=b;const F=[];for(const D of a){const L=Ek(D,f.get(D.key).overlayedDocument);L!=null&&F.push(new Xs(D.key,L,rE(L.value.mapValue),vn.exists(!0)))}return c.mutationQueue.addMutationBatch(_,u,F,a)}).next(b=>{m=b;const F=b.applyToLocalDocumentSet(f,S);return c.documentOverlayCache.saveOverlays(_,b.batchId,F)})}).then(()=>({batchId:m.batchId,changes:_E(f)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(o,a,c){let u=o.Ba[o.currentUser.toKey()];u||(u=new st(be)),u=u.insert(a,c),o.Ba[o.currentUser.toKey()]=u}(s,i.batchId,n),await ma(s,i.changes),await Nc(s.remoteStore)}catch(i){const r=Qd(i,"Failed to persist write");n.reject(r)}}async function XE(t,e){const n=fe(t);try{const s=await fN(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.Na.get(r);o&&(Le(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?Le(o.va):i.removedDocuments.size>0&&(Le(o.va),o.va=!1))}),await ma(n,s,e)}catch(s){await ca(s)}}function A_(t,e,n){const s=fe(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.Fa.forEach((r,o)=>{const a=o.view.Z_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const c=fe(o);c.onlineState=a;let u=!1;c.queries.forEach((h,f)=>{for(const m of f.j_)m.Z_(a)&&(u=!0)}),u&&Yd(c)}(s.eventManager,e),i.length&&s.Ca.d_(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function ZN(t,e,n){const s=fe(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.Na.get(e),r=i&&i.key;if(r){let o=new st(ie.comparator);o=o.insert(r,Pt.newNoDocument(r,de.min()));const a=ve().add(r),c=new bc(de.min(),new Map,new st(be),o,a);await XE(s,c),s.Oa=s.Oa.remove(r),s.Na.delete(e),Xd(s)}else await Ch(s.localStore,e,!1).then(()=>bh(s,e,n)).catch(ca)}async function eO(t,e){const n=fe(t),s=e.batch.batchId;try{const i=await dN(n.localStore,e);ZE(n,s,null),JE(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await ma(n,i)}catch(i){await ca(i)}}async function tO(t,e,n){const s=fe(t);try{const i=await function(o,a){const c=fe(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return c.mutationQueue.lookupMutationBatch(u,a).next(f=>(Le(f!==null),h=f.keys(),c.mutationQueue.removeMutationBatch(u,f))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,h,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>c.localDocuments.getDocuments(u,h))})}(s.localStore,e);ZE(s,e,n),JE(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await ma(s,i)}catch(i){await ca(i)}}function JE(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function ZE(t,e,n){const s=fe(t);let i=s.Ba[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.Ba[s.currentUser.toKey()]=i}}function bh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.Ma.get(e))t.Fa.delete(s),n&&t.Ca.$a(s,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(s=>{t.La.containsKey(s)||eT(t,s)})}function eT(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Wd(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Xd(t))}function R_(t,e,n){for(const s of n)s instanceof GE?(t.La.addReference(s.key,e),nO(t,s)):s instanceof QE?(te("SyncEngine","Document no longer in limbo: "+s.key),t.La.removeReference(s.key,e),t.La.containsKey(s.key)||eT(t,s.key)):he()}function nO(t,e){const n=e.key,s=n.path.canonicalString();t.Oa.get(n)||t.xa.has(s)||(te("SyncEngine","New document in limbo: "+n),t.xa.add(s),Xd(t))}function Xd(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new ie(ze.fromString(e)),s=t.qa.next();t.Na.set(s,new HN(n)),t.Oa=t.Oa.insert(n,s),UE(t.remoteStore,new Ns(Vn(wc(n.path)),s,"TargetPurposeLimboResolution",kd.oe))}}async function ma(t,e,n){const s=fe(t),i=[],r=[],o=[];s.Fa.isEmpty()||(s.Fa.forEach((a,c)=>{o.push(s.Ka(c,e,n).then(u=>{var h;if((u||n)&&s.isPrimaryClient){const f=u?!u.fromCache:(h=n==null?void 0:n.targetChanges.get(c.targetId))===null||h===void 0?void 0:h.current;s.sharedClientState.updateQueryState(c.targetId,f?"current":"not-current")}if(u){i.push(u);const f=jd.Wi(c.targetId,u);r.push(f)}}))}),await Promise.all(o),s.Ca.d_(i),await async function(c,u){const h=fe(c);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>$.forEach(u,m=>$.forEach(m.$i,_=>h.persistence.referenceDelegate.addReference(f,m.targetId,_)).next(()=>$.forEach(m.Ui,_=>h.persistence.referenceDelegate.removeReference(f,m.targetId,_)))))}catch(f){if(!ua(f))throw f;te("LocalStore","Failed to update sequence numbers: "+f)}for(const f of u){const m=f.targetId;if(!f.fromCache){const _=h.os.get(m),E=_.snapshotVersion,S=_.withLastLimboFreeSnapshotVersion(E);h.os=h.os.insert(m,S)}}}(s.localStore,r))}async function sO(t,e){const n=fe(t);if(!n.currentUser.isEqual(e)){te("SyncEngine","User change. New user:",e.toKey());const s=await xE(n.localStore,e);n.currentUser=e,function(r,o){r.ka.forEach(a=>{a.forEach(c=>{c.reject(new J(V.CANCELLED,o))})}),r.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await ma(n,s.hs)}}function iO(t,e){const n=fe(t),s=n.Na.get(e);if(s&&s.va)return ve().add(s.key);{let i=ve();const r=n.Ma.get(e);if(!r)return i;for(const o of r){const a=n.Fa.get(o);i=i.unionWith(a.view.Va)}return i}}function tT(t){const e=fe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=XE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=iO.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ZN.bind(null,e),e.Ca.d_=$N.bind(null,e.eventManager),e.Ca.$a=qN.bind(null,e.eventManager),e}function rO(t){const e=fe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=eO.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=tO.bind(null,e),e}class Fl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Pc(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return hN(this.persistence,new cN,e.initialUser,this.serializer)}Ga(e){return new oN(qd.Zr,this.serializer)}Wa(e){return new yN}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Fl.provider={build:()=>new Fl};class Ph{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>A_(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=sO.bind(null,this.syncEngine),await FN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new BN}()}createDatastore(e){const n=Pc(e.databaseInfo.databaseId),s=function(r){return new IN(r)}(e.databaseInfo);return function(r,o,a,c){return new RN(r,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return function(s,i,r,o,a){return new SN(s,i,r,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>A_(this.syncEngine,n,0),function(){return v_.D()?new v_:new vN}())}createSyncEngine(e,n){return function(i,r,o,a,c,u,h){const f=new zN(i,r,o,a,c,u);return h&&(f.Qa=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const r=fe(i);te("RemoteStore","RemoteStore shutting down."),r.L_.add(5),await pa(r),r.k_.shutdown(),r.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Ph.provider={build:()=>new Ph};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nT{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):ds("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oO{constructor(e,n,s,i,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=Ct.UNAUTHENTICATED,this.clientId=nE.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=r,this.authCredentials.start(s,async o=>{te("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(s,o=>(te("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Vs;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Qd(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Su(t,e){t.asyncQueue.verifyOperationInProgress(),te("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await xE(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function C_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await aO(t);te("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(s=>E_(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>E_(e.remoteStore,i)),t._onlineComponents=e}async function aO(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){te("FirestoreClient","Using user provided OfflineComponentProvider");try{await Su(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===V.FAILED_PRECONDITION||i.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;pr("Error using user provided cache. Falling back to memory cache: "+n),await Su(t,new Fl)}}else te("FirestoreClient","Using default OfflineComponentProvider"),await Su(t,new Fl);return t._offlineComponents}async function sT(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(te("FirestoreClient","Using user provided OnlineComponentProvider"),await C_(t,t._uninitializedComponentsProvider._online)):(te("FirestoreClient","Using default OnlineComponentProvider"),await C_(t,new Ph))),t._onlineComponents}function lO(t){return sT(t).then(e=>e.syncEngine)}async function kh(t){const e=await sT(t),n=e.eventManager;return n.onListen=KN.bind(null,e.syncEngine),n.onUnlisten=YN.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=GN.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=XN.bind(null,e.syncEngine),n}function cO(t,e,n={}){const s=new Vs;return t.asyncQueue.enqueueAndForget(async()=>function(r,o,a,c,u){const h=new nT({next:m=>{h.Za(),o.enqueueAndForget(()=>zE(r,f));const _=m.docs.has(a);!_&&m.fromCache?u.reject(new J(V.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&m.fromCache&&c&&c.source==="server"?u.reject(new J(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),f=new KE(wc(a.path),h,{includeMetadataChanges:!0,_a:!0});return HE(r,f)}(await kh(t),t.asyncQueue,e,n,s)),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iT(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S_=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rT(t,e,n){if(!n)throw new J(V.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function uO(t,e,n,s){if(e===!0&&s===!0)throw new J(V.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function b_(t){if(!ie.isDocumentKey(t))throw new J(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function P_(t){if(ie.isDocumentKey(t))throw new J(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Oc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":he()}function Un(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new J(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Oc(t);throw new J(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k_{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new J(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new J(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}uO("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=iT((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new J(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new J(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new J(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,i){return s.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Dc{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new k_({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new J(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new J(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new k_(e),e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new P1;switch(s.type){case"firstParty":return new D1(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new J(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=S_.get(n);s&&(te("ComponentProvider","Removing Datastore"),S_.delete(n),s.terminate())}(this),Promise.resolve()}}function hO(t,e,n,s={}){var i;const r=(t=Un(t,Dc))._getSettings(),o=`${e}:${n}`;if(r.host!=="firestore.googleapis.com"&&r.host!==o&&pr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},r),{host:o,ssl:!1})),s.mockUserToken){let a,c;if(typeof s.mockUserToken=="string")a=s.mockUserToken,c=Ct.MOCK_USER;else{a=BR(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=s.mockUserToken.sub||s.mockUserToken.user_id;if(!u)throw new J(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Ct(u)}t._authCredentials=new k1(new tE(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Dr(this.firestore,e,this._query)}}class qt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Us(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new qt(this.firestore,e,this._key)}}class Us extends Dr{constructor(e,n,s){super(e,n,wc(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new qt(this.firestore,null,new ie(e))}withConverter(e){return new Us(this.firestore,e,this._path)}}function oT(t,e,...n){if(t=ot(t),rT("collection","path",e),t instanceof Dc){const s=ze.fromString(e,...n);return P_(s),new Us(t,null,s)}{if(!(t instanceof qt||t instanceof Us))throw new J(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ze.fromString(e,...n));return P_(s),new Us(t.firestore,null,s)}}function Yo(t,e,...n){if(t=ot(t),arguments.length===1&&(e=nE.newId()),rT("doc","path",e),t instanceof Dc){const s=ze.fromString(e,...n);return b_(s),new qt(t,null,new ie(s))}{if(!(t instanceof qt||t instanceof Us))throw new J(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ze.fromString(e,...n));return b_(s),new qt(t.firestore,t instanceof Us?t.converter:null,new ie(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new VE(this,"async_queue_retry"),this.Vu=()=>{const s=Cu();s&&te("AsyncQueue","Visibility state changed to "+s.visibilityState),this.t_.jo()},this.mu=e;const n=Cu();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Cu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Vs;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!ua(e))throw e;te("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(s=>{this.Eu=s,this.du=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(s);throw ds("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.du=!1,s))));return this.mu=n,n}enqueueAfterDelay(e,n,s){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=Gd.createAndSchedule(this,e,n,s,r=>this.yu(r));return this.Tu.push(i),i}fu(){this.Eu&&he()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function O_(t){return function(n,s){if(typeof n!="object"||n===null)return!1;const i=n;for(const r of s)if(r in i&&typeof i[r]=="function")return!0;return!1}(t,["next","error","complete"])}class Ti extends Dc{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new N_,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new N_(e),this._firestoreClient=void 0,await e}}}function dO(t,e){const n=typeof t=="object"?t:sv(),s=typeof t=="string"?t:"(default)",i=yd(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=UR("firestore");r&&hO(i,...r)}return i}function Jd(t){if(t._terminated)throw new J(V.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||fO(t),t._firestoreClient}function fO(t){var e,n,s;const i=t._freezeSettings(),r=function(a,c,u,h){return new z1(a,c,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,iT(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=i.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new oO(t._authCredentials,t._appCheckCredentials,t._queue,r,t._componentsProvider&&function(a){const c=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Er(Et.fromBase64String(e))}catch(n){throw new J(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Er(Et.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new J(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new yt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new J(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new J(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return be(this._lat,e._lat)||be(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,i){if(s.length!==i.length)return!1;for(let r=0;r<s.length;++r)if(s[r]!==i[r])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pO=/^__.*__$/;class mO{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Xs(e,this.data,this.fieldMask,n,this.fieldTransforms):new da(e,this.data,n,this.fieldTransforms)}}class aT{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new Xs(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function lT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw he()}}class nf{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=i,r===void 0&&this.vu(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new nf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:s,xu:!1});return i.Ou(e),i}Nu(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:s,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Ul(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(lT(this.Cu)&&pO.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class _O{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||Pc(e)}Qu(e,n,s,i=!1){return new nf({Cu:e,methodName:n,qu:s,path:yt.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function sf(t){const e=t._freezeSettings(),n=Pc(t._databaseId);return new _O(t._databaseId,!!e.ignoreUndefinedProperties,n)}function gO(t,e,n,s,i,r={}){const o=t.Qu(r.merge||r.mergeFields?2:0,e,n,i);rf("Data must be an object, but it was:",o,s);const a=cT(s,o);let c,u;if(r.merge)c=new nn(o.fieldMask),u=o.fieldTransforms;else if(r.mergeFields){const h=[];for(const f of r.mergeFields){const m=Nh(e,f,n);if(!o.contains(m))throw new J(V.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);hT(h,m)||h.push(m)}c=new nn(h),u=o.fieldTransforms.filter(f=>c.covers(f.field))}else c=null,u=o.fieldTransforms;return new mO(new zt(a),c,u)}class xc extends Zd{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof xc}}function yO(t,e,n,s){const i=t.Qu(1,e,n);rf("Data must be an object, but it was:",i,s);const r=[],o=zt.empty();bi(s,(c,u)=>{const h=of(e,c,n);u=ot(u);const f=i.Nu(h);if(u instanceof xc)r.push(h);else{const m=_a(u,f);m!=null&&(r.push(h),o.set(h,m))}});const a=new nn(r);return new aT(o,a,i.fieldTransforms)}function vO(t,e,n,s,i,r){const o=t.Qu(1,e,n),a=[Nh(e,s,n)],c=[i];if(r.length%2!=0)throw new J(V.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<r.length;m+=2)a.push(Nh(e,r[m])),c.push(r[m+1]);const u=[],h=zt.empty();for(let m=a.length-1;m>=0;--m)if(!hT(u,a[m])){const _=a[m];let E=c[m];E=ot(E);const S=o.Nu(_);if(E instanceof xc)u.push(_);else{const b=_a(E,S);b!=null&&(u.push(_),h.set(_,b))}}const f=new nn(u);return new aT(h,f,o.fieldTransforms)}function EO(t,e,n,s=!1){return _a(n,t.Qu(s?4:3,e))}function _a(t,e){if(uT(t=ot(t)))return rf("Unsupported field value:",e,t),cT(t,e);if(t instanceof Zd)return function(s,i){if(!lT(i.Cu))throw i.Bu(`${s._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${s._methodName}() is not currently supported inside arrays`);const r=s._toFieldTransform(i);r&&i.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(s,i){const r=[];let o=0;for(const a of s){let c=_a(a,i.Lu(o));c==null&&(c={nullValue:"NULL_VALUE"}),r.push(c),o++}return{arrayValue:{values:r}}}(t,e)}return function(s,i){if((s=ot(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return pk(i.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const r=rt.fromDate(s);return{timestampValue:Ll(i.serializer,r)}}if(s instanceof rt){const r=new rt(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Ll(i.serializer,r)}}if(s instanceof ef)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Er)return{bytesValue:bE(i.serializer,s._byteString)};if(s instanceof qt){const r=i.databaseId,o=s.firestore._databaseId;if(!o.isEqual(r))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Bd(s.firestore._databaseId||i.databaseId,s._key.path)}}if(s instanceof tf)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw a.Bu("VectorValues must only contain numeric values.");return Ld(a.serializer,c)})}}}}}}(s,i);throw i.Bu(`Unsupported field value: ${Oc(s)}`)}(t,e)}function cT(t,e){const n={};return sE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):bi(t,(s,i)=>{const r=_a(i,e.Mu(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function uT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof rt||t instanceof ef||t instanceof Er||t instanceof qt||t instanceof Zd||t instanceof tf)}function rf(t,e,n){if(!uT(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const s=Oc(n);throw s==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+s)}}function Nh(t,e,n){if((e=ot(e))instanceof Mc)return e._internalPath;if(typeof e=="string")return of(t,e);throw Ul("Field path arguments must be of type string or ",t,!1,void 0,n)}const TO=new RegExp("[~\\*/\\[\\]]");function of(t,e,n){if(e.search(TO)>=0)throw Ul(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Mc(...e.split("."))._internalPath}catch{throw Ul(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ul(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new J(V.INVALID_ARGUMENT,a+t+c)}function hT(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dT{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new qt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new IO(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(af("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class IO extends dT{data(){return super.data()}}function af(t,e){return typeof e=="string"?of(t,e):e instanceof Mc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wO(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new J(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class lf{}class AO extends lf{}function RO(t,e,...n){let s=[];e instanceof lf&&s.push(e),s=s.concat(n),function(r){const o=r.filter(c=>c instanceof cf).length,a=r.filter(c=>c instanceof Lc).length;if(o>1||o>0&&a>0)throw new J(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const i of s)t=i._apply(t);return t}class Lc extends AO{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new Lc(e,n,s)}_apply(e){const n=this._parse(e);return fT(e._query,n),new Dr(e.firestore,e.converter,Eh(e._query,n))}_parse(e){const n=sf(e.firestore);return function(r,o,a,c,u,h,f){let m;if(u.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new J(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){M_(f,h);const _=[];for(const E of f)_.push(D_(c,r,E));m={arrayValue:{values:_}}}else m=D_(c,r,f)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||M_(f,h),m=EO(a,o,f,h==="in"||h==="not-in");return tt.create(u,h,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function CO(t,e,n){const s=e,i=af("where",t);return Lc._create(i,s,n)}class cf extends lf{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new cf(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:An.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,r){let o=i;const a=r.getFlattenedFilters();for(const c of a)fT(o,c),o=Eh(o,c)}(e._query,n),new Dr(e.firestore,e.converter,Eh(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function D_(t,e,n){if(typeof(n=ot(n))=="string"){if(n==="")throw new J(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!dE(e)&&n.indexOf("/")!==-1)throw new J(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(ze.fromString(n));if(!ie.isDocumentKey(s))throw new J(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return e_(t,new ie(s))}if(n instanceof qt)return e_(t,n._key);throw new J(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Oc(n)}.`)}function M_(t,e){if(!Array.isArray(t)||t.length===0)throw new J(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function fT(t,e){const n=function(i,r){for(const o of i)for(const a of o.getFlattenedFilters())if(r.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new J(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new J(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class SO{convertValue(e,n="none"){switch(Ei(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Xe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(vi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw he()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return bi(e,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertVectorValue(e){var n,s,i;const r=(i=(s=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||s===void 0?void 0:s.values)===null||i===void 0?void 0:i.map(o=>Xe(o.doubleValue));return new tf(r)}convertGeoPoint(e){return new ef(Xe(e.latitude),Xe(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Od(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Ho(e));default:return null}}convertTimestamp(e){const n=qs(e);return new rt(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=ze.fromString(e);Le(ME(s));const i=new zo(s.get(1),s.get(3)),r=new ie(s.popFirst(5));return i.isEqual(n)||ds(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bO(t,e,n){let s;return s=t?t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class pT extends dT{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new dl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(af("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class dl extends pT{data(e={}){return super.data(e)}}class PO{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new co(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new dl(this._firestore,this._userDataWriter,s.key,s,new co(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new J(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,r){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const c=new dl(i._firestore,i._userDataWriter,a.doc.key,a.doc,new co(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>r||a.type!==3).map(a=>{const c=new dl(i._firestore,i._userDataWriter,a.doc.key,a.doc,new co(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,h=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:kO(a.type),doc:c,oldIndex:u,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function kO(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return he()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NO(t){t=Un(t,qt);const e=Un(t.firestore,Ti);return cO(Jd(e),t._key).then(n=>gT(e,t,n))}class mT extends SO{constructor(e){super(),this.firestore=e}convertBytes(e){return new Er(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new qt(this.firestore,null,n)}}function _T(t,e,n,...s){t=Un(t,qt);const i=Un(t.firestore,Ti),r=sf(i);let o;return o=typeof(e=ot(e))=="string"||e instanceof Mc?vO(r,"updateDoc",t._key,e,n,s):yO(r,"updateDoc",t._key,e),uf(i,[o.toMutation(t._key,vn.exists(!0))])}function OO(t){return uf(Un(t.firestore,Ti),[new Vd(t._key,vn.none())])}function DO(t,e){const n=Un(t.firestore,Ti),s=Yo(t),i=bO(t.converter,e);return uf(n,[gO(sf(t.firestore),"addDoc",s._key,i,t.converter!==null,{}).toMutation(s._key,vn.exists(!1))]).then(()=>s)}function MO(t,...e){var n,s,i;t=ot(t);let r={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||O_(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges,source:r.source};if(O_(e[o])){const f=e[o];e[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[o+1]=(s=f.error)===null||s===void 0?void 0:s.bind(f),e[o+2]=(i=f.complete)===null||i===void 0?void 0:i.bind(f)}let c,u,h;if(t instanceof qt)u=Un(t.firestore,Ti),h=wc(t._key.path),c={next:f=>{e[o]&&e[o](gT(u,t,f))},error:e[o+1],complete:e[o+2]};else{const f=Un(t,Dr);u=Un(f.firestore,Ti),h=f._query;const m=new mT(u);c={next:_=>{e[o]&&e[o](new PO(u,m,f,_))},error:e[o+1],complete:e[o+2]},wO(t._query)}return function(m,_,E,S){const b=new nT(S),F=new KE(_,b,E);return m.asyncQueue.enqueueAndForget(async()=>HE(await kh(m),F)),()=>{b.Za(),m.asyncQueue.enqueueAndForget(async()=>zE(await kh(m),F))}}(Jd(u),h,a,c)}function uf(t,e){return function(s,i){const r=new Vs;return s.asyncQueue.enqueueAndForget(async()=>JN(await lO(s),i,r)),r.promise}(Jd(t),e)}function gT(t,e,n){const s=n.docs.get(e._key),i=new mT(t);return new pT(t,i,e._key,s,new co(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){kr=i})(Ks),qn(new In("firestore",(s,{instanceIdentifier:i,options:r})=>{const o=s.getProvider("app").getImmediate(),a=new Ti(new N1(s.getProvider("auth-internal")),new x1(s.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new J(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new zo(u.options.projectId,h)}(o,i),o);return r=Object.assign({useFetchStreams:n},r),a._setSettings(r),a},"PUBLIC").setMultipleInstances(!0)),sn(Qm,"4.7.3",e),sn(Qm,"4.7.3","esm2017")})();const xO={class:"task-form_header"},LO={class:"task-form_title"},VO={key:0,class:"task-form_error"},FO={class:"task-form_description"},UO={class:"task-form_calendar"},BO={__name:"UpdateTask",setup(t){const n=yc().currentUser,s=Je(""),i=kR();let r="";const o=Cn({date:null,description:"",done:!1,title:""});Ar(async()=>{var m;r=(m=i.params)==null?void 0:m.id,r&&await a()});const a=async()=>{const _=(await NO(Yo(ar,"todos",r))).data();o.date=_.date,o.description=_.description,o.done=_.done,o.title=_.title},c=async()=>{await _T(Yo(ar,"todos",r),o),ls.push("/")},u=async()=>{if(o.title&&o.description&&o.date)try{await DO(oT(ar,"todos"),{title:o.title,description:o.description,date:o.date,done:o.done,email:n.email}),ls.push("/")}catch{}},h=()=>{o.title.length>20?s.value="The title is too long. It must be less than 20 characters.":(s.value="",r?c():u())},f=()=>{ls.push("/")};return(m,_)=>(it(),ht(Ht,null,[ne("div",xO,[ne("img",{src:b1,alt:"Back",onClick:f,class:"back-page_button"}),ne("h1",null,Zt(Bt(r)?"Edit":"Create")+" task",1)]),ne("div",LO,[_[3]||(_[3]=ne("label",{for:"title",class:"task-form_name-of-field"},"Title:",-1)),os(ne("input",{id:"title",type:"text","onUpdate:modelValue":_[0]||(_[0]=E=>o.title=E),placeholder:"Enter a title",class:"task-form_input"},null,512),[[Ms,o.title]]),s.value?(it(),ht("p",VO,Zt(s.value),1)):Ds("",!0)]),ne("div",FO,[_[4]||(_[4]=ne("label",{for:"description",class:"task-form_name-of-field"},"Description:",-1)),os(ne("textarea",{id:"description","onUpdate:modelValue":_[1]||(_[1]=E=>o.description=E),placeholder:"Description of task",class:"task-form_textarea"},null,512),[[Ms,o.description]])]),ne("div",UO,[_[5]||(_[5]=ne("label",{for:"date",class:"task-form_name-of-field"},"Date:",-1)),os(ne("input",{id:"date",type:"date","onUpdate:modelValue":_[2]||(_[2]=E=>o.date=E),class:"task-form_date"},null,512),[[Ms,o.date]])]),ne("button",{class:"task-form_button",onClick:h},Zt(Bt(r)?"Save":"Add task"),1)],64))}},x_=Rr(BO,[["__scopeId","data-v-bfa9ce17"]]),$O="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xml:space='preserve'%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%20id='delete'%3e%3cg%20id='Expanded'%3e%3cpath%20d='M41%2048H7V7h34v41zM9%2046h30V9H9v37z'%3e%3c/path%3e%3cpath%20d='M35%209H13V1h22v8zM15%207h18V3H15v4zM16%2041a1%201%200%200%201-1-1V15a1%201%200%201%201%202%200v25a1%201%200%200%201-1%201zM24%2041a1%201%200%200%201-1-1V15a1%201%200%201%201%202%200v25a1%201%200%200%201-1%201zM32%2041a1%201%200%200%201-1-1V15a1%201%200%201%201%202%200v25a1%201%200%200%201-1%201z'%3e%3c/path%3e%3cpath%20d='M0%207h48v2H0z'%3e%3c/path%3e%3c/g%3e%3c/svg%3e",qO="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20id='edit'%3e%3cpath%20d='M3.5,24h15A3.51,3.51,0,0,0,22,20.487V12.95a1,1,0,0,0-2,0v7.537A1.508,1.508,0,0,1,18.5,22H3.5A1.508,1.508,0,0,1,2,20.487V5.513A1.508,1.508,0,0,1,3.5,4H11a1,1,0,0,0,0-2H3.5A3.51,3.51,0,0,0,0,5.513V20.487A3.51,3.51,0,0,0,3.5,24Z'%3e%3c/path%3e%3cpath%20d='M9.455,10.544l-.789,3.614a1,1,0,0,0,.271.921,1.038,1.038,0,0,0,.92.269l3.606-.791a1,1,0,0,0,.494-.271l9.114-9.114a3,3,0,0,0,0-4.243,3.07,3.07,0,0,0-4.242,0l-9.1,9.123A1,1,0,0,0,9.455,10.544Zm10.788-8.2a1.022,1.022,0,0,1,1.414,0,1.009,1.009,0,0,1,0,1.413l-.707.707L19.536,3.05Zm-8.9,8.914,6.774-6.791,1.4,1.407-6.777,6.793-1.795.394Z'%3e%3c/path%3e%3c/svg%3e",jO={class:"container_calendar"},WO={class:"calendar_year"},HO={class:"calendar"},zO=["onClick"],KO={class:"calendar_day-of-week"},GO={class:"calendar_date"},QO={class:"calendar_month"},YO={key:0,class:"calendar__task-status"},XO={key:0,class:"dot calendar__has-completed"},JO={key:1,class:"dot calendar__has-uncompleted"},ZO={__name:"Calendar",props:{nonEmptyDays:Object},emits:["select-date"],setup(t,{emit:e}){const n=e,s=new Date,i=Je(s.getMonth()),r=Je(s.getFullYear()),o=Je(""),a=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],c=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],h=Pe(()=>{const m=[];for(let _=0;_<31;_++){const E=new Date(r.value,i.value,s.getDate()+_),S=Pe(()=>a[E.getMonth()]),b=Pe(()=>c[E.getDay()===0?6:E.getDay()-1]),F=E.getDate()===s.getDate()&&E.getMonth()===s.getMonth()&&E.getFullYear()===s.getFullYear(),L=(a.indexOf(S.value)+1).toString().padStart(2,"0"),U=E.getDate().toString().padStart(2,"0");m.push({date:E.getDate(),dayOfWeek:b,month:S,year:E.getFullYear(),isToday:F,formattedDate:`${E.getFullYear()}-${L}-${U}`})}return console.log(m),m}),f=m=>{o.value=m.formattedDate,n("select-date",o.value)};return Ar(()=>{f(h.value[0])}),(m,_)=>(it(),ht("div",jO,[ne("div",WO,Zt(r.value),1),ne("div",HO,[(it(!0),ht(Ht,null,ay(Bt(h),E=>(it(),ht("button",{key:E.date,class:nc(["calendar_item",{today:E==null?void 0:E.isToday}]),onClick:()=>f(E)},[ne("span",KO,Zt(E.dayOfWeek),1),ne("span",GO,Zt(E.date),1),ne("span",QO,Zt(E.month),1),t.nonEmptyDays[E.formattedDate]?(it(),ht("div",YO,[t.nonEmptyDays[E.formattedDate].hasCompletedTask?(it(),ht("div",XO)):Ds("",!0),t.nonEmptyDays[E.formattedDate].hasUnCompletedTask?(it(),ht("div",JO)):Ds("",!0)])):Ds("",!0)],10,zO))),128))])]))}},eD=Rr(ZO,[["__scopeId","data-v-313a840a"]]),tD={class:"container-home-page"},nD={class:"task-list"},sD={class:"task-list__task-item"},iD={class:"task-list__card-of-task"},rD=["onUpdate:modelValue","onChange"],oD={class:"task-list__options-button"},aD=["onClick"],lD=["onClick"],cD={key:0},uD={key:0,class:"pagination"},hD=["disabled"],dD=["disabled"],bu=5,fD={__name:"HomePage",setup(t){const e=yc();e.currentUser;const n=Je([]),s=Je([]);let i={},r=Je(1),o="";Ar(()=>{ub(e,E=>{if(console.log(777),E){console.log(E);const S=RO(oT(ar,"todos"),CO("email","==",E.email));MO(S,b=>{const F=[],D={};b.forEach(L=>{D[L.data().date]||(D[L.data().date]={}),L.data().done?D[L.data().date].hasCompletedTask=!0:D[L.data().date].hasUnCompletedTask=!0,F.push({id:L.id,title:L.data().title,description:L.data().description,done:L.data().done,date:L.data().date})}),console.log(i),n.value=F,i=D,o&&u(o)})}else ls.push("/login")})});const a=async(E,S)=>{const b=Yo(ar,"todos",E);await _T(b,{done:S})},c=async E=>{await OO(Yo(ar,"todos",E))},u=E=>{E&&(o=E,s.value=n.value.filter(S=>S.date===E),r.value=1)},h=Pe(()=>{const E=(r.value-1)*bu,S=E+bu;return s.value.slice(E,S)}),f=Pe(()=>Math.ceil(s.value.length/bu)),m=()=>{r.value>1&&r.value--},_=()=>{r.value<f.value&&r.value++};return(E,S)=>(it(),ht(Ht,null,[S[2]||(S[2]=ne("h3",null,"Tassker",-1)),_e(eD,{"non-empty-days":Bt(i),onSelectDate:u},null,8,["non-empty-days"]),ne("div",tD,[ne("div",nD,[(it(!0),ht(Ht,null,ay(h.value,(b,F)=>(it(),ht("div",{key:b.id},[ne("div",sD,[ne("label",iD,[os(ne("input",{type:"checkbox","onUpdate:modelValue":D=>b.done=D,class:"task-list__checkbox-done",id:"task",onChange:D=>a(b.id,b.done)},null,40,rD),[[_A,b.done]]),S[1]||(S[1]=ne("span",{class:"task-list__checkmark"},null,-1)),ne("span",null,Zt(b.title),1)]),ne("div",oD,[ne("img",{src:$O,alt:"Delete",onClick:D=>c(b.id),class:"task-list__delete-button"},null,8,aD),ne("img",{src:qO,alt:"Edit",onClick:D=>Bt(ls).push(`/edit-task/${b.id}`),class:"task-list__edit-button"},null,8,lD)])]),F<n.value.length?(it(),ht("hr",cD)):Ds("",!0)]))),128))]),f.value?(it(),ht("div",uD,[ne("button",{onClick:m,disabled:Bt(r)===1,class:"pagination__button"}," < ",8,hD),ne("span",null,"Page "+Zt(Bt(r))+" of "+Zt(f.value),1),ne("button",{onClick:_,disabled:Bt(r)===f.value,class:"pagination__button"}," > ",8,dD)])):Ds("",!0),ne("div",null,[ne("button",{class:"display_add-task-button",onClick:S[0]||(S[0]=b=>Bt(ls).push("/create-task"))},"Add a New Task")])])],64))}},pD=Rr(fD,[["__scopeId","data-v-6ac84d96"]]),mD=[{path:"/",component:pD,name:"homePage",meta:{requiresAuth:!1}},{path:"/create-task",component:x_},{path:"/edit-task/:id",component:x_},{path:"/login",component:y1,name:"login",meta:{requiresAuth:!0}},{path:"/signup",component:S1}],ls=bR({history:sR(),routes:mD});var _D="firebase",gD="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */sn(_D,gD,"app");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yD=new Map,vD={activated:!1,tokenObservers:[]};function Rn(t){return yD.get(t)||Object.assign({},vD)}const L_={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ED{constructor(e,n,s,i,r){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=s,this.lowerBound=i,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=i,i>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new Fo,this.pending.promise.catch(n=>{}),await TD(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new Fo,this.pending.promise.catch(n=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function TD(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ID={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},Bl=new Sr("appCheck","AppCheck",ID);function yT(t){if(!Rn(t).activated)throw Bl.create("use-before-activation",{appName:t.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wD="firebase-app-check-database",AD=1,Oh="firebase-app-check-store";let Ha=null;function RD(){return Ha||(Ha=new Promise((t,e)=>{try{const n=indexedDB.open(wD,AD);n.onsuccess=s=>{t(s.target.result)},n.onerror=s=>{var i;e(Bl.create("storage-open",{originalErrorMessage:(i=s.target.error)===null||i===void 0?void 0:i.message}))},n.onupgradeneeded=s=>{const i=s.target.result;switch(s.oldVersion){case 0:i.createObjectStore(Oh,{keyPath:"compositeKey"})}}}catch(n){e(Bl.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),Ha)}function CD(t,e){return SD(bD(t),e)}async function SD(t,e){const s=(await RD()).transaction(Oh,"readwrite"),r=s.objectStore(Oh).put({compositeKey:t,value:e});return new Promise((o,a)=>{r.onsuccess=c=>{o()},s.onerror=c=>{var u;a(Bl.create("storage-set",{originalErrorMessage:(u=c.target.error)===null||u===void 0?void 0:u.message}))}})}function bD(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dh=new sa("@firebase/app-check");function V_(t,e){return Jy()?CD(t,e).catch(n=>{Dh.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PD={error:"UNKNOWN_ERROR"};function kD(t){return dc.encodeString(JSON.stringify(t),!1)}async function Mh(t,e=!1){const n=t.app;yT(n);const s=Rn(n);let i=s.token,r;if(i&&!uo(i)&&(s.token=void 0,i=void 0),!i){const c=await s.cachedTokenPromise;c&&(uo(c)?i=c:await V_(n,void 0))}if(!e&&i&&uo(i))return{token:i.token};let o=!1;try{s.exchangeTokenPromise||(s.exchangeTokenPromise=s.provider.getToken().finally(()=>{s.exchangeTokenPromise=void 0}),o=!0),i=await Rn(n).exchangeTokenPromise}catch(c){c.code==="appCheck/throttled"?Dh.warn(c.message):Dh.error(c),r=c}let a;return i?r?uo(i)?a={token:i.token,internalError:r}:a=U_(r):(a={token:i.token},s.token=i,await V_(n,i)):a=U_(r),o&&MD(n,a),a}async function ND(t){const e=t.app;yT(e);const{provider:n}=Rn(e);{const{token:s}=await n.getToken();return{token:s}}}function OD(t,e,n,s){const{app:i}=t,r=Rn(i),o={next:n,error:s,type:e};if(r.tokenObservers=[...r.tokenObservers,o],r.token&&uo(r.token)){const a=r.token;Promise.resolve().then(()=>{n({token:a.token}),F_(t)}).catch(()=>{})}r.cachedTokenPromise.then(()=>F_(t))}function vT(t,e){const n=Rn(t),s=n.tokenObservers.filter(i=>i.next!==e);s.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=s}function F_(t){const{app:e}=t,n=Rn(e);let s=n.tokenRefresher;s||(s=DD(t),n.tokenRefresher=s),!s.isRunning()&&n.isTokenAutoRefreshEnabled&&s.start()}function DD(t){const{app:e}=t;return new ED(async()=>{const n=Rn(e);let s;if(n.token?s=await Mh(t,!0):s=await Mh(t),s.error)throw s.error;if(s.internalError)throw s.internalError},()=>!0,()=>{const n=Rn(e);if(n.token){let s=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const i=n.token.expireTimeMillis-5*60*1e3;return s=Math.min(s,i),Math.max(0,s-Date.now())}else return 0},L_.RETRIAL_MIN_WAIT,L_.RETRIAL_MAX_WAIT)}function MD(t,e){const n=Rn(t).tokenObservers;for(const s of n)try{s.type==="EXTERNAL"&&e.error!=null?s.error(e.error):s.next(e)}catch{}}function uo(t){return t.expireTimeMillis-Date.now()>0}function U_(t){return{token:kD(PD),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xD{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=Rn(this.app);for(const n of e)vT(this.app,n.next);return Promise.resolve()}}function LD(t,e){return new xD(t,e)}function VD(t){return{getToken:e=>Mh(t,e),getLimitedUseToken:()=>ND(t),addTokenListener:e=>OD(t,"INTERNAL",e),removeTokenListener:e=>vT(t.app,e)}}const FD="@firebase/app-check",UD="0.8.8",BD="app-check",B_="app-check-internal";function $D(){qn(new In(BD,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return LD(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(B_).initialize()})),qn(new In(B_,t=>{const e=t.getProvider("app-check").getImmediate();return VD(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),sn(FD,UD)}$D();const qD=Symbol("firebaseApp");var $_={};const q_="@firebase/database",j_="1.0.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ET="";function jD(t){ET=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WD{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),gt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Uo(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HD{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return _s(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TT=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new WD(e)}}catch{}return new HD},ui=TT("localStorage"),zD=TT("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rr=new sa("@firebase/database"),KD=function(){let t=1;return function(){return t++}}(),IT=function(t){const e=sC(t),n=new JR;n.update(e);const s=n.digest();return dc.encodeByteArray(s)},ga=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=ga.apply(null,s):typeof s=="object"?e+=gt(s):e+=s,e+=" "}return e};let Co=null,W_=!0;const GD=function(t,e){G(!e,"Can't turn on custom loggers persistently."),rr.logLevel=ye.VERBOSE,Co=rr.log.bind(rr)},kt=function(...t){if(W_===!0&&(W_=!1,Co===null&&zD.get("logging_enabled")===!0&&GD()),Co){const e=ga.apply(null,t);Co(e)}},ya=function(t){return function(...e){kt(t,...e)}},xh=function(...t){const e="FIREBASE INTERNAL ERROR: "+ga(...t);rr.error(e)},Ii=function(...t){const e=`FIREBASE FATAL ERROR: ${ga(...t)}`;throw rr.error(e),new Error(e)},rn=function(...t){const e="FIREBASE WARNING: "+ga(...t);rr.warn(e)},QD=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&rn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},wT=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},YD=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Tr="[MIN_NAME]",wi="[MAX_NAME]",Mr=function(t,e){if(t===e)return 0;if(t===Tr||e===wi)return-1;if(e===Tr||t===wi)return 1;{const n=H_(t),s=H_(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},XD=function(t,e){return t===e?0:t<e?-1:1},Zr=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+gt(e))},hf=function(t){if(typeof t!="object"||t===null)return gt(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=gt(e[s]),n+=":",n+=hf(t[e[s]]);return n+="}",n},AT=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function dn(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const RT=function(t){G(!wT(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,c;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const u=[];for(c=n;c;c-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)u.push(r%2?1:0),r=Math.floor(r/2);u.push(i?1:0),u.reverse();const h=u.join("");let f="";for(c=0;c<64;c+=8){let m=parseInt(h.substr(c,8),2).toString(16);m.length===1&&(m="0"+m),f=f+m}return f.toLowerCase()},JD=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},ZD=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},eM=new RegExp("^-?(0*)\\d{1,10}$"),tM=-2147483648,nM=2147483647,H_=function(t){if(eM.test(t)){const e=Number(t);if(e>=tM&&e<=nM)return e}return null},va=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw rn("Exception was thrown by user callback.",n),e},Math.floor(0))}},sM=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},So=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iM{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){rn(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rM{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(kt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',rn(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const df="5",CT="v",ST="s",bT="r",PT="f",kT=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,NT="ls",OT="p",Lh="ac",DT="websocket",MT="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oM{constructor(e,n,s,i,r=!1,o="",a=!1,c=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ui.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ui.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function aM(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function xT(t,e,n){G(typeof e=="string","typeof type must == string"),G(typeof n=="object","typeof params must == object");let s;if(e===DT)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===MT)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);aM(t)&&(n.ns=t.namespace);const i=[];return dn(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lM{constructor(){this.counters_={}}incrementCounter(e,n=1){_s(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return DR(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pu={},ku={};function ff(t){const e=t.toString();return Pu[e]||(Pu[e]=new lM),Pu[e]}function cM(t,e){const n=t.toString();return ku[n]||(ku[n]=e()),ku[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uM{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&va(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z_="start",hM="close",dM="pLPCommand",fM="pRTLPCB",LT="id",VT="pw",FT="ser",pM="cb",mM="seg",_M="ts",gM="d",yM="dframe",UT=1870,BT=30,vM=UT-BT,EM=25e3,TM=3e4;class zi{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ya(e),this.stats_=ff(n),this.urlFn=c=>(this.appCheckToken&&(c[Lh]=this.appCheckToken),xT(n,MT,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new uM(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(TM)),YD(()=>{if(this.isClosed_)return;this.scriptTagHolder=new pf((...r)=>{const[o,a,c,u,h]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===z_)this.id=a,this.password=c;else if(o===hM)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[z_]="t",s[FT]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[pM]=this.scriptTagHolder.uniqueCallbackIdentifier),s[CT]=df,this.transportSessionId&&(s[ST]=this.transportSessionId),this.lastSessionId&&(s[NT]=this.lastSessionId),this.applicationId&&(s[OT]=this.applicationId),this.appCheckToken&&(s[Lh]=this.appCheckToken),typeof location<"u"&&location.hostname&&kT.test(location.hostname)&&(s[bT]=PT);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){zi.forceAllow_=!0}static forceDisallow(){zi.forceDisallow_=!0}static isAvailable(){return zi.forceAllow_?!0:!zi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!JD()&&!ZD()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=gt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Hy(n),i=AT(s,vM);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[yM]="t",s[LT]=e,s[VT]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=gt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class pf{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=KD(),window[dM+this.uniqueCallbackIdentifier]=e,window[fM+this.uniqueCallbackIdentifier]=n,this.myIFrame=pf.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){kt("frame writing exception"),a.stack&&kt(a.stack),kt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||kt("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[LT]=this.myID,e[VT]=this.myPW,e[FT]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+BT+s.length<=UT;){const o=this.pendingSegs.shift();s=s+"&"+mM+i+"="+o.seg+"&"+_M+i+"="+o.ts+"&"+gM+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(EM)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{kt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IM=16384,wM=45e3;let $l=null;typeof MozWebSocket<"u"?$l=MozWebSocket:typeof WebSocket<"u"&&($l=WebSocket);class mn{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ya(this.connId),this.stats_=ff(n),this.connURL=mn.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[CT]=df,typeof location<"u"&&location.hostname&&kT.test(location.hostname)&&(o[bT]=PT),n&&(o[ST]=n),s&&(o[NT]=s),i&&(o[Lh]=i),r&&(o[OT]=r),xT(e,DT,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ui.set("previous_websocket_failure",!0);try{let s;Xy(),this.mySock=new $l(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){mn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&$l!==null&&!mn.forceDisallow_}static previouslyFailed(){return ui.isInMemoryStorage||ui.get("previous_websocket_failure")===!0}markConnectionHealthy(){ui.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Uo(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(G(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=gt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=AT(n,IM);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(wM))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}mn.responsesRequiredToBeHealthy=2;mn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[zi,mn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=mn&&mn.isAvailable();let s=n&&!mn.previouslyFailed();if(e.webSocketOnly&&(n||rn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[mn];else{const i=this.transports_=[];for(const r of Xo.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Xo.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Xo.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AM=6e4,RM=5e3,CM=10*1024,SM=100*1024,Nu="t",K_="d",bM="s",G_="r",PM="e",Q_="o",Y_="a",X_="n",J_="p",kM="h";class NM{constructor(e,n,s,i,r,o,a,c,u,h){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=u,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ya("c:"+this.id+":"),this.transportManager_=new Xo(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=So(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>SM?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>CM?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Nu in e){const n=e[Nu];n===Y_?this.upgradeIfSecondaryHealthy_():n===G_?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Q_&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Zr("t",e),s=Zr("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:J_,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Y_,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:X_,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Zr("t",e),s=Zr("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Zr(Nu,e);if(K_ in e){const s=e[K_];if(n===kM){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===X_){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===bM?this.onConnectionShutdown_(s):n===G_?this.onReset_(s):n===PM?xh("Server Error: "+s):n===Q_?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):xh("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),df!==s&&rn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),So(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(AM))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):So(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(RM))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:J_,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ui.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $T{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qT{constructor(e){this.allowedEvents_=e,this.listeners_={},G(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){G(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql extends qT{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!_d()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ql}getInitialEvent(e){return G(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z_=32,eg=768;class Ke{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Ve(){return new Ke("")}function Ae(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Ws(t){return t.pieces_.length-t.pieceNum_}function He(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Ke(t.pieces_,e)}function jT(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function OM(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function WT(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function HT(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Ke(e,0)}function dt(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof Ke)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new Ke(n,0)}function Ee(t){return t.pieceNum_>=t.pieces_.length}function cn(t,e){const n=Ae(t),s=Ae(e);if(n===null)return e;if(n===s)return cn(He(t),He(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function zT(t,e){if(Ws(t)!==Ws(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function _n(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Ws(t)>Ws(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class DM{constructor(e,n){this.errorPrefix_=n,this.parts_=WT(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=pc(this.parts_[s]);KT(this)}}function MM(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=pc(e),KT(t)}function xM(t){const e=t.parts_.pop();t.byteLength_-=pc(e),t.parts_.length>0&&(t.byteLength_-=1)}function KT(t){if(t.byteLength_>eg)throw new Error(t.errorPrefix_+"has a key path longer than "+eg+" bytes ("+t.byteLength_+").");if(t.parts_.length>Z_)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Z_+") or object contains a cycle "+oi(t))}function oi(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf extends qT{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new mf}getInitialEvent(e){return G(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eo=1e3,LM=60*5*1e3,tg=30*1e3,VM=1.3,FM=3e4,UM="server_kill",ng=3;class cs extends $T{constructor(e,n,s,i,r,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=cs.nextPersistentConnectionId_++,this.log_=ya("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=eo,this.maxReconnectDelay_=LM,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!Xy())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");mf.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ql.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(gt(r)),G(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Fo,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),G(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),G(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const c=a.d,u=a.s;cs.warnOnListenWarnings_(c,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(u,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&_s(e,"w")){const s=hr(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();rn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||XR(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=tg)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=YR(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),G(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+gt(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):xh("Unrecognized action received from server: "+gt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){G(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=eo,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=eo,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>FM&&(this.reconnectDelay_=eo),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*VM)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+cs.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,s())},u=function(f){G(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:c,sendRequest:u};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,m]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?kt("getToken() completed but was canceled"):(kt("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=m&&m.token,a=new NM(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,_=>{rn(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(UM)},r))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&rn(f),c())}}}interrupt(e){kt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){kt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ju(this.interruptReasons_)&&(this.reconnectDelay_=eo,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>hf(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new Ke(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){kt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ng&&(this.reconnectDelay_=tg,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){kt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ng&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+ET.replace(/\./g,"-")]=1,_d()?e["framework.cordova"]=1:Yy()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ql.getInstance().currentlyOnline();return Ju(this.interruptReasons_)&&e}}cs.nextPersistentConnectionId_=0;cs.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new Re(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new Re(Tr,e),i=new Re(Tr,n);return this.compare(s,i)!==0}minPost(){return Re.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let za;class GT extends Vc{static get __EMPTY_NODE(){return za}static set __EMPTY_NODE(e){za=e}compare(e,n){return Mr(e.name,n.name)}isDefinedOn(e){throw Cr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Re.MIN}maxPost(){return new Re(wi,za)}makePost(e,n){return G(typeof e=="string","KeyIndex indexValue must always be a string."),new Re(e,za)}toString(){return".key"}}const or=new GT;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ut{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??ut.RED,this.left=i??Kt.EMPTY_NODE,this.right=r??Kt.EMPTY_NODE}copy(e,n,s,i,r){return new ut(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Kt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Kt.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ut.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ut.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ut.RED=!0;ut.BLACK=!1;class BM{copy(e,n,s,i,r){return this}insert(e,n,s){return new ut(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Kt{constructor(e,n=Kt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Kt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ut.BLACK,null,null))}remove(e){return new Kt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ut.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ka(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ka(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ka(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ka(this.root_,null,this.comparator_,!0,e)}}Kt.EMPTY_NODE=new BM;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $M(t,e){return Mr(t.name,e.name)}function _f(t,e){return Mr(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vh;function qM(t){Vh=t}const QT=function(t){return typeof t=="number"?"number:"+RT(t):"string:"+t},YT=function(t){if(t.isLeafNode()){const e=t.val();G(typeof e=="string"||typeof e=="number"||typeof e=="object"&&_s(e,".sv"),"Priority must be a string or number.")}else G(t===Vh||t.isEmpty(),"priority of unexpected type.");G(t===Vh||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sg;class lt{constructor(e,n=lt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,G(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),YT(this.priorityNode_)}static set __childrenNodeConstructor(e){sg=e}static get __childrenNodeConstructor(){return sg}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new lt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:lt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Ee(e)?this:Ae(e)===".priority"?this.priorityNode_:lt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:lt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=Ae(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(G(s!==".priority"||Ws(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,lt.__childrenNodeConstructor.EMPTY_NODE.updateChild(He(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+QT(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=RT(this.value_):e+=this.value_,this.lazyHash_=IT(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===lt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof lt.__childrenNodeConstructor?-1:(G(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=lt.VALUE_TYPE_ORDER.indexOf(n),r=lt.VALUE_TYPE_ORDER.indexOf(s);return G(i>=0,"Unknown leaf type: "+n),G(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}lt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let XT,JT;function jM(t){XT=t}function WM(t){JT=t}class HM extends Vc{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Mr(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Re.MIN}maxPost(){return new Re(wi,new lt("[PRIORITY-POST]",JT))}makePost(e,n){const s=XT(e);return new Re(n,new lt("[PRIORITY-POST]",s))}toString(){return".priority"}}const Dt=new HM;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zM=Math.log(2);class KM{constructor(e){const n=r=>parseInt(Math.log(r)/zM,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const jl=function(t,e,n,s){t.sort(e);const i=function(c,u){const h=u-c;let f,m;if(h===0)return null;if(h===1)return f=t[c],m=n?n(f):f,new ut(m,f.node,ut.BLACK,null,null);{const _=parseInt(h/2,10)+c,E=i(c,_),S=i(_+1,u);return f=t[_],m=n?n(f):f,new ut(m,f.node,ut.BLACK,E,S)}},r=function(c){let u=null,h=null,f=t.length;const m=function(E,S){const b=f-E,F=f;f-=E;const D=i(b+1,F),L=t[b],U=n?n(L):L;_(new ut(U,L.node,S,null,D))},_=function(E){u?(u.left=E,u=E):(h=E,u=E)};for(let E=0;E<c.count;++E){const S=c.nextBitIsOne(),b=Math.pow(2,c.count-(E+1));S?m(b,ut.BLACK):(m(b,ut.BLACK),m(b,ut.RED))}return h},o=new KM(t.length),a=r(o);return new Kt(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ou;const Ui={};class rs{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return G(Ui&&Dt,"ChildrenNode.ts has not been loaded"),Ou=Ou||new rs({".priority":Ui},{".priority":Dt}),Ou}get(e){const n=hr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Kt?n:null}hasIndex(e){return _s(this.indexSet_,e.toString())}addIndex(e,n){G(e!==or,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(Re.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=jl(s,e.getCompare()):a=Ui;const c=e.toString(),u=Object.assign({},this.indexSet_);u[c]=e;const h=Object.assign({},this.indexes_);return h[c]=a,new rs(h,u)}addToIndexes(e,n){const s=Il(this.indexes_,(i,r)=>{const o=hr(this.indexSet_,r);if(G(o,"Missing index implementation for "+r),i===Ui)if(o.isDefinedOn(e.node)){const a=[],c=n.getIterator(Re.Wrap);let u=c.getNext();for(;u;)u.name!==e.name&&a.push(u),u=c.getNext();return a.push(e),jl(a,o.getCompare())}else return Ui;else{const a=n.get(e.name);let c=i;return a&&(c=c.remove(new Re(e.name,a))),c.insert(e,e.node)}});return new rs(s,this.indexSet_)}removeFromIndexes(e,n){const s=Il(this.indexes_,i=>{if(i===Ui)return i;{const r=n.get(e.name);return r?i.remove(new Re(e.name,r)):i}});return new rs(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let to;class xe{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&YT(this.priorityNode_),this.children_.isEmpty()&&G(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return to||(to=new xe(new Kt(_f),null,rs.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||to}updatePriority(e){return this.children_.isEmpty()?this:new xe(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?to:n}}getChild(e){const n=Ae(e);return n===null?this:this.getImmediateChild(n).getChild(He(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(G(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new Re(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?to:this.priorityNode_;return new xe(i,o,r)}}updateChild(e,n){const s=Ae(e);if(s===null)return n;{G(Ae(e)!==".priority"||Ws(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(He(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(Dt,(o,a)=>{n[o]=a.val(e),s++,r&&xe.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+QT(this.getPriority().val())+":"),this.forEachChild(Dt,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":IT(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new Re(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Re(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Re(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,Re.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,Re.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ea?-1:0}withIndex(e){if(e===or||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new xe(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===or||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Dt),i=n.getIterator(Dt);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===or?null:this.indexMap_.get(e.toString())}}xe.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class GM extends xe{constructor(){super(new Kt(_f),xe.EMPTY_NODE,rs.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return xe.EMPTY_NODE}isEmpty(){return!1}}const Ea=new GM;Object.defineProperties(Re,{MIN:{value:new Re(Tr,xe.EMPTY_NODE)},MAX:{value:new Re(wi,Ea)}});GT.__EMPTY_NODE=xe.EMPTY_NODE;lt.__childrenNodeConstructor=xe;qM(Ea);WM(Ea);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QM=!0;function Nt(t,e=null){if(t===null)return xe.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),G(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new lt(n,Nt(e))}if(!(t instanceof Array)&&QM){const n=[];let s=!1;if(dn(t,(o,a)=>{if(o.substring(0,1)!=="."){const c=Nt(a);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),n.push(new Re(o,c)))}}),n.length===0)return xe.EMPTY_NODE;const r=jl(n,$M,o=>o.name,_f);if(s){const o=jl(n,Dt.getCompare());return new xe(r,Nt(e),new rs({".priority":o},{".priority":Dt}))}else return new xe(r,Nt(e),rs.Default)}else{let n=xe.EMPTY_NODE;return dn(t,(s,i)=>{if(_s(t,s)&&s.substring(0,1)!=="."){const r=Nt(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(Nt(e))}}jM(Nt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YM extends Vc{constructor(e){super(),this.indexPath_=e,G(!Ee(e)&&Ae(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Mr(e.name,n.name):r}makePost(e,n){const s=Nt(e),i=xe.EMPTY_NODE.updateChild(this.indexPath_,s);return new Re(n,i)}maxPost(){const e=xe.EMPTY_NODE.updateChild(this.indexPath_,Ea);return new Re(wi,e)}toString(){return WT(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XM extends Vc{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Mr(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Re.MIN}maxPost(){return Re.MAX}makePost(e,n){const s=Nt(e);return new Re(n,s)}toString(){return".value"}}const JM=new XM;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZM(t){return{type:"value",snapshotNode:t}}function ex(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function tx(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ig(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function nx(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Dt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return G(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return G(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Tr}hasEnd(){return this.endSet_}getIndexEndValue(){return G(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return G(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:wi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return G(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Dt}copy(){const e=new gf;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function rg(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Dt?n="$priority":t.index_===JM?n="$value":t.index_===or?n="$key":(G(t.index_ instanceof YM,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=gt(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=gt(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+gt(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=gt(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+gt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function og(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Dt&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl extends $T{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=ya("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(G(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Wl.getListenId_(e,s),a={};this.listens_[o]=a;const c=rg(e._queryParams);this.restRequest_(r+".json",c,(u,h)=>{let f=h;if(u===404&&(f=null,u=null),u===null&&this.onDataUpdate_(r,f,!1,s),hr(this.listens_,o)===a){let m;u?u===401?m="permission_denied":m="rest_error:"+u:m="ok",i(m,null)}})}unlisten(e,n){const s=Wl.getListenId_(e,n);delete this.listens_[s]}get(e){const n=rg(e._queryParams),s=e._path.toString(),i=new Fo;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+br(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=Uo(a.responseText)}catch{rn("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,c)}else a.status!==401&&a.status!==404&&rn("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sx{constructor(){this.rootNode_=xe.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hl(){return{value:null,children:new Map}}function ZT(t,e,n){if(Ee(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=Ae(e);t.children.has(s)||t.children.set(s,Hl());const i=t.children.get(s);e=He(e),ZT(i,e,n)}}function Fh(t,e,n){t.value!==null?n(e,t.value):ix(t,(s,i)=>{const r=new Ke(e.toString()+"/"+s);Fh(i,r,n)})}function ix(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rx{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&dn(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ag=10*1e3,ox=30*1e3,ax=5*60*1e3;class lx{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new rx(e);const s=ag+(ox-ag)*Math.random();So(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;dn(e,(i,r)=>{r>0&&_s(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),So(this.reportStats_.bind(this),Math.floor(Math.random()*2*ax))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var On;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(On||(On={}));function eI(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function tI(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function nI(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=On.ACK_USER_WRITE,this.source=eI()}operationForChild(e){if(Ee(this.path)){if(this.affectedTree.value!=null)return G(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Ke(e));return new zl(Ve(),n,this.revert)}}else return G(Ae(this.path)===e,"operationForChild called for unrelated child."),new zl(He(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=On.OVERWRITE}operationForChild(e){return Ee(this.path)?new Ai(this.source,Ve(),this.snap.getImmediateChild(e)):new Ai(this.source,He(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=On.MERGE}operationForChild(e){if(Ee(this.path)){const n=this.children.subtree(new Ke(e));return n.isEmpty()?null:n.value?new Ai(this.source,Ve(),n.value):new Jo(this.source,Ve(),n)}else return G(Ae(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Jo(this.source,He(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Ee(e))return this.isFullyInitialized()&&!this.filtered_;const n=Ae(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function cx(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(nx(o.childName,o.snapshotNode))}),no(t,i,"child_removed",e,s,n),no(t,i,"child_added",e,s,n),no(t,i,"child_moved",r,s,n),no(t,i,"child_changed",e,s,n),no(t,i,"value",e,s,n),i}function no(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,c)=>hx(t,a,c)),o.forEach(a=>{const c=ux(t,a,r);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(c,t.query_))})})}function ux(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function hx(t,e,n){if(e.childName==null||n.childName==null)throw Cr("Should only compare child_ events.");const s=new Re(e.childName,e.snapshotNode),i=new Re(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sI(t,e){return{eventCache:t,serverCache:e}}function bo(t,e,n,s){return sI(new yf(e,n,s),t.serverCache)}function iI(t,e,n,s){return sI(t.eventCache,new yf(e,n,s))}function Uh(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Ri(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Du;const dx=()=>(Du||(Du=new Kt(XD)),Du);class We{constructor(e,n=dx()){this.value=e,this.children=n}static fromObject(e){let n=new We(null);return dn(e,(s,i)=>{n=n.set(new Ke(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Ve(),value:this.value};if(Ee(e))return null;{const s=Ae(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(He(e),n);return r!=null?{path:dt(new Ke(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Ee(e))return this;{const n=Ae(e),s=this.children.get(n);return s!==null?s.subtree(He(e)):new We(null)}}set(e,n){if(Ee(e))return new We(n,this.children);{const s=Ae(e),r=(this.children.get(s)||new We(null)).set(He(e),n),o=this.children.insert(s,r);return new We(this.value,o)}}remove(e){if(Ee(e))return this.children.isEmpty()?new We(null):new We(null,this.children);{const n=Ae(e),s=this.children.get(n);if(s){const i=s.remove(He(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new We(null):new We(this.value,r)}else return this}}get(e){if(Ee(e))return this.value;{const n=Ae(e),s=this.children.get(n);return s?s.get(He(e)):null}}setTree(e,n){if(Ee(e))return n;{const s=Ae(e),r=(this.children.get(s)||new We(null)).setTree(He(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new We(this.value,o)}}fold(e){return this.fold_(Ve(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(dt(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,Ve(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(Ee(e))return null;{const r=Ae(e),o=this.children.get(r);return o?o.findOnPath_(He(e),dt(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Ve(),n)}foreachOnPath_(e,n,s){if(Ee(e))return this;{this.value&&s(n,this.value);const i=Ae(e),r=this.children.get(i);return r?r.foreachOnPath_(He(e),dt(n,i),s):new We(null)}}foreach(e){this.foreach_(Ve(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(dt(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e){this.writeTree_=e}static empty(){return new En(new We(null))}}function Po(t,e,n){if(Ee(e))return new En(new We(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=cn(i,e);return r=r.updateChild(o,n),new En(t.writeTree_.set(i,r))}else{const i=new We(n),r=t.writeTree_.setTree(e,i);return new En(r)}}}function lg(t,e,n){let s=t;return dn(n,(i,r)=>{s=Po(s,dt(e,i),r)}),s}function cg(t,e){if(Ee(e))return En.empty();{const n=t.writeTree_.setTree(e,new We(null));return new En(n)}}function Bh(t,e){return ki(t,e)!=null}function ki(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(cn(n.path,e)):null}function ug(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Dt,(s,i)=>{e.push(new Re(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new Re(s,i.value))}),e}function Bs(t,e){if(Ee(e))return t;{const n=ki(t,e);return n!=null?new En(new We(n)):new En(t.writeTree_.subtree(e))}}function $h(t){return t.writeTree_.isEmpty()}function Ir(t,e){return rI(Ve(),t.writeTree_,e)}function rI(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(G(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=rI(dt(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(dt(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oI(t,e){return hI(e,t)}function fx(t,e,n,s,i){G(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Po(t.visibleWrites,e,n)),t.lastWriteId=s}function px(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function mx(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);G(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&_x(a,s.path)?i=!1:_n(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return gx(t),!0;if(s.snap)t.visibleWrites=cg(t.visibleWrites,s.path);else{const a=s.children;dn(a,c=>{t.visibleWrites=cg(t.visibleWrites,dt(s.path,c))})}return!0}else return!1}function _x(t,e){if(t.snap)return _n(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&_n(dt(t.path,n),e))return!0;return!1}function gx(t){t.visibleWrites=aI(t.allWrites,yx,Ve()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function yx(t){return t.visible}function aI(t,e,n){let s=En.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)_n(n,o)?(a=cn(n,o),s=Po(s,a,r.snap)):_n(o,n)&&(a=cn(o,n),s=Po(s,Ve(),r.snap.getChild(a)));else if(r.children){if(_n(n,o))a=cn(n,o),s=lg(s,a,r.children);else if(_n(o,n))if(a=cn(o,n),Ee(a))s=lg(s,Ve(),r.children);else{const c=hr(r.children,Ae(a));if(c){const u=c.getChild(He(a));s=Po(s,Ve(),u)}}}else throw Cr("WriteRecord should have .snap or .children")}}return s}function lI(t,e,n,s,i){if(!s&&!i){const r=ki(t.visibleWrites,e);if(r!=null)return r;{const o=Bs(t.visibleWrites,e);if($h(o))return n;if(n==null&&!Bh(o,Ve()))return null;{const a=n||xe.EMPTY_NODE;return Ir(o,a)}}}else{const r=Bs(t.visibleWrites,e);if(!i&&$h(r))return n;if(!i&&n==null&&!Bh(r,Ve()))return null;{const o=function(u){return(u.visible||i)&&(!s||!~s.indexOf(u.writeId))&&(_n(u.path,e)||_n(e,u.path))},a=aI(t.allWrites,o,e),c=n||xe.EMPTY_NODE;return Ir(a,c)}}}function vx(t,e,n){let s=xe.EMPTY_NODE;const i=ki(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Dt,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Bs(t.visibleWrites,e);return n.forEachChild(Dt,(o,a)=>{const c=Ir(Bs(r,new Ke(o)),a);s=s.updateImmediateChild(o,c)}),ug(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Bs(t.visibleWrites,e);return ug(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Ex(t,e,n,s,i){G(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=dt(e,n);if(Bh(t.visibleWrites,r))return null;{const o=Bs(t.visibleWrites,r);return $h(o)?i.getChild(n):Ir(o,i.getChild(n))}}function Tx(t,e,n,s){const i=dt(e,n),r=ki(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Bs(t.visibleWrites,i);return Ir(o,s.getNode().getImmediateChild(n))}else return null}function Ix(t,e){return ki(t.visibleWrites,e)}function wx(t,e,n,s,i,r,o){let a;const c=Bs(t.visibleWrites,e),u=ki(c,Ve());if(u!=null)a=u;else if(n!=null)a=Ir(c,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],f=o.getCompare(),m=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let _=m.getNext();for(;_&&h.length<i;)f(_,s)!==0&&h.push(_),_=m.getNext();return h}else return[]}function Ax(){return{visibleWrites:En.empty(),allWrites:[],lastWriteId:-1}}function qh(t,e,n,s){return lI(t.writeTree,t.treePath,e,n,s)}function cI(t,e){return vx(t.writeTree,t.treePath,e)}function hg(t,e,n,s){return Ex(t.writeTree,t.treePath,e,n,s)}function Kl(t,e){return Ix(t.writeTree,dt(t.treePath,e))}function Rx(t,e,n,s,i,r){return wx(t.writeTree,t.treePath,e,n,s,i,r)}function vf(t,e,n){return Tx(t.writeTree,t.treePath,e,n)}function uI(t,e){return hI(dt(t.treePath,e),t.writeTree)}function hI(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cx{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;G(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),G(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,ig(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,tx(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,ex(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,ig(s,e.snapshotNode,i.oldSnap));else throw Cr("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sx{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const dI=new Sx;class Ef{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new yf(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return vf(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ri(this.viewCache_),r=Rx(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}function bx(t,e){G(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),G(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Px(t,e,n,s,i){const r=new Cx;let o,a;if(n.type===On.OVERWRITE){const u=n;u.source.fromUser?o=jh(t,e,u.path,u.snap,s,i,r):(G(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!Ee(u.path),o=Gl(t,e,u.path,u.snap,s,i,a,r))}else if(n.type===On.MERGE){const u=n;u.source.fromUser?o=Nx(t,e,u.path,u.children,s,i,r):(G(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=Wh(t,e,u.path,u.children,s,i,a,r))}else if(n.type===On.ACK_USER_WRITE){const u=n;u.revert?o=Mx(t,e,u.path,s,i,r):o=Ox(t,e,u.path,u.affectedTree,s,i,r)}else if(n.type===On.LISTEN_COMPLETE)o=Dx(t,e,n.path,s,r);else throw Cr("Unknown operation type: "+n.type);const c=r.getChanges();return kx(e,o,c),{viewCache:o,changes:c}}function kx(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Uh(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(ZM(Uh(e)))}}function fI(t,e,n,s,i,r){const o=e.eventCache;if(Kl(s,n)!=null)return e;{let a,c;if(Ee(n))if(G(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Ri(e),h=u instanceof xe?u:xe.EMPTY_NODE,f=cI(s,h);a=t.filter.updateFullNode(e.eventCache.getNode(),f,r)}else{const u=qh(s,Ri(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const u=Ae(n);if(u===".priority"){G(Ws(n)===1,"Can't have a priority with additional path components");const h=o.getNode();c=e.serverCache.getNode();const f=hg(s,n,h,c);f!=null?a=t.filter.updatePriority(h,f):a=o.getNode()}else{const h=He(n);let f;if(o.isCompleteForChild(u)){c=e.serverCache.getNode();const m=hg(s,n,o.getNode(),c);m!=null?f=o.getNode().getImmediateChild(u).updateChild(h,m):f=o.getNode().getImmediateChild(u)}else f=vf(s,u,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),u,f,h,i,r):a=o.getNode()}}return bo(e,a,o.isFullyInitialized()||Ee(n),t.filter.filtersNodes())}}function Gl(t,e,n,s,i,r,o,a){const c=e.serverCache;let u;const h=o?t.filter:t.filter.getIndexedFilter();if(Ee(n))u=h.updateFullNode(c.getNode(),s,null);else if(h.filtersNodes()&&!c.isFiltered()){const _=c.getNode().updateChild(n,s);u=h.updateFullNode(c.getNode(),_,null)}else{const _=Ae(n);if(!c.isCompleteForPath(n)&&Ws(n)>1)return e;const E=He(n),b=c.getNode().getImmediateChild(_).updateChild(E,s);_===".priority"?u=h.updatePriority(c.getNode(),b):u=h.updateChild(c.getNode(),_,b,E,dI,null)}const f=iI(e,u,c.isFullyInitialized()||Ee(n),h.filtersNodes()),m=new Ef(i,f,r);return fI(t,f,n,i,m,a)}function jh(t,e,n,s,i,r,o){const a=e.eventCache;let c,u;const h=new Ef(i,e,r);if(Ee(n))u=t.filter.updateFullNode(e.eventCache.getNode(),s,o),c=bo(e,u,!0,t.filter.filtersNodes());else{const f=Ae(n);if(f===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),s),c=bo(e,u,a.isFullyInitialized(),a.isFiltered());else{const m=He(n),_=a.getNode().getImmediateChild(f);let E;if(Ee(m))E=s;else{const S=h.getCompleteChild(f);S!=null?jT(m)===".priority"&&S.getChild(HT(m)).isEmpty()?E=S:E=S.updateChild(m,s):E=xe.EMPTY_NODE}if(_.equals(E))c=e;else{const S=t.filter.updateChild(a.getNode(),f,E,m,h,o);c=bo(e,S,a.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function dg(t,e){return t.eventCache.isCompleteForChild(e)}function Nx(t,e,n,s,i,r,o){let a=e;return s.foreach((c,u)=>{const h=dt(n,c);dg(e,Ae(h))&&(a=jh(t,a,h,u,i,r,o))}),s.foreach((c,u)=>{const h=dt(n,c);dg(e,Ae(h))||(a=jh(t,a,h,u,i,r,o))}),a}function fg(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Wh(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,u;Ee(n)?u=s:u=new We(null).setTree(n,s);const h=e.serverCache.getNode();return u.children.inorderTraversal((f,m)=>{if(h.hasChild(f)){const _=e.serverCache.getNode().getImmediateChild(f),E=fg(t,_,m);c=Gl(t,c,new Ke(f),E,i,r,o,a)}}),u.children.inorderTraversal((f,m)=>{const _=!e.serverCache.isCompleteForChild(f)&&m.value===null;if(!h.hasChild(f)&&!_){const E=e.serverCache.getNode().getImmediateChild(f),S=fg(t,E,m);c=Gl(t,c,new Ke(f),S,i,r,o,a)}}),c}function Ox(t,e,n,s,i,r,o){if(Kl(i,n)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(Ee(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return Gl(t,e,n,c.getNode().getChild(n),i,r,a,o);if(Ee(n)){let u=new We(null);return c.getNode().forEachChild(or,(h,f)=>{u=u.set(new Ke(h),f)}),Wh(t,e,n,u,i,r,a,o)}else return e}else{let u=new We(null);return s.foreach((h,f)=>{const m=dt(n,h);c.isCompleteForPath(m)&&(u=u.set(h,c.getNode().getChild(m)))}),Wh(t,e,n,u,i,r,a,o)}}function Dx(t,e,n,s,i){const r=e.serverCache,o=iI(e,r.getNode(),r.isFullyInitialized()||Ee(n),r.isFiltered());return fI(t,o,n,s,dI,i)}function Mx(t,e,n,s,i,r){let o;if(Kl(s,n)!=null)return e;{const a=new Ef(s,e,i),c=e.eventCache.getNode();let u;if(Ee(n)||Ae(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=qh(s,Ri(e));else{const f=e.serverCache.getNode();G(f instanceof xe,"serverChildren would be complete if leaf node"),h=cI(s,f)}h=h,u=t.filter.updateFullNode(c,h,r)}else{const h=Ae(n);let f=vf(s,h,e.serverCache);f==null&&e.serverCache.isCompleteForChild(h)&&(f=c.getImmediateChild(h)),f!=null?u=t.filter.updateChild(c,h,f,He(n),a,r):e.eventCache.getNode().hasChild(h)?u=t.filter.updateChild(c,h,xe.EMPTY_NODE,He(n),a,r):u=c,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=qh(s,Ri(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,r)))}return o=e.serverCache.isFullyInitialized()||Kl(s,Ve())!=null,bo(e,u,o,t.filter.filtersNodes())}}function xx(t,e){const n=Ri(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!Ee(e)&&!n.getImmediateChild(Ae(e)).isEmpty())?n.getChild(e):null}function pg(t,e,n,s){e.type===On.MERGE&&e.source.queryId!==null&&(G(Ri(t.viewCache_),"We should always have a full cache before handling merges"),G(Uh(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=Px(t.processor_,i,e,n,s);return bx(t.processor_,r.viewCache),G(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Lx(t,r.changes,r.viewCache.eventCache.getNode())}function Lx(t,e,n,s){const i=t.eventRegistrations_;return cx(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mg;function Vx(t){G(!mg,"__referenceConstructor has already been defined"),mg=t}function Tf(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return G(r!=null,"SyncTree gave us an op for an invalid query."),pg(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(pg(o,e,n,s));return r}}function If(t,e){let n=null;for(const s of t.views.values())n=n||xx(s,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _g;function Fx(t){G(!_g,"__referenceConstructor has already been defined"),_g=t}class gg{constructor(e){this.listenProvider_=e,this.syncPointTree_=new We(null),this.pendingWriteTree_=Ax(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Ux(t,e,n,s,i){return fx(t.pendingWriteTree_,e,n,s,i),i?Uc(t,new Ai(eI(),e,n)):[]}function Ki(t,e,n=!1){const s=px(t.pendingWriteTree_,e);if(mx(t.pendingWriteTree_,e)){let r=new We(null);return s.snap!=null?r=r.set(Ve(),!0):dn(s.children,o=>{r=r.set(new Ke(o),!0)}),Uc(t,new zl(s.path,r,n))}else return[]}function Fc(t,e,n){return Uc(t,new Ai(tI(),e,n))}function Bx(t,e,n){const s=We.fromObject(n);return Uc(t,new Jo(tI(),e,s))}function $x(t,e,n,s){const i=gI(t,s);if(i!=null){const r=yI(i),o=r.path,a=r.queryId,c=cn(o,e),u=new Ai(nI(a),c,n);return vI(t,o,u)}else return[]}function qx(t,e,n,s){const i=gI(t,s);if(i){const r=yI(i),o=r.path,a=r.queryId,c=cn(o,e),u=We.fromObject(n),h=new Jo(nI(a),c,u);return vI(t,o,h)}else return[]}function pI(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const c=cn(o,e),u=If(a,c);if(u)return u});return lI(i,e,r,n,!0)}function Uc(t,e){return mI(e,t.syncPointTree_,null,oI(t.pendingWriteTree_,Ve()))}function mI(t,e,n,s){if(Ee(t.path))return _I(t,e,n,s);{const i=e.get(Ve());n==null&&i!=null&&(n=If(i,Ve()));let r=[];const o=Ae(t.path),a=t.operationForChild(o),c=e.children.get(o);if(c&&a){const u=n?n.getImmediateChild(o):null,h=uI(s,o);r=r.concat(mI(a,c,u,h))}return i&&(r=r.concat(Tf(i,t,s,n))),r}}function _I(t,e,n,s){const i=e.get(Ve());n==null&&i!=null&&(n=If(i,Ve()));let r=[];return e.children.inorderTraversal((o,a)=>{const c=n?n.getImmediateChild(o):null,u=uI(s,o),h=t.operationForChild(o);h&&(r=r.concat(_I(h,a,c,u)))}),i&&(r=r.concat(Tf(i,t,s,n))),r}function gI(t,e){return t.tagToQueryMap.get(e)}function yI(t){const e=t.indexOf("$");return G(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Ke(t.substr(0,e))}}function vI(t,e,n){const s=t.syncPointTree_.get(e);G(s,"Missing sync point for query tag that we're tracking");const i=oI(t.pendingWriteTree_,e);return Tf(s,n,i,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new wf(n)}node(){return this.node_}}class Af{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=dt(this.path_,e);return new Af(this.syncTree_,n)}node(){return pI(this.syncTree_,this.path_)}}const jx=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},yg=function(t,e,n){if(!t||typeof t!="object")return t;if(G(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Wx(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Hx(t[".sv"],e);G(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Wx=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:G(!1,"Unexpected server value: "+t)}},Hx=function(t,e,n){t.hasOwnProperty("increment")||G(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&G(!1,"Unexpected increment value: "+s);const i=e.node();if(G(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},zx=function(t,e,n,s){return Rf(e,new Af(n,t),s)},Kx=function(t,e,n){return Rf(t,new wf(e),n)};function Rf(t,e,n){const s=t.getPriority().val(),i=yg(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=yg(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new lt(a,Nt(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new lt(i))),o.forEachChild(Dt,(a,c)=>{const u=Rf(c,e.getImmediateChild(a),n);u!==c&&(r=r.updateImmediateChild(a,u))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Sf(t,e){let n=e instanceof Ke?e:new Ke(e),s=t,i=Ae(n);for(;i!==null;){const r=hr(s.node.children,i)||{children:{},childCount:0};s=new Cf(i,s,r),n=He(n),i=Ae(n)}return s}function xr(t){return t.node.value}function EI(t,e){t.node.value=e,Hh(t)}function TI(t){return t.node.childCount>0}function Gx(t){return xr(t)===void 0&&!TI(t)}function Bc(t,e){dn(t.node.children,(n,s)=>{e(new Cf(n,t,s))})}function II(t,e,n,s){n&&!s&&e(t),Bc(t,i=>{II(i,e,!0,s)}),n&&s&&e(t)}function Qx(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Ta(t){return new Ke(t.parent===null?t.name:Ta(t.parent)+"/"+t.name)}function Hh(t){t.parent!==null&&Yx(t.parent,t.name,t)}function Yx(t,e,n){const s=Gx(n),i=_s(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Hh(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Hh(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xx=/[\[\].#$\/\u0000-\u001F\u007F]/,Jx=/[\[\].#$\u0000-\u001F\u007F]/,Mu=10*1024*1024,wI=function(t){return typeof t=="string"&&t.length!==0&&!Xx.test(t)},Zx=function(t){return typeof t=="string"&&t.length!==0&&!Jx.test(t)},eL=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Zx(t)},AI=function(t,e,n){const s=n instanceof Ke?new DM(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+oi(s));if(typeof e=="function")throw new Error(t+"contains a function "+oi(s)+" with contents = "+e.toString());if(wT(e))throw new Error(t+"contains "+e.toString()+" "+oi(s));if(typeof e=="string"&&e.length>Mu/3&&pc(e)>Mu)throw new Error(t+"contains a string greater than "+Mu+" utf8 bytes "+oi(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(dn(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!wI(o)))throw new Error(t+" contains an invalid key ("+o+") "+oi(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);MM(s,o),AI(t,a,s),xM(s)}),i&&r)throw new Error(t+' contains ".value" child '+oi(s)+" in addition to actual children.")}},tL=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!wI(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!eL(n))throw new Error(nC(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nL{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function sL(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!zT(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Ni(t,e,n){sL(t,n),iL(t,s=>_n(s,e)||_n(e,s))}function iL(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(rL(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function rL(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Co&&kt("event: "+n.toString()),va(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oL="repo_interrupt",aL=25;class lL{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new nL,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Hl(),this.transactionQueueTree_=new Cf,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function cL(t,e,n){if(t.stats_=ff(t.repoInfo_),t.forceRestClient_||sM())t.server_=new Wl(t.repoInfo_,(s,i,r,o)=>{vg(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Eg(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{gt(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new cs(t.repoInfo_,e,(s,i,r,o)=>{vg(t,s,i,r,o)},s=>{Eg(t,s)},s=>{hL(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=cM(t.repoInfo_,()=>new lx(t.stats_,t.server_)),t.infoData_=new sx,t.infoSyncTree_=new gg({startListening:(s,i,r,o)=>{let a=[];const c=t.infoData_.getNode(s._path);return c.isEmpty()||(a=Fc(t.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),bf(t,"connected",!1),t.serverSyncTree_=new gg({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,c)=>{const u=o(a,c);Ni(t.eventQueue_,s._path,u)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function uL(t){const n=t.infoData_.getNode(new Ke(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function RI(t){return jx({timestamp:uL(t)})}function vg(t,e,n,s,i){t.dataUpdateCount++;const r=new Ke(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const c=Il(n,u=>Nt(u));o=qx(t.serverSyncTree_,r,c,i)}else{const c=Nt(n);o=$x(t.serverSyncTree_,r,c,i)}else if(s){const c=Il(n,u=>Nt(u));o=Bx(t.serverSyncTree_,r,c)}else{const c=Nt(n);o=Fc(t.serverSyncTree_,r,c)}let a=r;o.length>0&&(a=kf(t,r)),Ni(t.eventQueue_,a,o)}function Eg(t,e){bf(t,"connected",e),e===!1&&fL(t)}function hL(t,e){dn(e,(n,s)=>{bf(t,n,s)})}function bf(t,e,n){const s=new Ke("/.info/"+e),i=Nt(n);t.infoData_.updateSnapshot(s,i);const r=Fc(t.infoSyncTree_,s,i);Ni(t.eventQueue_,s,r)}function dL(t){return t.nextWriteId_++}function fL(t){CI(t,"onDisconnectEvents");const e=RI(t),n=Hl();Fh(t.onDisconnect_,Ve(),(i,r)=>{const o=zx(i,r,t.serverSyncTree_,e);ZT(n,i,o)});let s=[];Fh(n,Ve(),(i,r)=>{s=s.concat(Fc(t.serverSyncTree_,i,r));const o=gL(t,i);kf(t,o)}),t.onDisconnect_=Hl(),Ni(t.eventQueue_,Ve(),s)}function pL(t){t.persistentConnection_&&t.persistentConnection_.interrupt(oL)}function CI(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),kt(n,...e)}function SI(t,e,n){return pI(t.serverSyncTree_,e,n)||xe.EMPTY_NODE}function Pf(t,e=t.transactionQueueTree_){if(e||$c(t,e),xr(e)){const n=PI(t,e);G(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&mL(t,Ta(e),n)}else TI(e)&&Bc(e,n=>{Pf(t,n)})}function mL(t,e,n){const s=n.map(u=>u.currentWriteId),i=SI(t,e,s);let r=i;const o=i.hash();for(let u=0;u<n.length;u++){const h=n[u];G(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const f=cn(e,h.path);r=r.updateChild(f,h.currentOutputSnapshotRaw)}const a=r.val(!0),c=e;t.server_.put(c.toString(),a,u=>{CI(t,"transaction put response",{path:c.toString(),status:u});let h=[];if(u==="ok"){const f=[];for(let m=0;m<n.length;m++)n[m].status=2,h=h.concat(Ki(t.serverSyncTree_,n[m].currentWriteId)),n[m].onComplete&&f.push(()=>n[m].onComplete(null,!0,n[m].currentOutputSnapshotResolved)),n[m].unwatcher();$c(t,Sf(t.transactionQueueTree_,e)),Pf(t,t.transactionQueueTree_),Ni(t.eventQueue_,e,h);for(let m=0;m<f.length;m++)va(f[m])}else{if(u==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{rn("transaction at "+c.toString()+" failed: "+u);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=u}kf(t,e)}},o)}function kf(t,e){const n=bI(t,e),s=Ta(n),i=PI(t,n);return _L(t,i,s),s}function _L(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],u=cn(n,c.path);let h=!1,f;if(G(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)h=!0,f=c.abortReason,i=i.concat(Ki(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=aL)h=!0,f="maxretry",i=i.concat(Ki(t.serverSyncTree_,c.currentWriteId,!0));else{const m=SI(t,c.path,o);c.currentInputSnapshot=m;const _=e[a].update(m.val());if(_!==void 0){AI("transaction failed: Data returned ",_,c.path);let E=Nt(_);typeof _=="object"&&_!=null&&_s(_,".priority")||(E=E.updatePriority(m.getPriority()));const b=c.currentWriteId,F=RI(t),D=Kx(E,m,F);c.currentOutputSnapshotRaw=E,c.currentOutputSnapshotResolved=D,c.currentWriteId=dL(t),o.splice(o.indexOf(b),1),i=i.concat(Ux(t.serverSyncTree_,c.path,D,c.currentWriteId,c.applyLocally)),i=i.concat(Ki(t.serverSyncTree_,b,!0))}else h=!0,f="nodata",i=i.concat(Ki(t.serverSyncTree_,c.currentWriteId,!0))}Ni(t.eventQueue_,n,i),i=[],h&&(e[a].status=2,function(m){setTimeout(m,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(f),!1,null))))}$c(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)va(s[a]);Pf(t,t.transactionQueueTree_)}function bI(t,e){let n,s=t.transactionQueueTree_;for(n=Ae(e);n!==null&&xr(s)===void 0;)s=Sf(s,n),e=He(e),n=Ae(e);return s}function PI(t,e){const n=[];return kI(t,e,n),n.sort((s,i)=>s.order-i.order),n}function kI(t,e,n){const s=xr(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Bc(e,i=>{kI(t,i,n)})}function $c(t,e){const n=xr(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,EI(e,n.length>0?n:void 0)}Bc(e,s=>{$c(t,s)})}function gL(t,e){const n=Ta(bI(t,e)),s=Sf(t.transactionQueueTree_,e);return Qx(s,i=>{xu(t,i)}),xu(t,s),II(s,i=>{xu(t,i)}),n}function xu(t,e){const n=xr(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(G(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(G(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Ki(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?EI(e,void 0):n.length=r+1,Ni(t.eventQueue_,Ta(e),i);for(let o=0;o<s.length;o++)va(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yL(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function vL(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):rn(`Invalid query segment '${n}' in query '${t}'`)}return e}const Tg=function(t,e){const n=EL(t),s=n.namespace;n.domain==="firebase.com"&&Ii(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Ii("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||QD();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new oM(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new Ke(n.pathString)}},EL=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",c=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let h=t.indexOf("/");h===-1&&(h=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(h,f)),h<f&&(i=yL(t.substring(h,f)));const m=vL(t.substring(Math.min(t.length,f)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(u+1),10)):u=e.length;const _=e.slice(0,u);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const E=e.indexOf(".");s=e.substring(0,E).toLowerCase(),n=e.substring(E+1),r=s}"ns"in m&&(r=m.ns)}return{host:e,port:c,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return Ee(this._path)?null:jT(this._path)}get ref(){return new Lr(this._repo,this._path)}get _queryIdentifier(){const e=og(this._queryParams),n=hf(e);return n==="{}"?"default":n}get _queryObject(){return og(this._queryParams)}isEqual(e){if(e=ot(e),!(e instanceof Nf))return!1;const n=this._repo===e._repo,s=zT(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+OM(this._path)}}class Lr extends Nf{constructor(e,n){super(e,n,new gf,!1)}get parent(){const e=HT(this._path);return e===null?null:new Lr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}Vx(Lr);Fx(Lr);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TL="FIREBASE_DATABASE_EMULATOR_HOST",zh={};let IL=!1;function wL(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||Ii("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),kt("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Tg(r,i),a=o.repoInfo,c;typeof process<"u"&&$_&&(c=$_[TL]),c?(r=`http://${c}?ns=${a.namespace}`,o=Tg(r,i),a=o.repoInfo):o.repoInfo.secure;const u=new rM(t.name,t.options,e);tL("Invalid Firebase Database URL",o),Ee(o.path)||Ii("Database URL must point to the root of a Firebase Database (not including a child path).");const h=RL(a,t,u,new iM(t.name,n));return new CL(h,t)}function AL(t,e){const n=zh[e];(!n||n[t.key]!==t)&&Ii(`Database ${e}(${t.repoInfo_}) has already been deleted.`),pL(t),delete n[t.key]}function RL(t,e,n,s){let i=zh[e.name];i||(i={},zh[e.name]=i);let r=i[t.toURLString()];return r&&Ii("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new lL(t,IL,n,s),i[t.toURLString()]=r,r}class CL{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(cL(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Lr(this._repo,Ve())),this._rootInternal}_delete(){return this._rootInternal!==null&&(AL(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ii("Cannot call "+e+" on a deleted database.")}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SL(t){jD(Ks),qn(new In("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return wL(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),sn(q_,j_,t),sn(q_,j_,"esm2017")}cs.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};cs.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};SL();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NI="firebasestorage.googleapis.com",bL="storageBucket",PL=2*60*1e3,kL=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn extends zn{constructor(e,n,s=0){super(Lu(e),`Firebase Storage: ${n} (${Lu(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Kn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Lu(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Hn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Hn||(Hn={}));function Lu(t){return"storage/"+t}function NL(){const t="An unknown error occurred, please check the error payload for server response.";return new Kn(Hn.UNKNOWN,t)}function OL(){return new Kn(Hn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function DL(){return new Kn(Hn.CANCELED,"User canceled the upload/download.")}function ML(t){return new Kn(Hn.INVALID_URL,"Invalid URL '"+t+"'.")}function xL(t){return new Kn(Hn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Ig(t){return new Kn(Hn.INVALID_ARGUMENT,t)}function OI(){return new Kn(Hn.APP_DELETED,"The Firebase app was deleted.")}function LL(t){return new Kn(Hn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=gn.makeFromUrl(e,n)}catch{return new gn(e,"")}if(s.path==="")return s;throw xL(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(U){U.path.charAt(U.path.length-1)==="/"&&(U.path_=U.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),c={bucket:1,path:3};function u(U){U.path_=decodeURIComponent(U.path)}const h="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",_=new RegExp(`^https?://${f}/${h}/b/${i}/o${m}`,"i"),E={bucket:1,path:3},S=n===NI?"(?:storage.googleapis.com|storage.cloud.google.com)":n,b="([^?#]*)",F=new RegExp(`^https?://${S}/${i}/${b}`,"i"),L=[{regex:a,indices:c,postModify:r},{regex:_,indices:E,postModify:u},{regex:F,indices:{bucket:1,path:2},postModify:u}];for(let U=0;U<L.length;U++){const oe=L[U],le=oe.regex.exec(e);if(le){const A=le[oe.indices.bucket];let v=le[oe.indices.path];v||(v=""),s=new gn(A,v),oe.postModify(s);break}}if(s==null)throw ML(e);return s}}class VL{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FL(t,e,n){let s=1,i=null,r=null,o=!1,a=0;function c(){return a===2}let u=!1;function h(...b){u||(u=!0,e.apply(null,b))}function f(b){i=setTimeout(()=>{i=null,t(_,c())},b)}function m(){r&&clearTimeout(r)}function _(b,...F){if(u){m();return}if(b){m(),h.call(null,b,...F);return}if(c()||o){m(),h.call(null,b,...F);return}s<64&&(s*=2);let L;a===1?(a=2,L=0):L=(s+Math.random())*1e3,f(L)}let E=!1;function S(b){E||(E=!0,m(),!u&&(i!==null?(b||(a=2),clearTimeout(i),f(0)):b||(a=1)))}return f(0),r=setTimeout(()=>{o=!0,S(!0)},n),S}function UL(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BL(t){return t!==void 0}function wg(t,e,n,s){if(s<e)throw Ig(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw Ig(`Invalid value for '${t}'. Expected ${n} or less.`)}function $L(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}var Ql;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Ql||(Ql={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qL(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||i||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jL{constructor(e,n,s,i,r,o,a,c,u,h,f,m=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=h,this.connectionFactory_=f,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((_,E)=>{this.resolve_=_,this.reject_=E,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new Ga(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const c=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===Ql.NO_ERROR,c=r.getStatus();if(!a||qL(c,this.additionalRetryCodes_)&&this.retry){const h=r.getErrorCode()===Ql.ABORT;s(!1,new Ga(!1,null,h));return}const u=this.successCodes_.indexOf(c)!==-1;s(!0,new Ga(u,r))})},n=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());BL(c)?r(c):r()}catch(c){o(c)}else if(a!==null){const c=NL();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(i.canceled){const c=this.appDelete_?OI():DL();o(c)}else{const c=OL();o(c)}};this.canceled_?n(!1,new Ga(!1,null,!0)):this.backoffId_=FL(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&UL(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ga{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function WL(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function HL(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function zL(t,e){e&&(t["X-Firebase-GMPID"]=e)}function KL(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function GL(t,e,n,s,i,r,o=!0){const a=$L(t.urlParams),c=t.url+a,u=Object.assign({},t.headers);return zL(u,e),WL(u,n),HL(u,r),KL(u,s),new jL(c,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QL(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function YL(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(e,n){this._service=e,n instanceof gn?this._location=n:this._location=gn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Yl(e,n)}get root(){const e=new gn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return YL(this._location.path)}get storage(){return this._service}get parent(){const e=QL(this._location.path);if(e===null)return null;const n=new gn(this._location.bucket,e);return new Yl(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw LL(e)}}function Ag(t,e){const n=e==null?void 0:e[bL];return n==null?null:gn.makeFromBucketSpec(n,t)}class XL{constructor(e,n,s,i,r){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=NI,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=PL,this._maxUploadRetryTime=kL,this._requests=new Set,i!=null?this._bucket=gn.makeFromBucketSpec(i,this._host):this._bucket=Ag(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=gn.makeFromBucketSpec(this._url,e):this._bucket=Ag(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){wg("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){wg("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Yl(this,e)}_makeRequest(e,n,s,i,r=!0){if(this._deleted)return new VL(OI());{const o=GL(e,this._appId,s,i,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const Rg="@firebase/storage",Cg="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JL="storage";function ZL(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new XL(n,s,i,e,Ks)}function eV(){qn(new In(JL,ZL,"PUBLIC").setMultipleInstances(!0)),sn(Rg,Cg,""),sn(Rg,Cg,"esm2017")}eV();function tV(t,{firebaseApp:e,modules:n=[]}){t.provide(qD,e);for(const s of n)s(e,t)}const DI=nv({apiKey:"AIzaSyD_z2VC9notNHFDJUt-rpmMxs-KK_aakGI",authDomain:"clever-to-do-list-53234.firebaseapp.com",projectId:"clever-to-do-list-53234",storageBucket:"clever-to-do-list-53234.firebasestorage.app",messagingSenderId:"471793733374",appId:"1:471793733374:web:61bf1df6d5a7d59a579faf"}),ar=dO(DI);ky(CA).use(tV,{firebaseApp:DI}).use(ls).mount("#app");