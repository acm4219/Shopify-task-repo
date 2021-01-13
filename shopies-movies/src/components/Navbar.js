import React, {useState} from "react";
import NavigationMenu from "./NavigationMenu"
import {useTransition, animated} from 'react-spring';
import {Menu} from "@material-ui/icons"
import {MovieFilter} from "@material-ui/icons"

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);
       
    const maskTransitions = useTransition(showMenu, null, {
        from: { position: 'absolute', opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    })
    const menuTransitions = useTransition(showMenu, null, {
        from: { opacity: 0, transform: "translateX(-100%)" },
        enter: { opacity: 1,transform: "translateX(0%)" },
        leave: { opacity: 0, transform: "translateX(-100%)" },
    })
    return (
        <nav className="nav-extended">
            <div className="nav-wrapper">
                <label className="brand-logo center hide-on-small-only"><MovieFilter />The Shoppies</label>
                <h4 className="white-text center hide-on-med-and-up"><MovieFilter />The Shoppies!</h4>
                <label className="sidenav-trigger"><Menu 
                onClick={() => setShowMenu(!showMenu)}/></label>
                {
                maskTransitions.map(({ item, key, props }) =>
                    item && 
                    <animated.div 
                        key={key} 
                        style={props}
                        onClick={() => setShowMenu(false)}
                    >      
                        
                    </animated.div>
                )
            }
            {
                menuTransitions.map(({ item, key, props }) =>
                    item && 
                    <animated.div 
                        key={key} 
                        style={props}
                    >
                        <NavigationMenu
                            closeMenu={() => setShowMenu(false)}
                        />
                    </animated.div>
                )
            }
           </div>
        </nav>
    )
}

export default Navbar;