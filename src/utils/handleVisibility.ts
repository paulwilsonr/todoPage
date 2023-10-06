const handleVisibility = {
    open (visibilitySetter:React.Dispatch<React.SetStateAction<boolean>>) {
        visibilitySetter(true)
    },
    hide (visibilitySetter:React.Dispatch<React.SetStateAction<boolean>>) {
        visibilitySetter(false);
    }
}


export default handleVisibility;