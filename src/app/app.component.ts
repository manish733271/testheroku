import { Component } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { VimondService } from './vimond.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [VimondService]
})
export class AppComponent {
 
}
