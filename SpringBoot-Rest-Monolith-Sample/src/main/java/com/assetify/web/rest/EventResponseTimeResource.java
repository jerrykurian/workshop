package com.assetify.web.rest;

import com.codahale.metrics.annotation.Timed;
import com.assetify.domain.EventResponseTime;

import com.assetify.repository.EventResponseTimeRepository;
import com.assetify.web.rest.errors.BadRequestAlertException;
import com.assetify.web.rest.util.HeaderUtil;
import com.assetify.service.dto.EventResponseTimeDTO;
import com.assetify.service.mapper.EventResponseTimeMapper;
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
 * REST controller for managing EventResponseTime.
 */
@RestController
@RequestMapping("/api")
public class EventResponseTimeResource {

    private final Logger log = LoggerFactory.getLogger(EventResponseTimeResource.class);

    private static final String ENTITY_NAME = "eventResponseTime";

    private final EventResponseTimeRepository eventResponseTimeRepository;

    private final EventResponseTimeMapper eventResponseTimeMapper;

    public EventResponseTimeResource(EventResponseTimeRepository eventResponseTimeRepository, EventResponseTimeMapper eventResponseTimeMapper) {
        this.eventResponseTimeRepository = eventResponseTimeRepository;
        this.eventResponseTimeMapper = eventResponseTimeMapper;
    }

    /**
     * POST  /event-response-times : Create a new eventResponseTime.
     *
     * @param eventResponseTimeDTO the eventResponseTimeDTO to create
     * @return the ResponseEntity with status 201 (Created) and with body the new eventResponseTimeDTO, or with status 400 (Bad Request) if the eventResponseTime has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/event-response-times")
    @Timed
    public ResponseEntity<EventResponseTimeDTO> createEventResponseTime(@RequestBody EventResponseTimeDTO eventResponseTimeDTO) throws URISyntaxException {
        log.debug("REST request to save EventResponseTime : {}", eventResponseTimeDTO);
        if (eventResponseTimeDTO.getId() != null) {
            throw new BadRequestAlertException("A new eventResponseTime cannot already have an ID", ENTITY_NAME, "idexists");
        }
        EventResponseTime eventResponseTime = eventResponseTimeMapper.toEntity(eventResponseTimeDTO);
        eventResponseTime = eventResponseTimeRepository.save(eventResponseTime);
        EventResponseTimeDTO result = eventResponseTimeMapper.toDto(eventResponseTime);
        return ResponseEntity.created(new URI("/api/event-response-times/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /event-response-times : Updates an existing eventResponseTime.
     *
     * @param eventResponseTimeDTO the eventResponseTimeDTO to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated eventResponseTimeDTO,
     * or with status 400 (Bad Request) if the eventResponseTimeDTO is not valid,
     * or with status 500 (Internal Server Error) if the eventResponseTimeDTO couldn't be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/event-response-times")
    @Timed
    public ResponseEntity<EventResponseTimeDTO> updateEventResponseTime(@RequestBody EventResponseTimeDTO eventResponseTimeDTO) throws URISyntaxException {
        log.debug("REST request to update EventResponseTime : {}", eventResponseTimeDTO);
        if (eventResponseTimeDTO.getId() == null) {
            return createEventResponseTime(eventResponseTimeDTO);
        }
        EventResponseTime eventResponseTime = eventResponseTimeMapper.toEntity(eventResponseTimeDTO);
        eventResponseTime = eventResponseTimeRepository.save(eventResponseTime);
        EventResponseTimeDTO result = eventResponseTimeMapper.toDto(eventResponseTime);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, eventResponseTimeDTO.getId().toString()))
            .body(result);
    }

    /**
     * GET  /event-response-times : get all the eventResponseTimes.
     *
     * @return the ResponseEntity with status 200 (OK) and the list of eventResponseTimes in body
     */
    @GetMapping("/event-response-times")
    @Timed
    public List<EventResponseTimeDTO> getAllEventResponseTimes() {
        log.debug("REST request to get all EventResponseTimes");
        List<EventResponseTime> eventResponseTimes = eventResponseTimeRepository.findAll();
        return eventResponseTimeMapper.toDto(eventResponseTimes);
        }

    /**
     * GET  /event-response-times/:id : get the "id" eventResponseTime.
     *
     * @param id the id of the eventResponseTimeDTO to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the eventResponseTimeDTO, or with status 404 (Not Found)
     */
    @GetMapping("/event-response-times/{id}")
    @Timed
    public ResponseEntity<EventResponseTimeDTO> getEventResponseTime(@PathVariable Long id) {
        log.debug("REST request to get EventResponseTime : {}", id);
        EventResponseTime eventResponseTime = eventResponseTimeRepository.findOne(id);
        EventResponseTimeDTO eventResponseTimeDTO = eventResponseTimeMapper.toDto(eventResponseTime);
        return ResponseUtil.wrapOrNotFound(Optional.ofNullable(eventResponseTimeDTO));
    }

    /**
     * DELETE  /event-response-times/:id : delete the "id" eventResponseTime.
     *
     * @param id the id of the eventResponseTimeDTO to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/event-response-times/{id}")
    @Timed
    public ResponseEntity<Void> deleteEventResponseTime(@PathVariable Long id) {
        log.debug("REST request to delete EventResponseTime : {}", id);
        eventResponseTimeRepository.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }
}
