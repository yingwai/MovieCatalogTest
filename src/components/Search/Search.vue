<template>
    <input type="search" id="search" v-model="search.value" @change="fChangeValue()" />
</template>

<script>
import { useSearchStore } from "../../stores/useSearchStore";

export default {
    data() {
        return {
            search: useSearchStore(),
        };
    },
    methods: {
        fChangeValue() {
            this.search.fChangePage(1);
        }
    }
};
</script>

<style lang="scss" scoped>
#search {
    flex: 1;
    width: 100%;
    max-width: 900px;
    height: 25px;
    padding: 0 5px;
}
</style>
