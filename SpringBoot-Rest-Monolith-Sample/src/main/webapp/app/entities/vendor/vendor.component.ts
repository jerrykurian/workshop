import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager, JhiParseLinks, JhiAlertService } from 'ng-jhipster';

import { Vendor } from './vendor.model';
import { VendorService } from './vendor.service';
import { ITEMS_PER_PAGE, Principal, ResponseWrapper } from '../../shared';

@Component({
    selector: 'jhi-vendor',
    templateUrl: './vendor.component.html'
})
export class VendorComponent implements OnInit, OnDestroy {
vendors: Vendor[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private vendorService: VendorService,
        private jhiAlertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {
    }

    loadAll() {
        this.vendorService.query().subscribe(
            (res: ResponseWrapper) => {
                this.vendors = res.json;
            },
            (res: ResponseWrapper) => this.onError(res.json)
        );
    }
    ngOnInit() {
        this.loadAll();
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.registerChangeInVendors();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: Vendor) {
        return item.id;
    }
    registerChangeInVendors() {
        this.eventSubscriber = this.eventManager.subscribe('vendorListModification', (response) => this.loadAll());
    }

    private onError(error) {
        this.jhiAlertService.error(error.message, null, null);
    }
}
