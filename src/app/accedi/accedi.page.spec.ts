import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';
import { AccediPage } from './accedi.page';
import { PostProvider } from '../providers/post-provider';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('AccediPage', () => {
  let component: AccediPage;
  let fixture: ComponentFixture<AccediPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccediPage ],
      imports: [IonicModule.forRoot(), IonicStorageModule.forRoot(), RouterTestingModule.withRoutes([])],
      providers: [PostProvider, HttpClient, HttpHandler, Storage]
    }).compileComponents();

    fixture = TestBed.createComponent(AccediPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('Funziona!!', () => {
    expect(component).toBeTruthy();
  });
});
