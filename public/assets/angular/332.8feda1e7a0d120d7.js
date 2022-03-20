"use strict";(self.webpackChunkangular=self.webpackChunkangular||[]).push([[332],{1666:function(J,v,c){c.r(v),c.d(v,{KampModule:function(){return K}});var s=c(3144),m=c(5671),h=c(9808),d=c(2252),t=c(1891),F=function(){var r=function(){function n(){(0,m.Z)(this,n)}return(0,s.Z)(n,[{key:"ngOnInit",value:function(){}}]),n}();return r.\u0275fac=function(a){return new(a||r)},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-details"]],decls:2,vars:0,template:function(a,e){1&a&&(t.TgZ(0,"p"),t._uU(1,"details works!"),t.qZA())},styles:[""]}),r}(),k=c(520),p=c(2340),g=function(){var r=function(){function n(a){(0,m.Z)(this,n),this.httpClient=a,this.httpOptions={headers:new k.WM({"Content-Type":"application/json"})}}return(0,s.Z)(n,[{key:"datatable",value:function(e){return this.httpClient.post("".concat(p.N.api_url,"/datatable/kamp"),e)}},{key:"all",value:function(){return this.httpClient.get("".concat(p.N.api_url,"/kamp"))}},{key:"find",value:function(e){return this.httpClient.get("".concat(p.N.api_url,"/kamp/").concat(e))}},{key:"store",value:function(e){return this.httpClient.post("".concat(p.N.api_url,"/kamp"),JSON.stringify(e),this.httpOptions)}},{key:"update",value:function(e,i){return this.httpClient.put("".concat(p.N.api_url,"/kamp/id"),JSON.stringify(i),this.httpOptions)}},{key:"delete",value:function(e){return this.httpClient.delete("".concat(p.N.api_url,"/kamp/").concat(e),this.httpOptions)}}]),n}();return r.\u0275fac=function(a){return new(a||r)(t.LFG(k.eN))},r.\u0275prov=t.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r}(),l=c(3075),b=c(7322),S=c(7531),y=c(7423);function T(r,n){if(1&r&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&r){var e,a=t.oxw();t.xp6(1),t.hij(" ",null==(e=a.kampForm.get("naziv"))||null==e.errors?null:e.errors.serverError," ")}}var Z=function(){var r=function(){function n(a,e,i,o,u){(0,m.Z)(this,n),this.fb=a,this.router=e,this.activatedRoute=i,this.kampService=o,this._location=u,this.kamp={id:-1,lokacija_id:"",naziv:"",godina:"",broj_prijava:"",status:"",cena:""},this.errors=[],this.action="",this.isReadOnly=!1,this.matcher=new M,this.kampForm=this.fb.group({lokacija_id:[""],naziv:[""],godina:[""],broj_prijava:[""],status:[""],cena:[""]})}return(0,s.Z)(n,[{key:"ngOnInit",value:function(){var e=this;this.action=this.activatedRoute.snapshot.url[0].path,this.isReadOnly="delete"==this.action,this.activatedRoute.snapshot.url[1]&&this.kampService.find(this.activatedRoute.snapshot.url[2].path).subscribe(function(i){e.kamp=i})}},{key:"store",value:function(){var e=this;"unos"==this.action&&this.kampService.store(this.kampForm.value).subscribe({next:function(o){e.router.navigateByUrl("/kamp")},error:function(o){e.submitFormFailed(e.kampForm,o)}})}},{key:"update",value:function(){var e=this;"izmena"==this.action&&this.kampService.update(this.kamp.id,this.kampForm.value).subscribe({next:function(o){e.router.navigateByUrl("/kamp")},error:function(o){e.submitFormFailed(e.kampForm,o)}})}},{key:"delete",value:function(){var e=this;"brisanje"==this.action&&this.kampService.delete(this.kamp.id).subscribe({next:function(o){e.router.navigateByUrl("/kamp")},error:function(o){e.submitFormFailed(e.kampForm,o)}})}},{key:"submitForm",value:function(){this.store(),this.update(),this.delete()}},{key:"submitFormFailed",value:function(e,i){this.errors=i.error.errors,422===i.status&&Object.keys(i.error.errors).forEach(function(o){var u=e.get(o);u&&u.setErrors({serverError:i.error.errors[o]})})}},{key:"goBack",value:function(){this._location.back()}}]),n}();return r.\u0275fac=function(a){return new(a||r)(t.Y36(l.qu),t.Y36(d.F0),t.Y36(d.gz),t.Y36(g),t.Y36(h.Ye))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-form"]],decls:36,vars:8,consts:[[1,"main-content"],[1,"container-fluid"],[1,"row"],[1,"offset-md-2","col-md-8"],[1,"card"],[1,"card-header","card-header-danger"],[1,"card-title"],[1,"card-category"],[1,"card-body"],["novalidate","",3,"formGroup","ngSubmit"],[1,"col-md-5"],[1,"example-full-width"],["matInput","","placeholder","Naziv","formControlName","naziv",3,"errorStateMatcher"],[4,"ngIf"],[1,"col-md-3"],["matInput","","placeholder","Godina","formControlName","godina",3,"errorStateMatcher"],[1,"col-md-4"],["matInput","","placeholder","Broj prijava","formControlName","broj_prijava","type","text",3,"errorStateMatcher"],["matInput","","placeholder","Lokacija","type","text","formControlName","lokacija_id",3,"errorStateMatcher"],["matInput","","placeholder","Cena","type","text","formControlName","cena",3,"errorStateMatcher"],["matInput","","placeholder","Status","type","text","formControlName","status",3,"errorStateMatcher"],["mat-raised-button","","type","button",1,"btn","btn-danger","pull-right",3,"click"],[1,"clearfix"]],template:function(a,e){var i;1&a&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"h4",6),t._uU(7,"Kamp"),t.qZA(),t.TgZ(8,"p",7),t._uU(9,"Complete your profile"),t.qZA()(),t.TgZ(10,"div",8)(11,"form",9),t.NdJ("ngSubmit",function(){return e.submitForm()}),t.TgZ(12,"div",2)(13,"div",10)(14,"mat-form-field",11),t._UZ(15,"input",12),t.YNc(16,T,2,1,"mat-error",13),t.qZA()(),t.TgZ(17,"div",14)(18,"mat-form-field",11),t._UZ(19,"input",15),t.qZA()(),t.TgZ(20,"div",16)(21,"mat-form-field",11),t._UZ(22,"input",17),t.qZA()()(),t.TgZ(23,"div",2)(24,"div",16)(25,"mat-form-field",11),t._UZ(26,"input",18),t.qZA()(),t.TgZ(27,"div",16)(28,"mat-form-field",11),t._UZ(29,"input",19),t.qZA()(),t.TgZ(30,"div",16)(31,"mat-form-field",11),t._UZ(32,"input",20),t.qZA()()(),t.TgZ(33,"button",21),t.NdJ("click",function(){return e.submitForm()}),t._uU(34,"Update Profile"),t.qZA(),t._UZ(35,"div",22),t.qZA()()()()()()()),2&a&&(t.xp6(11),t.Q6J("formGroup",e.kampForm),t.xp6(4),t.Q6J("errorStateMatcher",e.matcher),t.xp6(1),t.Q6J("ngIf",null==(i=e.kampForm.get("naziv"))||null==i.errors?null:i.errors.serverError),t.xp6(3),t.Q6J("errorStateMatcher",e.matcher),t.xp6(3),t.Q6J("errorStateMatcher",e.matcher),t.xp6(4),t.Q6J("errorStateMatcher",e.matcher),t.xp6(3),t.Q6J("errorStateMatcher",e.matcher),t.xp6(3),t.Q6J("errorStateMatcher",e.matcher))},directives:[l._Y,l.JL,l.sg,b.KE,S.Nt,l.Fj,l.JJ,l.u,h.O5,b.TO,y.lW],styles:[""]}),r}(),M=function(){function r(){(0,m.Z)(this,r)}return(0,s.Z)(r,[{key:"isErrorState",value:function(a,e){return a&&a.invalid}}]),r}(),x=c(5245),I=["dataTableKamp"],U=[{path:"",pathMatch:"full",component:function(){var r=function(){function n(a,e){(0,m.Z)(this,n),this.router=a,this.kampService=e}return(0,s.Z)(n,[{key:"ngOnInit",value:function(){}},{key:"ngAfterViewInit",value:function(){var e=this,i=this;this.dataTable=$(this.table.nativeElement),this.dataTable.DataTable({ajax:function(u,C){e.kampService.datatable(u).subscribe(function(f){C({recordsTotal:f.recordsTotal,recordsFiltered:f.recordsFiltered,data:f.data})})},responsive:!0,autoWidth:!1,buttons:{buttons:[{text:'<i class="fas fa-plus"></i>',action:function(u,C,f,O){i.router.navigateByUrl("/korisnici/create")},className:"btn btn-primary"}],dom:{button:{className:"btn"}}},columns:[{title:"ID",data:"id",name:"id"},{title:"Naziv",data:"naziv",name:"naziv"},{title:"Godina",data:"godina",name:"godina"},{title:"Lokacija",data:"lokacija_id",name:"lokacija_id"},{title:"Cena",data:"cena",name:"cena"},{title:"Akcije",data:"action",name:"action",width:"10%"}],drawCallback:function(){$(".btnEditKorisnik").on("click",function(u){i.router.navigateByUrl("/korisnici/update/".concat($(u.target).data("id")))}),$(".btnRemoveKorisnik").on("click",function(u){i.router.navigateByUrl("/korisnici/delete/".concat($(u.target).data("id")))})}}).buttons().container().appendTo("#datatable_korisnik_wrapper .col-md-6:eq(0)")}}]),n}();return r.\u0275fac=function(a){return new(a||r)(t.Y36(d.F0),t.Y36(g))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-index"]],viewQuery:function(a,e){var i;1&a&&t.Gf(I,5),2&a&&t.iGM(i=t.CRH())&&(e.table=i.first)},decls:16,vars:0,consts:[[1,"main-content"],[1,"container-fluid"],[1,"row"],[1,"col-md-12"],[1,"card"],[1,"card-header","card-header-danger"],[1,"card-title"],["mat-mini-fab","","aria-label","Example icon button with a delete icon","routerLink","unos",1,"pull-right"],[1,"card-category"],[1,"card-body"],[1,"table-responsive"],["id","datatable_kamp",1,"table","table-bordered","table-striped","table-sm"],["dataTableKamp",""]],template:function(a,e){1&a&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"h4",6),t._uU(7,"Kampovi "),t.TgZ(8,"button",7)(9,"mat-icon"),t._uU(10,"add"),t.qZA()()(),t._UZ(11,"p",8),t.qZA(),t.TgZ(12,"div",9)(13,"div",10),t._UZ(14,"table",11,12),t.qZA()()()()()()())},directives:[y.lW,d.rH,x.Hw],styles:[""]}),r}()},{path:"unos",pathMatch:"full",component:Z},{path:":kampId",component:F},{path:":kampId/izmena",component:Z}],N=function(){var r=(0,s.Z)(function n(){(0,m.Z)(this,n)});return r.\u0275fac=function(a){return new(a||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[[d.Bz.forChild(U)],d.Bz]}),r}(),A=c(1531),K=function(){var r=(0,s.Z)(function n(){(0,m.Z)(this,n)});return r.\u0275fac=function(a){return new(a||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[[h.ez,N,A.q,l.u5,l.UX]]}),r}()}}]);