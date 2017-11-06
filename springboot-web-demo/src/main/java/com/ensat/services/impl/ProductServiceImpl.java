package com.ensat.services.impl;

import java.util.List;

import com.ensat.entities.Feature;
import com.ensat.entities.Product;
import com.ensat.repositories.FeatureRepository;
import com.ensat.repositories.ProductRepository;
import com.ensat.services.ProductService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Product service implement.
 */
@Service
public class ProductServiceImpl implements ProductService {

    private ProductRepository productRepository;
    private FeatureRepository featureRepository;

    @Autowired
    public void setProductRepository(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Autowired
    public void setFeatureRepository(FeatureRepository featureRepository) {
        this.featureRepository = featureRepository;
    }
    @Override
    public Iterable<Product> listAllProducts() {
        return productRepository.findAll();
    }

    @Override
    public Product getProductById(Integer id) {
        return productRepository.findOne(id);
    }

    @Override
    public Product saveProduct(Product product) {
        return productRepository.save(product);
    }

    @Override
    public void deleteProduct(Integer id) {
        productRepository.delete(id);
    }

	@Override
	public void addFeatures(List<Feature> features) {
		// TODO Auto-generated method stub
		for(Feature f:features){
			featureRepository.save(f);
		}
	}
}
