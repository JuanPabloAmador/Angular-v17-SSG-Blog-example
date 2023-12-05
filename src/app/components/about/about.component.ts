import { Component } from '@angular/core';
import { HeaderData, HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  private uiData: HeaderData = {
    title: 'Sobre nosotros',
    subtitle: 'Estos somos nosotros!',
    thumbnail: 'https://placehold.co/600x400'
  }

  constructor(private headerService: HeaderService) {
    headerService.uiData.set(this.uiData)
  }

}
