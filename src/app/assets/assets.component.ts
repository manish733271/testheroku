import { Component, OnInit } from '@angular/core';
import { Assets } from '../assets';
import { Router, ActivatedRoute,Params } from '@angular/router';
import { VimondService } from '../vimond.service';


@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.css']
})
export class AssetsComponent implements OnInit {

  id: string;
  assets: Assets[];

  constructor(
     private _vimondService: VimondService,
     private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this._route.params  
      .map(params => params ['id'])
        .subscribe((id) => {
          this._vimondService.getAssets(id)
            .subscribe(a => {
              this.assets = a;
              // console.log(this.assets);
            })
        });    
  }

}
