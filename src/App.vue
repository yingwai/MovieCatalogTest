<template>
    <Header />

    <body class="container">
        <Catalog />
    </body>
</template>

<script>
import Header from "./components/Header/Header.vue";
import Catalog from "./components/Catalog/Catalog.vue";

export default {
    components: {
        Header,
        Catalog,
    },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap");

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: "Inter", sans-serif;
}

body {
	min-width: 430px;
}

.container {
    padding: 0 80px;

    @media (max-width: 767px) {
        padding: 0 40px;
    }
}
</style>
