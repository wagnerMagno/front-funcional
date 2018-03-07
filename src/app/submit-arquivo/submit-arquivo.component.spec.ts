import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitArquivoComponent } from './submit-arquivo.component';

describe('SubmitArquivoComponent', () => {
  let component: SubmitArquivoComponent;
  let fixture: ComponentFixture<SubmitArquivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitArquivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitArquivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
