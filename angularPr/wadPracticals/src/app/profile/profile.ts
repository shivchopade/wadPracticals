import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class ProfileComponent {

  user: any;

  constructor() {

    const data = localStorage.getItem('user');

    this.user = JSON.parse(data || '{}');
  }
}