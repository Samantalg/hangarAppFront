import { BasicHangarModel } from 'src/app/core/models/basic-hangar.interface';
import { HangarService } from 'src/app/core/services/hangar.service';
import { ProductModel } from './../models/product.interface';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductOfHangarModel } from '../models/product-hangar.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private urlApi = 'http://localhost:8888/api/';
  products: ProductModel[] = [];
  basicDataHangars: BasicHangarModel[] = [];
  productsOfHangar: ProductOfHangarModel[] = [];

  constructor( private http: HttpClient, private hangarService: HangarService ) {
    this.loadHangars();
  }

  httpOptions = {
    headers: new HttpHeaders( { 'Content-Type': 'application/json' })
  };

  public loadProducts(): Observable<ProductModel[]> {
    return this.http
                .get<ProductModel[]>(`${ this.urlApi }products`);
  }

  public getProducts(): ProductModel[] {
    this.loadProducts();
    return this.products;
  }

  public getProduct(id: number): ProductModel {
    return this.products[id];
  }

  public postProduct(product: ProductModel) {
    return this.http
                .post<ProductModel>(`${ this.urlApi }product`, product)
                .subscribe( data => {
                  console.log(data);
                });
  }

  public updateProduct(product: ProductModel) {
    console.log(product);
    return this.http.put(`${ this.urlApi }product`, product).subscribe( data => {
                  console.log(data);
                });
  }

  public loadHangars() {
    this.hangarService.loadBasicInfoHangars().subscribe( data => {
      this.basicDataHangars = data;
    });
  }

  public getListhangars() {
    return this.basicDataHangars;
  }

  public loadRelationships(id: number): Observable<ProductOfHangarModel[]> {
    return this.http
               .get<ProductOfHangarModel[]>(`${ this.urlApi }products/hangar/${ id }`);
  }

}
