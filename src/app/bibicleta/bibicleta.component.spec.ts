import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BibicletaComponent } from './bibicleta.component';

describe('BibicletaComponent', () => {
  let component: BibicletaComponent;
  let fixture: ComponentFixture<BibicletaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BibicletaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BibicletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
