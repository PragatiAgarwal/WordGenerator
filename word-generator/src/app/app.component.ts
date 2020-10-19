import { Component } from '@angular/core';
import arrayWords from '../utils/words';
import arrayCountry from '../utils/country';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'word-generator';

  words: string = '';
  limit: number = 10;
  country: string = '';
  

  handleSlideChange(newLimit: number){
    this.limit = newLimit;
  }

  generateWords(){
    this.words = arrayWords.slice(0, this.limit).join(' ');
  }
  generateRandomCountries(){
    this.country = '';
    for (let i = 0; i< this.limit; i++){
    this.country = this.country + ' ' + arrayCountry[Math.floor((Math.random() * arrayCountry.length) + 1)];
    }
  }
}
