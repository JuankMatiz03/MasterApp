import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@core/services/authService.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  tasks: string[] = ["Dayli", "Planig", "review","Dayli", "Planig", "review"];
  newTask: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  addTask() {
    if (this.newTask.trim() !== '') {
      this.tasks.push(this.newTask);
      this.newTask = '';
    }
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }

  navigateToDetails(task: string) {
    this.router.navigateByUrl(`/details/${task}`);
  }

  closeSession() {
    this.authService.logout()
    this.router.navigate(['/login']);
  }
}

