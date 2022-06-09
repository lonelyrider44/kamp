"use strict";(self.webpackChunkangular=self.webpackChunkangular||[]).push([[53],{14053:function(q,g,l){l.r(g),l.d(g,{HotelModule:function(){return j}});var m=l(43144),d=l(15671),h=l(69808),c=l(74202),e=l(91891),C=function(){var r=function(){function n(){(0,d.Z)(this,n)}return(0,m.Z)(n,[{key:"ngOnInit",value:function(){}}]),n}();return r.\u0275fac=function(o){return new(o||r)},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-details"]],decls:2,vars:0,template:function(o,t){1&o&&(e.TgZ(0,"p"),e._uU(1,"details works!"),e.qZA())},styles:[""]}),r}(),Z=l(30494),s=l(93075),v=l(67322),y=l(77531),M=l(47423);function x(r,n){if(1&r&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&r){var t,o=e.oxw();e.xp6(1),e.hij(" ",null==(t=o.hotelForm.get("naziv"))||null==t.errors?null:t.errors.serverError," ")}}function T(r,n){if(1&r&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&r){var t,o=e.oxw();e.xp6(1),e.hij(" ",null==(t=o.hotelForm.get("mesto_id"))||null==t.errors?null:t.errors.serverError," ")}}function I(r,n){if(1&r&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&r){var t,o=e.oxw();e.xp6(1),e.hij(" ",null==(t=o.hotelForm.get("adresa"))||null==t.errors?null:t.errors.serverError," ")}}function A(r,n){if(1&r&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&r){var t,o=e.oxw();e.xp6(1),e.hij(" ",null==(t=o.hotelForm.get("telefon"))||null==t.errors?null:t.errors.serverError," ")}}function k(r,n){if(1&r&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&r){var t,o=e.oxw();e.xp6(1),e.hij(" ",null==(t=o.hotelForm.get("napomena"))||null==t.errors?null:t.errors.serverError," ")}}var F=function(){var r=function(){function n(o,t,i,a,u){(0,d.Z)(this,n),this.fb=o,this.router=t,this.activatedRoute=i,this.hotelService=a,this._location=u,this.hotel={id:-1},this.action="",this.isReadOnly=!1,this.matcher=new J,this.hotelForm=this.fb.group({})}return(0,m.Z)(n,[{key:"ngOnInit",value:function(){var t=this;this.action=this.activatedRoute.snapshot.url[1].path,this.isReadOnly="delete"==this.action,this.activatedRoute.snapshot.url[2]&&this.hotelService.find(this.activatedRoute.snapshot.url[2].path).subscribe(function(i){t.hotel=i})}},{key:"store",value:function(){var t=this;"unos"==this.action&&this.hotelService.store(this.hotelForm.value).subscribe({next:function(a){t.router.navigateByUrl("/domeni/home")},error:function(a){t.submitFormFailed(t.hotelForm,a)}})}},{key:"update",value:function(){var t=this;"izmena"==this.action&&this.hotelService.update(this.hotel.id,this.hotelForm.value).subscribe({next:function(a){t.router.navigateByUrl("/domeni/home")},error:function(a){t.submitFormFailed(t.hotelForm,a)}})}},{key:"delete",value:function(){var t=this;"brisanje"==this.action&&this.hotelService.delete(this.hotel.id).subscribe({next:function(a){t.router.navigateByUrl("/domeni/home")},error:function(a){t.submitFormFailed(t.hotelForm,a)}})}},{key:"submitForm",value:function(){this.store(),this.update(),this.delete()}},{key:"submitFormFailed",value:function(t,i){422===i.status&&Object.keys(i.error.errors).forEach(function(a){var u=t.get(a);u&&u.setErrors({serverError:i.error.errors[a]})})}},{key:"goBack",value:function(){this._location.back()}}]),n}();return r.\u0275fac=function(o){return new(o||r)(e.Y36(s.qu),e.Y36(c.F0),e.Y36(c.gz),e.Y36(Z.N),e.Y36(h.Ye))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-form"]],decls:36,vars:10,consts:[[1,"main-content"],[1,"container-fluid"],[1,"row"],[1,"col-md-8"],[1,"card"],[1,"card-header","card-header-danger"],[1,"card-title"],[1,"card-category"],[1,"card-body"],[1,"col-md-6"],[1,"example-full-width"],["matInput","","placeholder","Naziv hotela","formControlName","naziv",3,"errorStateMatcher"],[4,"ngIf"],["matInput","","placeholder","Mesto","formControlName","mesto_id",3,"errorStateMatcher"],["matInput","","placeholder","Adresa","formControlName","adresa",3,"errorStateMatcher"],["matInput","","placeholder","Telefon","formControlName","telefon",3,"errorStateMatcher"],["matInput","","placeholder","Napomena","formControlName","napomena",3,"errorStateMatcher"],["mat-raised-button","","type","submit",1,"btn","btn-danger","pull-right"],[1,"clearfix"]],template:function(o,t){var i,a,u,f,p;1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"h4",6),e._uU(7,"Hotel"),e.qZA(),e.TgZ(8,"p",7),e._uU(9,"Complete your profile"),e.qZA()(),e.TgZ(10,"div",8)(11,"form")(12,"div",2)(13,"div",9)(14,"mat-form-field",10),e._UZ(15,"input",11),e.YNc(16,x,2,1,"mat-error",12),e.qZA()(),e.TgZ(17,"div",9)(18,"mat-form-field",10),e._UZ(19,"input",13),e.YNc(20,T,2,1,"mat-error",12),e.qZA()(),e.TgZ(21,"div",9)(22,"mat-form-field",10),e._UZ(23,"input",14),e.YNc(24,I,2,1,"mat-error",12),e.qZA()(),e.TgZ(25,"div",9)(26,"mat-form-field",10),e._UZ(27,"input",15),e.YNc(28,A,2,1,"mat-error",12),e.qZA()(),e.TgZ(29,"div",9)(30,"mat-form-field",10),e._UZ(31,"input",16),e.YNc(32,k,2,1,"mat-error",12),e.qZA()()(),e.TgZ(33,"button",17),e._uU(34,"Update Profile"),e.qZA(),e._UZ(35,"div",18),e.qZA()()()()()()()),2&o&&(e.xp6(15),e.Q6J("errorStateMatcher",t.matcher),e.xp6(1),e.Q6J("ngIf",null==(i=t.hotelForm.get("naziv"))||null==i.errors?null:i.errors.serverError),e.xp6(3),e.Q6J("errorStateMatcher",t.matcher),e.xp6(1),e.Q6J("ngIf",null==(a=t.hotelForm.get("mesto_id"))||null==a.errors?null:a.errors.serverError),e.xp6(3),e.Q6J("errorStateMatcher",t.matcher),e.xp6(1),e.Q6J("ngIf",null==(u=t.hotelForm.get("adresa"))||null==u.errors?null:u.errors.serverError),e.xp6(3),e.Q6J("errorStateMatcher",t.matcher),e.xp6(1),e.Q6J("ngIf",null==(f=t.hotelForm.get("telefon"))||null==f.errors?null:f.errors.serverError),e.xp6(3),e.Q6J("errorStateMatcher",t.matcher),e.xp6(1),e.Q6J("ngIf",null==(p=t.hotelForm.get("napomena"))||null==p.errors?null:p.errors.serverError))},directives:[s._Y,s.JL,s.F,v.KE,y.Nt,s.Fj,s.JJ,s.u,h.O5,v.TO,M.lW],styles:[""]}),r}(),J=function(){function r(){(0,d.Z)(this,r)}return(0,m.Z)(r,[{key:"isErrorState",value:function(o,t){return o&&o.invalid}}]),r}(),S=l(45687),b=l(74107),U=l(90508),E=l(54394);function N(r,n){if(1&r&&(e.TgZ(0,"mat-option",18),e._uU(1),e.qZA()),2&r){var o=n.$implicit;e.Q6J("value",o.id),e.xp6(1),e.Oqu(o.naziv)}}function O(r,n){if(1&r&&(e.TgZ(0,"mat-option",18),e._uU(1),e.qZA()),2&r){var o=n.$implicit;e.Q6J("value",o.id),e.xp6(1),e.Oqu(o.naziv)}}var Y=[{path:"",pathMatch:"full",component:function(){var r=function(){function n(o,t,i){var a=this;(0,d.Z)(this,n),this.router=o,this.hotelService=t,this.kampService=i,this.kamp_id=null,this.kampovi=[],this.smene=[],this.smena_id=null,this.kampovi$=this.kampService.all(),this.kampService.all().subscribe(function(u){a.kampovi=u})}return(0,m.Z)(n,[{key:"kamp_selected",value:function(t){var i=this;this.smene=this.kampovi.find(function(a){return a.id==i.kamp_id}).smene}},{key:"ngOnInit",value:function(){}},{key:"ngAfterViewInit",value:function(){}}]),n}();return r.\u0275fac=function(o){return new(o||r)(e.Y36(c.F0),e.Y36(Z.N),e.Y36(S.f))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-index"]],decls:21,vars:6,consts:[[1,"main-content"],[1,"container-fluid"],[1,"row"],[1,"col-md-12"],[1,"card"],[1,"card-header","card-header-danger"],[1,"card-title"],[1,"card-category"],[1,"card-body"],[1,"row","border-bottom","mb-2"],[1,"col-12"],["appearance","standard",1,"pull-right","col-md-3"],["placeholder","Izaberite smenu",3,"ngModel","ngModelChange"],["smena",""],[3,"value",4,"ngFor","ngForOf"],["placeholder","Izaberite kamp",3,"ngModel","ngModelChange","selectionChange"],["kamp",""],[3,"kamp_id","smena_id"],[3,"value"]],template:function(o,t){1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"h4",6),e._uU(7,"Hoteli "),e.qZA(),e._UZ(8,"p",7),e.qZA(),e.TgZ(9,"div",8)(10,"div",9)(11,"div",10)(12,"mat-form-field",11)(13,"mat-select",12,13),e.NdJ("ngModelChange",function(a){return t.smena_id=a}),e.YNc(15,N,2,2,"mat-option",14),e.qZA()(),e.TgZ(16,"mat-form-field",11)(17,"mat-select",15,16),e.NdJ("ngModelChange",function(a){return t.kamp_id=a})("selectionChange",function(a){return t.kamp_selected(a)}),e.YNc(19,O,2,2,"mat-option",14),e.qZA()()()(),e._UZ(20,"app-hotel-datatable",17),e.qZA()()()()()()),2&o&&(e.xp6(13),e.Q6J("ngModel",t.smena_id),e.xp6(2),e.Q6J("ngForOf",t.smene),e.xp6(2),e.Q6J("ngModel",t.kamp_id),e.xp6(2),e.Q6J("ngForOf",t.kampovi),e.xp6(1),e.Q6J("kamp_id",t.kamp_id)("smena_id",t.smena_id))},directives:[v.KE,b.gD,s.JJ,s.On,h.sg,U.ey,E.a],styles:[""]}),r}()},{path:"unos",pathMatch:"full",component:F},{path:":hotelId",component:C},{path:":hotelId/izmena",component:F}],z=function(){var r=(0,m.Z)(function n(){(0,d.Z)(this,n)});return r.\u0275fac=function(o){return new(o||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[c.Bz.forChild(Y)],c.Bz]}),r}(),H=l(62753),j=function(){var r=(0,m.Z)(function n(){(0,d.Z)(this,n)});return r.\u0275fac=function(o){return new(o||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[h.ez,z,H.q,s.u5,s.UX]]}),r}()}}]);