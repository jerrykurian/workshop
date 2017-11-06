package com.ensat.controllers.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.ensat.entities.Feature;
import com.ensat.services.ProductService;

@Controller
@RequestMapping("api")
public class ExternalApiController {
	 private ProductService productService;

    @Autowired
    public void setProductService(ProductService productService) {
        this.productService = productService;
    }
    
    /**
     * Delete product by its id.
     *
     * @param id
     * @return
     */
    @RequestMapping(value="hello", method=RequestMethod.GET)
    public String greet() {
        return "Hello";
    }
    
	 /**
     * Delete product by its id.
     *
     * @param id
     * @return
     */
    @RequestMapping(value="feature", method=RequestMethod.POST)
    public String addFeatures(List<Feature> features) {
        productService.addFeatures(features);
        return "redirect:/products";
    }
}
