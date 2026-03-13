import { Component, Input } from '@angular/core';
import { inject } from '@angular/core';
import { OmdbAPIService } from '../myServices/MovieAPIService';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-search',
  imports: [FormsModule],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search {
  OmdbAPIService = inject(OmdbAPIService);
  Title: string = '';

  onSearch() {
    this.OmdbAPIService.searchMovies(this.Title);
    this.OmdbAPIService.getMovies(this.Title, 1); //sets it at starting page 1
    this.Title = '';
    
  }

}
