"use strict";(self.webpackChunkangular=self.webpackChunkangular||[]).push([[53],{54394:function(I,b,a){a.d(b,{a:function(){return y}});var v=a(15671),f=a(43144),_=a(30494),u=a(91891),e=a(74202),Z=["dtHotel"],y=function(){var c=function(){function h(m,i,d){(0,v.Z)(this,h),this.router=m,this.hotelService=i,this.activatedRoute=d}return(0,f.Z)(h,[{key:"ngOnInit",value:function(){var i,d;this.kamp_id=null===(i=this.activatedRoute.snapshot.parent.params)||void 0===i?void 0:i.kampId,this.smena_id=null===(d=this.activatedRoute.snapshot.parent.params)||void 0===d?void 0:d.smenaId}},{key:"ngOnChanges",value:function(i){this.dataTable&&this.dataTable.DataTable().ajax.reload()}},{key:"ngAfterViewInit",value:function(){var i=this,d=this;this.dataTable=$(this.table.nativeElement),this.dataTable.DataTable({ajax:function(p,E){p.kamp_id=i.kamp_id,p.smena_id=i.smena_id,i.hotelService.datatable(p).subscribe(function(C){E({recordsTotal:C.recordsTotal,recordsFiltered:C.recordsFiltered,data:C.data})})},responsive:!0,autoWidth:!1,buttons:{buttons:[{text:'<i class="fas fa-plus"></i>',action:function(p,E,C,F){d.router.navigateByUrl("/korisnici/create")},className:"btn btn-primary"}],dom:{button:{className:"btn"}}},columns:[{title:"U\u010desnik",data:"ucesnik",name:"ime"},{title:"Roditelj",data:"roditelj",name:"prezime"},{title:"Sopstveni sme\u0161taj",data:"sopstveni_smestaj",name:"sopstveni_smestaj"},{title:"Napomena",data:"napomena_smestaj",name:"napomena_smestaj"},{title:"Broj sobe",data:"broj_sobe",name:"broj_sobe"},{title:"Akcije",data:"action",name:"action",width:"10%"}],columnDefs:[{targets:[2],render:function(p,E,C){return p?"DA":"NE"}}],drawCallback:function(){$(".btnEditKorisnik").on("click",function(p){d.router.navigateByUrl("/korisnici/update/".concat($(p.target).data("id")))}),$(".btnRemoveKorisnik").on("click",function(p){d.router.navigateByUrl("/korisnici/delete/".concat($(p.target).data("id")))})}}).buttons().container().appendTo("#datatable_korisnik_wrapper .col-md-6:eq(0)")}}]),h}();return c.\u0275fac=function(m){return new(m||c)(u.Y36(e.F0),u.Y36(_.N),u.Y36(e.gz))},c.\u0275cmp=u.Xpm({type:c,selectors:[["app-hotel-datatable"]],viewQuery:function(m,i){var d;1&m&&u.Gf(Z,5),2&m&&u.iGM(d=u.CRH())&&(i.table=d.first)},inputs:{kamp_id:"kamp_id",smena_id:"smena_id"},features:[u.TTD],decls:3,vars:0,consts:[[1,"table-responsive"],["id","datatable_hotel",1,"table","table-bordered","table-striped","table-sm"],["dtHotel",""]],template:function(m,i){1&m&&(u.TgZ(0,"div",0),u._UZ(1,"table",1,2),u.qZA())},styles:[""]}),c}()},14053:function(I,b,a){a.r(b),a.d(b,{HotelModule:function(){return B}});var v=a(43144),f=a(15671),_=a(69808),u=a(74202),e=a(91891),Z=function(){var n=function(){function o(){(0,f.Z)(this,o)}return(0,v.Z)(o,[{key:"ngOnInit",value:function(){}}]),o}();return n.\u0275fac=function(r){return new(r||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-details"]],decls:2,vars:0,template:function(r,t){1&r&&(e.TgZ(0,"p"),e._uU(1,"details works!"),e.qZA())},styles:[""]}),n}(),y=a(30494),c=a(93075),h=a(67322),m=a(77531),i=a(47423);function d(n,o){if(1&n&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&n){var t,r=e.oxw();e.xp6(1),e.hij(" ",null==(t=r.hotelForm.get("naziv"))||null==t.errors?null:t.errors.serverError," ")}}function M(n,o){if(1&n&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&n){var t,r=e.oxw();e.xp6(1),e.hij(" ",null==(t=r.hotelForm.get("mesto_id"))||null==t.errors?null:t.errors.serverError," ")}}function p(n,o){if(1&n&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&n){var t,r=e.oxw();e.xp6(1),e.hij(" ",null==(t=r.hotelForm.get("adresa"))||null==t.errors?null:t.errors.serverError," ")}}function E(n,o){if(1&n&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&n){var t,r=e.oxw();e.xp6(1),e.hij(" ",null==(t=r.hotelForm.get("telefon"))||null==t.errors?null:t.errors.serverError," ")}}function C(n,o){if(1&n&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&n){var t,r=e.oxw();e.xp6(1),e.hij(" ",null==(t=r.hotelForm.get("napomena"))||null==t.errors?null:t.errors.serverError," ")}}var F=function(){var n=function(){function o(r,t,s,l,g){(0,f.Z)(this,o),this.fb=r,this.router=t,this.activatedRoute=s,this.hotelService=l,this._location=g,this.hotel={id:-1},this.action="",this.isReadOnly=!1,this.matcher=new O,this.hotelForm=this.fb.group({})}return(0,v.Z)(o,[{key:"ngOnInit",value:function(){var t=this;this.action=this.activatedRoute.snapshot.url[1].path,this.isReadOnly="delete"==this.action,this.activatedRoute.snapshot.url[2]&&this.hotelService.find(this.activatedRoute.snapshot.url[2].path).subscribe(function(s){t.hotel=s})}},{key:"store",value:function(){var t=this;"unos"==this.action&&this.hotelService.store(this.hotelForm.value).subscribe({next:function(l){t.router.navigateByUrl("/domeni/home")},error:function(l){t.submitFormFailed(t.hotelForm,l)}})}},{key:"update",value:function(){var t=this;"izmena"==this.action&&this.hotelService.update(this.hotel.id,this.hotelForm.value).subscribe({next:function(l){t.router.navigateByUrl("/domeni/home")},error:function(l){t.submitFormFailed(t.hotelForm,l)}})}},{key:"delete",value:function(){var t=this;"brisanje"==this.action&&this.hotelService.delete(this.hotel.id).subscribe({next:function(l){t.router.navigateByUrl("/domeni/home")},error:function(l){t.submitFormFailed(t.hotelForm,l)}})}},{key:"submitForm",value:function(){this.store(),this.update(),this.delete()}},{key:"submitFormFailed",value:function(t,s){422===s.status&&Object.keys(s.error.errors).forEach(function(l){var g=t.get(l);g&&g.setErrors({serverError:s.error.errors[l]})})}},{key:"goBack",value:function(){this._location.back()}}]),o}();return n.\u0275fac=function(r){return new(r||n)(e.Y36(c.qu),e.Y36(u.F0),e.Y36(u.gz),e.Y36(y.N),e.Y36(_.Ye))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-form"]],decls:36,vars:10,consts:[[1,"main-content"],[1,"container-fluid"],[1,"row"],[1,"col-md-8"],[1,"card"],[1,"card-header","card-header-danger"],[1,"card-title"],[1,"card-category"],[1,"card-body"],[1,"col-md-6"],[1,"example-full-width"],["matInput","","placeholder","Naziv hotela","formControlName","naziv",3,"errorStateMatcher"],[4,"ngIf"],["matInput","","placeholder","Mesto","formControlName","mesto_id",3,"errorStateMatcher"],["matInput","","placeholder","Adresa","formControlName","adresa",3,"errorStateMatcher"],["matInput","","placeholder","Telefon","formControlName","telefon",3,"errorStateMatcher"],["matInput","","placeholder","Napomena","formControlName","napomena",3,"errorStateMatcher"],["mat-raised-button","","type","submit",1,"btn","btn-danger","pull-right"],[1,"clearfix"]],template:function(r,t){var s,l,g,T,k;1&r&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"h4",6),e._uU(7,"Hotel"),e.qZA(),e.TgZ(8,"p",7),e._uU(9,"Complete your profile"),e.qZA()(),e.TgZ(10,"div",8)(11,"form")(12,"div",2)(13,"div",9)(14,"mat-form-field",10),e._UZ(15,"input",11),e.YNc(16,d,2,1,"mat-error",12),e.qZA()(),e.TgZ(17,"div",9)(18,"mat-form-field",10),e._UZ(19,"input",13),e.YNc(20,M,2,1,"mat-error",12),e.qZA()(),e.TgZ(21,"div",9)(22,"mat-form-field",10),e._UZ(23,"input",14),e.YNc(24,p,2,1,"mat-error",12),e.qZA()(),e.TgZ(25,"div",9)(26,"mat-form-field",10),e._UZ(27,"input",15),e.YNc(28,E,2,1,"mat-error",12),e.qZA()(),e.TgZ(29,"div",9)(30,"mat-form-field",10),e._UZ(31,"input",16),e.YNc(32,C,2,1,"mat-error",12),e.qZA()()(),e.TgZ(33,"button",17),e._uU(34,"Update Profile"),e.qZA(),e._UZ(35,"div",18),e.qZA()()()()()()()),2&r&&(e.xp6(15),e.Q6J("errorStateMatcher",t.matcher),e.xp6(1),e.Q6J("ngIf",null==(s=t.hotelForm.get("naziv"))||null==s.errors?null:s.errors.serverError),e.xp6(3),e.Q6J("errorStateMatcher",t.matcher),e.xp6(1),e.Q6J("ngIf",null==(l=t.hotelForm.get("mesto_id"))||null==l.errors?null:l.errors.serverError),e.xp6(3),e.Q6J("errorStateMatcher",t.matcher),e.xp6(1),e.Q6J("ngIf",null==(g=t.hotelForm.get("adresa"))||null==g.errors?null:g.errors.serverError),e.xp6(3),e.Q6J("errorStateMatcher",t.matcher),e.xp6(1),e.Q6J("ngIf",null==(T=t.hotelForm.get("telefon"))||null==T.errors?null:T.errors.serverError),e.xp6(3),e.Q6J("errorStateMatcher",t.matcher),e.xp6(1),e.Q6J("ngIf",null==(k=t.hotelForm.get("napomena"))||null==k.errors?null:k.errors.serverError))},directives:[c._Y,c.JL,c.F,h.KE,m.Nt,c.Fj,c.JJ,c.u,_.O5,h.TO,i.lW],styles:[""]}),n}(),O=function(){function n(){(0,f.Z)(this,n)}return(0,v.Z)(n,[{key:"isErrorState",value:function(r,t){return r&&r.invalid}}]),n}(),x=a(45687),A=a(74107),U=a(90508),D=a(54394);function S(n,o){if(1&n&&(e.TgZ(0,"mat-option",18),e._uU(1),e.qZA()),2&n){var r=o.$implicit;e.Q6J("value",r.id),e.xp6(1),e.Oqu(r.naziv)}}function N(n,o){if(1&n&&(e.TgZ(0,"mat-option",18),e._uU(1),e.qZA()),2&n){var r=o.$implicit;e.Q6J("value",r.id),e.xp6(1),e.Oqu(r.naziv)}}var J=[{path:"",pathMatch:"full",component:function(){var n=function(){function o(r,t,s){var l=this;(0,f.Z)(this,o),this.router=r,this.hotelService=t,this.kampService=s,this.kamp_id=null,this.kampovi=[],this.smene=[],this.smena_id=null,this.kampovi$=this.kampService.all(),this.kampService.all().subscribe(function(g){l.kampovi=g})}return(0,v.Z)(o,[{key:"kamp_selected",value:function(t){var s=this;this.smene=this.kampovi.find(function(l){return l.id==s.kamp_id}).smene}},{key:"ngOnInit",value:function(){}},{key:"ngAfterViewInit",value:function(){}}]),o}();return n.\u0275fac=function(r){return new(r||n)(e.Y36(u.F0),e.Y36(y.N),e.Y36(x.f))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-index"]],decls:21,vars:6,consts:[[1,"main-content"],[1,"container-fluid"],[1,"row"],[1,"col-md-12"],[1,"card"],[1,"card-header","card-header-danger"],[1,"card-title"],[1,"card-category"],[1,"card-body"],[1,"row","border-bottom","mb-2"],[1,"col-12"],["appearance","standard",1,"pull-right","col-md-3"],["placeholder","Izaberite smenu",3,"ngModel","ngModelChange"],["smena",""],[3,"value",4,"ngFor","ngForOf"],["placeholder","Izaberite kamp",3,"ngModel","ngModelChange","selectionChange"],["kamp",""],[3,"kamp_id","smena_id"],[3,"value"]],template:function(r,t){1&r&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"h4",6),e._uU(7,"Hoteli "),e.qZA(),e._UZ(8,"p",7),e.qZA(),e.TgZ(9,"div",8)(10,"div",9)(11,"div",10)(12,"mat-form-field",11)(13,"mat-select",12,13),e.NdJ("ngModelChange",function(l){return t.smena_id=l}),e.YNc(15,S,2,2,"mat-option",14),e.qZA()(),e.TgZ(16,"mat-form-field",11)(17,"mat-select",15,16),e.NdJ("ngModelChange",function(l){return t.kamp_id=l})("selectionChange",function(l){return t.kamp_selected(l)}),e.YNc(19,N,2,2,"mat-option",14),e.qZA()()()(),e._UZ(20,"app-hotel-datatable",17),e.qZA()()()()()()),2&r&&(e.xp6(13),e.Q6J("ngModel",t.smena_id),e.xp6(2),e.Q6J("ngForOf",t.smene),e.xp6(2),e.Q6J("ngModel",t.kamp_id),e.xp6(2),e.Q6J("ngForOf",t.kampovi),e.xp6(1),e.Q6J("kamp_id",t.kamp_id)("smena_id",t.smena_id))},directives:[h.KE,A.gD,c.JJ,c.On,_.sg,U.ey,D.a],styles:[""]}),n}()},{path:"unos",pathMatch:"full",component:F},{path:":hotelId",component:Z},{path:":hotelId/izmena",component:F}],R=function(){var n=(0,v.Z)(function o(){(0,f.Z)(this,o)});return n.\u0275fac=function(r){return new(r||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[u.Bz.forChild(J)],u.Bz]}),n}(),H=a(62753),B=function(){var n=(0,v.Z)(function o(){(0,f.Z)(this,o)});return n.\u0275fac=function(r){return new(r||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[_.ez,R,H.q,c.u5,c.UX]]}),n}()},30494:function(I,b,a){a.d(b,{N:function(){return y}});var v=a(15671),f=a(43144),_=a(40520),u=a(92340),e=a(61737),Z=a(91891),y=function(){var c=function(){function h(m){(0,v.Z)(this,h),this.httpClient=m,this.httpOptions={headers:new _.WM({"Content-Type":"application/json"})}}return(0,f.Z)(h,[{key:"datatable",value:function(i){return this.httpClient.post("".concat(u.N.api_url,"/datatable/hotel"),i)}},{key:"all",value:function(){return this.httpClient.get("".concat(u.N.api_url,"/hotel"))}},{key:"find",value:function(i){return this.httpClient.get("".concat(u.N.api_url,"/hotel/").concat(i))}},{key:"store",value:function(i){return this.httpClient.post("".concat(u.N.api_url,"/hotel"),JSON.stringify(i),this.httpOptions)}},{key:"update",value:function(i,d){return this.httpClient.put("".concat(u.N.api_url,"/hotel/id"),JSON.stringify(d),this.httpOptions)}},{key:"delete",value:function(i){return this.httpClient.delete("".concat(u.N.api_url,"/hotel/").concat(i),this.httpOptions)}},{key:"errorHandler",value:function(i){var d;return d=i.error instanceof ErrorEvent?i.error.message:"Error Code: ".concat(i.status,"\nMessage: ").concat(i.message),console.log(d),(0,e._)(d)}}]),h}();return c.\u0275fac=function(m){return new(m||c)(Z.LFG(_.eN))},c.\u0275prov=Z.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c}()}}]);