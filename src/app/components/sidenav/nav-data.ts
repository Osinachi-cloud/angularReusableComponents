import { INavbarData } from "./helper";

export const navbarData: INavbarData[] = [
    {
        routeLink: 'dashboard',
        icon: 'fal fa-home',
        label: 'Dashboard'
    },
    {
        routeLink: 'dispute',
        icon: 'fal fa-box-open',
        label: 'Initiate Dispute',
        // items: [
        //     {
        //         routeLink: 'products/level1.1',
        //         label: 'Level 1.1',
        //         items: [
        //             {
        //                 routeLink: 'products/level2.1',
        //                 label: 'Level 2.1',
        //             },
        //             {
        //                 routeLink: 'products/level2.2',
        //                 label: 'Level 2.2',
        //                 items: [
        //                     {
        //                         routeLink: 'products/level3.1',
        //                         label: 'Level 3.1'
        //                     },
        //                     {
        //                         routeLink: 'products/level3.2',
        //                         label: 'Level 3.2'
        //                     }
        //                 ]
        //             }
        //         ]
        //     },
        //     {
        //         routeLink: 'products/level1.2',
        //         label: 'Level 1.2',
        //     }
        // ]
    },
    {
        routeLink: 'openDisputes',
        icon: 'fal fa-chart-bar',
        label: 'openDisputes'
    },
    {
        routeLink: 'Route1',
        icon: 'fal fa-tags',
        label: 'Route1',
        // items: [
        //     {
        //         routeLink: 'coupens/list',
        //         label: 'List Coupens'
        //     },
        //     {
        //         routeLink: 'coupens/create',
        //         label: 'Create Coupens'
        //     }
        // ]
    },
    {
        routeLink: 'Route2',
        icon: 'fal fa-file',
        label: 'Route2'
    },
    {
        routeLink: 'Route3',
        icon: 'fal fa-camera',
        label: 'Route3'
    },
    {
        routeLink: 'Route4',
        icon: 'fal fa-cog',
        label: 'Route4',
        expanded: true,
        // items: [
        //     {
        //         routeLink: 'settings/profile',
        //         label: 'Profile'
        //     },
        //     {
        //         routeLink: 'settings/customize',
        //         label: 'Customize'
        //     }
        // ]
    },
];