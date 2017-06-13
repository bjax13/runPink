import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params , Router} from '@angular/router';
import { FormGroup, FormControl , FormArray , Validators} from '@angular/forms';


@Component({
  selector: 'app-runner-form',
  templateUrl: './runner-form.component.html',
  styleUrls: ['./runner-form.component.scss']
})
export class RunnerFormComponent implements OnInit {
  id: number;
  editMode = false;
  runnerForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.initForm();
  }

  onSubmit(){
    console.log(this.runnerForm)
  }


  private initForm(){
    let firstName ='';
    let lastName ='';
    let email ='';
    let confirmEmail ='';
    let password ='';
    let confirmPassword ='';

    let streetAddress ="";
    let zipCode ="";
    let city ="";
    let country ="United States";
    let state ="Utah";

    let dateOfBirth ="";
    let gender ="Female";
    let phone ="";

    if(this.editMode){
      //if implementing editMode get runner from service then assign values
      // const runner = this.runnerService.getRunner(this.id)
      // firstName = this.runner.firstName;
    }

    this.runnerForm = new FormGroup({
      'firstName': new FormControl(firstName),
      'lastName': new FormControl(lastName),
      'email': new FormControl(email),
      'confirmEmail': new FormControl(confirmEmail),
      'password': new FormControl(password),
      'confirmPassword': new FormControl(confirmPassword),

      'streetAddress': new FormControl(streetAddress),
      'zipCode': new FormControl(zipCode),
      'city': new FormControl(city),
      'country': new FormControl(country),
      'state': new FormControl(state),

      'DOB': new FormControl(dateOfBirth),
      'gender': new FormControl(gender),
      'phone': new FormControl(phone),



    })
  }

}
