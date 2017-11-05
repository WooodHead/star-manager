import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BoardComponent } from './board/board.component';
import { ListComponent } from './list/list.component';
import { CardComponent } from './card/card.component';

import { GithubService } from './service/github.service';
import { AppComponent } from './app.component';

const routes: Routes =[
  { path: 'board', component: BoardComponent },
  { path: 'list', component: ListComponent },
  { path: 'card', component: CardComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    ListComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes),
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
