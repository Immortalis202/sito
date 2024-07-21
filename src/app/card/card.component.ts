import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { flatMap } from 'rxjs';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  showCard:boolean = false

  showPassword: boolean = false;

  @Input()
  cardTitle: string = ""

  @Input()
  cardName: string = ""
  @Input()
  cardPassword: string = ""

  placeholder: string = "************";
 
  toggleShowCard(){
    this.showCard = !this.showCard
  }

  revealPassword(){
    this.showPassword = !this.showPassword
  }
}
