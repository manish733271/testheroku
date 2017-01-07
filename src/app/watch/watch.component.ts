import { Component, OnInit } from '@angular/core';
import { Assets } from '../assets';
import { Router, ActivatedRoute,Params } from '@angular/router';
import { VimondService } from '../vimond.service';
import { Playback } from '../playback';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html'
})
export class WatchComponent implements OnInit {

    id: string;
    playback: Playback[];

  constructor(
     private _vimondService: VimondService,
     private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this._route.params  
      .map(params => params ['id'])
        .subscribe((id) => {
          this._vimondService.getVideo(id)
            .subscribe(a => {
              this.playback = a;
              console.log(this.playback);
            })
        });    
  }

}