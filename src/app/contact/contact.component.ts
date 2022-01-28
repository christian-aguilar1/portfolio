import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  form!: FormGroup;
  submitted = false;
  isLoading!: boolean;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  sendEmail(event: Event) {
    event.preventDefault();
    console.log("ala")
    if (this.form.valid) {
      this.submitted = true;
      this.form.disable();
      var formData: any = new FormData();
      const value = this.form.value;
      let email = value.email;
      let text = value.message;
      formData.append("name", email);
      formData.append("email", email);
      formData.append("message", text);
      console.log(formData);
      this.submitted = false;
      this.isLoading = true;
    }
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  get f() { return this.form.controls; }

}
