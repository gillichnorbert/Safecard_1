import { Component, OnInit } from '@angular/core';
import { loadStripe, Stripe } from '@stripe/stripe-js';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  private stripe: Stripe | null = null;
  errorMessage: string | null = null;
  successMessage: string | null = null;

  constructor(private http: HttpClient) {}

  async ngOnInit() {
    // Stripe inicializálása a Publishable kulccsal
    this.stripe = await loadStripe('pk_test_51QYaBRRw8gU7tXwKF51rAIbwnbiHHFFxIEvq4X5OGsLsP1ycFIhHXlGOsEo5Sq9cNtOdVEDe21yzEEtVozHPrrr0006L2sSHqn');
    const elements = this.stripe?.elements();
    const cardElement = elements?.create('card');
    cardElement?.mount('#card-element');
  }

  async makePayment() {
    this.errorMessage = null;
    this.successMessage = null;

    // Backend endpoint meghívása a client_secret létrehozásához
    const paymentIntent = await this.http
      .post<{ clientSecret: string }>('/api/create-payment-intent', { amount: 1000 })
      .toPromise();

    if (!paymentIntent) {
      this.errorMessage = 'Hiba történt a fizetési folyamatban.';
      return;
    }

    const { clientSecret } = paymentIntent;

    const result = await this.stripe?.confirmCardPayment(clientSecret, {
      payment_method: {
        card: this.stripe?.elements().getElement('card')!,
        billing_details: {
          name: 'Vásárló neve',
        },
      },
    });

    if (result?.error) {
      this.errorMessage = result.error.message!;
    } else {
      this.successMessage = 'Sikeres fizetés!';
    }
  }
}
