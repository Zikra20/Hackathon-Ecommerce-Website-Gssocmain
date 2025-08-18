"use client";

import { useEffect, useState } from "react";
import { auth, db } from "../firebaseConfig"; // adjust path
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

export default function ProfilePage() {
  const [userProfile, setUserProfile] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserProfile(docSnap.data());
        } else {
          setUserProfile({ name: user.displayName, email: user.email });
        }
      } else {
        setUserProfile(null);
      }
    });

    return () => unsubscribe();
  }, []);

  if (!userProfile) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg font-semibold">Please log in to view profile.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4">User Profile</h1>
        <p><strong>Name:</strong> {userProfile.name}</p>
        <p><strong>Email:</strong> {userProfile.email}</p>
      </div>
    </div>
  );
}
