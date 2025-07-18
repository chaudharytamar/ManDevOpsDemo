import { Component, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges {
@Input() childInputMessage:string='';
previousValue:string='';
cureentValue:string='';
ngOnChanges(changes: SimpleChanges)
{
  console.log("ngOnChanges called")
  //console.log(changes)
   const change: SimpleChange = changes['childInputMessage'];

    console.log("Previous Value: ", change.previousValue);
    console.log("Current Value: ", change.currentValue);
    console.log("Is First Change? ", change.firstChange);
    this.previousValue=change.previousValue
    this.cureentValue=change.currentValue
}

}
