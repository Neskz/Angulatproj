import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Posts';
  
  posts = [
    {
      titre: 'Mon premier post',
      contenu: 'Bonjour',
      loveIts: 0,
      created_at: new Date(),
    },
    {
      titre: 'Mon second post',
      contenu: 'Bonsoir',
      loveIts: 0,
      created_at: new Date(),
    },
    {
      titre: 'Encore un',
      contenu: 'Bonjour',
      loveIts: 0,
      created_at: new Date(),
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
