import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlberghiPage } from './alberghi.page';

describe('AlberghiPage', () => {
  let component: AlberghiPage;
  let fixture: ComponentFixture<AlberghiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlberghiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlberghiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
