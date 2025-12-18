import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// const firebaseConfig = {
//     apiKey: import.meta.env.API_KEY,
//     authDomain: import.meta.env.AUTH_DOMAIN,
//     projectId: import.meta.env.PROJECT_ID,
//     storageBucket: import.meta.env.STORAGE_BUCKET,
//     messagingSenderId: import.meta.env.MESSAGING_SENDER_ID,
//     appId: import.meta.env.APP_ID
// };

const firebaseConfig = {
    apiKey: "AIzaSyB9hnNgR8aY9wJc4k2-RrYgAvYXyZL3rbk",
    authDomain: "igdmusic-9dc4d.firebaseapp.com",
    projectId: "igdmusic-9dc4d",
    storageBucket: "igdmusic-9dc4d.firebasestorage.app",
    messagingSenderId: "571589472474",
    appId: "1:571589472474:web:97a167c40bd577d94fb5e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export services for use in your app
export const auth = getAuth(app);
export const db = getFirestore(app);