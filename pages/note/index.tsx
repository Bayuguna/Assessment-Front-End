import useNote from "../../src/repository/hook/noteHook";

const Note = () => {
    
    const { input, onChangeHandler } = useNote();
    
    return (
        <div className="py-40 px-10">
            <div className="flex flex-col w-full justify-center items-center space-y-5">
                <div>
                    <span className="font-bold text-xl uppercase text-danger">Assessment Note</span>
                </div>
                <div className="flex w-full">
                <textarea className="w-full p-5" rows={10} placeholder="Type Note Together" onChange={onChangeHandler} value={input}>
                </textarea>
                </div>
            </div>
        </div>
    )
}
export default Note;