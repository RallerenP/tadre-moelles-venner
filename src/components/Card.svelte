<script>
    export let src;
    export let title;
    export let desc;
</script>

<div class="max-w-sm rounded overflow-hidden shadow-lg">
    <img {src} class="w-full" alt="">
    <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{title}</div>
    </div>
</div>
