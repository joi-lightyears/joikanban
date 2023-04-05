import { arrayUnion, updateDoc, doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';

export const updateData = async (boards, currentUser) => {
    const docRef = doc(db, 'users', currentUser.uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        await updateDoc(doc(db, 'users', currentUser.uid), {
            boards: boards
        });
        // console.log('updated')
        // console.log(boards)
        
    }else{
        console.log('no document')
    }
}