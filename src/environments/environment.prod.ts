import {EPageThemeMode} from "../app/interface/pageColorMode";
import {EnvironmentConfig} from "./config";

export const environment: EnvironmentConfig = {
  production: true,
  print_info: false,
  DEFAULT_USER_CONFIG: {
    default_color_mode: EPageThemeMode.AUTOMATIC
  }
};
