import { Component, OnInit ,AfterViewInit } from '@angular/core';
import * as M from '../../../assets/materialize/js/materialize.min.js'
import { MoviesService } from '../../services/movies/movies.service';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.scss']
})
export class Exercice2Component implements OnInit  {


  data: any;
  hrefs = ['one', 'two', 'three', 'four', 'five'];

  constructor(private $ser: MoviesService) { }

  ngOnInit() {
    this.$ser.getData().subscribe(
      s => this.data = s.results,
      error => alert('error !!')
    );
    setTimeout(() => {
      let elems = document.querySelectorAll('.carousel');
      let instances = M.Carousel.init(elems,{numVisible:9 , dist:-25});
   }, 100);
  }




}



