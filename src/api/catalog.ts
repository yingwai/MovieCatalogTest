import axios from "axios";

export type ResponeServer = {
    Response: isRespone;
    Search: MovieType[];
    totalResults: string;
    Error: string
};

export type isRespone = "True" | "False";

export type MovieType = {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
};

export const catalogAPI = {
    getCatalog(value: string, page: number) {
        return axios.get<ResponeServer>("https://www.omdbapi.com/?i=tt3896198&apikey=8523cbb8&s=" + value + "&page=" + page);
    },
}