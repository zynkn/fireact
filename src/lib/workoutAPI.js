import 'fire';
import * as firebase from 'firebase';
import 'firebase/firestore';

const db = firebase.firestore();
const settings = { timestampsInSnapshots: true };
db.settings(settings);

const ref = db.collection("record");

export const editName = ({ date, uid, name, id }) => {
    return ref.doc(uid.toString()).collection(date).doc(id).update({
        name: name
    })
        .then((res) => {
            return res;
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
            return error;
        })
}

export const setWorkout = ({ id, uid, date, name, detail }) => {

    const temp = id === '' ?
        ref.doc(uid).collection(date).doc(detail.timestamp)
        :
        ref.doc(uid).collection(date).doc(id);
    return temp.set({
        name: name,
        detail: firebase.firestore.FieldValue.arrayUnion(detail),
    }, { merge: true })
        .then((res) => {
            return res;
        })
        .catch((error) => {
            return error;
        })
}


export const getWorkout = ({ date, uid }) => getWorkoutAsync(date, uid);
async function getWorkoutAsync(date, uid) {
    // console.log(date, uid);
    const obj = {};
    obj['date'] = date;
    const arr = [];
    await ref.doc(uid.toString()).collection(date).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            let temp = doc.data();
            temp['id'] = doc.id;
            arr.push(temp);
        });
    }).catch((error) => {
        return error;
    })
    obj['data'] = arr;
    return obj;
}
