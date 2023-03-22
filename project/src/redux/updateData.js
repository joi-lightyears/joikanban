import { arrayUnion, updateDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';
// import { AuthContext } from '../context/AuthContext'
// import { useContext } from 'react';


// const {currentUser} =  useContext(AuthContext)
export const updateData = async (boards, currentUser) => {
    await updateDoc(doc(db, 'users', currentUser.uid), {
        boards: boards
    });
}
