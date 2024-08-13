<template>
    <div class="user">
        <UserSvg />
        <div class="name">{{ name }} ▼</div>
    </div>
</template>

<script>
import UserSvg from "../../assets/images/userSvg.vue";
export default {
    components: {
        UserSvg,
    },
    data() {
        return {
            name: "User",
        };
    },
};
</script>

<style lang="scss" scoped>
.user {
    display: flex;
    align-items: center;
    gap: 5px;
}
</style>
