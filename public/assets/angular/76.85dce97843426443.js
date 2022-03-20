"use strict";(self.webpackChunkangular=self.webpackChunkangular||[]).push([[76],{4076:function(O,m,a){a.r(m),a.d(m,{HotelModule:function(){return k}});var s=a(3144),u=a(5671),p=a(9808),c=a(2252),t=a(1891),g=function(){var e=function(){function i(){(0,u.Z)(this,i)}return(0,s.Z)(i,[{key:"ngOnInit",value:function(){}}]),i}();return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-details"]],decls:2,vars:0,template:function(o,n){1&o&&(t.TgZ(0,"p"),t._uU(1,"details works!"),t.qZA())},styles:[""]}),e}(),f=a(520),d=a(2340),y=a(1737),b=function(){var e=function(){function i(o){(0,u.Z)(this,i),this.httpClient=o,this.httpOptions={headers:new f.WM({"Content-Type":"application/json"})}}return(0,s.Z)(i,[{key:"datatable",value:function(n){return this.httpClient.post("".concat(d.N.api_url,"/datatable/hotel"),n)}},{key:"all",value:function(){return this.httpClient.get("".concat(d.N.api_url,"/hotel"))}},{key:"find",value:function(n){return this.httpClient.get("".concat(d.N.api_url,"/hotel/").concat(n))}},{key:"store",value:function(n){return this.httpClient.post("".concat(d.N.api_url,"/hotel"),JSON.stringify(n),this.httpOptions)}},{key:"update",value:function(n,r){return this.httpClient.put("".concat(d.N.api_url,"/hotel/id"),JSON.stringify(r),this.httpOptions)}},{key:"delete",value:function(n){return this.httpClient.delete("".concat(d.N.api_url,"/hotel/").concat(n),this.httpOptions)}},{key:"errorHandler",value:function(n){var r;return r=n.error instanceof ErrorEvent?n.error.message:"Error Code: ".concat(n.status,"\nMessage: ").concat(n.message),console.log(r),(0,y._)(r)}}]),i}();return e.\u0275fac=function(o){return new(o||e)(t.LFG(f.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e}(),C=a(3075),F=a(7322),A=a(7531),v=a(7423),Z=function(){var e=function(){function i(o,n,r,l,h){(0,u.Z)(this,i),this.fb=o,this.router=n,this.activatedRoute=r,this.hotelService=l,this._location=h,this.hotel={id:-1},this.errors=[],this.action="",this.isReadOnly=!1,this.hotelForm=this.fb.group({})}return(0,s.Z)(i,[{key:"ngOnInit",value:function(){var n=this;this.action=this.activatedRoute.snapshot.url[1].path,this.isReadOnly="delete"==this.action,this.activatedRoute.snapshot.url[2]&&this.hotelService.find(this.activatedRoute.snapshot.url[2].path).subscribe(function(r){n.hotel=r})}},{key:"store",value:function(){var n=this;"unos"==this.action&&this.hotelService.store(this.hotelForm.value).subscribe({next:function(l){n.router.navigateByUrl("/domeni/home")},error:function(l){n.submitFormFailed(n.hotelForm,l)}})}},{key:"update",value:function(){var n=this;"izmena"==this.action&&this.hotelService.update(this.hotel.id,this.hotelForm.value).subscribe({next:function(l){n.router.navigateByUrl("/domeni/home")},error:function(l){n.submitFormFailed(n.hotelForm,l)}})}},{key:"delete",value:function(){var n=this;"brisanje"==this.action&&this.hotelService.delete(this.hotel.id).subscribe({next:function(l){n.router.navigateByUrl("/domeni/home")},error:function(l){n.submitFormFailed(n.hotelForm,l)}})}},{key:"submitForm",value:function(){this.store(),this.update(),this.delete()}},{key:"submitFormFailed",value:function(n,r){this.errors=r.error.errors,422===r.status&&Object.keys(r.error.errors).forEach(function(l){var h=n.get(l);h&&h.setErrors({serverError:r.error.errors[l]})})}},{key:"goBack",value:function(){this._location.back()}}]),i}();return e.\u0275fac=function(o){return new(o||e)(t.Y36(C.qu),t.Y36(c.F0),t.Y36(c.gz),t.Y36(b),t.Y36(p.Ye))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-form"]],decls:66,vars:0,consts:[[1,"main-content"],[1,"container-fluid"],[1,"row"],[1,"col-md-8"],[1,"card"],[1,"card-header","card-header-danger"],[1,"card-title"],[1,"card-category"],[1,"card-body"],[1,"col-md-5"],[1,"example-full-width"],["matInput","","placeholder","Company (disabled)","disabled",""],[1,"col-md-3"],["matInput","","placeholder","Username"],[1,"col-md-4"],["matInput","","placeholder","Email address","type","email"],[1,"col-md-6"],["matInput","","placeholder","Fist Name","type","text"],["matInput","","placeholder","Last Name","type","text"],[1,"col-md-12"],["matInput","","placeholder","Adress","type","text"],["matInput","","placeholder","City","type","text"],["matInput","","placeholder","Country","type","text"],["matInput","","placeholder","Postal Code","type","text"],["matInput","","placeholder","Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo."],["mat-raised-button","","type","submit",1,"btn","btn-danger","pull-right"],[1,"clearfix"],[1,"card","card-profile"],[1,"card-avatar"],["href","javascript:void(0)"],["src","./assets/img/faces/marc.jpg",1,"img"],[1,"card-category","text-gray"],[1,"card-description"],["href","javascript:void(0)",1,"btn","btn-danger","btn-round"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"h4",6),t._uU(7,"Hotel"),t.qZA(),t.TgZ(8,"p",7),t._uU(9,"Complete your profile"),t.qZA()(),t.TgZ(10,"div",8)(11,"form")(12,"div",2)(13,"div",9)(14,"mat-form-field",10),t._UZ(15,"input",11),t.qZA()(),t.TgZ(16,"div",12)(17,"mat-form-field",10),t._UZ(18,"input",13),t.qZA()(),t.TgZ(19,"div",14)(20,"mat-form-field",10),t._UZ(21,"input",15),t.qZA()()(),t.TgZ(22,"div",2)(23,"div",16)(24,"mat-form-field",10),t._UZ(25,"input",17),t.qZA()(),t.TgZ(26,"div",16)(27,"mat-form-field",10),t._UZ(28,"input",18),t.qZA()()(),t.TgZ(29,"div",2)(30,"div",19)(31,"mat-form-field",10),t._UZ(32,"input",20),t.qZA()()(),t.TgZ(33,"div",2)(34,"div",14)(35,"mat-form-field",10),t._UZ(36,"input",21),t.qZA()(),t.TgZ(37,"div",14)(38,"mat-form-field",10),t._UZ(39,"input",22),t.qZA()(),t.TgZ(40,"div",14)(41,"mat-form-field",10),t._UZ(42,"input",23),t.qZA()()(),t.TgZ(43,"div",2)(44,"div",19)(45,"label"),t._uU(46,"About Me"),t.qZA(),t.TgZ(47,"mat-form-field",10),t._UZ(48,"textarea",24),t.qZA()()(),t.TgZ(49,"button",25),t._uU(50,"Update Profile"),t.qZA(),t._UZ(51,"div",26),t.qZA()()()(),t.TgZ(52,"div",14)(53,"div",27)(54,"div",28)(55,"a",29),t._UZ(56,"img",30),t.qZA()(),t.TgZ(57,"div",8)(58,"h6",31),t._uU(59,"CEO / Co-Founder"),t.qZA(),t.TgZ(60,"h4",6),t._uU(61,"Alec Thompson"),t.qZA(),t.TgZ(62,"p",32),t._uU(63," Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens\u2019 bed design but the back is... "),t.qZA(),t.TgZ(64,"a",33),t._uU(65,"Follow"),t.qZA()()()()()()())},directives:[F.KE,A.Nt,v.lW],styles:[""]}),e}(),U=a(5245),I=[{path:"",pathMatch:"full",component:function(){var e=function(){function i(){(0,u.Z)(this,i)}return(0,s.Z)(i,[{key:"ngOnInit",value:function(){}}]),i}();return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-index"]],decls:16,vars:0,consts:[[1,"main-content"],[1,"container-fluid"],[1,"row"],[1,"col-md-12"],[1,"card"],[1,"card-header","card-header-danger"],[1,"card-title"],["mat-mini-fab","","aria-label","Example icon button with a delete icon","routerLink","unos",1,"pull-right"],[1,"card-category"],[1,"card-body"],[1,"table-responsive"],["id","datatable_hotel",1,"table","table-bordered","table-striped","table-sm"],["dataTableHotel",""]],template:function(o,n){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"h4",6),t._uU(7,"Hoteli "),t.TgZ(8,"button",7)(9,"mat-icon"),t._uU(10,"add"),t.qZA()()(),t._UZ(11,"p",8),t.qZA(),t.TgZ(12,"div",9)(13,"div",10),t._UZ(14,"table",11,12),t.qZA()()()()()()())},directives:[v.lW,c.rH,U.Hw],styles:[""]}),e}()},{path:"unos",pathMatch:"full",component:Z},{path:":hotelId",component:g},{path:":hotelId/izmena",component:Z}],x=function(){var e=(0,s.Z)(function i(){(0,u.Z)(this,i)});return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[c.Bz.forChild(I)],c.Bz]}),e}(),H=a(1531),k=function(){var e=(0,s.Z)(function i(){(0,u.Z)(this,i)});return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[p.ez,x,H.q]]}),e}()}}]);