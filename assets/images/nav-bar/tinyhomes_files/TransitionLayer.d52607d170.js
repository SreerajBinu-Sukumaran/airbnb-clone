__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.slideInFromEdgeFragment=void 0;var t=r(d[0]),n=r(d[1]),o=r(d[2]);let s,c,v=t=>t;const l=(0,t.cssFragment)(s||(s=v`
  background: #000;
  position: absolute;
  inset: 0;
  animation: fadeIn 500ms ${0};
  animation-fill-mode: both;
  animation-direction: var(--scrim-animation-direction, normal);
  animation-play-state: var(--view-transition_play-state, paused);

  @keyframes fadeIn {
    from {
      opacity: var(--scrim-animation_opacity, var(--scrim-animation_start-opacity, 0));
    }
    to {
      opacity: var(--scrim-animation_opacity, var(--scrim-animation_end-opacity, 0.6));
    }
  }
`),t.theme.motion.standardCurve.animationTimingFunction),p=(0,t.cssFragment)(c||(c=v`
  ::view-transition-old(root) {
    display: none;
  }

  ::view-transition-new(root) {
    animation: none;
    opacity: 1;
  }

  ::view-transition-group(screen) {
    clip-path: inset(0);
    height: 100%;
  }

  ::view-transition-image-pair(screen) {
    display: grid;
    height: 100%;
  }

  ::view-transition-new(screen),
  ::view-transition-old(screen) {
    grid-area: 1 / 1;
    position: relative;
  }

  &.enter ::view-transition-new(screen) {
    background: var(--view-transition_panel-background, #fff);
    ${0} {
      ${0};
      ${0}
    }

    ${0} {
      ${0};
    }
  }

  &.enter ::view-transition-old(screen) {
    ${0} {
      ${0};

      ::after {
        content: '';
        ${0}
        ${0}
      }
    }

    ${0} {
      ${0};
    }
  }

  &.exit ::view-transition-new(screen) {
    ${0} {
      ${0};
      --scrim-animation_start-opacity: 0.6;
      --scrim-animation_end-opacity: 0;

      ::after {
        content: '';
        ${0}
        ${0}
      }
    }

    ${0} {
      ${0};
    }

    [view-transition-element] {
      --view-transition_overflow: visible;
    }
  }

  &.exit ::view-transition-old(screen) {
    ${0} {
      ${0};
    }

    ${0} {
      ${0};
    }

    background: var(--view-transition_panel-background, #fff);
    z-index: 1;
  }
`),o.a11y.motion,n.RelativeMoveEffect.apply({duration:500,startX:'100%'}),n.RelativeMoveEffect.align(),o.a11y.noMotion,n.FadeEffect.apply(),o.a11y.motion,n.RelativeMoveEffect.apply({duration:500,endX:'-30%'}),l,n.RelativeMoveEffect.align(),o.a11y.noMotion,n.FadeEffect.apply(),o.a11y.motion,n.RelativeMoveEffect.apply({duration:500,startX:'-30%'}),l,n.RelativeMoveEffect.align(),o.a11y.noMotion,n.FadeEffect.apply(),o.a11y.motion,n.RelativeMoveEffect.apply({duration:500,endX:'100%'}),o.a11y.noMotion,n.FadeEffect.apply());e.slideInFromEdgeFragment=p}),"05abef",["5f1f1f","0fbe66","f69a84"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useNextSignalValue=function(){const n=(0,t.useRef)(new Set),u=(0,t.useRef)(!1),c=(0,t.useCallback)((t,c,l)=>u.current||null!=l&&l.aborted?Promise.reject(new Error('Component has unmounted')):new Promise(u=>{const o=t.subscribe(t=>{if(!c||c(t)){try{null==o||o()}catch(t){}u(t),n.current.delete(o)}});null==l||l.addEventListener('abort',()=>{try{null==o||o()}catch(t){}u(null)}),n.current.add(o)}),[]);return(0,t.useEffect)(()=>{const t=n.current;return()=>{u.current=!0,t.forEach(t=>t()),t.clear()}},[]),{waitForNextValue:c}};var t=r(d[0])}),"0632f4",["d7ed8e"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"FadeEffect",{enumerable:!0,get:function(){return t.FadeEffect}}),Object.defineProperty(e,"MoveEffect",{enumerable:!0,get:function(){return f.MoveEffect}}),Object.defineProperty(e,"RelativeMoveEffect",{enumerable:!0,get:function(){return n.RelativeMoveEffect}}),Object.defineProperty(e,"ScaleEffect",{enumerable:!0,get:function(){return c.ScaleEffect}});var t=r(d[0]),f=r(d[1]),n=r(d[2]),c=r(d[3])}),"0fbe66",["8c28ef","41da49","c7b783","c74c9a"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.attachTransitionElement=function({element:t,setRoot:n,transitionElement:o}){t&&!o.peek().ready.peek()&&(!(function(t){if('none'===window.getComputedStyle(t).display)return!0;const n=l('view-transition-image-pair',t.parentElement);if(!n)return!1;if('none'===window.getComputedStyle(n).display)return!0;const o=l('view-transition-group',n.parentElement);if(!o)return!1;if('none'===window.getComputedStyle(o).display)return!0;const s=l('view-transition',o.parentElement);return!!s&&'none'===window.getComputedStyle(s).display})(t)?n(t):o.value.ready.value=!0)},e.readyToApply=function(t,o){let s=!1;switch(t.transition.stage.value.step){case n.ViewTransitionStage.CaptureOld:case n.ViewTransitionStage.FreezeScreen:case n.ViewTransitionStage.DOMUpdate:case n.ViewTransitionStage.CaptureNew:s='frozen';break;case n.ViewTransitionStage.CreateAnimations:case n.ViewTransitionStage.StartAnimations:case n.ViewTransitionStage.Complete:s='apply'}if(!s)return null;if('frozen'===s)return{["frozen-view-transition-"+o]:t.name};return{["view-transition-"+o]:t.name}},e.viewTransitionElementFragment=void 0;var t=r(d[0]),n=r(d[1]);let o;const s=(0,t.cssFragment)(o||(o=(t=>t)`
  height: auto;
  left: 0;
  mix-blend-mode: var(--view-transition_forced-blend-mode, var(--view-transition_mix-blend-mode));
  position: absolute;
  top: 0;
  width: 100%;

  /* This assumes we will have a static wrapper, if we ever allow live content
  in the old side we need to update this. */
  > [data-static-element-wrapper] > [view-transition-element] [view-transition-element] {
    --view-transition_visibility: hidden;
  }

  > [data-static-element-wrapper] > [view-transition-element] {
    left: 0;
    top: 0;
    margin: 0;
    translate: 0;
    opacity: 1;
  }
`));function l(t,n){return n?n.hasAttribute(t)?n:l(t,n.parentElement):null}e.viewTransitionElementFragment=s}),"163e3f",["5f1f1f","33e26c"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ViewTransitionOld=function({group:s}){const c=(0,t.useCx)(),p=(0,l.useSignal)(s.imagePair.old),{ref:f}=(0,n.useElementSize)({mode:'callback-only',onSizeChanged:({width:t,height:n})=>{(t>0||n>0)&&(p.value.ready.value=!0)},skip:p.value.ready.value}),y=(0,o.readyToApply)(s,'old');return(0,u.jsx)("div",{ref:t=>(0,o.attachTransitionElement)({element:t,setRoot:f,transitionElement:p}),className:c(v,y&&'view-transition-old'),...y,children:p.value.element})},e.oldClassFragment=void 0;babelHelpers.interopRequireDefault(r(d[0])),r(d[1]);var t=r(d[2]),n=r(d[3]),l=r(d[4]),s=r(d[5]),o=r(d[6]),u=r(d[7]);let c;const p=(0,t.cssFragment)(c||(c=(t=>t)`
  ::view-transition-old {
    ${0}

    > [data-static-element-wrapper] > [view-transition-element] {
      min-height: unset;
      --debug-var: set;
    }
  }
`),s.FadeEffect.apply({startOpacity:1,endOpacity:0}));e.oldClassFragment=p;const v="c7kuf3g"}),"19810b",["d7ed8e","f03cc4","5f1f1f","f47dec","707431","8c28ef","163e3f","721ed1"]);
__d((function(g,r,i,a,m,e,d){"use strict";function n(n){return`--view-transition-${n}-effect`}function t(t,o,u){const s=n(t);return void 0!==u?`var(${s}_${o}, var(--view-transition_${o}, ${u}))`:`var(${s}_${o}, var(--view-transition_${o}))`}Object.defineProperty(e,"__esModule",{value:!0}),e.makeAnimationDefaults=function(n,u){const{delay:s,duration:c,timingFunction:v}={...o,...u},f=`var(--reduced-motion_duration, ${t(n,'duration',c+"ms")})`,_=t(n,'timing-function',v),$=t(n,'delay',s);return`${f} ${_} ${$} 1 normal var(--view-transition_fill-mode, both) var(--view-transition_play-state,paused) ${n}`},e.setCommonOptions=function(t,o,s){const c=n(t),{duration:v,delay:f,timingFunction:_}=o;u(c+"_duration",v?v+"ms":void 0,s),u(c+"_transition_timing-function",_,s),u(c+"_delay",f?f+"ms":void 0,s)},e.setIfDefined=u;const o={delay:'0ms',duration:200,timingFunction:r(d[0]).theme.motion.standardCurve.animationTimingFunction};function u(n,t,o){void 0!==t&&o.set(n,t)}}),"1bac24",["5f1f1f"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.StaticTransitionElement=function({className:s,content:l,inert:c}){const o=(0,t.useCx)();return(0,n.jsx)("div",{"data-static-element-wrapper":!0,className:o(c&&"wy4jsd6",s),dangerouslySetInnerHTML:{__html:l||''},style:c?void 0:{width:'100%'}})};babelHelpers.interopRequireDefault(r(d[0])),r(d[1]);var t=r(d[2]),n=r(d[3])}),"256df7",["d7ed8e","f03cc4","5f1f1f","721ed1"]);
__d((function(g,r,i,a,m,e,d){"use strict";let t;Object.defineProperty(e,"__esModule",{value:!0}),e.ViewTransitionStage=void 0,e.getInternalViewTransitionState=function(){return o.last||o.initial},e.setInternalViewTransitionState=function(t){if(o.viewTransitionState===t)return;o.viewTransitionState=t,null!==o.initial&&(!(function(t){const{className:l,direction:s,pattern:u,scope:c}=t,{viewTransitionState:p}=o;if(null===p)return void(o.initial=t);o.last=t;const{instance:w}=p,f=w.className.value||new Set;w.className.value||(w.className.value=f);if(void 0!==l){(Array.isArray(l)?l:[l]).forEach(t=>{t&&f.add(t)})}if(u){if(!n.has(u))throw new Error('Motion pattern not supported yet.');f.add(u)}s&&f.add(s);void 0!==c&&(w.scope.value=c)})(o.initial),o.initial=null)},e.ViewTransitionStage=t,(function(t){t.Idle="Idle",t.CaptureOld="CaptureOld",t.FreezeScreen="FreezeScreen",t.DOMUpdate="DOMUpdate",t.CaptureNew="CaptureNew",t.CreateAnimations="CreateAnimations",t.StartAnimations="StartAnimations",t.Complete="Complete"})(t||(e.ViewTransitionStage=t={}));const n=new Set(['contextual-grow','slide-up-from-bottom','slide-in-and-fade','slide-in-from-edge']),o={initial:null,last:null,viewTransitionState:null}}),"33e26c",[]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.makeVariablesForDimensions=function(t,o){return{[`--${t}_bottom`]:o.bottom+"px",[`--${t}_height`]:o.height+"px",[`--${t}_left`]:o.left+"px",[`--${t}_right`]:o.right+"px",[`--${t}_top`]:o.top+"px",[`--${t}_width`]:o.width+"px"}}}),"36491a",[]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.contextualGrowFragment=void 0;var t=r(d[0]),n=r(d[1]),o=r(d[2]),l=r(d[3]);let s;const c=(0,t.cssFragment)(s||(s=(t=>t)`
  ::view-transition {
    --view-transition_duration: 500ms;
  }

  ::view-transition-old(card-content) {
    ${0} {
      ${0}
      ${0}      
      animation: ${0}, ${0};
    }

    ${0} {
      ${0};
    }

    transform-origin: top center;
  }

  &.enter ::view-transition-old(card-content) {
    z-index: 1;
  }

  &.exit ::view-transition-new(card-content) {
    z-index: 1;
  }

  ::view-transition-new(card-content) {
    ${0} {
      ${0}
      ${0}      
      animation: ${0}, ${0};
    }

    ${0} {
      ${0};
    }

    transform-origin: top center;
  }

  ::view-transition-new(card-container) {
    display: none;
  }

  ::view-transition-old(card-container) {
    animation: none;

    ${0} {
      ${0} {
        ${0}
      }

      transform-origin: top center;
    }
  }

  &.exit ::view-transition-old(card-container) {
    --active_border-color: transparent;
  }

  &.enter [scrim-element] {
    ${0} {
      ${0}
    }

    ${0} {
      display: none;
    }

    z-index: 1;
  }

  &.exit [scrim-element] {
    ${0} {
      ${0}
    }

    ${0} {
      display: none;
    }

    z-index: 0;
  }

  &.enter ::view-transition-new(root) {
    display: none;
  }

  /* Scale out the old screen */
  &.enter ::view-transition-old(root) {
    ${0} {
      ${0}
      ${0}
      animation: ${0}, ${0};
    }

    ${0} {
      ${0};
    }

    transform-origin: bottom center;
  }

  &.exit ::view-transition-old(root) {
    display: none;
  }

  &.exit ::view-transition-new(root) {
    ${0} {
      ${0}
      ${0}
      animation: ${0}, ${0};
    }

    ${0} {
      ${0};
    }

    transform-origin: bottom center;

    ${0} {
      --view-transition_visibility: visible;
    }
  }

  /**
   * This shows all of the old elements during the transition that would
   * otherwise be hidden due to nested elements. It also ensures that if a list
   * pattern is implemented, that the singluar list item is hidden as it will be
   * promoted.
   */
  ::view-transition-group(root) {
    /* stylelint-disable-next-line selector-max-type */
    ${0},
    ::view-transition-old {
      /* stylelint-disable-next-line selector-max-type */
      ${0} {
        --view-transition_visibility: visible;

        /* stylelint-disable-next-line selector-max-type */
        [active-element='true'] {
          visibility: hidden;
        }
      }
    }
  }
`),l.a11y.motion,o.FadeEffect.apply({duration:75}),o.MoveEffect.apply(),o.FadeEffect.animation,o.MoveEffect.animation,l.a11y.noMotion,o.FadeEffect.apply(),l.a11y.motion,o.FadeEffect.apply({startOpacity:0,endOpacity:1}),o.MoveEffect.apply(),o.FadeEffect.animation,o.MoveEffect.animation,l.a11y.noMotion,o.FadeEffect.apply(),(0,n.currentElement)(),l.a11y.motion,o.MoveEffect.apply(),l.a11y.motion,o.FadeEffect.apply({startOpacity:0,endOpacity:.6}),l.a11y.noMotion,l.a11y.motion,o.FadeEffect.apply({startOpacity:.6,endOpacity:0}),l.a11y.noMotion,l.a11y.motion,o.ScaleEffect.apply({endScale:.94}),o.FadeEffect.apply({startOpacity:1,endOpacity:0}),o.FadeEffect.animation,o.ScaleEffect.animation,l.a11y.noMotion,o.FadeEffect.apply(),l.a11y.motion,o.ScaleEffect.apply({startScale:.94,endScale:1}),o.FadeEffect.apply({startOpacity:0,endOpacity:1}),o.FadeEffect.animation,o.ScaleEffect.animation,l.a11y.noMotion,o.FadeEffect.apply(),(0,n.descendantElements)(),(0,n.frozenViewTransition)('old'),(0,n.descendantElements)());e.contextualGrowFragment=c}),"3d4edc",["5f1f1f","bd8fc9","0fbe66","f69a84"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MoveEffect=void 0;var t=r(d[0]),n=r(d[1]);let o,v,f=t=>t;const s=(0,t.cssFragment)(o||(o=f`
  /* normal blending to allow new view to
    sit on top & hide old view */
  --view-transition_mix-blend-mode: normal;

  @keyframes move {
    from {
      height: var(--view-transition-group-old_height);
      width: var(--view-transition-group-old_width);
      transform: translate(
        var(--view-transition-move-effect_from-x, 0),
        var(--view-transition-move-effect_from-y, 0)
      );
    }

    to {
      height: var(--view-transition-group-new_height);
      width: var(--view-transition-group-new_width);
      transform: translate(var(--view-transition_to-x, 0), var(--view-transition_to-y, 0));
    }
  }
`)),w={name:"move",apply:o=>(0,t.cssFragment)(v||(v=f`
      ${0}
      ${0}
      animation: ${0};
    `),s,(t=>{if(!t)return'';let o='';const{startX:v,startY:f,endX:s,endY:w}=t,l=new Map;return(0,n.setIfDefined)('--view-transition-move-effect_from-x',v,l),(0,n.setIfDefined)('--view-transition-move-effect_from-y',f,l),(0,n.setIfDefined)('--view-transition-move-effect_to-x',s,l),(0,n.setIfDefined)('--view-transition-move-effect_to-y',w,l),(0,n.setCommonOptions)("move",t,l),l.forEach((t,n)=>{o+=`${n}: ${t};`}),o})(o),w.animation),animation:(0,n.makeAnimationDefaults)("move")};e.MoveEffect=w}),"41da49",["5f1f1f","1bac24"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ViewTransition=function(){const S=(0,t.useCx)(),_=s.ViewTransitionState.instance,T=(0,n.useSignal)(_.transitionGroups),V=(0,n.useSignal)(_.stage),h=(0,n.useSignal)(_.className),j=(0,n.useComputed)(()=>{const{step:t}=V.value;switch(t){case l.ViewTransitionStage.CaptureOld:return!0;default:return!1}}),y=(0,n.useComputed)(()=>{switch(V.value.step){case l.ViewTransitionStage.StartAnimations:case l.ViewTransitionStage.Complete:return!0;default:return!1}});function C(t){var n,s;const o=null===(n=T.peek().get('root'))||void 0===n?void 0:n.imagePair,u=null==o||null===(s=o[t].peek())||void 0===s?void 0:s.dimensions;return u&&!j.peek()?{[`--view-transition_${t}-root-clip`]:`inset(-${u.bottom}px ${u.left}px)`}:{}}const k={'--view-transition_visibility':j.value?'hidden':'visible','--view-transition_play-state':y.value?'running':'paused','--view-transition_overflow':y.value?'visible':'hidden',...C('old'),...C('new')};return(0,v.jsxs)("div",{className:S(c,p,w,f,b,x,...Array.from(h.value||[])),children:[(0,v.jsx)("div",{"view-transition":"true",className:S('view-transition'),style:k,children:Array.from(T.value.entries()).map(([t,n])=>(0,v.jsx)(u.ViewTransitionGroup,{group:n},t))}),(0,v.jsx)(o.ViewTransitionCoordinator,{})]})};babelHelpers.interopRequireDefault(r(d[0])),r(d[1]);var t=r(d[2]),n=r(d[3]),s=r(d[4]),o=r(d[5]),u=r(d[6]),l=r(d[7]),v=(r(d[8]),r(d[9]),r(d[10]),r(d[11]),r(d[12]),r(d[13]),r(d[14]));const c="r1cxi8bv",p="vzpe6cu",w="v1cz7dl7",f="v16wj6q4",b="vda4df1",x="v1mud78p"}),"4af078",["d7ed8e","f03cc4","5f1f1f","707431","6bb054","a62199","d19815","33e26c","19810b","9ff686","3d4edc","cbae19","05abef","e92312","721ed1"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ViewTransitionDebugger=void 0;var t=r(d[0]),n=r(d[1]),s=r(d[2]),u=r(d[3]);const o=(0,t.memo)((function(){return(0,t.useEffect)(()=>{if(window.__vt=u.ViewTransitionState,!u.ViewTransitionState.debugging.evaluated.peek()){u.ViewTransitionState.debugging.evaluated.value=!0;try{const t=new URLSearchParams(window.location.search);null!==t.get('vt-inspect')&&(u.ViewTransitionState.debugging.enabled.value=!0),null!==t.get('vt-step')&&(u.ViewTransitionState.debugging.enabled.value=!0,u.ViewTransitionState.debugging.pauseAfterStage.value=t.get('vt-step'))}catch(t){}}return()=>{delete window.__vt}},[]),(0,n.useSignalEffect)(()=>{const{debugging:t}=u.ViewTransitionState;if(!t.enabled.value)return;const{stage:n}=u.ViewTransitionState.instance,o=(0,s.getInternalViewTransitionState)(),{step:l}=n.value;console.log(`Step(${l})`,o)}),null}));e.ViewTransitionDebugger=o}),"4b1378",["d7ed8e","707431","33e26c","6bb054"]);
__d((function(g,r,i,a,m,e,d){"use strict";function n(){const t=r(d[0]);return n=function(){return t},t}Object.defineProperty(e,"__esModule",{value:!0}),e.ViewTransitionState=void 0,e.makeActiveStage=l;var t=r(d[1]);function l(t,l){return l&&(l.status.value='complete',l.timing.end=performance.now()),{previousStage:l,status:(0,n().signal)('active'),step:t,timing:{begin:performance.now(),end:null}}}const s={anyActive:(0,n().signal)(!1),debugging:{enabled:(0,n().signal)(!1),evaluated:(0,n().signal)(!1),pauseAfterStage:(0,n().signal)(null)},instance:(function(){const s={active:(0,n().signal)(!1),className:(0,n().signal)(null),domUpdateCallbacks:new Set,layers:(0,n().signal)(0),scope:(0,n().signal)(null),start:(0,n().signal)(null),stage:(0,n().signal)(l(t.ViewTransitionStage.Idle,null)),transitionGroups:(0,n().signal)(new Map),updateCallbackDone:(0,n().signal)(null),wait:async()=>{for(;s.domUpdateCallbacks.size>0;){const n=[...s.domUpdateCallbacks];s.domUpdateCallbacks.clear(),await Promise.all(n.map(n=>n()))}}};return s})(),polyfill:{disableNative:(0,n().signal)(!0),filled:(0,n().signal)(!1),startViewTransition:(0,n().signal)(null),supportsNative:(0,n().signal)(!1)}};e.ViewTransitionState=s}),"6bb054",["d7f154","33e26c"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useComputed=function(t){return c(f(()=>(0,n().computed)(t)))},e.useSignal=c,e.useSignalEffect=function(u,c=[]){(0,t.useEffect)(()=>(0,n().effect)(u),c)};var t=r(d[0]);function n(){const t=r(d[1]);return n=function(){return t},t}const u=t.useLayoutEffect;function c(c){const o=f(()=>c instanceof n().Signal?c:(0,n().signal)(c));let s=o.peek();const l=(0,t.useState)(()=>s)[1];return u(()=>(0,n().effect)(()=>s!==(s=o.value)&&l(()=>s)),[]),o}function f(n){const u=(0,t.useRef)();return u.current||(u.current=n()),u.current}}),"707431",["d7ed8e","d7f154"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.RootStyleSync=void 0;var t=r(d[0]),n=r(d[1]),o=r(d[2]);const s=(0,t.memo)((function({viewTransition:t}){const s=(0,n.useComputed)(()=>{const{step:n}=t.stage.value;switch(n){case o.ViewTransitionStage.FreezeScreen:case o.ViewTransitionStage.DOMUpdate:case o.ViewTransitionStage.CaptureNew:case o.ViewTransitionStage.StartAnimations:case o.ViewTransitionStage.CreateAnimations:case o.ViewTransitionStage.Complete:return!0;default:return!1}}),c=t.scope.peek()||document.body,{style:u}=c;return u.setProperty('--view-transition_visibility',s.value?'hidden':'visible'),u.setProperty('--view-transition_pointer-events',s.value?'none':'auto'),u.setProperty('--view-transition_overflow',s.value?'visible':'hidden'),null}));e.RootStyleSync=s}),"71bd6e",["d7ed8e","707431","33e26c"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useResizeObserverPolyfill=void 0,e.useWaitForResizeObserverPolyfill=function(){return{waitForResizeObserver:(0,n.useEvent)(async()=>!('ResizeObserver'in window)&&(window.ResizeObserver=await t(),!0))}};var s=r(d[0]),n=r(d[1]);async function t(){return(await r(d[3])(d[2],"resize-observer-polyfill").then(babelHelpers.interopRequireWildcard)).default}let o=!1;e.useResizeObserverPolyfill=()=>{const[n,u]=(0,s.useState)(!!o&&'ResizeObserver'in window),l=(0,s.useRef)(!1);return n||(o=!0,'ResizeObserver'in window?u(!0):(async function(){l.current||(l.current=!0,window.ResizeObserver=await t(),u(!0))})()),n}}),"7d3e3c",["d7ed8e","8341eb","8610eb","b8ad06"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ViewTransitionImagePair=function({group:v}){const c=(0,n.useCx)(),p=(0,s.useSignal)(v.imagePair.old),w=(0,s.useSignal)(v.imagePair.new);return(0,l.jsxs)("div",{"view-transition-image-pair":v.name,className:c(o,'view-transition-image-pair'),children:[null!==p.value&&(0,l.jsx)(u.ViewTransitionOld,{group:v}),null!==w.value&&(0,l.jsx)(t.ViewTransitionNew,{group:v})]})};babelHelpers.interopRequireDefault(r(d[0])),r(d[1]);var n=r(d[2]),s=r(d[3]),t=r(d[4]),u=r(d[5]),l=r(d[6]);const o="vi4mvdh"}),"81b7db",["d7ed8e","f03cc4","5f1f1f","707431","9ff686","19810b","721ed1"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.FadeEffect=void 0;var t=r(d[0]),n=r(d[1]);let f,o,c=t=>t;const s=(0,t.cssFragment)(f||(f=c`
  --view-transition_mix-blend-mode: plus-lighter;
  opacity: var(--view-transition-fade-effect_opacity-from, 0);

  @keyframes ${0} {
    from {
      opacity: var(--view-transition-fade-effect_opacity-from, 0);
      visibility: visible;
    }
    to {
      opacity: var(--view-transition-fade-effect_opacity-to, 1);
    }
  }
`),"fade"),p={name:"fade",apply:f=>(0,t.cssFragment)(o||(o=c`
      ${0}
      ${0}
      animation: ${0};
    `),s,(t=>{if(!t)return'';let f='';const{startOpacity:o,endOpacity:c}=t,s=new Map;return(0,n.setIfDefined)('--view-transition-fade-effect_opacity-from',o,s),(0,n.setIfDefined)('--view-transition-fade-effect_opacity-to',c,s),(0,n.setCommonOptions)("fade",t,s),s.forEach((t,n)=>{f+=`${n}: ${t};`}),f})(f),p.animation),animation:(0,n.makeAnimationDefaults)("fade",{timingFunction:'linear'})};e.FadeEffect=p}),"8c28ef",["5f1f1f","1bac24"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ViewTransitionNew=function({group:o}){var v;const c=(0,n.useCx)(),p=(0,l.useSignal)(o.imagePair.new),{ref:f}=(0,t.useElementSize)({mode:'callback-only',onSizeChanged:({width:n,height:t})=>{p.value&&(n>0||t>0)&&(p.value.ready.value=!0)},skip:!p.value||p.value.ready.value}),y=(0,s.readyToApply)(o,'new');return(0,u.jsx)("div",{ref:n=>(0,s.attachTransitionElement)({element:n,setRoot:f,transitionElement:p}),className:c(w,y&&'view-transition-new'),...y,children:null===(v=p.value)||void 0===v?void 0:v.element})},e.newClassFragment=void 0;babelHelpers.interopRequireDefault(r(d[0])),r(d[1]);var n=r(d[2]),t=r(d[3]),l=r(d[4]),s=r(d[5]),o=r(d[6]),u=r(d[7]);let v;const c=(0,n.cssFragment)(v||(v=(n=>n)`
  ::view-transition-new {
    ${0}
  }
`),o.FadeEffect.apply());e.newClassFragment=c;const w="c1w93ydq"}),"9ff686",["d7ed8e","f03cc4","5f1f1f","f47dec","707431","163e3f","8c28ef","721ed1"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ViewTransitionCoordinator=void 0;var t=babelHelpers.interopRequireWildcard(r(d[0]));function n(){const t=r(d[1]);return n=function(){return t},t}var o=r(d[2]),s=r(d[3]),l=r(d[4]),u=r(d[5]),c=r(d[6]),p=r(d[7]),w=r(d[8]),v=r(d[9]),S=r(d[10]);function T(t){const n=t||document.body;let o=[];'true'===(null==t?void 0:t.getAttribute('view-transition-element'))&&o.push(t),o=[...o,...Array.from(n.querySelectorAll('[view-transition-element="true"]'))];const s=Array.from(document.querySelectorAll("[data-transition-layer] [view-transition-element=\"true\"]"));return o.filter(t=>!s.includes(t))}function k(t,o){let s=t.getBoundingClientRect();if(o){const n=(function t(n){return null==n?null:n.scrollHeight>n.clientHeight?n:t(n.parentElement)})(t);if('HTML'!==(null==n?void 0:n.tagName)){const{scrollTop:t}=n||{scrollTop:0};s=DOMRect.fromRect({...s.toJSON(),y:s.y+t})}}const l=window.getComputedStyle(t);let u=l.getPropertyValue('view-transition-name');const p=c.ViewTransitionState.polyfill.supportsNative.peek();if(!(u&&'none'!==u||(p||(u=l.getPropertyValue('--view-transition-name')),u&&'none'!==u)))return{elementName:null,transitionElement:null};const v=t.outerHTML;return{name:u,transitionElement:{element:(0,S.jsx)(w.StaticTransitionElement,{content:v,inert:!0}),dimensions:s,ready:(0,n().signal)(!1)}}}function f(){const t="[view-transition]",n=[document.querySelector(t),...document.querySelectorAll(t+" [view-transition-group]"),...document.querySelectorAll(t+" [view-transition-image-pair]"),...document.querySelectorAll(t+" [view-transition-old]"),...document.querySelectorAll(t+" [view-transition-new]")].flatMap(t=>t.getAnimations());return{animations:Promise.all(n.map(t=>t.finished))}}function y(){let t;return[new Promise(n=>{t=n}),function(){t()}]}const V=t.default.memo(()=>{const w=(0,t.useRef)(null),{instance:V}=c.ViewTransitionState,{waitForNextValue:b}=(0,l.useNextSignalValue)(),{scheduler:A}=(0,u.usePostTaskScheduler)({strategy:'recycle'}),h=(0,s.useComputed)(()=>{const t=Array.from(V.transitionGroups.value.values());return V.stage.value.step===p.ViewTransitionStage.CaptureOld&&(t.length>0&&t.every(t=>null===t.imagePair.old.value||t.imagePair.old.value.ready.value))}),C=(0,s.useComputed)(()=>{const t=Array.from(V.transitionGroups.value.values());return V.stage.value.step===p.ViewTransitionStage.CaptureNew&&(t.length>0&&t.every(t=>null===t.imagePair.new.value||t.imagePair.new.value.ready.value))});function P(){(0,n().batch)(()=>{V.stage.value=(0,c.makeActiveStage)(p.ViewTransitionStage.FreezeScreen,V.stage.peek())})}async function N(){var t;(0,n().batch)(()=>{V.stage.value=(0,c.makeActiveStage)(p.ViewTransitionStage.DOMUpdate,V.stage.peek()),V.updateCallbackDone.value=A.postTask(V.wait,{priority:'user-blocking'})}),await V.updateCallbackDone.peek(),null===(t=w.current)||void 0===t||t.setUpdateCallbackDone()}function E(){(0,n().batch)(()=>{V.stage.value=(0,c.makeActiveStage)(p.ViewTransitionStage.CreateAnimations,V.stage.peek())})}function M(){var t;null===(t=w.current)||void 0===t||t.setReady(),(0,n().batch)(()=>{V.stage.value=(0,c.makeActiveStage)(p.ViewTransitionStage.StartAnimations,V.stage.peek())})}function q(){var t;(0,n().batch)(()=>{V.stage.value=(0,c.makeActiveStage)(p.ViewTransitionStage.Complete,V.stage.peek())}),null===(t=w.current)||void 0===t||t.setFinished()}async function O(){await new Promise(t=>requestAnimationFrame(()=>setTimeout(t,0))),(0,n().batch)(()=>{V.transitionGroups.value=new Map,c.ViewTransitionState.anyActive.value=!1,V.stage.value=(0,c.makeActiveStage)(p.ViewTransitionStage.Idle,V.stage.peek()),V.active.value=!1,V.className.value=null}),w.current=null}function R(t){if(c.ViewTransitionState.debugging.enabled.peek()&&c.ViewTransitionState.debugging.pauseAfterStage.peek()===t){console.log("Pausing after stage: "+t);const n=new AbortController,o=b(c.ViewTransitionState.debugging.pauseAfterStage,n=>t!==n,n.signal),s=b(c.ViewTransitionState.debugging.enabled,t=>!t,n.signal);return o.then(()=>{console.log("Resuming after stage: "+t),n.signal.aborted||n.abort()}),s.then(()=>{n.signal.aborted||n.abort()}),Promise.race([o,s])}}const x=(0,o.useEvent)(async t=>{t&&V.domUpdateCallbacks.add(t),await R(p.ViewTransitionStage.Idle),await A.postTask(()=>{(0,n().batch)(()=>{c.ViewTransitionState.anyActive.value=!0,V.layers.value=0,V.active.value=!0,V.transitionGroups.value=new Map,V.stage.value=(0,c.makeActiveStage)(p.ViewTransitionStage.CaptureOld,V.stage.peek())})});try{var o;if(await A.postTask(()=>(function(){const t=T(V.scope.peek()),o=new Map;t.forEach(t=>{const{name:s,transitionElement:l}=k(t,!0);if(!s)return;const u={name:s,order:V.layers.value++,imagePair:{old:(0,n().signal)(l),new:(0,n().signal)(null)},transition:V};var c,p;if(o.has(s))throw console.error(`[view-transition-name="${s}"] already exists`,{existing:null===(c=o.get(s))||void 0===c||null===(p=c.imagePair.old.peek())||void 0===p?void 0:p.element,new:l.element}),new Error(`[view-transition-name="${s}"] already exists`);o.set(s,u)});const s=b(h,t=>!!t);return V.transitionGroups.value=o,s})()),await R(p.ViewTransitionStage.CaptureOld),await A.postTask(P),await R(p.ViewTransitionStage.FreezeScreen),await A.postTask(N),await R(p.ViewTransitionStage.DOMUpdate),null===(o=w.current)||void 0===o||!o.isTransitionSkipped.peek()){await A.postTask(()=>(function(){(0,n().batch)(()=>{V.stage.value=(0,c.makeActiveStage)(p.ViewTransitionStage.CaptureNew,V.stage.peek())});const t=T(V.scope.peek()),o=new Map(V.transitionGroups.peek()),s=[];t.forEach(t=>{const{name:l,transitionElement:u}=k(t);if(!l)return;if(s.includes(l))throw new Error(`[view-transition-name="${l}"] already exists`);s.push(l);const c=o.get(l)||{name:l,order:V.layers.value++,imagePair:{old:(0,n().signal)(null),new:(0,n().signal)(u)},transition:V};c.imagePair.new.value=u,o.set(l,c)});const l=b(C,t=>!!t);return V.transitionGroups.value=o,l})()),await R(p.ViewTransitionStage.CaptureNew),await A.postTask(E),await R(p.ViewTransitionStage.CreateAnimations);const{animations:t}=await A.postTask(f);await A.postTask(M),await R(p.ViewTransitionStage.StartAnimations),await t}}catch(t){V.stage.peek().step===p.ViewTransitionStage.CaptureOld&&await A.postTask(N),console.log(t)}finally{await A.postTask(q),await R(p.ViewTransitionStage.Complete),await A.postTask(O)}}),D=(0,o.useEvent)(t=>{const{polyfill:o}=c.ViewTransitionState;return o.supportsNative.peek()&&!o.disableNative.peek()?(t&&c.ViewTransitionState.instance.domUpdateCallbacks.add(t),o.startViewTransition.peek()(()=>V.wait())):(w.current=(function(){const[t,o]=y(),[s,l]=y(),[u,c]=y(),p=(0,n().signal)(!1);return{finished:t,isTransitionSkipped:p,ready:s,setFinished:o,setReady:l,setUpdateCallbackDone:c,skipTransition:function(){p.value=!0},updateCallbackDone:u}})(),x(t),w.current)}),G=c.ViewTransitionState.instance;return G.start.peek()!==D&&(G.start.value=D,(function(t){const{polyfill:n}=c.ViewTransitionState;if(!n.filled.peek()){const t='startViewTransition'in document;n.disableNative.peek()&&t&&(n.startViewTransition.value=document.startViewTransition,n.supportsNative.value=t),n.filled.value=!0}!n.disableNative.peek()&&n.supportsNative.peek()||(document.startViewTransition=t)})(D)),(0,S.jsx)(v.RootStyleSync,{viewTransition:V})});e.ViewTransitionCoordinator=V}),"a62199",["d7ed8e","d7f154","8341eb","707431","0632f4","c9055a","6bb054","33e26c","256df7","71bd6e","721ed1"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.currentElement=function(){return'[data-static-element-wrapper] > [view-transition-element]'},e.descendantElements=function(){return'[data-static-element-wrapper] > [view-transition-element] [view-transition-element]'},e.frozenViewTransition=function(t){return`[frozen-view-transition-${t}]`}}),"bd8fc9",[]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useOnResize=function({skip:c,element:s,onlyWhen:o,onResize:l}){const{waitForResizeObserver:v}=(0,u.useWaitForResizeObserverPolyfill)(),f=(0,n.useRef)(null),h=(0,n.useRef)(null),R=(0,n.useRef)(null),b=(0,n.useRef)(null),z=(0,t.useEvent)(n=>{var t;let u,c;if(null!==(t=n[0].borderBoxSize)&&void 0!==t&&t.length){const{blockSize:t,inlineSize:s}=n[0].borderBoxSize[0];c=t,u=s}else c=n[0].contentRect.height,u=n[0].contentRect.width;c!==f.current&&(R.current=f.current,f.current=c),u!==h.current&&(b.current=h.current,h.current=u),o&&!o({entries:n,height:c,previousHeight:R.current,previousWidth:b.current,width:u})||l({entries:n,previousHeight:R.current,previousWidth:b.current,width:u,height:c})}),p=(0,n.useRef)(null),w=(0,n.useRef)(s),O=(0,n.useRef)(s?[{element:s}]:[]),k=(0,n.useCallback)((n,t)=>{var u;p.current?null===(u=p.current)||void 0===u||u.observe(n,t):O.current.push({element:n,options:t})},[]),S=(0,n.useCallback)(n=>{var t;null===(t=p.current)||void 0===t||t.unobserve(n)},[]);w.current!==s&&(w.current&&S(w.current),s&&(k(s),w.current=s));const W=(0,n.useRef)(!1);return(0,n.useEffect)(()=>{if(!c){if(!W.current){if(!('ResizeObserver'in window))return void v().then(()=>{W.current=!0,n()});W.current=!0}return n(),()=>{var n;return null===(n=p.current)||void 0===n?void 0:n.disconnect()}}function n(){p.current=new ResizeObserver(z),O.current.forEach(({element:n,options:t})=>{k(n,t)}),O.current=[]}},[c,W,z,k,v]),{observe:k,unobserve:S}};var n=r(d[0]),t=r(d[1]),u=r(d[2])}),"c37329",["d7ed8e","8341eb","7d3e3c"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ScaleEffect=void 0;var t=r(d[0]),n=r(d[1]);let s,c,f=t=>t;const o=(0,t.cssFragment)(s||(s=f`
  @keyframes ${0} {
    from {
      visibility: visible;
      scale: var(--view-transition-scale-effect_from, 1);
    }

    to {
      scale: var(--view-transition-scale-effect_to, 0);
    }
  }
`),"scale"),l={name:"scale",apply:s=>(0,t.cssFragment)(c||(c=f`
      ${0}
      ${0}
      animation: ${0};
    `),o,(t=>{if(!t)return'';let s='';const{startScale:c,endScale:f}=t,o=new Map;return(0,n.setIfDefined)('--view-transition-scale-effect_from',c,o),(0,n.setIfDefined)('--view-transition-scale-effect_to',f,o),(0,n.setCommonOptions)("scale",t,o),o.forEach((t,n)=>{s+=`${n}: ${t};`}),s})(s),l.animation),animation:(0,n.makeAnimationDefaults)("scale")};e.ScaleEffect=l}),"c74c9a",["5f1f1f","1bac24"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.RelativeMoveEffect=void 0;var t=r(d[0]),n=r(d[1]);let o,v,f=t=>t;const s='relative-move',l=(0,t.cssFragment)(o||(o=f`
  /* normal blending to allow new view to
    sit on top & hide old view */
  --view-transition_mix-blend-mode: normal;
  --view-transition-fade-effect_opacity-from: 1;

  @keyframes ${0} {
    from {
      visibility: visible;
      transform: translate(
        var(--view-transition-relative-move-effect_from-x, 0),
        var(--view-transition-relative-move-effect_from-y, 0)
      );
    }

    to {
      transform: translate(
        var(--view-transition-relative-move-effect_to-x, 0),
        var(--view-transition-relative-move-effect_to-y, 0)
      );
    }
  }
`),s),c={name:s,align:()=>"\n    margin-top: calc(\n      var(--view-transition-group-new_top, 0) - var(--view-transition-group-old_top, 0)\n    );\n  ",apply:o=>(0,t.cssFragment)(v||(v=f`
      ${0}
      ${0}
      animation: ${0};
    `),l,(t=>{if(!t)return'';let o='';const{startX:v,startY:f,endX:l,endY:c}=t,w=new Map;return(0,n.setIfDefined)('--view-transition-relative-move-effect_from-x',v,w),(0,n.setIfDefined)('--view-transition-relative-move-effect_from-y',f,w),(0,n.setIfDefined)('--view-transition-relative-move-effect_to-x',l,w),(0,n.setIfDefined)('--view-transition-relative-move-effect_to-y',c,w),(0,n.setCommonOptions)(s,t,w),w.forEach((t,n)=>{o+=`${n}: ${t};`}),o})(o),c.animation),animation:(0,n.makeAnimationDefaults)(s)};e.RelativeMoveEffect=c}),"c7b783",["5f1f1f","1bac24"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.slideInAndFadeFragment=void 0;var t=r(d[0]),n=r(d[1]),o=r(d[2]);let f;const c=(0,t.cssFragment)(f||(f=(t=>t)`
  ::view-transition-group(root) {
    display: none;
  }

  ::view-transition-image-pair(screen) {
    overflow: hidden;
    display: grid;
    height: 100%;
  }

  ::view-transition-old(screen),
  ::view-transition-new(screen) {
    grid-area: 1 / 1;
    position: relative;
  }

  &.enter ::view-transition-new(screen) {
    ${0} {
      ${0};
      ${0}
      ${0};
      animation: ${0}, ${0};
    }

    ${0} {
      ${0};
    }

    background: var(--view-transition_panel-background, #fff);
    --view-transition_mix-blend-mode: normal;
  }

  &.enter ::view-transition-old(screen) {
    ${0} {
      ${0};
      ${0};
      animation: ${0}, ${0};
    }

    ${0} {
      ${0};
    }
  }

  &.exit ::view-transition-new(screen) {
    ${0} {
      ${0};
      ${0};
      animation: ${0}, ${0};
    }

    ${0} {
      ${0};
    }

    --view-transition_mix-blend-mode: normal;
  }

  &.exit ::view-transition-old(screen) {
    ${0} {
      ${0};
      ${0};
      animation: ${0}, ${0};
    }

    ${0} {
      ${0};
    }

    background: var(--view-transition_panel-background, #fff);
  }
`),o.a11y.motion,n.RelativeMoveEffect.apply({endX:0,startX:'var(--slide-in-and-fade_offset, 200px)',duration:500}),n.RelativeMoveEffect.align(),n.FadeEffect.apply({startOpacity:0,endOpacity:1,delay:50,duration:350}),n.FadeEffect.animation,n.RelativeMoveEffect.animation,o.a11y.noMotion,n.FadeEffect.apply({startOpacity:0,endOpacity:1}),o.a11y.motion,n.RelativeMoveEffect.apply({startX:0,endX:'calc(-1 * var(--slide-in-and-fade_offset, 200px))',duration:500}),n.FadeEffect.apply({startOpacity:1,endOpacity:0,duration:75}),n.FadeEffect.animation,n.RelativeMoveEffect.animation,o.a11y.noMotion,n.FadeEffect.apply({startOpacity:1,endOpacity:0}),o.a11y.motion,n.RelativeMoveEffect.apply({endX:0,startX:'calc(-1 * var(--slide-in-and-fade_offset, 200px))',duration:500}),n.FadeEffect.apply({startOpacity:0,endOpacity:1,delay:50,duration:350}),n.FadeEffect.animation,n.RelativeMoveEffect.animation,o.a11y.noMotion,n.FadeEffect.apply({startOpacity:0,endOpacity:1}),o.a11y.motion,n.RelativeMoveEffect.apply({startX:0,endX:'var(--slide-in-and-fade_offset, 200px)',duration:500}),n.FadeEffect.apply({startOpacity:1,endOpacity:0,duration:75}),n.FadeEffect.animation,n.RelativeMoveEffect.animation,o.a11y.noMotion,n.FadeEffect.apply({startOpacity:1,endOpacity:0}));e.slideInAndFadeFragment=c}),"cbae19",["5f1f1f","0fbe66","f69a84"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ViewTransitionGroup=function({group:w}){const c=(0,n.useCx)();let f={};const P=(0,t.useSignal)(w.transition.stage);null!==w.imagePair.old.value&&(f={...f,'--view-transition-group_default-z-index':""+w.order,...(0,s.makeVariablesForDimensions)('view-transition-group-old',w.imagePair.old.value.dimensions)});null!==w.imagePair.new.value&&(f={...f,'--view-transition-group_default-z-index':""+w.order,...(0,s.makeVariablesForDimensions)('view-transition-group-new',w.imagePair.new.value.dimensions)});if(null!==w.imagePair.new.value&&null!==w.imagePair.old.value){const n=w.imagePair.old.value.dimensions,t=w.imagePair.new.value.dimensions;f={...f,'--view-transition_to-x':t.left-n.left+"px",'--view-transition_to-y':t.top-n.top+"px"}}const x=(0,t.useComputed)(()=>{switch(P.value.step){case l.ViewTransitionStage.CreateAnimations:case l.ViewTransitionStage.StartAnimations:case l.ViewTransitionStage.Complete:return!0;default:return!1}});return(0,u.jsx)("div",{className:c(v,x.value&&p,'view-transition-group'),"view-transition-group":w.name,style:f,children:(0,u.jsx)(o.ViewTransitionImagePair,{group:w})})};babelHelpers.interopRequireDefault(r(d[0])),r(d[1]);var n=r(d[2]),t=r(d[3]),o=r(d[4]),s=r(d[5]),l=r(d[6]),u=r(d[7]);const v="v34w2ga",p="vhp7t6l"}),"d19815",["d7ed8e","f03cc4","5f1f1f","707431","81b7db","36491a","33e26c","721ed1"]);
__d((function(g,r,i,a,m,e,d){"use strict";function t(){throw new Error("Cycle detected")}function o(){if(h>1)h--;else{for(var t,o=!1;void 0!==s;){var n=s;for(s=void 0,f++;void 0!==n;){var v=n.o;if(n.o=void 0,n.f&=-3,!(8&n.f)&&p(n))try{n.c()}catch(n){o||(t=n,o=!0)}n=v}}if(f=0,h--,o)throw t}}Object.defineProperty(e,"__esModule",{value:!0}),e.Signal=c,e.batch=function(t){if(h>0)return t();h++;try{return t()}finally{o()}},e.computed=function(t){return new S(t)},e.effect=O,e.signal=function(t){return new c(t)};var n=void 0,s=void 0,h=0,f=0,v=0;function u(t){if(void 0!==n){var o=t.n;if(void 0===o||o.t!==n)return o={i:0,S:t,p:n.s,n:void 0,t:n,e:void 0,x:void 0,r:o},void 0!==n.s&&(n.s.n=o),n.s=o,t.n=o,32&n.f&&t.S(o),o;if(-1===o.i)return o.i=0,void 0!==o.n&&(o.n.p=o.p,void 0!==o.p&&(o.p.n=o.n),o.p=n.s,o.n=void 0,n.s.n=o,n.s=o),o}}function c(t){this.v=t,this.i=0,this.n=void 0,this.t=void 0}function p(t){for(var o=t.s;void 0!==o;o=o.n)if(o.S.i!==o.i||!o.S.h()||o.S.i!==o.i)return!0;return!1}function y(t){for(var o=t.s;void 0!==o;o=o.n){var n=o.S.n;if(void 0!==n&&(o.r=n),o.S.n=o,o.i=-1,void 0===o.n){t.s=o;break}}}function l(t){for(var o=t.s,n=void 0;void 0!==o;){var s=o.p;-1===o.i?(o.S.U(o),void 0!==s&&(s.n=o.n),void 0!==o.n&&(o.n.p=s)):n=o,o.S.n=o.r,void 0!==o.r&&(o.r=void 0),o=s}t.s=n}function S(t){c.call(this,void 0),this.x=t,this.s=void 0,this.g=v-1,this.f=4}function w(t){var s=t.u;if(t.u=void 0,"function"==typeof s){h++;var f=n;n=void 0;try{s()}catch(o){throw t.f&=-2,t.f|=8,x(t),o}finally{n=f,o()}}}function x(t){for(var o=t.s;void 0!==o;o=o.n)o.S.U(o);t.x=void 0,t.s=void 0,w(t)}function b(t){if(n!==this)throw new Error("Out-of-order effect");l(this),n=t,this.f&=-2,8&this.f&&x(this),o()}function U(t){this.x=t,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}function O(t){var o=new U(t);try{o.c()}catch(t){throw o.d(),t}return o.d.bind(o)}c.prototype.h=function(){return!0},c.prototype.S=function(t){this.t!==t&&void 0===t.e&&(t.x=this.t,void 0!==this.t&&(this.t.e=t),this.t=t)},c.prototype.U=function(t){if(void 0!==this.t){var o=t.e,n=t.x;void 0!==o&&(o.x=n,t.e=void 0),void 0!==n&&(n.e=o,t.x=void 0),t===this.t&&(this.t=n)}},c.prototype.subscribe=function(t){var o=this;return O((function(){var n=o.value,s=32&this.f;this.f&=-33;try{t(n)}finally{this.f|=s}}))},c.prototype.valueOf=function(){return this.value},c.prototype.toString=function(){return this.value+""},c.prototype.peek=function(){return this.v},Object.defineProperty(c.prototype,"value",{get:function(){var t=u(this);return void 0!==t&&(t.i=this.i),this.v},set:function(n){if(n!==this.v){f>100&&t(),this.v=n,this.i++,v++,h++;try{for(var s=this.t;void 0!==s;s=s.x)s.t.N()}finally{o()}}}}),(S.prototype=new c).h=function(){if(this.f&=-3,1&this.f)return!1;if(32==(36&this.f))return!0;if(this.f&=-5,this.g===v)return!0;if(this.g=v,this.f|=1,this.i>0&&!p(this))return this.f&=-2,!0;var t=n;try{y(this),n=this;var o=this.x();(16&this.f||this.v!==o||0===this.i)&&(this.v=o,this.f&=-17,this.i++)}catch(t){this.v=t,this.f|=16,this.i++}return n=t,l(this),this.f&=-2,!0},S.prototype.S=function(t){if(void 0===this.t){this.f|=36;for(var o=this.s;void 0!==o;o=o.n)o.S.S(o)}c.prototype.S.call(this,t)},S.prototype.U=function(t){if(void 0!==this.t&&(c.prototype.U.call(this,t),void 0===this.t)){this.f&=-33;for(var o=this.s;void 0!==o;o=o.n)o.S.U(o)}},S.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var t=this.t;void 0!==t;t=t.x)t.t.N()}},S.prototype.peek=function(){if(this.h()||t(),16&this.f)throw this.v;return this.v},Object.defineProperty(S.prototype,"value",{get:function(){1&this.f&&t();var o=u(this);if(this.h(),void 0!==o&&(o.i=this.i),16&this.f)throw this.v;return this.v}}),U.prototype.c=function(){var t=this.S();try{8&this.f||void 0===this.x||(this.u=this.x())}finally{t()}},U.prototype.S=function(){1&this.f&&t(),this.f|=1,this.f&=-9,w(this),y(this),h++;var o=n;return n=this,b.bind(this,o)},U.prototype.N=function(){2&this.f||(this.f|=2,this.o=s,s=this)},U.prototype.d=function(){this.f|=8,1&this.f||x(this)}}),"d7f154",[]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.slideUpFromBottomFragment=void 0;var t=r(d[0]),o=r(d[1]),n=r(d[2]);let s;const l=(0,t.cssFragment)(s||(s=(t=>t)`
  ::view-transition-group(screen) {
    overflow: hidden;
  }

  ::view-transition-old(root) {
    display: none;
  }

  ::view-transition-new(root) {
    animation: none;
    opacity: 1;
  }

  &.enter ::view-transition-old(screen) {
    ${0} {
      ${0};
    }

    ${0} {
      ${0};
    }
  }

  &.enter ::view-transition-new(screen) {
    ${0} {
      ${0};
    }

    ${0} {
      ${0};
    }
  }

  &.exit ::view-transition-old(screen) {
    ${0} {
      ${0};
    }

    ${0} {
      ${0};
    }

    z-index: 1;
  }

  &.exit ::view-transition-new(screen) {
    ${0} {
      ${0};
    }

    ${0} {
      ${0};
    }
  }
`),n.a11y.motion,o.RelativeMoveEffect.apply({endX:0,startX:0}),n.a11y.noMotion,o.FadeEffect.apply(),n.a11y.motion,o.RelativeMoveEffect.apply({startY:'100%'}),n.a11y.noMotion,o.FadeEffect.apply(),n.a11y.motion,o.RelativeMoveEffect.apply({endY:'100%'}),n.a11y.noMotion,o.FadeEffect.apply(),n.a11y.motion,o.RelativeMoveEffect.apply({endX:0,startX:0}),n.a11y.noMotion,o.FadeEffect.apply());e.slideUpFromBottomFragment=l}),"e92312",["5f1f1f","0fbe66","f69a84"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.TransitionLayer=void 0;var n=babelHelpers.interopRequireWildcard(r(d[0])),t=(r(d[1]),r(d[2])),s=r(d[3]),o=r(d[4]),l=r(d[5]),u=r(d[6]),c=r(d[7]),v=r(d[8]),T=r(d[9]),S=r(d[10]),y=r(d[11]),f=r(d[12]);const w="t1nrbpkt",b="n11li817",p="nd992co",V=(0,n.memo)((function(){const V=(0,t.useCx)(),P=(0,s.useSignal)(c.ViewTransitionState.anyActive),_=(0,s.useSignal)(c.ViewTransitionState.debugging),{instance:h}=c.ViewTransitionState,[j,x]=(0,n.useState)(null);(0,S.setInternalViewTransitionState)(c.ViewTransitionState),null===j&&Promise.resolve().then(()=>{x((0,o.isWebSafari)())});const k=(0,u.useEvent)(async()=>new Promise(n=>{let t=()=>{};t=P.subscribe(s=>{var o;s||(null===(o=t)||void 0===o||o(),requestAnimationFrame(()=>{n()}))})}));null===y.motionPreference.system.peek()&&(0,y.initialize)(),(0,s.useSignalEffect)(()=>(l.TransitionStatus.anyActive=P.peek(),l.TransitionStatus.activeTransition=k(),()=>{l.TransitionStatus.anyActive=!1,l.TransitionStatus.activeTransition=void 0}),[P.peek()]);const A=(0,s.useComputed)(()=>{if(!(_.value.enabled.value&&P.value))return!1;switch(h.stage.value.step){case S.ViewTransitionStage.Idle:case S.ViewTransitionStage.Complete:return!1;default:return!0}}),C={'--transition-layer_pointer-events':A.value?'auto':'none','--view-transition_forced-blend-mode':j?'normal':void 0},q=y.motionPreference.user.value,E=y.motionPreference.system.value;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("div",{className:V(w,E&&'no-motion'===q&&b,E&&'no-animation'===q&&p),"data-transition-layer":!0,"data-testid":"transition-layer","aria-hidden":!0,style:C,inert:A.value?void 0:'true',children:(0,f.jsx)(v.ViewTransition,{})}),(0,f.jsx)(T.ViewTransitionDebugger,{})]})}));e.TransitionLayer=V}),"f17cc8",["d7ed8e","f03cc4","5f1f1f","707431","c03a13","2e2fe8","8341eb","6bb054","4af078","4b1378","33e26c","f69a84","721ed1"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useElementSize=function(u){const{monitor:l,skip:s,mode:c,onSizeChanged:o,threshold:h=5}=u||{},b=(0,n.useRef)(s),f=(0,n.useRef)(null),v=(0,n.useRef)(null),p=(0,n.useCallback)(n=>{v.current=n},[]),[k,R]=(0,n.useState)({height:null,width:null,entries:[],previousHeight:null,previousWidth:null,target:null}),{observe:y,unobserve:z}=(0,t.useOnResize)({skip:s,onlyWhen:({height:n,previousHeight:t,previousWidth:u,width:s})=>{const c=null===t||Math.abs(n-t)>h,o=null===u||Math.abs(s-u)>h;return'height'===l?c:'width'===l?o:o||c},onResize:n=>{const t={...n,target:f.current};'callback-only'!==c&&R(t),null==o||o(t)}}),_=(0,n.useCallback)((n,t)=>{f.current!==n&&(f.current&&z(f.current),f.current=n,n&&y(n,t))},[y,z]);b.current!==s&&(b.current=s,s?(v.current=f.current,_(null)):(_(v.current),v.current=null));if('callback-only'===c)return{ref:_};return{...k,ref:s?p:_}};var n=r(d[0]),t=r(d[1])}),"f47dec",["d7ed8e","c37329"]);
__d((function(g,r,i,a,m,e,d){"use strict";function n(){const t=r(d[0]);return n=function(){return t},t}Object.defineProperty(e,"__esModule",{value:!0}),e.a11y=void 0,e.initialize=function(){var n;const o=navigator.userAgent.includes('OS X'),s=navigator.userAgent.includes('iPhone')||navigator.userAgent.includes('iPad');if(!('matchMedia'in window))return void(t.system.value=!1);const u=matchMedia('(prefers-reduced-motion: reduce)');function c(n){'fast'===t.update.peek()?(t.system.value=n,t.user.value=n?o||s?'no-motion':'no-animation':'motion'):t.user.value='no-animation'}t.system.value=u.matches,window.motionPreference=t;const l=matchMedia('(update: slow)').matches,v=matchMedia('(update: none)').matches;(l||v)&&(t.update.value=l?'slow':'none');c(t.system.value),null===(n=u.addEventListener)||void 0===n||n.call(u,'change',n=>{c(n.matches)})},e.motionPreference=void 0;const t={system:(0,n().signal)(null),user:(0,n().signal)('motion'),update:(0,n().signal)('fast')};e.motionPreference=t;e.a11y={motion:'@media (prefers-reduced-motion: no-preference)',noMotion:'@media (prefers-reduced-motion: reduce), (update: slow), (update: none)'}}),"f69a84",["d7f154"]);
//# sourceMappingURL=https://sourcemaps.d.musta.ch/airbnb/static/packages/web/common/frontend/magic-move/TransitionLayer.b9da338562.js.map