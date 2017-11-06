package com.ensat.repositories;

import org.springframework.data.repository.CrudRepository;

import com.ensat.entities.Feature;

public interface FeatureRepository extends CrudRepository<Feature, Long> {

}
