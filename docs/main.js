(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{0:function(t,e,n){t.exports=n("zUnb")},zUnb:function(t,e,n){"use strict";n.r(e);var a=n("jhN1"),r=n("tk/3"),i=n("tyNb"),s=n("mrSG");class o extends class{constructor(t){Object.assign(this,t)}}{constructor(t){super(),Object.assign(this,t)}}class c{}var l=n("fXoL"),p=n("w0is"),d=n("gnCc");class u{constructor(){this.behaviorSubject=new d.a(null)}changed(t){this.behaviorSubject.next(t)}requestData(){this.changed(this.behaviorSubject.value)}getData(){return this.behaviorSubject.asObservable()}}class b{constructor(t){Object.assign(this,t)}}var h=n("TDfL"),f=n("8OYX"),g=n("G8Zg"),m=n("ofXK");let v=(()=>{class t{}return t.ɵmod=l.Hb({type:t}),t.ɵinj=l.Gb({factory:function(e){return new(e||t)},imports:[[m.c]]}),t})(),y=(()=>{class t{}return t.ɵmod=l.Hb({type:t}),t.ɵinj=l.Gb({factory:function(e){return new(e||t)},imports:[[m.c,v]]}),t})(),x=(()=>{class t extends u{constructor(t){super(),this.http=t,this._locale="",this.requestData()}requestData(){this.http.get("/variables.json").toPromise().then(t=>this.changed(t))}get locale(){return this._locale}set locale(t){this._locale=t,this.requestData()}}return t.ɵfac=function(e){return new(e||t)(l.Ub(r.a))},t.ɵprov=l.Fb({token:t,factory:t.ɵfac,providedIn:y}),t})(),w=(()=>{class t extends u{constructor(t){super(),this.http=t}requestData(){this.http.get("/json").toPromise().then(t=>this.changed(t.Sensors))}}return t.ɵfac=function(e){return new(e||t)(l.Ub(r.a))},t.ɵprov=l.Fb({token:t,factory:t.ɵfac}),t})(),O=(()=>{class t extends u{constructor(t,e){super(),this.plantVariablesLoader=t,this.plantTaskValuesLoader=e,this.plantVariableSections=[],this.plantVariableStatesMap=new Map,this.plantVariablesLoaderSubsription=this.plantVariablesLoader.getData().subscribe(t=>{t&&(this.setPlantVariables(t),this.plantTaskValuesLoader.getData().subscribe(t=>{this.setPlantTaskValues(t)}),this.plantTaskValuesLoaderSubscription=Object(p.a)(0,1e4).subscribe(()=>{this.plantTaskValuesLoader.requestData()}))})}ngOnDestroy(){this.plantTaskValuesLoaderSubscription.unsubscribe(),this.plantVariablesLoaderSubsription.unsubscribe()}setPlantVariables(t){t&&(t.forEach(t=>{const e=new b(t);e.vars=[],t.vars.forEach(t=>{const n=new o(t);e.vars.push(n),this.plantVariableStatesMap.set(t.name,n)}),this.plantVariableSections.push(e)}),this.changed(this.plantVariableSections))}setPlantTaskValues(t){t&&(t.forEach(t=>{t.TaskValues.forEach(e=>{const n=t.TaskName+"#"+e.Name;this.plantVariableStatesMap.has(n)&&(this.plantVariableStatesMap.get(n).value=e.Value.toString())})}),this.changed(this.plantVariableSections))}getVarByName(t){return Object(s.a)(this,void 0,void 0,(function*(){return 0===this.plantVariableStatesMap.size&&(yield this.getData().pipe(Object(h.a)(()=>this.plantVariableStatesMap.size>0),Object(g.a)(1)).toPromise()),this.plantVariableStatesMap.get(t)}))}getSection(t){return this.getData().pipe(Object(h.a)(()=>this.plantVariableSections.length>0),Object(g.a)(1),Object(f.a)(()=>this.plantVariableSections.find(e=>e.name===t)))}getSectionCommands(t){return this.getSection(t).pipe(Object(f.a)(t=>t.commands))}}return t.ɵfac=function(e){return new(e||t)(l.Ub(x),l.Ub(w))},t.ɵprov=l.Fb({token:t,factory:t.ɵfac}),t})(),S=(()=>{class t{constructor(t){this.plantRepositoryService=t}get varValue(){return void 0!==this._plantVariableState?this._plantVariableState.value:""}get varValueInt(){return parseInt(this.varValue,10)}set varValueInt(t){this._plantVariableState.value=t.toString()}get varValueBool(){return this.varValueInt>0}get plantVariableState(){return this._plantVariableState}set plantVariableState(t){this._plantVariableState=t,this.onPlantVariableState()}set plantVariableName(t){this.setPlantVariableName(t)}get plantVariableName(){return null===this.plantVariableState?"":this.plantVariableState.name}setPlantVariableName(t){return Object(s.a)(this,void 0,void 0,(function*(){const e=yield this.plantRepositoryService.getVarByName(t);this.plantVariableState=e}))}onPlantVariableState(){}ngOnInit(){}}return t.ɵfac=function(e){return new(e||t)(l.Jb(O))},t.ɵcmp=l.Db({type:t,selectors:[["ng-component"]],inputs:{plantVariableState:"plantVariableState",plantVariableName:"plantVariableName"},decls:0,vars:0,template:function(t,e){},encapsulation:2}),t})();const V=["app-variable-display-element-descr",""];function C(t,e){if(1&t&&(l.Nb(0),l.yc(1),l.Mb()),2&t){const t=l.ac();l.xb(1),l.zc(t.short?t.plantVariableState.short:t.plantVariableState.descr)}}let P=(()=>{class t extends S{constructor(){super(...arguments),this.short=!1}get title(){return this.plantVariableState?this.short?this.plantVariableState.descr:this.plantVariableState.help:""}}return t.ɵfac=function(e){return M(e||t)},t.ɵcmp=l.Db({type:t,selectors:[["","app-variable-display-element-descr",""]],hostBindings:function(t,e,n){1&t&&l.yb(1),2&t&&l.zb("Title",e.title)},inputs:{short:"short"},features:[l.ub],attrs:V,decls:1,vars:1,consts:[[4,"ngIf"]],template:function(t,e){1&t&&l.wc(0,C,2,1,"ng-container",0),2&t&&l.fc("ngIf",e.plantVariableState)},directives:[m.l],styles:[""]}),t})();const M=l.Sb(P);let k=(()=>{class t{constructor(t){this.http=t}post(t,e){return Object(s.a)(this,void 0,void 0,(function*(){yield this.http.post(t,e,{responseType:"text"}).toPromise()}))}postFile(t,e,n){return Object(s.a)(this,void 0,void 0,(function*(){yield this.post(t,this.getFormData(e,n))}))}getFormData(t,e){const n=new FormData;return n.append("file",new File([e],t)),n}sendCommand(t){return Object(s.a)(this,void 0,void 0,(function*(){yield this.http.get("/tools?cmd="+t,{responseType:"text"}).toPromise()}))}sendEvent(t){return Object(s.a)(this,void 0,void 0,(function*(){yield this.sendCommand("event,"+t)}))}sendVariableChangeToPlant(t,e){return Object(s.a)(this,void 0,void 0,(function*(){yield this.sendEvent("Set"+t+"="+e)}))}}return t.ɵfac=function(e){return new(e||t)(l.Ub(r.a))},t.ɵprov=l.Fb({token:t,factory:t.ɵfac}),t})(),_=(()=>{class t extends S{constructor(t,e){super(t),this.plantRepositoryService=t,this.plantAPIService=e,this._editing=!1}sendVariableToPlant(){const t=this.plantVariableState.name.split("#")[1];this.plantAPIService.sendVariableChangeToPlant(t,this.varValue)}get varValue(){return this._editing?this._varValue:this.plantVariableState.value}set varValue(t){this._varValue=t}set varValueBool(t){this.plantVariableState.value=t?"1":"0"}startEditing(){this._varValue=this.varValue,this._editing=!0}endEditing(){this.plantVariableState.value=this._varValue,this._editing=!1}}return t.ɵfac=function(e){return new(e||t)(l.Jb(O),l.Jb(k))},t.ɵcmp=l.Db({type:t,selectors:[["ng-component"]],features:[l.ub],decls:0,vars:0,template:function(t,e){},encapsulation:2}),t})();var D=n("3Pt+");let I=(()=>{class t extends _{onBlur(){this.varValue!==this.plantVariableState.value&&this.sendVariableToPlant(),this.endEditing()}onFocus(){this.startEditing()}}return t.ɵfac=function(e){return j(e||t)},t.ɵcmp=l.Db({type:t,selectors:[["app-variable-element-input"]],features:[l.ub],decls:1,vars:2,consts:[["type","number",1,"sk-input",3,"id","ngModel","ngModelChange","blur","focus"]],template:function(t,e){1&t&&(l.Qb(0,"input",0),l.Yb("ngModelChange",(function(t){return e.varValue=t}))("blur",(function(t){return e.onBlur()}))("focus",(function(t){return e.onFocus()})),l.Ob()),2&t&&(l.gc("id",e.plantVariableState.name),l.fc("ngModel",e.varValue))},directives:[D.g,D.b,D.e,D.f],styles:[".variable-input[_ngcontent-%COMP%]{width:2.5rem;font-family:cursive;color:#0000cd}"]}),t})();const j=l.Sb(I);function T(t,e){if(1&t&&(l.Qb(0,"div",1),l.Qb(1,"span",2),l.yc(2),l.Ob(),l.Ob()),2&t){const t=l.ac();l.xb(2),l.zc(t.varValue)}}let U=(()=>{class t extends S{}return t.ɵfac=function(e){return F(e||t)},t.ɵcmp=l.Db({type:t,selectors:[["app-variable-element-monitor"]],features:[l.ub],decls:1,vars:1,consts:[["class","sk-lcd variable-monitor",4,"ngIf"],[1,"sk-lcd","variable-monitor"],[1,"sk-lcd-text"]],template:function(t,e){1&t&&l.wc(0,T,3,1,"div",0),2&t&&l.fc("ngIf",e.plantVariableState)},directives:[m.l],styles:[".variable-monitor[_ngcontent-%COMP%]{width:2.5rem}"]}),t})();const F=l.Sb(U);function Q(t,e){if(1&t&&(l.Qb(0,"div",1),l.Qb(1,"span",2),l.yc(2),l.Ob(),l.Ob()),2&t){const t=l.ac();l.xb(2),l.zc(t.varValue)}}let N=(()=>{class t extends S{get varValue(){return new Date(864e5*parseInt(this.plantVariableState.value,10)).toLocaleDateString()}}return t.ɵfac=function(e){return R(e||t)},t.ɵcmp=l.Db({type:t,selectors:[["app-variable-element-date"]],features:[l.ub],decls:1,vars:1,consts:[["class","sk-lcd variable-monitor",4,"ngIf"],[1,"sk-lcd","variable-monitor"],[1,"sk-lcd-text"]],template:function(t,e){1&t&&l.wc(0,Q,3,1,"div",0),2&t&&l.fc("ngIf",e.plantVariableState)},directives:[m.l],styles:[".variable-monitor[_ngcontent-%COMP%]{width:2.5rem}"]}),t})();const R=l.Sb(N);function L(t,e){if(1&t&&(l.Qb(0,"div",1),l.Qb(1,"span",2),l.yc(2),l.Ob(),l.Ob()),2&t){const t=l.ac();l.xb(2),l.zc(t.varValue)}}let E=(()=>{class t extends S{get varValue(){return new Date(1e3*parseInt(this.plantVariableState.value,10)).toLocaleTimeString()}}return t.ɵfac=function(e){return K(e||t)},t.ɵcmp=l.Db({type:t,selectors:[["app-variable-element-time"]],features:[l.ub],decls:1,vars:1,consts:[["class","sk-lcd variable-monitor",4,"ngIf"],[1,"sk-lcd","variable-monitor"],[1,"sk-lcd-text"]],template:function(t,e){1&t&&l.wc(0,L,3,1,"div",0),2&t&&l.fc("ngIf",e.plantVariableState)},directives:[m.l],styles:[".variable-monitor[_ngcontent-%COMP%]{width:2.5rem}"]}),t})();const K=l.Sb(E),z=function(t){return["sk-indicator","i-warn",t]};let B=(()=>{class t extends S{}return t.ɵfac=function(e){return W(e||t)},t.ɵcmp=l.Db({type:t,selectors:[["app-variable-element-alarm"]],features:[l.ub],decls:2,vars:3,consts:[[1,"sk-indicator-container"],[3,"ngClass"]],template:function(t,e){1&t&&(l.Qb(0,"div",0),l.Kb(1,"span",1),l.Ob()),2&t&&(l.xb(1),l.fc("ngClass",l.jc(1,z,e.varValueBool?"i-active":"i-inactive")))},directives:[m.i],styles:[".variable-alarm[_ngcontent-%COMP%]{width:1rem;height:1rem}"]}),t})();const W=l.Sb(B),G=function(t){return["sk-indicator","i-indicator",t]};let H=(()=>{class t extends S{}return t.ɵfac=function(e){return J(e||t)},t.ɵcmp=l.Db({type:t,selectors:[["app-variable-element-indicator"]],features:[l.ub],decls:2,vars:3,consts:[[1,"sk-indicator-container"],[3,"ngClass"]],template:function(t,e){1&t&&(l.Qb(0,"div",0),l.Kb(1,"span",1),l.Ob()),2&t&&(l.xb(1),l.fc("ngClass",l.jc(1,G,e.varValueBool?"i-active":"i-inactive")))},directives:[m.i],encapsulation:2}),t})();const J=l.Sb(H);let A=(()=>{class t extends _{}return t.ɵfac=function(e){return Y(e||t)},t.ɵcmp=l.Db({type:t,selectors:[["app-variable-element-checkbox"]],features:[l.ub],decls:4,vars:1,consts:[["type","checkbox","id","sk1",1,"sk-checkbox",3,"ngModel","ngModelChange","change"],["for","sk1"],[1,"container"],[1,"switch"]],template:function(t,e){1&t&&(l.Qb(0,"input",0),l.Yb("ngModelChange",(function(t){return e.varValueBool=t}))("change",(function(t){return e.sendVariableToPlant()})),l.Ob(),l.Qb(1,"label",1),l.Qb(2,"div",2),l.Kb(3,"div",3),l.Ob(),l.Ob()),2&t&&l.fc("ngModel",e.varValueBool)},directives:[D.a,D.e,D.f],encapsulation:2}),t})();const Y=l.Sb(A),q=["*"];let $=(()=>{class t extends S{}return t.ɵfac=function(e){return X(e||t)},t.ɵcmp=l.Db({type:t,selectors:[["app-variable-element-bar"]],features:[l.ub],ngContentSelectors:q,decls:3,vars:1,consts:[["id","outer"],["id","inner"]],template:function(t,e){1&t&&(l.ec(),l.Qb(0,"div",0),l.Kb(1,"div",1),l.dc(2),l.Ob()),2&t&&(l.xb(1),l.vc("height",e.varValue,"%"))},styles:["[_nghost-%COMP%]{height:100%}.filled[_ngcontent-%COMP%]{background-color:#00f;position:absolute;bottom:0}#outer[_ngcontent-%COMP%]{width:100%;height:100%;border:2px solid #ccc;background-color:#87cefa;overflow:hidden;position:relative;border-radius:4px}#inner[_ngcontent-%COMP%]{width:100%;overflow:hidden;left:-2px;position:absolute;border:2px solid #00f;border-top-width:0;background-color:#00f;bottom:0}"]}),t})();const X=l.Sb($);var Z=n("EsRS");function tt(t,e){if(1&t){const t=l.Rb();l.Qb(0,"div",1),l.Qb(1,"ng5-slider",2),l.Yb("valueChange",(function(e){return l.pc(t),l.ac().varValue=e}))("userChangeStart",(function(e){return l.pc(t),l.ac().startEditing()}))("userChangeEnd",(function(e){return l.pc(t),l.ac().endEditing()})),l.Ob(),l.Ob()}if(2&t){const t=l.ac();l.xb(1),l.fc("value",t.varValue)("options",t.options)}}let et=(()=>{class t extends _{constructor(){super(...arguments),this.options={floor:0,ceil:100,hideLimitLabels:!0}}endEditing(){this.varValue!==this.plantVariableState.value&&this.sendVariableToPlant(),super.endEditing()}onBlur(){this.varValue!==this.plantVariableState.value&&this.sendVariableToPlant(),this.endEditing()}onFocus(){this.startEditing()}}return t.ɵfac=function(e){return nt(e||t)},t.ɵcmp=l.Db({type:t,selectors:[["app-variable-element-slider-input"]],features:[l.ub],decls:1,vars:1,consts:[["class","custom-slider",4,"ngIf"],[1,"custom-slider"],[3,"value","options","valueChange","userChangeStart","userChangeEnd"]],template:function(t,e){1&t&&l.wc(0,tt,2,2,"div",0),2&t&&l.fc("ngIf",e.plantVariableState)},directives:[m.l,Z.b],styles:[".sk-slider-container[_ngcontent-%COMP%]{display:flex;align-items:center;height:16px;background:linear-gradient(70.72deg,#fff -30.86%,#ecf1f7 -10.72%,#cfdceb 112.31%);box-shadow:inset 4px 4px 6px rgba(18,46,101,.15),inset -4px -4px 7px rgba(255,255,255,.7);border-radius:31px}.sk-slider-lever[_ngcontent-%COMP%]{position:relative;top:1px;left:2px;height:14px;width:70px;background:linear-gradient(88.49deg,#f0f4f9 -4.95%,#587ca5 578.66%);box-shadow:-1px 2px 2px rgba(24,55,91,.1),inset 0 -2px 1px rgba(39,81,126,.12),inset 0 0 4px rgba(46,68,87,.02);-webkit-backdrop-filter:blur(28px);backdrop-filter:blur(28px);border-radius:26px}  .custom-slider .ng5-slider .ng5-slider-bar{height:16px;background:linear-gradient(70.72deg,#fff -30.86%,#ecf1f7 -10.72%,#cfdceb 112.31%);box-shadow:inset 4px 4px 6px rgba(18,46,101,.15),inset -4px -4px 7px rgba(255,255,255,.7);border-radius:31px}  .custom-slider .ng5-slider .ng5-slider-pointer{top:1px;left:2px;height:14px;width:70px;background:linear-gradient(88.49deg,#f0f4f9 -4.95%,#587ca5 578.66%);box-shadow:-1px 2px 2px rgba(24,55,91,.1),inset 0 -2px 1px rgba(39,81,126,.12),inset 0 0 4px rgba(46,68,87,.02);-webkit-backdrop-filter:blur(28px);backdrop-filter:blur(28px);border-radius:26px}  .custom-slider .ng5-slider .ng5-slider-pointer:after{display:none}  .custom-slider .ng5-slider .ng5-slider-bubble{bottom:0}  .custom-slider .ng5-slider .ng5-slider-limit{font-weight:700}  .custom-slider .ng5-slider .ng5-slider-tick{width:1px;height:10px;margin-left:4px;border-radius:0;background:#587ca5}"]}),t})();const nt=l.Sb(et);let at=(()=>{class t{constructor(t){this.componentFactoryResolver=t}createComponent(t,e,n){const a=this.componentFactoryResolver.resolveComponentFactory(n[e]);return t.clear(),t.createComponent(a).instance}}return t.ɵfac=function(e){return new(e||t)(l.Ub(l.j))},t.ɵprov=l.Fb({token:t,factory:t.ɵfac}),t})();const rt=["container"],it=["app-variable-display-element",""];let st=(()=>{class t extends S{constructor(t,e){super(t),this.plantRepositoryService=t,this.dynamicComponentLoader=e,this.templateMapper={monitor:U,date:N,time:E,alarm:B,indicator:H,input:I,checkbox:A,bar:$,sliderinput:et}}set displayType(t){this._displayType=t}get displayType(){return this._displayType||this.plantVariableState.valtype}ngOnInit(){this.updateComponent()}updateComponent(){this.plantVariableState&&(this.dynamicComponentLoader.createComponent(this.container,this.getComponentForType(this.displayType),this.templateMapper).plantVariableState=this.plantVariableState)}onPlantVariableState(){this.updateComponent()}getComponentForType(t){return t&&this.templateMapper[t]||(t="monitor"),t}}return t.ɵfac=function(e){return new(e||t)(l.Jb(O),l.Jb(at))},t.ɵcmp=l.Db({type:t,selectors:[["","app-variable-display-element",""]],viewQuery:function(t,e){var n;1&t&&l.tc(rt,!0,l.M),2&t&&l.mc(n=l.Zb())&&(e.container=n.first)},inputs:{displayType:"displayType"},features:[l.ub],attrs:it,decls:2,vars:0,consts:[["container",""]],template:function(t,e){1&t&&l.Lb(0,null,0)},styles:["[_nghost-%COMP%]{font-family:cursive;color:#0000cd}"]}),t})();const ot=["app-variable-element-datetime",""];function ct(t,e){if(1&t&&(l.Qb(0,"div",1),l.Qb(1,"span",2),l.yc(2),l.Ob(),l.Ob()),2&t){const t=l.ac();l.xb(2),l.Bc("",t.varValue," ",t.timePartValue,"")}}let lt=(()=>{class t extends S{set timePartName(t){this.setTimePartName(t)}setTimePartName(t){return Object(s.a)(this,void 0,void 0,(function*(){const e=yield this.plantRepositoryService.getVarByName(t);this.timePartState=e}))}get timePartValue(){let t=0;return this.timePartState&&(t=parseInt(this.timePartState.value,10)),new Date(1e3*t).toLocaleTimeString()}get varValue(){let t=0;return this.plantVariableState&&(t=parseInt(this.plantVariableState.value,10)),new Date(864e5*t).toLocaleDateString()}}return t.ɵfac=function(e){return pt(e||t)},t.ɵcmp=l.Db({type:t,selectors:[["","app-variable-element-datetime",""]],inputs:{timePartState:"timePartState",timePartName:"timePartName"},features:[l.ub],attrs:ot,decls:1,vars:1,consts:[["class","sk-lcd datetime-monitor",4,"ngIf"],[1,"sk-lcd","datetime-monitor"],[1,"sk-lcd-text"]],template:function(t,e){1&t&&l.wc(0,ct,3,2,"div",0),2&t&&l.fc("ngIf",e.plantVariableState)},directives:[m.l],styles:[".datetime-monitor[_ngcontent-%COMP%]{width:6rem;line-height:4vh}"]}),t})();const pt=l.Sb(lt);function dt(t,e){if(1&t&&(l.Qb(0,"div",3),l.Kb(1,"span",13),l.yc(2,"  "),l.Kb(3,"span",14),l.yc(4,"  "),l.Ob()),2&t){const t=e.$implicit;l.xb(1),l.fc("plantVariableState",t),l.xb(2),l.fc("plantVariableState",t)("short",!0)}}function ut(t,e){if(1&t&&(l.Qb(0,"div",2),l.wc(1,dt,5,3,"div",12),l.bc(2,"async"),l.Ob()),2&t){const t=l.ac();l.xb(1),l.fc("ngForOf",l.cc(2,1,t.alarmsSection).vars)}}let bt=(()=>{class t extends c{constructor(t){super(),this.plantRepositoryService=t,this._alarmPresent=!1,this.moistureLevel=new o,this.maxMoistureLevel=new o}ngOnInit(){this.setVars()}ngOnDestroy(){this.alarmsSubscription.unsubscribe()}setVars(){return Object(s.a)(this,void 0,void 0,(function*(){this.maxMoistureLevel=yield this.plantRepositoryService.getVarByName("Config#MoistureLow"),this.lastWateringDate=yield this.plantRepositoryService.getVarByName("DT#YMD"),this.alarmsSection=this.plantRepositoryService.getSection("alarms"),this.alarmsSubscription=this.alarmsSection.subscribe(t=>{let e=!1;t&&(t.vars.forEach(t=>{t&&parseInt(t.value,10)>0&&(e=!0)}),this._alarmPresent=e)})}))}get lastWateredAgo(){if(!this.lastWateringDate||!this.lastWateringDate.value)return"";const t=parseInt(this.lastWateringDate.value,10),e=Math.floor((new Date).getTime()/864e5);return t===e?"Today":t+1===e?"Yesterday":(e-t).toLocaleString()+" days ago"}get alarmPresent(){return this._alarmPresent}}return t.ɵfac=function(e){return new(e||t)(l.Jb(O))},t.ɵcmp=l.Db({type:t,selectors:[["app-flower-view"]],features:[l.ub],decls:19,vars:17,consts:[["class","sk-card",4,"ngIf"],["width","0"],[1,"sk-card"],[1,"sk-card-row"],["src","/drop.svg","width","20vh",1,"vert-center"],["app-variable-display-element-descr","",1,"margin-left",3,"plantVariableName","short"],["app-variable-display-element","",1,"right",3,"plantVariableName"],[1,"sk-card-row","clear-padding"],["app-variable-display-element-descr","",1,"margin-right",3,"plantVariableName","short"],["app-variable-display-element","",1,"right","width100",3,"plantVariableName","displayType"],[1,"sk-card","sk-card-row"],["app-variable-element-datetime","",1,"right",3,"plantVariableName","timePartName"],["class","sk-card-row",4,"ngFor","ngForOf"],["app-variable-display-element","",1,"vert-center",3,"plantVariableState"],["app-variable-display-element-descr","",3,"plantVariableState","short"]],template:function(t,e){1&t&&(l.wc(0,ut,3,3,"div",0),l.bc(1,"async"),l.Kb(2,"hr",1),l.Qb(3,"div",2),l.Qb(4,"div",3),l.Kb(5,"img",4),l.Kb(6,"span",5),l.Kb(7,"span",6),l.Ob(),l.Qb(8,"div",7),l.Kb(9,"td",8),l.Kb(10,"span",9),l.Ob(),l.Ob(),l.Kb(11,"hr",1),l.Qb(12,"div",10),l.Kb(13,"span",5),l.Kb(14,"span",6),l.Ob(),l.Kb(15,"hr",1),l.Qb(16,"div",10),l.Kb(17,"span",5),l.Kb(18,"span",11),l.Ob()),2&t&&(l.fc("ngIf",l.cc(1,15,e.alarmsSection)),l.xb(6),l.fc("plantVariableName","Moisture#Value")("short",!0),l.xb(1),l.fc("plantVariableName","Moisture#Value"),l.xb(2),l.fc("plantVariableName","Config#MoistureLow")("short",!0),l.xb(1),l.fc("plantVariableName","Config#MoistureLow")("displayType","sliderinput"),l.xb(3),l.fc("plantVariableName","Config#WateringPeriod")("short",!0),l.xb(1),l.fc("plantVariableName","Config#WateringPeriod"),l.xb(3),l.fc("plantVariableName","DT#YMD")("short",!0),l.xb(1),l.fc("plantVariableName","DT#YMD")("timePartName","DT#HMS"))},directives:[m.l,P,st,lt,m.k],pipes:[m.b],styles:["[_nghost-%COMP%]{height:100%}.dashboard-item[_ngcontent-%COMP%]{margin:20px}.descr-right[_ngcontent-%COMP%]{margin-left:10px;margin-right:10px}#bar-container[_ngcontent-%COMP%]{width:20px;height:100%;float:right;margin-right:10px;display:flex;flex-direction:column}.max-moi-lev[_ngcontent-%COMP%]{color:red;text-decoration:underline;font-weight:bolder;width:100%;position:absolute;text-align:center}.moisture[_ngcontent-%COMP%]{display:flex;flex-flow:column;flex-grow:1;padding-bottom:10px}.maincontent[_ngcontent-%COMP%]{width:calc(100% - 50px);float:left;display:flex;flex-direction:column}.mainparam[_ngcontent-%COMP%]{font-size:3rem;text-align:center;font-weight:700;color:#00b600}.extparam[_ngcontent-%COMP%]{text-align:center;font-weight:700;font-size:1.5rem;color:green}.grid-container[_ngcontent-%COMP%]{margin:20px}.dashboard-grid[_ngcontent-%COMP%]{height:100%}.dashboard-grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]{position:absolute;top:0;left:15px;right:50px;bottom:15px;padding:0;background-color:rgba(0,0,50,.05);border-radius:10px;display:flex;flex-direction:column}.mat-card-content-with-footer[_ngcontent-%COMP%]{padding-bottom:0!important;margin-bottom:0!important}.dashboard-grid[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]{text-align:center;flex:1;display:flex;align-items:center;justify-content:center;padding-bottom:20px}.dashboard-grid[_ngcontent-%COMP%]   mat-card-footer[_ngcontent-%COMP%], .dashboard-grid[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]{background-color:rgba(0,0,50,.1);border-radius:10px}.dashboard-grid[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]{border-bottom-right-radius:0;border-bottom-left-radius:0}.dashboard-grid[_ngcontent-%COMP%]   mat-card-footer[_ngcontent-%COMP%]{border-top-left-radius:0;border-top-right-radius:0;margin:0}.dashboard-grid[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]{font-size:1.5rem;margin-bottom:10px;margin-top:10px;color:#0000cd}.dashboard-grid[_ngcontent-%COMP%]   mat-card-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;text-align:right}.warn[_ngcontent-%COMP%]{font-size:3rem;text-align:center;font-weight:700;color:red}.content-icon[_ngcontent-%COMP%]{height:auto;width:auto}.mat-card-content-inner[_ngcontent-%COMP%]{width:100%;height:100%}"]}),t})();var ht=n("3m8r"),ft=n("S6r7");class gt{get wantUpdate(){if(!this.oldVersion||!this.newVersion)return!1;const t=this.oldVersion.split("."),e=this.newVersion.split(".");let n=!1;for(let a=0;a<t.length&&a<e.length;a++)if(t[a]<e[a]){n=!0;break}return n}}let mt=(()=>{class t extends u{constructor(t,e){super(),this.plantAPIService=t,this.http=e,this.updateInfo=new gt,this.LoadWareInfos()}LoadWareInfos(){this.http.get("updater.json").toPromise().then(t=>{this.currentWare=t,this.http.get(this.currentWare.updateurl+"updater.json").toPromise().then(t=>{this.serverWare=t,this.setUpdateInfo()})})}setUpdateInfo(){this.updateInfo.newVersion=this.serverWare.version,this.updateInfo.oldVersion=this.currentWare.version,this.updateInfo.wantUpdate&&(this.updateInfo.filelist=[],this.serverWare.filelist.forEach(t=>{const e=this.currentWare.filelist.find(({path:e})=>e===t.path),n={path:t.path,descr:t.descr,files:[],hint:t.hint};this.updateInfo.filelist.push(n),t.files.forEach(t=>{let a,r=!e;r||(a=e.files.find(({name:e})=>e===t.name),r=r||!a||a.timestamp<t.timestamp),r&&n.files.push({updated:!1,oldFile:a,newFile:t})})})),this.changed(this.updateInfo)}doUpdate(){return Object(s.a)(this,void 0,void 0,(function*(){for(let t of this.updateInfo.filelist)for(let e of t.files){let n=yield this.http.get(this.serverWare.updateurl+e.newFile.name,{responseType:"blob"}).toPromise();yield this.plantAPIService.postFile(t.path,e.newFile.name,n)}}))}}return t.ɵfac=function(e){return new(e||t)(l.Ub(k),l.Ub(r.a))},t.ɵprov=l.Fb({token:t,factory:t.ɵfac}),t})();const vt=function(t){return{"upload-updated":t}};function yt(t,e){if(1&t&&(l.Qb(0,"div",11),l.yc(1),l.Ob()),2&t){const t=e.$implicit;l.fc("ngClass",l.jc(2,vt,t.updated)),l.xb(1),l.Ac(" ",t.newFile.name," ")}}function xt(t,e){if(1&t&&(l.Qb(0,"div"),l.Qb(1,"div",7),l.yc(2),l.Ob(),l.Qb(3,"div",8),l.yc(4),l.Ob(),l.Qb(5,"div",9),l.wc(6,yt,2,4,"div",10),l.Ob(),l.Ob()),2&t){const t=e.$implicit;l.xb(2),l.zc(t.descr),l.xb(2),l.zc(t.hint),l.xb(2),l.fc("ngForOf",t.files)}}function wt(t,e){if(1&t&&(l.Qb(0,"div"),l.Qb(1,"div",5),l.yc(2),l.Ob(),l.Qb(3,"div"),l.yc(4),l.Ob(),l.wc(5,xt,7,3,"div",6),l.Ob()),2&t){const t=l.ac();l.xb(2),l.Ac("Current version: ",t.updateInfo.oldVersion,""),l.xb(2),l.Ac("New version: ",t.updateInfo.newVersion,""),l.xb(1),l.fc("ngForOf",t.updateInfo.filelist)}}function Ot(t,e){1&t&&(l.Qb(0,"h2"),l.yc(1,"Update is in progress..."),l.Ob())}function St(t,e){if(1&t){const t=l.Rb();l.Qb(0,"button",12),l.Yb("click",(function(e){return l.pc(t),l.ac().onClick()})),l.yc(1,"Update"),l.Ob()}}function Vt(t,e){if(1&t&&(l.Qb(0,"h3"),l.yc(1),l.Ob()),2&t){const t=l.ac();l.xb(1),l.Ac("Update completed. Reload in ",t.countDown," seconds...")}}var Ct=function(t){return t[t.NoUpdate=0]="NoUpdate",t[t.ReadyForUpdate=1]="ReadyForUpdate",t[t.UpdateInProgress=2]="UpdateInProgress",t[t.UpdateComplete=3]="UpdateComplete",t}({});let Pt=(()=>{class t extends c{constructor(t){super(),this.plantwareUpdaterService=t,this.updateStatus=Ct.NoUpdate,this.countDown=10,this.UpdateStatus=Ct}ngOnInit(){this.plantwareUpdaterService.getData().subscribe(t=>{t&&(this.updateInfo=t,this.updateStatus=t.wantUpdate?Ct.ReadyForUpdate:Ct.NoUpdate)})}onClick(){this.doUpdate()}doUpdate(){this.updateStatus=Ct.UpdateInProgress,this.plantwareUpdaterService.doUpdate().then(()=>{this.updateStatus=Ct.UpdateComplete,this.reloadUI()})}reloadUI(){const t=Object(p.a)(1e3*this.countDown);Object(ht.a)(1e3).pipe(Object(ft.a)(t)).subscribe(()=>this.countDown--),t.subscribe(()=>{console.log("reload"),location.href=""})}}return t.ɵfac=function(e){return new(e||t)(l.Jb(mt))},t.ɵcmp=l.Db({type:t,selectors:[["app-update-view"]],features:[l.ub],decls:6,vars:5,consts:[[1,"update-wrapper"],[4,"ngIf"],[1,"center-children","update-status",3,"ngSwitch"],[4,"ngSwitchCase"],[3,"click",4,"ngSwitchCase"],[1,"padding-top"],[4,"ngFor","ngForOf"],[1,"update-descr","padding-top"],[1,"update-hint"],[1,"update-files"],["class","update-file",3,"ngClass",4,"ngFor","ngForOf"],[1,"update-file",3,"ngClass"],[3,"click"]],template:function(t,e){1&t&&(l.Qb(0,"div",0),l.wc(1,wt,6,3,"div",1),l.Qb(2,"div",2),l.wc(3,Ot,2,0,"h2",3),l.wc(4,St,2,0,"button",4),l.wc(5,Vt,2,1,"h3",3),l.Ob(),l.Ob()),2&t&&(l.xb(1),l.fc("ngIf",e.updateInfo),l.xb(1),l.fc("ngSwitch",e.updateStatus),l.xb(1),l.fc("ngSwitchCase",e.UpdateStatus.UpdateInProgress),l.xb(1),l.fc("ngSwitchCase",e.UpdateStatus.ReadyForUpdate),l.xb(1),l.fc("ngSwitchCase",e.UpdateStatus.UpdateComplete))},directives:[m.l,m.n,m.o,m.k,m.i],styles:[".update-wrapper[_ngcontent-%COMP%]{font-size:1.5vh;padding:10px;font-weight:400;line-height:initial}.upload-progress[_ngcontent-%COMP%]{width:100%}.padding-top[_ngcontent-%COMP%]{padding-top:.1rem}.upload-updated[_ngcontent-%COMP%]{background-color:gray}.upload-disabled-ui[_ngcontent-%COMP%]{pointer-events:none}.update-descr[_ngcontent-%COMP%]{font-weight:700}.update-hint[_ngcontent-%COMP%]{font-style:italic}.update-file[_ngcontent-%COMP%], .update-files[_ngcontent-%COMP%], .update-status[_ngcontent-%COMP%]{padding-top:.1rem}"]}),t})();var Mt=n("YEzn");const kt=["app-section-part",""];function _t(t,e){if(1&t&&(l.Qb(0,"tr"),l.Kb(1,"td",3),l.Kb(2,"td",4),l.Ob()),2&t){const t=e.$implicit;l.xb(1),l.fc("plantVariableState",t),l.xb(1),l.fc("plantVariableState",t)}}function Dt(t,e){if(1&t&&(l.Nb(0),l.Qb(1,"table",1),l.Qb(2,"tbody"),l.wc(3,_t,3,2,"tr",2),l.bc(4,"async"),l.Ob(),l.Ob(),l.Mb()),2&t){const t=l.ac();l.xb(3),l.fc("ngForOf",l.cc(4,1,t.plantVariablesSection).vars)}}let It=(()=>{class t extends c{constructor(t,e){super(),this.plantRepositoryService=t,this.plantAPIService=e}ngOnInit(){this.plantVariablesSection=this.plantRepositoryService.getSection(this.section)}plantCommandClick(t){this.plantAPIService.sendEvent(t)}}return t.ɵfac=function(e){return new(e||t)(l.Jb(O),l.Jb(k))},t.ɵcmp=l.Db({type:t,selectors:[["","app-section-part",""]],inputs:{section:"section"},features:[l.ub],attrs:kt,decls:2,vars:3,consts:[[4,"ngIf"],[1,"table-detail"],[4,"ngFor","ngForOf"],["app-variable-display-element-descr","",3,"plantVariableState"],["app-variable-display-element","",1,"advanced-value",3,"plantVariableState"]],template:function(t,e){1&t&&(l.wc(0,Dt,5,3,"ng-container",0),l.bc(1,"async")),2&t&&l.fc("ngIf",l.cc(1,1,e.plantVariablesSection))},directives:[m.l,m.k,P,st],pipes:[m.b],styles:["tr[_ngcontent-%COMP%]{width:100%}.table-detail[_ngcontent-%COMP%]{border-spacing:0 10px;width:100%}.advanced-value[_ngcontent-%COMP%]{float:right}"]}),t})();function jt(t,e){1&t&&l.Kb(0,"hr",4)}function Tt(t,e){if(1&t&&(l.Nb(0),l.wc(1,jt,1,0,"hr",2),l.Kb(2,"div",3),l.Mb()),2&t){const t=e.$implicit,n=e.first;l.xb(1),l.fc("ngIf",!n),l.xb(1),l.fc("section",t)}}function Ut(t,e){if(1&t&&(l.Qb(0,"div",5),l.Qb(1,"div",6),l.yc(2),l.Ob(),l.Ob()),2&t){const t=e.$implicit;l.xb(2),l.Ac(" ",t.descr," ")}}let Ft=(()=>{class t extends c{constructor(t){super(),this.plantRepositoryService=t,this.sections=["advanced","alarmconfig"]}get allCommands(){return class{static plantDateToDate(t){return new Date(864e5*parseInt(t,10))}static plantTimeToTime(t){return new Date(1e3*t)}static getSectionsCommands(t,e){const n=[];let a;return t.forEach(t=>{n.push(e.getSectionCommands(t))}),a=Object(Mt.a)(...n),a}}.getSectionsCommands(this.sections,this.plantRepositoryService)}}return t.ɵfac=function(e){return new(e||t)(l.Jb(O))},t.ɵcmp=l.Db({type:t,selectors:[["app-flower-view"]],features:[l.ub],decls:3,vars:4,consts:[[4,"ngFor","ngForOf"],["class","sk-button-border sk-button-border-auto",4,"ngFor","ngForOf"],["width","0",4,"ngIf"],["app-section-part","",1,"sk-card",3,"section"],["width","0"],[1,"sk-button-border","sk-button-border-auto"],[1,"sk-button","sk-button-auto"]],template:function(t,e){1&t&&(l.wc(0,Tt,3,2,"ng-container",0),l.wc(1,Ut,3,1,"div",1),l.bc(2,"async")),2&t&&(l.fc("ngForOf",e.sections),l.xb(1),l.fc("ngForOf",l.cc(2,2,e.allCommands)))},directives:[m.k,m.l,It],pipes:[m.b],styles:["[_nghost-%COMP%]{height:100%;font-size:2.5vh}#flower-container[_ngcontent-%COMP%]{height:100%;width:100%;background-image:url(/flower.svg);background-repeat:no-repeat;background-size:contain;opacity:.3}#bar-container[_ngcontent-%COMP%]{width:30px;height:100%;float:right;margin-right:10px;display:flex;flex-direction:column}.max-moi-lev[_ngcontent-%COMP%]{color:red;text-decoration:underline;font-weight:bolder;width:100%;position:absolute;text-align:center}.moisture[_ngcontent-%COMP%]{display:flex;flex-flow:column;padding-top:10px;flex-grow:1;padding-bottom:10px}"]}),t})();function Qt(t,e){1&t&&l.Lb(0)}const Nt=[{path:"",component:(()=>{class t{constructor(t){this.route=t,this.templateMapper={home:bt,advanced:Ft,update:Pt}}ngOnInit(){this.route.queryParamMap.subscribe(t=>{this.page=t.get("page")||"home",this.pageComponent=this.getComponentForType(this.page)})}getComponentForType(t){return this.templateMapper[t]}}return t.ɵfac=function(e){return new(e||t)(l.Jb(i.a))},t.ɵcmp=l.Db({type:t,selectors:[["app-main-view"]],outputs:{page:"page"},decls:1,vars:1,consts:[[4,"ngComponentOutlet"]],template:function(t,e){1&t&&l.wc(0,Qt,1,0,"ng-container",0),2&t&&l.fc("ngComponentOutlet",e.pageComponent)},directives:[m.j],styles:["[_nghost-%COMP%]{height:100%;width:100%}"]}),t})()}];let Rt=(()=>{class t{}return t.ɵmod=l.Hb({type:t}),t.ɵinj=l.Gb({factory:function(e){return new(e||t)},imports:[[i.c.forRoot(Nt)],i.c]}),t})();const Lt=function(t,e){return{checked:t,group:"navbar",value:e}},Et=function(t){return{params:t}};function Kt(t,e){if(1&t&&l.Lb(0,4),2&t){const t=e.$implicit,n=e.first;l.ac();const a=l.nc(7);l.fc("ngTemplateOutlet",a)("ngTemplateOutletContext",l.jc(5,Et,l.kc(2,Lt,n?"checked":"",t)))}}const zt=function(){return["/"]},Bt=function(t){return{page:t}};function Wt(t,e){if(1&t&&(l.Kb(0,"input",5),l.Qb(1,"label",6),l.Qb(2,"div",7),l.Qb(3,"div",8),l.Kb(4,"img",9),l.Ob(),l.Ob(),l.Ob()),2&t){const t=e.params;l.gc("name",t.group),l.gc("checked",t.checked),l.gc("id",t.value),l.gc("value",t.value),l.xb(1),l.gc("for",t.value),l.xb(2),l.fc("routerLink",l.ic(8,zt))("queryParams",l.jc(9,Bt,t.value)),l.xb(1),l.hc("src","/",t.value,".svg",l.rc)}}let Gt=(()=>{class t{constructor(t){this.plantwareUpdaterService=t,this.title="PlantStation",this.links=["home","advanced","update"],this.wantUpdate=!1,this.plantwareUpdaterService.getData().subscribe(t=>{t&&(this.wantUpdate=t.wantUpdate)})}merge(t,e){return Object.assign(Object.assign({},t),e)}}return t.ɵfac=function(e){return new(e||t)(l.Jb(mt))},t.ɵcmp=l.Db({type:t,selectors:[["app-root"]],decls:8,vars:1,consts:[[1,"wrapper"],[1,"sk-navbar"],[3,"ngTemplateOutlet","ngTemplateOutletContext",4,"ngFor","ngForOf"],["skButton",""],[3,"ngTemplateOutlet","ngTemplateOutletContext"],["type","radio",3,"name","checked","id","value"],[3,"for"],[1,"sk-button-border"],[1,"sk-button",3,"routerLink","queryParams"],[1,"sk-button-icon","sk-svg-shadow",3,"src"]],template:function(t,e){1&t&&(l.Qb(0,"div",0),l.Qb(1,"main"),l.Kb(2,"router-outlet"),l.Ob(),l.Qb(3,"nav"),l.Qb(4,"div",1),l.wc(5,Kt,1,7,"ng-container",2),l.Ob(),l.Ob(),l.Ob(),l.wc(6,Wt,5,11,"ng-template",null,3,l.xc)),2&t&&(l.xb(5),l.fc("ngForOf",e.links))},directives:[i.d,m.k,m.p,i.b],styles:[".link-main[_ngcontent-%COMP%]{width:1rem;height:1rem}.main-icon[_ngcontent-%COMP%]{height:40px;width:40px;font-size:3rem;color:#00f}"]}),t})(),Ht=(()=>{class t{static forRoot(){return{ngModule:t,providers:[w]}}}return t.ɵmod=l.Hb({type:t}),t.ɵinj=l.Gb({factory:function(e){return new(e||t)},imports:[[m.c,v]]}),t})(),Jt=(()=>{class t{static forRoot(){return{ngModule:t,providers:[O]}}}return t.ɵmod=l.Hb({type:t}),t.ɵinj=l.Gb({factory:function(e){return new(e||t)},imports:[[m.c,Ht.forRoot(),y,v]]}),t})(),At=(()=>{class t{}return t.ɵmod=l.Hb({type:t}),t.ɵinj=l.Gb({factory:function(e){return new(e||t)},imports:[[m.c]]}),t})(),Yt=(()=>{class t{static forRoot(){return{ngModule:t,providers:[mt]}}}return t.ɵmod=l.Hb({type:t}),t.ɵinj=l.Gb({factory:function(e){return new(e||t)},imports:[[m.c,At]]}),t})(),qt=(()=>{class t{static forRoot(){return{ngModule:t,providers:[k]}}}return t.ɵmod=l.Hb({type:t}),t.ɵinj=l.Gb({factory:function(e){return new(e||t)},providers:[],imports:[[m.c]]}),t})(),$t=(()=>{class t{}return t.ɵmod=l.Hb({type:t}),t.ɵinj=l.Gb({factory:function(e){return new(e||t)},imports:[[m.c,D.c,Z.a]]}),t})();var Xt=n("R1ws");let Zt=(()=>{class t{}return t.ɵmod=l.Hb({type:t}),t.ɵinj=l.Gb({factory:function(e){return new(e||t)},imports:[[m.c,$t]]}),t})(),te=(()=>{class t{}return t.ɵmod=l.Hb({type:t}),t.ɵinj=l.Gb({factory:function(e){return new(e||t)},imports:[[m.c,$t]]}),t})(),ee=(()=>{class t{}return t.ɵmod=l.Hb({type:t}),t.ɵinj=l.Gb({factory:function(e){return new(e||t)},imports:[[m.c,$t,At,Zt,te,Xt.a,Z.a]]}),t})(),ne=(()=>{class t{static forRoot(){return{ngModule:t,providers:[at]}}}return t.ɵmod=l.Hb({type:t}),t.ɵinj=l.Gb({factory:function(e){return new(e||t)},providers:[],imports:[[m.c]]}),t})(),ae=(()=>{class t{}return t.ɵmod=l.Hb({type:t,bootstrap:[Gt]}),t.ɵinj=l.Gb({factory:function(e){return new(e||t)},providers:[],imports:[[a.a,r.b,Rt,Jt.forRoot(),Yt.forRoot(),qt.forRoot(),ne.forRoot(),$t,ee,At]]}),t})();(Object(l.Q)(),Object(a.b)()).bootstrapModule(ae).catch(t=>console.log(t))},zn8P:function(t,e){function n(t){return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}))}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id="zn8P"}},[[0,0,4]]]);