import {IAppConfig} from "../interface/appConfig";
import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";

const LOCAL_STORAGE_USER_CONFIG_NAME: string = "user_config";

@Injectable(
  {
    providedIn: "root"
  })
export class ApplicationConfiguration {
  private static user_config: IAppConfig | null = null;

  private static load_user_config(): IAppConfig {
    let items: string | null = window.localStorage.getItem(LOCAL_STORAGE_USER_CONFIG_NAME);

    if (items) {
      if(environment.print_info) console.log("User settings have been loaded from local storage");
    } else {
      if(environment.print_info) console.log("Default user settings have been loaded");
    }

    this.user_config = items ? JSON.parse(items) as IAppConfig : environment.DEFAULT_USER_CONFIG;
    window.localStorage.setItem(LOCAL_STORAGE_USER_CONFIG_NAME, JSON.stringify(this.user_config));

    return this.user_config;
  }

  public get_user_config(): IAppConfig {
    return ApplicationConfiguration.user_config || ApplicationConfiguration.load_user_config();
  }
}
