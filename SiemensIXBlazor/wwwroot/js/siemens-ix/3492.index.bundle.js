"use strict";(self.webpackChunknpmjs=self.webpackChunknpmjs||[]).push([[3492],{4673:(e,t,i)=>{i.d(t,{m:()=>a});const n={sm:"(max-width: 48em)",md:"(min-width: 48.0625em) and (max-width: 80em)",lg:"(min-width: 80.0625em)"},a=e=>{if("undefined"!=typeof window&&window.matchMedia){const t=n[e];return window.matchMedia(t).matches}return!1}},6826:(e,t,i)=>{i.d(t,{A:()=>h,a:()=>o,c:()=>s,u:()=>r});var n=i(1917);class a extends Event{constructor(e,t,i){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=t,this.subscribe=i}}function o(e,t,i,n){let o;return e.dispatchEvent(new a(t,((e,t)=>{i(e,t),o=t}),n)),{unsubscribe:()=>{o()}}}function r(e,t,i){const a=new n.T,o=new n.T,r=new Set;return e.addEventListener("context-request",(e=>{(null==e?void 0:e.context.name)===t.name&&(e.stopPropagation(),e.subscribe&&r.add(e),a.emit(e),i&&e.callback(i,(()=>{r.delete(e)})))})),o.on((e=>{r.forEach((t=>t.callback(e,(()=>{r.delete(t)}))))})),{emit:e=>{o.emit(e)}}}const s=e=>e.closest("ix-menu"),h={name:"application-layout-context",initialValue:{hideHeader:!1,host:null,sidebar:!1}}},3492:(e,t,i)=>{i.r(t),i.d(t,{ix_application:()=>h});var n=i(4801),a=i(6826),o=i(2238),r=i(2272),s=i(489);i(4673);const h=class{constructor(e){(0,n.r)(this,e),this.theme=void 0,this.themeSystemAppearance=!1,this.forceBreakpoint=void 0,this.breakpoints=["sm","md","lg"],this.breakpoint="lg",this.applicationSidebarSlotted=!1}forceLayoutChange(e){e?(o.a.disableBreakpointDetection(),o.a.setBreakpoint(e)):o.a.enableBreakpointDetection()}onBreakpointsChange(e){o.a.setBreakpoints(e)}get menu(){return this.hostElement.querySelector("ix-menu")}get applicationSidebarSlot(){return this.hostElement.shadowRoot.querySelector(".application-sidebar slot")}onContentClick(){var e;o.m.isPinned||null===(e=this.menu)||void 0===e||e.toggleMenu(!1)}componentWillLoad(){o.a.setBreakpoints(this.breakpoints),this.contextProvider=(0,a.u)(this.hostElement,a.A,{hideHeader:!1,host:"basic-navigation",sidebar:this.applicationSidebarSlotted}),this.modeDisposable=o.a.onChange.on((e=>{this.breakpoint=e})),this.breakpoint=o.a.breakpoint,this.forceBreakpoint&&this.forceLayoutChange(this.forceBreakpoint),this.changeTheme()}disconnectedCallback(){var e;null===(e=this.modeDisposable)||void 0===e||e.dispose()}changeTheme(){this.theme?s.t.hasVariantSuffix(this.theme)?s.t.setTheme(`theme-${this.theme}`):s.t.setTheme(`theme-${this.theme}-dark`,this.themeSystemAppearance):this.themeSystemAppearance&&s.t.setVariant()}onApplicationSidebarChange(){this.contextProvider.emit({hideHeader:!1,host:"basic-navigation",sidebar:this.applicationSidebarSlotted})}render(){return(0,n.h)(n.H,{"data-role":"",class:{[`breakpoint-${this.breakpoint}`]:!0}},(0,n.h)("slot",{name:"application-header"}),(0,n.h)("div",{class:"application"},(0,n.h)("slot",{name:"menu"}),(0,n.h)("aside",{class:{"application-sidebar":!0,slotted:this.applicationSidebarSlotted},onClick:()=>this.onContentClick()},(0,n.h)("slot",{name:"application-sidebar",onSlotchange:()=>this.applicationSidebarSlotted=(0,r.h)(this.applicationSidebarSlot)})),(0,n.h)("main",{class:"content",onClick:()=>this.onContentClick()},(0,n.h)("slot",null))))}get hostElement(){return(0,n.g)(this)}static get watchers(){return{breakpoints:["onBreakpointsChange"],theme:["changeTheme"],themeSystemAppearance:["changeTheme"],applicationSidebarSlotted:["onApplicationSidebarChange"]}}};h.style=":host{display:flex;position:relative;width:100%;height:100%;flex-direction:column}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host ix-application-header{z-index:calc(var(--theme-z-index-sticky) + 1)}:host .logo-wrapper{display:contents}:host .application{display:flex;position:relative;flex-direction:row;height:100%;width:100%;overflow:hidden}:host main{display:block;position:relative;height:100%;width:100%;overflow:hidden}:host(.breakpoint-md){--ix-application-menu-margin-left:3.25rem}:host(.breakpoint-md) aside.slotted{margin-left:var(--ix-application-menu-margin-left)}:host(.breakpoint-md) aside.slotted+main{margin-left:0}:host(.breakpoint-md) aside:not(.slotted)+main{margin-left:var(--ix-application-menu-margin-left)}:host(.breakpoint-lg){--ix-application-menu-margin-left:0}:host(.breakpoint-sm){--ix-application-menu-margin-left:0}"},2238:(e,t,i)=>{i.d(t,{a:()=>d,m:()=>p});var n,a,o,r,s=i(4673),h=i(1917),l=function(e,t,i,n){if("a"===i&&!n)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?n:"a"===i?n.call(e):n?n.value:t.get(e)},c=function(e,t,i,n,a){if("m"===n)throw new TypeError("Private method is not writable");if("a"===n&&!a)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!a:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===n?a.call(e,i):a?a.value=i:t.set(e,i),i};n=new WeakMap,a=new WeakMap,o=new WeakMap,r=new WeakMap;const d=new class{constructor(){n.set(this,["sm","md","lg"]),a.set(this,new h.T),o.set(this,"lg"),r.set(this,!0),"undefined"!=typeof window&&(window.addEventListener("resize",this.onResize.bind(this)),this.onResize())}get breakpoint(){return l(this,o,"f")}get onChange(){return l(this,a,"f")}get isDetectionEnabled(){return l(this,r,"f")}onResize(){if(!l(this,r,"f"))return;if(!l(this,n,"f"))return;const e=[];if(l(this,n,"f").forEach((t=>{const i=(0,s.m)(t);e.push([t,i])})),e.every((([e,t])=>!1===t))){let t=0;l(this,n,"f").includes("lg")||(t=e.length-1);const[i,r]=e[t];return l(this,a,"f").emit(i),void c(this,o,i,"f")}for(const[t,i]of e.reverse())if(i){l(this,a,"f").emit(t),c(this,o,t,"f");break}}disableBreakpointDetection(){c(this,r,!1,"f")}enableBreakpointDetection(){c(this,r,!0,"f")}setBreakpoint(e){c(this,o,e,"f"),l(this,a,"f").emit(e)}setBreakpoints(e){c(this,n,e,"f"),this.onResize()}};var m;m=new WeakMap;const p=new class{constructor(){this.menuElement=null,this.menuExpandChange=new h.T,m.set(this,!1)}register(e){this.menuElement?console.warn("Menu already defined"):(this.menuElement=e,this.menuElement.addEventListener("expandChange",(e=>{this.menuExpandChange.emit(e.detail)})))}setIsPinned(e){!function(e,t,i,n,a){if("m"===n)throw new TypeError("Private method is not writable");if("a"===n&&!a)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!a:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");"a"===n?a.call(e,i):a?a.value=i:t.set(e,i)}(this,m,e,"f")}async open(){return!!this.menuElement&&(this.menuElement.toggleMenu(!0),!0)}async close(){return!!this.menuElement&&(this.menuElement.toggleMenu(!1),!0)}async toggle(){return!!this.menuElement&&(this.menuElement.toggleMenu(),!0)}get nativeElement(){return this.menuElement}get expandChange(){return this.menuExpandChange}get isPinned(){return function(e,t,i,n){if("a"===i&&!n)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?n:"a"===i?n.call(e):n?n.value:t.get(e)}(this,m,"f")}}},2272:(e,t,i)=>{function n(e){return e.assignedElements({flatten:!0})}function a(e){return!!e&&0!==e.assignedElements({flatten:!0}).length}i.d(t,{g:()=>n,h:()=>a})}}]);