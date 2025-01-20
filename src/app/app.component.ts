import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FeatureListComponent } from "./components/feature-list/feature-list.component";
import { FeatureElementComponent } from './components/feature-element/feature-element.component'; // Importa el componente hijo
import { MainContentComponent } from './components/main-content/main-content.component';
import { SlideCardsContainerComponent } from './components/slide-cards-container/slide-cards-container.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, MainContentComponent, SlideCardsContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
}
