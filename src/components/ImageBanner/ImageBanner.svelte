<script>
    export let src;
</script>

<div class="h-64 w-full flex-center bg-center text-3xl md:text-6xl font-bold text-white" style={`background-image: url(${src});`}>
    <div class="text-white flex-center relative p-4 rounded text-backdrop">
        <slot />
    </div>
</div>

<style>
    .text-backdrop {
        background-color: rgba(0,0,0,0.5);
    }

    .banner-container {
        height: 300px;

    }
</style>