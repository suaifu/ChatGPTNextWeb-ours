import { initializeApp } from "firebase/app";
// import { firebase } from "@/app/api/firebase";
import {
    addDoc,
    collection,
    getFirestore,
    serverTimestamp,
} from "firebase/firestore";
import {firebaseApp} from "@/app/api/common";

// 初始化 Firebase 应用
// export firebaseApp = initializeApp(firebase);

// const firestore = getFirestore();
// export const messagesCollectionRef = collection(firestore, 'messages');

//包含聊天信息的对象
addDoc(collection(getFirestore(firebaseApp), "messages"), {
    sender: "John",
    message: "Hello, world!",
    timestamp: serverTimestamp(),
});
