import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppService } from 'src/app/app.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class AppOrderComponent implements OnInit {
  public orderForm = this.formBuilder.group({
    time: ['', Validators.required],
    customer: ['', Validators.required],
    phone: ['', Validators.required],
    comment: [''],
    salami: [false],
    schinken: [false],
    thunfisch: [false],
    mozzarella: [false],
    champignons: [false],
    paprika: [false],
    zwiebel: [false],
    mais: [false],
    oliven: [false],
    ananas: [false],
    peperoni_mild: [false],
    peperoni_scharf: [false],
  });
  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly appService: AppService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
    console.log(this.data);

  }

  public onSubmit(): void {
    this.appService.sendOrder(this.orderForm.value).subscribe({
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        this.orderForm.reset();
      },
    });
  }

}
