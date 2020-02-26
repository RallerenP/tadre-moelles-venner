<script>
    import ImageBanner from "../../components/ImageBanner/ImageBanner.svelte";
    import FrontPageBanner from '../../images/FrontPageBanner.webp';
    import Article from "../Article.svelte";
    import Kramer from "../../components/Kramer/Kramer.svelte";
    import Page from "../Page.svelte";
    import Divider from "../../components/Divider.svelte";
    import TadreMap from "../../components/Map/TadreMap.svelte";


    const about_area = `
# Om arealet


Der er altid fri adgang til at færdes på møllens arealer. Det sker selvfølgelig på eget ansvar.
Hunde skal føres i snor og har ikke adgang til foldene. Børn skal være ledsagede af voksne i møllen og i foldene.
Pas på børnene ved vandet.


Toiletterne er aflåst i vinterhalvåret.


Benyttelse af lejrplades aftales med [ROMU](http://tadremølle.dk/). Der kan betales i cafèen.
`

    const working_hours = `
# Åbningstider

**13/4 - 17/4:** Påskeåbent fra kl. 11-16<br>
**1/5 - 30/6:** Lørdage, søn- og helligdage fra kl. 11-16<br>
**1/7 - 31/7:** Alle dage fra 11-16<br>
**1/8 - 30/9:** Lørdage og søndage fra kl. 11-16<br>
**14/10 - 22/10**: Alle dage fra kl. 11-16

## Entre

**Voksne:** 25kr <br>
**Grupper (*min. 15 personer*):** 15kr<br>
**Børn og unge (*under 18 år*):** Gratis
yarn`

    const directions = `
# Adresse

**Tadre Mølle** ligger i **Elverdamsdalen**, mellem Tølløse og Vester Såby, tæt ved den gamle *Roskile - Holbæk* landevej.

_**Adressen Er:**_<br>
Tadre Møllevej 23,<br>
4330 Hvalsø

`
</script>

<Page>
    <ImageBanner src={FrontPageBanner}>
        Tadre Mølles Venner
    </ImageBanner>

    <Article>
        <Kramer source={about_area} />
        <Divider />
        <Kramer source={working_hours} />
        <Divider />
        <Kramer source={directions} />
        <TadreMap />
        <Divider />
    </Article>

</Page>


