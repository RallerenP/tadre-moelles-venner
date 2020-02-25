<script>
    import DrawerMenuItem from "./DrawerMenuItem.svelte";
    export let item;
</script>

<div class="h-16 flex " style={`width: calc(100% - ${item.depth * 48}px)`}>
    <a class="underline hover:text-gray-600 cursor-pointer pl-8 flex-left w-full text-xl">{item.name}</a>
    {#if item.items.length !== 0}
        <div class="bg-white z-auto h-16 w-16 flex-shrink-0 flex-center text-2xl hover:bg-gray-100 cursor-pointer">+</div>
    {/if}
</div>
{#each item.items as item}
    <DrawerMenuItem {item} />
{/each}