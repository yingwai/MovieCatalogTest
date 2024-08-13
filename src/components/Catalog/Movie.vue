<template>
    <div class="movie">
        <img
            :src="movie.Poster"
            alt="img-moive"
            v-if="movie.Poster !== 'N/A'"
        />
        <img src="../../assets/images/movie.png" alt="img-moive" v-else />
        <p>Name: {{ movie.Title }}</p>
        <p>Year: {{ movie.Year }}</p>
        <p>imdbID: {{ movie.imdbID }}</p>
        <p>Type: {{ movie.Type }}</p>
    </div>
</template>

<script lang="ts">
import { Prop } from "vue";
import { MovieType } from "../../api/catalog";

export default {
    props: {
        movie: Object as Prop<MovieType>,
    },
};
</script>

<style lang="scss" scoped>
.movie {
    width: 245px;

    background-color: #fff;

    display: flex;
    flex-direction: column;

    img {
        width: 100%;
        max-height: 360px;
        object-fit: contain;
        flex: 1;
    }

    p {
        margin-top: 5px;
        padding-left: 20px;
    }

    @media (max-width: 620px) {
        width: 368px;
        font-size: 22px;

        img {
            max-height: 540px;
        }
    }
}
</style>
