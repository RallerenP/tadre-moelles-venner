<script>
    import kramed from 'kramed';

    export let source;

    let renderer = new kramed.Renderer();

    renderer.heading = (text, level) => {
        let escaped = text.toLowerCase().replace(/[^\w]+/g, '-');

        return `<h${level} class="text-5xl m-2" id="${escaped}">${text}</h${level}>`

    };
    renderer.paragraph = (text) => {
        return `<p class="m-2">${text}</p>`
    };

    let output = kramed(source, {renderer});
</script>

<div>
    {@html output}
</div>

<style>
    div {
    }
</style>