import { FormProductHangarComponent } from './components/form-product-hangar/form-product-hangar.component';
import { TranslateModule } from '@ngx-translate/core';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './views/products/products.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './views/product-detail/product-detail.component';
import { FormPriceComponent } from './components/form-price/form-price.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormProductComponent } from './components/form-product/form-product.component';
import { ProductsOfHangarComponent } from './views/products-of-hangar/products-of-hangar.component';
import { ProductNewComponent } from './views/product-new/product-new.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ProductListComponent } from './components/product-list/product-list.component';
import { PriceListComponent } from './components/price-list/price-list.component';
import { SideProductComponent } from './components/side-product/side-product.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductModifyComponent } from './views/product-modify/product-modify.component';
import { ProductsOfHangarListComponent } from './components/products-of-hangar-list/products-of-hangar-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailComponent,
    FormPriceComponent,
    PriceListComponent,
    FormProductComponent,
    ProductsOfHangarComponent,
    ProductNewComponent,
    FormProductHangarComponent,
    ProductListComponent,
    SideProductComponent,
    ProductCardComponent,
    ProductModifyComponent,
    ProductsOfHangarListComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule,
    TranslateModule,
    InfiniteScrollModule,
    SharedModule
  ],
  exports: [ProductsComponent, ProductsOfHangarComponent, ProductListComponent]
})

export class ProductsModule {

}
