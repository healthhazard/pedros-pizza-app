import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AppService } from 'src/app/app.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class AppOrderComponent implements OnInit {
  public orderForm = this.formBuilder.group({
    time: [this.data.order, Validators.required],
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
    public dialogRef: MatDialogRef<AppOrderComponent>
  ) { }

  ngOnInit(): void {
    this.setTime();
  }

  setTime() {
    this.orderForm.controls['time'].setValue(this.data.order.time)
  }

  onSubmit(): void {
    this.appService.sendOrder(this.orderForm.value).subscribe({
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        this.dialogRef.close()
        this.orderForm.reset();
      },
    });
  }

}
