import { AdministrationComponent } from './administration/administration.component';
import { ParametrageComponent } from './parametrage/parametrage.component';
import { VisiteComponent } from './visite/visite.component';
import { InterlocuteurComponent } from './interlocuteur/interlocuteur.component';
import { ProjetComponent } from './projet/projet.component';
import { Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { UserComponent }   from './user/user.component';
import { TableComponent }   from './table/table.component';
import { TypographyComponent }   from './typography/typography.component';
import { IconsComponent }   from './icons/icons.component';
import { MapsComponent }   from './maps/maps.component';
import { NotificationsComponent }   from './notifications/notifications.component';
import { UpgradeComponent }   from './upgrade/upgrade.component';

export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
   
    {
        path: 'interlocuteur',
        component: InterlocuteurComponent
    },
   
    {
        path: 'administration',
        component: AdministrationComponent
        
    },
    {
        path: 'visite',
        component: VisiteComponent
    },
    
    {
        path: 'parametrage',
        component: ParametrageComponent
    },
    {
        path: 'projet',
        component: ProjetComponent
    },
    {
        path: 'user',
        component: UserComponent
    },
    {
        path: 'table',
        component: TableComponent
    },
    {
        path: 'typography',
        component: TypographyComponent
    },
    {
        path: 'icons',
        component: IconsComponent
    },
    {
        path: 'maps',
        component: MapsComponent
    },
    {
        path: 'notifications',
        component: NotificationsComponent
    },
    {
        path: 'upgrade',
        component: UpgradeComponent
    }
]
