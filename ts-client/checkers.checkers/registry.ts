import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgCreatePost } from "./types/checkers/checkers/tx";
import { MsgRejectGame } from "./types/checkers/checkers/tx";
import { MsgCreateGame } from "./types/checkers/checkers/tx";
import { MsgPlayMove } from "./types/checkers/checkers/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/checkers.checkers.MsgCreatePost", MsgCreatePost],
    ["/checkers.checkers.MsgRejectGame", MsgRejectGame],
    ["/checkers.checkers.MsgCreateGame", MsgCreateGame],
    ["/checkers.checkers.MsgPlayMove", MsgPlayMove],
    
];

export { msgTypes }