import { Component } from '@angular/core';

@Component({
  selector: 'app-subscription-fold',
  templateUrl: './subscription-fold.component.html',
  styleUrls: ['./subscription-fold.component.css']
})
export class SubscriptionFoldComponent {
  constructor() {}

  onSubmit() {
    alert('Thank you for your response');
  }
}
