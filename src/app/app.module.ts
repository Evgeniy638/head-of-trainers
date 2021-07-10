import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ButtonComponent } from './button/button.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { TabsComponent } from './tabs/tabs.component';
import { MenuComponent } from './menu/menu.component';
import { FieldComponent } from './field/field.component';
import { FiltersComponent } from './filters/filters.component';
import { TextFieldComponent } from './text-field/text-field.component';
import { DropdownMenuComponent } from './dropdown-menu/dropdown-menu.component';
import { TableComponent } from './table/table.component';
import { MainComponent } from './main/main.component';
import { FilterSettingComponent } from './filter-setting/filter-setting.component';
import { CheckboxComponent } from './checkbox/checkbox.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    BreadcrumbsComponent,
    TabsComponent,
    MenuComponent,
    FieldComponent,
    FiltersComponent,
    TextFieldComponent,
    DropdownMenuComponent,
    TableComponent,
    MainComponent,
    FilterSettingComponent,
    CheckboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
