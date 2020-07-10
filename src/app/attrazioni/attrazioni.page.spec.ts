import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AttrazioniPage } from './attrazioni.page';

describe('AttrazioniPage', () => {
  let component: AttrazioniPage;
  let fixture: ComponentFixture<AttrazioniPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttrazioniPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AttrazioniPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
