import React from "react";
import {Search} from "@material-ui/icons";
function Searchbar() {
    return (
        <div>
            <br />
            <form>
                <div className="input-field">
                    <Search />
                    <input id="search" type="search" placeholder="Search for your favorite films!" />           
                </div>
            </form>
        </div>
    )
}

export default Searchbar;