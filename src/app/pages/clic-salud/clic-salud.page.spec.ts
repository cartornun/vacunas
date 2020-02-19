import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClicSaludPage } from './clic-salud.page';

describe('ClicSaludPage', () => {
  let component: ClicSaludPage;
  let fixture: ComponentFixture<ClicSaludPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClicSaludPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClicSaludPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
