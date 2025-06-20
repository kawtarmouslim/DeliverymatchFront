import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import Chart from 'chart.js/auto';
import { ChartConfiguration, TooltipItem } from 'chart.js';
import { DashboardService } from '../sercive/dashboard.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
    isDarkTheme = false;

  overviewCards = [
    { title: 'Utilisateurs Actifs', value: '1,245', trend: 12 },
    { title: 'Annonces Publiées', value: '342', trend: 8 },
    { title: 'Demandes En Attente', value: '89', trend: -5 },
    { title: 'Taux de Satisfaction', value: '92%', trend: 3 }
  ];

  usersDisplayedColumns: string[] = ['name', 'email', 'status', 'actions'];
  usersDataSource = new MatTableDataSource([
    { name: 'Jean Dupont', email: 'jean.dupont@example.com', status: 'Vérifié' },
    { name: 'Marie Claire', email: 'marie.claire@example.com', status: 'En attente' }
  ]);

  announcementsDisplayedColumns: string[] = ['driver', 'route', 'date', 'actions'];
  announcementsDataSource = new MatTableDataSource([
    { driver: 'Marie Claire', route: 'Paris → Lyon', date: '20/06/2025' },
    { driver: 'Pierre Martin', route: 'Marseille → Nice', date: '22/06/2025' }
  ]);

  constructor(private themeService: DashboardService) {
    this.isDarkTheme = this.themeService.isDarkTheme();
  }

  ngAfterViewInit() {
    const announcementsCtx = document.getElementById('announcementsChart') as HTMLCanvasElement;
    new Chart(announcementsCtx, {
      type: 'bar',
      data: {
        labels: ['Jan 2025', 'Fév 2025', 'Mar 2025', 'Avr 2025', 'Mai 2025', 'Juin 2025'],
        datasets: [{
          label: 'Annonces Publiées',
          data: [50, 75, 100, 90, 120, 110],
          backgroundColor: 'rgba(45, 212, 191, 0.6)',
          borderColor: 'rgba(45, 212, 191, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: { y: { beginAtZero: true }, x: { grid: { display: false } } },
        plugins: { legend: { display: false }, tooltip: { backgroundColor: 'rgba(45, 212, 191, 0.8)' } }
      }
    });

    const acceptanceCtx = document.getElementById('acceptanceChart') as HTMLCanvasElement;
    new Chart(acceptanceCtx, {
      type: 'pie',
      data: {
        labels: ['Acceptées', 'Refusées', 'En Attente'],
        datasets: [{ data: [65, 25, 10], backgroundColor: ['rgba(45, 212, 191, 0.6)', 'rgba(239, 68, 68, 0.6)', 'rgba(234, 179, 8, 0.6)'], borderColor: ['rgba(45, 212, 191, 1)', 'rgba(239, 68, 68, 1)', 'rgba(234, 179, 8, 1)'], borderWidth: 1 }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'bottom' },
          tooltip: { callbacks: { label: (context: TooltipItem<'pie'>) => `${context.label}: ${context.raw}%` } } // Updated type
        }
      }
    });
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    this.themeService.setDarkTheme(this.isDarkTheme);
  }

  editUser(user: any) { console.log('Edit user:', user); }
  suspendUser(user: any) { console.log('Suspend user:', user); }
  editAnnouncement(announcement: any) { console.log('Edit announcement:', announcement); }
  deleteAnnouncement(announcement: any) { console.log('Delete announcement:', announcement); }
  logout() { console.log('Logout'); }
}
