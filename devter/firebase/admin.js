const admin = require("firebase-admin");

const FirebaseAdminConfig = JSON.parse(process.env.FIREBASE_ADMIN_CONFIG)

const serviceAccount = require(FirebaseAdminConfig);

try {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });
    // Utilizar variables de entorno
    // databaseURL: process.env.FIREBASE_DATABASE_URL
} catch (e) { }

export const firestore = admin.firestore()