import { Injectable, Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';
import { Service } from './service.model';
import { ServiceService } from './service.service';

@Injectable()
export class ServicePopupService {
    private ngbModalRef: NgbModalRef;

    constructor(
        private datePipe: DatePipe,
        private modalService: NgbModal,
        private router: Router,
        private serviceService: ServiceService

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
                this.serviceService.find(id).subscribe((service) => {
                    service.startDate = this.datePipe
                        .transform(service.startDate, 'yyyy-MM-ddTHH:mm:ss');
                    service.dueDate = this.datePipe
                        .transform(service.dueDate, 'yyyy-MM-ddTHH:mm:ss');
                    service.completedDate = this.datePipe
                        .transform(service.completedDate, 'yyyy-MM-ddTHH:mm:ss');
                    this.ngbModalRef = this.serviceModalRef(component, service);
                    resolve(this.ngbModalRef);
                });
            } else {
                // setTimeout used as a workaround for getting ExpressionChangedAfterItHasBeenCheckedError
                setTimeout(() => {
                    this.ngbModalRef = this.serviceModalRef(component, new Service());
                    resolve(this.ngbModalRef);
                }, 0);
            }
        });
    }

    serviceModalRef(component: Component, service: Service): NgbModalRef {
        const modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.service = service;
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
