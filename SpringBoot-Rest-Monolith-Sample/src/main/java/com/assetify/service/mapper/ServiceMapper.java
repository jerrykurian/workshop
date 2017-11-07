package com.assetify.service.mapper;

import com.assetify.domain.*;
import com.assetify.service.dto.ServiceDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity Service and its DTO ServiceDTO.
 */
@Mapper(componentModel = "spring", uses = {AssetMapper.class, VendorMapper.class})
public interface ServiceMapper extends EntityMapper<ServiceDTO, Service> {

    @Mapping(source = "assetUnderService.id", target = "assetUnderServiceId")
    @Mapping(source = "servicingVendor.id", target = "servicingVendorId")
    ServiceDTO toDto(Service service); 

    @Mapping(source = "assetUnderServiceId", target = "assetUnderService")
    @Mapping(source = "servicingVendorId", target = "servicingVendor")
    Service toEntity(ServiceDTO serviceDTO);

    default Service fromId(Long id) {
        if (id == null) {
            return null;
        }
        Service service = new Service();
        service.setId(id);
        return service;
    }
}
