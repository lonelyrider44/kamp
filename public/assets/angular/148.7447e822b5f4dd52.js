"use strict";(self.webpackChunkangular=self.webpackChunkangular||[]).push([[148],{5431:function(M,b,o){o.d(b,{f:function(){return v}});var h=o(15671),f=o(43144),_=o(63364),s=o(91891),e=o(74202),k=["dataTablePrevoz"],v=function(){var p=function(){function i(u,c,d){(0,h.Z)(this,i),this.router=u,this.activatedRoute=c,this.prevozService=d}return(0,f.Z)(i,[{key:"ngOnInit",value:function(){var c,d;this.kamp_id=null===(c=this.activatedRoute.snapshot.parent.params)||void 0===c?void 0:c.kampId,this.smena_id=null===(d=this.activatedRoute.snapshot.parent.params)||void 0===d?void 0:d.smenaId}},{key:"ngOnChanges",value:function(c){this.dataTable&&this.dataTable.DataTable().ajax.reload()}},{key:"ngAfterViewInit",value:function(){var c=this,d=this;this.dataTable=$(this.table.nativeElement),this.dataTable.DataTable({ajax:function(g,Z){g.kamp_id=c.kamp_id,g.smena_id=c.smena_id,c.prevozService.datatable(g).subscribe(function(C){Z({recordsTotal:C.recordsTotal,recordsFiltered:C.recordsFiltered,data:C.data,kamp_id:C.kamp_id})})},responsive:!0,autoWidth:!1,buttons:{buttons:[{text:'<i class="fas fa-plus"></i>',action:function(g,Z,C,O){d.router.navigateByUrl("/korisnici/create")},className:"btn btn-primary"}],dom:{button:{className:"btn"}}},columns:[{title:"U\u010desnik",data:"ucesnik",name:"ucesniks.ime"},{title:"Roditelj",data:"roditelj",name:"roditeljs.ime"},{title:"Prevoz",data:"prevoz",name:"tip_prevozas.naziv"},{title:"Organizovani prevoz",data:"organizovani_prevoz",name:"ucesniks.ime"},{title:"Akcije",data:"action",name:"action",width:"10%",className:"dt-center"}],initComplete:function(g,Z){d.dataTable.DataTable().columns(0).visible(null==Z.kamp_id)},drawCallback:function(){$(".btnEditOprema").on("click",function(g){d.router.navigateByUrl("/oprema/izmena/".concat($(this).data("id")))}),$(".btnRemoveOprema").on("click",function(g){d.router.navigateByUrl("/oprema/brisanje/".concat($(this).data("id")))})},language:{url:"//cdn.datatables.net/plug-ins/1.12.1/i18n/sr-SP.json"}}).buttons().container().appendTo("#datatable_oprema_wrapper .col-md-6:eq(0)")}}]),i}();return p.\u0275fac=function(u){return new(u||p)(s.Y36(e.F0),s.Y36(e.gz),s.Y36(_.F))},p.\u0275cmp=s.Xpm({type:p,selectors:[["app-prevoz-datatable"]],viewQuery:function(u,c){var d;1&u&&s.Gf(k,5),2&u&&s.iGM(d=s.CRH())&&(c.table=d.first)},inputs:{kamp_id:"kamp_id",smena_id:"smena_id"},features:[s.TTD],decls:3,vars:0,consts:[[1,"table-responsive"],["id","datatable_prevoz",1,"table","table-bordered","table-striped","table-sm"],["dataTablePrevoz",""]],template:function(u,c){1&u&&(s.TgZ(0,"div",0),s._UZ(1,"table",1,2),s.qZA())},styles:[""]}),p}()},34148:function(M,b,o){o.r(b),o.d(b,{PrevozModule:function(){return j}});var h=o(43144),f=o(15671),_=o(69808),s=o(74202),e=o(91891),k=function(){var r=function(){function a(){(0,f.Z)(this,a)}return(0,h.Z)(a,[{key:"ngOnInit",value:function(){}}]),a}();return r.\u0275fac=function(n){return new(n||r)},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-details"]],decls:2,vars:0,template:function(n,t){1&n&&(e.TgZ(0,"p"),e._uU(1,"details works!"),e.qZA())},styles:[""]}),r}(),v=o(59030),p=o(63364),i=o(93075),u=o(67322),c=o(77531),d=o(47423);function y(r,a){if(1&r&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&r){var t,n=e.oxw();e.xp6(1),e.hij(" ",null==(t=n.prevozForm.get("ucesnik_id"))||null==t.errors?null:t.errors.serverError," ")}}function g(r,a){if(1&r&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&r){var t,n=e.oxw();e.xp6(1),e.hij(" ",null==(t=n.prevozForm.get("nacin_prevoza_id"))||null==t.errors?null:t.errors.serverError," ")}}function Z(r,a){if(1&r&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&r){var t,n=e.oxw();e.xp6(1),e.hij(" ",null==(t=n.prevozForm.get("naplata"))||null==t.errors?null:t.errors.serverError," ")}}function C(r,a){if(1&r&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&r){var t,n=e.oxw();e.xp6(1),e.hij(" ",null==(t=n.prevozForm.get("datum_polaska"))||null==t.errors?null:t.errors.serverError," ")}}function O(r,a){if(1&r&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&r){var t,n=e.oxw();e.xp6(1),e.hij(" ",null==(t=n.prevozForm.get("datum_odlaska"))||null==t.errors?null:t.errors.serverError," ")}}var I=function(){var r=function(){function a(n,t,m,l,z){(0,f.Z)(this,a),this.fb=n,this.router=t,this.activatedRoute=m,this.prevozService=l,this._location=z,this.prevoz={id:-1},this.action="",this.isReadOnly=!1,this.matcher=new v.n,this.prevozForm=this.fb.group({})}return(0,h.Z)(a,[{key:"ngOnInit",value:function(){var t=this;this.action=this.activatedRoute.snapshot.url[1].path,this.isReadOnly="delete"==this.action,this.activatedRoute.snapshot.url[2]&&this.prevozService.find(this.activatedRoute.snapshot.url[2].path).subscribe(function(m){t.prevoz=m})}},{key:"store",value:function(){var t=this;"unos"==this.action&&this.prevozService.store(this.prevozForm.value).subscribe({next:function(l){t.router.navigateByUrl("/domeni/home")},error:function(l){t.submitFormFailed(t.prevozForm,l)}})}},{key:"update",value:function(){var t=this;"izmena"==this.action&&this.prevozService.update(this.prevoz.id,this.prevozForm.value).subscribe({next:function(l){t.router.navigateByUrl("/domeni/home")},error:function(l){t.submitFormFailed(t.prevozForm,l)}})}},{key:"delete",value:function(){var t=this;"brisanje"==this.action&&this.prevozService.delete(this.prevoz.id).subscribe({next:function(l){t.router.navigateByUrl("/domeni/home")},error:function(l){t.submitFormFailed(t.prevozForm,l)}})}},{key:"submitForm",value:function(){this.store(),this.update(),this.delete()}},{key:"submitFormFailed",value:function(t,m){422===m.status&&Object.keys(m.error.errors).forEach(function(l){var z=t.get(l);z&&z.setErrors({serverError:m.error.errors[l]})})}},{key:"goBack",value:function(){this._location.back()}}]),a}();return r.\u0275fac=function(n){return new(n||r)(e.Y36(i.qu),e.Y36(s.F0),e.Y36(s.gz),e.Y36(p.F),e.Y36(_.Ye))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-form"]],decls:36,vars:10,consts:[[1,"main-content"],[1,"container-fluid"],[1,"row"],[1,"col-md-8"],[1,"card"],[1,"card-header","card-header-info"],[1,"card-title"],[1,"card-category"],[1,"card-body"],[1,"col-md-6"],[1,"example-full-width"],["matInput","","placeholder","U\u010desnik","formControlName","ucesnik_id",3,"errorStateMatcher"],[4,"ngIf"],["matInput","","placeholder","Na\u010din prevoza","formControlName","nacin_prevoza_id",3,"errorStateMatcher"],["matInput","","placeholder","Naplata","formControlName","naplata",3,"errorStateMatcher"],["matInput","","placeholder","Datum polaska","formControlName","datum_polaska",3,"errorStateMatcher"],["matInput","","placeholder","Datum odlaska","formControlName","datum_odlaska",3,"errorStateMatcher"],["mat-raised-button","","type","submit",1,"btn","btn-danger","pull-right"],[1,"clearfix"]],template:function(n,t){var m,l,z,F,T;1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"h4",6),e._uU(7,"Prevoz"),e.qZA(),e.TgZ(8,"p",7),e._uU(9,"Complete your profile"),e.qZA()(),e.TgZ(10,"div",8)(11,"form")(12,"div",2)(13,"div",9)(14,"mat-form-field",10),e._UZ(15,"input",11),e.YNc(16,y,2,1,"mat-error",12),e.qZA()(),e.TgZ(17,"div",9)(18,"mat-form-field",10),e._UZ(19,"input",13),e.YNc(20,g,2,1,"mat-error",12),e.qZA()(),e.TgZ(21,"div",9)(22,"mat-form-field",10),e._UZ(23,"input",14),e.YNc(24,Z,2,1,"mat-error",12),e.qZA()(),e.TgZ(25,"div",9)(26,"mat-form-field",10),e._UZ(27,"input",15),e.YNc(28,C,2,1,"mat-error",12),e.qZA()(),e.TgZ(29,"div",9)(30,"mat-form-field",10),e._UZ(31,"input",16),e.YNc(32,O,2,1,"mat-error",12),e.qZA()()(),e.TgZ(33,"button",17),e._uU(34,"Potvrdi"),e.qZA(),e._UZ(35,"div",18),e.qZA()()()()()()()),2&n&&(e.xp6(15),e.Q6J("errorStateMatcher",t.matcher),e.xp6(1),e.Q6J("ngIf",null==(m=t.prevozForm.get("ucesnik_id"))||null==m.errors?null:m.errors.serverError),e.xp6(3),e.Q6J("errorStateMatcher",t.matcher),e.xp6(1),e.Q6J("ngIf",null==(l=t.prevozForm.get("nacin_prevoza_id"))||null==l.errors?null:l.errors.serverError),e.xp6(3),e.Q6J("errorStateMatcher",t.matcher),e.xp6(1),e.Q6J("ngIf",null==(z=t.prevozForm.get("naplata"))||null==z.errors?null:z.errors.serverError),e.xp6(3),e.Q6J("errorStateMatcher",t.matcher),e.xp6(1),e.Q6J("ngIf",null==(F=t.prevozForm.get("datum_polaska"))||null==F.errors?null:F.errors.serverError),e.xp6(3),e.Q6J("errorStateMatcher",t.matcher),e.xp6(1),e.Q6J("ngIf",null==(T=t.prevozForm.get("datum_odlaska"))||null==T.errors?null:T.errors.serverError))},directives:[i._Y,i.JL,i.F,u.KE,c.Nt,i.Fj,i.JJ,i.u,_.O5,u.TO,d.lW],styles:[""]}),r}(),E=o(45687),P=o(74107),x=o(90508),D=o(5431);function U(r,a){if(1&r&&(e.TgZ(0,"mat-option",16),e._uU(1),e.qZA()),2&r){var n=a.$implicit;e.Q6J("value",n.id),e.xp6(1),e.Oqu(n.naziv)}}function A(r,a){if(1&r&&(e.TgZ(0,"mat-option",16),e._uU(1),e.qZA()),2&r){var n=a.$implicit;e.Q6J("value",n.id),e.xp6(1),e.Oqu(n.naziv)}}var J=[{path:"",pathMatch:"full",component:function(){var r=function(){function a(n,t){var m=this;(0,f.Z)(this,a),this.router=n,this.kampService=t,this.kampovi=[],this.smene=[],this.kamp_id=null,this.smena_id=null,this.kampService.all().subscribe(function(l){m.kampovi=l})}return(0,h.Z)(a,[{key:"kamp_selected",value:function(t){var m=this;this.smene=this.kampovi.find(function(l){return l.id==m.kamp_id}).smene}},{key:"ngOnInit",value:function(){}}]),a}();return r.\u0275fac=function(n){return new(n||r)(e.Y36(s.F0),e.Y36(E.f))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-index"]],decls:19,vars:6,consts:[[1,"main-content"],[1,"container-fluid"],[1,"row"],[1,"col-md-12"],[1,"card"],[1,"card-header","card-header-info"],[1,"card-title"],[1,"card-category"],[1,"card-body"],[1,"pull-right","col-md-3"],["placeholder","Izaberite smenu",3,"ngModel","ngModelChange"],["smena",""],[3,"value",4,"ngFor","ngForOf"],["placeholder","Izaberite kamp",3,"ngModel","ngModelChange","selectionChange"],["kamp",""],[3,"kamp_id","smena_id"],[3,"value"]],template:function(n,t){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"h4",6),e._uU(7,"Prevoz "),e.qZA(),e._UZ(8,"p",7),e.qZA(),e.TgZ(9,"div",8)(10,"mat-form-field",9)(11,"mat-select",10,11),e.NdJ("ngModelChange",function(l){return t.smena_id=l}),e.YNc(13,U,2,2,"mat-option",12),e.qZA()(),e.TgZ(14,"mat-form-field",9)(15,"mat-select",13,14),e.NdJ("ngModelChange",function(l){return t.kamp_id=l})("selectionChange",function(l){return t.kamp_selected(l)}),e.YNc(17,A,2,2,"mat-option",12),e.qZA()(),e._UZ(18,"app-prevoz-datatable",15),e.qZA()()()()()()),2&n&&(e.xp6(11),e.Q6J("ngModel",t.smena_id),e.xp6(2),e.Q6J("ngForOf",t.smene),e.xp6(2),e.Q6J("ngModel",t.kamp_id),e.xp6(2),e.Q6J("ngForOf",t.kampovi),e.xp6(1),e.Q6J("kamp_id",t.kamp_id)("smena_id",t.smena_id))},directives:[u.KE,P.gD,i.JJ,i.On,_.sg,x.ey,D.f],styles:[""]}),r}()},{path:"unos",pathMatch:"full",component:I},{path:":prevozId",component:k},{path:":prevozId/izmena",component:I}],S=function(){var r=(0,h.Z)(function a(){(0,f.Z)(this,a)});return r.\u0275fac=function(n){return new(n||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[s.Bz.forChild(J)],s.Bz]}),r}(),R=o(56851),j=function(){var r=(0,h.Z)(function a(){(0,f.Z)(this,a)});return r.\u0275fac=function(n){return new(n||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[_.ez,S,R.q,i.u5,i.UX]]}),r}()},63364:function(M,b,o){o.d(b,{F:function(){return k}});var h=o(15671),f=o(43144),_=o(40520),s=o(92340),e=o(91891),k=function(){var v=function(){function p(i){(0,h.Z)(this,p),this.httpClient=i,this.httpOptions={headers:new _.WM({"Content-Type":"application/json"})}}return(0,f.Z)(p,[{key:"datatable",value:function(u){return this.httpClient.post("".concat(s.N.api_url,"/datatable/prevoz"),u)}},{key:"all",value:function(){return this.httpClient.get("".concat(s.N.api_url,"/prevoz"))}},{key:"find",value:function(u){return this.httpClient.get("".concat(s.N.api_url,"/prevoz/").concat(u))}},{key:"store",value:function(u){return this.httpClient.post("".concat(s.N.api_url,"/prevoz"),JSON.stringify(u),this.httpOptions)}},{key:"update",value:function(u,c){return this.httpClient.put("".concat(s.N.api_url,"/prevoz/id"),JSON.stringify(c),this.httpOptions)}},{key:"delete",value:function(u){return this.httpClient.delete("".concat(s.N.api_url,"/prevoz/").concat(u),this.httpOptions)}}]),p}();return v.\u0275fac=function(i){return new(i||v)(e.LFG(_.eN))},v.\u0275prov=e.Yz7({token:v,factory:v.\u0275fac,providedIn:"root"}),v}()}}]);