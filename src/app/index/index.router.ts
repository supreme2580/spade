import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexPage } from '../index/index.page';

const routes: Routes = [
    {
        path: '',
        component: IndexPage,
        children: [
            {
                path: '',
                loadChildren: () => import('../pages/welcome/welcome.module').then(m => m.WelcomePageModule)
            },
            {
                path: 'basicinfo',
                loadChildren: () => import('../pages/basicinfo/basicinfo.module').then(m => m.BasicinfoPageModule)
            }
        ]
    }];
@NgModule({
    imports: [RouterModule.forChild(routes)],
})
export class IndexRouter { }