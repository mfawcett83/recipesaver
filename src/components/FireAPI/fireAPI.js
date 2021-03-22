import * as firebase from "firebase";
import "firebase/auth";

const fBase = firebase.initializeApp ({
    apiKey: "AIzaSyAnnXK1sPQHdy3cBXx-ZQWIF3dMP5u-sJ8",
    authDomain: "recipesaver-76947.firebaseapp.com",
    databaseURL: "https://recipesaver-76947.firebaseio.com",
    projectId: "recipesaver-76947",
    storageBucket: "recipesaver-76947.appspot.com",
    messagingSenderId: "793306580192",
    appId: "1:793306580192:web:ac527c482e819c34813c85"
});

export default fBase