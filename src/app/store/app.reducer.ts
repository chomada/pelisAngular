import { createReducer,on } from '@ngrx/store';
import { AppState } from './app-state.model';
import { AppSetTitle, movieSetContent, movieAddItem, movieDeleteItem } from './app.actions';
import { MovieState } from './movie-store.model';


//MovieState ={items:[]};
export const appInitialState:  AppState = {title: 'Redux App (from state'};


 const _appReducer = createReducer(
  appInitialState,
  on(AppSetTitle, (state,{title})=>{
    return {
      ...state,
       title: title}
  }

  )
);
// const _movieReducer = createReducer(
//   appInitialState,
//   on(movieAddItem, (state, {item})=>{
//     const items =[...state.items];
//     items.push(item);
//     return {
//       ...state,
//       items
//     };
//   }),
//   on(movieDeleteItem, (state, {itemId})=>{
//     const items =[...state.items];
//     const itemIndex = items.findIndex( movieItem=>movieItem.id ===itemId)
//     items.splice(itemIndex,1);
//     return {
//       ...state,
//       items
//     };
//   })
// );
// on (movieSetContent, (state, {items})=>{
//   return {
//     ...state,
//     items,
//   }
// })
export function appReducer(state:any, action : any){
  return _appReducer(state,action);
}
