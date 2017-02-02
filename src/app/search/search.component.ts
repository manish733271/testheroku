import { Component } from '@angular/core';
import { VimondService } from '../vimond.service';
import { Assets } from '../assets';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent {

  searchRes: Assets[]

  constructor(private _vimondService: VimondService) { }


  searchAssets(){
    this._vimondService.searchAssets().subscribe(res =>
    {
      this.searchRes = res.assets.asset;
      //console.log(res.assets.asset[0]['@id']);
    });
  }


}
