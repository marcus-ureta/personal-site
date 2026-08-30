import { ref, push, set, get } from "firebase/database";
import { database } from "../firebase";

function isInputValid(text : string, lowerBound : number, higherBound : number) : boolean{
    if(text === '' || text === null || text === undefined) return false;
    if(text.length < lowerBound) return false;
    if(text.length > higherBound) return false;

    return true;
}

export async function writeBoardMessage(name: string, message: string){

    if(!isInputValid(name, 2, 40)) return {
        success: true,
        messageId: null,
        errorCode: 'name not valid!',
    };

    if(!isInputValid(message, 4, 2000)) return {
        success: true,
        messageId: null,
        errorCode: 'message not valid!',
    };

    const now: Date = new Date();

    const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Manila',
        month: 'long',
        day: '2-digit',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
    });

    const parts = formatter.formatToParts(now);

    const getPart = (type: string): string => parts.find(part => part.type === type)?.value ?? '';

    const month = getPart('month');
    const day = getPart('day');
    const year = getPart('year');
    const hours = getPart('hour');
    const minutes = getPart('minute');
    const dayPeriod = getPart('dayPeriod');

    const currentDate = `${month} ${day}, ${year} @ (${hours}:${minutes} ${dayPeriod})`;

    try{
        const boardData = {
            name: name,
            message: message,
            timeStamp: currentDate
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
            errorCode: "message failed to load. please try again.",
        };
    }
}

export async function getBoardMessages(){
    try {
        const db_refer = ref(database, 'board_messages');
        const snapshot = await get(db_refer);

        if (!snapshot.exists()) {
            return [];
        }

        const data = snapshot.val();

        return Object.entries(data).map(([id, message]) => ({
            id,
            ...(message as {
                name: string;
                message: string;
                timeStamp: number;
            })
        }));
    } catch (error) {
        console.error(error);
        return [];
    }
}