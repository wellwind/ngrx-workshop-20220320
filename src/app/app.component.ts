import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngrx-workshop-20220320';

  /**
   *
   */
  constructor(private store: Store) {
    
  }

  ngOnInit() {
    this.store.subscribe(data => {
      console.log(data);
    })
  }

}
