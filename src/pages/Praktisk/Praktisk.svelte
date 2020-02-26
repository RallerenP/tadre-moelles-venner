<script>
    import ImageBanner from "../../components/ImageBanner/ImageBanner.svelte";
    import FrontPageBanner from '../../images/FrontPageBanner.webp';
    import Article from "../Article.svelte";
    import Kramer from "../../components/Kramer/Kramer.svelte";

    const source = `
# Om arealet


Der er altid fri adgang til at færdes på møllens arealer. Det sker selvfølgelig på eget ansvar.
Hunde skal føres i snor og har ikke adgang til foldene. Børn skal være ledsagede af voksne i møllen og i foldene.
Pas på børnene ved vandet.


Toiletterne er aflåst i vinterhalvåret.


Benyttelse af lejrplades aftales med [ROMU](http://tadremølle.dk/). Der kan betales i cafèen.
`

</script>

<ImageBanner src={FrontPageBanner}>
    Tadre Mølles Venner
</ImageBanner>

<Article>
    <Kramer {source} />
</Article>
