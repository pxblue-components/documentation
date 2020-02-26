import React from 'react';
import { useTheme } from '@material-ui/core/styles';

export default function ShortlineDivider(): JSX.Element {
    const theme = useTheme();

    return <div style={{
        backgroundColor: theme.palette.primary.main,
        height: theme.spacing(0.5),
        width: theme.spacing(7.5),
        margin: `${theme.spacing(2)}px auto`,
    }}/>
    
}