import { Injectable, Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';
import { EventResponseTime } from './event-response-time.model';
import { EventResponseTimeService } from './event-response-time.service';

@Injectable()
export class EventResponseTimePopupService {
    private ngbModalRef: NgbModalRef;

    constructor(
        private datePipe: DatePipe,
        private modalService: NgbModal,
        private router: Router,
        private eventResponseTimeService: EventResponseTimeService

    ) {
        this.ngbModalRef = null;
    }

    open(component: Component, id?: number | any): Promise<NgbModalRef> {
        return new Promise<NgbModalRef>((resolve, reject) => {
            const isOpen = this.ngbModalRef !== null;
            if (isOpen) {
                resolve(this.ngbModalRef);
            }

            if (id) {
                this.eventResponseTimeService.find(id).subscribe((eventResponseTime) => {
                    eventResponseTime.assignedDate = this.datePipe
                        .transform(eventResponseTime.assignedDate, 'yyyy-MM-ddTHH:mm:ss');
                    eventResponseTime.unassignDate = this.datePipe
                        .transform(eventResponseTime.unassignDate, 'yyyy-MM-ddTHH:mm:ss');
                    this.ngbModalRef = this.eventResponseTimeModalRef(component, eventResponseTime);
                    resolve(this.ngbModalRef);
                });
            } else {
                // setTimeout used as a workaround for getting ExpressionChangedAfterItHasBeenCheckedError
                setTimeout(() => {
                    this.ngbModalRef = this.eventResponseTimeModalRef(component, new EventResponseTime());
                    resolve(this.ngbModalRef);
                }, 0);
            }
        });
    }

    eventResponseTimeModalRef(component: Component, eventResponseTime: EventResponseTime): NgbModalRef {
        const modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.eventResponseTime = eventResponseTime;
        modalRef.result.then((result) => {
            this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
            this.ngbModalRef = null;
        }, (reason) => {
            this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
            this.ngbModalRef = null;
        });
        return modalRef;
    }
}
