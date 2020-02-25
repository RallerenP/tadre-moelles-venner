<script>
    import DrawerMenuItem from "./DrawerMenuItem.svelte";
    import { fade } from 'svelte/transition';
    import { flip } from 'svelte/animate';
    export let item;

    let open = false;

    const handleToggle = () => {
        open = !open;
    }
</script>

<div transition:fade={{duration: 150}} class="h-16 flex border-primary" style={`width: calc(100% - ${item.depth * 48}px)`}>
    <a class="underline hover:text-gray-600 cursor-pointer pl-8 flex-left w-full text-xl" href={item.url}>{item.name}</a>
    {#if item.items.length !== 0}
        <div class="bg-white z-auto h-16 w-16 flex-shrink-0 flex-center text-2xl hover:bg-gray-100 cursor-pointer" on:click={handleToggle}>{open ? '-' : '+'}</div>
    {/if}
</div>
{#if open}
    {#each item.items as item}
        <DrawerMenuItem  {item} />
    {/each}
{/if}
