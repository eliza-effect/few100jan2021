import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipping',
  templateUrl: './tipping.component.html',
  styleUrls: ['./tipping.component.css']
})
export class TippingComponent implements OnInit {

  billAmount = 0;
  tipPercentage = .2;
  tipAmount = 0;
  total = 0;

  constructor() { }

  ngOnInit(): void {
  }

  calculateTip(amount: number): void {
    this.billAmount = isNaN(amount) ? 0 : amount;
    this.update();
  }

  changeTipPercentage(amount: number): void {
    this.tipPercentage = amount;
    this.update();
  }

  update(): void {
    this.tipAmount = this.billAmount * this.tipPercentage;
    this.total = this.tipAmount + this.billAmount;
  }
}
