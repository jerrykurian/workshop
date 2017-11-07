import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { EventResponseTime } from './event-response-time.model';
import { EventResponseTimePopupService } from './event-response-time-popup.service';
import { EventResponseTimeService } from './event-response-time.service';

@Component({
    selector: 'jhi-event-response-time-delete-dialog',
    templateUrl: './event-response-time-delete-dialog.component.html'
})
export class EventResponseTimeDeleteDialogComponent {

    eventResponseTime: EventResponseTime;

    constructor(
        private eventResponseTimeService: EventResponseTimeService,
        public activeModal: NgbActiveModal,
        private eventManager: JhiEventManager
    ) {
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.eventResponseTimeService.delete(id).subscribe((response) => {
            this.eventManager.broadcast({
                name: 'eventResponseTimeListModification',
                content: 'Deleted an eventResponseTime'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-event-response-time-delete-popup',
    template: ''
})
export class EventResponseTimeDeletePopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private eventResponseTimePopupService: EventResponseTimePopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            this.eventResponseTimePopupService
                .open(EventResponseTimeDeleteDialogComponent as Component, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
