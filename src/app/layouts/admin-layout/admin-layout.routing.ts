import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { AdminDashboardComponent } from 'src/app/pages/admin/admin-dashboard/admin-dashboard.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'admin-dashboard',      component: AdminDashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },

];
