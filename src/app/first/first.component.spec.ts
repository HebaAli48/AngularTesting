import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { FirstComponent } from './first.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('FirstComponent', () => {
  let component: FirstComponent;
  let fixture: ComponentFixture<FirstComponent>;
  let dg:DebugElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstComponent ],
       imports:[ReactiveFormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    dg=fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('userEmail control',()=>{
    var email=   component.loginForm.controls["useremail"]
       expect(email.valid).toEqual(false)

       email.setValue('test@gmail.com')
       expect(email.valid).toBeTruthy()
    })
   
    it('user validation',()=>{
      var email=   component.loginForm.controls["useremail"]
      var password=   component.loginForm.controls["userpassword"]
      email.setValue("test@gmail.com")
      password.setValue('123456')
      fixture.detectChanges()
      expect(component.loginForm.valid).toEqual(true)
  
    })

  it('user increased',()=>{
var btn=dg.query(By.css('#okBtn'));
var h=dg.query(By.css('#result'))
var result=component.countedUser
btn.triggerEventHandler('click')
fixture.detectChanges();
expect(component.countedUser).toEqual(++result)
expect(h.nativeElement.innerText).toEqual(result.toString())
  });
});
