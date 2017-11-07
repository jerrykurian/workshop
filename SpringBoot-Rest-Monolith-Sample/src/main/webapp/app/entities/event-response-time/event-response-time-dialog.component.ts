import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { EventResponseTime } from './event-response-time.model';
import { EventResponseTimePopupService } from './event-response-time-popup.service';
import { EventResponseTimeService } from './event-response-time.service';
import { User, UserService } from '../../shared';
import { ResponseWrapper } from '../../shared';

@Component({
    selector: 'jhi-event-response-time-dialog',
    templateUrl: './event-response-time-dialog.component.html'
})
export class EventResponseTimeDialogComponent implements OnInit {

    eventResponseTime: EventResponseTime;
    isSaving: boolean;

    users: User[];

    constructor(
        public activeModal: NgbActiveModal,
        private jhiAlertService: JhiAlertService,
        private eventResponseTimeService: EventResponseTimeService,
        private userService: UserService,
        private eventManager: JhiEventManager
    ) {
    }

    ngOnInit() {
        this.isSaving = false;
        this.userService.query()
            .subscribe((res: ResponseWrapper) => { this.users = res.json; }, (res: ResponseWrapper) => this.onError(res.json));
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    save() {
        this.isSaving = true;
        if (this.eventResponseTime.id !== undefined) {
            this.subscribeToSaveResponse(
                this.eventResponseTimeService.update(this.eventResponseTime));
        } else {
            this.subscribeToSaveResponse(
                this.eventResponseTimeService.create(this.eventResponseTime));
        }
    }

    private subscribeToSaveResponse(result: Observable<EventResponseTime>) {
        result.subscribe((res: EventResponseTime) =>
            this.onSaveSuccess(res), (res: Response) => this.onSaveError());
    }

    private onSaveSuccess(result: EventResponseTime) {
        this.eventManager.broadcast({ name: 'eventResponseTimeListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
    }

    private onSaveError() {
        this.isSaving = false;
    }

    private onError(error: any) {
        this.jhiAlertService.error(error.message, null, null);
    }

    trackUserById(index: number, item: User) {
        return item.id;
    }
}

@Component({
    selector: 'jhi-event-response-time-popup',
    template: ''
})
export class EventResponseTimePopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private eventResponseTimePopupService: EventResponseTimePopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.eventResponseTimePopupService
                    .open(EventResponseTimeDialogComponent as Component, params['id']);
            } else {
                this.eventResponseTimePopupService
                    .open(EventResponseTimeDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
