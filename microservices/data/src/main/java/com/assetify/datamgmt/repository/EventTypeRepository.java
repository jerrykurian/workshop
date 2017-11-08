package com.assetify.datamgmt.repository;

import com.assetify.datamgmt.domain.EventType;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the EventType entity.
 */
@SuppressWarnings("unused")
@Repository
public interface EventTypeRepository extends JpaRepository<EventType, Long> {

}
