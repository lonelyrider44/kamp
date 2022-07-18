"use strict";(self.webpackChunkangular=self.webpackChunkangular||[]).push([[592],{37315:function(C,h,r){r.d(h,{G:function(){return l}});var m=r(15671),f=r(43144),d=r(40520),s=r(92340),i=r(91891),l=function(){var e=function(){function n(t){(0,m.Z)(this,n),this.httpClient=t,this.httpOptions={headers:new d.WM({"Content-Type":"application/json"})}}return(0,f.Z)(n,[{key:"datatable",value:function(a){return this.httpClient.post("".concat(s.N.api_url,"/datatable/trener"),a)}},{key:"all",value:function(){return this.httpClient.get("".concat(s.N.api_url,"/trener"))}},{key:"find",value:function(a){return this.httpClient.get("".concat(s.N.api_url,"/trener/").concat(a))}},{key:"store",value:function(a){return this.httpClient.post("".concat(s.N.api_url,"/trener"),JSON.stringify(a),this.httpOptions)}},{key:"update",value:function(a,o){return this.httpClient.put("".concat(s.N.api_url,"/trener/").concat(a),JSON.stringify(o),this.httpOptions)}},{key:"delete",value:function(a){return this.httpClient.delete("".concat(s.N.api_url,"/trener/").concat(a),this.httpOptions)}}]),n}();return e.\u0275fac=function(t){return new(t||e)(i.LFG(d.eN))},e.\u0275prov=i.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()},52246:function(C,h,r){r.d(h,{j:function(){return n}});var m=r(15671),f=r(43144),d=r(80877),s=r(899),i=r(91891),l=r(74202),e=["dataTablePrijava"],n=function(){var t=function(){function a(o,c,u,v){(0,m.Z)(this,a),this.router=o,this.activatedRoute=c,this.prijavaService=u,this.authService=v}return(0,f.Z)(a,[{key:"ngOnInit",value:function(){var c,u,v;this.kamp_id=null===(c=this.activatedRoute.snapshot.parent.params)||void 0===c?void 0:c.kampId,this.smena_id=null===(u=this.activatedRoute.snapshot.parent.params)||void 0===u?void 0:u.smenaId,this.ucesnik_id=null===(v=this.activatedRoute.snapshot.parent.params)||void 0===v?void 0:v.ucesnikId,this.user=this.authService.getUser()}},{key:"ngOnChanges",value:function(c){this.dataTable&&this.dataTable.DataTable().ajax.reload()}},{key:"ngAfterViewInit",value:function(){var c=this,u=this;this.dataTable=$(this.table.nativeElement),this.dataTable.DataTable({ajax:function(p,_){p.kamp_id=c.kamp_id,p.smena_id=c.smena_id,p.ucesnik_id=c.ucesnik_id,c.prijavaService.datatable(p).subscribe(function(b){_({recordsTotal:b.recordsTotal,recordsFiltered:b.recordsFiltered,data:b.data,kamp_id:b.kamp_id,smena_id:b.smena_id})})},responsive:!0,autoWidth:!1,buttons:{buttons:[{text:'<i class="fas fa-plus"></i>',action:function(p,_,b,E){u.router.navigateByUrl("/korisnici/create")},className:"btn btn-primary"}],dom:{button:{className:"btn"}}},columns:[{title:"U\u010desnik",data:"ucesnik",name:"ucesnik"},{title:"Godi\u0161te",data:"godiste",name:"godiste",className:"dt-center"},{title:"Kamp",data:"kamp",name:"kamps.naziv"},{title:"Smena",data:"smena",name:"smenas.naziv"},{title:"Akcije",data:"action",name:"action",width:"120px",className:"dt-center"}],initComplete:function(p,_){u.dataTable.DataTable().columns(1).visible(null==_.kamp_id)},drawCallback:function(){$(".btnShowPrijava").on("click",function(p){var _;u.router.navigateByUrl("/".concat(null===(_=u.user)||void 0===_?void 0:_.user_type,"/prijava/").concat($(this).data("id")))}),$(".btnEditPrijava").on("click",function(p){var _;u.router.navigateByUrl("/".concat(null===(_=u.user)||void 0===_?void 0:_.user_type,"/prijava/").concat($(this).data("id"),"/izmena"))}),$(".btnRemovePrijava").on("click",function(p){var _;u.router.navigateByUrl("/".concat(null===(_=u.user)||void 0===_?void 0:_.user_type,"/prijava/").concat($(this).data("id"),"/brisanje"))})},language:{url:"//cdn.datatables.net/plug-ins/1.12.1/i18n/sr-SP.json"}}).buttons().container().appendTo("#datatable_prijava_wrapper .col-md-6:eq(0)")}}]),a}();return t.\u0275fac=function(o){return new(o||t)(i.Y36(l.F0),i.Y36(l.gz),i.Y36(s.$),i.Y36(d.e))},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-prijava-datatable"]],viewQuery:function(o,c){var u;1&o&&i.Gf(e,5),2&o&&i.iGM(u=i.CRH())&&(c.table=u.first)},inputs:{kamp_id:"kamp_id",smena_id:"smena_id",ucesnik_id:"ucesnik_id"},features:[i.TTD],decls:3,vars:0,consts:[[1,"table-responsive"],["id","datatable_prijava",1,"table","table-bordered","table-striped","table-sm"],["dataTablePrijava",""]],template:function(o,c){1&o&&(i.TgZ(0,"div",0),i._UZ(1,"table",1,2),i.qZA())},styles:[""]}),t}()},5667:function(C,h,r){r.d(h,{l:function(){return s}});var m=r(15671),f=r(43144),d=r(59030),s=function(){function i(l,e,n,t,a){(0,m.Z)(this,i),this.fb=l,this.router=e,this.activatedRoute=n,this.routerExt=t,this._snackBar=a,this.matcher=new d.n,this.action_create=!1,this.action_update=!1,this.action_delete=!1}return(0,f.Z)(i,[{key:"obj",get:function(){return null}},{key:"store",value:function(){var n,e=this;null===(n=this.service)||void 0===n||n.store(this.form.value).subscribe({next:function(a){e.router.navigateByUrl(e.routerExt.getPreviousUrl())},error:function(a){e.submitFormFailed(e.form,a)}})}},{key:"update",value:function(){var n,t,e=this;null===(n=this.service)||void 0===n||n.update(null===(t=this.obj)||void 0===t?void 0:t.id,this.form.value).subscribe({next:function(o){e.router.navigateByUrl(e.routerExt.getPreviousUrl())},error:function(o){e.submitFormFailed(e.form,o)}})}},{key:"delete",value:function(){var n,e=this;this.service.delete(null===(n=this.obj)||void 0===n?void 0:n.id).subscribe({next:function(a){e.router.navigateByUrl(e.routerExt.getPreviousUrl())},error:function(a){e.submitFormFailed(e.form,a)}})}},{key:"submitForm",value:function(){console.log("Submit form"),console.log(this.action_create),this.action_create&&this.store(),this.action_update&&this.update(),this.action_delete&&this.delete()}},{key:"submitFormFailed",value:function(e,n){422===n.status?Object.keys(n.error.errors).forEach(function(t){var a=e.get(t);a&&a.setErrors({serverError:n.error.errors[t]})}):this._snackBar.open(n.error.message,"OK")}},{key:"goBack",value:function(){this.router.navigateByUrl(this.routerExt.getPreviousUrl())}},{key:"loadFromUrl",value:function(){this.action_create=this.activatedRoute.snapshot.url.map(function(e,n,t){return e.path}).includes("unos"),this.action_update=this.activatedRoute.snapshot.url.map(function(e,n,t){return e.path}).includes("izmena"),this.action_delete=this.activatedRoute.snapshot.url.map(function(e,n,t){return e.path}).includes("brisanje")}}]),i}()},98268:function(C,h,r){r.d(h,{G:function(){return l}});var m=r(15671),f=r(43144),d=r(40520),s=r(92340),i=r(91891),l=function(){var e=function(){function n(t){(0,m.Z)(this,n),this.httpClient=t,this.httpOptions={headers:new d.WM({"Content-Type":"application/json"})}}return(0,f.Z)(n,[{key:"datatable",value:function(a){return this.httpClient.post("".concat(s.N.api_url,"/datatable/trener"),a)}},{key:"all",value:function(){return this.httpClient.get("".concat(s.N.api_url,"/trener"))}},{key:"find",value:function(a){return this.httpClient.get("".concat(s.N.api_url,"/trener/").concat(a))}},{key:"store",value:function(a){return this.httpClient.post("".concat(s.N.api_url,"/trener"),JSON.stringify(a),this.httpOptions)}},{key:"update",value:function(a,o){return this.httpClient.put("".concat(s.N.api_url,"/trener/").concat(a),JSON.stringify(o),this.httpOptions)}},{key:"delete",value:function(a){return this.httpClient.delete("".concat(s.N.api_url,"/trener/").concat(a),this.httpOptions)}}]),n}();return e.\u0275fac=function(t){return new(t||e)(i.LFG(d.eN))},e.\u0275prov=i.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()}}]);