import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

const baseURL = 'https://restcountries.eu/rest/v2/region/';
@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor( private httpClient: HttpClient ) { }
    
    getRegionData (regionName: string){
      console.log("Entering Service");
      return this.httpClient.get (baseURL + regionName)
        .pipe(map((res:any)=> {
              return res.map(data=> {  
                 return {
                   'name' : data.name
                 }
            })
          }))          
    }//getRegionData

    getCountryData(regionName:string, countryName:string){
      return this.httpClient.get (baseURL + regionName)
        .pipe(map((res:any)=> {
          return res.filter(data=> data.name == countryName)    
        })) //pipe          
    }
         
    }//CountryService
  
