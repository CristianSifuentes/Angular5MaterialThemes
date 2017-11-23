import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  otherTheme: boolean = false;

  changeTheme(){
    this.otherTheme = !this.otherTheme;
  }
}
