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
            },
            {
              path: 'bodybuild',
              loadChildren: () => import('../pages/bodybuild/bodybuild.module').then(m => m.BodybuildPageModule)
            },
            {
              path: 'relationshiptrait',
              loadChildren: () => import('../pages/relationshiptrait/relationshiptrait.module').then(m => m.RelationshiptraitPageModule)
            },
            {
              path: 'ethnicity',
              loadChildren: () => import('../pages/ethnicity/ethnicity.module').then(m => m.EthnicityPageModule)
            }
        ]
    }];
@NgModule({
    imports: [RouterModule.forChild(routes)],
})
export class IndexRouter { }