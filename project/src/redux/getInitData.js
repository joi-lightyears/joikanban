import { doc, getDoc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import { setInitData } from './actions';


 const getInitData = async (dispatch, currentUser,setSelectedBoardId) => {
    const docRef = doc(db, 'users', currentUser.uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        setSelectedBoardId(docSnap.data().boards.length>0?docSnap.data().boards[0].id:null);
        dispatch(setInitData(docSnap.data().boards));
    } else {
        onSnapshot(docRef, (doc) => {
            dispatch(setInitData(doc.data().boards));
        });
    }
}
export default getInitData;