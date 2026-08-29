import { ref, push, set } from "firebase/database";
import { database } from "../firebase";

export async function writeBoardMessage(name: string, message: string){

    try{
        const boardData = {
            name: name,
            message: message,
            timeStamp: Date.now()
        }

        const db_refer = ref(database, 'board_messages')

        const messageRef = push(db_refer);

        await set(messageRef, boardData);

        return {
            success: true,
            messageId: messageRef.key,
            errorCode: null,
        };
    }
    catch(e){
        console.error(e);

        return {
            success: false,
            messageId: null,
            errorCode: "ADD_MESSAGE_FAILED",
        };
    }
}