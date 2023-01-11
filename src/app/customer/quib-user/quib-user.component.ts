import { Component, OnInit, ViewChild } from '@angular/core';
import { Quib_User } from 'src/app/_models/order';
import { OrdersService } from 'src/app/_services/orders.service';
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';
import { TABLE_HEADING } from '../../_models/table_heading'
import { Table } from 'primeng/table';
import { ToastrMsgService } from 'src/app/_services/toastr-msg.service';

@Component({
  selector: 'app-quib-user',
  templateUrl: './quib-user.component.html',
  styleUrls: ['./quib-user.component.scss']
})
export class QuibUserComponent implements OnInit {
  @ViewChild('dt') dt: Table | undefined;
  sidebarSpacing: any;
  cols!: TABLE_HEADING[];
  Quib_User: Quib_User[] = [];
  fgsType: any;
  constructor(
    private orderService: OrdersService,
    private ngxLoader: NgxUiLoaderService,
    private toastr: ToastrMsgService,
  ) { }

  ngOnInit(): void {
    this.sidebarSpacing = 'contracted';
    this.fgsType = SPINNER.squareLoader
    this.ngxLoader.start();
    this.sidebarSpacing = 'contracted';
     this.getOrderList()
    this.cols = [
      { field: 'displayName', show: true, headers: 'Display Name' },
      { field: 'firstName', show: true, headers: 'First Name' },
      { field: 'lastName', show: true, headers: 'Last Name' },
      { field: 'email', show: true, headers: 'Email' },
      { field: 'joinDate', show: true, headers: 'Join' },
      { field: 'BMP', show: true, headers: 'BMP' },
      { field: 'FNG', show: true, headers: 'FNG' },
      { field: 'FRS', show: true, headers: 'FRS' },
      { field: 'UNP', show: true, headers: 'UNP' },
      { field: 'status', show: true, headers: 'Status' },
      
    ]
  }

  onToggleSidebar(sidebarState: any) {
    if (sidebarState === 'open') {
      this.sidebarSpacing = 'contracted';
    } else {
      this.sidebarSpacing = 'expanded';
    }
  }
  applyFilterGlobal($event, stringVal) {
    this.dt.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }
  deleteUser(order: number) {
    this.ngxLoader.start();
    this.orderService.deleteUser(order).subscribe(res => {
      if (res) {
        this.toastr.showSuccess("user deleted successfully", "user delete")
        this.getOrderList()
      }
    })
  }
  getOrderList() {
    this.orderService.getUserList().subscribe((data) => {
      this.Quib_User =  data
      this.ngxLoader.stop();
    });
  }
  markAsActive(id:number,Status:boolean){
    this.ngxLoader.start();
    this.orderService.markAsActive(id,Status).subscribe(res => {
      if (res) {
        this.toastr.showSuccess(" Status change successfully", "Status change")
        this.getOrderList()
      }
    })
  }
}
