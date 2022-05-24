import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl, ValidationErrors} from '@angular/forms';

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.scss']
})
export class AdvancedSearchComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;
  details:any;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }
  createForm() { 
    this.registerForm= this.formBuilder.group({
        name: [''],
        email: ['', [
                  Validators.minLength(5),
                  Validators.maxLength(80),
                  Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
                ]],
        phoneNumber: [''],
        primaryskill: [''],
        companyName: ['']
      }, { validators: this.atLeastOne(Validators.required, ["name", "email", "phoneNumber", "primaryskill", "companyName"]) })
  } 

  atLeastOne(validator: ValidatorFn, controls: string[] = []): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control) return null;
      const formGroup = control as FormGroup;
      return (formGroup && controls.some(k => !validator(formGroup.controls[k]))) ? null : {
        atLeastOne: true,
      };
    }
  }
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (!this.registerForm.valid) {
      this.submitted = false;
      return;
    }else{
      var name = this.registerForm.get('name')?.value;
      var email= this.registerForm.get('email')?.value;
      var phoneNumber = this.registerForm.get('phoneNumber')?.value;
      var primaryskill = this.registerForm.get('primaryskill')?.value;
      var companyName = this.registerForm.get('companyName')?.value;
      var details = name + ", "+email+", "+ phoneNumber + ", "+ primaryskill +", "+companyName; 
      console.log(details);
      return details;
    }

  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

}


