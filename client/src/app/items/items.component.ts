import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {


  constructor(public is : ItemsService) { }

  displayedColumns: string[] = ['Item ID', 'Name', 'Amount', 'Inventory Code','Delete'];
  dataSource : any

  ngOnInit(): void {
    this.is.getAllItems().subscribe(
      res=>{this.dataSource = res
          console.log(res)
        }
    )
  }

  delete(id){
    this.is.delete(id).subscribe(
      res=>{console.log(res)
        this.is.getAllItems().subscribe(
          res=>{this.dataSource = res
              console.log(res)
            }
        )
        
      }
    )

  }

}
