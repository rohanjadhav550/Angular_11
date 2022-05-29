import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { enableProdMode } from "@angular/core";
import { ArithMaticModule } from "./app/app.module";
import { environment } from "./environments/environment.prod";

if(environment.production)
{
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(ArithMaticModule).catch(err=>{console.log(err)});