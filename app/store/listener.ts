import firebase, {initializeApp} from 'firebase/app';
import {
    getFirestore,
    collection,
    addDoc,
    query,
    orderBy,
    limit,
    onSnapshot,
    setDoc,
    updateDoc,
    doc,
    serverTimestamp,
} from 'firebase/firestore';
import { getFirebaseConfig } from '../../public/firebase-config.js';

// 将上一步复制的配置信息粘贴到这里
const firebaseConfig = getFirebaseConfig();
// 初始化 Firebase 应用
initializeApp(firebaseConfig);

addDoc(collection(getFirestore(), 'messages'), {
    sender: 'John',
    message: 'Hello, world!',
    timestamp: serverTimestamp()
});

// 获取 Cloud Firestore 实例
//const firestore = firebase.firestore();


// 假设 chatMessage 是包含聊天信息的对象
const chatMessage = {
    name: 'John',
    text: 'Hello, world!',
    // 其他聊天信息字段...
};

// 将聊天信息添加到 Cloud Firestore 的集合中
// firestore.collection('chatMessages').add(chatMessage);