<script>
    export let src;
</script>

<div class="flex-center w-full relative bg-center text-6xl font-bold text-white" style={`background-image: url(${src});`}>
    <slot />
</div>

<style>
    :global(.flex-center) {
        @apply flex;
        @apply items-center;
        @apply justify-center;
    }

    div {

        height: 300px;
    }
</style>