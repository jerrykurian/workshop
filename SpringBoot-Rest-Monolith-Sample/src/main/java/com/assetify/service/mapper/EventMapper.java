package com.assetify.service.mapper;

import com.assetify.domain.*;
import com.assetify.service.dto.EventDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity Event and its DTO EventDTO.
 */
@Mapper(componentModel = "spring", uses = {UserMapper.class, StatusMapper.class, EventTypeMapper.class})
public interface EventMapper extends EntityMapper<EventDTO, Event> {

    @Mapping(source = "raisedBy.id", target = "raisedById")
    @Mapping(source = "assignedTo.id", target = "assignedToId")
    @Mapping(source = "status.id", target = "statusId")
    @Mapping(source = "type.id", target = "typeId")
    EventDTO toDto(Event event); 

    @Mapping(source = "raisedById", target = "raisedBy")
    @Mapping(source = "assignedToId", target = "assignedTo")
    @Mapping(source = "statusId", target = "status")
    @Mapping(source = "typeId", target = "type")
    Event toEntity(EventDTO eventDTO);

    default Event fromId(Long id) {
        if (id == null) {
            return null;
        }
        Event event = new Event();
        event.setId(id);
        return event;
    }
}
