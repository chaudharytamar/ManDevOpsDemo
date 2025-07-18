import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularLifeCycleHooks';
  inputChangeMessage:string='';
  constructor()
  {
    console.log("Constructor called");
  }
  ngOnInit():void
  {
<<<<<<< HEAD
   console.log("ngOnInit called 2");
=======
   console.log("ngOnInit called");
    
>>>>>>> 5a49eeaccc363865a3566e8b380d2499d0ef714e
  }
}
