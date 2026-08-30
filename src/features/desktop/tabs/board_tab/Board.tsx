
import tab_icon from '@icons/tab/board.svg'

import { useEffect, useState } from 'react'

import {TabTemplate, type HeaderDetails, type TabDetails} from '../TabTemplate'
import {Tabs} from '@/features/desktop/tabManager/tabManager'
import { writeBoardMessage, getBoardMessages } from '@/services/board'

import LoadingScreen from '@/components/loading_screen/LoadingScreen'

import "@/features/desktop/Desktop.css"
import './Board.css'

type Message = {
    name: string;
    message: string;
    timeStamp: number;
    id: string;
};

function BoardMessage({name, time, message} : {name : string, time: string, message: string}){
    return(
        <div className='mx-[5%] bg-container-blue flex flex-col py-[12px] border-2 border-secondary-blue mb-[1.75%]'>
            <div className='flex flex-row justify-between mb-[8px] mx-[0.5%]'>
                <h2 className="font-bold font-['Jost'] text-[clamp(8px,1.5vw,18px)] text-secondary-blue">~{name}</h2>
                <h4 className="mr-[1.5%] font-['Jost'] text-[clamp(8px,1.5vw,18px)] text-secondary-blue">{time}</h4>
            </div>

            <p className="mx-[1.5%] font-['Arial'] text-secondary-blue">{message}</p>
        </div>
    )
}

function Board() {
    const [isSending, setSending] = useState<boolean>(true);
    const [messages, setMessages] = useState<Message[]>([])

    const headerDetails : HeaderDetails = {
        icon: tab_icon,
        name: 'board'
    }

    const tabDetails : TabDetails = {
        width: 62,
        height: 65,
        leftPos: 10,
        topPos: 20
    }

    useEffect(() => {
        const fetchMessages = async () => {
            try{
                setMessages((await getBoardMessages()).reverse());
            } catch (error) {
                console.log('could not fetch data!');
                console.log(error);
            }

            setSending(false);
        }

        fetchMessages();
    }, [])

    async function handleSubmit(event : React.FormEvent<HTMLFormElement>){
        event.preventDefault();

        setSending(true);

        const form = event.currentTarget;
        const formData = new FormData(form);

        const name = formData.get('name');
        const message = formData.get('message');
        const email = formData.get('email');

        const tryBoardMessage = await writeBoardMessage(name?.toString()!, message?.toString()!, email?.toString()!);

        setSending(false);

        if(!tryBoardMessage.errorCode){
            console.log('success!');
            form.reset();
        }
        else console.log('failed: ' + tryBoardMessage.errorCode)

        setMessages((await getBoardMessages()).reverse());

        console.log(messages);
    }

    return(
        <TabTemplate thisTab={Tabs.Board} headerDetails={headerDetails} tabDetails={tabDetails}>
            <div className="tab-scrollable">
                <LoadingScreen activateLoad={isSending}/>

                <div className="my-[3%] mx-[5%]">
                    <div className="flex flex-col bg-container-blue px-[2%] py-[2%] place-items-start gap-y-2 border-2 border-secondary-blue">
                        <form onSubmit={handleSubmit} className='w-full '>
                            <h3 className="font-['Jost'] font-bold text-secondary-blue text-[clamp(14px,2vw,22px)]">name:</h3>
                            <input className="input-styling input-boxes mb-[1.5%]" placeholder='your name' name='name' required/>

                            <h3 className="font-['Jost'] font-bold text-secondary-blue text-[clamp(14px,2vw,22px)]">message:</h3>
                            <textarea className="input-styling input-boxes resize-none" placeholder='your message' name='message' required/>

                            <input className='absolute left-[-9999px]' placeholder='your email' name='email' aria-hidden="true"/>

                            <button type='submit' className="input-styling px-[1.5%] mt-[1.5%] rounded-[5px] font-['Arial'] font-bold text-secondary-blue hover:bg-secondary-blue/15 hover:text-accent-teal transition-all">
                                send!
                            </button>
                        </form>
                    </div>
                </div>

                <div className='flex flex-col my-[2%]'>
                    {messages.map((message, i) => (
                        <BoardMessage key={i} name={message.name} time={message.timeStamp.toString()} message={message.message}/>
                    ))}
                </div>
            </div>
        </TabTemplate>
    )
}

export default Board