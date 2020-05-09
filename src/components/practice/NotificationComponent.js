import React, { Component } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
toast.configure();
const CustomToast =({close})=>{
 return <div>This is info notification <button onClick={close}>Close</button></div>   
}
export default class NotificationComponent extends Component {
  notify = () => {
    toast("Basic Notification!!!", { position: toast.POSITION.TOP_LEFT });
    toast.success("Success Notification!!!", {
      position: toast.POSITION.BOTTOM_LEFT,
      autoClose:8000
    });
    toast.info(<CustomToast />, {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose:false,
      closeButton:false,
       draggable:true 


    });
    toast.warning("Warning Notification!!!", {
      position: toast.POSITION.TOP_RIGHT,
    });
    toast.error("Error Notification!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    toast("Basic Notification!!!", { position: toast.POSITION.BOTTOM_CENTER });
  };
  render() {
    return (
      <div>
        <button onClick={this.notify}>Notify</button>
      </div>
    );
  }
}
