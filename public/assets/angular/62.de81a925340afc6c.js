"use strict";(self.webpackChunkangular=self.webpackChunkangular||[]).push([[62],{61355:function(b,O,a){a.d(O,{W:function(){return d}});var v=a(15671),h=a(43144),f=a(71776),l=a(91891),e=a(74202),Z=["dataTableOprema"],d=function(){var m=function(){function s(i,p,_){(0,v.Z)(this,s),this.router=i,this.activatedRoute=p,this.opremaService=_}return(0,h.Z)(s,[{key:"ngOnInit",value:function(){var p;this.kamp_id=null===(p=this.activatedRoute.snapshot.parent.params)||void 0===p?void 0:p.kampId}},{key:"ngOnChanges",value:function(p){this.dataTable&&this.dataTable.DataTable().ajax.reload()}},{key:"ngAfterViewInit",value:function(){var p=this,_=this;this.dataTable=$(this.table.nativeElement),this.dataTable.DataTable({ajax:function(C,T){C.kamp_id=p.kamp_id,C.smena_id=p.smena_id,p.opremaService.datatable(C).subscribe(function(y){T({recordsTotal:y.recordsTotal,recordsFiltered:y.recordsFiltered,data:y.data,kamp_id:y.kamp_id})})},responsive:!0,autoWidth:!1,buttons:{buttons:[{text:'<i class="fas fa-plus"></i>',action:function(C,T,y,I){_.router.navigateByUrl("/korisnici/create")},className:"btn btn-primary"}],dom:{button:{className:"btn"}}},columns:[{title:"Veli\u010dina",data:"naziv",name:"velicinas.naziv"},{title:"Majice (de\u010daci)",data:"majice_m",name:"majice_m"},{title:"Majice (devoj\u010dice)",data:"majice_z",name:"majice_z"},{title:"Duksevi (de\u010daci)",data:"duksevi_m",name:"duksevi_m"},{title:"Duksevi (devoj\u010dice)",data:"duksevi_z",name:"duksevi_z"},{title:"\u0160orcevi (de\u010daci)",data:"sorcevi_m",name:"sorcevi_m"},{title:"\u0160orcevi (devoj\u010dice)",data:"sorcevi_z",name:"sorcevi_z"},{title:"Akcije",data:"action",name:"action",width:"10%"}],initComplete:function(C,T){_.dataTable.DataTable().columns(0).visible(null==T.kamp_id)},drawCallback:function(){$(".btnEditOprema").on("click",function(C){_.router.navigateByUrl("/oprema/izmena/".concat($(this).data("id")))}),$(".btnRemoveOprema").on("click",function(C){_.router.navigateByUrl("/oprema/brisanje/".concat($(this).data("id")))})}}).buttons().container().appendTo("#datatable_oprema_wrapper .col-md-6:eq(0)")}}]),s}();return m.\u0275fac=function(i){return new(i||m)(l.Y36(e.F0),l.Y36(e.gz),l.Y36(f.T))},m.\u0275cmp=l.Xpm({type:m,selectors:[["app-oprema-datatable"]],viewQuery:function(i,p){var _;1&i&&l.Gf(Z,5),2&i&&l.iGM(_=l.CRH())&&(p.table=_.first)},inputs:{kamp_id:"kamp_id",smena_id:"smena_id"},features:[l.TTD],decls:3,vars:0,consts:[[1,"table-responsive"],["id","datatable_oprema",1,"table","table-bordered","table-striped","table-sm"],["dataTableOprema",""]],template:function(i,p){1&i&&(l.TgZ(0,"div",0),l._UZ(1,"table",1,2),l.qZA())},styles:[""]}),m}()},22062:function(b,O,a){a.r(O),a.d(O,{OpremaModule:function(){return W}});var v=a(43144),h=a(15671),f=a(69808),l=a(74202),e=a(91891),Z=function(){var r=function(){function o(){(0,h.Z)(this,o)}return(0,v.Z)(o,[{key:"ngOnInit",value:function(){}}]),o}();return r.\u0275fac=function(n){return new(n||r)},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-details"]],decls:2,vars:0,template:function(n,t){1&n&&(e.TgZ(0,"p"),e._uU(1,"details works!"),e.qZA())},styles:[""]}),r}(),d=a(71776),m=a(93075),s=a(67322),i=a(77531),p=a(47423);function _(r,o){if(1&r&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&r){var t,n=e.oxw();e.xp6(1),e.hij(" ",null==(t=n.opremaForm.get("ucesnik_id"))||null==t.errors?null:t.errors.serverError," ")}}function k(r,o){if(1&r&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&r){var t,n=e.oxw();e.xp6(1),e.hij(" ",null==(t=n.opremaForm.get("majica"))||null==t.errors?null:t.errors.serverError," ")}}function C(r,o){if(1&r&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&r){var t,n=e.oxw();e.xp6(1),e.hij(" ",null==(t=n.opremaForm.get("sorc"))||null==t.errors?null:t.errors.serverError," ")}}function T(r,o){if(1&r&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&r){var t,n=e.oxw();e.xp6(1),e.hij(" ",null==(t=n.opremaForm.get("duks"))||null==t.errors?null:t.errors.serverError," ")}}function y(r,o){if(1&r&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&r){var t,n=e.oxw();e.xp6(1),e.hij(" ",null==(t=n.opremaForm.get("trenerka"))||null==t.errors?null:t.errors.serverError," ")}}function I(r,o){if(1&r&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&r){var t,n=e.oxw();e.xp6(1),e.hij(" ",null==(t=n.opremaForm.get("kolicina"))||null==t.errors?null:t.errors.serverError," ")}}var D=function(){var r=function(){function o(n,t,u,c,g){(0,h.Z)(this,o),this.fb=n,this.router=t,this.activatedRoute=u,this.opremaService=c,this._location=g,this.oprema={id:-1},this.action="",this.isReadOnly=!1,this.matcher=new x,this.opremaForm=this.fb.group({})}return(0,v.Z)(o,[{key:"ngOnInit",value:function(){var t=this;this.action=this.activatedRoute.snapshot.url[1].path,this.isReadOnly="delete"==this.action,this.activatedRoute.snapshot.url[2]&&this.opremaService.find(this.activatedRoute.snapshot.url[2].path).subscribe(function(u){t.oprema=u})}},{key:"store",value:function(){var t=this;"unos"==this.action&&this.opremaService.store(this.opremaForm.value).subscribe({next:function(c){t.router.navigateByUrl("/domeni/home")},error:function(c){t.submitFormFailed(t.opremaForm,c)}})}},{key:"update",value:function(){var t=this;"izmena"==this.action&&this.opremaService.update(this.oprema.id,this.opremaForm.value).subscribe({next:function(c){t.router.navigateByUrl("/domeni/home")},error:function(c){t.submitFormFailed(t.opremaForm,c)}})}},{key:"delete",value:function(){var t=this;"brisanje"==this.action&&this.opremaService.delete(this.oprema.id).subscribe({next:function(c){t.router.navigateByUrl("/domeni/home")},error:function(c){t.submitFormFailed(t.opremaForm,c)}})}},{key:"submitForm",value:function(){this.store(),this.update(),this.delete()}},{key:"submitFormFailed",value:function(t,u){422===u.status&&Object.keys(u.error.errors).forEach(function(c){var g=t.get(c);g&&g.setErrors({serverError:u.error.errors[c]})})}},{key:"goBack",value:function(){this._location.back()}}]),o}();return r.\u0275fac=function(n){return new(n||r)(e.Y36(m.qu),e.Y36(l.F0),e.Y36(l.gz),e.Y36(d.T),e.Y36(f.Ye))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-form"]],decls:40,vars:12,consts:[[1,"main-content"],[1,"container-fluid"],[1,"row"],[1,"col-md-8"],[1,"card"],[1,"card-header","card-header-danger"],[1,"card-title"],[1,"card-category"],[1,"card-body"],[1,"col-md-6"],[1,"example-full-width"],["matInput","","placeholder","U\u010desnik","formControlName","ucesnik_id",3,"errorStateMatcher"],[4,"ngIf"],["matInput","","placeholder","Veli\u010dina majice","formControlName","majica",3,"errorStateMatcher"],["matInput","","placeholder","Veli\u010dina","formControlName","sorc",3,"errorStateMatcher"],["matInput","","placeholder","Veli\u010dina duksa","formControlName","duks",3,"errorStateMatcher"],["matInput","","placeholder","Veli\u010dina trenerke","formControlName","trenerka",3,"errorStateMatcher"],["matInput","","placeholder","Koli\u010dina","formControlName","kolicina",3,"errorStateMatcher"],["mat-raised-button","","type","submit",1,"btn","btn-danger","pull-right"],[1,"clearfix"]],template:function(n,t){var u,c,g,M,E,F;1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"h4",6),e._uU(7,"Oprema"),e.qZA(),e.TgZ(8,"p",7),e._uU(9,"Complete your profile"),e.qZA()(),e.TgZ(10,"div",8)(11,"form")(12,"div",2)(13,"div",9)(14,"mat-form-field",10),e._UZ(15,"input",11),e.YNc(16,_,2,1,"mat-error",12),e.qZA()(),e.TgZ(17,"div",9)(18,"mat-form-field",10),e._UZ(19,"input",13),e.YNc(20,k,2,1,"mat-error",12),e.qZA()(),e.TgZ(21,"div",9)(22,"mat-form-field",10),e._UZ(23,"input",14),e.YNc(24,C,2,1,"mat-error",12),e.qZA()(),e.TgZ(25,"div",9)(26,"mat-form-field",10),e._UZ(27,"input",15),e.YNc(28,T,2,1,"mat-error",12),e.qZA()(),e.TgZ(29,"div",9)(30,"mat-form-field",10),e._UZ(31,"input",16),e.YNc(32,y,2,1,"mat-error",12),e.qZA()(),e.TgZ(33,"div",9)(34,"mat-form-field",10),e._UZ(35,"input",17),e.YNc(36,I,2,1,"mat-error",12),e.qZA()()(),e.TgZ(37,"button",18),e._uU(38,"Potvrdi"),e.qZA(),e._UZ(39,"div",19),e.qZA()()()()()()()),2&n&&(e.xp6(15),e.Q6J("errorStateMatcher",t.matcher),e.xp6(1),e.Q6J("ngIf",null==(u=t.opremaForm.get("ucesnik_id"))||null==u.errors?null:u.errors.serverError),e.xp6(3),e.Q6J("errorStateMatcher",t.matcher),e.xp6(1),e.Q6J("ngIf",null==(c=t.opremaForm.get("majica"))||null==c.errors?null:c.errors.serverError),e.xp6(3),e.Q6J("errorStateMatcher",t.matcher),e.xp6(1),e.Q6J("ngIf",null==(g=t.opremaForm.get("sorc"))||null==g.errors?null:g.errors.serverError),e.xp6(3),e.Q6J("errorStateMatcher",t.matcher),e.xp6(1),e.Q6J("ngIf",null==(M=t.opremaForm.get("duks"))||null==M.errors?null:M.errors.serverError),e.xp6(3),e.Q6J("errorStateMatcher",t.matcher),e.xp6(1),e.Q6J("ngIf",null==(E=t.opremaForm.get("trenerka"))||null==E.errors?null:E.errors.serverError),e.xp6(3),e.Q6J("errorStateMatcher",t.matcher),e.xp6(1),e.Q6J("ngIf",null==(F=t.opremaForm.get("kolicina"))||null==F.errors?null:F.errors.serverError))},directives:[m._Y,m.JL,m.F,s.KE,i.Nt,m.Fj,m.JJ,m.u,f.O5,s.TO,p.lW],styles:[""]}),r}(),x=function(){function r(){(0,h.Z)(this,r)}return(0,v.Z)(r,[{key:"isErrorState",value:function(n,t){return n&&n.invalid}}]),r}(),U=a(45687),A=a(72808),S=a(74107),j=a(90508),N=a(61355),J=["dataTableOprema"];function R(r,o){if(1&r&&(e.TgZ(0,"mat-option",17),e._uU(1),e.qZA()),2&r){var n=o.$implicit;e.Q6J("value",n.id),e.xp6(1),e.Oqu(n.naziv)}}function P(r,o){if(1&r&&(e.TgZ(0,"mat-option",17),e._uU(1),e.qZA()),2&r){var n=o.$implicit;e.Q6J("value",n.id),e.xp6(1),e.Oqu(n.naziv)}}var Y=[{path:"",pathMatch:"full",component:function(){var r=function(){function o(n,t,u,c){var g=this;(0,h.Z)(this,o),this.router=n,this.opremaService=t,this.kampService=u,this.smenaService=c,this.kamp_id=null,this.kampovi=[],this.smene=[],this.smena_id=null,this.kampService.all().subscribe(function(M){g.kampovi=M})}return(0,v.Z)(o,[{key:"kamp_selected",value:function(t){var u=this;this.smene=this.kampovi.find(function(c){return c.id==u.kamp_id}).smene}},{key:"ngOnInit",value:function(){}}]),o}();return r.\u0275fac=function(n){return new(n||r)(e.Y36(l.F0),e.Y36(d.T),e.Y36(U.f),e.Y36(A.n))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-index"]],viewQuery:function(n,t){var u;1&n&&e.Gf(J,5),2&n&&e.iGM(u=e.CRH())&&(t.table=u.first)},decls:21,vars:6,consts:[[1,"main-content"],[1,"container-fluid"],[1,"row"],[1,"col-md-12"],[1,"card"],[1,"card-header","card-header-danger"],[1,"card-title"],[1,"card-category"],[1,"card-body"],["appearance","outline",1,"pull-right","col-md-3"],["placeholder","Izaberite smenu",3,"ngModel","ngModelChange"],["smena",""],[3,"value",4,"ngFor","ngForOf"],["placeholder","Izaberite kamp",3,"ngModel","ngModelChange","selectionChange"],["kamp",""],[1,"col-md-12","text-right"],[3,"kamp_id","smena_id"],[3,"value"]],template:function(n,t){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"h4",6),e._uU(7,"Oprema "),e.qZA(),e._UZ(8,"p",7),e.qZA(),e.TgZ(9,"div",8)(10,"mat-form-field",9)(11,"mat-select",10,11),e.NdJ("ngModelChange",function(c){return t.smena_id=c}),e.YNc(13,R,2,2,"mat-option",12),e.qZA()(),e.TgZ(14,"mat-form-field",9)(15,"mat-select",13,14),e.NdJ("ngModelChange",function(c){return t.kamp_id=c})("selectionChange",function(c){return t.kamp_selected(c)}),e.YNc(17,P,2,2,"mat-option",12),e.qZA()(),e.TgZ(18,"div",2),e._UZ(19,"div",15),e.qZA(),e._UZ(20,"app-oprema-datatable",16),e.qZA()()()()()()),2&n&&(e.xp6(11),e.Q6J("ngModel",t.smena_id),e.xp6(2),e.Q6J("ngForOf",t.smene),e.xp6(2),e.Q6J("ngModel",t.kamp_id),e.xp6(2),e.Q6J("ngForOf",t.kampovi),e.xp6(3),e.Q6J("kamp_id",t.kamp_id)("smena_id",t.smena_id))},directives:[s.KE,S.gD,m.JJ,m.On,f.sg,j.ey,N.W],styles:[""]}),r}()},{path:"unos",pathMatch:"full",component:D},{path:":opremaId",component:Z},{path:":opremaId/izmena",component:D}],Q=function(){var r=(0,v.Z)(function o(){(0,h.Z)(this,o)});return r.\u0275fac=function(n){return new(n||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[l.Bz.forChild(Y)],l.Bz]}),r}(),z=a(62753),W=function(){var r=(0,v.Z)(function o(){(0,h.Z)(this,o)});return r.\u0275fac=function(n){return new(n||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[f.ez,Q,z.q,m.u5,m.UX]]}),r}()},71776:function(b,O,a){a.d(O,{T:function(){return Z}});var v=a(15671),h=a(43144),f=a(40520),l=a(92340),e=a(91891),Z=function(){var d=function(){function m(s){(0,v.Z)(this,m),this.httpClient=s,this.httpOptions={headers:new f.WM({"Content-Type":"application/json"})}}return(0,h.Z)(m,[{key:"datatable",value:function(i){return this.httpClient.post("".concat(l.N.api_url,"/datatable/oprema"),i)}},{key:"all",value:function(){return this.httpClient.get("".concat(l.N.api_url,"/hotel"))}},{key:"find",value:function(i){return this.httpClient.get("".concat(l.N.api_url,"/hotel/").concat(i))}},{key:"store",value:function(i){return this.httpClient.post("".concat(l.N.api_url,"/hotel"),JSON.stringify(i),this.httpOptions)}},{key:"update",value:function(i,p){return this.httpClient.put("".concat(l.N.api_url,"/hotel/id"),JSON.stringify(p),this.httpOptions)}},{key:"delete",value:function(i){return this.httpClient.delete("".concat(l.N.api_url,"/hotel/").concat(i),this.httpOptions)}}]),m}();return d.\u0275fac=function(s){return new(s||d)(e.LFG(f.eN))},d.\u0275prov=e.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d}()},72808:function(b,O,a){a.d(O,{n:function(){return Z}});var v=a(15671),h=a(43144),f=a(40520),l=a(92340),e=a(91891),Z=function(){var d=function(){function m(s){(0,v.Z)(this,m),this.httpClient=s,this.httpOptions={headers:new f.WM({"Content-Type":"application/json"})}}return(0,h.Z)(m,[{key:"datatable",value:function(i){return this.httpClient.post("".concat(l.N.api_url,"/datatable/smena"),i)}},{key:"all",value:function(){return this.httpClient.get("".concat(l.N.api_url,"/smena"))}},{key:"find",value:function(i){return this.httpClient.get("".concat(l.N.api_url,"/smena/").concat(i))}},{key:"store",value:function(i){return this.httpClient.post("".concat(l.N.api_url,"/smena"),JSON.stringify(i),this.httpOptions)}},{key:"update",value:function(i,p){return this.httpClient.put("".concat(l.N.api_url,"/smena/").concat(i),JSON.stringify(p),this.httpOptions)}},{key:"delete",value:function(i){return this.httpClient.delete("".concat(l.N.api_url,"/smena/").concat(i),this.httpOptions)}}]),m}();return d.\u0275fac=function(s){return new(s||d)(e.LFG(f.eN))},d.\u0275prov=e.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d}()}}]);