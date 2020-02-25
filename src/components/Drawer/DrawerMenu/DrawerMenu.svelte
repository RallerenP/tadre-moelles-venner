<script>
    import {getDummyTree} from '../../../models/Tree/Tree';
    import DrawerMenuItem from "./MenuItem/DrawerMenuItem.svelte";

    let tree = getDummyTree();
</script>

<div class="h-full w-full content flex flex-col items-end justify-start">
    {#each tree.items as item}
        <DrawerMenuItem {item}/>
    {/each}
</div>

<style>
    .content {
        width: 300px;
    }
</style>