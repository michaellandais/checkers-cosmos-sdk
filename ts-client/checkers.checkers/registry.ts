import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgPlayMove } from "./types/checkers/checkers/tx";
import { MsgCreateGame } from "./types/checkers/checkers/tx";
import { MsgCreatePost } from "./types/checkers/checkers/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/checkers.checkers.MsgPlayMove", MsgPlayMove],
    ["/checkers.checkers.MsgCreateGame", MsgCreateGame],
    ["/checkers.checkers.MsgCreatePost", MsgCreatePost],
    
];

export { msgTypes }