import * as React from 'react';
import Switch from '@mui/material/Switch';
import {styled} from "@mui/system";
import Button from "@mui/material/Button";

const label = { inputProps: { 'aria-label': 'Switch demo' } };


export default function BasicSwitches() {
    return (
        <div>
            <Switch {...label} defaultChecked />
        </div>
    );
}