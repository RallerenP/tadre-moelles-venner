<script>
    import kramed from 'kramed';

    export let source;

    let renderer = new kramed.Renderer();

    renderer.heading = (text, level) => {
        let escaped = text.toLowerCase().replace(/([Åå])/, 'aa').replace(/[^\w]+/g, '-');

        console.log(level);
        return `<h${level} class="text-${6 - level}xl m-2" id="${escaped}">${text}</h${level}>`

    };
    renderer.paragraph = (text) => {
        return `<p class="m-2">${text}</p>`
    };

    renderer.image = (href, title, text) => {
        return `<img src="${href}" class="article-image mx-auto" alt="${text}"/>`
    }

    renderer.link = (href, title, text) => {
        return `<a class="text-purple-600 hover:text-purple-500" href=${href}>${text}</a>`;
    }

    let output = kramed(source, {renderer});
</script>

<div>
    {@html output}
</div>

<style>
    div {
    }
</style>