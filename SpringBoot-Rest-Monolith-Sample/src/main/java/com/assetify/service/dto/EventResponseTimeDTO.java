package com.assetify.service.dto;


import java.time.ZonedDateTime;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

/**
 * A DTO for the EventResponseTime entity.
 */
public class EventResponseTimeDTO implements Serializable {

    private Long id;

    private ZonedDateTime assignedDate;

    private ZonedDateTime unassignDate;

    private Long eventOwnerId;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public ZonedDateTime getAssignedDate() {
        return assignedDate;
    }

    public void setAssignedDate(ZonedDateTime assignedDate) {
        this.assignedDate = assignedDate;
    }

    public ZonedDateTime getUnassignDate() {
        return unassignDate;
    }

    public void setUnassignDate(ZonedDateTime unassignDate) {
        this.unassignDate = unassignDate;
    }

    public Long getEventOwnerId() {
        return eventOwnerId;
    }

    public void setEventOwnerId(Long userId) {
        this.eventOwnerId = userId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        EventResponseTimeDTO eventResponseTimeDTO = (EventResponseTimeDTO) o;
        if(eventResponseTimeDTO.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), eventResponseTimeDTO.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "EventResponseTimeDTO{" +
            "id=" + getId() +
            ", assignedDate='" + getAssignedDate() + "'" +
            ", unassignDate='" + getUnassignDate() + "'" +
            "}";
    }
}
