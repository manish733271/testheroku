import { Component } from '@angular/core';
import { VimondService } from '../vimond.service';
import { Assets } from '../assets';
// import { ObjtoarrayPipe } from '../objtoarray.pipe';

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
       console.log(res.assets.asset);
      // console.log(res.assets.asset[0]['@id']);
      this.searchRes = res.assets.asset;
    });
  }


}
