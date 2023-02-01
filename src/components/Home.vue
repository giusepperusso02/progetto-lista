<template>
  <div class="container-fluid">
          <div class="row no-gutter">
              <div class="col-md-6 d-none d-md-flex bg-image"></div>          
              <div class="col-md-6 bg-light">
                  <div class="login d-flex align-items-center py-5">             
                      <div class="container">
                          <div class="row">
                              <div class="col-lg-10 col-xl-7 mx-auto ">
                                  <h3 class="display-4 ">Progetto Lista</h3>
                                  <p class="text-muted mb-4 " >Google Sign In</p>
                                      <div class="d-grid gap-2 mt-2">
                                        <button type="submit" class="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm"  @click="handleSignInGoogle" id="GoogleSingIn" >Sign in</button>
                                      </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
</template>

<script>


import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import firebaseConfig from '../firebaseConfig';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import router from "@/router";



firebaseConfig
const provider = new GoogleAuthProvider();
const auth = getAuth();
auth.languageCode = 'it';

export default {
name: 'Home',
components: {
 
},
data(){
    return{
      user : '',
    }
  },
methods: {
    handleSignInGoogle() {
      signInWithPopup(auth, provider)
        .then((result) => {
       // const user = result.user;
       //console.log(result.user.displayName)
       this.user = result.user.displayName;
       router.push("/dettagliApp")
       }).catch((error) => {
        console.log(error);
     });
}
}
}

</script>