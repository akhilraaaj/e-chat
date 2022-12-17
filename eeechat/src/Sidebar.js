import React from "react";
import './Sidebar.css';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import { Avatar, IconButton } from "@mui/material";
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import SidebarChat from "./SidebarChat";

function Sidebar()
{
    return (
    <div className="sidebar">
      <div className="sidebar__header">
      <Avatar src="https://akm-img-a-in.tosshub.com/sites/visualstory/stories/2022_11/story_13115/assets/4.jpeg?time=1668443770" />
        <div className="sidebar__headerRight">
            <IconButton>
              <DonutLargeIcon />
            </IconButton>
           <IconButton>
              <ChatIcon />
            </IconButton>
            <IconButton>
              <MoreVertIcon />
            </IconButton> 
        </div>
      </div>

      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchIcon />
           <input placeholder="Search or start new chat" type="text" />
        </div>
      </div>

      <div className="sidebar__chats">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />

      </div>

    </div>
  );
}

export default Sidebar;