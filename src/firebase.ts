
declare global {
    var FIREBASE_APPCHECK_DEBUG_TOKEN: boolean | string;
}

import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { initializeAppCheck, ReCaptchaEnterpriseProvider } from "firebase/app-check";
//import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
    apiKey: "AIzaSyBtGgMiUSQpLOl_1uvG0JX0kKU5m9qW8X4",
    authDomain: "marcus-personal-site.firebaseapp.com",
    projectId: "marcus-personal-site",
    storageBucket: "marcus-personal-site.firebasestorage.app",
    messagingSenderId: "636443623332",
    appId: "1:636443623332:web:ccd4dae9e57428e4bc4b31",
    measurementId: "G-79PH9SZ797",
    databaseURL: "https://marcus-personal-site-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

if (import.meta.env.DEV) {
    self.FIREBASE_APPCHECK_DEBUG_TOKEN =
        import.meta.env.FIREBASE_APP_CHECK_DEBUG;
}

initializeAppCheck(app, {
    provider: new ReCaptchaEnterpriseProvider('6LcEN6AtAAAAAFs-POtFR1m0wRQ5BKxUcAuTEOj1'),
    isTokenAutoRefreshEnabled: true
});


// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);