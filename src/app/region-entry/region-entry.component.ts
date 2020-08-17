import { Component } from '@angular/core';
import { CountryService } from "../services/country.service";

import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-region-entry',
  templateUrl: './region-entry.component.html',
  styleUrls: ['./region-entry.component.scss']
})
export class RegionEntryComponent   {
 
  regionNames = [ { name : 'Europe' },  { name : 'Asia'}  ]

  showTable =false;
  showCountryDropdown =false;
  
  tableColumns: string[] = ['name','capital','population','currencies', 'flag'];

  countryData :any;
  countries:any;

  form = new FormGroup({
     regionNamesControl: new FormControl(),
     displayCountries: new FormControl()
  });
  constructor(private countryService: CountryService) { }

// OnSelect of region
   onSelect() {
    this.countryService.getRegionData(this.form.value.regionNamesControl.name)
    .subscribe(val => {
      this.countries =val;
      this.showCountryDropdown = true;
    });
    }
//onselecting country
    onCountrySelect(){
     this.countryService.getCountryData(this.form.value.regionNamesControl.name, this.form.value.displayCountries.name)
          .subscribe(val => {
            this.countryData =val;
            console.log("Details of country", ...this.countryData);
            this.showTable=true;
        });
    }
 
}
