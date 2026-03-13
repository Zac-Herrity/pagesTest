export interface SearchResults{
    Search: MovieResults[];
    totalResults?: string;
    Response: string;
    Error?: string;
}

export interface MovieResults{
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}
export interface MovieDetails {
    imdbID?: string;
    Title?: string;
    Year?: string;
    Rated?:string;
    Runtime?:string;
    Genre?:string;
    Director?: string;
    Writer?:string;
    Actors?:string;
    Plot?:string;
    Poster?: string;
    Response: string;
    Error?: string;
}