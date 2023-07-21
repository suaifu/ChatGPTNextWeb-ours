import { collection, getFirestore } from "firebase/firestore";
import { firebaseConfig } from "@/app/api/firebase";
import { initializeApp } from "@firebase/app";
import { initializeAppCheck, ReCaptchaV3Provider } from "@firebase/app-check";

// 初始化 Firebase 应用
const firebaseApp = initializeApp(firebaseConfig);
const firestoredb = getFirestore(firebaseApp);
export const messagesCollectionRef = collection(firestoredb, "messages");

// App Check
// const appCheck = initializeAppCheck(firebaseApp, {
//     provider: new ReCaptchaV3Provider('92538834-5C9B-404E-AF77-4036127F37CC'),
//     isTokenAutoRefreshEnabled: true
// });

//包含聊天信息的对象
// addDoc(collection(getFirestore(firebaseApp), "messages"), {
//     sender: "John",
//     message: "Hello, world!",
//     timestamp: serverTimestamp(),
// });

//----------------
// const fs = require('fs');
// const path = require('path');
//
// // 保存所有消息的数组
// const messages = [];
//
// // 接收用户输入消息的函数
// function receiveMessage(user, message) {
//     // 将消息添加到消息数组中
//     messages.push({
//         user,
//         message,
//         timestamp: Date.now(),
//     });
//
//     // 将所有消息写入日志文件
//     const logFilePath = path.join(__dirname, 'chat.log');
//     const logData = messages.map((msg) => {
//         const { user, message, timestamp } = msg;
//         return `${new Date(timestamp)} [${user}]: ${message}`;
//     }).join('\n');
//
//     fs.writeFile(logFilePath, logData, { flag: 'w' }, (err) => {
//         if (err) throw err;
//         console.log('Message saved to log file.');
//     });
// }
//
// // 调用示例
// receiveMessage('Alice', 'Hello, world!');

//------------------
//-------------用户输入日志--------------------
// const fs = require("fs");
// const FILE_PATH = "../../public/conversation.log";
//
// fs.writeFileSync(FILE_PATH, ""); // 创建并清空对话日志文件
// const userMsg = createMessage({
//     role: "user",
//     content: content,
// });
//
// const conversationLog = `${userMsg.content}\t${new Date().toLocaleString()}`;
// fs.appendFileSync(FILE_PATH, conversationLog); // 将对话记录写入对话日志文件
