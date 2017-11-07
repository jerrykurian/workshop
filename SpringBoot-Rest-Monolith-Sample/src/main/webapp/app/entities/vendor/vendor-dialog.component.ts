import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { Vendor } from './vendor.model';
import { VendorPopupService } from './vendor-popup.service';
import { VendorService } from './vendor.service';
import { Asset, AssetService } from '../asset';
import { ResponseWrapper } from '../../shared';

@Component({
    selector: 'jhi-vendor-dialog',
    templateUrl: './vendor-dialog.component.html'
})
export class VendorDialogComponent implements OnInit {

    vendor: Vendor;
    isSaving: boolean;

    assets: Asset[];

    constructor(
        public activeModal: NgbActiveModal,
        private jhiAlertService: JhiAlertService,
        private vendorService: VendorService,
        private assetService: AssetService,
        private eventManager: JhiEventManager
    ) {
    }

    ngOnInit() {
        this.isSaving = false;
        this.assetService.query()
            .subscribe((res: ResponseWrapper) => { this.assets = res.json; }, (res: ResponseWrapper) => this.onError(res.json));
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    save() {
        this.isSaving = true;
        if (this.vendor.id !== undefined) {
            this.subscribeToSaveResponse(
                this.vendorService.update(this.vendor));
        } else {
            this.subscribeToSaveResponse(
                this.vendorService.create(this.vendor));
        }
    }

    private subscribeToSaveResponse(result: Observable<Vendor>) {
        result.subscribe((res: Vendor) =>
            this.onSaveSuccess(res), (res: Response) => this.onSaveError());
    }

    private onSaveSuccess(result: Vendor) {
        this.eventManager.broadcast({ name: 'vendorListModification', content: 'OK'});
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

    getSelected(selectedVals: Array<any>, option: any) {
        if (selectedVals) {
            for (let i = 0; i < selectedVals.length; i++) {
                if (option.id === selectedVals[i].id) {
                    return selectedVals[i];
                }
            }
        }
        return option;
    }
}

@Component({
    selector: 'jhi-vendor-popup',
    template: ''
})
export class VendorPopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private vendorPopupService: VendorPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.vendorPopupService
                    .open(VendorDialogComponent as Component, params['id']);
            } else {
                this.vendorPopupService
                    .open(VendorDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
