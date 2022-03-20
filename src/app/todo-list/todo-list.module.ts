import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TodoListEffects } from '../stores/todo-list/todo-list.effects';
import { todoListFeatureKey, todoListReducer } from '../stores/todo-list/todo-list.reducer';
import { TodoListRoutingModule } from './todo-list-routing.module';
import { TodoListComponent } from './todo-list.component';



@NgModule({
  declarations: [
    TodoListComponent
  ],
  imports: [
    CommonModule,
    TodoListRoutingModule,
    FormsModule,
    StoreModule.forFeature(todoListFeatureKey, todoListReducer),
    EffectsModule.forFeature([TodoListEffects])
  ]
})
export class TodoListModule { }
