package com.company.controller;

import com.company.model.Price;
import com.company.service.PriceService;
import com.company.model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/price")
public class PriceController {

    @Autowired
    PriceService priceService;

    @PostMapping("/product")
    public Price createProductWithPrice(@Valid @RequestBody Price price) {
        Product product = price.getProduct();
        float newPrice  = price.getPrice();
        try {
            return priceService.createEntryPrice(product, newPrice);
        } catch(Exception e) {
            return price;
        }
    }

    @GetMapping("/prices")
    public List<Price> getPrices() {
        return priceService.getAllPrices();
    }

    @PostMapping("/product/{id}")
    public Price UpdatePrice(@PathVariable Long id, @RequestBody float price) {
        return priceService.createEntryPriceToProduct(id, price);
    }

    @GetMapping("/product/{id}")
    public List<Price> getPricesOfProduct(@PathVariable Long id) {
        return priceService.getAllPricesOfProduct(id);
    }

}