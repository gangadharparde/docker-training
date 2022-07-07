import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'app-header',
   templateUrl: './header.component.html',
   styleUrls: ['./header.component.css'],
   // template: `
   //       <p> {{ title}} app is running... </p>
   //    ` ,
   // styles: ['h3:{ background-color : red;}', 'p{font-weight:bold}']
})

export class HeaderComponent implements OnInit {
   //title = 'HeaderComponent';
   constructor() {
      // Called first time before the ngOnInit()
   }

   ngOnInit() {
      // Called after the constructor and called  after the first ngOnChanges() 
   }
}
