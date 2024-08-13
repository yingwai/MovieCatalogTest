import { catalogAPI, type isRespone, type MovieType } from '@/api/catalog';
import axios from 'axios';
import { defineStore } from 'pinia';

// Определите новый store
export const useSearchStore = defineStore('search', {
    state: () => ({
        value: "batman",
        page: 1,
        isResponse: "False" as isRespone,
        movies: [] as MovieType[],
        totalResults: "0",
        errorServer: "",
        viewValue: ""
    }),
    actions: {
        async fChangeValueSearch() {
            this.isResponse = "False"
            this.errorServer = ""

            try {
                const res = await catalogAPI.getCatalog(this.value, this.page)

                this.isResponse = res.data.Response
                this.movies = res.data.Search
                this.totalResults = res.data.totalResults
                this.errorServer = res.data?.Error
                this.viewValue = this.value
            } catch (e) {
                throw new Error(e as string);
            }
        },
        fChangePage(page: number) {
            this.page = page;
            this.fChangeValueSearch();
        }
    },
    getters: {
        getCurrentValue(): typeof this.value {
            return this.value
        },
        getCurrentPage(): typeof this.page {
            return this.page
        },
        getIsRespone(): typeof this.isResponse {
            return this.isResponse
        },
        getMovies(): typeof this.movies {
            return this.movies
        },
        getTotalResults(): typeof this.totalResults {
            return this.totalResults
        },
        getErrorServer(): typeof this.errorServer {
            return this.errorServer
        },
        getViewValue(): typeof this.viewValue {
            return this.viewValue
        },
    }
});
