import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AssetsmgmtSharedModule } from '../../shared';
import { AssetsmgmtAdminModule } from '../../admin/admin.module';
import {
    EventResponseTimeService,
    EventResponseTimePopupService,
    EventResponseTimeComponent,
    EventResponseTimeDetailComponent,
    EventResponseTimeDialogComponent,
    EventResponseTimePopupComponent,
    EventResponseTimeDeletePopupComponent,
    EventResponseTimeDeleteDialogComponent,
    eventResponseTimeRoute,
    eventResponseTimePopupRoute,
} from './';

const ENTITY_STATES = [
    ...eventResponseTimeRoute,
    ...eventResponseTimePopupRoute,
];

@NgModule({
    imports: [
        AssetsmgmtSharedModule,
        AssetsmgmtAdminModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        EventResponseTimeComponent,
        EventResponseTimeDetailComponent,
        EventResponseTimeDialogComponent,
        EventResponseTimeDeleteDialogComponent,
        EventResponseTimePopupComponent,
        EventResponseTimeDeletePopupComponent,
    ],
    entryComponents: [
        EventResponseTimeComponent,
        EventResponseTimeDialogComponent,
        EventResponseTimePopupComponent,
        EventResponseTimeDeleteDialogComponent,
        EventResponseTimeDeletePopupComponent,
    ],
    providers: [
        EventResponseTimeService,
        EventResponseTimePopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AssetsmgmtEventResponseTimeModule {}
