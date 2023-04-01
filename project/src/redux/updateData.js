import { arrayUnion, updateDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';

export const updateData = async (boards, currentUser) => {
    await updateDoc(doc(db, 'users', currentUser.uid), {
        boards: boards
    });
    console.log('updated')
    console.log(boards)
}