import { ProductService } from '../../../../core/services/product.service';
import { ProductModel } from '../../../../core/models/product.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { ProductAsyncValidators } from './form-product.validators';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {

  @Input() isEdit?: boolean;
  @Input() productSelect: ProductModel;
  formProduct: FormGroup;
  product: ProductModel;

  constructor( private productService: ProductService ) {
    this.formProduct = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ],
      [ProductAsyncValidators.shouldBeUnique(this.productService)]),
      description: new FormControl('', [
        Validators.required
      ]),
      id: new FormControl(''),
      state: new FormControl(true)
    });
  }

  ngOnInit() {
    if (this.isEdit) {
      this.name.setValue(this.productSelect.name),
      this.description.setValue(this.productSelect.description),
      this.id.setValue(this.productSelect.id);
    }
  }

  get name() {
    return this.formProduct.get('name');
  }

  get description() {
    return this.formProduct.get('description');
  }

  get id() {
    return this.formProduct.get('id');
  }

  saveProduct() {
    if (!this.formProduct.invalid) {
      if (this.isEdit) {
        return this.productService.updateProduct(this.formProduct.value);
      }
      return this.productService.postProduct(this.formProduct.value);
    }
  }

}
