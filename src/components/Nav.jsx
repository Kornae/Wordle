import React from "react";
// import ButtonAppBar from "./AppBar";
import BlurOnIcon from '@mui/icons-material/BlurOn';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined';
import ScatterPlotOutlinedIcon from '@mui/icons-material/ScatterPlotOutlined';

export default function Nav(props) {
    return (
        <nav id="navbar" className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container" style={{ padding: '0px 15px' }}>
                <span className="navbar-brand brand ml-auto" id="logo"><ScatterPlotOutlinedIcon /> WRDL</span>
                <span className="navbar-brand brand ma-auto" id="logo"> <LeaderboardOutlinedIcon id="icons" /> <LightbulbOutlinedIcon id="icons" /><HelpOutlineIcon id="icons" /></span>
                {/* <span className="nav-item brand" id=""><BlurOnIcon color='inherit' fontSize='small' /> v10</span> */}
            </div>
        </nav>
    )
}
