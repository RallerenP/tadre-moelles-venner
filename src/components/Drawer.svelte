<script>
    import {createEventDispatcher} from 'svelte';
    import {fade} from 'svelte/transition';

    import {open} from '../stores/drawer';
    import DrawerButton from "./buttons/DrawerButton.svelte";

    const handleDrawerClose = () => {
        open.set(false)
    }
</script>

{#if $open}
    <div on:click={handleDrawerClose} transition:fade class="h-full w-full absolute top-0 left-0 bg-black opacity-25"></div>
{/if}

<div class:open={$open} class="flex shadow-2xl drawer absolute h-full w-0 box-border bg-white border-primary border-r-2 ">

</div>

<DrawerButton />

<style>
    .drawer {
        top: 0;
        left: -2px;
    }

    .open {
        width: 300px;
        max-width: 300px;
    }

    div {
        transition: width 200ms;
    }
</style>