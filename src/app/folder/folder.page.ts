import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public tur:number=0;
  public mat:number=0;
  public sos:number=0;
  public fen:number=0;
  public sonuc:number=0;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    
  }
hesapla(tur,mat,sos,fen) {
  console.log("hi");
this.sonuc = 200 + tur*2.3 + mat*2.2 + sos*1.5 + fen*1.5;
}

}
