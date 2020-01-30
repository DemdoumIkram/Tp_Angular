import { Component, OnInit } from '@angular/core';
import * as M from '/home/ikram/Documents/M2/Mpdl/TP/TpAngular/src/assets/materialize/js/materialize.min.js'
import { MoviesService } from 'src/app/services/movies/movies.service';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.scss']
})
export class Exercice2Component implements OnInit {


  data: any;
  options : {};

  constructor(private $ser: MoviesService) { }

  ngOnInit() {
    this.$ser.getData().subscribe(
      s => this.data = s.results,
      error => alert('error !!')

    );
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, this.options);
    
  }



}