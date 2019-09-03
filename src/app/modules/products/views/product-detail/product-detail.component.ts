import { CommunicationService } from './../../../../core/services/communication.service';
import { ProductService } from '../../../../core/services/product.service';
import { ProductModel } from 'src/app/core/models/product.interface';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: ProductModel;
  insertPrice = true;
  showHistoric = true;

  constructor(private comService: CommunicationService, private router: Router, private productService: ProductService) { }

  ngOnInit() {
    this.product = this.comService.getDataRelativeToProduct();
    this.insertPrice = false;
    this.showHistoric = false;
  }

  public addPrice() {
    this.insertPrice = !this.insertPrice;
  }

  public getPrices() {
    this.showHistoric = !this.showHistoric;
  }

  public editProduct() {
    this.comService.setDataRelativeToProduct(this.product);
    this.router.navigate(['/products/modify']);
  }

  public deleteProduct() {
    this.productService.deleteProductIfIsNotLink(this.product.id).subscribe( data => {
      if (data) {
        window.alert(`product can't be deleted`);
      } else {
        window.alert('product deleted');
        this.router.navigate(['/products']);
      }
      
    }, err => {
      window.alert('fail');
    });
  }

}
