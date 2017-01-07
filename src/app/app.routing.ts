import { ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { AssetsComponent } from './assets/assets.component';
import { SingleassetComponent } from './singleasset/singleasset.component';
import { WatchComponent } from './watch/watch.component';
import { Assets } from './assets';
import { HomepageComponent } from './homepage/homepage.component';

const appRoutes: Routes = [

    {
        path:'',
        component: HomepageComponent
    },
    {
        path:'homepage',
        component: HomepageComponent
    },
    {
        path: 'search',
        component: SearchComponent
    },
    {
        path: 'singleasset',
        component: SingleassetComponent
    },
    {
        path: 'assets/:id',
        component: AssetsComponent
    },
    {
        path: 'watch/:id',
        component: WatchComponent
    },
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes); 