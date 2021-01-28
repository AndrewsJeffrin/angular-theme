import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'customtheme';

  isTrue:boolean =false;
  changeTheme(){
    this.isTrue =!this.isTrue

  }

}
