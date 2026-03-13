import { inject, Injectable } from '@angular/core';
import { signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Inject } from '@angular/core';
import { take } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { MovieDetails } from '../models/moviedetails.interface';
import { SearchResults } from '../models/moviedetails.interface';
import { MovieResults } from '../models/moviedetails.interface';



@Injectable({
  providedIn: 'root',
})
export class OmdbAPIService {
  constructor(private _http: HttpClient) {} //
  private _baseUrl = 'https://www.omdbapi.com/';
  private _apiKey = 'b47bad77';
  public movie = signal<MovieDetails | null>(null);
  public movies = signal<MovieResults[]>([]); //this signal will hold the movie details returned from the API

  //Pagination stuff
  public totalResults = signal(0);
  public currentPage = signal(1);
  public maxPages = signal<number>(0);
  public searchInput = signal<string>(''); //this is what is going to be sent back to OMDB to fetch the next 10 movies

  searchMovies(title:string){
    this.searchInput.set(title); //above comment
    this.getMovies(title, 1);
  }


  getMovie(imdbID:string){
    const url = this._baseUrl + "?i=" + imdbID + "&apikey=" + this._apiKey;
    this._http.get<MovieDetails>(url).pipe(take(1))
    .subscribe(data => {
      this.movie.set(data);
    })
  }


  getMovies(title:string, currentPage: number =1){
    this.currentPage.set(currentPage) //defaults the oage number to start at 1
    const url = this._baseUrl + "?s=" + title + "&page=" + currentPage + "&apikey=" + this._apiKey; //added page info for pagination
    this._http.get<SearchResults>(url).pipe(take(1))
    .subscribe(data => {
      if (data.Response === 'False'){
        this.movies.set([]);
        this.maxPages.set(0);
        this.currentPage.set(1);
        return;
      }

      this.movies.set(data.Search);
      console.log(this.movies());

      const total = Number(data.totalResults ?? 0);
      const pages = Math.ceil(total / 10);
      this.maxPages.set(pages);
      this.currentPage.set(currentPage);
    })
  }

  //Pagination functions
  nextPage(){
    if (this.currentPage() < this.maxPages()){
      this.getMovies(this.searchInput(), this.currentPage() + 1)
    }
  }
  previousPage(){
    if (this.currentPage() > 1) {
      this.getMovies(this.searchInput(), this.currentPage() - 1);
    }
  }
}



