//our root app component
import {Component, NgModule, VERSION} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

@Component({
  selector: 'my-app',
  template: `
    <div>
      <h2>Hello {{name}}</h2>
    </div>
  `,
})
export class App {
  name:string;
  constructor() {
    this.name = `Angular! v${VERSION.full}`
  }
}

@Component({
  selector: 'joke',
  template : `
    <h1>
      {{ setup }}
    </h1>
    <p>{{ punchline }}</p>`
})
export class JokeComponent {
  setup: string;
  punchline: string;
  
  constructor() {
    this.setup = "Test setup";
    this.punchline = "Test punchline"; 
  }
  
} 

@Component({
  selector: 'joke-list',
  template: `
  <div class="card card-bock" *ngFor="let joke of jokes"> 
    <h4 class="card-title">{{ joke.setup }}</h4>
    <p class="card-text">{{ joke.punchline }}</p>
  </div>
  `
})
export class JokeListComponent {
  jokes: Object[];
  constructor() {
    this.jokes = [
      {
        setup: "setup 1",
        punchline: "punchline 1"
      },
      {
        setup: "setup 2",
        punchline: "punchline 2"
      },
      {
        setup: "setup 2",
        punchline: "punchline 2"
      }  
    ]
  }
}

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ App, JokeComponent, JokeListComponent ],
  bootstrap: [ App, JokeComponent, JokeListComponent ]
})
export class AppModule {}

