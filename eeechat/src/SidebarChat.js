import React from 'react';
import "./SidebarChat.css";
import {Avatar} from "@mui/material";

function SidebarChat() {
  return (
    <div className='sidebarChat'>
      <Avatar src="https://img.collegepravesh.com/2015/12/Vellore-Institute-of-Technology-Logo.png"/>
      <div className="sidebarChat__info">
        <h2>VIT Group Chat</h2>
        <p>This is the last message</p>
      </div>
    </div>
  )
}

export default SidebarChat;
