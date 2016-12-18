// nativescript
import { NativeScriptModule, NativeScriptFormsModule, NativeScriptHttpModule, NativeScriptRouterModule, RouterExtensions as TNSRouterExtensions } from 'nativescript-angular';
// import { RouterExtensions as TNSRouterExtensions } from 'nativescript-angular/router';
import { Http } from '@angular/http';

// angular
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

// libs
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';

// app
import { WindowService, ConsoleService, RouterExtensions, AppService } from './app/frameworks/core/index';
import { AppComponent } from './app/components/app.component';
import { AboutComponent } from './app/components/about/about.component';
import { HomeComponent } from './app/components/home/home.component';
import { routes } from './app/components/app.routes';

// feature modules
import { CoreModule } from './app/frameworks/core/core.module';
import { AppReducer } from './app/frameworks/ngrx/index';
import { AnalyticsModule } from './app/frameworks/analytics/analytics.module';
import { MultilingualModule, translateFactory } from './app/frameworks/i18n/multilingual.module';
import { MultilingualEffects } from './app/frameworks/i18n/index';
import { SampleModule } from './app/frameworks/sample/sample.module';
import { NameListEffects } from './app/frameworks/sample/index';

// {N} custom app specific
import { WindowNative, NSAppService } from './shared/core/index';
import { NS_ANALYTICS_PROVIDERS } from './shared/nativescript/index';

// intermediate component module
// helps encapsulate custom native modules in with the components
// note: couple ways this could be done, just one option presented here...
@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptHttpModule,
    NativeScriptRouterModule,
    MultilingualModule.forRoot([{
      provide: TranslateLoader,
      deps: [Http],
      useFactory: (translateFactory)
    }]),
    SampleModule
  ],
  declarations: [
    HomeComponent,
    AboutComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptHttpModule,
    NativeScriptRouterModule,
    MultilingualModule,
    SampleModule
  ]
})
export class ComponentsModule { }

// For AoT compilation to work:
export function cons() {
  return console;
}
