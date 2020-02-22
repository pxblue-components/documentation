import React, { useState } from 'react';
import { makeStyles, createStyles, Theme, useTheme } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        wrapper: {
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.text.primary,
            padding: theme.spacing(3),
            borderRadius: theme.spacing(0.5),
            boxShadow: theme.shadows[3],
            width: 300,
            margin: theme.spacing(1),
            display: 'flex',
            flexDirection: 'column',
            '&:hover': {
                boxShadow: theme.shadows[12],
                transition: 'ease-in-out 300ms',
            },
            textDecoration: 'none',
        },
        image: {
            backgroundSize: 'contain',
            height: 150,
            backgroundRepeat: 'no-repeat',
            backgroundPositionX: 'center',
            marginBottom: theme.spacing(2),
        },
        title: {
            textAlign: 'center',
        },
        divider: {
            backgroundColor: theme.palette.primary.main,
            height: 2,
            width: theme.spacing(5),
            margin: `${theme.spacing(2)}px auto`,
        },
        body: {
            marginBottom: theme.spacing(2),
        },
        footer: {
            textAlign: 'center',
            color: theme.palette.text.hint,
            fontWeight: 600,
        },
    })
);

type SimpleCardProps = {
    title: string;
    body: string;
    packageName: string;
    image: string;
    url: string;
    version?: string;
};

// return the #.#.# version number as a promise
// return empty string if unsuccessful
function fetchNpmVersion(packageName: string): Promise<string> {
    return fetch(`https://api.npms.io/v2/package/${encodeURIComponent(packageName)}`)
        .then((res) => res.json())
        .then((json) => {
            let version = '-.-.-';
            try {
                version = json.collected.metadata.version;
            } catch (err) {
                version = '';
            }
            return version;
        });
}

export function SimpleCard(props: SimpleCardProps): JSX.Element {
    const { title, body, packageName, image, url } = props;
    const theme = useTheme();
    const classes = useStyles(theme);
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
    const [version, setVersion] = useState('-.-.-');
    fetchNpmVersion(packageName).then((_version) => setVersion(_version));
    return (
        <a className={classes.wrapper} href={url} style={matchesSM ? { width: 'auto', maxWidth: 600 } : undefined}>
            <div className={classes.image} style={{ backgroundImage: `url("${image}")` }} />
            <Typography className={classes.title} variant={'h5'}>
                {title}
            </Typography>
            <div className={classes.divider} />
            <Typography className={classes.body} variant={'body1'}>
                {body}
            </Typography>
            <div style={{ flex: '1 1 0' }} />
            <Typography className={classes.footer} variant={'subtitle2'} noWrap={true}>
                {packageName}
            </Typography>
            {version && <Typography className={classes.footer} variant={'subtitle2'}>
                v{version}
            </Typography>}
            <Button style={{ fontWeight: 600, marginTop: 8 }} color="primary">
                Check API
            </Button>
        </a>
    );
}
