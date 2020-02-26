import React, { useState, useEffect } from 'react';
import { makeStyles, createStyles, Theme, useTheme } from '@material-ui/core/styles';
import { Typography, Button, Card, CardContent } from '@material-ui/core';
import * as Colors from '@pxblue/colors';
import ShortlineDivider from './ShortlineDivider';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        wrapper: {
            color: theme.palette.text.primary,
            width: 304,
            margin: theme.spacing(1),
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
            '&:hover': {
                boxShadow: theme.shadows[12],
                transition: 'ease-in-out 200ms',
            },
        },
        image: {
            backgroundSize: 'contain',
            height: 150,
            backgroundRepeat: 'no-repeat',
            backgroundPositionX: 'center',
            marginBottom: theme.spacing(2),
        },
        body: {
            color: Colors.gray[500],
            fontSize: 14, // Kyle's recommendation
        },
        footer: {
            color: Colors.gray[300],
            fontWeight: 600,
            marginTop: theme.spacing(3),
            fontSize: 12, // Kyle's recommendation
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
    const [version, setVersion] = useState('-.-.-');
    useEffect(() => {
        fetchNpmVersion(packageName).then((_version) => setVersion(_version));
    });
    return (
        <Card className={classes.wrapper}>
            <CardContent>
                <div className={classes.image} style={{ backgroundImage: `url("${image}")` }} />
                <Typography variant={'h5'}>{title}</Typography>
                <ShortlineDivider />
                <Typography className={classes.body} variant={'body1'}>
                    {body}
                </Typography>
                <div style={{ flex: '1 1 0' }} />
                <div>
                    <Button
                        style={{ fontWeight: 600, marginTop: theme.spacing(3) }}
                        color="primary"
                        variant="outlined"
                        href={url}
                    >
                        View API
                    </Button>
                </div>
                <Typography className={classes.footer} variant={'subtitle2'} noWrap={true}>
                    {packageName} - {version && <span>v{version}</span>}
                </Typography>
            </CardContent>
        </Card>
    );
}
