import Home from '../pages/Home.svelte'
import Praktisk from '../pages/Praktisk/Praktisk.svelte';

export default
[
    {
        name: '/',
        displayAs: 'Hjem',
        component: Home
    },
    {
        name: '/praktisk',
        displayAs: 'Praktisk Info.',
        component: Praktisk,
        hashes: [
            {
                name: '/praktisk#aabningstider',
                displayAs: 'Åbningstider',
            }
        ]
    },
    {
        name: '/andet',
        displayAs: 'Andet'
    }
]