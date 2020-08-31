import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../card';
import { CardService } from '../card.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input()
  cards: Card[];
  players: [];
  http: HttpClient
  selectedOption: string;

  constructor(private cardService: CardService, private playerService: PlayerService) { 
  }

  ngOnInit(): void {
    //console.log(this.selectedOption);
    /*this.cardService.getCards().subscribe(
      cards => {
        this.cards = cards;
        console.log(cards);
      },
      error => console.log(error)
    );*/
    
    this.playerService.getPlayers().subscribe(
      players => {
        this.players = players;
        console.log(players);
      }, 
      error => console.log(error)
      
    );
  }


  onOptionSelected(): void {
    console.log(this.selectedOption);
    this.cardService.getCardsByUser(this.selectedOption).subscribe(
      cards => {
        this.cards = cards;
        console.log(cards); 
      },
      error => console.log(error)
    );
  }
}
