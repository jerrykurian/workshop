package com.ensat.services;

import java.util.List;

import com.ensat.entities.Feature;
import com.ensat.entities.Product;

public interface ProductService {

    Iterable<Product> listAllProducts();

    Product getProductById(Integer id);

    Product saveProduct(Product product);

    void deleteProduct(Integer id);
    
    void addFeatures(List<Feature> features);
}
