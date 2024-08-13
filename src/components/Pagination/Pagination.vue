<template>
    <div class="pagination">
        <button
            @click="search.fChangePage(currentPage - 1)"
            :disabled="currentPage === 1"
        >
            &lt;
        </button>

        <button
            v-for="page in pagesToDisplay"
            :key="page"
            :disabled="currentPage === page"
            @click="search.fChangePage(page)"
        >
            {{ page }}
        </button>

        <button
            @click="search.fChangePage(currentPage + 1)"
            :disabled="currentPage === totalPages"
        >
            &gt;
        </button>
    </div>
</template>

<script>
import { useSearchStore } from "../../stores/useSearchStore";
export default {
    data() {
        return {
            search: useSearchStore(),
        };
    },
    props: {
        totalResults: String,
        currentPage: Number,
    },
    computed: {
        totalPages() {
            return Math.ceil(Number(this.totalResults) / 10);
        },
        pagesToDisplay() {
            const pages = [];
            const maxVisiblePages = 10;
            let startPage = 1;

            if (this.currentPage >= 7) {
                startPage = this.currentPage - 5;
            }

            let endPage = startPage + maxVisiblePages - 1;

            if (endPage > this.totalPages) {
                endPage = this.totalPages;
                startPage = Math.max(this.totalPages - maxVisiblePages + 1, 1);
            }

            for (let i = startPage; i <= endPage; i++) {
                pages.push(i);
            }

            return pages;
        },
    },
};
</script>

<style lang="scss" scoped>
.pagination {
    margin: 50px 0;
    align-self: center;

    display: flex;
    gap: 5px;

    button {
        background: transparent;
        border: none;

        font-size: 20px;

        cursor: pointer;
    }
}
</style>
