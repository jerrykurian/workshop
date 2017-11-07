import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { EventType } from './event-type.model';
import { EventTypePopupService } from './event-type-popup.service';
import { EventTypeService } from './event-type.service';

@Component({
    selector: 'jhi-event-type-delete-dialog',
    templateUrl: './event-type-delete-dialog.component.html'
})
export class EventTypeDeleteDialogComponent {

    eventType: EventType;

    constructor(
        private eventTypeService: EventTypeService,
        public activeModal: NgbActiveModal,
        private eventManager: JhiEventManager
    ) {
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.eventTypeService.delete(id).subscribe((response) => {
            this.eventManager.broadcast({
                name: 'eventTypeListModification',
                content: 'Deleted an eventType'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-event-type-delete-popup',
    template: ''
})
export class EventTypeDeletePopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private eventTypePopupService: EventTypePopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            this.eventTypePopupService
                .open(EventTypeDeleteDialogComponent as Component, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
