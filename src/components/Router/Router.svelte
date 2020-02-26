<script>
    import router from 'page';
    import Home from '../../pages/Home.svelte';
    import routes from '../../data/routes';

    let page;
    let params;

    const setupRouteNode = (route) => {
        console.log(route.children);

        router(route.name, () => {

            if (route.component) {
                page = route.component;
            }

        });

        if (route.children) {
            for (let childRoute of route.children) {
                setupRouteNode(childRoute);
            }
        }
    }

    for (let route of routes) {
        setupRouteNode(route);
    }

    router.start();
</script>

<svelte:component this={page} />

