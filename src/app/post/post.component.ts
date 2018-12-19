import { Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() postnbre: number;
  @Input() postTitre: string;
  @Input() postContenu: string;
  @Input() postDate: Date;

  constructor() { }

  ngOnInit() {
  }

  onoui() {
    this.postnbre=this.postnbre+1;
  }
  
  onnon(){
    this.postnbre=this.postnbre-1;
  }
}
