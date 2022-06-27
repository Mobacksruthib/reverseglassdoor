import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-candidate-review',
  templateUrl: './candidate-review.component.html',
  styleUrls: ['./candidate-review.component.scss']
})
export class CandidateReviewComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;
  max: number = 5;
  // value: number = 5;
  //value!: Observable<number>;
  registrationForm!: any;
  
  value="";
    public options = [
    {value: "on", id:"On"},
    {value: "off", id:"Off"},
  ]
  constructor(private formBuilder: FormBuilder) { }

//   ngOnInit() {
//     this.registerForm = this.formBuilder.group({
//         name: ['', Validators.required],
//         lastName: ['', Validators.required],
//         companyName:['', Validators.required],
//         primaryskill:['', Validators.required],
//         countrycode:['',[Validators.required,Validators.pattern('/^(\+?\d{1,3}|\d{1,4})$/')]],
//         phoneNumber: ['', [
//             Validators.required,
//             Validators.minLength(8),
//             Validators.maxLength(12),
//             Validators.pattern('^[0-9]*$')]],
//         companyWebsite:['', [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]],
//         message:['', Validators.required],
//         acceptTerms: [false, Validators.requiredTrue],
//         rating: [3],
//         gender: ['male', [Validators.required]],
//         email: ['', [
//             Validators.required,
//             Validators.minLength(5),
//             Validators.maxLength(80),
//             Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
//           ]],
//     });

    
// }

// get f() { return this.registerForm.controls; }
// get myForm() {
//   return this.registrationForm.get('gender');
// }
// onSubmit() {
//     this.submitted = true;
//     if (this.registerForm.invalid) {
//         return;
//     }
//     alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
// }
// onReset() {
//       this.submitted = false;
//       this.registerForm.reset();
//   }

ngOnInit() {
  this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      companyName:['', Validators.required],
      primaryskill:['', Validators.required],
      countrycode:['',[]],//[Validators.required,Validators.pattern('/^(\+?\d{1,3}|\d{1,4})$/')]],
      rating: [3],
      status: ['', [Validators.required]],
      phoneNumber: ['', [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(12),
          Validators.pattern('^[0-9]*$')]],
      companyWebsite:['', [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]],
      message:['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue],
      email: ['', [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(80),
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
        ]],
  });
}
get f() { return this.registerForm.controls; }

onSubmit() {
  this.submitted = true;
  if (this.registerForm.invalid) {
      return;
  }
  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
}



onReset() {
    this.submitted = false;
    this.registerForm.reset();
}
}
