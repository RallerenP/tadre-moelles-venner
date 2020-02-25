<script>
    import { getNavTree } from '../../../models/Tree/Tree';
    import DrawerMenuItem from "./MenuItem/DrawerMenuItem.svelte";
    import { flip } from 'svelte/animate';

    let tree = getNavTree();
</script>

<div class="h-full w-full content flex flex-col items-end justify-start">
    {#each tree.items as item, index (item)}
        <DrawerMenuItem  {item}/>
    {/each}
</div>

<style>
    .content {
        width: 300px;
    }
</style>