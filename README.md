
### ngModel
`import { FormsModule } from '@angular/forms';`

`<input type="text" [(ngModel)]="name" />`
`<p>{{ name }}</p>`

### add bootstrap 3
`npm install --save bootstrap@3`

```
"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
```

### use the cli to create components
`ng generate component testcomponent`
`ng g c testcomponent`

### Databinding
- communication between typescript code and the template (HTML)
  - output data ---->
    - string interpolation {{ data }}
      - <h3>Server id {{ serverId }} is {{ getServerStatus() }}</h3>
    - property binding [property]="data"
      - [disabled]="!allowNewServer"
  - <----- react to [user] events
    - event binding (event)="expression"
  - <---two-way binding---> (combination of both) [(ngModel)]="data"

### Event Binding
```
<button (click)="onCreateServer()">Add Server</button>
<p>{{ serverCreationStatus }}</p>
```
```
serverCreationStatus = 'No server was created!';
onCreateServer() {
  this.serverCreationStatus = 'Server was created';
}
```
How do you know to which Properties or Events of HTML Elements you may bind? You can basically bind to all Properties and Events - a good idea is to console.log()  the element you're interested in to see which properties and events it offers.

Important: For events, you don't bind to onclick but only to click (=> (click)).

The MDN (Mozilla Developer Network) offers nice lists of all properties and events of the element you're interested in. Googling for YOUR_ELEMENT properties  or YOUR_ELEMENT events  should yield nice results.

### Passing and using data with event binding
```
serverName = '';
onUpdateServerName(event: Event) {
  this.serverName = (<HTMLInputElement>event.target).value;
}
```
```
<input 
type="text"
class="form-control"
(input)="onUpdateServerName($event)">
<p>{{ serverName }}</p>
```

### Two-way Databinding (ngModel)
```
<input 
type="text" 
class="form-control" 
[(ngModel)]="serverName">
```
### Directives - instructions in the DOM
- *ngIf
```
<p *ngIf="serverCreated; else noServer">{{ serverCreationStatus }}</p>
<ng-template #noServer>
  <p>No Server Cerated</p>
</ng-template>
```

