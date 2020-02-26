<script>
    import ImageBanner from "../components/ImageBanner/ImageBanner.svelte";
    import FrontPageBanner from '../images/FrontPageBanner.webp';
    import Kramer from "../components/Kramer/Kramer.svelte";
    import Article from "./Article.svelte";
    import Card from "../components/Card.svelte";
    import Page from "./Page.svelte";


</script>

<Page>
    <ImageBanner src={FrontPageBanner}>
        Tadre Mølles Venner
    </ImageBanner>

    <Article wide>
        <div class="py-8">
            <div class="h-full w-full py-8 flex flex-col">
                <div>
                    <p class="text-4xl font-bold">Nyt fra Tadre Mølles Venner</p>
                    <p class="text-2xl mb-4 font-thin">Se det seneste nye fra Tadre Mølles Venner</p>
                    <Card src={FrontPageBanner} title="Ny Hjemmeside" />
                </div>
            </div>
            <div class="h-full w-full py-8 flex flex-col">
                <div>
                    <p class="text-4xl font-bold">Om Tadre Mølles Venner</p>
                    <p class="text-2xl mb-4 font-thin">Her finder du artikler der omhandler Tadre Mølle & TMV</p>
                    <Card src={FrontPageBanner} title="Ny Hjemmeside" />
                </div>
            </div>
        </div>

    </Article>
</Page>

<style>
    .content-container {

    }

    img {
        flex-basis: 0;
    }
</style>


