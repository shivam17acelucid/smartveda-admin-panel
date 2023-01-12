import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, map, Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { order, cancelOrder, orderTransactin, shipmentData } from '../DummyData/order'
import { Userdata,MovieData,QuibData } from '../DummyData/userData'

@Injectable({
  providedIn: 'root'
})

export class QuibService {
  constructor(private http: HttpClient) { }

  getOrderList() {
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token', token)
    const endpointUrl = `${environment.JSON_SERVER}/orders`;
    //return this.http.get(endpointUrl, { 'headers': httpOptions }).pipe(map(res => res));
    return of(order)
  }
  getOrderDetailsBy(orderId: number) {
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token', token)
    const endpointUrl = `${environment.JSON_SERVER}/orders/${orderId}`;
    //return this.http.get(endpointUrl, { 'headers': httpOptions }).pipe(map(res => res));
    let index = order.findIndex((item) => item.orderId === orderId)
    return of(order[index])
  }

  createNewOrder(orderdata) {
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token', token)
    const endpointUrl = `${environment.JSON_SERVER}/orders`;
    //return this.http.get(endpointUrl, { 'headers': httpOptions }).pipe(map(res => res));
    order.push(orderdata)
    return of(orderdata)
  }
  updateOrderStatus(orderId: number, data: any) {
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token', token)
    const endpointUrl = `${environment.JSON_SERVER}/orderStatus/${orderId}`;
    //return this.http.put(endpointUrl, data, { 'headers': httpOptions }).pipe(map(res => res));
    let index = order.findIndex((item) => item.orderId === orderId)
    order[index] = data
    return of(data)
  }
  getCancelOrderList() {
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token', token)
    const endpointUrl = `${environment.JSON_SERVER}/orders`;
    //return this.http.get(endpointUrl, { 'headers': httpOptions }).pipe(map(res => res));
    return of(cancelOrder)
  }
  getOrderTransaction() {
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token', token)
    const endpointUrl = `${environment.JSON_SERVER}/orders`;
    //return this.http.get(endpointUrl, { 'headers': httpOptions }).pipe(map(res => res));
    return of(orderTransactin)
  }
  getTransactionById(transactionId: string) {
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token', token)
    const endpointUrl = `${environment.JSON_SERVER}/orders/${transactionId}`;
    let indexTransactionId = orderTransactin.findIndex((item) => item.transactionId === transactionId)
    return of(orderTransactin[indexTransactionId])
  }

  getDeliveredOrderList() {
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token', token)
    const endpointUrl = `${environment.JSON_SERVER}/orders`;
    //return this.http.get(endpointUrl, { 'headers': httpOptions }).pipe(map(res => res));
    let DeliveredOrderList = order.filter(item => item.deliveryStatus === "Delivered")
    return of(DeliveredOrderList)
  }
  getConfirmedOrderList() {
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token', token)
    const endpointUrl = `${environment.JSON_SERVER}/orders`;
    //return this.http.get(endpointUrl, { 'headers': httpOptions }).pipe(map(res => res));
    let DeliveredOrderList = order.filter(item => item.orderStatus === "Confirmed")
    return of(DeliveredOrderList)
  }
  deleteConfirmedOrder(orderId: number) {
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token', token)
    const endpointUrl = `${environment.JSON_SERVER}/orders`;
    //return this.http.get(endpointUrl, { 'headers': httpOptions }).pipe(map(res => res));
    let indexConfirmedOrder = order.findIndex(item => item.orderId === orderId)
    order.splice(order.findIndex((index) => index.orderId == orderId), 1);
    return of(order[indexConfirmedOrder])
  }
  deleteUser(Id: number) {
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token', token)
    const endpointUrl = `${environment.JSON_SERVER}/orders`;
    //return this.http.get(endpointUrl, { 'headers': httpOptions }).pipe(map(res => res));
    let indexOrder = Userdata.findIndex(item => item.id === Id)
    Userdata.splice(Userdata.findIndex((index) => index.id == Id), 1);
    return of(Userdata[indexOrder])
  }
  markAsActive(Id: number, Status) {
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token', token)
    const endpointUrl = `${environment.JSON_SERVER}/orders`;
    //return this.http.get(endpointUrl, { 'headers': httpOptions }).pipe(map(res => res));
    let index = Userdata.findIndex(item => item.id === Id)
    if (Status === true) {
      Userdata[index].status = "Active"
    } else {
      Userdata[index].status = "Pending"
    }
    return of(Userdata[index])
  }
  deleteDeliveredOrder(orderId: number) {
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token', token)
    const endpointUrl = `${environment.JSON_SERVER}/orders`;
    //return this.http.get(endpointUrl, { 'headers': httpOptions }).pipe(map(res => res));
    let indexDeliveredOrder = order.findIndex(item => item.orderId === orderId)
    order.splice(order.findIndex((index) => index.orderId == orderId), 1);
    return of(order[indexDeliveredOrder])
  }
  deleteCancelledOrder(orderId: number) {
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token', token)
    const endpointUrl = `${environment.JSON_SERVER}/orders`;
    //return this.http.get(endpointUrl, { 'headers': httpOptions }).pipe(map(res => res));
    let indexDeleteOrder = cancelOrder.findIndex(item => item.orderId === orderId)
    cancelOrder.splice(cancelOrder.findIndex((index) => index.orderId == orderId), 1);
    return of(cancelOrder[indexDeleteOrder])
  }
  deteOrderTransactionById(orderId: number) {
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token', token)
    const endpointUrl = `${environment.JSON_SERVER}/orders`;
    //return this.http.get(endpointUrl, { 'headers': httpOptions }).pipe(map(res => res));
    let indexOrderTrans = orderTransactin.findIndex(item => item.orderId === orderId)
    orderTransactin.splice(orderTransactin.findIndex((index) => index.orderId == orderId), 1);
    return of(orderTransactin[indexOrderTrans])
  }
  deleteOrderShipping(orderId: number) {
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token', token)
    const endpointUrl = `${environment.JSON_SERVER}/orders`;
    //return this.http.get(endpointUrl, { 'headers': httpOptions }).pipe(map(res => res));
    let indexShipment = shipmentData.findIndex(item => item.OrderDetails.orderId === orderId)
    shipmentData.splice(shipmentData.findIndex((index) => index?.OrderDetails?.orderId == orderId), 1);
    return of(shipmentData[indexShipment])
  }
  getOrderShippingList() {
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token', token)
    const endpointUrl = `${environment.JSON_SERVER}/orders`;
    //return this.http.get(endpointUrl, { 'headers': httpOptions }).pipe(map(res => res));
    return of(shipmentData)
  }
  getOrderShippingListById(orderId: number) {
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token', token)
    const endpointUrl = `${environment.JSON_SERVER}/orders`;
    //return this.http.get(endpointUrl, { 'headers': httpOptions }).pipe(map(res => res));
    let indexShipment = shipmentData.findIndex(item => item.OrderDetails.orderId === orderId)
    return of(shipmentData[indexShipment])
  }

  getUserList() {
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token', token)
    const endpointUrl = `${environment.JSON_SERVER}/orders`;
    //return this.http.get(endpointUrl, { 'headers': httpOptions }).pipe(map(res => res));
    return of(Userdata)
  }

  getMostActiveQuibList() {
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token', token)
    const endpointUrl = `${environment.JSON_SERVER}/orders`;
    //return this.http.get(endpointUrl, { 'headers': httpOptions }).pipe(map(res => res));
    return of(QuibData)
  }
  getRecentActiveQuibList() {
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token', token)
    const endpointUrl = `${environment.JSON_SERVER}/orders`;
    //return this.http.get(endpointUrl, { 'headers': httpOptions }).pipe(map(res => res));
    return of(QuibData)
  }
  getAlphBeticQuibList() {
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token', token)
    const endpointUrl = `${environment.JSON_SERVER}/orders`;
    //return this.http.get(endpointUrl, { 'headers': httpOptions }).pipe(map(res => res));
    return of(QuibData)
  }
}