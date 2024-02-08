import { writable } from "svelte/store";
import { browser } from "$app/environment";

const stored = browser && localStorage.user;
const user = writable(stored || '');

const currentUser = {
  subscribe: user.subscribe,
  login: (username) => {
    user.set(username);
    localStorage.user = username;
  },
  logout: () => {
    user.set('');
    localStorage.user = '';
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
