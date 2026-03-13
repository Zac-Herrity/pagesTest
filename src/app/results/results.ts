import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { OmdbAPIService } from '../myServices/MovieAPIService';
import { RouterLink } from "@angular/router";


@Component({
  selector: 'app-results',
  imports: [RouterLink],
  templateUrl: './results.html',
  styleUrl: './results.css',
})
export class Results {
  MovieAPIService = inject(OmdbAPIService);
}
