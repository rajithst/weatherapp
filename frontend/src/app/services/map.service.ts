import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http'
import 'rxjs/add/operator/map';

@Injectable()
export class MapService {


  constructor(
    private http:Http
  ) { }


  callBackend(data){

    const headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3006/getlocations',data).map(res=>res.json());

  }

  callWeather(data){

    const headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3006/getweather',data).map(res=>res.json());




  }

}



