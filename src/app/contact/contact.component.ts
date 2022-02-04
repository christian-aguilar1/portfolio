import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MailSenderService } from '../services/mail-sender.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  form!: FormGroup;
  submitted = false;
  clicked = false;
  isLoading!: boolean;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private mailSender: MailSenderService) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  sendEmail(event: Event) {
    event.preventDefault();
    this.clicked = true;

    if (this.form.valid) {
      this.submitted = true;
      this.isLoading = true;
      this.form.disable();
      const value = this.form.value;
      this.mailSender.sendMessage(value.name, value.email, value.message);
      this.isLoading = false;
    }
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(8)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  get f() { return this.form.controls; }

}
