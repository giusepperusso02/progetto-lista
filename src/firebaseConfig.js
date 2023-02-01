import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';




const firebaseConfig = {
    apiKey: "AIzaSyDBnh92BAk3wwgDJr3_ml0EUswcLh1rlwo",
    authDomain: "progettolista-b6fd8.firebaseapp.com",
    projectId: "progettolista-b6fd8",
    storageBucket: "progettolista-b6fd8.appspot.com",
    messagingSenderId: "1061246740324",
    appId: "1:1061246740324:web:50b635a9319920de9dbc71",
    measurementId: "G-B8E95G3RJW"
  };

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
/*const db = firebaseApp.firestore()
const itemsCollection = db.collection('items')

export default firebaseApp

export const createItem = item => {
  return itemsCollection.add(item)
}

export const getItems = async id => {
  const items = await itemsCollection.doc(id).get()
  return items.exists ? item.data(): null
}*/

export default firebaseApp

export{
  db
}