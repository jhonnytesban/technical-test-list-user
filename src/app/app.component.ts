import { Component } from '@angular/core';
import { TranslationAppService } from './services/translation-app.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  constructor(private translationAppService: TranslationAppService) {
    this.translationAppService.init();
  }
}
