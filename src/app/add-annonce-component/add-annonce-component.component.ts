import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AnnonceService } from '../annonce.service';
import { Annonce } from '../model/annonce.model';
import { Router } from '@angular/router';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-add-annonce-component',
  templateUrl: './add-annonce-component.component.html',
  styleUrls: ['./add-annonce-component.component.css']
})
export class AddAnnonceComponentComponent {
  @Output() annonceAdded = new EventEmitter<Annonce>();
  @ViewChild('annonceForm') annonceForm!: NgForm;

  annonce: Annonce = {
    depart: '',
    etape: '',
    destination: '',
    capacite: 0,
    dimension: 0,
    typeColis: ''
  };

  constructor(
    private annonceService: AnnonceService,
    private router: Router
  ) {}

  onSubmit(): void {
    if (this.annonceForm.valid) {
      this.annonceService.publishAnnonce(this.annonce).subscribe({
        next: (res) => {
          console.log('Annonce publiée :', res);
          this.annonceAdded.emit(res); // Notify parent to update table
          this.resetForm();
          this.closeModal();
          this.router.navigate(['/annonce']); // Redirect to /annonce
        },
        error: (err) => {
          console.error('Erreur lors de la publication :', err);
        }
      });
    }
  }

  resetForm(): void {
    this.annonce = {
      depart: '',
      etape: '',
      destination: '',
      capacite: 0,
      dimension: 0,
      typeColis: ''
    };
    this.annonceForm.resetForm();
  }

  closeModal(): void {
    const modalElement = document.getElementById('addAnnonceModal');
    if (modalElement) {
      const modal = bootstrap.Modal.getInstance(modalElement);
      modal?.hide();
    }
  }
}
