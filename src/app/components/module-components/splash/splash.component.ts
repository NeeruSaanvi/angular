
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
declare var $ :any;  
@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss']
})
export class splashComponent  { 
  messageSuccess:any;
  constructor(public router: Router) { 
  }

  ngOnInit() { 
    
    setTimeout(()=>{      
        this.router.navigate(['app/home']);
     }, 3000);  
  } 
 
}
