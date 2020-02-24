<script>
    import { open } from '../../stores/drawer';

    const handleDrawerToggle = () => {
        open.update(open => !open);
    }
</script>

<button on:click={handleDrawerToggle}  class="touch-target flex justify-end items-center px-3 md:px-0 md:justify-center hover:bg-purple-800">
    {$open ? '<' : '>'}
</button>

<style>
    button {
        @apply absolute;
        @apply rounded-full;

        @apply text-white;
        @apply text-2xl;
        @apply bg-purple-600;

        top: 25px;
        left: -20px;
    }
    
    @media (min-width: 768px)  {
        button {
            top: 25px;
            left: 25px;
        }

    }
</style>