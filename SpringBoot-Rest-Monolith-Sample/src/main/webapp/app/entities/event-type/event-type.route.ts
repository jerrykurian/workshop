import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { JhiPaginationUtil } from 'ng-jhipster';

import { EventTypeComponent } from './event-type.component';
import { EventTypeDetailComponent } from './event-type-detail.component';
import { EventTypePopupComponent } from './event-type-dialog.component';
import { EventTypeDeletePopupComponent } from './event-type-delete-dialog.component';

export const eventTypeRoute: Routes = [
    {
        path: 'event-type',
        component: EventTypeComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'assetsmgmtApp.eventType.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'event-type/:id',
        component: EventTypeDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'assetsmgmtApp.eventType.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const eventTypePopupRoute: Routes = [
    {
        path: 'event-type-new',
        component: EventTypePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'assetsmgmtApp.eventType.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'event-type/:id/edit',
        component: EventTypePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'assetsmgmtApp.eventType.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'event-type/:id/delete',
        component: EventTypeDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'assetsmgmtApp.eventType.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
