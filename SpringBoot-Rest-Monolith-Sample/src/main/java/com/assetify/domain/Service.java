package com.assetify.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import java.io.Serializable;
import java.time.ZonedDateTime;
import java.util.Objects;

/**
 * A Service.
 */
@Entity
@Table(name = "service")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Service implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "start_date")
    private ZonedDateTime startDate;

    @Column(name = "due_date")
    private ZonedDateTime dueDate;

    @Column(name = "completed_date")
    private ZonedDateTime completedDate;

    @Column(name = "note")
    private String note;

    @ManyToOne
    private Asset assetUnderService;

    @ManyToOne
    private Vendor servicingVendor;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public ZonedDateTime getStartDate() {
        return startDate;
    }

    public Service startDate(ZonedDateTime startDate) {
        this.startDate = startDate;
        return this;
    }

    public void setStartDate(ZonedDateTime startDate) {
        this.startDate = startDate;
    }

    public ZonedDateTime getDueDate() {
        return dueDate;
    }

    public Service dueDate(ZonedDateTime dueDate) {
        this.dueDate = dueDate;
        return this;
    }

    public void setDueDate(ZonedDateTime dueDate) {
        this.dueDate = dueDate;
    }

    public ZonedDateTime getCompletedDate() {
        return completedDate;
    }

    public Service completedDate(ZonedDateTime completedDate) {
        this.completedDate = completedDate;
        return this;
    }

    public void setCompletedDate(ZonedDateTime completedDate) {
        this.completedDate = completedDate;
    }

    public String getNote() {
        return note;
    }

    public Service note(String note) {
        this.note = note;
        return this;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public Asset getAssetUnderService() {
        return assetUnderService;
    }

    public Service assetUnderService(Asset asset) {
        this.assetUnderService = asset;
        return this;
    }

    public void setAssetUnderService(Asset asset) {
        this.assetUnderService = asset;
    }

    public Vendor getServicingVendor() {
        return servicingVendor;
    }

    public Service servicingVendor(Vendor vendor) {
        this.servicingVendor = vendor;
        return this;
    }

    public void setServicingVendor(Vendor vendor) {
        this.servicingVendor = vendor;
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
        Service service = (Service) o;
        if (service.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), service.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Service{" +
            "id=" + getId() +
            ", startDate='" + getStartDate() + "'" +
            ", dueDate='" + getDueDate() + "'" +
            ", completedDate='" + getCompletedDate() + "'" +
            ", note='" + getNote() + "'" +
            "}";
    }
}
