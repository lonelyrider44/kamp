import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { NotFoundComponent } from 'app/components/not-found/not-found.component';
import { AuthGuard } from 'app/guards/auth.guard';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    {
        path: '',
        children: [{
            path: 'kamp',
            loadChildren: () => import('../../modules/kamp/kamp.module').then(m => m.KampModule)
        }],
        
    },
    {
        path: '',
        children: [{
            path: 'smena',
            loadChildren: () => import('../../modules/smena/smena.module').then(m => m.SmenaModule)
        }],
    },
    {
        path: '',
        children: [{
            path: 'hotel',
            loadChildren: () => import('../../modules/hotel/hotel.module').then(m => m.HotelModule)
        }],
    },
    {
        path: '',
        children: [{
            path: 'izvestaj',
            loadChildren: () => import('../../modules/izvestaj/izvestaj.module').then(m => m.IzvestajModule)
        }],
    },
    {
        path: '',
        children: [{
            path: 'korisnik',
            loadChildren: () => import('../../modules/korisnik/korisnik.module').then(m => m.KorisnikModule)
        }],
    },
    {
        path: '',
        children: [{
            path: 'oprema',
            loadChildren: () => import('../../modules/oprema/oprema.module').then(m => m.OpremaModule)
        }],
    },
    {
        path: '',
        children: [{
            path: 'prevoz',
            loadChildren: () => import('../../modules/prevoz/prevoz.module').then(m => m.PrevozModule)
        }],
    },
    {
        path: '',
        children: [{
            path: 'ucesnik',
            loadChildren: () => import('../../modules/ucesnik/ucesnik.module').then(m => m.UcesnikModule)
        }],
    },
    {
        path: '',
        children: [{
            path: 'uplata',
            loadChildren: () => import('../../modules/uplata/uplata.module').then(m => m.UplataModule)
        }],
    },
    {
        path: '',
        children: [{
            path: 'zahtev',
            loadChildren: () => import('../../modules/zahtev/zahtev.module').then(m => m.ZahtevModule)
        }],
    },
    { path: '**',             component: NotFoundComponent }
];
