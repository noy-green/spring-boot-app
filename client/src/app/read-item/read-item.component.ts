import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';
@Component({
  selector: 'app-read-item',
  templateUrl: './read-item.component.html',
  styleUrls: ['./read-item.component.css']
})
export class ReadItemComponent implements OnInit {

  ItemsID = []
  selectedValue: number 
  displayedColumns: string[] = ['Item ID', 'Name', 'Amount', 'Inventory Code'];
  dataSource : any = []
 

  constructor(public is : ItemsService) { }

  ngOnInit(): void {
    this.is.getAllItems().subscribe(
    (res:any) =>
      {
        this.ItemsID=res
      }
    )
  }

  submit(){
    this.dataSource=[]
      this.is.getItem(this.selectedValue).subscribe(
        (res:object)=>{this.dataSource.push(res)}
      )
  }

}
