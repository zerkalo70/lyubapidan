

export type DialogsActionsTypes = ReturnType<typeof sendMessageAC>

const SEND_MESSAGE = "SEND-MESSAGE";

type DialogType = {
    id: number
    name: string
}
type MessageType = {
    id: number
    message: string
}

let initialState= {
    dialogs: [
        {id: 1, name: 'Люба'},
        {id: 2, name: 'Маша'},
        {id: 3, name: 'Даша'}
    ] as Array<DialogType>,

    messages: [
        {id: 1, message: 'Я Вас приветствую!'},
        {id: 2, message: 'Привет!'},
        {id: 3, message: 'Здорово!'}
    ] as Array<MessageType>
}

export type InitialStateType = typeof initialState

const dialogsReducer = (state = initialState,
                        action: DialogsActionsTypes): InitialStateType => {

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

type SendMessageACType = {
    type: typeof SEND_MESSAGE
    newMessageBody: string
}

export const sendMessageAC = (newMessageBody: string): SendMessageACType => {
    return {
        type: SEND_MESSAGE, newMessageBody
    } as const
}


export default dialogsReducer;