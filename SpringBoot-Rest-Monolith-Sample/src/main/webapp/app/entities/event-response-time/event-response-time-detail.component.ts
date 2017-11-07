import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager } from 'ng-jhipster';

import { EventResponseTime } from './event-response-time.model';
import { EventResponseTimeService } from './event-response-time.service';

@Component({
    selector: 'jhi-event-response-time-detail',
    templateUrl: './event-response-time-detail.component.html'
})
export class EventResponseTimeDetailComponent implements OnInit, OnDestroy {

    eventResponseTime: EventResponseTime;
    private subscription: Subscription;
    private eventSubscriber: Subscription;

    constructor(
        private eventManager: JhiEventManager,
        private eventResponseTimeService: EventResponseTimeService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe((params) => {
            this.load(params['id']);
        });
        this.registerChangeInEventResponseTimes();
    }

    load(id) {
        this.eventResponseTimeService.find(id).subscribe((eventResponseTime) => {
            this.eventResponseTime = eventResponseTime;
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    }

    registerChangeInEventResponseTimes() {
        this.eventSubscriber = this.eventManager.subscribe(
            'eventResponseTimeListModification',
            (response) => this.load(this.eventResponseTime.id)
        );
    }
}
