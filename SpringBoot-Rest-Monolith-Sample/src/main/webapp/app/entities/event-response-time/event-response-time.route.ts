import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { JhiPaginationUtil } from 'ng-jhipster';

import { EventResponseTimeComponent } from './event-response-time.component';
import { EventResponseTimeDetailComponent } from './event-response-time-detail.component';
import { EventResponseTimePopupComponent } from './event-response-time-dialog.component';
import { EventResponseTimeDeletePopupComponent } from './event-response-time-delete-dialog.component';

export const eventResponseTimeRoute: Routes = [
    {
        path: 'event-response-time',
        component: EventResponseTimeComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'assetsmgmtApp.eventResponseTime.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'event-response-time/:id',
        component: EventResponseTimeDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'assetsmgmtApp.eventResponseTime.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const eventResponseTimePopupRoute: Routes = [
    {
        path: 'event-response-time-new',
        component: EventResponseTimePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'assetsmgmtApp.eventResponseTime.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'event-response-time/:id/edit',
        component: EventResponseTimePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'assetsmgmtApp.eventResponseTime.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'event-response-time/:id/delete',
        component: EventResponseTimeDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'assetsmgmtApp.eventResponseTime.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
