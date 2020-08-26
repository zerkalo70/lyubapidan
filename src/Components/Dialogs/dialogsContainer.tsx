import React from "react";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogsReducer";
import Dialogs from "./dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";




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


export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)(Dialogs);

