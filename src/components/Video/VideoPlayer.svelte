<script>
    import Plyr from 'plyr';

    export let src;

    let ID = (length) => {
        if (!length) {
            length = 8
        }

        let str = ''
        for (let i = 1; i < length + 1; i = i + 8) {
            str += Math.random().toString(36).substr(2, 10)
        }
        return ('_' + str).substr(0, length)
    };

    const id = `player-${ID(8)}`;



    const player = new Plyr(`#${id}`);
</script>

<video {id} class="mx-auto" playsinline controls>
    <source {src} />
</video>


