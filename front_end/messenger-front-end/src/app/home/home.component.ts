import { Component, OnInit } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs/Observable';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  reaction_data = [{'person': 'Stephen Murray', 'message': 'Here lads I wanked on the job todayð\x9f\x98\x82 Iâ\x80\x99m in a bike shop on my own and I just got mad horny so I pulled the shutter and burped the walrus', 'amount': 12}, {'person': 'Luke Stafford', 'message': 'A local worker at dunnes Tristan Ahern had this to say - "I\'m not talking to the pigs but If u want a gun I\'ll have it to you in two phone calls and a text"', 'amount': 10}, {'person': 'Adam Murphy', 'message': 'Thatâ\x80\x99s why staff wants to go', 'amount': 10}, {'person': 'Jack Stevens', 'message': 'Doesnâ\x80\x99t know whether or not to call his own bluff', 'amount': 10}, {'person': 'Niall Mac Mahon', 'message': 'So stream tonight my dudes', 'amount': 10}, {'person': 'Niall Mac Mahon', 'message': 'Nah Tristan you need to get back to Ireland quick, Rustlers sales have plummeted and theyâ\x80\x99re talking about having to go into liquidation', 'amount': 10}, {'person': 'Stephen Dunne', 'message': 'No wonder rebbeca left you hahahaha', 'amount': 10}, {'person': 'Eamon Byrne', 'message': 'Just for reference put a thumb in the chat if we went to the dog house for dimner for my birthday on the 13th of sept ?', 'amount': 9}, {'person': 'Tristan Ahern', 'message': "@Niall Mac Mahon you should of come to me about this sooner, but I think we still have a shot at beating the case, but I'm gonna need you to get the tears going in court and say the clicky tried to feel you up", 'amount': 8}, {'person': 'Jack Stevens', 'message': 'Astro tonight? ð\x9f\x91\x80', 'amount': 8}, {'person': 'Jack Stevens', 'message': 'Right lads, Friday week the 20th Sept I have Doyleâ\x80\x99s booked for my 21st', 'amount': 8}, {'person': 'Luke Stafford', 'message': 'Right so after buying mushrooms on a nudist beach from a naked man named cloud. Me and Tristan headed back to the apartment knowing we had 7grams of fungi funky food that we were going to indulge in at a later date. A few days pass and Luke decides to whack down a few shrooms  after work while drinking with the lads. Luke cant help but notice poor bald alliwawasita in the corner, this man could do with some mushrooms I says to myself as I feed him the rest of the bag , about fourty minutes then pass and alaster retires to our bedroom for a nap. Then two hours of deep meaningful conversation between Ben luke and t unfold.\nNow this can be the part of the story we can screenshot and put on stories and stuff. So I go into get my wallet and ask alliwa if hes up, he goes where am I what day is it, I turn on the light and the cunt looks at me with a pair of drenched denim shorts and a soaked mattress and goes "I think I shat myself" I was like for fuck sake and he goes " are we inside or outside" . I was like what is going on and then the bald prick goes "HELP". I\'m still slightly tripping balls being like what the fuck is going on. He then reaches underneath and pulls out my drenched new phone and goes I think I broke it, I swear to God I\'ll fucking murder this cunt . Fuck this Vancouver I\'m out of here.', 'amount': 8}, {'person': "Cian O'Reilly", 'message': 'Game of cards tonight if we get a venue?', 'amount': 8}, {'person': 'Alastar Cassidy', 'message': 'And react to this message if you are coming just want to know', 'amount': 8}, {'person': 'Luke Stafford', 'message': 'Wonâ\x80\x99t be getting that Barnet fixed on Friday though will you', 'amount': 8}, {'person': 'Adam Murphy', 'message': 'Whoes going ep', 'amount': 7}, {'person': 'Maciek Cieslak', 'message': '@Niall Mac Mahon see you in 8 days xx', 'amount': 7}, {'person': 'CiarÃ¡n Mackey', 'message': 'Did your mam pack them luke skywalker', 'amount': 7}, {'person': 'Eamon Byrne', 'message': 'Its a like a aldi version of parry and jess', 'amount': 7}, {'person': 'Eamon Byrne', 'message': 'Whats up sexies having a going away party this sunday im the bayside inn i know its real late notice but the cunts in the army wouldnt give me dates for flying out, give a ð\x9f\x91\x8d if you can make it as im gonna have food and numbers hope to see all you  sexy faces', 'amount': 7}, {'person': 'Luke Stafford', 'message': "Oh yeah squadron, I'm back until Wednesday so do folks fancy a pint tomorrow night, I know nialls is next weekend and all but I wont be there so I wanna get drunk with all yall too.", 'amount': 7}, {'person': 'Ben McGovern', 'message': 'Hahahah no Niall remember you pulled him', 'amount': 7}, {'person': 'Jack Stevens', 'message': 'Iâ\x80\x99d be up for it', 'amount': 7}, {'person': 'Luke Stafford', 'message': 'Anyone wanna play ball this week before I float back to eat croissants and be a bellend', 'amount': 7}, {'person': 'Alastar Cassidy', 'message': 'Enjoy EP lads remember if someone doing something stupid film it and send it to me please', 'amount': 6}, {'person': 'Sean Boland', 'message': 'Strange enough thing to.  Come across on fb in the morning', 'amount': 6}, {'person': 'Adam Murphy', 'message': 'Love the tennis do u', 'amount': 6}, {'person': 'Sean Parry', 'message': "I've got one I can bring it", 'amount': 6}, {'person': 'Luke Stafford', 'message': 'Or astro later', 'amount': 6}, {'person': 'Niall Mac Mahon', 'message': 'Olivia changed her shampoo actually anyone smelled her recently? Just wondering why she stopped with the coconut loreal', 'amount': 6}, {'person': 'Tristan Ahern', 'message': "Old school sesh in mine later (the lads, beers and PlayStation) if anyone's around", 'amount': 6}, {'person': 'Luke Stafford', 'message': 'Fat birds and food', 'amount': 6}, {'person': 'Tristan Ahern', 'message': "Don't worry I just have to sort a few more cunts out in Edinburgh, and go see my future wife in the underground tunnels, ill be home tomorrow night", 'amount': 6}, {'person': 'Jack Stevens', 'message': 'Lads, sesh in Aliwaâ\x80\x99s on Thursday, thumbs up if you would go', 'amount': 6}, {'person': 'Ben McGovern', 'message': 'heard youre the laughing stock of barrog and your missus just joined onlyfans', 'amount': 6}, {'person': 'Stephen Murray', 'message': 'What date is Paddyâ\x80\x99s Day Adz? Obviously ð\x9f\x98\x82', 'amount': 6}, {'person': 'Peter Comiskey', 'message': 'Tristan is a soft cunt', 'amount': 6}, {'person': 'CiarÃ¡n Mackey', 'message': 'Howdy boys ð\x9f\x98\x8d Iâ\x80\x99m going on a volunteer programme to Tanzania on the 22nd of may till the 7th of June to teach English and build a school to help developed the country. \n\nAny chance yous could do me a solid (if yous want to)and donate some spare cash.. need to raise  â\x82¬1000 for the charity foot2africa. \n\nIâ\x80\x99m setting up a gofundme to make it easier for everyone to donate.\n\nIf yous are willing give me a ð\x9f\x91\x8dð\x9f\x8f» and Iâ\x80\x99ll right the name down! \n\nI would be greatly appreciatedð\x9f\x92\x96 I might catch aids but Iâ\x80\x99ll have fun doing it ð\x9f\x98\x88', 'amount': 6}, {'person': 'Adam Murphy', 'message': 'But Astro tonight ?', 'amount': 6}, {'person': 'Stephen Murphy', 'message': 'The most Chris thing Iâ\x80\x99ve ever seen', 'amount': 6}]
  message_example = this.reaction_data[0]
  displayedColumns: string[] = ['position', 'name', 'amount'];
  message_per_person = null
  reactions_per_person = null

  constructor(private http: HttpClient) { 
    this.getJSON().subscribe(data => {
      console.log("Loading data..");

      this.message_per_person = data.messages_per_person
    });
  }

  public getJSON(): Observable<any> {
    return this.http.get("./assets/results.json");
}

  ngOnInit() { } 

}
