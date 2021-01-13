import React from "react";
import { Link } from "react-router-dom";

function NavigationMenu(props) {
    return(
        <div>
            <ul className="left hide-on-med-and-down">
            <li>
                    <Link to={{pathname: "/"}}
                    onClick={props.closeMenu} >Home</Link>
                </li>
                <li>
                    <Link to={{pathname: "/nominations"}}
                    onClick={props.closeMenu} >Your Nominations</Link>
                </li>
                
             </ul>
        </div>

    )
}

export default NavigationMenu;