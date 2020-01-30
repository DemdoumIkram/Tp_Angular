import { Component, OnInit } from '@angular/core';
import { Observable, interval, observable } from 'rxjs';



@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.scss']
})
export class Exercice1Component implements OnInit {

  obs2: Observable<number>;

  intervalData: Array<number> = [];

  date: Date;

  constructor() {
    this.obs2 = interval(1000);
    
   }

  ngOnInit() {
   
    update();
    
    this.obs2.subscribe(
      (value) => { 
         update();
      }
     
      
      );

    
function update(){
  var sec=document.getElementById('secondes');
  var min=document.getElementById('minutes');
  var heur=document.getElementById('heures');

  var date = new Date();

  var h = date.getHours();      
  var m = date.getMinutes();     
  var s= date.getSeconds();

  var sCircle = s/60*360;
  var mCircle = m/60*360+(s/60*(30/5));
  var hCircle = h/12*360+(m/60*30);

  min.style.webkitTransform = 'rotate('+mCircle+'deg)' ;
  sec.style.webkitTransform = 'rotate('+sCircle+'deg)' ;
  heur.style.webkitTransform = 'rotate('+hCircle+'deg)' ;
}
    
}
  
}

