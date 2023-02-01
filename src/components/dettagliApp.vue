<template>
 <section class="info">
  <img src="../assets/google_account.png">
  <h1>Lista Poeti <a href="/" >Logout</a></h1>
</section>
<section class="cards-wrapper">
  <div class="card-grid-space">
    <div class="num">01</div>
    <a class="card" href="./AlessandroManzoni" style="--bg-img: url('https://upload.wikimedia.org/wikipedia/commons/2/25/Ritratto_di_Alessandro_Manzoni_by_Francesco_Hayez.jpg')">
      <div>
        <tr v-for="item in items">
          <td>{{item.value.titolo}}</td>
        </tr>
    
        <p>Romanticismo</p>
        <div class="date">1785-1873</div>
        <div class="tags">
          <div class="tag">Promessi Sposi</div>
        </div>
      </div>
    </a>
  </div>
  <div class="card-grid-space">
    <div class="num">02</div>
    <a class="card" href="./GiovanniVerga" style="--bg-img: url('https://upload.wikimedia.org/wikipedia/commons/a/ae/Portrait_of_Giovanni_Verga.jpg')">
      <div>
        <h1>Giovanni Verga</h1>
        <p>Verismo</p>
        <div class="date">1840-1922</div>
        <div class="tags">
          <div class="tag">Rosso Malpelo</div>
        </div>
      </div>
    </a>
  </div>
  <div class="card-grid-space">
    <div class="num">03</div>
    <a class="card" href="./GiovanniPascoli" style="--bg-img: url('https://upload.wikimedia.org/wikipedia/commons/7/7b/Giovanni_Pascoli_01.jpg')">
      <div>
        <h1>Giovanni Pascoli</h1>
        <p>Decadentismo</p>
        <div class="date">1855-1912</div>
        <div class="tags">
          <div class="tag">Fanciullino</div>
        </div>
      </div>
    </a>
  </div>
 
</section>
</template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { getAuth, signOut,GoogleAuthProvider } from 'firebase/auth';
  import firebaseConfig from '../firebaseConfig';
  import { collection, getDocs } from 'firebase/firestore';
  import { db } from '../firebaseConfig';



  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  auth.languageCode = 'it';
  firebaseConfig

  const items = ref ([{
   // id : 'id1',
   // immagine : 'https://upload.wikimedia.org/wikipedia/commons/2/25/Ritratto_di_Alessandro_Manzoni_by_Francesco_Hayez.jpg',
   // titolo: 'Alessandro Manzoni',
   // descrizione: 'Alessandro Manzoni, nome completo Alessandro Francesco Tommaso Antonio Manzoni (Milano, 7 marzo 1785 – Milano, 22 maggio 1873), è stato uno scrittore, poeta e drammaturgo italiano.'
   
  }])

  onMounted(() =>{
    const querySnapshot =  getDocs(collection(db, "item_01"))
    let fbItems = []
    querySnapshot.forEach((doc) => {
    console.log(doc.id ,"=>",doc.data())
    const item= {
      id : doc.id,
      immagine : doc.data().immagine,
      titolo: doc.data().titolo,
      descrizione : doc.data().descrizione,
      lista_tag : doc.data().lista_tag
    }
    fbItems.push(item)
    })
    items.value = fbItems
  })


  export default {
    name: 'dettagliApp',
    
 /* methods:{
    handleSignOut(){
        signOut(auth).then(() => {
         this.user = '';
         this.isSignedIn = false;
        }).catch((error) => {
          console.log(error);
        });
    }
  }*/
  }
  
  
  </script>
  
  <style scoped>
@import url('https://fonts.googleapis.com/css?family=Heebo:400,700|Open+Sans:400,700');

:root {
  --color: #3c3163;
  --transition-time: 0.5s;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-height: 100vh;
  font-family: 'Open Sans';
  background: #fafafa;
}

a {
  color: inherit;
}

.cards-wrapper {
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 4rem;
  padding: 4rem;
  margin: 0 auto;
  width: max-content;
}

.card {
  font-family: 'Heebo';
  --bg-filter-opacity: 0.5;
  background-image: linear-gradient(rgba(0,0,0,var(--bg-filter-opacity)),rgba(0,0,0,var(--bg-filter-opacity))), var(--bg-img);
  height: 20em;
  width: 15em;
  font-size: 1.5em;
  color: white;
  border-radius: 1em;
  padding: 1em;
  display: flex;
  align-items: flex-end;
  background-size: cover;
  background-position: center;
  box-shadow: 0 0 5em -1em black;
  transition: all, var(--transition-time);
  position: relative;
  overflow: hidden;
  border: 10px solid #ccc;
  text-decoration: none;
}

.card:hover {
  transform: rotate(0);
}

.card h1 {
  margin: 0;
  font-size: 1.5em;
  line-height: 1.2em;
}

.card p {
  font-size: 0.75em;
  font-family: 'Open Sans';
  margin-top: 0.5em;
  line-height: 2em;
}

.card .tags {
  display: flex;
}

.card .tags .tag {
  font-size: 0.75em;
  background: rgba(255,255,255,0.5);
  border-radius: 0.3rem;
  padding: 0 0.5em;
  margin-right: 0.5em;
  line-height: 1.5em;
  transition: all, var(--transition-time);
}

.card:hover .tags .tag {
  background: var(--color);
  color: white;
}

.card .date {
  position: absolute;
  top: 0;
  right: 0;
  font-size: 0.75em;
  padding: 1em;
  line-height: 1em;
  opacity: .8;
}

.card:before, .card:after {
  content: '';
  transform: scale(0);
  transform-origin: top left;
  border-radius: 50%;
  position: absolute;
  left: -50%;
  top: -50%;
  z-index: -5;
  transition: all, var(--transition-time);
  transition-timing-function: ease-in-out;
}

.card:before {
  background: #ddd;
  width: 250%;
  height: 250%;
}

.card:after {
  background: white;
  width: 200%;
  height: 200%;
}


.card:hover {
  color: var(--color);
}

.card:hover:before, .card:hover:after {
  transform: scale(1);
}

.card-grid-space .num {
  font-size: 3em;
  margin-bottom: 1.2rem;
  margin-left: 1rem;
}

.info {
  font-size: 1.2em;
  display: flex;
  padding: 1em 3em;
  height: 3em;
}

.info img {
  height: 3em;
  margin-right: 0.5em;
}

.info h1 {
  font-size: 1em;
  font-weight: normal;
}

/* MEDIA QUERIES */
@media screen and (max-width: 1285px) {
  .cards-wrapper {
    grid-template-columns: 1fr 1fr;
  }
}

@media screen and (max-width: 900px) {
  .cards-wrapper {
    grid-template-columns: 1fr;
  }
  .info {
    justify-content: center;
  }
  .card-grid-space .num {
    margin-left: 0;
    text-align: center;
  }
}

@media screen and (max-width: 500px) {
  .cards-wrapper {
    padding: 4rem 2rem;
  }
  .card {
    max-width: calc(100vw - 4rem);
  }
}

@media screen and (max-width: 450px) {
  .info {
    display: block;
    text-align: center;
  }
  .info h1 {
    margin: 0;
  }
}
  </style>
  