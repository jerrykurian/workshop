import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { JhiPaginationUtil } from 'ng-jhipster';

import { VendorComponent } from './vendor.component';
import { VendorDetailComponent } from './vendor-detail.component';
import { VendorPopupComponent } from './vendor-dialog.component';
import { VendorDeletePopupComponent } from './vendor-delete-dialog.component';

export const vendorRoute: Routes = [
    {
        path: 'vendor',
        component: VendorComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'assetsmgmtApp.vendor.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'vendor/:id',
        component: VendorDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'assetsmgmtApp.vendor.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const vendorPopupRoute: Routes = [
    {
        path: 'vendor-new',
        component: VendorPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'assetsmgmtApp.vendor.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'vendor/:id/edit',
        component: VendorPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'assetsmgmtApp.vendor.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'vendor/:id/delete',
        component: VendorDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'assetsmgmtApp.vendor.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
