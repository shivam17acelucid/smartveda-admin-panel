"use strict";(self.webpackChunkAdmin_Panel=self.webpackChunkAdmin_Panel||[]).push([[71],{6071:($,T,a)=>{a.r(T),a.d(T,{AppoinmentModule:()=>Q});var Z=a(9808),c=a(1083),s=a(3075),g=a(8441),t=a(5e3),v=a(7650),u=a(520),h=a(9646);a(2340);let m=[{_id:"125875hdvfh875",name:"Sohan Pandey",email:"sohanpandey45@gmail.com",phone:"6398617038",appointmentDate:"2022-12-25",startTime:"2:30PM",endTime:"3:30PM"},{_id:"125875hdvfh875",name:"Amit Kumar",email:"amit245@gmail.com",phone:"6398617038",appointmentDate:"2023-03-25",startTime:"2:30PM",endTime:"3:30PM"},{_id:"986575hdvfh875",name:"Rohan Pandey",email:"rohanpandey45@gmail.com",phone:"6398617038",appointmentDate:"2022-02-25",startTime:"1:30PM",endTime:"2:30PM"},{_id:"025685hdvfh875",name:"Mukesh Chaudhary",email:"mukesh2345@gmail.com",phone:"6398617038",appointmentDate:"2023-02-25",startTime:"2:30PM",endTime:"3:30PM"},{_id:"259875hdvfh875gdn",name:"Rohan Shingh",email:"rohanshingh45@gmail.com",phone:"6398617038",appointmentDate:"2023-01-25",startTime:"2:30PM",endTime:"3:30PM"}],b=(()=>{class n{constructor(e){this.http=e}getAppointmentList(){const e=localStorage.getItem("token")||"";return(new u.WM).set("x-access-token",e),(0,h.of)(m)}getAppointmentById(e){const o=localStorage.getItem("token")||"";(new u.WM).set("x-access-token",o);let l=m.findIndex(d=>d._id===e);return(0,h.of)(m[l])}addAppointment(e){const o=localStorage.getItem("token")||"";return(new u.WM).set("x-access-token",o),e.id=m.length+1,m.push(e),(0,h.of)(e)}deleteAppointmentById(e){const o=localStorage.getItem("token")||"";(new u.WM).set("x-access-token",o);let l=m.findIndex(d=>d._id===e);return m.splice(m.findIndex(d=>d._id===e),1),(0,h.of)(m[l])}editAppointment(e,o){const i=localStorage.getItem("token")||"";(new u.WM).set("x-access-token",i);let d=m.findIndex(f=>f._id===o);return m[d]=e,(0,h.of)(e)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(u.eN))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var x=a(7673),y=a(7398),q=a(845);const S=function(){return["/appointment"]};let _=(()=>{class n{constructor(e,o,i,r,l,d,f){this.fb=e,this.activateRoute=o,this.ngxLoader=i,this.route=r,this.toastr=l,this.AppoinmentService=d,this.commonService=f,this.title=" ",this.editMode=!1,this.appoinmentForm=this.fb.group({name:["",[s.kI.required]],email:["",[s.kI.required]],phone:["",[s.kI.required]],appointmentDate:["",[s.kI.required]],startTime:["",[s.kI.required]],endTime:["",[s.kI.required]]})}ngOnInit(){this.fgsType=g.aS.squareLoader,this.ngxLoader.start(),this.sidebarSpacing="contracted",this.activateRoute.queryParamMap.subscribe(e=>{this.id=e.get("id"),this.id&&null!=this.id?(this.editMode=!0,this.title="Edit Category",this.getAppoinmentById()):(this.editMode=!1,this.title="Add New Category")})}getAppoinmentById(){this.AppoinmentService.getAppointmentById(this.id).subscribe(e=>{this.appoinmentForm.patchValue({name:null==e?void 0:e.name,email:null==e?void 0:e.email,phone:null==e?void 0:e.phone,appointmentDate:null==e?void 0:e.appointmentDate,startTime:null==e?void 0:e.startTime,endTime:null==e?void 0:e.endTime}),this.ngxLoader.stop()})}onToggleSidebar(e){this.sidebarSpacing="open"===e?"contracted":"expanded"}addAppointment(e){this.AppoinmentService.addAppointment(e).subscribe(o=>{o?(this.toastr.showSuccess("Appointment added successfully","Appointment Added"),this.ngxLoader.stop(),this.route.navigate(["/appointment"])):(this.toastr.showError("Somthing wrong Please check","Error occured"),this.ngxLoader.stop(),this.route.navigate(["/"]))})}editAppointment(e){this.AppoinmentService.editAppointment(e,this.id).subscribe(o=>{o?(this.toastr.showSuccess("Appointment added successfully","Appointment Added"),this.ngxLoader.stop(),this.route.navigate(["/appointment"])):(this.toastr.showError("Somthing wrong Please check","Error occured"),this.ngxLoader.stop(),this.route.navigate(["/"]))})}submit(){var e,o,i,r,l,d;this.payload={_id:parseInt(this.id),name:null===(e=this.appoinmentForm)||void 0===e?void 0:e.controls.name.value,email:null===(o=this.appoinmentForm)||void 0===o?void 0:o.controls.email.value,phone:null===(i=this.appoinmentForm)||void 0===i?void 0:i.controls.phone.value,appointmentDate:null===(r=this.appoinmentForm)||void 0===r?void 0:r.controls.appointmentDate.value,startTime:null===(l=this.appoinmentForm)||void 0===l?void 0:l.controls.startTime.value,endTime:null===(d=this.appoinmentForm)||void 0===d?void 0:d.controls.endTime.value},this.ngxLoader.start(),this.editMode?this.editAppointment(this.payload):this.addAppointment(this.payload)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(s.qu),t.Y36(c.gz),t.Y36(g.LA),t.Y36(c.F0),t.Y36(v.$),t.Y36(b),t.Y36(x.v))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-add-edit-appoinment"]],decls:49,vars:5,consts:[[3,"toggleSidebar"],[1,"body","bcard",3,"ngClass"],[3,"formGroup"],[1,"card","col-sm-12"],[1,"row","gutters"],[1,"col-xl-12","col-lg-12","col-md-12","col-sm-12","col-12"],[1,"h-100","mt-5"],[1,"card-body"],[1,"mb-2","text-primary"],[1,"col-xl-6","col-lg-6","col-md-6","col-sm-6","col-12"],[1,"form-group"],["for","name"],["type","text","formControlName","name",1,"form-control"],["type","text","formControlName","email",1,"form-control"],["for","hyperlink"],["type","text","formControlName","phone",1,"form-control"],["for","Name"],["type","date","formControlName","appointmentDate",1,"form-control"],["for","time"],["type","time","id","time","formControlName","startTime",1,"form-control"],["type","time","id","time","formControlName","endTime",1,"form-control"],[1,"row","gutters","mt-4"],[1,"col-xl-12","col-lg-12","col-md-12","col-sm-12","col-12","mt-4"],[1,"text-right"],["pButton","","type","button","id","submit","name","submit",1,"p-button-danger","mr-4",3,"routerLink"],["pButton","","type","button","id","submit","name","submit",1,"p-button-success",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"app-header",0),t.NdJ("toggleSidebar",function(r){return o.onToggleSidebar(r)}),t.qZA(),t.TgZ(1,"div",1),t.TgZ(2,"form",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"div",5),t.TgZ(6,"div",6),t.TgZ(7,"div",7),t.TgZ(8,"div",4),t.TgZ(9,"div",5),t.TgZ(10,"h6",8),t._uU(11),t.qZA(),t.qZA(),t.TgZ(12,"div",9),t.TgZ(13,"div",10),t.TgZ(14,"label",11),t._uU(15,"Name"),t.qZA(),t._UZ(16,"input",12),t.qZA(),t.qZA(),t.TgZ(17,"div",9),t.TgZ(18,"div",10),t.TgZ(19,"label",11),t._uU(20,"Email"),t.qZA(),t._UZ(21,"input",13),t.qZA(),t.qZA(),t.TgZ(22,"div",9),t.TgZ(23,"div",10),t.TgZ(24,"label",14),t._uU(25,"Phone"),t.qZA(),t._UZ(26,"input",15),t.qZA(),t.qZA(),t.TgZ(27,"div",9),t.TgZ(28,"div",10),t.TgZ(29,"label",16),t._uU(30,"Appointment Date"),t.qZA(),t._UZ(31,"input",17),t.qZA(),t.qZA(),t.TgZ(32,"div",9),t.TgZ(33,"div",10),t.TgZ(34,"label",18),t._uU(35,"Start Time"),t.qZA(),t._UZ(36,"input",19),t.qZA(),t.qZA(),t.TgZ(37,"div",9),t.TgZ(38,"div",10),t.TgZ(39,"label",18),t._uU(40,"End Time"),t.qZA(),t._UZ(41,"input",20),t.qZA(),t.qZA(),t.qZA(),t.TgZ(42,"div",21),t.TgZ(43,"div",22),t.TgZ(44,"div",23),t.TgZ(45,"button",24),t._uU(46,"Cancel"),t.qZA(),t.TgZ(47,"button",25),t.NdJ("click",function(){return o.submit()}),t._uU(48,"Submit"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngClass",o.sidebarSpacing),t.xp6(1),t.Q6J("formGroup",o.appoinmentForm),t.xp6(9),t.Oqu(o.title),t.xp6(34),t.Q6J("routerLink",t.DdM(4,S)))},directives:[y.G,Z.mk,s._Y,s.JL,s.sg,s.Fj,s.JJ,s.u,q.Hq,c.rH],styles:[""]}),n})();var L=a(4255),C=a(9783),M=a(1424),U=a(4119);const N=["dt"],E=function(){return["/appointment/add"]};function F(n,p){if(1&n){const e=t.EpF();t.TgZ(0,"div",12),t.TgZ(1,"span",13),t._UZ(2,"i",14),t.TgZ(3,"input",15),t.NdJ("input",function(i){return t.CHM(e),t.oxw().applyFilterGlobal(i,"contains")}),t.qZA(),t.qZA(),t.TgZ(4,"span",13),t._UZ(5,"button",16),t.qZA(),t.qZA()}2&n&&(t.xp6(5),t.Q6J("routerLink",t.DdM(1,E)))}function I(n,p){if(1&n&&(t.TgZ(0,"th"),t._uU(1),t.qZA()),2&n){const e=p.$implicit;t.xp6(1),t.Oqu(e.headers)}}function k(n,p){if(1&n&&(t.TgZ(0,"tr"),t.YNc(1,I,2,1,"th",17),t.TgZ(2,"th"),t._uU(3,"Options"),t.qZA(),t.qZA()),2&n){const e=p.$implicit;t.xp6(1),t.Q6J("ngForOf",e)}}const P=function(){return["/appointment/edit"]},O=function(n){return{id:n}};function w(n,p){if(1&n){const e=t.EpF();t.TgZ(0,"tr"),t.TgZ(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.qZA(),t.TgZ(15,"td"),t.TgZ(16,"div",18),t._UZ(17,"button",19),t.TgZ(18,"button",20),t.NdJ("click",function(){const r=t.CHM(e).$implicit;return t.oxw().deleteAppoinmentById(r._id)}),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&n){const e=p.$implicit;t.xp6(2),t.Oqu(e._id),t.xp6(2),t.Oqu(e.name),t.xp6(2),t.Oqu(e.email),t.xp6(2),t.Oqu(e.phone),t.xp6(2),t.Oqu(e.appointmentDate),t.xp6(2),t.Oqu(e.startTime),t.xp6(2),t.Oqu(e.endTime),t.xp6(3),t.Q6J("routerLink",t.DdM(9,P))("queryParams",t.VKq(10,O,e._id))}}function J(n,p){1&n&&(t.TgZ(0,"tr"),t.TgZ(1,"td",21),t._uU(2," No Records Found. "),t.qZA(),t.qZA())}const R=function(){return["_id","name","email","phone"]},D=[{path:"",component:(()=>{class n{constructor(e,o,i){this.ngxLoader=e,this.toastr=o,this.AppoinmentService=i,this.appoinmentList=[]}ngOnInit(){this.fgsType=g.aS.squareLoader,this.ngxLoader.start(),this.sidebarSpacing="contracted",this.cols=[{field:"_id",show:!0,headers:"Id"},{field:"name",show:!0,headers:"Name"},{field:"email",show:!0,headers:"Email"},{field:"phone",show:!0,headers:"Phone"},{field:"appointmentDate",show:!0,headers:"Appointment Date"},{field:"startTime",show:!0,headers:"Start At"},{field:"endTime",show:!0,headers:" End At"}],this.getAppoinmentList()}onToggleSidebar(e){this.sidebarSpacing="open"===e?"contracted":"expanded"}getAppoinmentList(){this.AppoinmentService.getAppointmentList().subscribe(e=>{this.appoinmentList=e,this.ngxLoader.stop()})}deleteAppoinmentById(e){this.AppoinmentService.deleteAppointmentById(e).subscribe(o=>{o&&(this.toastr.showSuccess("order deleted successfully","order delete"),this.getAppoinmentList())})}applyFilterGlobal(e,o){this.dt.filterGlobal(e.target.value,o)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(g.LA),t.Y36(v.$),t.Y36(b))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-appoinment-list"]],viewQuery:function(e,o){if(1&e&&t.Gf(N,5),2&e){let i;t.iGM(i=t.CRH())&&(o.dt=i.first)}},decls:13,vars:11,consts:[[3,"toggleSidebar"],[1,"body","bcard",3,"ngClass"],[1,"page-heading"],[1,"header-text-title",2,"margin-left","1%"],[1,"card","col-sm-12",2,"border","none"],["id","customerTable","responsiveLayout","scroll","currentPageReportTemplate","Showing {first} to {last} of {totalRecords} entries","styleClass","p-datatable-striped",3,"columns","paginator","rows","showCurrentPageReport","value","responsive","globalFilterFields"],["dt",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],["pTemplate","emptymessage"],[3,"fgsColor","fgsType"],[1,"row"],[1,"p-input-icon-right","ml-5"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Search keyword",3,"input"],["pButton","","type","button","label","Add New Appoinment",1,"p-button-success",3,"routerLink"],[4,"ngFor","ngForOf"],["id","btn-grp",1,"btn-grp"],["pButton","","type","button","icon","pi pi-user-edit","pTooltip","Edit Appoinment","tooltipPosition","bottom",1,"p-button-warning",2,"margin-right","5px",3,"routerLink","queryParams"],["pButton","","type","button","icon","pi pi-trash","pTooltip","Delete Appoinment","tooltipPosition","bottom",1,"p-button-danger",2,"margin-right","5px",3,"click"],["colspan","12",1,"text-center","text-danger","font-weight-700"]],template:function(e,o){1&e&&(t.TgZ(0,"app-header",0),t.NdJ("toggleSidebar",function(r){return o.onToggleSidebar(r)}),t.qZA(),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"h1",3),t._uU(4,"Appointment List"),t.qZA(),t.qZA(),t.TgZ(5,"div",4),t.TgZ(6,"p-table",5,6),t.YNc(8,F,6,2,"ng-template",7),t.YNc(9,k,4,1,"ng-template",8),t.YNc(10,w,19,12,"ng-template",9),t.YNc(11,J,3,0,"ng-template",10),t.qZA(),t._UZ(12,"ngx-ui-loader",11),t.qZA(),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngClass",o.sidebarSpacing),t.xp6(5),t.Q6J("columns",o.cols)("paginator",!0)("rows",10)("showCurrentPageReport",!0)("value",o.appoinmentList)("responsive",!0)("globalFilterFields",t.DdM(10,R)),t.xp6(6),t.Q6J("fgsColor","#000000")("fgsType",o.fgsType))},directives:[y.G,Z.mk,L.iA,C.jx,M.o,q.Hq,c.rH,Z.sg,U.u,g.Eo],styles:[".btn-grp[_ngcontent-%COMP%]{display:flex}"]}),n})()},{path:"add",component:_},{path:"edit",component:_}];let B=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[c.Bz.forChild(D)],c.Bz]}),n})();var Y=a(5115);let Q=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[Z.ez,B,Y.m]]}),n})()}}]);