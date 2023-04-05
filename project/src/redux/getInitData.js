import { doc, getDoc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import { setInitData } from './actions';




 const getInitData = async (dispatch, currentUser) => {
    //  console.log(currentUser)
    const docRef = doc(db, 'users', currentUser.uid);
    const docSnap = await getDoc(docRef);
    // console.log(docSnap)
    if (docSnap.exists()) {
        // console.log("get")
        const selectedBoardId = docSnap.data().boards.length > 0 ? docSnap.data().boards[0].id : null
        // console.log(docSnap.data().boards)
        dispatch(setInitData(docSnap.data().boards, selectedBoardId));
    } else {
        const selectedBoardId = docSnap.data().boards.length > 0 ? docSnap.data().boards[0].id : null
        onSnapshot(docRef, (doc) => {
            dispatch(setInitData(doc.data().boards, selectedBoardId));
        });
    }
}
export default getInitData;