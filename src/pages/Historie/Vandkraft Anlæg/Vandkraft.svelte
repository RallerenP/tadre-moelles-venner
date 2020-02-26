<script>
    import ImageBanner from "../../../components/ImageBanner/ImageBanner.svelte";
    import FrontPageBanner from '../../../images/FrontPageBanner.webp';
    import Article from "../../Article.svelte";
    import Page from "../../Page.svelte";
    import Divider from "../../../components/Divider.svelte";
    import Kramer from "../../../components/Kramer/Kramer.svelte";
    import vid1 from '../../../videos/MOV01647.mp4';
    import vid2 from '../../../videos/MOV01650.mp4';
    import VideoPlayer from "../../../components/Video/VideoPlayer.svelte";


    const source = `
## Vandkrafts Anlæg

**Tadre Mølle** har et lille vandkraftanlæg.

Det består af en turbine og 3 små vandmøllehjul - **overfaldshjul**, **brystfaldshjul** og **underfaldshjul**. Anlægget er placeret i møllerenden neden for det store møllehjul.

Turbinen er en JK Turbine, bygget af **Arne Johansen** i Glim ved Roskilde. Vandhjulene er bygget af møllebygger **Jens Jørgensen, Faxe**.

Grundidéen er at demonstrere udnyttelsen af vandkraft. Hensiget er undervisning of formidling.
`

</script>

<Page>
    <ImageBanner src={FrontPageBanner}>
        Trampestier
    </ImageBanner>

    <Article>
        <Kramer {source} />
        <VideoPlayer src={vid1} />
        <Divider />
        <VideoPlayer src={vid2} />
    </Article>

</Page>
