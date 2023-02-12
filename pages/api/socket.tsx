import { Server } from "socket.io";
import SocketIO from "../../src/domain/helpers/socketHandler";

export default function SocketHandler(req:any, res:any) {
  SocketIO(req, res)
}