import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AnnonceService} from "../annonce.service";
import {Annonce} from "../model/annonce.model";

@Component({
  selector: 'app-add-annonce-component',
  templateUrl: './add-annonce-component.component.html',
  styleUrls: ['./add-annonce-component.component.css']
})
export class AddAnnonceComponentComponent {
  annonce!: Annonce ;
  constructor(private annonceService: AnnonceService) {}

  onSubmit() {
    this.annonceService.publishAnnonce(this.annonce).subscribe({
      next: (res) => {
        console.log(' Annonce publiée :', res);
        this.annonce = res;
      },
      error: (err) => {
        console.error(' Erreur lors de la publication :', err);
      }
    });
  }


}
