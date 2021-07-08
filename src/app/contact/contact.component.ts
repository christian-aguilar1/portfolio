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
  isLoading!: boolean;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  sendEmail(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      this.form.disable();
      this.isLoading = true;
      var formData: any = new FormData();
      const value = this.form.value;
      let email = value.email;
      let text = value.message;
      formData.append("name", email);
      formData.append("email", email);
      formData.append("message", text);
      const myEmail = "christianaguilarm1@gmail.com";
      console.log(formData);
      var url = "https://docs.google.com/spreadsheets/u/1/d/e/2PACX-1vQRAMYtQoXrU28b5sX8nh6vvhX4xZl7j1u01OMfyceSNenvRI_67TJu5iXddVf-XasLxFwQJzOKN__W/pubhtml";
      this.http.post(url, formData).subscribe(
        (response) => {
          // // choose the response message
          // if (response["result"] == "success") {
          //   this.responseMessage = "Thanks for the message! I'll get back to you soon!";
          // } else {
          //   this.responseMessage = "Oops! Something went wrong... Reload the page and try again.";
          // }
          // this.form.enable(); // re enable the form after a success
          // this.submitted = true; // show the response message
          // this.isLoading = false; // re enable the submit button
          console.log(response);
        },
        (error) => {
          // this.responseMessage = "Oops! An error occurred... Reload the page and try again.";
          // this.form.enable(); // re enable the form after a success
          // this.submitted = true; // show the response message
          // this.isLoading = false; // re enable the submit button
          console.log(error);
        }
      );
    }
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

}
