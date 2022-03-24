import { Component } from "@angular/core";


@Component({
selector:'app-property-card',
templateUrl:'./property-card.component.html',
styleUrls:['./property-card.component.css']
})
export class propertyCardComponent
{
property:any={
  "id":1,
  "name":"Birla House",
  "type":"House",
  "Price":12000
}
}
