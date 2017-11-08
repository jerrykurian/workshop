package com.assetify.datamgmt.repository;

import com.assetify.datamgmt.domain.Vendor;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;
import java.util.List;

/**
 * Spring Data JPA repository for the Vendor entity.
 */
@SuppressWarnings("unused")
@Repository
public interface VendorRepository extends JpaRepository<Vendor, Long> {
    @Query("select distinct vendor from Vendor vendor left join fetch vendor.assetsServiceds")
    List<Vendor> findAllWithEagerRelationships();

    @Query("select vendor from Vendor vendor left join fetch vendor.assetsServiceds where vendor.id =:id")
    Vendor findOneWithEagerRelationships(@Param("id") Long id);

}
