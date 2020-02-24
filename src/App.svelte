<script>
    import ImageBanner from "./components/ImageBanner/ImageBanner.svelte";
    import FrontPageBanner from './images/FrontPageBanner.webp';
    import Drawer from "./components/Drawer.svelte";

    let name = "friend";
</script>

<ImageBanner src={FrontPageBanner}>
    Tadre Mølles Venner
</ImageBanner>

<Drawer />


