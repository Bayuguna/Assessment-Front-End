import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { getProfile } from "../../../infrastructure/utils/authUtils";
import useChat from "../../../repository/hook/chatHook";
import Button from "../../components/atoms/Button";
import Card from "../../components/atoms/Card";
import Logo from "../../components/atoms/Logo";
import TextField from "../../components/atoms/TextField";

const ChatPage = () => {
  
  const {message, setMessage, allMessages, handleSubmit} = useChat();

  return (

    <Card className="rounded-2xl px-10 py-20">
    <div className="flex flex-col space-y-6 w-full">
    <div className="flex justify-center items-center py-10">
        <Logo/>
    </div>
    {/* <div>
    <TextField
            className="w-full"
            type="text"
            placeholder="Username"
            value=""
            onChange={(e) => setUsername(e.target.value)}
          />
    </div> */}
    <div className='flex flex-col space-y-4 w-full'>
         {allMessages.map(({ id, username, message }:any, index:any) =>(
            // <li key={index}>{p}</li>
            <div key={index}>{
              id === getProfile().iat ? 
                <div className="flex flex-col bg-blue-200 px-5 py-2 rounded-lg">
                  <div className="text-xs">
                    You
                  </div>
                  <div>
                    {message}
                  </div>
                </div>
                :
                <div className="flex flex-col bg-slate-400 justify-end items-end px-5 py-2 rounded-lg">
                  <div>
                    {username}
                  </div>
                  <div>
                    {message}
                  </div>
                </div>
            }</div>
        ))}
    </div>
    <div className='flex flex-row w-full justify-center items-center'>
        <div className='flex w-full'>
            <TextField
            className="w-full"
            type="text"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            />
        </div>

        <div>
            <Button
                className="w-full rounded-md"
                onClick={handleSubmit}
                >
                <PaperAirplaneIcon className='w-4 h-4'/>
            </Button>
        </div>
    </div>
    </div>
</Card>
  );
};

export default ChatPage;
