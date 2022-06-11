"use strict";(self.webpackChunkangular=self.webpackChunkangular||[]).push([[622],{89622:function(O,p,s){s.r(p),s.d(p,{IzvestajModule:function(){return M}});var d=s(43144),u=s(15671),f=s(69808),l=s(74202),t=s(91891),I=function(){var a=function(){function n(){(0,u.Z)(this,n)}return(0,d.Z)(n,[{key:"ngOnInit",value:function(){}}]),n}();return a.\u0275fac=function(e){return new(e||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-details"]],decls:2,vars:0,template:function(e,i){1&e&&(t.TgZ(0,"p"),t._uU(1,"details works!"),t.qZA())},styles:[""]}),a}(),Z=s(40520),v=s(92340),g=function(){var a=function(){function n(e){(0,u.Z)(this,n),this.httpClient=e,this.httpOptions={headers:new Z.WM({"Content-Type":"application/json"})}}return(0,d.Z)(n,[{key:"datatable",value:function(i){return this.httpClient.post("".concat(v.N.api_url,"/datatable/hotel"),i)}},{key:"all",value:function(){return this.httpClient.get("".concat(v.N.api_url,"/hotel"))}},{key:"find",value:function(i){return this.httpClient.get("".concat(v.N.api_url,"/hotel/").concat(i))}},{key:"store",value:function(i){return this.httpClient.post("".concat(v.N.api_url,"/hotel"),JSON.stringify(i),this.httpOptions)}},{key:"update",value:function(i,o){return this.httpClient.put("".concat(v.N.api_url,"/hotel/id"),JSON.stringify(o),this.httpOptions)}},{key:"delete",value:function(i){return this.httpClient.delete("".concat(v.N.api_url,"/hotel/").concat(i),this.httpOptions)}}]),n}();return a.\u0275fac=function(e){return new(e||a)(t.LFG(Z.eN))},a.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a}(),m=s(93075),z=s(67322),C=s(77531),y=s(47423),b=function(){var a=function(){function n(e,i,o,r,c){(0,u.Z)(this,n),this.fb=e,this.router=i,this.activatedRoute=o,this.izvestajService=r,this._location=c,this.izvestaj={id:-1},this.action="",this.isReadOnly=!1,this.matcher=new F,this.izvestajForm=this.fb.group({})}return(0,d.Z)(n,[{key:"ngOnInit",value:function(){var i=this;this.action=this.activatedRoute.snapshot.url[1].path,this.isReadOnly="delete"==this.action,this.activatedRoute.snapshot.url[2]&&this.izvestajService.find(this.activatedRoute.snapshot.url[2].path).subscribe(function(o){i.izvestaj=o})}},{key:"store",value:function(){var i=this;"unos"==this.action&&this.izvestajService.store(this.izvestajForm.value).subscribe({next:function(r){i.router.navigateByUrl("/domeni/home")},error:function(r){i.submitFormFailed(i.izvestajForm,r)}})}},{key:"update",value:function(){var i=this;"izmena"==this.action&&this.izvestajService.update(this.izvestaj.id,this.izvestajForm.value).subscribe({next:function(r){i.router.navigateByUrl("/domeni/home")},error:function(r){i.submitFormFailed(i.izvestajForm,r)}})}},{key:"delete",value:function(){var i=this;"brisanje"==this.action&&this.izvestajService.delete(this.izvestaj.id).subscribe({next:function(r){i.router.navigateByUrl("/domeni/home")},error:function(r){i.submitFormFailed(i.izvestajForm,r)}})}},{key:"submitForm",value:function(){this.store(),this.update(),this.delete()}},{key:"submitFormFailed",value:function(i,o){422===o.status&&Object.keys(o.error.errors).forEach(function(r){var c=i.get(r);c&&c.setErrors({serverError:o.error.errors[r]})})}},{key:"goBack",value:function(){this._location.back()}}]),n}();return a.\u0275fac=function(e){return new(e||a)(t.Y36(m.qu),t.Y36(l.F0),t.Y36(l.gz),t.Y36(g),t.Y36(f.Ye))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-form"]],decls:66,vars:0,consts:[[1,"main-content"],[1,"container-fluid"],[1,"row"],[1,"col-md-8"],[1,"card"],[1,"card-header","card-header-danger"],[1,"card-title"],[1,"card-category"],[1,"card-body"],[1,"col-md-5"],[1,"example-full-width"],["matInput","","placeholder","Company (disabled)","disabled",""],[1,"col-md-3"],["matInput","","placeholder","Username"],[1,"col-md-4"],["matInput","","placeholder","Email address","type","email"],[1,"col-md-6"],["matInput","","placeholder","Fist Name","type","text"],["matInput","","placeholder","Last Name","type","text"],[1,"col-md-12"],["matInput","","placeholder","Adress","type","text"],["matInput","","placeholder","City","type","text"],["matInput","","placeholder","Country","type","text"],["matInput","","placeholder","Postal Code","type","text"],["matInput","","placeholder","Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo."],["mat-raised-button","","type","submit",1,"btn","btn-danger","pull-right"],[1,"clearfix"],[1,"card","card-profile"],[1,"card-avatar"],["href","javascript:void(0)"],["src","./assets/img/faces/marc.jpg",1,"img"],[1,"card-category","text-gray"],[1,"card-description"],["href","javascript:void(0)",1,"btn","btn-danger","btn-round"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"h4",6),t._uU(7,"Izve\u0161taj"),t.qZA(),t.TgZ(8,"p",7),t._uU(9,"Complete your profile"),t.qZA()(),t.TgZ(10,"div",8)(11,"form")(12,"div",2)(13,"div",9)(14,"mat-form-field",10),t._UZ(15,"input",11),t.qZA()(),t.TgZ(16,"div",12)(17,"mat-form-field",10),t._UZ(18,"input",13),t.qZA()(),t.TgZ(19,"div",14)(20,"mat-form-field",10),t._UZ(21,"input",15),t.qZA()()(),t.TgZ(22,"div",2)(23,"div",16)(24,"mat-form-field",10),t._UZ(25,"input",17),t.qZA()(),t.TgZ(26,"div",16)(27,"mat-form-field",10),t._UZ(28,"input",18),t.qZA()()(),t.TgZ(29,"div",2)(30,"div",19)(31,"mat-form-field",10),t._UZ(32,"input",20),t.qZA()()(),t.TgZ(33,"div",2)(34,"div",14)(35,"mat-form-field",10),t._UZ(36,"input",21),t.qZA()(),t.TgZ(37,"div",14)(38,"mat-form-field",10),t._UZ(39,"input",22),t.qZA()(),t.TgZ(40,"div",14)(41,"mat-form-field",10),t._UZ(42,"input",23),t.qZA()()(),t.TgZ(43,"div",2)(44,"div",19)(45,"label"),t._uU(46,"About Me"),t.qZA(),t.TgZ(47,"mat-form-field",10),t._UZ(48,"textarea",24),t.qZA()()(),t.TgZ(49,"button",25),t._uU(50,"Update Profile"),t.qZA(),t._UZ(51,"div",26),t.qZA()()()(),t.TgZ(52,"div",14)(53,"div",27)(54,"div",28)(55,"a",29),t._UZ(56,"img",30),t.qZA()(),t.TgZ(57,"div",8)(58,"h6",31),t._uU(59,"CEO / Co-Founder"),t.qZA(),t.TgZ(60,"h4",6),t._uU(61,"Alec Thompson"),t.qZA(),t.TgZ(62,"p",32),t._uU(63," Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens\u2019 bed design but the back is... "),t.qZA(),t.TgZ(64,"a",33),t._uU(65,"Follow"),t.qZA()()()()()()())},directives:[m._Y,m.JL,m.F,z.KE,C.Nt,y.lW],styles:[""]}),a}(),F=function(){function a(){(0,u.Z)(this,a)}return(0,d.Z)(a,[{key:"isErrorState",value:function(e,i){return e&&e.invalid}}]),a}(),T=s(25245),k=["dataTableIzvestaj"],A=[{path:"",pathMatch:"full",component:function(){var a=function(){function n(e,i){(0,u.Z)(this,n),this.router=e,this.izvestajService=i}return(0,d.Z)(n,[{key:"ngOnInit",value:function(){}},{key:"ngAfterViewInit",value:function(){var i=this,o=this;this.dataTable=$(this.table.nativeElement),this.dataTable.DataTable({ajax:function(c,j){i.izvestajService.datatable(c).subscribe(function(h){j({recordsTotal:h.recordsTotal,recordsFiltered:h.recordsFiltered,data:h.data})})},responsive:!0,autoWidth:!1,buttons:{buttons:[{text:'<i class="fas fa-plus"></i>',action:function(c,j,h,N){o.router.navigateByUrl("/korisnici/create")},className:"btn btn-primary"}],dom:{button:{className:"btn"}}},columns:[{title:"ID",data:"id",name:"id"},{title:"Naziv",data:"naziv",name:"naziv"},{title:"Godina",data:"godina",name:"godina"},{title:"Lokacija",data:"lokacija_id",name:"lokacija_id"},{title:"Cena",data:"cena",name:"cena"},{title:"Akcije",data:"action",name:"action",width:"10%"}],drawCallback:function(){$(".btnEditKorisnik").on("click",function(c){o.router.navigateByUrl("/korisnici/update/".concat($(c.target).data("id")))}),$(".btnRemoveKorisnik").on("click",function(c){o.router.navigateByUrl("/korisnici/delete/".concat($(c.target).data("id")))})}}).buttons().container().appendTo("#datatable_korisnik_wrapper .col-md-6:eq(0)")}}]),n}();return a.\u0275fac=function(e){return new(e||a)(t.Y36(l.F0),t.Y36(g))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-index"]],viewQuery:function(e,i){var o;1&e&&t.Gf(k,5),2&e&&t.iGM(o=t.CRH())&&(i.table=o.first)},decls:16,vars:0,consts:[[1,"main-content"],[1,"container-fluid"],[1,"row"],[1,"col-md-12"],[1,"card"],[1,"card-header","card-header-danger"],[1,"card-title"],["mat-mini-fab","","aria-label","Example icon button with a delete icon","routerLink","unos",1,"pull-right"],[1,"card-category"],[1,"card-body"],[1,"table-responsive"],["id","datatable_izvestaj",1,"table","table-bordered","table-striped","table-sm"],["dataTableIzvestaj",""]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"h4",6),t._uU(7,"Izve\u0161taji "),t.TgZ(8,"button",7)(9,"mat-icon"),t._uU(10,"add"),t.qZA()()(),t._UZ(11,"p",8),t.qZA(),t.TgZ(12,"div",9)(13,"div",10),t._UZ(14,"table",11,12),t.qZA()()()()()()())},directives:[y.lW,l.rH,T.Hw],styles:[""]}),a}()},{path:"unos",pathMatch:"full",component:b},{path:":izvestajId",component:I},{path:":izvestajId/izmena",component:b}],x=function(){var a=(0,d.Z)(function n(){(0,u.Z)(this,n)});return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[[l.Bz.forChild(A)],l.Bz]}),a}(),S=s(75383),M=function(){var a=(0,d.Z)(function n(){(0,u.Z)(this,n)});return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[[f.ez,x,S.q,m.u5,m.UX]]}),a}()}}]);