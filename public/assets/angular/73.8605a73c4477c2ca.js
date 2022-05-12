"use strict";(self.webpackChunkangular=self.webpackChunkangular||[]).push([[73],{51374:function(C,v,n){n.d(v,{D:function(){return e}});var h=n(15671),f=n(43144),l=n(91891),a=n(69808),_=n(47423),u=n(74202);function s(t,i){if(1&t&&(l.TgZ(0,"li",12)(1,"a",13)(2,"i",14),l._uU(3,"bug_report"),l.qZA(),l._uU(4),l._UZ(5,"div",15),l.qZA()()),2&t){var r=i.$implicit;l.xp6(1),l.Q6J("routerLink",r.path),l.xp6(3),l.hij(" ",r.title," ")}}var o=[{path:"osnovni-podaci",title:"Osnovni podaci",icon:"dashboard",class:""},{path:"smene",title:"Smene",icon:"home",class:""},{path:"dodatni-paketi",title:"Dodatni paketi",icon:"home",class:""},{path:"prijave",title:"Prijave",icon:"home",class:""},{path:"ucesnici",title:"U\u010desnici",icon:"work_history",class:""},{path:"uplate",title:"Uplate",icon:"people_alt",class:""},{path:"oprema",title:"Oprema",icon:"manage_accounts",class:""}],e=function(){var t=function(){function i(){(0,h.Z)(this,i),this.menuItems=o}return(0,f.Z)(i,[{key:"ngOnInit",value:function(){}}]),i}();return t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=l.Xpm({type:t,selectors:[["app-details-layout-component"]],decls:13,vars:1,consts:[[1,"main-content"],[1,"container-fluid"],[1,"row"],[1,"col-md-12"],[1,"card"],[1,"card-header","card-header-tabs","card-header-danger"],[1,"nav-tabs-navigation"],[1,"nav-tabs-wrapper"],[1,"nav-tabs-title"],["data-tabs","tabs",1,"nav","nav-tabs"],["class","nav-item",4,"ngFor","ngForOf"],[1,"card-body"],[1,"nav-item"],["mat-button","","routerLinkActive","active","data-toggle","tab",1,"nav-link",3,"routerLink"],[1,"material-icons"],[1,"ripple-container"]],template:function(r,b){1&r&&(l.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7),l._UZ(8,"span",8),l.TgZ(9,"ul",9),l.YNc(10,s,6,2,"li",10),l.qZA()()()(),l.TgZ(11,"div",11),l._UZ(12,"router-outlet"),l.qZA()()()()()()),2&r&&(l.xp6(10),l.Q6J("ngForOf",b.menuItems))},directives:[a.sg,_.zs,u.yS,u.Od,u.lC],styles:[""]}),t}()},61355:function(C,v,n){n.d(v,{W:function(){return s}});var h=n(15671),f=n(43144),l=n(71776),a=n(91891),_=n(74202),u=["dataTableOprema"],s=function(){var o=function(){function e(t,i,r){(0,h.Z)(this,e),this.router=t,this.activatedRoute=i,this.opremaService=r}return(0,f.Z)(e,[{key:"ngOnInit",value:function(){}},{key:"ngAfterViewInit",value:function(){var i=this,r=this;this.dataTable=$(this.table.nativeElement),this.dataTable.DataTable({ajax:function(c,d){var p;c.kamp_id=null===(p=i.activatedRoute.snapshot.parent.params)||void 0===p?void 0:p.kampId,i.opremaService.datatable(c).subscribe(function(m){d({recordsTotal:m.recordsTotal,recordsFiltered:m.recordsFiltered,data:m.data,kamp_id:m.kamp_id})})},responsive:!0,autoWidth:!1,buttons:{buttons:[{text:'<i class="fas fa-plus"></i>',action:function(c,d,p,m){r.router.navigateByUrl("/korisnici/create")},className:"btn btn-primary"}],dom:{button:{className:"btn"}}},columns:[{title:"Kamp",data:"kamp",name:"kamps.naziv"},{title:"Naziv",data:"naziv",name:"naziv"},{title:"Period",data:"period",name:"period"},{title:"Cena",data:"cena",name:"cena"},{title:"Broj u\u010desnika",data:"broj_ucesnika",name:"broj_ucesnika"},{title:"Akcije",data:"action",name:"action",width:"10%"}],initComplete:function(c,d){console.log("init complete"),console.log(d),r.dataTable.DataTable().columns(0).visible(null==d.kamp_id)},drawCallback:function(){$(".btnEditOprema").on("click",function(c){r.router.navigateByUrl("/oprema/izmena/".concat($(this).data("id")))}),$(".btnRemoveOprema").on("click",function(c){r.router.navigateByUrl("/oprema/brisanje/".concat($(this).data("id")))})}}).buttons().container().appendTo("#datatable_oprema_wrapper .col-md-6:eq(0)")}}]),e}();return o.\u0275fac=function(t){return new(t||o)(a.Y36(_.F0),a.Y36(_.gz),a.Y36(l.T))},o.\u0275cmp=a.Xpm({type:o,selectors:[["app-oprema-datatable"]],viewQuery:function(t,i){var r;1&t&&a.Gf(u,5),2&t&&a.iGM(r=a.CRH())&&(i.table=r.first)},decls:3,vars:0,consts:[[1,"table-responsive"],["id","datatable_oprema",1,"table","table-bordered","table-striped","table-sm"],["dataTableOprema",""]],template:function(t,i){1&t&&(a.TgZ(0,"div",0),a._UZ(1,"table",1,2),a.qZA())},styles:[""]}),o}()},71776:function(C,v,n){n.d(v,{T:function(){return u}});var h=n(15671),f=n(43144),l=n(40520),a=n(92340),_=n(91891),u=function(){var s=function(){function o(e){(0,h.Z)(this,o),this.httpClient=e,this.httpOptions={headers:new l.WM({"Content-Type":"application/json"})}}return(0,f.Z)(o,[{key:"datatable",value:function(t){return this.httpClient.post("".concat(a.N.api_url,"/datatable/hotel"),t)}},{key:"all",value:function(){return this.httpClient.get("".concat(a.N.api_url,"/hotel"))}},{key:"find",value:function(t){return this.httpClient.get("".concat(a.N.api_url,"/hotel/").concat(t))}},{key:"store",value:function(t){return this.httpClient.post("".concat(a.N.api_url,"/hotel"),JSON.stringify(t),this.httpOptions)}},{key:"update",value:function(t,i){return this.httpClient.put("".concat(a.N.api_url,"/hotel/id"),JSON.stringify(i),this.httpOptions)}},{key:"delete",value:function(t){return this.httpClient.delete("".concat(a.N.api_url,"/hotel/").concat(t),this.httpOptions)}}]),o}();return s.\u0275fac=function(e){return new(e||s)(_.LFG(l.eN))},s.\u0275prov=_.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s}()},52347:function(C,v,n){n.d(v,{S:function(){return s}});var h=n(15671),f=n(43144),l=n(72808),a=n(91891),_=n(74202),u=["dataTableSmena"],s=function(){var o=function(){function e(t,i,r){(0,h.Z)(this,e),this.router=t,this.activatedRoute=i,this.smenaService=r}return(0,f.Z)(e,[{key:"ngOnInit",value:function(){}},{key:"ngAfterViewInit",value:function(){var i=this,r=this;this.dataTable=$(this.table.nativeElement),this.dataTable.DataTable({ajax:function(c,d){var p;c.kamp_id=null===(p=i.activatedRoute.snapshot.parent.params)||void 0===p?void 0:p.kampId,i.smenaService.datatable(c).subscribe(function(m){d({recordsTotal:m.recordsTotal,recordsFiltered:m.recordsFiltered,data:m.data,kamp_id:m.kamp_id})})},responsive:!0,autoWidth:!1,buttons:{buttons:[{text:'<i class="fas fa-plus"></i>',action:function(c,d,p,m){r.router.navigateByUrl("/korisnici/create")},className:"btn btn-primary"}],dom:{button:{className:"btn"}}},columns:[{title:"Kamp",data:"kamp",name:"kamps.naziv"},{title:"Naziv",data:"naziv",name:"naziv"},{title:"Period",data:"period",name:"period"},{title:"Cena",data:"cena",name:"cena"},{title:"Broj u\u010desnika",data:"broj_ucesnika",name:"broj_ucesnika"},{title:"De\u010daci",data:"broj_muskih_ucesnika",name:"broj_muskih_ucesnika"},{title:"Devoj\u010dice",data:"broj_zenskih_ucesnika",name:"broj_zenskih_ucesnika"},{title:"Akcije",data:"action",name:"action",width:"120px"}],initComplete:function(c,d){r.dataTable.DataTable().columns(0).visible(null==d.kamp_id)},drawCallback:function(){$(".btnEditSmena").on("click",function(c){r.router.navigateByUrl("/smena/izmena/".concat($(this).data("id")))}),$(".btnRemoveSmena").on("click",function(c){r.router.navigateByUrl("/smena/brisanje/".concat($(this).data("id")))})}}).buttons().container().appendTo("#datatable_smena_wrapper .col-md-6:eq(0)")}}]),e}();return o.\u0275fac=function(t){return new(t||o)(a.Y36(_.F0),a.Y36(_.gz),a.Y36(l.n))},o.\u0275cmp=a.Xpm({type:o,selectors:[["app-smena-datatable"]],viewQuery:function(t,i){var r;1&t&&a.Gf(u,5),2&t&&a.iGM(r=a.CRH())&&(i.table=r.first)},decls:3,vars:0,consts:[[1,"table-responsive"],["id","datatable_smena",1,"table","table-bordered","table-striped","table-sm"],["dataTableSmena",""]],template:function(t,i){1&t&&(a.TgZ(0,"div",0),a._UZ(1,"table",1,2),a.qZA())},styles:[""]}),o}()},72808:function(C,v,n){n.d(v,{n:function(){return u}});var h=n(15671),f=n(43144),l=n(40520),a=n(92340),_=n(91891),u=function(){var s=function(){function o(e){(0,h.Z)(this,o),this.httpClient=e,this.httpOptions={headers:new l.WM({"Content-Type":"application/json"})}}return(0,f.Z)(o,[{key:"datatable",value:function(t){return this.httpClient.post("".concat(a.N.api_url,"/datatable/smena"),t)}},{key:"all",value:function(){return this.httpClient.get("".concat(a.N.api_url,"/smena"))}},{key:"find",value:function(t){return this.httpClient.get("".concat(a.N.api_url,"/smena/").concat(t))}},{key:"store",value:function(t){return this.httpClient.post("".concat(a.N.api_url,"/smena"),JSON.stringify(t),this.httpOptions)}},{key:"update",value:function(t,i){return this.httpClient.put("".concat(a.N.api_url,"/smena/").concat(t),JSON.stringify(i),this.httpOptions)}},{key:"delete",value:function(t){return this.httpClient.delete("".concat(a.N.api_url,"/smena/").concat(t),this.httpOptions)}}]),o}();return s.\u0275fac=function(e){return new(e||s)(_.LFG(l.eN))},s.\u0275prov=_.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s}()},86867:function(C,v,n){n.d(v,{Y:function(){return s}});var h=n(15671),f=n(43144),l=n(65265),a=n(91891),_=n(74202),u=["dataTableUcesnik"],s=function(){var o=function(){function e(t,i){(0,h.Z)(this,e),this.router=t,this.ucesnikService=i}return(0,f.Z)(e,[{key:"ngOnInit",value:function(){}},{key:"ngAfterViewInit",value:function(){var i=this,r=this;this.dataTable=$(this.table.nativeElement),this.dataTable.DataTable({ajax:function(c,d){i.ucesnikService.datatable(c).subscribe(function(p){d({recordsTotal:p.recordsTotal,recordsFiltered:p.recordsFiltered,data:p.data})})},responsive:!0,autoWidth:!1,buttons:{buttons:[{text:'<i class="fas fa-plus"></i>',action:function(c,d,p,m){r.router.navigateByUrl("/korisnici/create")},className:"btn btn-primary"}],dom:{button:{className:"btn"}}},columns:[{title:"U\u010desnik",data:"ucesnik",name:"ucesnik"},{title:"Adresa",data:"puna_adresa",name:"puna_adresa"},{title:"Roditelj",data:"roditelj",name:"roditelj"},{title:"Broj kampova",data:"broj_kampova",name:"broj_kampova"},{title:"Akcije",data:"action",name:"action",width:"10%"}],drawCallback:function(){$(".btnEditUcesnik").on("click",function(c){r.router.navigateByUrl("/korisnici/update/".concat($(c.target).data("id")))}),$(".btnRemoveUcesnik").on("click",function(c){r.router.navigateByUrl("/korisnici/delete/".concat($(c.target).data("id")))})}}).buttons().container().appendTo("#datatable_korisnik_wrapper .col-md-6:eq(0)")}}]),e}();return o.\u0275fac=function(t){return new(t||o)(a.Y36(_.F0),a.Y36(l.M))},o.\u0275cmp=a.Xpm({type:o,selectors:[["app-ucesnik-datatable"]],viewQuery:function(t,i){var r;1&t&&a.Gf(u,5),2&t&&a.iGM(r=a.CRH())&&(i.table=r.first)},decls:3,vars:0,consts:[[1,"table-responsive"],["id","datatable_ucesnik",1,"table","table-bordered","table-striped","table-sm"],["dataTableUcesnik",""]],template:function(t,i){1&t&&(a.TgZ(0,"div",0),a._UZ(1,"table",1,2),a.qZA())},styles:[""]}),o}()},65265:function(C,v,n){n.d(v,{M:function(){return u}});var h=n(15671),f=n(43144),l=n(40520),a=n(92340),_=n(91891),u=function(){var s=function(){function o(e){(0,h.Z)(this,o),this.httpClient=e,this.httpOptions={headers:new l.WM({"Content-Type":"application/json"})}}return(0,f.Z)(o,[{key:"datatable",value:function(t){return this.httpClient.post("".concat(a.N.api_url,"/datatable/ucesnik"),t)}},{key:"all",value:function(){return this.httpClient.get("".concat(a.N.api_url,"/ucesnik"))}},{key:"find",value:function(t){return this.httpClient.get("".concat(a.N.api_url,"/ucesnik/").concat(t))}},{key:"store",value:function(t){return this.httpClient.post("".concat(a.N.api_url,"/ucesnik"),JSON.stringify(t),this.httpOptions)}},{key:"update",value:function(t,i){return this.httpClient.put("".concat(a.N.api_url,"/ucesnik/id"),JSON.stringify(i),this.httpOptions)}},{key:"delete",value:function(t){return this.httpClient.delete("".concat(a.N.api_url,"/ucesnik/").concat(t),this.httpOptions)}}]),o}();return s.\u0275fac=function(e){return new(e||s)(_.LFG(l.eN))},s.\u0275prov=_.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s}()},28387:function(C,v,n){n.d(v,{R:function(){return s}});var h=n(15671),f=n(43144),l=n(33812),a=n(91891),_=n(74202),u=["dataTableUplata"],s=function(){var o=function(){function e(t,i,r){(0,h.Z)(this,e),this.router=t,this.activatedRoute=i,this.uplataService=r}return(0,f.Z)(e,[{key:"ngOnInit",value:function(){}},{key:"ngAfterViewInit",value:function(){var i=this,r=this;this.dataTable=$(this.table.nativeElement),this.dataTable.DataTable({ajax:function(c,d){var p;c.kamp_id=null===(p=i.activatedRoute.snapshot.parent.params)||void 0===p?void 0:p.kampId,i.uplataService.datatable(c).subscribe(function(m){d({recordsTotal:m.recordsTotal,recordsFiltered:m.recordsFiltered,data:m.data,kamp_id:m.kamp_id})})},responsive:!0,autoWidth:!1,buttons:{buttons:[{text:'<i class="fas fa-plus"></i>',action:function(c,d,p,m){r.router.navigateByUrl("/korisnici/create")},className:"btn btn-primary"}],dom:{button:{className:"btn"}}},columns:[{title:"Kamp",data:"kamp",name:"kamps.naziv"},{title:"Naziv",data:"naziv",name:"naziv"},{title:"Period",data:"period",name:"period"},{title:"Cena",data:"cena",name:"cena"},{title:"Broj u\u010desnika",data:"broj_ucesnika",name:"broj_ucesnika"},{title:"Akcije",data:"action",name:"action",width:"10%"}],initComplete:function(c,d){r.dataTable.DataTable().columns(0).visible(null==d.kamp_id)},drawCallback:function(){$(".btnEditUplata").on("click",function(c){r.router.navigateByUrl("/uplata/izmena/".concat($(this).data("id")))}),$(".btnRemoveUplata").on("click",function(c){r.router.navigateByUrl("/uplata/brisanje/".concat($(this).data("id")))})}}).buttons().container().appendTo("#datatable_uplata_wrapper .col-md-6:eq(0)")}}]),e}();return o.\u0275fac=function(t){return new(t||o)(a.Y36(_.F0),a.Y36(_.gz),a.Y36(l.J))},o.\u0275cmp=a.Xpm({type:o,selectors:[["app-uplata-datatable"]],viewQuery:function(t,i){var r;1&t&&a.Gf(u,5),2&t&&a.iGM(r=a.CRH())&&(i.table=r.first)},decls:3,vars:0,consts:[[1,"table-responsive"],["id","datatable_uplata",1,"table","table-bordered","table-striped","table-sm"],["dataTableUplata",""]],template:function(t,i){1&t&&(a.TgZ(0,"div",0),a._UZ(1,"table",1,2),a.qZA())},styles:[""]}),o}()},33812:function(C,v,n){n.d(v,{J:function(){return u}});var h=n(15671),f=n(43144),l=n(40520),a=n(92340),_=n(91891),u=function(){var s=function(){function o(e){(0,h.Z)(this,o),this.httpClient=e,this.httpOptions={headers:new l.WM({"Content-Type":"application/json"})}}return(0,f.Z)(o,[{key:"datatable",value:function(t){return this.httpClient.post("".concat(a.N.api_url,"/datatable/uplata"),t)}},{key:"all",value:function(){return this.httpClient.get("".concat(a.N.api_url,"/uplata"))}},{key:"find",value:function(t){return this.httpClient.get("".concat(a.N.api_url,"/uplata/").concat(t))}},{key:"store",value:function(t){return this.httpClient.post("".concat(a.N.api_url,"/uplata"),JSON.stringify(t),this.httpOptions)}},{key:"update",value:function(t,i){return this.httpClient.put("".concat(a.N.api_url,"/uplata/id"),JSON.stringify(i),this.httpOptions)}},{key:"delete",value:function(t){return this.httpClient.delete("".concat(a.N.api_url,"/uplata/").concat(t),this.httpOptions)}}]),o}();return s.\u0275fac=function(e){return new(e||s)(_.LFG(l.eN))},s.\u0275prov=_.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s}()}}]);