package com.assetify.service.dto;


import java.time.ZonedDateTime;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

/**
 * A DTO for the Service entity.
 */
public class ServiceDTO implements Serializable {

    private Long id;

    private ZonedDateTime startDate;

    private ZonedDateTime dueDate;

    private ZonedDateTime completedDate;

    private String note;

    private Long assetUnderServiceId;

    private Long servicingVendorId;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public ZonedDateTime getStartDate() {
        return startDate;
    }

    public void setStartDate(ZonedDateTime startDate) {
        this.startDate = startDate;
    }

    public ZonedDateTime getDueDate() {
        return dueDate;
    }

    public void setDueDate(ZonedDateTime dueDate) {
        this.dueDate = dueDate;
    }

    public ZonedDateTime getCompletedDate() {
        return completedDate;
    }

    public void setCompletedDate(ZonedDateTime completedDate) {
        this.completedDate = completedDate;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public Long getAssetUnderServiceId() {
        return assetUnderServiceId;
    }

    public void setAssetUnderServiceId(Long assetId) {
        this.assetUnderServiceId = assetId;
    }

    public Long getServicingVendorId() {
        return servicingVendorId;
    }

    public void setServicingVendorId(Long vendorId) {
        this.servicingVendorId = vendorId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        ServiceDTO serviceDTO = (ServiceDTO) o;
        if(serviceDTO.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), serviceDTO.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "ServiceDTO{" +
            "id=" + getId() +
            ", startDate='" + getStartDate() + "'" +
            ", dueDate='" + getDueDate() + "'" +
            ", completedDate='" + getCompletedDate() + "'" +
            ", note='" + getNote() + "'" +
            "}";
    }
}
