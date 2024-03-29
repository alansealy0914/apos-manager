import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../products/product.interface';
import { Router } from '@angular/router';

@Component({
    selector: 'product-detail',
    templateUrl: './productDetail.html'
})
export class ProductDetailComponent implements OnInit {
    title = 'Product Detail';
    agree = false;
    sib = false;
    product: Product;

    constructor(private route: ActivatedRoute, private router: Router) {}

    ngOnInit() {
        this.route.data.subscribe((data: { product: Product }) => {
            this.product = data.product;
        });
    }

    goToCreateOrder() {
        //this.router.navigate(['/orders/create']);
        this.router.navigate(['/owd']);
    }
}