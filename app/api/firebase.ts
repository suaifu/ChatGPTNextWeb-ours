/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  apiKey: "AIzaSyBiVrnA-w8uQ5Jv0Rs2s2EaqQWEJ_vxiV8",
  authDomain: "mymessagelistener.firebaseapp.com",
  databaseURL: "https://mymessagelistener-default-rtdb.firebaseio.com",
  projectId: "mymessagelistener",
  storageBucket: "mymessagelistener.appspot.com",
  messagingSenderId: "558512697732",
  appId: "1:558512697732:web:c74d2328c53fb35b4d6dd1",
  measurementId: "G-829QKNDD81"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}


// 将上一步复制的配置信息粘贴到这里
export const firebase = getFirebaseConfig();
// // 初始化 Firebase 应用
// initializeApp(firebase);

// const firestore = getFirestore();
// export const messagesCollectionRef = collection(firestore, 'messages');

//包含聊天信息的对象
// addDoc(collection(getFirestore(), 'messages'), {
//   sender: 'John',
//   message: 'Hello, world!',
//   timestamp: serverTimestamp()
// });

