package com.assetify.service.mapper;

import com.assetify.domain.*;
import com.assetify.service.dto.VendorDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity Vendor and its DTO VendorDTO.
 */
@Mapper(componentModel = "spring", uses = {AssetMapper.class})
public interface VendorMapper extends EntityMapper<VendorDTO, Vendor> {

    

    

    default Vendor fromId(Long id) {
        if (id == null) {
            return null;
        }
        Vendor vendor = new Vendor();
        vendor.setId(id);
        return vendor;
    }
}
