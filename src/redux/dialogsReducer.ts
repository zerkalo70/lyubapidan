

export type DialogsActionsTypes = ReturnType<typeof sendMessageAC>

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
    ]
}

const dialogsReducer = (state = initialState, action: DialogsActionsTypes) => {

switch (action.type) {

    case SEND_MESSAGE:
        let body = action.newMessageBody;
        return {
            ...state,
        messages: [...state.messages, {id: 6, message: body}]
        };

    default:
        return state
    }
}
export const sendMessageAC = (newMessageBody: any) => {
    return {
        type: "SEND-MESSAGE", newMessageBody
    } as const
}


export default dialogsReducer;