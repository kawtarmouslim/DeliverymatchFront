import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
private darkThemeClass = 'dark-theme';

  isDarkTheme(): boolean {
    return document.body.classList.contains(this.darkThemeClass);
  }

  setDarkTheme(isDark: boolean) {
    if (isDark) {
      document.body.classList.add(this.darkThemeClass);
    } else {
      document.body.classList.remove(this.darkThemeClass);
    }
  }
  constructor() { }
}
