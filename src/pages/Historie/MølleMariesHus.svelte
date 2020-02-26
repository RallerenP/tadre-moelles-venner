<script>
    import ImageBanner from "../../../components/ImageBanner/ImageBanner.svelte";
    import MølleMarieBanner from '../../../images/MølleMarieBanner.webp';
    import Article from "../../Article.svelte";
    import Page from "../../Page.svelte";
    import Divider from "../../../components/Divider.svelte";
    import Kramer from "../../../components/Kramer/Kramer.svelte";
    import MølleMarie from '../../../images/MølleMarieBog.webp';

    const source = `
### Mølle-Marie

Når **Tadre Mølle** i dag er bevaret, skyldes det alene dens sidste private ejer, den legendariske **Møllemarie**.

Det var hendes positive holdning til at lade ejendommen istandsætte og frede såvel efter bygningsfredningsloven som er naturbeskyttelsesloven,
der gjorde at Tadre Mølle blev udvalgt til bevaring af National Museet i 1950-erne.

På Møllen er hendes køkken bevaret som et minderum. Her levede hun en meget stor del af sit liv.

Læs mere om hende i bogen Mølle-Marie, som sælges på møllen.

Prisen for bogen er <code>50kr</code>.

<br />

![Billede af Omslag](${MølleMarie})
`

</script>

<Page>
    <ImageBanner src={MølleMarieBanner}>
        Marie Hansen - Møllemarie
    </ImageBanner>

    <Article>
        <Kramer {source} />
        <Divider />

    </Article>

</Page>
