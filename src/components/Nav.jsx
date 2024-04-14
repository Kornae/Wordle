import React from "react";
// import ButtonAppBar from "./AppBar";
import BlurOnIcon from '@mui/icons-material/BlurOn';

export default function Nav(props) {
    return (
        <nav id="navbar" className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container" style={{ padding: '0px 15px' }}>
                <span className="navbar-brand brand mx-auto" id="logo">WORDLE</span>
                {/* <span className="nav-item brand" id=""><BlurOnIcon color='inherit' fontSize='small' /> v10</span> */}
            </div>
        </nav>
    )
}
