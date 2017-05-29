import { Component, OnInit } from '@angular/core';
import { MapService } from '../../services/map.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  longt: any;
  lati: any;
  res:any;
  weather:any;
  location:any;




  constructor(

    private maps:MapService

  ) { }

  ngOnInit() {


  }

  getData(){

    const first =  this.longt;
    const left = this.lati;
    const mydata = { lang:first, lati:left};

    this.maps.callBackend(mydata).subscribe(res=>{

      this.res = res.data.results;
      console.log(this.res)
    });


  }

  getWeather(e){

    const id = e.target.id;
    const arr = id.split(",");

    const data = { city:arr[0]};

    this.maps.callWeather(data).subscribe(res=>{
      console.log(res.weather)
      this.weather = res.weather.current;
      this.location = res.weather.location
    })


  }

}
