import { createReducer,on } from '@ngrx/store';
import { AppState } from './app-state.model';
import { AppSetTitle, movieSetContent, movieAddItem, movieDeleteItem,movieUpdateItem } from './app.actions';
import { MovieState } from './movie-store.model';

//AppState = {title: 'Redux App (from state)'}

export const appInitialState:  MovieState ={items:[]};


 const _appReducer = createReducer(
  appInitialState,
  on(AppSetTitle, (state,{title})=>{
    return {
      ...state,
       title: title}
  }

   ),
  on(movieAddItem, (state, {item})=>{
    const items =[...state.items];
    items.push(item);
    return {
      ...state,
      items
    };
  }),
  on(movieDeleteItem, (state, {itemId})=>{
    const items =[...state.items];
    const itemIndex = items.findIndex( movieItem=>movieItem.id ===itemId)
    items.splice(itemIndex,1);
    return {
      ...state,
      items
    };
  }),
  on(movieUpdateItem, (state, {item})=>{
    const items=[...state.items];
    const itemIndex = items.findIndex( movieItem=>movieItem.id ===item.id)
    items.splice(itemIndex,1);
    items.push(item);

    return{
      ...state,
      items
    }
  })
//    on (movieSetContent, (state, {items})=>{
//    return {
//     ...state,
//      items,
//   }
//  })
);


export function appReducer(state:any, action : any){
  return _appReducer(state,action);
}
