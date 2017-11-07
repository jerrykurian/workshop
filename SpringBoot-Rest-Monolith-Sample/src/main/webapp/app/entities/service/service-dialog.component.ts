import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { Service } from './service.model';
import { ServicePopupService } from './service-popup.service';
import { ServiceService } from './service.service';
import { Asset, AssetService } from '../asset';
import { Vendor, VendorService } from '../vendor';
import { ResponseWrapper } from '../../shared';

@Component({
    selector: 'jhi-service-dialog',
    templateUrl: './service-dialog.component.html'
})
export class ServiceDialogComponent implements OnInit {

    service: Service;
    isSaving: boolean;

    assets: Asset[];

    vendors: Vendor[];

    constructor(
        public activeModal: NgbActiveModal,
        private jhiAlertService: JhiAlertService,
        private serviceService: ServiceService,
        private assetService: AssetService,
        private vendorService: VendorService,
        private eventManager: JhiEventManager
    ) {
    }

    ngOnInit() {
        this.isSaving = false;
        this.assetService.query()
            .subscribe((res: ResponseWrapper) => { this.assets = res.json; }, (res: ResponseWrapper) => this.onError(res.json));
        this.vendorService.query()
            .subscribe((res: ResponseWrapper) => { this.vendors = res.json; }, (res: ResponseWrapper) => this.onError(res.json));
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    save() {
        this.isSaving = true;
        if (this.service.id !== undefined) {
            this.subscribeToSaveResponse(
                this.serviceService.update(this.service));
        } else {
            this.subscribeToSaveResponse(
                this.serviceService.create(this.service));
        }
    }

    private subscribeToSaveResponse(result: Observable<Service>) {
        result.subscribe((res: Service) =>
            this.onSaveSuccess(res), (res: Response) => this.onSaveError());
    }

    private onSaveSuccess(result: Service) {
        this.eventManager.broadcast({ name: 'serviceListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
    }

    private onSaveError() {
        this.isSaving = false;
    }

    private onError(error: any) {
        this.jhiAlertService.error(error.message, null, null);
    }

    trackAssetById(index: number, item: Asset) {
        return item.id;
    }

    trackVendorById(index: number, item: Vendor) {
        return item.id;
    }
}

@Component({
    selector: 'jhi-service-popup',
    template: ''
})
export class ServicePopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private servicePopupService: ServicePopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.servicePopupService
                    .open(ServiceDialogComponent as Component, params['id']);
            } else {
                this.servicePopupService
                    .open(ServiceDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
