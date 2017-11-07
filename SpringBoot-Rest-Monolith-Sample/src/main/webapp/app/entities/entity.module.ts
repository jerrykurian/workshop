import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AssetsmgmtEventModule } from './event/event.module';
import { AssetsmgmtEventResponseTimeModule } from './event-response-time/event-response-time.module';
import { AssetsmgmtEventTypeModule } from './event-type/event-type.module';
import { AssetsmgmtStatusModule } from './status/status.module';
import { AssetsmgmtVendorModule } from './vendor/vendor.module';
import { AssetsmgmtAssetModule } from './asset/asset.module';
import { AssetsmgmtServiceModule } from './service/service.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        AssetsmgmtEventModule,
        AssetsmgmtEventResponseTimeModule,
        AssetsmgmtEventTypeModule,
        AssetsmgmtStatusModule,
        AssetsmgmtVendorModule,
        AssetsmgmtAssetModule,
        AssetsmgmtServiceModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AssetsmgmtEntityModule {}
