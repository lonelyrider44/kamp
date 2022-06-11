"use strict";(self.webpackChunkangular=self.webpackChunkangular||[]).push([[148],{34148:function(y,C,i){i.r(C),i.d(C,{PrevozModule:function(){return R}});var v=i(43144),h=i(15671),f=i(69808),c=i(74202),e=i(91891),Z=function(){var r=function(){function o(){(0,h.Z)(this,o)}return(0,v.Z)(o,[{key:"ngOnInit",value:function(){}}]),o}();return r.\u0275fac=function(n){return new(n||r)},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-details"]],decls:2,vars:0,template:function(n,t){1&n&&(e.TgZ(0,"p"),e._uU(1,"details works!"),e.qZA())},styles:[""]}),r}(),p=i(63364),s=i(93075),u=i(67322),m=i(77531),z=i(47423);function M(r,o){if(1&r&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&r){var t,n=e.oxw();e.xp6(1),e.hij(" ",null==(t=n.prevozForm.get("ucesnik_id"))||null==t.errors?null:t.errors.serverError," ")}}function k(r,o){if(1&r&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&r){var t,n=e.oxw();e.xp6(1),e.hij(" ",null==(t=n.prevozForm.get("nacin_prevoza_id"))||null==t.errors?null:t.errors.serverError," ")}}function T(r,o){if(1&r&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&r){var t,n=e.oxw();e.xp6(1),e.hij(" ",null==(t=n.prevozForm.get("naplata"))||null==t.errors?null:t.errors.serverError," ")}}function I(r,o){if(1&r&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&r){var t,n=e.oxw();e.xp6(1),e.hij(" ",null==(t=n.prevozForm.get("datum_polaska"))||null==t.errors?null:t.errors.serverError," ")}}function x(r,o){if(1&r&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&r){var t,n=e.oxw();e.xp6(1),e.hij(" ",null==(t=n.prevozForm.get("datum_odlaska"))||null==t.errors?null:t.errors.serverError," ")}}var _=function(){var r=function(){function o(n,t,l,a,d){(0,h.Z)(this,o),this.fb=n,this.router=t,this.activatedRoute=l,this.prevozService=a,this._location=d,this.prevoz={id:-1},this.action="",this.isReadOnly=!1,this.matcher=new S,this.prevozForm=this.fb.group({})}return(0,v.Z)(o,[{key:"ngOnInit",value:function(){var t=this;this.action=this.activatedRoute.snapshot.url[1].path,this.isReadOnly="delete"==this.action,this.activatedRoute.snapshot.url[2]&&this.prevozService.find(this.activatedRoute.snapshot.url[2].path).subscribe(function(l){t.prevoz=l})}},{key:"store",value:function(){var t=this;"unos"==this.action&&this.prevozService.store(this.prevozForm.value).subscribe({next:function(a){t.router.navigateByUrl("/domeni/home")},error:function(a){t.submitFormFailed(t.prevozForm,a)}})}},{key:"update",value:function(){var t=this;"izmena"==this.action&&this.prevozService.update(this.prevoz.id,this.prevozForm.value).subscribe({next:function(a){t.router.navigateByUrl("/domeni/home")},error:function(a){t.submitFormFailed(t.prevozForm,a)}})}},{key:"delete",value:function(){var t=this;"brisanje"==this.action&&this.prevozService.delete(this.prevoz.id).subscribe({next:function(a){t.router.navigateByUrl("/domeni/home")},error:function(a){t.submitFormFailed(t.prevozForm,a)}})}},{key:"submitForm",value:function(){this.store(),this.update(),this.delete()}},{key:"submitFormFailed",value:function(t,l){422===l.status&&Object.keys(l.error.errors).forEach(function(a){var d=t.get(a);d&&d.setErrors({serverError:l.error.errors[a]})})}},{key:"goBack",value:function(){this._location.back()}}]),o}();return r.\u0275fac=function(n){return new(n||r)(e.Y36(s.qu),e.Y36(c.F0),e.Y36(c.gz),e.Y36(p.F),e.Y36(f.Ye))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-form"]],decls:36,vars:10,consts:[[1,"main-content"],[1,"container-fluid"],[1,"row"],[1,"col-md-8"],[1,"card"],[1,"card-header","card-header-danger"],[1,"card-title"],[1,"card-category"],[1,"card-body"],[1,"col-md-6"],[1,"example-full-width"],["matInput","","placeholder","U\u010desnik","formControlName","ucesnik_id",3,"errorStateMatcher"],[4,"ngIf"],["matInput","","placeholder","Na\u010din prevoza","formControlName","nacin_prevoza_id",3,"errorStateMatcher"],["matInput","","placeholder","Naplata","formControlName","naplata",3,"errorStateMatcher"],["matInput","","placeholder","Datum polaska","formControlName","datum_polaska",3,"errorStateMatcher"],["matInput","","placeholder","Datum odlaska","formControlName","datum_odlaska",3,"errorStateMatcher"],["mat-raised-button","","type","submit",1,"btn","btn-danger","pull-right"],[1,"clearfix"]],template:function(n,t){var l,a,d,g,F;1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"h4",6),e._uU(7,"Prevoz"),e.qZA(),e.TgZ(8,"p",7),e._uU(9,"Complete your profile"),e.qZA()(),e.TgZ(10,"div",8)(11,"form")(12,"div",2)(13,"div",9)(14,"mat-form-field",10),e._UZ(15,"input",11),e.YNc(16,M,2,1,"mat-error",12),e.qZA()(),e.TgZ(17,"div",9)(18,"mat-form-field",10),e._UZ(19,"input",13),e.YNc(20,k,2,1,"mat-error",12),e.qZA()(),e.TgZ(21,"div",9)(22,"mat-form-field",10),e._UZ(23,"input",14),e.YNc(24,T,2,1,"mat-error",12),e.qZA()(),e.TgZ(25,"div",9)(26,"mat-form-field",10),e._UZ(27,"input",15),e.YNc(28,I,2,1,"mat-error",12),e.qZA()(),e.TgZ(29,"div",9)(30,"mat-form-field",10),e._UZ(31,"input",16),e.YNc(32,x,2,1,"mat-error",12),e.qZA()()(),e.TgZ(33,"button",17),e._uU(34,"Potvrdi"),e.qZA(),e._UZ(35,"div",18),e.qZA()()()()()()()),2&n&&(e.xp6(15),e.Q6J("errorStateMatcher",t.matcher),e.xp6(1),e.Q6J("ngIf",null==(l=t.prevozForm.get("ucesnik_id"))||null==l.errors?null:l.errors.serverError),e.xp6(3),e.Q6J("errorStateMatcher",t.matcher),e.xp6(1),e.Q6J("ngIf",null==(a=t.prevozForm.get("nacin_prevoza_id"))||null==a.errors?null:a.errors.serverError),e.xp6(3),e.Q6J("errorStateMatcher",t.matcher),e.xp6(1),e.Q6J("ngIf",null==(d=t.prevozForm.get("naplata"))||null==d.errors?null:d.errors.serverError),e.xp6(3),e.Q6J("errorStateMatcher",t.matcher),e.xp6(1),e.Q6J("ngIf",null==(g=t.prevozForm.get("datum_polaska"))||null==g.errors?null:g.errors.serverError),e.xp6(3),e.Q6J("errorStateMatcher",t.matcher),e.xp6(1),e.Q6J("ngIf",null==(F=t.prevozForm.get("datum_odlaska"))||null==F.errors?null:F.errors.serverError))},directives:[s._Y,s.JL,s.F,u.KE,m.Nt,s.Fj,s.JJ,s.u,f.O5,u.TO,z.lW],styles:[""]}),r}(),S=function(){function r(){(0,h.Z)(this,r)}return(0,v.Z)(r,[{key:"isErrorState",value:function(n,t){return n&&n.invalid}}]),r}(),E=i(45687),O=i(72808),U=i(74107),A=i(90508),J=i(5431);function N(r,o){if(1&r&&(e.TgZ(0,"mat-option",16),e._uU(1),e.qZA()),2&r){var n=o.$implicit;e.Q6J("value",n.id),e.xp6(1),e.Oqu(n.naziv)}}function b(r,o){if(1&r&&(e.TgZ(0,"mat-option",16),e._uU(1),e.qZA()),2&r){var n=o.$implicit;e.Q6J("value",n.id),e.xp6(1),e.Oqu(n.naziv)}}var D=[{path:"",pathMatch:"full",component:function(){var r=function(){function o(n,t,l,a){var d=this;(0,h.Z)(this,o),this.router=n,this.prevozService=t,this.kampService=l,this.smenaService=a,this.kampovi=[],this.smene=[],this.kamp_id=null,this.smena_id=null,this.kampService.all().subscribe(function(g){d.kampovi=g})}return(0,v.Z)(o,[{key:"kamp_selected",value:function(t){var l=this;this.smene=this.kampovi.find(function(a){return a.id==l.kamp_id}).smene}},{key:"ngOnInit",value:function(){}}]),o}();return r.\u0275fac=function(n){return new(n||r)(e.Y36(c.F0),e.Y36(p.F),e.Y36(E.f),e.Y36(O.n))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-index"]],decls:19,vars:6,consts:[[1,"main-content"],[1,"container-fluid"],[1,"row"],[1,"col-md-12"],[1,"card"],[1,"card-header","card-header-danger"],[1,"card-title"],[1,"card-category"],[1,"card-body"],["appearance","outline",1,"pull-right","col-md-3"],["placeholder","Izaberite smenu",3,"ngModel","ngModelChange"],["smena",""],[3,"value",4,"ngFor","ngForOf"],["placeholder","Izaberite kamp",3,"ngModel","ngModelChange","selectionChange"],["kamp",""],[3,"kamp_id","smena_id"],[3,"value"]],template:function(n,t){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"h4",6),e._uU(7,"Prevoz "),e.qZA(),e._UZ(8,"p",7),e.qZA(),e.TgZ(9,"div",8)(10,"mat-form-field",9)(11,"mat-select",10,11),e.NdJ("ngModelChange",function(a){return t.smena_id=a}),e.YNc(13,N,2,2,"mat-option",12),e.qZA()(),e.TgZ(14,"mat-form-field",9)(15,"mat-select",13,14),e.NdJ("ngModelChange",function(a){return t.kamp_id=a})("selectionChange",function(a){return t.kamp_selected(a)}),e.YNc(17,b,2,2,"mat-option",12),e.qZA()(),e._UZ(18,"app-prevoz-datatable",15),e.qZA()()()()()()),2&n&&(e.xp6(11),e.Q6J("ngModel",t.smena_id),e.xp6(2),e.Q6J("ngForOf",t.smene),e.xp6(2),e.Q6J("ngModel",t.kamp_id),e.xp6(2),e.Q6J("ngForOf",t.kampovi),e.xp6(1),e.Q6J("kamp_id",t.kamp_id)("smena_id",t.smena_id))},directives:[u.KE,U.gD,s.JJ,s.On,f.sg,A.ey,J.f],styles:[""]}),r}()},{path:"unos",pathMatch:"full",component:_},{path:":prevozId",component:Z},{path:":prevozId/izmena",component:_}],Y=function(){var r=(0,v.Z)(function o(){(0,h.Z)(this,o)});return r.\u0275fac=function(n){return new(n||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[c.Bz.forChild(D)],c.Bz]}),r}(),Q=i(75383),R=function(){var r=(0,v.Z)(function o(){(0,h.Z)(this,o)});return r.\u0275fac=function(n){return new(n||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[f.ez,Y,Q.q,s.u5,s.UX]]}),r}()},72808:function(y,C,i){i.d(C,{n:function(){return Z}});var v=i(15671),h=i(43144),f=i(40520),c=i(92340),e=i(91891),Z=function(){var p=function(){function s(u){(0,v.Z)(this,s),this.httpClient=u,this.httpOptions={headers:new f.WM({"Content-Type":"application/json"})}}return(0,h.Z)(s,[{key:"datatable",value:function(m){return this.httpClient.post("".concat(c.N.api_url,"/datatable/smena"),m)}},{key:"all",value:function(){return this.httpClient.get("".concat(c.N.api_url,"/smena"))}},{key:"find",value:function(m){return this.httpClient.get("".concat(c.N.api_url,"/smena/").concat(m))}},{key:"store",value:function(m){return this.httpClient.post("".concat(c.N.api_url,"/smena"),JSON.stringify(m),this.httpOptions)}},{key:"update",value:function(m,z){return this.httpClient.put("".concat(c.N.api_url,"/smena/").concat(m),JSON.stringify(z),this.httpOptions)}},{key:"delete",value:function(m){return this.httpClient.delete("".concat(c.N.api_url,"/smena/").concat(m),this.httpOptions)}},{key:"ucesnici",value:function(m){return this.httpClient.get("".concat(c.N.api_url,"/smena/").concat(m,"/ucesnici"))}}]),s}();return p.\u0275fac=function(u){return new(u||p)(e.LFG(f.eN))},p.\u0275prov=e.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p}()}}]);