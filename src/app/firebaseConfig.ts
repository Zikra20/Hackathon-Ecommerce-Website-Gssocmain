// // firebaseConfig.ts
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
// };

// const app = initializeApp(firebaseConfig);

// export const auth = getAuth(app);
// export const db = getFirestore(app);
// src/app/firebaseConfig.ts
// src/app/firebaseConfig.ts
export const auth = {
  currentUser: null,
  signOut: () => Promise.resolve(),
  onAuthStateChanged: (callback: (user: any) => void) => {
    // Immediately call with null user since we have no auth
    callback(null);
    // Return a dummy unsubscribe function
    return () => {};
  },
};

export default {};

