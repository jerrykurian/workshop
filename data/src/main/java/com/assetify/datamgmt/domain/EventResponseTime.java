package com.assetify.datamgmt.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import java.io.Serializable;
import java.time.ZonedDateTime;
import java.util.Objects;

/**
 * A EventResponseTime.
 */
@Entity
@Table(name = "event_response_time")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class EventResponseTime implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "assigned_date")
    private ZonedDateTime assignedDate;

    @Column(name = "unassign_date")
    private ZonedDateTime unassignDate;

    @ManyToOne
    private User eventOwner;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public ZonedDateTime getAssignedDate() {
        return assignedDate;
    }

    public EventResponseTime assignedDate(ZonedDateTime assignedDate) {
        this.assignedDate = assignedDate;
        return this;
    }

    public void setAssignedDate(ZonedDateTime assignedDate) {
        this.assignedDate = assignedDate;
    }

    public ZonedDateTime getUnassignDate() {
        return unassignDate;
    }

    public EventResponseTime unassignDate(ZonedDateTime unassignDate) {
        this.unassignDate = unassignDate;
        return this;
    }

    public void setUnassignDate(ZonedDateTime unassignDate) {
        this.unassignDate = unassignDate;
    }

    public User getEventOwner() {
        return eventOwner;
    }

    public EventResponseTime eventOwner(User user) {
        this.eventOwner = user;
        return this;
    }

    public void setEventOwner(User user) {
        this.eventOwner = user;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        EventResponseTime eventResponseTime = (EventResponseTime) o;
        if (eventResponseTime.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), eventResponseTime.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "EventResponseTime{" +
            "id=" + getId() +
            ", assignedDate='" + getAssignedDate() + "'" +
            ", unassignDate='" + getUnassignDate() + "'" +
            "}";
    }
}
