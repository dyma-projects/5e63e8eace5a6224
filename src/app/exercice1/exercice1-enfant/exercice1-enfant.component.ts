import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css'],
})
export class Exercice1EnfantComponent implements OnInit {
  @Input() public result:number;
  @Output() changementCompteur = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  buttonMore() {
    this.result++;
    this.changementCompteur.emit({
      value: this.result,
    });
  }

  buttonLess() {
    this.result--;
    this.changementCompteur.emit({
      value: this.result,
    });
  }
}
