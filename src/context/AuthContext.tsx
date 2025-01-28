// // AuthContext.tsx
// import React, { createContext, useContext, useEffect, useState } from 'react';
// import {
//   getAuth,
//   setPersistence,
//   browserLocalPersistence,
//   onAuthStateChanged,
//   signInWithEmailAndPassword,
//   signOut,
//   createUserWithEmailAndPassword,
//   GoogleAuthProvider,
//   OAuthProvider,
//   signInWithPopup,
//   User,
//   FacebookAuthProvider,
// } from 'firebase/auth';
// import { getFirestore, doc, setDoc } from 'firebase/firestore';
// import '../services/firebaseConfig';

// interface AuthContextType {
//   isAuthenticated: boolean;
//   user: User | null;
//   login: (email: string, password: string) => Promise<void>;
//   signup: (email: string, password: string, username: string) => Promise<void>;
//   loginWithGoogle: () => Promise<void>;
//   loginWithApple: () => Promise<void>;
//   logout: () => Promise<void>;
//   loginWithFacebook: () => Promise<void>; 
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export function AuthProvider({ children }: { children: React.ReactNode }) {
//   const [user, setUser] = useState<User | null>(null);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const auth = getAuth();
//   const db = getFirestore();

//   useEffect(() => {
//     setPersistence(auth, browserLocalPersistence)
//       .then(() => {
//         const unsubscribe = onAuthStateChanged(auth, (user) => {
//           setUser(user);
//           setIsAuthenticated(!!user);
//         });
//         return () => unsubscribe();
//       })
//       .catch((error) => {
//         console.error('Error setting persistence:', error);
//       });
//   }, [auth]);

//   const login = async (email: string, password: string) => {
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//     } catch (error) {
//       console.error('Login failed:', error);
//       throw error;
//     }
//   };

//   const signup = async (email: string, password: string, username: string) => {
//     try {
//       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;

//       await setDoc(doc(db, 'users', user.uid), {
//         email: user.email,
//         username,
//       });

//       setUser(user);
//       setIsAuthenticated(true);
//     } catch (error) {
//       console.error('Signup failed:', error);
//       throw error;
//     }
//   };

//   const loginWithGoogle = async () => {
//     const googleProvider = new GoogleAuthProvider();
//     try {
//       const result = await signInWithPopup(auth, googleProvider);
//       setUser(result.user);
//       setIsAuthenticated(true);
//     } catch (error) {
//       console.error('Google login failed:', error);
//       throw error;
//     }
//   };

//   const loginWithApple = async () => {
//     const appleProvider = new OAuthProvider('apple.com');
//     try {
//       const result = await signInWithPopup(auth, appleProvider);
//       setUser(result.user);
//       setIsAuthenticated(true);
//     } catch (error) {
//       console.error('Apple login failed:', error);
//       throw error;
//     }
//   };

//   export const loginWithFacebook = async () => {
//     const provider = new FacebookAuthProvider();
//     return signInWithPopup(auth, provider);
//   };
  

//   const logout = async () => {
//     await signOut(auth);
//     setIsAuthenticated(false);
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, user, login, signup, loginWithGoogle, loginWithApple, loginWithFacebook, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export function useAuth() {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }
//   return context;
// }


import React, { createContext, useContext, useState } from 'react';
import { auth } from '../components/firebaseconfig/firebaseconfig';
import { signInWithPopup, FacebookAuthProvider, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword , GoogleAuthProvider, OAuthProvider } from 'firebase/auth';

interface AuthContextProps {
  signup: (email: string, password: string, username: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  loginWithApple: () => Promise<void>;
  loginWithFacebook: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC = ({ children }) => {
  
 // Updated signup method
const signup = async (email: string, password: string, username: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(userCredential.user, { displayName: username });
  } catch (error) {
    throw error; // rethrow the error so it can be caught in your component
  }
};

const login = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw error; // rethrow the error so it can be caught in your component
  }
};

const loginWithGoogle = async () => {
  const googleProvider = new GoogleAuthProvider();
  await signInWithPopup(auth, googleProvider);
};

  const loginWithApple = async () => {
    // Add your Apple login logic here
  };

  const loginWithFacebook = async () => {
    const provider = new FacebookAuthProvider();
    await signInWithPopup(auth, provider);
  };


  
  return (
    <AuthContext.Provider value={{ signup, login , loginWithGoogle, loginWithApple, loginWithFacebook }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
