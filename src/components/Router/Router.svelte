<script>
    import router from 'page';
    import Home from '../../pages/Home.svelte';
    import routes from '../../data/routes';

    let page;
    let params;

    for (let route of routes) {
        router(route.name, () => {
            if (route.component) {
                page = route.component;
            }
        });
    }

    router.start();
</script>

<svelte:component this={page} />

