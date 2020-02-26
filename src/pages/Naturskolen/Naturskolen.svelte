<script>
    import ImageBanner from "../../components/ImageBanner/ImageBanner.svelte";
    import FrontPageBanner from '../../images/FrontPageBanner.webp';
    import Article from "../Article.svelte";
    import Kramer from "../../components/Kramer/Kramer.svelte";
    import Page from "../Page.svelte";
    import Divider from "../../components/Divider.svelte";
    import TadreMap from "../../components/Map/TadreMap.svelte";

    const info = `
# Naturskolen

**Naturskolen** på **Tadre Mølle** blev startet af [Danmarks Naturfredningsforening (DN)](https://www.dn.dk/)
som en "containernaturskole", i Svinehuset på **Tadre Mølle**. Dette er senere istandsat under Naturstyrelsen
som en del af 'Grønt Partnerskabs' ordningen. Deltagerne var **DN Hvalsø**, **Egnhistorisk Forening Hvalsø (EHF)**
og **Tadre Mølles Venner (TMV)** samt **Roskilde Museum (ROMU)**.

Arbejdstimerne blev leveret af frivillig arbejdskraft, og lokalerne indviedes den **19. september 2010**.

Tadre Mølle har her fået et flot sted, der kan bruges af foreninger, skole og institutioner samt besøgende på
Møllen efter aftale.

Naturskolen indeholder ekskursions- og bestemmelsesudstyr.

Desværre er der *p.t* ikke noget fast naturvejleder til Tadre Mølle. Der arbejdes på sagen.

I åbningstiden er der adgang til lokalet, hvis ikke det bruges til andet.
`
</script>

<Page>
    <ImageBanner src={FrontPageBanner}>
        Naturskolen
    </ImageBanner>

    <Article>
        <Kramer source={info} />
        <Divider />
    </Article>

</Page>


