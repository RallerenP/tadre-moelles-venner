<script>
    import ImageBanner from "../../components/ImageBanner/ImageBanner.svelte";
    import FrontPageBanner from '../../images/FrontPageBanner.webp';
    import Article from "../Article.svelte";
    import Page from "../Page.svelte";
    import Divider from "../../components/Divider.svelte";
    import Wheel from '../../images/Årshjul.webp'
    import Kramer from "../../components/Kramer/Kramer.svelte";

    const source = `
## Tadre Mølles Venner

**TMV** blev oprettet i 1978, som en hjælp til møllen og til den daværende ejer **frk. Marie Hansen**.

Formålet var - og er forsat - at medvirke til møllens vedligeholdelse som nationalt kulturminde, samt i tæt samarbejde
med [Roskilde Museum](http://ROMU.dk) at deltage i formidlingen af møllegården gennem deltagelse i forskellige
offentlige arrangementer, så som **Dansk Mølledag**, **Kildemarked i Juni** og **Jul på Tadre Mølle** i december.

<br />

### Den selvejende instituation Tadre Mølle DSI-TM

**DSI-TM** Blev oprettet i den gamle **Hvalsø Kommune** i 1995 for at varetage vedligeholdelse og drift af ejendommen, samt
åbne mulighed for at møllen blev åben for publikum.

**DSI-TM** indgik et 30-årigt legemål med **Naturstyrelsen**

Kommunen indgik samtidig en samdriftsaftale med **Roskilde Kommune** om museumsdækning ved [Roskilde Museum](http://ROMU.dk).

I sommeren 1995 blev der ansat en museumsleder, som i samarbejde med frivillige fra **Tadre Mølles Venner** skulle prøve at
holde møllen åben i ferier, weekender og helligdage. Ved hjælp af frivillige fra møllevennerne og økonomisk hjælp fra **Hvalsø Kommune**,
blev møllen køreklar i løbet af et par år. **DSI-TM** udlejer stuehuset til **TMV** og de øvrige bygninger inklusive næromgivelserne til museet.

Landbrugsjorderne er bortforpagtede til vedvarende økologisk afgrænsning.

**DSI-TM** er ledet af en bestyrelse af 2 politikkere fra **Lejre Kommune** og 2 medlemmer af **TMV** samt en delt post mellem **DN** og **EHF Hvalsø**.


`

</script>

<Page>
    <ImageBanner src={FrontPageBanner}>
        Historie
    </ImageBanner>

    <Article>
        <Kramer {source} />
        <Divider />
    </Article>

</Page>
