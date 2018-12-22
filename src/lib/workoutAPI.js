import 'fire';
import * as firebase from 'firebase';
import 'firebase/firestore';

const db = firebase.firestore();
const settings = { timestampsInSnapshots: true };
db.settings(settings);

export const getAll = (uid) => {
    console.log(uid);
    const ref = db.collection("record").doc('VcZblxmPQdhe23FjXjlmg7vm90K3')
    return ref.get().then(function (doc) {
        if (doc.exists) {
            console.log("Document data:", doc.data());
            console.log(typeof doc.data());
            // console.log(doc.data()['2018-10-10']);
            return Object.keys(doc.data()).map(function (key) {
                console.log(doc.data()[key])
                return {
                    [key]: doc.data()[key]
                }
            });
            //return doc.data();
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
            return [];
        }

    }).catch(function (error) {
        console.log("Error getting document:", error);
    });
}