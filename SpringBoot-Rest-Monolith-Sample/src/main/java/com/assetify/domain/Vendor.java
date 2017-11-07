package com.assetify.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import java.io.Serializable;
import java.time.ZonedDateTime;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

/**
 * A Vendor.
 */
@Entity
@Table(name = "vendor")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Vendor implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "contact_name")
    private String contactName;

    @Column(name = "contact_number")
    private String contactNumber;

    @Column(name = "date_registered")
    private ZonedDateTime dateRegistered;

    @ManyToMany
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    @JoinTable(name = "vendor_assets_serviced",
               joinColumns = @JoinColumn(name="vendors_id", referencedColumnName="id"),
               inverseJoinColumns = @JoinColumn(name="assets_serviceds_id", referencedColumnName="id"))
    private Set<Asset> assetsServiceds = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public Vendor name(String name) {
        this.name = name;
        return this;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getContactName() {
        return contactName;
    }

    public Vendor contactName(String contactName) {
        this.contactName = contactName;
        return this;
    }

    public void setContactName(String contactName) {
        this.contactName = contactName;
    }

    public String getContactNumber() {
        return contactNumber;
    }

    public Vendor contactNumber(String contactNumber) {
        this.contactNumber = contactNumber;
        return this;
    }

    public void setContactNumber(String contactNumber) {
        this.contactNumber = contactNumber;
    }

    public ZonedDateTime getDateRegistered() {
        return dateRegistered;
    }

    public Vendor dateRegistered(ZonedDateTime dateRegistered) {
        this.dateRegistered = dateRegistered;
        return this;
    }

    public void setDateRegistered(ZonedDateTime dateRegistered) {
        this.dateRegistered = dateRegistered;
    }

    public Set<Asset> getAssetsServiceds() {
        return assetsServiceds;
    }

    public Vendor assetsServiceds(Set<Asset> assets) {
        this.assetsServiceds = assets;
        return this;
    }

    public Vendor addAssetsServiced(Asset asset) {
        this.assetsServiceds.add(asset);
        return this;
    }

    public Vendor removeAssetsServiced(Asset asset) {
        this.assetsServiceds.remove(asset);
        return this;
    }

    public void setAssetsServiceds(Set<Asset> assets) {
        this.assetsServiceds = assets;
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
        Vendor vendor = (Vendor) o;
        if (vendor.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), vendor.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Vendor{" +
            "id=" + getId() +
            ", name='" + getName() + "'" +
            ", contactName='" + getContactName() + "'" +
            ", contactNumber='" + getContactNumber() + "'" +
            ", dateRegistered='" + getDateRegistered() + "'" +
            "}";
    }
}
