import React from "react";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogsReducer";
import Dialogs from "./dialogs";
import {connect} from "react-redux";


// const DialogsContainer = (props: any) => {
// // const Dialogs = (props: DialogsPropsType) => {
//
//     let state = props.store.getState().dialogsPage;
//
//     let onSendMessageClick = () => {
//         props.store.dispatch(sendMessageAC())
//     }
//     let onNewMessageChange = (body: any) => {
//         // let body = e.target.value;
//         props.store.dispatch(updateNewMessageBodyAC(body));
//     }
//
//     return (
//        <Dialogs updateNewMessageBody={onNewMessageChange}
//                 sendMessage={onSendMessageClick}
//                 dialogsPage={state}/>
//     )
// }

let mapStateToProps = (state: any) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {

        updateNewMessageBody: (body: any) => {
            dispatch(updateNewMessageBodyAC(body))
        },
        sendMessage: () => {
            dispatch(sendMessageAC())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;