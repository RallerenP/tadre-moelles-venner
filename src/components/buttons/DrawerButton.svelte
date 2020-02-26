<script>
    import { open } from '../../stores/drawer';
    import CheveronLeft from 'heroicons-ui/icons/icon-cheveron-left.svg'
    import CheveronRight from 'heroicons-ui/icons/icon-cheveron-right.svg'

    const handleDrawerToggle = () => {
        open.update(open => !open);
    }
</script>

<button on:click={handleDrawerToggle}  class="touch-target z-20 flex justify-end items-center md:px-0 md:justify-center hover:bg-purple-800">
    <img src={$open ? CheveronLeft : CheveronRight} class="fill-current text-white" alt="">
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

    img {
        filter: invert(1);
        height: 32px;
    }
    
    @media (min-width: 768px)  {
        button {
            top: 25px;
            left: 25px;
        }

    }
</style>