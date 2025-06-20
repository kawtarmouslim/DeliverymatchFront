export interface Annonce {
  idAnnonce?: number;
  depart: string;
  etape?: string;
  destination: string;
  capacite: number;
  dimension: number;
  typeColis: string;
  conducteurId?: number;
}
