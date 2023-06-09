import { Component,OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit{
  countedUser: number=0;
  loginForm: FormGroup=new FormGroup({});
message: string=""
  constructor() { }

  ngOnInit() {
       this.loginForm = new FormGroup({
         useremail: new FormControl('',[Validators.required,Validators.email]),
          userpassword: new FormControl('', [Validators.required, Validators.minLength(6)])
  });
}

submitLoginForm(){
  this.countedUser++;
  if(this.loginForm.valid){
    this.message = "Form Submitted Successfuly";
  }
}
 

}
