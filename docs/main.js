(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{0:function(t,e,n){t.exports=n("zUnb")},zUnb:function(t,e,n){"use strict";n.r(e);var a=n("jhN1"),i=n("tk/3"),r=n("tyNb"),o=n("mrSG");class s{constructor(t){Object.assign(this,t)}}class c extends s{constructor(t){super(),Object.assign(this,t)}}class l{}var p=n("0IaG"),b=n("fXoL"),d=n("PqYM"),u=n("2Vo4");class h{constructor(){this.behaviorSubject=new u.a(null)}changed(t){this.behaviorSubject.next(t)}requestData(){this.changed(this.behaviorSubject.value)}getData(){return this.behaviorSubject.asObservable()}}class m{constructor(t){Object.assign(this,t)}}var f=n("pLZG"),g=n("IzEk"),v=n("lJxs"),y=n("ofXK");let w=(()=>{class t{}return t.ɵmod=b.Kb({type:t}),t.ɵinj=b.Jb({factory:function(e){return new(e||t)},imports:[[y.c]]}),t})(),V=(()=>{class t{}return t.ɵmod=b.Kb({type:t}),t.ɵinj=b.Jb({factory:function(e){return new(e||t)},imports:[[y.c,w]]}),t})(),S=(()=>{class t extends h{constructor(t){super(),this.http=t,this._locale="",this.requestData()}requestData(){this.http.get("/variables.json").toPromise().then(t=>this.changed(t))}get locale(){return this._locale}set locale(t){this._locale=t,this.requestData()}}return t.ɵfac=function(e){return new(e||t)(b.Xb(i.a))},t.ɵprov=b.Ib({token:t,factory:t.ɵfac,providedIn:V}),t})(),M=(()=>{class t extends h{constructor(t){super(),this.http=t}requestData(){this.http.get("/json").toPromise().then(t=>this.changed(t.Sensors))}}return t.ɵfac=function(e){return new(e||t)(b.Xb(i.a))},t.ɵprov=b.Ib({token:t,factory:t.ɵfac}),t})(),P=(()=>{class t extends h{constructor(t,e){super(),this.plantVariablesLoader=t,this.plantTaskValuesLoader=e,this.plantVariableSections=[],this.plantVariableStatesMap=new Map,this.plantVariablesLoaderSubsription=this.plantVariablesLoader.getData().subscribe(t=>{t&&(this.setPlantVariables(t),this.plantTaskValuesLoader.getData().subscribe(t=>{this.setPlantTaskValues(t)}),this.plantTaskValuesLoaderSubscription=Object(d.a)(0,1e4).subscribe(()=>{this.plantTaskValuesLoader.requestData()}))})}ngOnDestroy(){this.plantTaskValuesLoaderSubscription.unsubscribe(),this.plantVariablesLoaderSubsription.unsubscribe()}setPlantVariables(t){t&&(t.forEach(t=>{const e=new m(t);e.vars=[],t.vars.forEach(t=>{const n=new c(t);e.vars.push(n),this.plantVariableStatesMap.set(t.name,n)}),this.plantVariableSections.push(e)}),this.changed(this.plantVariableSections))}setPlantTaskValues(t){t&&(t.forEach(t=>{t.TaskValues.forEach(e=>{const n=t.TaskName+"#"+e.Name;this.plantVariableStatesMap.has(n)&&(this.plantVariableStatesMap.get(n).value=e.Value.toString())})}),this.changed(this.plantVariableSections))}getVarByName(t){return Object(o.a)(this,void 0,void 0,(function*(){return 0===this.plantVariableStatesMap.size&&(yield this.getData().pipe(Object(f.a)(()=>this.plantVariableStatesMap.size>0),Object(g.a)(1)).toPromise()),this.plantVariableStatesMap.get(t)}))}getSection(t){return this.getData().pipe(Object(f.a)(()=>this.plantVariableSections.length>0),Object(v.a)(()=>this.plantVariableSections.find(e=>e.name===t)))}}return t.ɵfac=function(e){return new(e||t)(b.Xb(S),b.Xb(M))},t.ɵprov=b.Ib({token:t,factory:t.ɵfac}),t})(),O=(()=>{class t{constructor(t){this.http=t}post(t,e){return Object(o.a)(this,void 0,void 0,(function*(){yield this.http.post(t,e,{responseType:"text"}).toPromise()}))}postFile(t,e,n){return Object(o.a)(this,void 0,void 0,(function*(){yield this.post(t,this.getFormData(e,n))}))}getFormData(t,e){const n=new FormData;return n.append("file",new File([e],t)),n}sendCommand(t){return Object(o.a)(this,void 0,void 0,(function*(){yield this.http.get("/tools?cmd="+t,{responseType:"text"}).toPromise()}))}sendEvent(t){return Object(o.a)(this,void 0,void 0,(function*(){yield this.sendCommand("event,"+t)}))}sendVariableChangeToPlant(t,e){return Object(o.a)(this,void 0,void 0,(function*(){yield this.sendEvent("Set"+t+"="+e)}))}}return t.ɵfac=function(e){return new(e||t)(b.Xb(i.a))},t.ɵprov=b.Ib({token:t,factory:t.ɵfac}),t})(),C=(()=>{class t{constructor(t){this.plantRepositoryService=t}get varValue(){return void 0!==this._plantVariableState?this._plantVariableState.value:""}get varValueInt(){return parseInt(this.varValue,10)}get varValueBool(){return this.varValueInt>0}get plantVariableState(){return this._plantVariableState}set plantVariableState(t){this._plantVariableState=t,this.onPlantVariableState()}set plantVariableName(t){this.setPlantVariableName(t)}get plantVariableName(){return null===this.plantVariableState?"":this.plantVariableState.name}setPlantVariableName(t){return Object(o.a)(this,void 0,void 0,(function*(){const e=yield this.plantRepositoryService.getVarByName(t);this.plantVariableState=e}))}onPlantVariableState(){}ngOnInit(){}}return t.ɵfac=function(e){return new(e||t)(b.Mb(P))},t.ɵcmp=b.Gb({type:t,selectors:[["ng-component"]],inputs:{plantVariableState:"plantVariableState",plantVariableName:"plantVariableName"},decls:0,vars:0,template:function(t,e){},encapsulation:2}),t})();const T=["app-variable-display-element-descr",""];function R(t,e){if(1&t&&(b.Qb(0),b.uc(1),b.Pb()),2&t){const t=b.dc();b.zb(1),b.vc(t.plantVariableState.descr)}}let _=(()=>{class t extends C{}return t.ɵfac=function(e){return x(e||t)},t.ɵcmp=b.Gb({type:t,selectors:[["","app-variable-display-element-descr",""]],features:[b.wb],attrs:T,decls:1,vars:1,consts:[[4,"ngIf"]],template:function(t,e){1&t&&b.tc(0,R,2,1,"ng-container",0),2&t&&b.ic("ngIf",e.plantVariableState)},directives:[y.l],styles:[""]}),t})();const x=b.Vb(_);let I=(()=>{class t extends C{constructor(t,e){super(t),this.plantRepositoryService=t,this.plantAPIService=e,this._editing=!1}sendVariableToPlant(){const t=this.plantVariableState.name.split("#")[1];this.plantAPIService.sendVariableChangeToPlant(t,this.varValue)}get varValue(){return this._editing?this._varValue:this.plantVariableState.value}set varValue(t){this._varValue=t}set varValueBool(t){this.plantVariableState.value=t?"1":"0"}startEditing(){this._varValue=this.varValue,this._editing=!0}endEditing(){this.plantVariableState.value=this._varValue,this._editing=!1}}return t.ɵfac=function(e){return new(e||t)(b.Mb(P),b.Mb(O))},t.ɵcmp=b.Gb({type:t,selectors:[["ng-component"]],features:[b.wb],decls:0,vars:0,template:function(t,e){},encapsulation:2}),t})();var k=n("3Pt+");let z=(()=>{class t extends I{onBlur(){this.varValue!==this.plantVariableState.value&&this.sendVariableToPlant(),this.endEditing()}onFocus(){this.startEditing()}}return t.ɵfac=function(e){return N(e||t)},t.ɵcmp=b.Gb({type:t,selectors:[["app-variable-element-input"]],features:[b.wb],decls:1,vars:2,consts:[["type","text",1,"variable-input",3,"id","ngModel","ngModelChange","blur","focus"]],template:function(t,e){1&t&&(b.Tb(0,"input",0),b.bc("ngModelChange",(function(t){return e.varValue=t}))("blur",(function(t){return e.onBlur()}))("focus",(function(t){return e.onFocus()})),b.Rb()),2&t&&(b.jc("id",e.plantVariableState.name),b.ic("ngModel",e.varValue))},directives:[k.b,k.d,k.e],styles:[".variable-input[_ngcontent-%COMP%]{width:3em;font-family:cursive;color:#0000cd}"]}),t})();const N=b.Vb(z);function j(t,e){if(1&t&&(b.Qb(0),b.uc(1),b.Pb()),2&t){const t=b.dc();b.zb(1),b.vc(t.varValue)}}let U=(()=>{class t extends C{}return t.ɵfac=function(e){return F(e||t)},t.ɵcmp=b.Gb({type:t,selectors:[["app-variable-element-monitor"]],features:[b.wb],decls:1,vars:1,consts:[[4,"ngIf"]],template:function(t,e){1&t&&b.tc(0,j,2,1,"ng-container",0),2&t&&b.ic("ngIf",e.plantVariableState)},directives:[y.l],styles:[".variable-monitor[_ngcontent-%COMP%]{width:3em}"]}),t})();const F=b.Vb(U);let D=(()=>{class t extends C{get varValue(){return new Date(864e5*parseInt(this.plantVariableState.value,10)).toLocaleDateString()}}return t.ɵfac=function(e){return L(e||t)},t.ɵcmp=b.Gb({type:t,selectors:[["app-variable-element-date"]],features:[b.wb],decls:2,vars:2,consts:[[1,"variable-monitor",3,"id"]],template:function(t,e){1&t&&(b.Tb(0,"span",0),b.uc(1),b.Rb()),2&t&&(b.jc("id",e.plantVariableState.name),b.zb(1),b.vc(e.varValue))},styles:[".variable-monitor[_ngcontent-%COMP%]{width:3em}"]}),t})();const L=b.Vb(D);let G=(()=>{class t extends C{get varValue(){return new Date(1e3*parseInt(this.plantVariableState.value,10)).toLocaleTimeString()}}return t.ɵfac=function(e){return E(e||t)},t.ɵcmp=b.Gb({type:t,selectors:[["app-variable-element-time"]],features:[b.wb],decls:2,vars:2,consts:[[1,"variable-monitor",3,"id"]],template:function(t,e){1&t&&(b.Tb(0,"span",0),b.uc(1),b.Rb()),2&t&&(b.jc("id",e.plantVariableState.name),b.zb(1),b.vc(e.varValue))},styles:[".variable-monitor[_ngcontent-%COMP%]{width:3em}"]}),t})();const E=b.Vb(G);function W(t,e){if(1&t&&b.Nb(0,"img",1),2&t){const t=b.dc();b.jc("id",t.plantVariableState.name)}}let J=(()=>{class t extends C{}return t.ɵfac=function(e){return K(e||t)},t.ɵcmp=b.Gb({type:t,selectors:[["app-variable-element-alarm"]],features:[b.wb],decls:1,vars:1,consts:[["class","variable-alarm","src","/alarm.svg",3,"id",4,"ngIf"],["src","/alarm.svg",1,"variable-alarm",3,"id"]],template:function(t,e){1&t&&b.tc(0,W,1,1,"img",0),2&t&&b.ic("ngIf",e.varValue>"0")},directives:[y.l],styles:[".variable-alarm[_ngcontent-%COMP%]{width:1em;height:1em}"]}),t})();const K=b.Vb(J);let q=(()=>{class t extends C{}return t.ɵfac=function(e){return B(e||t)},t.ɵcmp=b.Gb({type:t,selectors:[["app-variable-element-indicator"]],features:[b.wb],decls:1,vars:1,consts:[["type","radio","disabled","",1,"variable-input",3,"checked"]],template:function(t,e){1&t&&b.Nb(0,"input",0),2&t&&b.ic("checked",e.varValueBool)},styles:[".variable-input[_ngcontent-%COMP%]{width:3em;font-family:cursive;color:#0000cd}"]}),t})();const B=b.Vb(q);let A=(()=>{class t extends I{}return t.ɵfac=function(e){return X(e||t)},t.ɵcmp=b.Gb({type:t,selectors:[["app-variable-element-checkbox"]],features:[b.wb],decls:1,vars:1,consts:[["type","checkbox",1,"variable-input",3,"ngModel","ngModelChange","change"]],template:function(t,e){1&t&&(b.Tb(0,"input",0),b.bc("ngModelChange",(function(t){return e.varValueBool=t}))("change",(function(t){return e.sendVariableToPlant()})),b.Rb()),2&t&&b.ic("ngModel",e.varValueBool)},directives:[k.a,k.d,k.e],styles:[".variable-input[_ngcontent-%COMP%]{width:3em;font-family:cursive;color:#0000cd}"]}),t})();const X=b.Vb(A),$=["*"];let Q=(()=>{class t extends C{}return t.ɵfac=function(e){return Y(e||t)},t.ɵcmp=b.Gb({type:t,selectors:[["app-variable-element-bar"]],features:[b.wb],ngContentSelectors:$,decls:3,vars:1,consts:[["id","outer"],["id","inner"]],template:function(t,e){1&t&&(b.hc(),b.Tb(0,"div",0),b.Nb(1,"div",1),b.gc(2),b.Rb()),2&t&&(b.zb(1),b.sc("height",e.varValue,"%"))},styles:["[_nghost-%COMP%]{height:100%}.filled[_ngcontent-%COMP%]{background-color:#00f;position:absolute;bottom:0}#outer[_ngcontent-%COMP%]{width:100%;height:100%;border:2px solid #ccc;background-color:#87cefa;overflow:hidden;position:relative;border-radius:4px}#inner[_ngcontent-%COMP%]{width:100%;overflow:hidden;left:-2px;position:absolute;border:2px solid #00f;border-top-width:0;background-color:#00f;bottom:0}"]}),t})();const Y=b.Vb(Q);let H=(()=>{class t{constructor(t){this.componentFactoryResolver=t}createComponent(t,e,n){const a=this.componentFactoryResolver.resolveComponentFactory(n[e]);return t.clear(),t.createComponent(a).instance}}return t.ɵfac=function(e){return new(e||t)(b.Xb(b.j))},t.ɵprov=b.Ib({token:t,factory:t.ɵfac}),t})();const Z=["container"],tt=["app-variable-display-element",""];let et=(()=>{class t extends C{constructor(t,e){super(t),this.plantRepositoryService=t,this.dynamicComponentLoader=e,this.templateMapper={monitor:U,date:D,time:G,alarm:J,indicator:q,input:z,checkbox:A,bar:Q}}set displayType(t){this._displayType=t}get displayType(){return this._displayType||this.plantVariableState.valtype}ngOnInit(){this.updateComponent()}updateComponent(){this.plantVariableState&&(this.dynamicComponentLoader.createComponent(this.container,this.getComponentForType(this.displayType),this.templateMapper).plantVariableState=this.plantVariableState)}onPlantVariableState(){this.updateComponent()}getComponentForType(t){return t&&this.templateMapper[t]||(t="monitor"),t}}return t.ɵfac=function(e){return new(e||t)(b.Mb(P),b.Mb(H))},t.ɵcmp=b.Gb({type:t,selectors:[["","app-variable-display-element",""]],viewQuery:function(t,e){var n;1&t&&b.qc(Z,!0,b.N),2&t&&b.mc(n=b.cc())&&(e.container=n.first)},inputs:{displayType:"displayType"},features:[b.wb],attrs:tt,decls:2,vars:0,consts:[["container",""]],template:function(t,e){1&t&&b.Ob(0,null,0)},styles:["[_nghost-%COMP%]{font-family:cursive;color:#0000cd}"]}),t})();function nt(t,e){if(1&t&&(b.Tb(0,"tr"),b.Nb(1,"td",5),b.Nb(2,"td",6),b.Rb()),2&t){const t=e.$implicit;b.zb(1),b.ic("plantVariableState",t),b.zb(1),b.ic("plantVariableState",t)}}function at(t,e){if(1&t&&(b.Qb(0),b.Tb(1,"table",3),b.Tb(2,"tbody"),b.tc(3,nt,3,2,"tr",4),b.ec(4,"async"),b.Rb(),b.Rb(),b.Pb()),2&t){const t=b.dc();b.zb(3),b.ic("ngForOf",b.fc(4,1,t.plantVariablesSection).vars)}}function it(t,e){if(1&t){const t=b.Ub();b.Tb(0,"button",9),b.bc("click",(function(n){b.nc(t);const a=e.$implicit;return b.dc(2).plantCommandClick(a.command)})),b.uc(1),b.Rb()}if(2&t){const t=e.$implicit;b.zb(1),b.vc(t.descr)}}function rt(t,e){if(1&t&&(b.Qb(0,7),b.tc(1,it,2,1,"button",8),b.ec(2,"async"),b.Pb()),2&t){const t=b.dc();b.zb(1),b.ic("ngForOf",b.fc(2,1,t.plantVariablesSection).commands)}}let ot=(()=>{class t{constructor(t,e,n,a){this.plantRepositoryService=t,this.plantAPIService=e,this.dialogRef=n,this.data=a,this.section=a.section}ngOnInit(){this.plantVariablesSection=this.plantRepositoryService.getSection(this.section)}plantCommandClick(t){this.plantAPIService.sendEvent(t),this.dialogRef.close()}}return t.ɵfac=function(e){return new(e||t)(b.Mb(P),b.Mb(O),b.Mb(p.f),b.Mb(p.a))},t.ɵcmp=b.Gb({type:t,selectors:[["section-view-dialog"]],inputs:{section:"section"},decls:9,vars:9,consts:[["mat-dialog-title",""],[4,"ngIf"],["class","center-children",4,"ngIf"],[1,"table-detail"],[4,"ngFor","ngForOf"],["app-variable-display-element-descr","",3,"plantVariableState"],["app-variable-display-element","",3,"plantVariableState"],[1,"center-children"],["class","mat-raised-button",3,"click",4,"ngFor","ngForOf"],[1,"mat-raised-button",3,"click"]],template:function(t,e){1&t&&(b.Tb(0,"h2",0),b.uc(1),b.ec(2,"async"),b.Rb(),b.Tb(3,"mat-dialog-content"),b.tc(4,at,5,3,"ng-container",1),b.ec(5,"async"),b.Rb(),b.Tb(6,"mat-dialog-actions"),b.tc(7,rt,3,3,"ng-container",2),b.ec(8,"async"),b.Rb()),2&t&&(b.zb(1),b.vc(b.fc(2,3,e.plantVariablesSection).descr),b.zb(3),b.ic("ngIf",b.fc(5,5,e.plantVariablesSection)),b.zb(3),b.ic("ngIf",b.fc(8,7,e.plantVariablesSection).commands))},directives:[p.g,p.d,y.l,p.c,y.k,_,et],pipes:[y.b],styles:[""]}),t})();var st=n("zkoq"),ct=n("Wp6s"),lt=n("bTqV"),pt=n("NFeN");function bt(t,e){if(1&t&&(b.Tb(0,"div",15),b.Nb(1,"span",16),b.uc(2,"  "),b.Nb(3,"span",17),b.uc(4,"  "),b.Tb(5,"mat-icon",18),b.uc(6,"open_in_new"),b.Rb(),b.Rb()),2&t){const t=b.dc().$implicit;b.zb(1),b.ic("plantVariableState",t),b.zb(2),b.ic("plantVariableState",t)}}function dt(t,e){if(1&t&&(b.Qb(0),b.tc(1,bt,7,2,"div",14),b.Pb()),2&t){const t=e.$implicit;b.zb(1),b.ic("ngIf","0"!==t.value)}}function ut(t,e){if(1&t){const t=b.Ub();b.Tb(0,"mat-grid-tile"),b.Tb(1,"mat-card"),b.Tb(2,"mat-card-content"),b.Tb(3,"button",12),b.bc("click",(function(e){return b.nc(t),b.dc().openSectionDialog("alarms")})),b.tc(4,dt,2,1,"ng-container",13),b.ec(5,"async"),b.Rb(),b.Rb(),b.Rb(),b.Rb()}if(2&t){const t=b.dc();b.zb(4),b.ic("ngForOf",b.fc(5,1,t.alarmsSection).vars)}}const ht="alarms";let mt=(()=>{class t extends l{constructor(t,e){super(),this.plantRepositoryService=t,this.dialog=e,this._alarmPresent=!1,this.moistureLevel=new c,this.maxMoistureLevel=new c}ngOnInit(){this.setVars()}ngOnDestroy(){this.alarmsSubscription.unsubscribe()}setVars(){return Object(o.a)(this,void 0,void 0,(function*(){this.maxMoistureLevel=yield this.plantRepositoryService.getVarByName("Config#MoistureLow"),this.lastWateringDate=yield this.plantRepositoryService.getVarByName("DT#YMD"),this.alarmsSection=this.plantRepositoryService.getSection(ht),this.alarmsSubscription=this.alarmsSection.subscribe(t=>{let e=!1;t&&(t.vars.forEach(t=>{t&&parseInt(t.value,10)>0&&(e=!0)}),this._alarmPresent=e)})}))}openSectionDialog(t){this.dialog.open(ot,{data:{section:t}})}get lastWateredAgo(){if(!this.lastWateringDate||!this.lastWateringDate.value)return"";const t=parseInt(this.lastWateringDate.value,10),e=Math.floor((new Date).getTime()/864e5);return t===e?"Today":t+1===e?"Yesterday":(e-t).toLocaleString()+" days ago"}get alarmPresent(){return this._alarmPresent}}return t.ɵfac=function(e){return new(e||t)(b.Mb(P),b.Mb(p.b))},t.ɵcmp=b.Gb({type:t,selectors:[["app-flower-view"]],features:[b.wb],decls:36,vars:12,consts:[["id","bar-container"],[1,"moisture",3,"plantVariableName"],[1,"max-moi-lev"],["cols","1","rowHeight","fit",1,"dashboard-grid"],[4,"ngIf"],["app-variable-display-element-descr","",3,"plantVariableName"],["app-variable-display-element","",1,"mainparam",3,"plantVariableName"],[1,"mainparam"],["app-variable-display-element","",1,"extparam",3,"plantVariableName"],["mat-button","","color","primary",1,"mat-card-content-inner",3,"click"],["app-variable-display-element","",1,"mainparam",3,"plantVariableName","displayType"],["aria-hidden","true","role","img",1,"mainparam","notranslate","material-icons","mat-icon-no-color","content-icon"],["mat-button","","color","warn",3,"click"],[4,"ngFor","ngForOf"],["class","warn",4,"ngIf"],[1,"warn"],["app-variable-display-element","",1,"warn",3,"plantVariableState"],["app-variable-display-element-descr","",1,"warn",3,"plantVariableState"],["aria-hidden","true","role","img",1,"notranslate","material-icons","mat-icon-no-color","warn","content-icon"]],template:function(t,e){1&t&&(b.Tb(0,"div",0),b.Tb(1,"app-variable-element-bar",1),b.Tb(2,"div",2),b.uc(3,"___"),b.Rb(),b.Rb(),b.Rb(),b.Tb(4,"mat-grid-list",3),b.tc(5,ut,6,3,"mat-grid-tile",4),b.Tb(6,"mat-grid-tile"),b.Tb(7,"mat-card"),b.Tb(8,"mat-card-header"),b.Tb(9,"mat-card-title"),b.Nb(10,"div",5),b.Rb(),b.Rb(),b.Tb(11,"mat-card-content"),b.Nb(12,"div",6),b.Rb(),b.Rb(),b.Rb(),b.Tb(13,"mat-grid-tile"),b.Tb(14,"mat-card"),b.Tb(15,"mat-card-header"),b.Tb(16,"mat-card-title"),b.Nb(17,"div",5),b.Rb(),b.Rb(),b.Tb(18,"mat-card-content"),b.Tb(19,"div"),b.Tb(20,"div",7),b.uc(21),b.Rb(),b.Tb(22,"div"),b.Nb(23,"span",8),b.uc(24,"  "),b.Nb(25,"span",8),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Tb(26,"mat-grid-tile"),b.Tb(27,"mat-card"),b.Tb(28,"mat-card-header"),b.Nb(29,"mat-card-title",5),b.Rb(),b.Tb(30,"mat-card-content"),b.Tb(31,"button",9),b.bc("click",(function(t){return e.openSectionDialog("mainconfig")})),b.Nb(32,"span",10),b.uc(33,"  "),b.Tb(34,"mat-icon",11),b.uc(35,"open_in_new"),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb()),2&t&&(b.zb(1),b.ic("plantVariableName","Moisture#Value"),b.zb(1),b.sc("bottom",e.maxMoistureLevel.value,"%"),b.zb(3),b.ic("ngIf",e.alarmPresent),b.zb(5),b.ic("plantVariableName","Moisture#Value"),b.zb(2),b.ic("plantVariableName","Moisture#Value"),b.zb(5),b.ic("plantVariableName","DT#YMD"),b.zb(4),b.vc(e.lastWateredAgo),b.zb(2),b.ic("plantVariableName","DT#YMD"),b.zb(2),b.ic("plantVariableName","DT#HMS"),b.zb(4),b.ic("plantVariableName","Config#MoistureLow"),b.zb(3),b.ic("plantVariableName","Config#MoistureLow")("displayType","monitor"))},directives:[Q,st.a,y.l,st.c,ct.a,ct.c,ct.e,_,ct.b,et,lt.a,pt.a,y.k],pipes:[y.b],styles:["[_nghost-%COMP%]{height:100%}#bar-container[_ngcontent-%COMP%]{width:20px;height:100%;float:right;margin-right:10px;display:flex;flex-direction:column}.max-moi-lev[_ngcontent-%COMP%]{color:red;text-decoration:underline;font-weight:bolder;width:100%;position:absolute;text-align:center}.moisture[_ngcontent-%COMP%]{display:flex;flex-flow:column;flex-grow:1;padding-bottom:10px}.maincontent[_ngcontent-%COMP%]{width:calc(100% - 50px);float:left;display:flex;flex-direction:column}.mainparam[_ngcontent-%COMP%]{font-size:3rem;text-align:center;font-weight:700;color:#00b600}.extparam[_ngcontent-%COMP%]{text-align:center;font-weight:700;font-size:1.5rem;color:green}.grid-container[_ngcontent-%COMP%]{margin:20px}.dashboard-grid[_ngcontent-%COMP%]{height:100%}.dashboard-grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]{position:absolute;top:0;left:15px;right:50px;bottom:15px;padding:0;background-color:rgba(0,0,50,.05);border-radius:10px;display:flex;flex-direction:column}.mat-card-content-with-footer[_ngcontent-%COMP%]{padding-bottom:0!important;margin-bottom:0!important}.dashboard-grid[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]{text-align:center;flex:1;display:flex;align-items:center;justify-content:center;padding-bottom:20px}.dashboard-grid[_ngcontent-%COMP%]   mat-card-footer[_ngcontent-%COMP%], .dashboard-grid[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]{background-color:rgba(0,0,50,.1);border-radius:10px}.dashboard-grid[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]{border-bottom-right-radius:0;border-bottom-left-radius:0}.dashboard-grid[_ngcontent-%COMP%]   mat-card-footer[_ngcontent-%COMP%]{border-top-left-radius:0;border-top-right-radius:0;margin:0}.dashboard-grid[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]{font-size:1.5rem;margin-bottom:10px;margin-top:10px;color:#0000cd}.dashboard-grid[_ngcontent-%COMP%]   mat-card-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;text-align:right}.warn[_ngcontent-%COMP%]{font-size:3rem;text-align:center;font-weight:700;color:red}.content-icon[_ngcontent-%COMP%]{height:auto;width:auto}.mat-card-content-inner[_ngcontent-%COMP%]{width:100%;height:100%}"]}),t})();var ft=n("l5mm"),gt=n("1G5W");class vt{get wantUpdate(){if(!this.oldVersion||!this.newVersion)return!1;const t=this.oldVersion.split("."),e=this.newVersion.split(".");let n=!1;for(let a=0;a<t.length&&a<e.length;a++)if(t[a]<e[a]){n=!0;break}return n}}let yt=(()=>{class t extends h{constructor(t,e){super(),this.plantAPIService=t,this.http=e,this.updateInfo=new vt,this.LoadWareInfos()}LoadWareInfos(){this.http.get("/updater.json").toPromise().then(t=>{this.currentWare=t,this.http.get(this.currentWare.updateurl+"updater.json").toPromise().then(t=>{this.serverWare=t,this.setUpdateInfo()})})}setUpdateInfo(){this.updateInfo.newVersion=this.serverWare.version,this.updateInfo.oldVersion=this.currentWare.version,this.updateInfo.wantUpdate&&(this.updateInfo.filelist=[],this.serverWare.filelist.forEach(t=>{const e=this.currentWare.filelist.find(({path:e})=>e===t.path),n={path:t.path,descr:t.descr,files:[],hint:t.hint};this.updateInfo.filelist.push(n),t.files.forEach(t=>{let a,i=!e;i||(a=e.files.find(({name:e})=>e===t.name),i=i||!a||a.timestamp<t.timestamp),i&&n.files.push({updated:!1,oldFile:a,newFile:t})})})),this.changed(this.updateInfo)}doUpdate(){return Object(o.a)(this,void 0,void 0,(function*(){for(let t of this.updateInfo.filelist)for(let e of t.files){let n=yield this.http.get(this.serverWare.updateurl+e.newFile.name,{responseType:"blob"}).toPromise();yield this.plantAPIService.postFile(t.path,e.newFile.name,n)}}))}}return t.ɵfac=function(e){return new(e||t)(b.Xb(O),b.Xb(i.a))},t.ɵprov=b.Ib({token:t,factory:t.ɵfac}),t})();const wt=function(t){return{"upload-updated":t}};function Vt(t,e){if(1&t&&(b.Tb(0,"div",10),b.uc(1),b.Rb()),2&t){const t=e.$implicit;b.ic("ngClass",b.lc(2,wt,t.updated)),b.zb(1),b.wc(" ",t.newFile.name," ")}}function St(t,e){if(1&t&&(b.Tb(0,"div"),b.Tb(1,"div",6),b.uc(2),b.Rb(),b.Tb(3,"div",7),b.uc(4),b.Rb(),b.Tb(5,"div",8),b.tc(6,Vt,2,4,"div",9),b.Rb(),b.Rb()),2&t){const t=e.$implicit;b.zb(2),b.vc(t.descr),b.zb(2),b.vc(t.hint),b.zb(2),b.ic("ngForOf",t.files)}}function Mt(t,e){if(1&t&&(b.Tb(0,"div"),b.Tb(1,"div",4),b.uc(2),b.Rb(),b.Tb(3,"div"),b.uc(4),b.Rb(),b.tc(5,St,7,3,"div",5),b.Rb()),2&t){const t=b.dc();b.zb(2),b.wc("Current version: ",t.updateInfo.oldVersion,""),b.zb(2),b.wc("New version: ",t.updateInfo.newVersion,""),b.zb(1),b.ic("ngForOf",t.updateInfo.filelist)}}function Pt(t,e){1&t&&(b.Tb(0,"h2"),b.uc(1,"Update is in progress..."),b.Rb())}function Ot(t,e){if(1&t){const t=b.Ub();b.Tb(0,"button",11),b.bc("click",(function(e){return b.nc(t),b.dc().onClick()})),b.uc(1,"Update"),b.Rb()}}function Ct(t,e){if(1&t&&(b.Tb(0,"h3"),b.uc(1),b.Rb()),2&t){const t=b.dc();b.zb(1),b.wc("Update completed. Reload in ",t.countDown," seconds...")}}var Tt=function(t){return t[t.NoUpdate=0]="NoUpdate",t[t.ReadyForUpdate=1]="ReadyForUpdate",t[t.UpdateInProgress=2]="UpdateInProgress",t[t.UpdateComplete=3]="UpdateComplete",t}({});let Rt=(()=>{class t extends l{constructor(t){super(),this.plantwareUpdaterService=t,this.updateStatus=Tt.NoUpdate,this.countDown=10,this.UpdateStatus=Tt}ngOnInit(){this.plantwareUpdaterService.getData().subscribe(t=>{t&&(this.updateInfo=t,this.updateStatus=t.wantUpdate?Tt.ReadyForUpdate:Tt.NoUpdate)})}onClick(){this.doUpdate()}doUpdate(){this.updateStatus=Tt.UpdateInProgress,this.plantwareUpdaterService.doUpdate().then(()=>{this.updateStatus=Tt.UpdateComplete,this.reloadUI()})}reloadUI(){const t=Object(d.a)(1e3*this.countDown);Object(ft.a)(1e3).pipe(Object(gt.a)(t)).subscribe(()=>this.countDown--),t.subscribe(()=>{console.log("reload"),location.href=""})}}return t.ɵfac=function(e){return new(e||t)(b.Mb(yt))},t.ɵcmp=b.Gb({type:t,selectors:[["app-update-view"]],features:[b.wb],decls:5,vars:5,consts:[[4,"ngIf"],[1,"center-children","update-status",3,"ngSwitch"],[4,"ngSwitchCase"],[3,"click",4,"ngSwitchCase"],[1,"padding-top"],[4,"ngFor","ngForOf"],[1,"update-descr","padding-top"],[1,"update-hint"],[1,"update-files"],["class","update-file",3,"ngClass",4,"ngFor","ngForOf"],[1,"update-file",3,"ngClass"],[3,"click"]],template:function(t,e){1&t&&(b.tc(0,Mt,6,3,"div",0),b.Tb(1,"div",1),b.tc(2,Pt,2,0,"h2",2),b.tc(3,Ot,2,0,"button",3),b.tc(4,Ct,2,1,"h3",2),b.Rb()),2&t&&(b.ic("ngIf",e.updateInfo),b.zb(1),b.ic("ngSwitch",e.updateStatus),b.zb(1),b.ic("ngSwitchCase",e.UpdateStatus.UpdateInProgress),b.zb(1),b.ic("ngSwitchCase",e.UpdateStatus.ReadyForUpdate),b.zb(1),b.ic("ngSwitchCase",e.UpdateStatus.UpdateComplete))},directives:[y.l,y.m,y.n,y.k,y.i],styles:[".upload-progress[_ngcontent-%COMP%]{width:100%}.padding-top[_ngcontent-%COMP%]{padding-top:1em}.upload-updated[_ngcontent-%COMP%]{background-color:gray}.upload-disabled-ui[_ngcontent-%COMP%]{pointer-events:none}.update-descr[_ngcontent-%COMP%]{font-weight:700}.update-hint[_ngcontent-%COMP%]{font-style:italic}.update-status[_ngcontent-%COMP%]{padding-top:1em}.update-files[_ngcontent-%COMP%]{padding-top:.5em}.update-file[_ngcontent-%COMP%]{padding-bottom:.5em}"]}),t})();const _t=["app-section-part",""];function xt(t,e){if(1&t&&(b.Tb(0,"tr"),b.Nb(1,"td",3),b.Nb(2,"td",4),b.Rb()),2&t){const t=e.$implicit;b.zb(1),b.ic("plantVariableState",t),b.zb(1),b.ic("plantVariableState",t)}}function It(t,e){if(1&t&&(b.Qb(0),b.Tb(1,"table",1),b.Tb(2,"tbody"),b.tc(3,xt,3,2,"tr",2),b.ec(4,"async"),b.Rb(),b.Rb(),b.Pb()),2&t){const t=b.dc();b.zb(3),b.ic("ngForOf",b.fc(4,1,t.plantVariablesSection).vars)}}let kt=(()=>{class t extends l{constructor(t,e){super(),this.plantRepositoryService=t,this.plantAPIService=e}ngOnInit(){this.plantVariablesSection=this.plantRepositoryService.getSection(this.section)}plantCommandClick(t){this.plantAPIService.sendEvent(t)}}return t.ɵfac=function(e){return new(e||t)(b.Mb(P),b.Mb(O))},t.ɵcmp=b.Gb({type:t,selectors:[["","app-section-part",""]],inputs:{section:"section"},features:[b.wb],attrs:_t,decls:2,vars:3,consts:[[4,"ngIf"],[1,"table-detail"],[4,"ngFor","ngForOf"],["app-variable-display-element-descr","",3,"plantVariableState"],["app-variable-display-element","",1,"advanced-value",3,"plantVariableState"]],template:function(t,e){1&t&&(b.tc(0,It,5,3,"ng-container",0),b.ec(1,"async")),2&t&&b.ic("ngIf",b.fc(1,1,e.plantVariablesSection))},directives:[y.l,y.k,_,et],pipes:[y.b],styles:["tr[_ngcontent-%COMP%]{width:100%}.table-detail[_ngcontent-%COMP%]{border-spacing:0 10px}.advanced-value[_ngcontent-%COMP%]{float:right}"]}),t})(),zt=(()=>{class t extends l{ngOnInit(){}}return t.ɵfac=function(e){return Nt(e||t)},t.ɵcmp=b.Gb({type:t,selectors:[["app-flower-view"]],features:[b.wb],decls:2,vars:0,consts:[["app-section-part","","section","advanced"],["app-section-part","","section","alarmconfig"]],template:function(t,e){1&t&&(b.Nb(0,"div",0),b.Nb(1,"div",1))},directives:[kt],styles:["[_nghost-%COMP%]{height:100%}#flower-container[_ngcontent-%COMP%]{height:100%;width:100%;background-image:url(/flower.svg);background-repeat:no-repeat;background-size:contain;opacity:.3}#bar-container[_ngcontent-%COMP%]{width:30px;height:100%;float:right;margin-right:10px;display:flex;flex-direction:column}.max-moi-lev[_ngcontent-%COMP%]{color:red;text-decoration:underline;font-weight:bolder;width:100%;position:absolute;text-align:center}.moisture[_ngcontent-%COMP%]{display:flex;flex-flow:column;padding-top:10px;flex-grow:1;padding-bottom:10px}"]}),t})();const Nt=b.Vb(zt);function jt(t,e){1&t&&b.Ob(0)}const Ut=[{path:"",component:(()=>{class t{constructor(t){this.route=t,this.templateMapper={flower:mt,advanced:zt,update:Rt}}ngOnInit(){this.route.queryParamMap.subscribe(t=>{this.pageComponent=this.getComponentForType(t.keys[0]||"flower")})}getComponentForType(t){return this.templateMapper[t]}}return t.ɵfac=function(e){return new(e||t)(b.Mb(r.a))},t.ɵcmp=b.Gb({type:t,selectors:[["app-main-view"]],decls:1,vars:1,consts:[[4,"ngComponentOutlet"]],template:function(t,e){1&t&&b.tc(0,jt,1,0,"ng-container",0),2&t&&b.ic("ngComponentOutlet",e.pageComponent)},directives:[y.j],styles:["[_nghost-%COMP%]{height:100%;width:100%;background-image:linear-gradient(rgba(255,255,255,.9),rgba(255,255,255,.9)),url(/flower.svg);background-repeat:no-repeat;background-size:contain;background-position:center center}"]}),t})()}];let Ft=(()=>{class t{}return t.ɵmod=b.Kb({type:t}),t.ɵinj=b.Jb({factory:function(e){return new(e||t)},imports:[[r.c.forRoot(Ut)],r.c]}),t})();const Dt=function(){return["/"]},Lt=function(){return{update:""}};function Gt(t,e){1&t&&(b.Tb(0,"span"),b.Tb(1,"a",3),b.Tb(2,"mat-icon",2),b.uc(3,"system_update"),b.Rb(),b.Rb(),b.Rb()),2&t&&(b.zb(1),b.ic("routerLink",b.kc(2,Dt))("queryParams",b.kc(3,Lt)))}const Et=function(){return{advanced:""}};let Wt=(()=>{class t{constructor(t){this.plantwareUpdaterService=t,this.title="PlantStation",this.wantUpdate=!1,this.plantwareUpdaterService.getData().subscribe(t=>{t&&(this.wantUpdate=t.wantUpdate)})}}return t.ɵfac=function(e){return new(e||t)(b.Mb(yt))},t.ɵcmp=b.Gb({type:t,selectors:[["app-root"]],decls:11,vars:7,consts:[[1,"wrapper"],[3,"routerLink"],["aria-hidden","true","role","img",1,"main-icon","notranslate","material-icons","mat-icon-no-color"],[3,"routerLink","queryParams"],[4,"ngIf"]],template:function(t,e){1&t&&(b.Tb(0,"div",0),b.Tb(1,"nav"),b.Tb(2,"a",1),b.Tb(3,"mat-icon",2),b.uc(4,"local_florist"),b.Rb(),b.Rb(),b.Tb(5,"a",3),b.Tb(6,"mat-icon",2),b.uc(7,"build"),b.Rb(),b.Rb(),b.tc(8,Gt,4,4,"span",4),b.Rb(),b.Tb(9,"main"),b.Nb(10,"router-outlet"),b.Rb(),b.Rb()),2&t&&(b.zb(2),b.ic("routerLink",b.kc(4,Dt)),b.zb(3),b.ic("routerLink",b.kc(5,Dt))("queryParams",b.kc(6,Et)),b.zb(3),b.ic("ngIf",e.wantUpdate))},directives:[r.b,pt.a,y.l,r.d],styles:[".link-main[_ngcontent-%COMP%]{width:1em;height:1em}.main-icon[_ngcontent-%COMP%]{height:40px;width:40px;font-size:3rem;color:#00f}"]}),t})(),Jt=(()=>{class t{static forRoot(){return{ngModule:t,providers:[M]}}}return t.ɵmod=b.Kb({type:t}),t.ɵinj=b.Jb({factory:function(e){return new(e||t)},imports:[[y.c,w]]}),t})(),Kt=(()=>{class t{static forRoot(){return{ngModule:t,providers:[P]}}}return t.ɵmod=b.Kb({type:t}),t.ɵinj=b.Jb({factory:function(e){return new(e||t)},imports:[[y.c,Jt.forRoot(),V,w]]}),t})(),qt=(()=>{class t{}return t.ɵmod=b.Kb({type:t}),t.ɵinj=b.Jb({factory:function(e){return new(e||t)},imports:[[y.c]]}),t})(),Bt=(()=>{class t{static forRoot(){return{ngModule:t,providers:[yt]}}}return t.ɵmod=b.Kb({type:t}),t.ɵinj=b.Jb({factory:function(e){return new(e||t)},imports:[[y.c,qt]]}),t})(),At=(()=>{class t{static forRoot(){return{ngModule:t,providers:[O]}}}return t.ɵmod=b.Kb({type:t}),t.ɵinj=b.Jb({factory:function(e){return new(e||t)},providers:[],imports:[[y.c]]}),t})(),Xt=(()=>{class t{}return t.ɵmod=b.Kb({type:t}),t.ɵinj=b.Jb({factory:function(e){return new(e||t)},imports:[[y.c,k.c]]}),t})();var $t=n("R1ws");let Qt=(()=>{class t{}return t.ɵmod=b.Kb({type:t}),t.ɵinj=b.Jb({factory:function(e){return new(e||t)},imports:[[y.c,p.e,Xt]]}),t})(),Yt=(()=>{class t{}return t.ɵmod=b.Kb({type:t}),t.ɵinj=b.Jb({factory:function(e){return new(e||t)},imports:[[y.c,Xt]]}),t})(),Ht=(()=>{class t{}return t.ɵmod=b.Kb({type:t}),t.ɵinj=b.Jb({factory:function(e){return new(e||t)},imports:[[y.c,Xt,qt,Qt,Yt,$t.b,st.b,ct.d,p.e,pt.b,lt.b]]}),t})(),Zt=(()=>{class t{static forRoot(){return{ngModule:t,providers:[H]}}}return t.ɵmod=b.Kb({type:t}),t.ɵinj=b.Jb({factory:function(e){return new(e||t)},providers:[],imports:[[y.c]]}),t})(),te=(()=>{class t{}return t.ɵmod=b.Kb({type:t,bootstrap:[Wt]}),t.ɵinj=b.Jb({factory:function(e){return new(e||t)},providers:[],imports:[[a.a,i.b,Ft,Kt.forRoot(),Bt.forRoot(),At.forRoot(),Zt.forRoot(),Xt,Ht,qt,pt.b]]}),t})();(Object(b.R)(),Object(a.d)()).bootstrapModule(te).catch(t=>console.log(t))},zn8P:function(t,e){function n(t){return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}))}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id="zn8P"}},[[0,0,4]]]);