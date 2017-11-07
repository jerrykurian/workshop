package com.assetify.web.rest;

import com.assetify.AssetsmgmtApp;

import com.assetify.domain.EventResponseTime;
import com.assetify.repository.EventResponseTimeRepository;
import com.assetify.service.dto.EventResponseTimeDTO;
import com.assetify.service.mapper.EventResponseTimeMapper;
import com.assetify.web.rest.errors.ExceptionTranslator;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.web.PageableHandlerMethodArgumentResolver;
import org.springframework.http.MediaType;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import java.time.Instant;
import java.time.ZonedDateTime;
import java.time.ZoneOffset;
import java.time.ZoneId;
import java.util.List;

import static com.assetify.web.rest.TestUtil.sameInstant;
import static com.assetify.web.rest.TestUtil.createFormattingConversionService;
import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

/**
 * Test class for the EventResponseTimeResource REST controller.
 *
 * @see EventResponseTimeResource
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = AssetsmgmtApp.class)
public class EventResponseTimeResourceIntTest {

    private static final ZonedDateTime DEFAULT_ASSIGNED_DATE = ZonedDateTime.ofInstant(Instant.ofEpochMilli(0L), ZoneOffset.UTC);
    private static final ZonedDateTime UPDATED_ASSIGNED_DATE = ZonedDateTime.now(ZoneId.systemDefault()).withNano(0);

    private static final ZonedDateTime DEFAULT_UNASSIGN_DATE = ZonedDateTime.ofInstant(Instant.ofEpochMilli(0L), ZoneOffset.UTC);
    private static final ZonedDateTime UPDATED_UNASSIGN_DATE = ZonedDateTime.now(ZoneId.systemDefault()).withNano(0);

    @Autowired
    private EventResponseTimeRepository eventResponseTimeRepository;

    @Autowired
    private EventResponseTimeMapper eventResponseTimeMapper;

    @Autowired
    private MappingJackson2HttpMessageConverter jacksonMessageConverter;

    @Autowired
    private PageableHandlerMethodArgumentResolver pageableArgumentResolver;

    @Autowired
    private ExceptionTranslator exceptionTranslator;

    @Autowired
    private EntityManager em;

    private MockMvc restEventResponseTimeMockMvc;

    private EventResponseTime eventResponseTime;

    @Before
    public void setup() {
        MockitoAnnotations.initMocks(this);
        final EventResponseTimeResource eventResponseTimeResource = new EventResponseTimeResource(eventResponseTimeRepository, eventResponseTimeMapper);
        this.restEventResponseTimeMockMvc = MockMvcBuilders.standaloneSetup(eventResponseTimeResource)
            .setCustomArgumentResolvers(pageableArgumentResolver)
            .setControllerAdvice(exceptionTranslator)
            .setConversionService(createFormattingConversionService())
            .setMessageConverters(jacksonMessageConverter).build();
    }

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static EventResponseTime createEntity(EntityManager em) {
        EventResponseTime eventResponseTime = new EventResponseTime()
            .assignedDate(DEFAULT_ASSIGNED_DATE)
            .unassignDate(DEFAULT_UNASSIGN_DATE);
        return eventResponseTime;
    }

    @Before
    public void initTest() {
        eventResponseTime = createEntity(em);
    }

    @Test
    @Transactional
    public void createEventResponseTime() throws Exception {
        int databaseSizeBeforeCreate = eventResponseTimeRepository.findAll().size();

        // Create the EventResponseTime
        EventResponseTimeDTO eventResponseTimeDTO = eventResponseTimeMapper.toDto(eventResponseTime);
        restEventResponseTimeMockMvc.perform(post("/api/event-response-times")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(eventResponseTimeDTO)))
            .andExpect(status().isCreated());

        // Validate the EventResponseTime in the database
        List<EventResponseTime> eventResponseTimeList = eventResponseTimeRepository.findAll();
        assertThat(eventResponseTimeList).hasSize(databaseSizeBeforeCreate + 1);
        EventResponseTime testEventResponseTime = eventResponseTimeList.get(eventResponseTimeList.size() - 1);
        assertThat(testEventResponseTime.getAssignedDate()).isEqualTo(DEFAULT_ASSIGNED_DATE);
        assertThat(testEventResponseTime.getUnassignDate()).isEqualTo(DEFAULT_UNASSIGN_DATE);
    }

    @Test
    @Transactional
    public void createEventResponseTimeWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = eventResponseTimeRepository.findAll().size();

        // Create the EventResponseTime with an existing ID
        eventResponseTime.setId(1L);
        EventResponseTimeDTO eventResponseTimeDTO = eventResponseTimeMapper.toDto(eventResponseTime);

        // An entity with an existing ID cannot be created, so this API call must fail
        restEventResponseTimeMockMvc.perform(post("/api/event-response-times")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(eventResponseTimeDTO)))
            .andExpect(status().isBadRequest());

        // Validate the EventResponseTime in the database
        List<EventResponseTime> eventResponseTimeList = eventResponseTimeRepository.findAll();
        assertThat(eventResponseTimeList).hasSize(databaseSizeBeforeCreate);
    }

    @Test
    @Transactional
    public void getAllEventResponseTimes() throws Exception {
        // Initialize the database
        eventResponseTimeRepository.saveAndFlush(eventResponseTime);

        // Get all the eventResponseTimeList
        restEventResponseTimeMockMvc.perform(get("/api/event-response-times?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(eventResponseTime.getId().intValue())))
            .andExpect(jsonPath("$.[*].assignedDate").value(hasItem(sameInstant(DEFAULT_ASSIGNED_DATE))))
            .andExpect(jsonPath("$.[*].unassignDate").value(hasItem(sameInstant(DEFAULT_UNASSIGN_DATE))));
    }

    @Test
    @Transactional
    public void getEventResponseTime() throws Exception {
        // Initialize the database
        eventResponseTimeRepository.saveAndFlush(eventResponseTime);

        // Get the eventResponseTime
        restEventResponseTimeMockMvc.perform(get("/api/event-response-times/{id}", eventResponseTime.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(eventResponseTime.getId().intValue()))
            .andExpect(jsonPath("$.assignedDate").value(sameInstant(DEFAULT_ASSIGNED_DATE)))
            .andExpect(jsonPath("$.unassignDate").value(sameInstant(DEFAULT_UNASSIGN_DATE)));
    }

    @Test
    @Transactional
    public void getNonExistingEventResponseTime() throws Exception {
        // Get the eventResponseTime
        restEventResponseTimeMockMvc.perform(get("/api/event-response-times/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateEventResponseTime() throws Exception {
        // Initialize the database
        eventResponseTimeRepository.saveAndFlush(eventResponseTime);
        int databaseSizeBeforeUpdate = eventResponseTimeRepository.findAll().size();

        // Update the eventResponseTime
        EventResponseTime updatedEventResponseTime = eventResponseTimeRepository.findOne(eventResponseTime.getId());
        updatedEventResponseTime
            .assignedDate(UPDATED_ASSIGNED_DATE)
            .unassignDate(UPDATED_UNASSIGN_DATE);
        EventResponseTimeDTO eventResponseTimeDTO = eventResponseTimeMapper.toDto(updatedEventResponseTime);

        restEventResponseTimeMockMvc.perform(put("/api/event-response-times")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(eventResponseTimeDTO)))
            .andExpect(status().isOk());

        // Validate the EventResponseTime in the database
        List<EventResponseTime> eventResponseTimeList = eventResponseTimeRepository.findAll();
        assertThat(eventResponseTimeList).hasSize(databaseSizeBeforeUpdate);
        EventResponseTime testEventResponseTime = eventResponseTimeList.get(eventResponseTimeList.size() - 1);
        assertThat(testEventResponseTime.getAssignedDate()).isEqualTo(UPDATED_ASSIGNED_DATE);
        assertThat(testEventResponseTime.getUnassignDate()).isEqualTo(UPDATED_UNASSIGN_DATE);
    }

    @Test
    @Transactional
    public void updateNonExistingEventResponseTime() throws Exception {
        int databaseSizeBeforeUpdate = eventResponseTimeRepository.findAll().size();

        // Create the EventResponseTime
        EventResponseTimeDTO eventResponseTimeDTO = eventResponseTimeMapper.toDto(eventResponseTime);

        // If the entity doesn't have an ID, it will be created instead of just being updated
        restEventResponseTimeMockMvc.perform(put("/api/event-response-times")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(eventResponseTimeDTO)))
            .andExpect(status().isCreated());

        // Validate the EventResponseTime in the database
        List<EventResponseTime> eventResponseTimeList = eventResponseTimeRepository.findAll();
        assertThat(eventResponseTimeList).hasSize(databaseSizeBeforeUpdate + 1);
    }

    @Test
    @Transactional
    public void deleteEventResponseTime() throws Exception {
        // Initialize the database
        eventResponseTimeRepository.saveAndFlush(eventResponseTime);
        int databaseSizeBeforeDelete = eventResponseTimeRepository.findAll().size();

        // Get the eventResponseTime
        restEventResponseTimeMockMvc.perform(delete("/api/event-response-times/{id}", eventResponseTime.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isOk());

        // Validate the database is empty
        List<EventResponseTime> eventResponseTimeList = eventResponseTimeRepository.findAll();
        assertThat(eventResponseTimeList).hasSize(databaseSizeBeforeDelete - 1);
    }

    @Test
    @Transactional
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(EventResponseTime.class);
        EventResponseTime eventResponseTime1 = new EventResponseTime();
        eventResponseTime1.setId(1L);
        EventResponseTime eventResponseTime2 = new EventResponseTime();
        eventResponseTime2.setId(eventResponseTime1.getId());
        assertThat(eventResponseTime1).isEqualTo(eventResponseTime2);
        eventResponseTime2.setId(2L);
        assertThat(eventResponseTime1).isNotEqualTo(eventResponseTime2);
        eventResponseTime1.setId(null);
        assertThat(eventResponseTime1).isNotEqualTo(eventResponseTime2);
    }

    @Test
    @Transactional
    public void dtoEqualsVerifier() throws Exception {
        TestUtil.equalsVerifier(EventResponseTimeDTO.class);
        EventResponseTimeDTO eventResponseTimeDTO1 = new EventResponseTimeDTO();
        eventResponseTimeDTO1.setId(1L);
        EventResponseTimeDTO eventResponseTimeDTO2 = new EventResponseTimeDTO();
        assertThat(eventResponseTimeDTO1).isNotEqualTo(eventResponseTimeDTO2);
        eventResponseTimeDTO2.setId(eventResponseTimeDTO1.getId());
        assertThat(eventResponseTimeDTO1).isEqualTo(eventResponseTimeDTO2);
        eventResponseTimeDTO2.setId(2L);
        assertThat(eventResponseTimeDTO1).isNotEqualTo(eventResponseTimeDTO2);
        eventResponseTimeDTO1.setId(null);
        assertThat(eventResponseTimeDTO1).isNotEqualTo(eventResponseTimeDTO2);
    }

    @Test
    @Transactional
    public void testEntityFromId() {
        assertThat(eventResponseTimeMapper.fromId(42L).getId()).isEqualTo(42);
        assertThat(eventResponseTimeMapper.fromId(null)).isNull();
    }
}
