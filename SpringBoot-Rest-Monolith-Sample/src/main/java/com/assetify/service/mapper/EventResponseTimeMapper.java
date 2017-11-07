package com.assetify.service.mapper;

import com.assetify.domain.*;
import com.assetify.service.dto.EventResponseTimeDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity EventResponseTime and its DTO EventResponseTimeDTO.
 */
@Mapper(componentModel = "spring", uses = {UserMapper.class})
public interface EventResponseTimeMapper extends EntityMapper<EventResponseTimeDTO, EventResponseTime> {

    @Mapping(source = "eventOwner.id", target = "eventOwnerId")
    EventResponseTimeDTO toDto(EventResponseTime eventResponseTime); 

    @Mapping(source = "eventOwnerId", target = "eventOwner")
    EventResponseTime toEntity(EventResponseTimeDTO eventResponseTimeDTO);

    default EventResponseTime fromId(Long id) {
        if (id == null) {
            return null;
        }
        EventResponseTime eventResponseTime = new EventResponseTime();
        eventResponseTime.setId(id);
        return eventResponseTime;
    }
}
