

export type DialogsActionsTypes = ReturnType<typeof sendMessageAC>
    | ReturnType<typeof updateNewMessageBodyAC>

const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState: any= {
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
        return {
            ...state,
            newMessageBody: action.body
        };

    case SEND_MESSAGE:
        let body = state.newMessageBody;
        return {
            ...state,
            newMessageBody: "",
        messages: [...state.messages, {id: 6, message: body}]
        };

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