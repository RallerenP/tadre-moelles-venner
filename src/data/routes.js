import Home from '../pages/Home.svelte'
import Praktisk from '../pages/Praktisk/Praktisk.svelte';
import Naturskolen from '../pages/Naturskolen/Naturskolen.svelte'
import FasteArrangementer from '../pages/FasteArrangementer/FasteArrangementer.svelte';
import Historie from '../pages/Historie/Historie.svelte';
import Trampestier from '../pages/Historie/Trampestier/Trampestier.svelte';
import Vandkraft from '../pages/Historie/Vandkraft Anlæg/Vandkraft.svelte'
import MølleMarie from '../pages/Historie/MølleMarie/MølleMarie.svelte';

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
            },
            {
                name: '/praktisk#adresse',
                displayAs: 'Adresse',
            },
        ]
    },
    {
        name: '/naturskolen',
        displayAs: 'Naturskolen',
        component: Naturskolen
    },
    {
        name: '/faste-arrangementer',
        displayAs: 'Faste Arrangementer',
        component: FasteArrangementer
    },
    {
        name: '/historie',
        displayAs: 'Historie',
        component: Historie,
        children: [
            {
                name: '/historie/trampestierne',
                displayAs: 'Trampestierne',
                component: Trampestier
            },
            {
                name: '/historie/vandkraft',
                displayAs: 'Vandkrafts Anlæg',
                component: Vandkraft
            },
            {
                name: '/historie/moellemarie',
                displayAs: 'Marie Hansen - Møllemarie',
                component: MølleMarie
            }
        ]
    }
]