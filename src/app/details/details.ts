import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { OmdbAPIService } from '../myServices/MovieAPIService';
import { input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details {
  OmdbAPIService = inject(OmdbAPIService);
  router = inject(Router);

  protected id = input.required<string>();

  ngOnInit(){
    let movieID=this.id();
    this.OmdbAPIService.getMovie(movieID);
  }
  goHome() {
    this.router.navigate(['/']);
  }
}


