import {Component, OnInit} from '@angular/core';
import {ApplicationConfiguration} from "./scripts/applicationConfiguration";
import {EPageThemeMode} from "./interface/pageColorMode";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  public themeToggle = false;

  constructor(public config: ApplicationConfiguration) {

  }

  ngOnInit() {
    const prefersDark: MediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');

    this.initializeDarkTheme(prefersDark.matches);

    prefersDark.addEventListener('change', (mediaQuery: MediaQueryListEvent) => this.initializeDarkTheme(mediaQuery.matches));
  }

  public initializeDarkTheme(isDark: any) {
    if(this.config.get_user_config().default_color_mode === EPageThemeMode.AUTOMATIC) {
      this.themeToggle = isDark;
      this.toggleDarkTheme(isDark);
    }
  }

  public toggleChange(ev: any) {
    this.toggleDarkTheme(ev.detail.checked);
  }

  toggleDarkTheme(shouldAdd: any) {
    document.body.classList.toggle('dark', shouldAdd);
  }
}
