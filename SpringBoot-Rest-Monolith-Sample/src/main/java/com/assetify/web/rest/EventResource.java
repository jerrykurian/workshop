package com.assetify.web.rest;

import com.codahale.metrics.annotation.Timed;
import com.assetify.domain.Event;

import com.assetify.repository.EventRepository;
import com.assetify.web.rest.errors.BadRequestAlertException;
import com.assetify.web.rest.util.HeaderUtil;
import com.assetify.service.dto.EventDTO;
import com.assetify.service.mapper.EventMapper;
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
 * REST controller for managing Event.
 */
@RestController
@RequestMapping("/api")
public class EventResource {

    private final Logger log = LoggerFactory.getLogger(EventResource.class);

    private static final String ENTITY_NAME = "event";

    private final EventRepository eventRepository;

    private final EventMapper eventMapper;

    public EventResource(EventRepository eventRepository, EventMapper eventMapper) {
        this.eventRepository = eventRepository;
        this.eventMapper = eventMapper;
    }

    /**
     * POST  /events : Create a new event.
     *
     * @param eventDTO the eventDTO to create
     * @return the ResponseEntity with status 201 (Created) and with body the new eventDTO, or with status 400 (Bad Request) if the event has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/events")
    @Timed
    public ResponseEntity<EventDTO> createEvent(@RequestBody EventDTO eventDTO) throws URISyntaxException {
        log.debug("REST request to save Event : {}", eventDTO);
        if (eventDTO.getId() != null) {
            throw new BadRequestAlertException("A new event cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Event event = eventMapper.toEntity(eventDTO);
        event = eventRepository.save(event);
        EventDTO result = eventMapper.toDto(event);
        return ResponseEntity.created(new URI("/api/events/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /events : Updates an existing event.
     *
     * @param eventDTO the eventDTO to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated eventDTO,
     * or with status 400 (Bad Request) if the eventDTO is not valid,
     * or with status 500 (Internal Server Error) if the eventDTO couldn't be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/events")
    @Timed
    public ResponseEntity<EventDTO> updateEvent(@RequestBody EventDTO eventDTO) throws URISyntaxException {
        log.debug("REST request to update Event : {}", eventDTO);
        if (eventDTO.getId() == null) {
            return createEvent(eventDTO);
        }
        Event event = eventMapper.toEntity(eventDTO);
        event = eventRepository.save(event);
        EventDTO result = eventMapper.toDto(event);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, eventDTO.getId().toString()))
            .body(result);
    }

    /**
     * GET  /events : get all the events.
     *
     * @return the ResponseEntity with status 200 (OK) and the list of events in body
     */
    @GetMapping("/events")
    @Timed
    public List<EventDTO> getAllEvents() {
        log.debug("REST request to get all Events");
        List<Event> events = eventRepository.findAll();
        return eventMapper.toDto(events);
        }

    /**
     * GET  /events/:id : get the "id" event.
     *
     * @param id the id of the eventDTO to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the eventDTO, or with status 404 (Not Found)
     */
    @GetMapping("/events/{id}")
    @Timed
    public ResponseEntity<EventDTO> getEvent(@PathVariable Long id) {
        log.debug("REST request to get Event : {}", id);
        Event event = eventRepository.findOne(id);
        EventDTO eventDTO = eventMapper.toDto(event);
        return ResponseUtil.wrapOrNotFound(Optional.ofNullable(eventDTO));
    }

    /**
     * DELETE  /events/:id : delete the "id" event.
     *
     * @param id the id of the eventDTO to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/events/{id}")
    @Timed
    public ResponseEntity<Void> deleteEvent(@PathVariable Long id) {
        log.debug("REST request to delete Event : {}", id);
        eventRepository.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }
}
