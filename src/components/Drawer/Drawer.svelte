<script>
    import {createEventDispatcher} from 'svelte';
    import {fade} from 'svelte/transition';

    import {open} from '../../stores/drawer';
    import DrawerButton from "../buttons/DrawerButton.svelte";
    import MDContent from "./MDContent/MDContent.svelte";
    import DrawerMenu from "./DrawerMenu/DrawerMenu.svelte";

    const handleDrawerClose = () => {
        open.set(false)
    }
</script>

{#if $open}
    <div on:click={handleDrawerClose} transition:fade class="h-full w-full absolute top-0 left-0 bg-black opacity-25"></div>
{/if}

<div class:open={$open} class:border-r-2={$open} class="flex z-10 flex-col shadow-2xl drawer absolute h-full w-0 bg-white border-primary  ">
    <div class="spacer z-10 border-primary border-b-2 shadow">
    </div>
    <div class="flex-grow">
        <DrawerMenu />
    </div>
</div>

<DrawerButton />

<style>
    .spacer {
        height: calc(25px + 48px + 25px);
        width: 100%;

    }

    .drawer {
        top: 0;
        left: -2px;
        transition: width 200ms;
        overflow: hidden;
    }

    .open {
        width: 300px;
        max-width: 300px;
    }
</style>