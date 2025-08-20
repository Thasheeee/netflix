import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyDAHC6gW1w5j-oETd0o4iF_X2V2zafUbNc",
  authDomain: "netflix-clone-26f9f.firebaseapp.com",
  projectId: "netflix-clone-26f9f",
  storageBucket: "netflix-clone-26f9f.firebasestorage.app",
  messagingSenderId: "500599529504",
  appId: "1:500599529504:web:0c6749bb511b960f231c45"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) =>{
    try{
       const res = await createUserWithEmailAndPassword(auth,email, password);
       const user = res.user;
       await addDoc(collection(db, "user"), {
        uid: user.uid,
        name,
        authProvider: "local",
        email,
       });
    }catch(error){
        console.log(error)
      toast.error(error.code.split('/')[1].split('-').join(' '));

    }
}

const login = async(email,password) =>{
    try{
        await signInWithEmailAndPassword(auth, email, password)
    }catch(error){
        console.log(error)
       toast.error(error.code.split('/')[1].split('-').join(' '));

    }
}

const logout = () =>{
    signOut(auth)
}

export {auth, db, login, signup,logout}