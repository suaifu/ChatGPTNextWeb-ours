import {
    collection,
} from "firebase/firestore";
import {firestore} from "@/app/api/common";


export const messagesCollectionRef = collection(firestore, 'messages');

//包含聊天信息的对象
// addDoc(collection(getFirestore(firebaseApp), "messages"), {
//     sender: "John",
//     message: "Hello, world!",
//     timestamp: serverTimestamp(),
// });
