import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <main>
      <header>
        <h1>{{ title }}</h1>
      </header>
      <section class="content">
        <h2>Hello World: ngIf!</h2>

        <button type="button" (click)="onEditClick()">
          Make text editable!
        </button>

        <div *ngIf="canEdit; else noEdit">
          <p>You can edit the following paragraph.</p>
        </div>

        <ng-template #noEdit>
          <p>The following paragraph is read only. Try clicking the button!</p>
        </ng-template>

        <p [contentEditable]="canEdit">{{ message }}</p>

        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes-app';

  message = "I'm read only!";
  canEdit = false;

  onEditClick() {
    this.canEdit = !this.canEdit;
    if (this.canEdit) {
      this.message = 'You can edit me!';
    } else {
      this.message = "I'm read only!";
    }
  }
}
