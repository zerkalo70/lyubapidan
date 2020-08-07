import {StoreType} from "./state";


export type DialogsActionsTypes = ReturnType<typeof sendMessageAC>
    | ReturnType<typeof updateNewMessageBodyAC>

const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
    dialogs: [
        {id: 1, name: 'Люба'},
        {id: 2, name: 'Маша'},
        {id: 3, name: 'Даша'}
    ],

    messages: [
        {id: 1, message: 'Я Вас приветствую!'},
        {id: 2, message: 'Привет!'},
        {id: 3, message: 'Здорово!'}
    ],
    newMessageBody: ""
}

const dialogsReducer = (state = initialState, action: DialogsActionsTypes) => {
switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
        state.newMessageBody = action.body;
        return state;
    case SEND_MESSAGE:
        let body = state.newMessageBody;
        state.newMessageBody = "";
        state.messages.push({id: 6, message: body});
        return state;
    default:
        return state
    }
}
export const sendMessageAC = () => {
    return {
        type: "SEND-MESSAGE"
    } as const
}
export const updateNewMessageBodyAC = (body: string) => {
    return {
        type: "UPDATE-NEW-MESSAGE-BODY",
        body: body
    } as const
}

export default dialogsReducer;