<script>
    import ImageBanner from "../../../components/ImageBanner/ImageBanner.svelte";
    import FrontPageBanner from '../../../images/FrontPageBanner.webp';
    import Article from "../../Article.svelte";
    import Page from "../../Page.svelte";
    import Divider from "../../../components/Divider.svelte";
    import Wheel from '../../../images/Årshjul.webp'
    import Kramer from "../../../components/Kramer/Kramer.svelte";
    import TrampeStierBog from '../../../images/TrampeStierBog.webp';

    const source = `
## Trampestier

Omkring møllegårdens 12,5 hektarer arealer, forløber ca. 2 km trampestier.

Bogen Trampestier på Tadre behandler stedets natur og kultur grundigere. Den kan købes ved Tadre Mølle,
eller bestilles på mail ved [tadremoellesvenner@gmail.com](mailto:tadremoellesvenner@gmail.com).

Prisen er <code>50kr</code> plus porto


![Billede af Omslag](${TrampeStierBog})
`

</script>

<Page>
    <ImageBanner src={FrontPageBanner}>
        Trampestier
    </ImageBanner>

    <Article>
        <Kramer {source} />
    </Article>

</Page>
