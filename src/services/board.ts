import { ref, push, set } from "firebase/database";
import { database } from "../firebase";

export async function writeBoardMessage(name: string, message: string){
    const boardData = {
        name: name,
        message: message
    }

    const db_refer = ref(database, 'board_messages')

    const messageRef = push(db_refer);

    await set(messageRef, boardData)
}