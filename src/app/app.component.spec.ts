import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { TranslateModule } from '@ngx-translate/core';
import { LangService } from './core/lang/lang.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let langService: LangService;
  
  beforeEach(async () => {
    
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        TranslateModule.forRoot(),
      ],
      providers: [
        LangService
      ],      
      declarations: [
        AppComponent
      ],
    }).compileComponents();

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    langService = TestBed.inject(LangService);
    fixture.detectChanges();
  }); 

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should call addCustomEvent on ngOnInit', () => {
    spyOn(langService, 'addCustomEvent');
    component.ngOnInit();
    expect(langService.addCustomEvent).toHaveBeenCalled();
  });

  it('should call removeCustomEvent on ngOnDestroy', () => {
    spyOn(langService, 'removeCustomEvent');
    // component.ngOnDestroy();
    expect(langService.removeCustomEvent).toHaveBeenCalled(); 
  });

  it('should dispatch custom event with specified language', () => {
    const param = 'en';
    spyOn(window, 'dispatchEvent');
    component.initCustomEvent(param);
    expect(window.dispatchEvent).toHaveBeenCalled();
    const expectedEvent = new CustomEvent("CHANGE_LANGUAGE", {
      detail: { lang: param }
    });
    expect(window.dispatchEvent).toHaveBeenCalledWith(expectedEvent);
  });
});
