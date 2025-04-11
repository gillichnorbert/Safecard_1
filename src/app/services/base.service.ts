import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  product:AngularFireList<any>;
  constructor(private db: AngularFireDatabase) {
    this.product=db.list('/product');
  }

  addProduct(product:any){
    this.product.push(product);
  }

  updateProduct(product: any) {
    const key = product.key;
    delete product.key;
    this.product.update(key, product);
  }
  

  getProduct(){
    return this.product;
  }

}