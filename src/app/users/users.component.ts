import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  // private httpClient: HttpClient;
  // constructor(httpClient:HttpClient) {
  //   this.httpClient=httpClient;
  users: any[];

  constructor(private httpClient:HttpClient){
  }

  ngOnInit(): void {
    this.httpClient.get<any []>('http://jsonplaceholder.typicode.com/users')
      .subscribe(value=>this.users=value)
  }

}
