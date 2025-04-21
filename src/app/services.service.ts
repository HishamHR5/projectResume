import { Injectable } from '@angular/core';
//import { Database, ref, increment, runTransaction } from '@angular/fire/database';
import { getDatabase,runTransaction, ref, child, get } from 'firebase/database'; // modular
@Injectable({
  providedIn: 'root'
})
export class Services {

  constructor() {}
  private db = getDatabase();

  incrementVisitor() {
    const counterRef = ref(this.db, 'visitorCount');
    return runTransaction(counterRef, (currentCount) => {
      return (currentCount || 0) + 1;
    });
  }
}
