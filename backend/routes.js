import {getTest} from './controllers/test.controller.js';
import {getCart, addToCart,removeFromCart} from './controllers/cart.controller.js';
import { validateCredentials } from './controllers/login.controller.js';

export const routes= (app)=>{
  app.route('/api/test').get(getTest)
  app.route('/api/cart').get(getCart).post(addToCart).delete(removeFromCart);
  app.route('/api/login')
  .post(validateCredentials)

}

