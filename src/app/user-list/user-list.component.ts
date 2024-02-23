import { Component } from '@angular/core';
import {HttpClient}  from '@angular/common/http'
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

  users: any[] = [];
  filterName: string = '';
  filterEmail: string = '';
  loading: boolean = true;

  constructor(private userService: UserService) { }

  
  

  ngOnInit(): void {
    this.userService.getUsers()
      .subscribe(
        users => {
          this.users = users;
          this.loading = false; //  false data is fetched
        },
        error => {
          this.loading = false; //  false in case of error
        }
      );
  }

  get filteredUsers() {
    return this.users.filter(user =>
      user.name.toLowerCase().includes(this.filterName.toLowerCase()) &&
      user.email.toLowerCase().includes(this.filterEmail.toLowerCase())
      
    );
  }
}
