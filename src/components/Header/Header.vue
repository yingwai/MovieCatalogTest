<template>
    <header class="container">
        <div class="header">
            <h1>Movie Catalog</h1>

            <Search />
            <User />
        </div>

        <Search class="mobile-search" />
    </header>
</template>

<script>
import Search from "../Search/Search.vue";
import User from "../User/User.vue";

export default {
    components: {
        Search,
        User,
    },
};
</script>

<style lang="scss" scoped>
header {
    min-height: 55px;
    height: 100%;
    margin-bottom: 30px;

    background-color: #badaed;
}

.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;

    #search {
        @media (max-width: 992px) {
            display: none;
        }
    }
}

.mobile-search {
    display: none;
    margin-bottom: 10px;

    @media (max-width: 992px) {
        display: inline-block;
    }
}

h1 {
    padding: 8px 0;
}
</style>
