import { Component, OnInit, } from '@angular/core';
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';
import { UsersService } from 'src/app/_services/users.service';
import { UserGetRequestParams } from 'src/app/_models/user';
import * as fileSaver from 'file-saver';
import * as jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  sidebarSpacing: any;
  fgsType: any;
  customerData!: any;
  users!: UserGetRequestParams[];
  userDetails!: any;
  id: any;
  exportColumns!: any[];
  exportHeaders!: any[];
  cols!: any[];

  constructor(
    private userService: UsersService,
    private ngxLoader: NgxUiLoaderService
  ) { }

  ngOnInit(): void {
    this.fgsType = SPINNER.squareLoader
    this.ngxLoader.start();
    this.sidebarSpacing = 'contracted';
    this.userService.getUsers().subscribe((res: any) => {
      this.customerData = res.data;
      this.id = this.customerData._id;
      console.log(this.id)
      this.ngxLoader.stop();
    });

    this.cols = [
      { field: 'email', headers: 'Email' },
      { field: 'phone', headers: 'Phone' },
      { field: 'role', headers: 'Role' },
      { field: 'status', headers: 'Status' },
      { field: 'createdAt', headers: 'Created At' }
    ]
    this.exportColumns = this.cols.map(col => (
      { title: col.headers, dataKey: col.field }
    ));
  }

  onDeleteCustomer() {

  }

  downloadResource() {
    this.userService.downloadFile().subscribe((response: BlobPart) => {
      let data: any = new Blob([response], { type: 'text/json; charset=utf-8' });
      const downloadLink = window.URL.createObjectURL(data);
      console.log(downloadLink)
      fileSaver.saveAs(data, `customerList.csv`)
    })
  }

  exportPdf() {
    const doc = new jsPDF.jsPDF('p', 'pt');
    autoTable(doc, {
      columns: this.exportColumns,
      body: this.customerData,
      didDrawPage: (dataArg) => {
        doc.text('Customer List', dataArg.settings.margin.left, 10);
      }
    });
    doc.save('customerList.pdf')
  }

  exportExcel() {
    import("xlsx").then(xlsx => {
      const worksheet = xlsx.utils.json_to_sheet(this.customerData);
      const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
      this.saveAsExcelFile(excelBuffer, "customerList");
    });
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    import("file-saver").then(FileSaver => {
      let EXCEL_TYPE = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
      let EXCEL_EXTENSION = ".xlsx";
      const data: Blob = new Blob([buffer], {
        type: EXCEL_TYPE,
      });
      fileSaver.saveAs(
        data,
        fileName + "_export_" + new Date().getTime() + EXCEL_EXTENSION
      )
    })
  }
}