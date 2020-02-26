<script>
    import ImageBanner from "../../components/ImageBanner/ImageBanner.svelte";
    import FrontPageBanner from '../../images/FrontPageBanner.webp';
    import Article from "../Article.svelte";
    import Page from "../Page.svelte";
    import Divider from "../../components/Divider.svelte";
    import Wheel from '../../images/Årshjul.webp'

</script>

<Page>
    <ImageBanner src={FrontPageBanner}>
        Tadre Mølles Venner
    </ImageBanner>

    <Article>
        <img src={Wheel} alt="">
        <Divider />
    </Article>

</Page>


