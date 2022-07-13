"use strict";(self.webpackChunkangular=self.webpackChunkangular||[]).push([[935],{54394:function(C,v,o){o.d(v,{a:function(){return l}});var h=o(15671),b=o(43144),p=o(30494),a=o(91891),u=o(74202),m=["dtHotel"],l=function(){var s=function(){function i(t,e,n){(0,h.Z)(this,i),this.router=t,this.hotelService=e,this.activatedRoute=n}return(0,b.Z)(i,[{key:"ngOnInit",value:function(){var e,n;this.kamp_id=null===(e=this.activatedRoute.snapshot.parent.params)||void 0===e?void 0:e.kampId,this.smena_id=null===(n=this.activatedRoute.snapshot.parent.params)||void 0===n?void 0:n.smenaId}},{key:"ngOnChanges",value:function(e){this.dataTable&&this.dataTable.DataTable().ajax.reload()}},{key:"ngAfterViewInit",value:function(){var e=this,n=this;this.dataTable=$(this.table.nativeElement),this.dataTable.DataTable({ajax:function(r,c){r.kamp_id=e.kamp_id,r.smena_id=e.smena_id,e.hotelService.datatable(r).subscribe(function(_){c({recordsTotal:_.recordsTotal,recordsFiltered:_.recordsFiltered,data:_.data})})},responsive:!0,autoWidth:!1,buttons:{buttons:[{text:'<i class="fas fa-plus"></i>',action:function(r,c,_,f){n.router.navigateByUrl("/korisnici/create")},className:"btn btn-primary"}],dom:{button:{className:"btn"}}},columns:[{title:"U\u010desnik",data:"ucesnik",name:"ime"},{title:"Roditelj",data:"roditelj",name:"prezime"},{title:"Sopstveni sme\u0161taj",data:"sopstveni_smestaj",name:"sopstveni_smestaj"},{title:"Napomena",data:"napomena_smestaj",name:"napomena_smestaj"},{title:"Broj sobe",data:"broj_sobe",name:"broj_sobe",className:"dt-center"},{title:"Akcije",data:"action",name:"action",width:"10%",className:"dt-center"}],columnDefs:[{targets:[2],render:function(r,c,_){return r?"DA":"NE"}}],drawCallback:function(){$(".btnEditKorisnik").on("click",function(r){n.router.navigateByUrl("/korisnici/update/".concat($(r.target).data("id")))}),$(".btnRemoveKorisnik").on("click",function(r){n.router.navigateByUrl("/korisnici/delete/".concat($(r.target).data("id")))})}}).buttons().container().appendTo("#datatable_korisnik_wrapper .col-md-6:eq(0)")}}]),i}();return s.\u0275fac=function(t){return new(t||s)(a.Y36(u.F0),a.Y36(p.N),a.Y36(u.gz))},s.\u0275cmp=a.Xpm({type:s,selectors:[["app-hotel-datatable"]],viewQuery:function(t,e){var n;1&t&&a.Gf(m,5),2&t&&a.iGM(n=a.CRH())&&(e.table=n.first)},inputs:{kamp_id:"kamp_id",smena_id:"smena_id"},features:[a.TTD],decls:3,vars:0,consts:[[1,"table-responsive"],["id","datatable_hotel",1,"table","table-bordered","table-striped","table-sm"],["dtHotel",""]],template:function(t,e){1&t&&(a.TgZ(0,"div",0),a._UZ(1,"table",1,2),a.qZA())},styles:[""]}),s}()},30494:function(C,v,o){o.d(v,{N:function(){return l}});var h=o(15671),b=o(43144),p=o(40520),a=o(92340),u=o(61737),m=o(91891),l=function(){var s=function(){function i(t){(0,h.Z)(this,i),this.httpClient=t,this.httpOptions={headers:new p.WM({"Content-Type":"application/json"})}}return(0,b.Z)(i,[{key:"datatable",value:function(e){return this.httpClient.post("".concat(a.N.api_url,"/datatable/hotel"),e)}},{key:"all",value:function(){return this.httpClient.get("".concat(a.N.api_url,"/hotel"))}},{key:"find",value:function(e){return this.httpClient.get("".concat(a.N.api_url,"/hotel/").concat(e))}},{key:"store",value:function(e){return this.httpClient.post("".concat(a.N.api_url,"/hotel"),JSON.stringify(e),this.httpOptions)}},{key:"update",value:function(e,n){return this.httpClient.put("".concat(a.N.api_url,"/hotel/id"),JSON.stringify(n),this.httpOptions)}},{key:"delete",value:function(e){return this.httpClient.delete("".concat(a.N.api_url,"/hotel/").concat(e),this.httpOptions)}},{key:"errorHandler",value:function(e){var n;return n=e.error instanceof ErrorEvent?e.error.message:"Error Code: ".concat(e.status,"\nMessage: ").concat(e.message),console.log(n),(0,u._)(n)}}]),i}();return s.\u0275fac=function(t){return new(t||s)(m.LFG(p.eN))},s.\u0275prov=m.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s}()},61355:function(C,v,o){o.d(v,{W:function(){return l}});var h=o(15671),b=o(43144),p=o(71776),a=o(91891),u=o(74202),m=["dataTableOprema"],l=function(){var s=function(){function i(t,e,n){(0,h.Z)(this,i),this.router=t,this.activatedRoute=e,this.opremaService=n}return(0,b.Z)(i,[{key:"ngOnInit",value:function(){var e,n;this.kamp_id=null===(e=this.activatedRoute.snapshot.parent.params)||void 0===e?void 0:e.kampId,this.smena_id=null===(n=this.activatedRoute.snapshot.parent.params)||void 0===n?void 0:n.smenaId}},{key:"ngOnChanges",value:function(e){this.dataTable&&this.dataTable.DataTable().ajax.reload()}},{key:"ngAfterViewInit",value:function(){var e=this,n=this;this.dataTable=$(this.table.nativeElement),this.dataTable.DataTable({ajax:function(r,c){r.kamp_id=e.kamp_id,r.smena_id=e.smena_id,e.opremaService.datatable(r).subscribe(function(_){c({recordsTotal:_.recordsTotal,recordsFiltered:_.recordsFiltered,data:_.data,kamp_id:_.kamp_id})})},responsive:!0,autoWidth:!1,buttons:{buttons:[{text:'<i class="fas fa-plus"></i>',action:function(r,c,_,f){n.router.navigateByUrl("/korisnici/create")},className:"btn btn-primary"}],dom:{button:{className:"btn"}}},columns:[{title:"Veli\u010dina",data:"naziv",name:"velicinas.naziv"},{title:"Majice (de\u010daci)",data:"majice_m",name:"majice_m"},{title:"Majice (devoj\u010dice)",data:"majice_z",name:"majice_z"},{title:"Duksevi (de\u010daci)",data:"duksevi_m",name:"duksevi_m"},{title:"Duksevi (devoj\u010dice)",data:"duksevi_z",name:"duksevi_z"},{title:"\u0160orcevi (de\u010daci)",data:"sorcevi_m",name:"sorcevi_m"},{title:"\u0160orcevi (devoj\u010dice)",data:"sorcevi_z",name:"sorcevi_z"},{title:"Akcije",data:"action",name:"action",width:"10%",className:"dt-center"}],initComplete:function(r,c){n.dataTable.DataTable().columns(0).visible(null==c.kamp_id)},drawCallback:function(){$(".btnShowOprema").on("click",function(r){n.router.navigateByUrl("admin/oprema/".concat(n.smena_id,"/").concat($(this).data("id")))}),$(".btnRemoveOprema").on("click",function(r){n.router.navigateByUrl("/oprema/brisanje/".concat($(this).data("id")))})},language:{url:"//cdn.datatables.net/plug-ins/1.12.1/i18n/sr-SP.json"}}).buttons().container().appendTo("#datatable_oprema_wrapper .col-md-6:eq(0)")}}]),i}();return s.\u0275fac=function(t){return new(t||s)(a.Y36(u.F0),a.Y36(u.gz),a.Y36(p.T))},s.\u0275cmp=a.Xpm({type:s,selectors:[["app-oprema-datatable"]],viewQuery:function(t,e){var n;1&t&&a.Gf(m,5),2&t&&a.iGM(n=a.CRH())&&(e.table=n.first)},inputs:{kamp_id:"kamp_id",smena_id:"smena_id"},features:[a.TTD],decls:3,vars:0,consts:[[1,"table-responsive"],["id","datatable_oprema",1,"table","table-bordered","table-striped","table-sm"],["dataTableOprema",""]],template:function(t,e){1&t&&(a.TgZ(0,"div",0),a._UZ(1,"table",1,2),a.qZA())},styles:[""]}),s}()},71776:function(C,v,o){o.d(v,{T:function(){return m}});var h=o(15671),b=o(43144),p=o(40520),a=o(92340),u=o(91891),m=function(){var l=function(){function s(i){(0,h.Z)(this,s),this.httpClient=i,this.httpOptions={headers:new p.WM({"Content-Type":"application/json"})}}return(0,b.Z)(s,[{key:"datatable",value:function(t){return this.httpClient.post("".concat(a.N.api_url,"/datatable/oprema"),t)}},{key:"datatable_ucesnici",value:function(t){return this.httpClient.post("".concat(a.N.api_url,"/datatable/oprema/ucesnici"),t)}},{key:"datatable_treneri",value:function(t){return this.httpClient.post("".concat(a.N.api_url,"/datatable/oprema/treneri"),t)}},{key:"all",value:function(){return this.httpClient.get("".concat(a.N.api_url,"/hotel"))}},{key:"find",value:function(t){return this.httpClient.get("".concat(a.N.api_url,"/hotel/").concat(t))}},{key:"store",value:function(t){return this.httpClient.post("".concat(a.N.api_url,"/hotel"),JSON.stringify(t),this.httpOptions)}},{key:"update",value:function(t,e){return this.httpClient.put("".concat(a.N.api_url,"/hotel/id"),JSON.stringify(e),this.httpOptions)}},{key:"delete",value:function(t){return this.httpClient.delete("".concat(a.N.api_url,"/hotel/").concat(t),this.httpOptions)}},{key:"statistika",value:function(t){return this.httpClient.post("".concat(a.N.api_url,"/oprema/statistika"),{kamp_id:t},this.httpOptions)}}]),s}();return l.\u0275fac=function(i){return new(i||l)(u.LFG(p.eN))},l.\u0275prov=u.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l}()},5431:function(C,v,o){o.d(v,{f:function(){return l}});var h=o(15671),b=o(43144),p=o(63364),a=o(91891),u=o(74202),m=["dataTablePrevoz"],l=function(){var s=function(){function i(t,e,n){(0,h.Z)(this,i),this.router=t,this.activatedRoute=e,this.prevozService=n}return(0,b.Z)(i,[{key:"ngOnInit",value:function(){var e,n;this.kamp_id=null===(e=this.activatedRoute.snapshot.parent.params)||void 0===e?void 0:e.kampId,this.smena_id=null===(n=this.activatedRoute.snapshot.parent.params)||void 0===n?void 0:n.smenaId}},{key:"ngOnChanges",value:function(e){this.dataTable&&this.dataTable.DataTable().ajax.reload()}},{key:"ngAfterViewInit",value:function(){var e=this,n=this;this.dataTable=$(this.table.nativeElement),this.dataTable.DataTable({ajax:function(r,c){r.kamp_id=e.kamp_id,r.smena_id=e.smena_id,e.prevozService.datatable(r).subscribe(function(_){c({recordsTotal:_.recordsTotal,recordsFiltered:_.recordsFiltered,data:_.data,kamp_id:_.kamp_id})})},responsive:!0,autoWidth:!1,buttons:{buttons:[{text:'<i class="fas fa-plus"></i>',action:function(r,c,_,f){n.router.navigateByUrl("/korisnici/create")},className:"btn btn-primary"}],dom:{button:{className:"btn"}}},columns:[{title:"U\u010desnik",data:"ucesnik",name:"ucesniks.ime"},{title:"Roditelj",data:"roditelj",name:"roditeljs.ime"},{title:"Prevoz",data:"prevoz",name:"tip_prevozas.naziv"},{title:"Organizovani prevoz",data:"organizovani_prevoz",name:"ucesniks.ime"},{title:"Akcije",data:"action",name:"action",width:"10%",className:"dt-center"}],initComplete:function(r,c){n.dataTable.DataTable().columns(0).visible(null==c.kamp_id)},drawCallback:function(){$(".btnEditOprema").on("click",function(r){n.router.navigateByUrl("/oprema/izmena/".concat($(this).data("id")))}),$(".btnRemoveOprema").on("click",function(r){n.router.navigateByUrl("/oprema/brisanje/".concat($(this).data("id")))})},language:{url:"//cdn.datatables.net/plug-ins/1.12.1/i18n/sr-SP.json"}}).buttons().container().appendTo("#datatable_oprema_wrapper .col-md-6:eq(0)")}}]),i}();return s.\u0275fac=function(t){return new(t||s)(a.Y36(u.F0),a.Y36(u.gz),a.Y36(p.F))},s.\u0275cmp=a.Xpm({type:s,selectors:[["app-prevoz-datatable"]],viewQuery:function(t,e){var n;1&t&&a.Gf(m,5),2&t&&a.iGM(n=a.CRH())&&(e.table=n.first)},inputs:{kamp_id:"kamp_id",smena_id:"smena_id"},features:[a.TTD],decls:3,vars:0,consts:[[1,"table-responsive"],["id","datatable_prevoz",1,"table","table-bordered","table-striped","table-sm"],["dataTablePrevoz",""]],template:function(t,e){1&t&&(a.TgZ(0,"div",0),a._UZ(1,"table",1,2),a.qZA())},styles:[""]}),s}()},63364:function(C,v,o){o.d(v,{F:function(){return m}});var h=o(15671),b=o(43144),p=o(40520),a=o(92340),u=o(91891),m=function(){var l=function(){function s(i){(0,h.Z)(this,s),this.httpClient=i,this.httpOptions={headers:new p.WM({"Content-Type":"application/json"})}}return(0,b.Z)(s,[{key:"datatable",value:function(t){return this.httpClient.post("".concat(a.N.api_url,"/datatable/prevoz"),t)}},{key:"all",value:function(){return this.httpClient.get("".concat(a.N.api_url,"/prevoz"))}},{key:"find",value:function(t){return this.httpClient.get("".concat(a.N.api_url,"/prevoz/").concat(t))}},{key:"store",value:function(t){return this.httpClient.post("".concat(a.N.api_url,"/prevoz"),JSON.stringify(t),this.httpOptions)}},{key:"update",value:function(t,e){return this.httpClient.put("".concat(a.N.api_url,"/prevoz/id"),JSON.stringify(e),this.httpOptions)}},{key:"delete",value:function(t){return this.httpClient.delete("".concat(a.N.api_url,"/prevoz/").concat(t),this.httpOptions)}}]),s}();return l.\u0275fac=function(i){return new(i||l)(u.LFG(p.eN))},l.\u0275prov=u.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l}()},52347:function(C,v,o){o.d(v,{S:function(){return l}});var h=o(15671),b=o(43144),p=o(72808),a=o(91891),u=o(74202),m=["dataTableSmena"],l=function(){var s=function(){function i(t,e,n){(0,h.Z)(this,i),this.router=t,this.activatedRoute=e,this.smenaService=n}return(0,b.Z)(i,[{key:"ngOnInit",value:function(){}},{key:"ngAfterViewInit",value:function(){var e=this,n=this;this.dataTable=$(this.table.nativeElement),this.dataTable.DataTable({ajax:function(r,c){var _;r.kamp_id=null===(_=e.activatedRoute.snapshot.parent.params)||void 0===_?void 0:_.kampId,e.smenaService.datatable(r).subscribe(function(f){c({recordsTotal:f.recordsTotal,recordsFiltered:f.recordsFiltered,data:f.data,kamp_id:f.kamp_id})})},responsive:!0,autoWidth:!1,buttons:{buttons:[{text:'<i class="fas fa-plus"></i>',action:function(r,c,_,f){n.router.navigateByUrl("/korisnici/create")},className:"btn btn-primary"}],dom:{button:{className:"btn"}}},columns:[{title:"Kamp",data:"kamp",name:"kamps.naziv"},{title:"Smena",data:"smena",name:"naziv"},{title:"Cena",data:"cena",name:"cena"},{title:"Broj u\u010desnika",data:"broj_ucesnika",name:"broj_ucesnika",className:"dt-center"},{title:"De\u010daci",data:"broj_muskih_ucesnika",name:"broj_muskih_ucesnika",className:"dt-center"},{title:"Devoj\u010dice",data:"broj_zenskih_ucesnika",name:"broj_zenskih_ucesnika",className:"dt-center"},{title:"Akcije",data:"action",name:"action",width:"120px",className:"dt-center"}],initComplete:function(r,c){n.dataTable.DataTable().columns(0).visible(null==c.kamp_id)},drawCallback:function(){$(".btnShowSmena").on("click",function(r){n.router.navigateByUrl("/admin/smena/".concat($(this).data("id")))}),$(".btnEditSmena").on("click",function(r){n.router.navigateByUrl("/admin/smena/izmena/".concat($(this).data("id")))}),$(".btnRemoveSmena").on("click",function(r){n.router.navigateByUrl("/admin/smena/brisanje/".concat($(this).data("id")))})},language:{url:"//cdn.datatables.net/plug-ins/1.12.1/i18n/sr-SP.json"}}).buttons().container().appendTo("#datatable_smena_wrapper .col-md-6:eq(0)")}}]),i}();return s.\u0275fac=function(t){return new(t||s)(a.Y36(u.F0),a.Y36(u.gz),a.Y36(p.n))},s.\u0275cmp=a.Xpm({type:s,selectors:[["app-smena-datatable"]],viewQuery:function(t,e){var n;1&t&&a.Gf(m,5),2&t&&a.iGM(n=a.CRH())&&(e.table=n.first)},decls:3,vars:0,consts:[[1,"table-responsive"],["id","datatable_smena",1,"table","table-bordered","table-striped","table-sm"],["dataTableSmena",""]],template:function(t,e){1&t&&(a.TgZ(0,"div",0),a._UZ(1,"table",1,2),a.qZA())},styles:[""]}),s}()},97018:function(C,v,o){o.d(v,{o:function(){return l}});var h=o(15671),b=o(43144),p=o(65265),a=o(91891),u=o(74202),m=["dataTableUcesnik"],l=function(){var s=function(){function i(t,e,n){(0,h.Z)(this,i),this.router=t,this.activatedRoute=e,this.ucesnikService=n}return(0,b.Z)(i,[{key:"ngOnInit",value:function(){var e,n;this.kamp_id=null===(e=this.activatedRoute.snapshot.parent.params)||void 0===e?void 0:e.kampId,this.smena_id=null===(n=this.activatedRoute.snapshot.parent.params)||void 0===n?void 0:n.smenaId}},{key:"ngOnChanges",value:function(e){this.dataTable&&this.dataTable.DataTable().ajax.reload()}},{key:"ngAfterViewInit",value:function(){var n,e=this,d=this;this.dataTable=$(this.table.nativeElement),this.dataTable.DataTable({ajax:function(c,_){c.kamp_id=e.kamp_id,c.smena_id=e.smena_id,e.ucesnikService.datatable(c).subscribe(function(f){_({recordsTotal:f.recordsTotal,recordsFiltered:f.recordsFiltered,data:f.data})})},responsive:!0,autoWidth:!1,buttons:{buttons:[{text:'<i class="fas fa-plus"></i>',action:function(c,_,f,k){d.router.navigateByUrl("/korisnici/create")},className:"btn btn-primary"}],dom:{button:{className:"btn"}}},columns:[{title:"U\u010desnik",data:"ucesnik",name:"ucesnik"},{title:"Roditelj",data:"roditelj",name:"roditelj"},{title:"Datum ro\u0111enja",data:"datum_rodjenja"},{title:"Smene",data:"smene"},{title:"Dodatni paketi",data:"dodatni_paketi"},{title:"Oprema",data:"oprema"},{title:"Broj kampova",data:"broj_kampova",name:"broj_kampova",className:"dt-center"},{title:"Broj smena",data:"broj_smena",className:"dt-center"},{title:"Pregled obavljen",data:"pregled_obavljen",className:"dt-center"},{title:"Depozit",data:"depozit",className:"dt-right"},{title:"Ukupno za uplatu",data:"ukupno",className:"dt-right"},{title:"Preostalo",data:"preostalo",className:"dt-right"},{title:"Akcije",data:"action",name:"action",width:"10%",className:"dt-center"}],columnDefs:[{targets:[6,7],visible:!(null===(n=d.activatedRoute.snapshot.parent.params)||void 0===n?void 0:n.kampId)},{targets:[8],render:function(c,_,f,k){return c?"DA":"NE"}}],drawCallback:function(){$(".btnShowUcesnik").on("click",function(c){d.router.navigateByUrl("/admin/ucesnik/".concat($(this).data("id")))}),$(".btnEditUcesnik").on("click",function(c){d.router.navigateByUrl("/admin/ucesnik/".concat($(this).data("id"),"/izmena"))}),$(".btnDeleteUcesnik").on("click",function(c){d.router.navigateByUrl("/admin/ucesnik/".concat($(this).data("id"),"/brisanje"))})}}).buttons().container().appendTo("#datatable_korisnik_wrapper .col-md-6:eq(0)")}}]),i}();return s.\u0275fac=function(t){return new(t||s)(a.Y36(u.F0),a.Y36(u.gz),a.Y36(p.M))},s.\u0275cmp=a.Xpm({type:s,selectors:[["app-ucesnik-dt"]],viewQuery:function(t,e){var n;1&t&&a.Gf(m,5),2&t&&a.iGM(n=a.CRH())&&(e.table=n.first)},inputs:{kamp_id:"kamp_id",smena_id:"smena_id"},features:[a.TTD],decls:3,vars:0,consts:[[1,"table-responsive"],["id","datatable_ucesnik",1,"table","table-bordered","table-striped","table-sm"],["dataTableUcesnik",""]],template:function(t,e){1&t&&(a.TgZ(0,"div",0),a._UZ(1,"table",1,2),a.qZA())},styles:[""]}),s}()},28387:function(C,v,o){o.d(v,{R:function(){return l}});var h=o(15671),b=o(43144),p=o(33812),a=o(91891),u=o(74202),m=["dataTableUplata"],l=function(){var s=function(){function i(t,e,n){(0,h.Z)(this,i),this.router=t,this.activatedRoute=e,this.uplataService=n}return(0,b.Z)(i,[{key:"ngOnInit",value:function(){var e,n;this.kamp_id=null===(e=this.activatedRoute.snapshot.parent.params)||void 0===e?void 0:e.kampId,this.smena_id=null===(n=this.activatedRoute.snapshot.parent.params)||void 0===n?void 0:n.smenaId}},{key:"ngOnChanges",value:function(e){this.dataTable&&this.dataTable.DataTable().ajax.reload()}},{key:"ngAfterViewInit",value:function(){var e=this,n=this;this.dataTable=$(this.table.nativeElement),this.dataTable.DataTable({ajax:function(r,c){r.kamp_id=e.kamp_id,r.smena_id=e.smena_id,e.uplataService.datatable(r).subscribe(function(_){c({recordsTotal:_.recordsTotal,recordsFiltered:_.recordsFiltered,data:_.data,kamp_id:_.kamp_id})})},responsive:!0,autoWidth:!1,buttons:{buttons:[{text:'<i class="fas fa-plus"></i>',action:function(r,c,_,f){n.router.navigateByUrl("/korisnici/create")},className:"btn btn-primary"}],dom:{button:{className:"btn"}}},columns:[{title:"Kamp",data:"kamp",name:"kamps.naziv"},{title:"Smena",data:"smena",name:"smenas.naziv"},{title:"U\u010desnik",data:"ucesnik",name:"ucesniks.prezime"},{title:"Datum uplate",data:"datum_uplate",name:"datum_uplate",className:"dt-center"},{title:"Iznos",data:"iznos",name:"iznos_rsd",className:"dt-right"},{title:"Akcije",data:"action",name:"action",width:"10%",className:"dt-center"}],initComplete:function(r,c){n.dataTable.DataTable().columns(0).visible(null==c.kamp_id)},drawCallback:function(){$(".btnEditUplata").on("click",function(r){n.router.navigateByUrl("admin/uplata/".concat($(this).data("id"),"/izmena"))}),$(".btnDeleteUplata").on("click",function(r){n.router.navigateByUrl("admin/uplata/".concat($(this).data("id"),"/brisanje"))})},language:{url:"//cdn.datatables.net/plug-ins/1.12.1/i18n/sr-SP.json"}}).buttons().container().appendTo("#datatable_uplata_wrapper .col-md-6:eq(0)")}}]),i}();return s.\u0275fac=function(t){return new(t||s)(a.Y36(u.F0),a.Y36(u.gz),a.Y36(p.J))},s.\u0275cmp=a.Xpm({type:s,selectors:[["app-uplata-datatable"]],viewQuery:function(t,e){var n;1&t&&a.Gf(m,5),2&t&&a.iGM(n=a.CRH())&&(e.table=n.first)},inputs:{kamp_id:"kamp_id",smena_id:"smena_id"},features:[a.TTD],decls:3,vars:0,consts:[[1,"table-responsive"],["id","datatable_uplata",1,"table","table-bordered","table-striped","table-sm"],["dataTableUplata",""]],template:function(t,e){1&t&&(a.TgZ(0,"div",0),a._UZ(1,"table",1,2),a.qZA())},styles:[""]}),s}()},33812:function(C,v,o){o.d(v,{J:function(){return m}});var h=o(15671),b=o(43144),p=o(40520),a=o(92340),u=o(91891),m=function(){var l=function(){function s(i){(0,h.Z)(this,s),this.httpClient=i,this.httpOptions={headers:new p.WM({"Content-Type":"application/json"})}}return(0,b.Z)(s,[{key:"datatable",value:function(t){return this.httpClient.post("".concat(a.N.api_url,"/datatable/uplata"),t)}},{key:"all",value:function(){return this.httpClient.get("".concat(a.N.api_url,"/uplata"))}},{key:"find",value:function(t){return this.httpClient.get("".concat(a.N.api_url,"/uplata/").concat(t))}},{key:"store",value:function(t){return this.httpClient.post("".concat(a.N.api_url,"/uplata"),JSON.stringify(t),this.httpOptions)}},{key:"update",value:function(t,e){return this.httpClient.put("".concat(a.N.api_url,"/uplata/").concat(t),JSON.stringify(e),this.httpOptions)}},{key:"delete",value:function(t){return this.httpClient.delete("".concat(a.N.api_url,"/uplata/").concat(t),this.httpOptions)}}]),s}();return l.\u0275fac=function(i){return new(i||l)(u.LFG(p.eN))},l.\u0275prov=u.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l}()}}]);