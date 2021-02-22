import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {



  constructor(public fb: FormBuilder, public is: ItemsService, public router: Router) { }

  myForm: FormGroup

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      amount: ['', Validators.required],
      inventoryCode: ['', Validators.required]
    })
  }

  handleSubmit() {
    this.is.addItem(this.myForm.value).subscribe(
      (res: any) => {
        console.log(res)
        this.router.navigateByUrl('/items')
      }
    )

  }

}
