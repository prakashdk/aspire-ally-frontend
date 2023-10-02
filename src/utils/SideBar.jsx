import React from "react";

export default function SideBar({ menu, activeIndex }) {
  return (
    <div className="sidebar">
      <ul>
        {menu && menu.map((menuItem,index) => {
          if(activeIndex===index){

            return <li style={{color:"#2196f3"}} key={menuItem.id}>{menuItem.topic}</li>;
          }
          return <li key={menuItem.id}>{menuItem.topic}</li>;
        })}
      </ul>
    </div>
  );
}
