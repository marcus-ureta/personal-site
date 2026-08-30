
interface LoadingScreenProps {
    activateLoad: boolean;
}

function LoadingScreen({ activateLoad }: LoadingScreenProps){
    return(
        <div className={`${activateLoad === true ? '' : 'hidden'} absolute inset-0 bg-gray-500/50 h-[100%] w-[100%] grid place-items-center`}>
            <div className="h-16 w-16 animate-spin rounded-full border-4 border-white border-t-transparent"/>
        </div>
    )
}

export default LoadingScreen;