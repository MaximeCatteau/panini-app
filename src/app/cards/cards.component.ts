import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../card';
import { CardService } from '../card.service';
import { HttpClient } from '@angular/common/http';
import { PlayerService } from '../player.service';
import { CollectionsService } from '../collections.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input()
  cards: Card[];
  allCards: Card[];
  players: [];
  collections: [];
  http: HttpClient
  selectedPlayer: string;
  selectedCollection: string;

  constructor(
    private cardService: CardService, 
    private playerService: PlayerService, 
    private collectionService: CollectionsService) { 
  }

  ngOnInit(): void {
    
    this.playerService.getPlayers().subscribe(
      players => {
        this.players = players;
        console.log(players);
      }, 
      error => console.log(error)
    );

    this.collectionService.getCollections().subscribe(
      collections => {
        this.collections = collections;
        console.log(collections);
      },
      error => console.log(error)
      
    );

    this.cardService.getCards().subscribe(
      cards => {
        this.allCards = cards;
      }, 
      error => console.log(error)
    );
  }


  onPlayerSelected(): void {
    if(!this.selectedCollection){
      this.selectedCollection = "1";
    }

    let collectionSize = 0;
    let firstIndex = 0;
    let lastIndex = 0;

    this.collectionService.getCollectionSize(this.selectedCollection).subscribe(
      size => {
        collectionSize = size;
        console.log(collectionSize);
      },
      error => console.log(error)
    );

    this.collectionService.getFirstIndexOfCollection(this.selectedCollection).subscribe(
      first => {
        firstIndex = first;
      },
      error => console.log(error)
    );

    this.collectionService.getLastIndexOfCollection(this.selectedCollection).subscribe(
      last => {
        lastIndex = last;
      },
      error => console.log(error)
    );

    this.cardService.getCardsByUserByCollection(this.selectedPlayer, this.selectedCollection).subscribe(
      cards => {
        this.cards = cards;
        let newCards = [];
        var it = 0;

        for (let i = firstIndex; i <= lastIndex; i++) {
          let hasCard = cards.find(card => card.id == i);
          //console.log(hasCard);
          
          if(hasCard){
            //newCards.push(this.allCards[i-1]);
            newCards.push(hasCard);
          } else if(!hasCard){
            newCards.push({'id': i, 'name': "", 'src': null});
          }
          it++;
        }
        this.cards = newCards;
        console.log(this.cards);
        
      },
      error => console.log(error)      
    );

  }

  onCollectionSelected(): void {
    console.log(this.selectedCollection);
    if(!this.selectedPlayer){
      this.selectedPlayer = "689491646043521033";
    }

    let collectionSize = 0;
    let firstIndex = 0;
    let lastIndex = 0;

    this.collectionService.getCollectionSize(this.selectedCollection).subscribe(
      size => {
        collectionSize = size;
        console.log(collectionSize);
      },
      error => console.log(error)
    );

    this.collectionService.getFirstIndexOfCollection(this.selectedCollection).subscribe(
      first => {
        firstIndex = first;
      },
      error => console.log(error)
    );

    this.collectionService.getLastIndexOfCollection(this.selectedCollection).subscribe(
      last => {
        lastIndex = last;
      },
      error => console.log(error)
    );
    
    this.cardService.getCardsByUserByCollection(this.selectedPlayer, this.selectedCollection).subscribe(
      cards => {
        this.cards = cards;
        let newCards = [];
        var it = 0;

        for (let i = firstIndex; i <= lastIndex; i++) {
          let hasCard = cards.find(card => card.id == i);
          //console.log(hasCard);
          
          if(hasCard){
            newCards.push(hasCard);
          } else if(!hasCard){
            newCards.push({'id': i, 'name': "", 'src': null});
          }
          it++;
        }

        console.log(newCards);
        this.cards = newCards;
        
      },
      error => console.log(error)      
    );    
  }

}
