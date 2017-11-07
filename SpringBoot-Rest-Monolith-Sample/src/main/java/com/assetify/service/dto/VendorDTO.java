package com.assetify.service.dto;


import java.time.ZonedDateTime;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

/**
 * A DTO for the Vendor entity.
 */
public class VendorDTO implements Serializable {

    private Long id;

    private String name;

    private String contactName;

    private String contactNumber;

    private ZonedDateTime dateRegistered;

    private Set<AssetDTO> assetsServiceds = new HashSet<>();

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getContactName() {
        return contactName;
    }

    public void setContactName(String contactName) {
        this.contactName = contactName;
    }

    public String getContactNumber() {
        return contactNumber;
    }

    public void setContactNumber(String contactNumber) {
        this.contactNumber = contactNumber;
    }

    public ZonedDateTime getDateRegistered() {
        return dateRegistered;
    }

    public void setDateRegistered(ZonedDateTime dateRegistered) {
        this.dateRegistered = dateRegistered;
    }

    public Set<AssetDTO> getAssetsServiceds() {
        return assetsServiceds;
    }

    public void setAssetsServiceds(Set<AssetDTO> assets) {
        this.assetsServiceds = assets;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        VendorDTO vendorDTO = (VendorDTO) o;
        if(vendorDTO.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), vendorDTO.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "VendorDTO{" +
            "id=" + getId() +
            ", name='" + getName() + "'" +
            ", contactName='" + getContactName() + "'" +
            ", contactNumber='" + getContactNumber() + "'" +
            ", dateRegistered='" + getDateRegistered() + "'" +
            "}";
    }
}
