import {Component, OnInit} from '@angular/core';
import {
  EntityCollectionService,
  EntityCollectionServiceFactory
} from "@ngrx/data";
import {User} from "./entities/user/user";

@Component({
  selector: 'app-root',
  template: `
      <div class="container">
          <h1>Show me users!</h1>
          <pre *ngIf="loading$ | async">Loading users...</pre>
          <div class="row">
              <div class="col-8">
                  <table class="table table-striped">
                      <thead>
                      <tr>
                          <th scope="col">#</th>
                          <th scope="col">Name</th>
                          <th scope="col">Email</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr *ngFor="let user of users$ | async" (click)="selectUser(user)">
                          <th scope="row">{{user.id}}</th>
                          <td>{{user.name}}</td>
                          <td>{{user.email}}</td>
                      </tr>
                      </tbody>
                  </table>
              </div>
              <div class="col-4">
                  <div class="d-flex flex-row justify-content-between">
                  <h4>Edit</h4>
                      <button class="btn btn-success" (click)="initUser()">+</button>
                  </div>
                  <form *ngIf="selectedUser">
                      <div class="form-group">
                          <label>Name</label>
                          <input type="text" name="name" [(ngModel)]="selectedUser.name" class="form-control">
                      </div>
                      <div class="form-group">
                          <label>Email</label>
                          <input type="text" name="email" [(ngModel)]="selectedUser.email" class="form-control">
                      </div>
                      <div class="form-group">
                          <label>Website</label>
                          <input type="text" name="website" [(ngModel)]="selectedUser.website" class="form-control">
                      </div>
                      <div class="d-flex flex-row justify-content-between">
                          <button class="btn btn-success" (click)="createUser()" type="button">add new</button>
                          <button class="btn btn-warning" (click)="updateUser()" type="button">update</button>
                          <button class="btn btn-danger"  (click)="deleteUser()" type="button">delete</button>
                      </div>
                  </form>
              </div>
          </div>
      </div>
  `,
})
export class AppComponent implements OnInit {
  private userService: EntityCollectionService<User>;
  selectedUser: User = null;

  constructor(elementFactory: EntityCollectionServiceFactory) {
    this.userService = elementFactory.create<User>('User')
  }

  get loading$() {
    return this.userService.loading$;
  }

  get users$() {
    return this.userService.entities$;
  }

  ngOnInit(): void {
    this.userService.getAll();
  }

  initUser() {
    this.selectedUser = new User()
  }

  selectUser(user: User) {
    this.selectedUser = {...user};
  }

  createUser() {
    this.userService.add(this.selectedUser);
    this.initUser();
  }

  updateUser() {
    this.userService.update(this.selectedUser);
    this.initUser();
  }

  deleteUser() {
    this.userService.delete(this.selectedUser);
    this.initUser();
  }

}
