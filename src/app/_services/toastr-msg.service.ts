import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastrMsgService {

  constructor(private toastrService: ToastrService) { }

  showSuccess(message:string, title:string){
    this.toastrService.success(message, title);
  }

  showError(message:string, title:string) {
    this.toastrService.error(message, title);
  }

  showWarning(message:string, title:string) {
    this.toastrService.warning(message, title);
  }
}
