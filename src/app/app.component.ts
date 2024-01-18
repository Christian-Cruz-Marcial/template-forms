import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  subscriptions = ['Basic', 'advanced', 'Pro'];
  selectedSubscription = 'advanced';
  @ViewChild('signupForm') sgnForm!: NgForm;
  onSubmit(){
     console.log(this.sgnForm.value)
  }
}
