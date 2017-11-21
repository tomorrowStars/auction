import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {

  @Input()
  rating: number = 0;
  @Input()
  readonly: boolean = true;
  @Output()
  ratingChange: EventEmitter<number> = new EventEmitter();

  stars: boolean[];
  
  constructor() { }

  ngOnInit() {
    this.stars = [];
    for(let i = 1; i <= 5; i++) {
      this.stars.push(i > this.rating)
    }
    // this.stars = [true,false,true,false,true];
  }

  clickStar(i: number) {
    if (!this.readonly) {
      this.rating = i + 1;
      this.ngOnInit();
      this.ratingChange.emit(this.rating);
    }
  }
}
