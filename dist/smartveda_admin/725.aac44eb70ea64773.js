"use strict";(self.webpackChunkAdmin_Panel=self.webpackChunkAdmin_Panel||[]).push([[725],{1725:(D,p,r)=>{r.r(p),r.d(p,{OrderManagementModule:()=>N});var i=r(9808),l=r(1083),s=r(8441),t=r(5e3),g=r(520),c=r(4004),m=r(2340);let h=(()=>{class e{constructor(n){this.http=n}getOrders(){const n=localStorage.getItem("token")||"";let o=(new g.WM).set("x-access-token",n);return this.http.get(`${m.N.JSON_SERVER}/orders`,{headers:o}).pipe((0,c.U)(d=>d))}}return e.\u0275fac=function(n){return new(n||e)(t.LFG(g.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var f=r(7398),Z=r(8581),O=r(9783),T=r(1424),v=r(845),y=r(4119);function A(e,a){1&e&&(t.TgZ(0,"div",11),t.TgZ(1,"span",12),t._UZ(2,"i",13),t._UZ(3,"input",14),t.qZA(),t.qZA())}function C(e,a){if(1&e&&(t.TgZ(0,"th"),t._uU(1),t.qZA()),2&e){const n=a.$implicit;t.xp6(1),t.Oqu(n.headers)}}function S(e,a){if(1&e&&(t.TgZ(0,"tr"),t.TgZ(1,"th"),t._uU(2,"S.No"),t.qZA(),t.YNc(3,C,2,1,"th",15),t.TgZ(4,"th"),t._uU(5,"Options"),t.qZA(),t.qZA()),2&e){const n=a.$implicit;t.xp6(3),t.Q6J("ngForOf",n)}}function x(e,a){if(1&e&&(t.TgZ(0,"tr"),t.TgZ(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.qZA(),t.TgZ(15,"td"),t._uU(16),t.qZA(),t.TgZ(17,"td"),t._uU(18),t.qZA(),t.TgZ(19,"td"),t._UZ(20,"button",16),t._UZ(21,"button",17),t._UZ(22,"button",18),t.qZA(),t.qZA()),2&e){const n=a.rowIndex,o=a.$implicit;t.xp6(2),t.Oqu(n+1),t.xp6(2),t.Oqu(o.id),t.xp6(2),t.Oqu(o.customerId),t.xp6(2),t.Oqu(o.productName),t.xp6(2),t.Oqu(o.deliveryStatus),t.xp6(2),t.Oqu(o.deliveryDate),t.xp6(2),t.Oqu(o.price),t.xp6(2),t.Oqu(o.paymentMode),t.xp6(2),t.Oqu(o.paymentStatus)}}const M=function(){return["email","phone","role","status"]},q=[{path:"",component:(()=>{class e{constructor(n,o){this.orderService=n,this.ngxLoader=o,this.orderData=[]}ngOnInit(){this.sidebarSpacing="contracted",this.fgsType=s.aS.squareLoader,this.ngxLoader.start(),this.sidebarSpacing="contracted",this.orderService.getOrders().subscribe(n=>{this.orderData=n,this.ngxLoader.stop()}),this.cols=[{field:"id",show:!0,headers:"Order Id"},{field:"customerId",show:!0,headers:"Customer Id"},{field:"productName",show:!0,headers:"Product Name"},{field:"deliveryStatus",show:!0,headers:"Delivery Status"},{field:"deliveryDate",show:!0,headers:"Delivery Date"},{field:"price",show:!0,headers:"Price"},{field:"paymentMode",show:!0,headers:"Payment Mode"},{field:"paymentStatus",show:!0,headers:"Payment Status"}]}onToggleSidebar(n){this.sidebarSpacing="open"===n?"contracted":"expanded"}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(h),t.Y36(s.LA))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-orders"]],decls:12,vars:11,consts:[[3,"toggleSidebar"],[1,"body","bcard",3,"ngClass"],[1,"page-heading"],[1,"header-text-title",2,"margin-left","1%"],[1,"card","col-sm-12",2,"border","none"],["id","customerTable","responsiveLayout","scroll","currentPageReportTemplate","Showing {first} to {last} of {totalRecords} entries","styleClass","p-datatable-striped",3,"value","columns","paginator","rows","showCurrentPageReport","responsive","globalFilterFields"],["dt",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],[3,"fgsColor","fgsType"],[1,"row"],[1,"p-input-icon-right","ml-5"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Search keyword"],[4,"ngFor","ngForOf"],["pButton","","type","button","icon","pi pi-eye",1,"p-button-primary",2,"margin-right","5px"],["pButton","","type","button","icon","pi pi-user-edit","pTooltip","Edit Customer","tooltipPosition","bottom",1,"p-button-warning",2,"margin-right","5px"],["pButton","","type","button","icon","pi pi-trash","pTooltip","Delete Customer","tooltipPosition","bottom",1,"p-button-danger"]],template:function(n,o){1&n&&(t.TgZ(0,"app-header",0),t.NdJ("toggleSidebar",function(d){return o.onToggleSidebar(d)}),t.qZA(),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"h1",3),t._uU(4,"Customers"),t.qZA(),t.qZA(),t.TgZ(5,"div",4),t.TgZ(6,"p-table",5,6),t.YNc(8,A,4,0,"ng-template",7),t.YNc(9,S,6,1,"ng-template",8),t.YNc(10,x,23,9,"ng-template",9),t.qZA(),t._UZ(11,"ngx-ui-loader",10),t.qZA(),t.qZA()),2&n&&(t.xp6(1),t.Q6J("ngClass",o.sidebarSpacing),t.xp6(5),t.Q6J("value",o.orderData)("columns",o.cols)("paginator",!0)("rows",10)("showCurrentPageReport",!0)("responsive",!0)("globalFilterFields",t.DdM(10,M)),t.xp6(5),t.Q6J("fgsColor","#000000")("fgsType",o.fgsType))},directives:[f.G,i.mk,Z.iA,O.jx,T.o,i.sg,v.Hq,y.u,s.Eo],styles:['th[_ngcontent-%COMP%]{background-color:#285d91!important;color:#fff!important}td[_ngcontent-%COMP%]{text-align:center!important;font-size:200!important}.p-datatable[_ngcontent-%COMP%]{padding:none!important}.content-header[_ngcontent-%COMP%]{font-weight:500;letter-spacing:.5px;font-size:1.6rem;margin-bottom:.25rem}.text-center[_ngcontent-%COMP%]{margin-left:60%!important}.glyphicon-cog[_ngcontent-%COMP%]:before{content:"\\e019";padding-right:10px}.export[_ngcontent-%COMP%]{margin-left:90%;margin-bottom:.5rem}']}),e})(),canActivate:[r(6660).P]}];let P=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[l.Bz.forChild(q)],l.Bz]}),e})();var F=r(2474);let N=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[i.ez,P,F.m]]}),e})()}}]);