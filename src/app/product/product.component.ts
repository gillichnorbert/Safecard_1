import { Component } from '@angular/core';
import { BaseService } from '../services/base.service';
import { map } from 'rxjs/operators';
import { NavigationStart, RouterLink } from '@angular/router';
import { Product } from '../models/product.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';


declare var $Stripe: any;
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
stockInfo = {
  inStock: 'Készleten',
  inStockDelivery: '2-4 munkanap',
  outOfStock: 'Nincs készleten',
  outOfStockDelivery: '2 hét',
  stock: 0
}
  columns: any[] = [
    {key: "name", label: "Név", type: "text"},
    {key: "stock", label: "Raktárkészlet", type: "number"}
  ];
  product: Product[] = [];

  
  

constructor(private base: BaseService) {
  this.loadItems(this.product);
  
}

ngOnInit() {
  this.loadItems(this.product);
}

  loadItems(product: any) {
    this.base.getProduct().snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(res => {
      this.product = res;
      if (this.product.length > 0) {
        this.stockInfo.stock = this.product[0].stock || 0;
      }
    });
  }
  

buyButtonClick() {
  
  if (this.stockInfo.stock == 1) {
    window.location.href = 'https://buy.stripe.com/28oeV350H5T1bYcfZ0';
  }
  this.stockInfo.stock--;
  window.location.href = 'https://buy.stripe.com/28oeV350H5T1bYcfZ0';
}
updateProduct(product: any) {
  this.base.updateProduct(product);
}



}
