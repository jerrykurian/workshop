package com.assetify.web.rest;

import com.codahale.metrics.annotation.Timed;
import com.assetify.domain.EventType;

import com.assetify.repository.EventTypeRepository;
import com.assetify.web.rest.errors.BadRequestAlertException;
import com.assetify.web.rest.util.HeaderUtil;
import com.assetify.service.dto.EventTypeDTO;
import com.assetify.service.mapper.EventTypeMapper;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;

import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing EventType.
 */
@RestController
@RequestMapping("/api")
public class EventTypeResource {

    private final Logger log = LoggerFactory.getLogger(EventTypeResource.class);

    private static final String ENTITY_NAME = "eventType";

    private final EventTypeRepository eventTypeRepository;

    private final EventTypeMapper eventTypeMapper;

    public EventTypeResource(EventTypeRepository eventTypeRepository, EventTypeMapper eventTypeMapper) {
        this.eventTypeRepository = eventTypeRepository;
        this.eventTypeMapper = eventTypeMapper;
    }

    /**
     * POST  /event-types : Create a new eventType.
     *
     * @param eventTypeDTO the eventTypeDTO to create
     * @return the ResponseEntity with status 201 (Created) and with body the new eventTypeDTO, or with status 400 (Bad Request) if the eventType has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/event-types")
    @Timed
    public ResponseEntity<EventTypeDTO> createEventType(@RequestBody EventTypeDTO eventTypeDTO) throws URISyntaxException {
        log.debug("REST request to save EventType : {}", eventTypeDTO);
        if (eventTypeDTO.getId() != null) {
            throw new BadRequestAlertException("A new eventType cannot already have an ID", ENTITY_NAME, "idexists");
        }
        EventType eventType = eventTypeMapper.toEntity(eventTypeDTO);
        eventType = eventTypeRepository.save(eventType);
        EventTypeDTO result = eventTypeMapper.toDto(eventType);
        return ResponseEntity.created(new URI("/api/event-types/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /event-types : Updates an existing eventType.
     *
     * @param eventTypeDTO the eventTypeDTO to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated eventTypeDTO,
     * or with status 400 (Bad Request) if the eventTypeDTO is not valid,
     * or with status 500 (Internal Server Error) if the eventTypeDTO couldn't be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/event-types")
    @Timed
    public ResponseEntity<EventTypeDTO> updateEventType(@RequestBody EventTypeDTO eventTypeDTO) throws URISyntaxException {
        log.debug("REST request to update EventType : {}", eventTypeDTO);
        if (eventTypeDTO.getId() == null) {
            return createEventType(eventTypeDTO);
        }
        EventType eventType = eventTypeMapper.toEntity(eventTypeDTO);
        eventType = eventTypeRepository.save(eventType);
        EventTypeDTO result = eventTypeMapper.toDto(eventType);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, eventTypeDTO.getId().toString()))
            .body(result);
    }

    /**
     * GET  /event-types : get all the eventTypes.
     *
     * @return the ResponseEntity with status 200 (OK) and the list of eventTypes in body
     */
    @GetMapping("/event-types")
    @Timed
    public List<EventTypeDTO> getAllEventTypes() {
        log.debug("REST request to get all EventTypes");
        List<EventType> eventTypes = eventTypeRepository.findAll();
        return eventTypeMapper.toDto(eventTypes);
        }

    /**
     * GET  /event-types/:id : get the "id" eventType.
     *
     * @param id the id of the eventTypeDTO to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the eventTypeDTO, or with status 404 (Not Found)
     */
    @GetMapping("/event-types/{id}")
    @Timed
    public ResponseEntity<EventTypeDTO> getEventType(@PathVariable Long id) {
        log.debug("REST request to get EventType : {}", id);
        EventType eventType = eventTypeRepository.findOne(id);
        EventTypeDTO eventTypeDTO = eventTypeMapper.toDto(eventType);
        return ResponseUtil.wrapOrNotFound(Optional.ofNullable(eventTypeDTO));
    }

    /**
     * DELETE  /event-types/:id : delete the "id" eventType.
     *
     * @param id the id of the eventTypeDTO to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/event-types/{id}")
    @Timed
    public ResponseEntity<Void> deleteEventType(@PathVariable Long id) {
        log.debug("REST request to delete EventType : {}", id);
        eventTypeRepository.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }
}
