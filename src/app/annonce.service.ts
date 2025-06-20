import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Annonce } from './model/annonce.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {
  private apiUrl = 'http://localhost:8081/api/v1/';

  constructor(private http: HttpClient) {}

  publishAnnonce(annonce: Annonce): Observable<Annonce> {
    return this.http.post<Annonce>(`${this.apiUrl}publier`, annonce);
  }

  searchAnnonces(destination: string, typeColis: string): Observable<Annonce[]> {
    let url = `${this.apiUrl}annonces`;
    if (destination || typeColis) {
      url += `?destination=${encodeURIComponent(destination)}&typeColis=${encodeURIComponent(typeColis)}`;
    }
    return this.http.get<Annonce[]>(url);
  }

  updateAnnonce(idAnnonce: number, annonce: Annonce): Observable<Annonce> {
    return this.http.put<Annonce>(`${this.apiUrl}annonce/${idAnnonce}`, annonce);
  }

  deleteAnnonce(idDelete: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}annonce/${idDelete}`);
  }
    getAnnonces(): Observable<Annonce[]> {
return this.http.get<Annonce[]>(`${this.apiUrl}anonces`);
  }
}
