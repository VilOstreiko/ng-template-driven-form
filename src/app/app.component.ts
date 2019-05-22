import {Component, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('f') userForm: NgForm;
  suggestUserName() {
    const suggestedName = 'Superuser';

    // this.userForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   os: ''
    // });
    this.userForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  onSubmit(form: NgForm) {
    console.log(this.userForm);
    console.log(this.userForm.value.username);
  }
}
