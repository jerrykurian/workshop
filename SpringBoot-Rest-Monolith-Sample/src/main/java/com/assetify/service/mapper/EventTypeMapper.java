package com.assetify.service.mapper;

import com.assetify.domain.*;
import com.assetify.service.dto.EventTypeDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity EventType and its DTO EventTypeDTO.
 */
@Mapper(componentModel = "spring", uses = {})
public interface EventTypeMapper extends EntityMapper<EventTypeDTO, EventType> {

    

    

    default EventType fromId(Long id) {
        if (id == null) {
            return null;
        }
        EventType eventType = new EventType();
        eventType.setId(id);
        return eventType;
    }
}
