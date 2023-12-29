import { writable } from "svelte/store";

const user = writable('');

const currentUser = {
  subscribe: user.subscribe,
  login: (username) => {
    user.set(username);
  },
  logout: () => {
    user.set('');
  },
  authenticated: () => {
    let currentUser;
    const unsubscribe = user.subscribe(user => {
      currentUser = user;
    })
    unsubscribe();
    return currentUser !== undefined && currentUser.trim().length > 0;
  }
 }
export default currentUser;
