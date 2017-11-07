import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager, JhiParseLinks, JhiAlertService } from 'ng-jhipster';

import { EventType } from './event-type.model';
import { EventTypeService } from './event-type.service';
import { ITEMS_PER_PAGE, Principal, ResponseWrapper } from '../../shared';

@Component({
    selector: 'jhi-event-type',
    templateUrl: './event-type.component.html'
})
export class EventTypeComponent implements OnInit, OnDestroy {
eventTypes: EventType[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private eventTypeService: EventTypeService,
        private jhiAlertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {
    }

    loadAll() {
        this.eventTypeService.query().subscribe(
            (res: ResponseWrapper) => {
                this.eventTypes = res.json;
            },
            (res: ResponseWrapper) => this.onError(res.json)
        );
    }
    ngOnInit() {
        this.loadAll();
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.registerChangeInEventTypes();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: EventType) {
        return item.id;
    }
    registerChangeInEventTypes() {
        this.eventSubscriber = this.eventManager.subscribe('eventTypeListModification', (response) => this.loadAll());
    }

    private onError(error) {
        this.jhiAlertService.error(error.message, null, null);
    }
}
