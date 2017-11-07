import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager, JhiParseLinks, JhiAlertService } from 'ng-jhipster';

import { EventResponseTime } from './event-response-time.model';
import { EventResponseTimeService } from './event-response-time.service';
import { ITEMS_PER_PAGE, Principal, ResponseWrapper } from '../../shared';

@Component({
    selector: 'jhi-event-response-time',
    templateUrl: './event-response-time.component.html'
})
export class EventResponseTimeComponent implements OnInit, OnDestroy {
eventResponseTimes: EventResponseTime[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private eventResponseTimeService: EventResponseTimeService,
        private jhiAlertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {
    }

    loadAll() {
        this.eventResponseTimeService.query().subscribe(
            (res: ResponseWrapper) => {
                this.eventResponseTimes = res.json;
            },
            (res: ResponseWrapper) => this.onError(res.json)
        );
    }
    ngOnInit() {
        this.loadAll();
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.registerChangeInEventResponseTimes();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: EventResponseTime) {
        return item.id;
    }
    registerChangeInEventResponseTimes() {
        this.eventSubscriber = this.eventManager.subscribe('eventResponseTimeListModification', (response) => this.loadAll());
    }

    private onError(error) {
        this.jhiAlertService.error(error.message, null, null);
    }
}
