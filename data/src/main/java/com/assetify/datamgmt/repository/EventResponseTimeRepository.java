package com.assetify.datamgmt.repository;

import com.assetify.datamgmt.domain.EventResponseTime;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;
import java.util.List;

/**
 * Spring Data JPA repository for the EventResponseTime entity.
 */
@SuppressWarnings("unused")
@Repository
public interface EventResponseTimeRepository extends JpaRepository<EventResponseTime, Long> {

    @Query("select event_response_time from EventResponseTime event_response_time where event_response_time.eventOwner.login = ?#{principal.username}")
    List<EventResponseTime> findByEventOwnerIsCurrentUser();

}
