import { Component, OnInit } from '@angular/core';
import { Annonce } from '../model/annonce.model'; // Adjust path as needed
import { MatTableDataSource } from '@angular/material/table';
import { AnnonceService } from '../annonce.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css']
})
export class AnnonceComponent implements OnInit {
  anonces: Annonce[] = [];
  displayedColumns: string[] = [
    'idAnnonce',
    'depart',
    'etape',
    'destination',
    'capacite',
    'dimension',
    'typeColis',
    'conducteurId',
    'actions'
  ];
  dataSource = new MatTableDataSource<Annonce>();

  constructor(
    private anonceService: AnnonceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.anonceService.getAnnonces().subscribe(
      (res) => {
        this.anonces = res;
        this.dataSource.data = this.anonces;
      },
      (error) => {
        console.error('Erreur lors de la récupération des annonces', error);
      }
    );
  }




}
