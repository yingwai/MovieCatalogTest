<template>
    <div class="catalog" v-if="search.getIsRespone === 'True'">
        <h2 v-if="search.getMovies">
            You searched for: {{ search.getViewValue }},
            {{ search.getTotalResults }} results found
        </h2>
        <h2 v-else>Enter your request</h2>

        <div class="catalog-list" v-if="search.getMovies">
            <Movie
                v-for="movie in search.getMovies"
                :key="movie.imdbID"
                :movie="movie"
            />
        </div>

        <Pagination
            v-if="search.getMovies"
            :totalResults="search.getTotalResults"
            v-model:currentPage="search.getCurrentPage"
            @update:currentPage="search.fChangeValueSearch"
        />
    </div>

    <div class="catalog" v-else-if="search.getErrorServer">
        <h2>{{ search.getErrorServer }}</h2>
    </div>

    <Loader v-else />
</template>

<script lang="ts">
import Movie from "./Movie.vue";
import Loader from "../../assets/Loader.vue";
import Pagination from "../../components/Pagination/Pagination.vue";
import { useSearchStore } from "../../stores/useSearchStore";

export default {
    components: {
        Movie,
        Loader,
        Pagination,
    },
    data() {
        return {
            search: useSearchStore(),
        };
    },
    async mounted() {
        try {
            await this.search.fChangeValueSearch();
        } catch (e) {
            throw new Error(e);
        }
    },
};
</script>

<style lang="scss" scoped>
.catalog {
    display: flex;
    flex-direction: column;
    gap: 50px;
}

.catalog-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 100px;

    @media (max-width: 1095px) {
        justify-content: space-around;
        gap: 50px;
    }

    @media (max-width: 620px) {
        /* gap: 200px; */
    }
}

.loader {
    margin: 0 auto;
}
</style>
