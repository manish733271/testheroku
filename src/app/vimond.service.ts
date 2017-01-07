import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class VimondService {

  private searchUrl: string;
  private assetsUrl: string;
  private watchUrl: string;
  // private Assets<>: any;
  
  constructor(private _http: Http) {}  

   searchAssets(){
      this.searchUrl = 'https://vimond-rest-api.ha.expo-first.vimondtv.com/api/web/search/categories/root/assets/.json';
      // this.searchUrl = this.searchAssets();
      
      return this._http.get(this.searchUrl)
      .map(res=>res.json());    
   }

   
   getAssets(id: string){
     this.assetsUrl = 'https://vimond-rest-api.ha.expo-first.vimondtv.com/api/web/asset/'+id+'.json'; 
      return this._http.get(this.assetsUrl)
        .map(res => res.json());
   }

    
    getVideo(id: string){
     this.watchUrl = 'https://vimond-rest-api.ha.expo-first.vimondtv.com/api/web/asset/'+id+'/play.json?protocol=HLS'; 
      return this._http.get(this.watchUrl)
        .map(res => res.json());
   }
}
