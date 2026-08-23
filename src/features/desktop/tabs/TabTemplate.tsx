import { useState, useRef, useEffect, type PropsWithChildren,} from 'react';

import {getTabStyle} from '../tabUtils'
import {useTabManager} from '@/features/desktop/tabManager/TabManagerContext'
import { Tabs, TabStatus} from '../tabManager/tabManager'
import TabHeader from "@/features/desktop/TabHeader"

import "@/features/desktop/Desktop.css"

import Draggable from 'react-draggable'

interface TabTemplateProps{
    thisTab: Tabs;
    icon: string;
}

export function TabTemplate({thisTab, icon} : TabTemplateProps, {children} : PropsWithChildren){
    const { setTabStates, tabState } = useTabManager();
    const [playClosingAnim, setClosingAnim] = useState<boolean | null>(null);
    const [isDragging, setIsDragging] = useState<boolean>(false);
    
    const currentTabState = tabState.find(tab => tab.Tab == thisTab);
    const checkTabState : boolean = currentTabState?.Status == (TabStatus.Closed);

    const nodeRef = useRef(null);

    useEffect(() => {
        if (currentTabState?.Status === TabStatus.Closing) {
            setClosingAnim(true);

            setTimeout(() => {
                setClosingAnim(false);

                setTabStates((previousTabs) => {
                    const newTabs = previousTabs.map((tab) => {
                        if (tab.Tab === Tabs.About) {
                            return {
                                ...tab,
                                Status: TabStatus.Closed,
                            };
                        }

                        return tab;
                    });

                    return newTabs
                })
            }, 200)
        }
    }, [currentTabState?.Status])

    return(
        <>
            {/* GRAY BACKGROUND FOR MOBILE */}
            <div className={`${checkTabState ? 'hidden' : 'block'} sm:hidden fixed w-screen h-screen bg-[#525252]/40 top-0`}/>

            <Draggable handle=".handle-bar" nodeRef={nodeRef} allowAnyClick={false} bounds="body" onStart={() => setIsDragging(true)} onStop={() => setIsDragging(false)}>
                <div 
                    className={`${playClosingAnim && !checkTabState ? 'animate-tab-close' : 'animate-tab-popup'} ${checkTabState && !playClosingAnim ? 'hidden' : ''}
                    flex flex-col w-screen sm:w-[58vw] h-[100dvh] sm:h-[60vh] 
                    ${getTabStyle()} ${isDragging ? 'drag-style' : ''} 
                    overflow-hidden z-3 left-0 pb-8 sd:pb-0 sd:left-[10%]`} 
                    ref={nodeRef}
                >
                    <TabHeader icon={icon} name='about' isDraggable={true} tab={Tabs.About}/>
                    {children}
                </div>
            </Draggable>
        </>
    )
}