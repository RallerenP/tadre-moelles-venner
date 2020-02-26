<script>
    export let wide;
</script>

<div class:wide>
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