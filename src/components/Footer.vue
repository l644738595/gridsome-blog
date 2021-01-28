<template>
    <footer class="footer">
        <div class="container">
            <span v-html="footer" />
        </div>
    </footer>
</template>

<script>
export default {
    props: {
        footer: {
            type: String
        }
    }
}
</script>

<style scoped>
.footer {
    font-size: 0.8rem;
    padding: 6rem 0;
}
</style>
