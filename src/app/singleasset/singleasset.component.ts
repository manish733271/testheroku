import { Component } from '@angular/core';
import { VimondService } from '../vimond.service';
import { Assets } from '../assets';
// import { ObjtoarrayPipe } from '../objtoarray.pipe';
// import {FilterPipe } from '../filter.pipe';


@Component({
  selector: 'app-singleasset',
  templateUrl: './singleasset.component.html',
  styleUrls: ['./singleasset.component.css'],
  
})

export class SingleassetComponent {

  searchRes: Assets[];

  constructor(private _vimondService: VimondService) { }

  getSingleAsset(){
    this._vimondService.searchAssets().subscribe(res =>
    {
      // console.log(res.assets.asset);
      this.searchRes = res.assets.asset;
      
    });

  }
}
