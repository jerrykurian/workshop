/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { JhiDateUtils, JhiDataUtils, JhiEventManager } from 'ng-jhipster';
import { AssetsmgmtTestModule } from '../../../test.module';
import { MockActivatedRoute } from '../../../helpers/mock-route.service';
import { ServiceDetailComponent } from '../../../../../../main/webapp/app/entities/service/service-detail.component';
import { ServiceService } from '../../../../../../main/webapp/app/entities/service/service.service';
import { Service } from '../../../../../../main/webapp/app/entities/service/service.model';

describe('Component Tests', () => {

    describe('Service Management Detail Component', () => {
        let comp: ServiceDetailComponent;
        let fixture: ComponentFixture<ServiceDetailComponent>;
        let service: ServiceService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [AssetsmgmtTestModule],
                declarations: [ServiceDetailComponent],
                providers: [
                    JhiDateUtils,
                    JhiDataUtils,
                    DatePipe,
                    {
                        provide: ActivatedRoute,
                        useValue: new MockActivatedRoute({id: 123})
                    },
                    ServiceService,
                    JhiEventManager
                ]
            }).overrideTemplate(ServiceDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(ServiceDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ServiceService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN

            spyOn(service, 'find').and.returnValue(Observable.of(new Service(10)));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.service).toEqual(jasmine.objectContaining({id: 10}));
            });
        });
    });

});
