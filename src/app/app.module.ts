import {Injector, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {createCustomElement} from "@angular/elements";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [AppComponent]
})
export class AppModule {
  constructor(injector: Injector) {
    const el = createCustomElement(AppComponent, {injector});
    if (!customElements.get('micro-angular')) {
      customElements.define('micro-angular', el);
    }
  }
}
