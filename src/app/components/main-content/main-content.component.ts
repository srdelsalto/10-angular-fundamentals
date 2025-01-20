import { Component } from '@angular/core';
import { FeatureListComponent } from '../feature-list/feature-list.component';
import { SlideCardsContainerComponent } from "../slide-cards-container/slide-cards-container.component";

@Component({
  selector: 'app-main-content',
  imports: [FeatureListComponent, SlideCardsContainerComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
