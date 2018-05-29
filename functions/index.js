const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.getUser = functions.https.onRequest((req, res) => {
  const uid = req.query.uid;
  admin.auth().getUser(uid)
    .then((userRecord) => {
      // See the UserRecord reference doc for the contents of userRecord.
      console.log("Successfully fetched user data:", userRecord.toJSON());
      return res.send(userRecord.toJSON())
    })
    .catch((error) => {
      console.log("Error fetching user data:", error);
      return res.send(error.toString())
    });
})

