import {
    collection, getFirestore,
} from "firebase/firestore";
import {firebase} from "@/app/api/firebase";
import {initializeApp} from "@firebase/app";


// 初始化 Firebase 应用
const firebaseApp = initializeApp(firebase);
const firestore = getFirestore(firebaseApp);
export const messagesCollectionRef = collection(firestore, 'messages');

//包含聊天信息的对象
// addDoc(collection(getFirestore(firebaseApp), "messages"), {
//     sender: "John",
//     message: "Hello, world!",
//     timestamp: serverTimestamp(),
// });