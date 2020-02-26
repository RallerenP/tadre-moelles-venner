<script>
    export let wide;
</script>

<div class:wide class="m-8">
    <slot />
</div>

<style>

    .wide {
        max-width: 1300px;
    }

    div {
        @apply mx-auto;

        height: 100%;
        width: 85%;
        max-width: 1000px;


    }
</style>