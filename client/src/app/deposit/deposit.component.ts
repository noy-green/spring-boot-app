import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {


  constructor(public fb: FormBuilder, public is: ItemsService, public router: Router) { }

  myForm: FormGroup


  ngOnInit(): void {
    this.myForm = this.fb.group({
      itemId: ['', Validators.required],
      amount: ['', Validators.required],
    })
  }

  handleSubmit() {
    this.is.deposit({"amount":this.myForm.controls['amount'].value },this.myForm.controls['itemId'].value).subscribe(
      (res: any) => {
        console.log(res)
        this.router.navigateByUrl('/items')
      }
    )

  }

}
