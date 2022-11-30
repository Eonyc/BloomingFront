function OpenGeneralMsgModal(message){
    document.querySelector("#pMessageTxt").innerHTML = message;
    let elem = document.querySelector("#modal-message");
    var instance = M.Modal.getInstance(elem);
    instance.open();
    
}