import React from 'react';
import { SimpleCard } from './SimpleCard';
import { ShortlineDivider } from './ShortlineDivider';
import { makeStyles, createStyles, Theme, useTheme } from '@material-ui/core/styles';
import { Typography, Button, Fab } from '@material-ui/core';
import * as Colors from '@pxblue/colors';
import { Feedback } from '@material-ui/icons';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import ellipseBackgroundImage from './assets/bg.png';
import angularImage from './assets/angular-ionic-logo.svg';
import reactImage from './assets/react-logo.svg';
import titleImage from './assets/title.svg';
import titleImageSM from './assets/titleSM.svg';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
        },
        ellipseBackground: {
            background: `url(${ellipseBackgroundImage}) ${theme.palette.primary.main}`,
            backgroundSize: 'cover',
            clipPath: 'ellipse(70% 200px at 50% 50px)',
            width: '100%',
            height: 250,
            position: 'absolute',
        },
        SimpleCardContainer: {
            margin: '0 auto',
            justifyContent: 'center',
            position: 'relative',
            display: 'flex',
            width: '100%',
            '&.matchesSM': { flexWrap: 'wrap', justifyContent: 'unset', maxWidth: 640 },
            '&.matchesXS': { justifyContent: 'center' },
        },
        title: {
            backgroundImage: `url("${titleImage}")`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            width: 500,
            height: 64,
            zIndex: 1,
            margin: `${theme.spacing(2)}px 0 ${theme.spacing(3)}px`,
        },
        section: {
            padding: `${theme.spacing(3)}px 0`,
            marginTop: theme.spacing(2),
            textAlign: 'center',
        },
        sectionContentContainer: {
            maxWidth: 600,
            margin: '0 auto',
            padding: theme.spacing(1),
        },
        sectionTitle: {
            marginBottom: theme.spacing(1),
        },
        sectionButtonContainer: {
            display: 'flex',
            justifyContent: 'center',
        },
        sectionButton: {
            margin: `${theme.spacing(4)}px ${theme.spacing(1)}px`,
        },
        sectionButtonXS: {
            margin: `${theme.spacing(1)}px 0`,
        },
        footer: {
            backgroundColor: Colors.black[500],
            padding: theme.spacing(2),
            color: Colors.white[50],
            flexShrink: 0,
            textAlign: 'center',
        },
        FAB: {
            position: 'fixed',
            right: theme.spacing(3),
            bottom: theme.spacing(3),
            boxShadow: theme.shadows[10],
        },
    })
);

export const App: React.FC = (): JSX.Element => {
    const theme = useTheme();
    const classes = useStyles(theme);
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
    const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));
    const matches640Down = useMediaQuery('(max-width:640px)');
    return (
        <>
            <div className={classes.ellipseBackground} />
            <div className={classes.root}>
                <div style={{ flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div
                        className={classes.title}
                        style={matchesXS ? { backgroundImage: `url(${titleImageSM})`, width: '70%' } : undefined}
                    />
                    <div
                        className={`${classes.SimpleCardContainer} ${matchesSM ? 'matchesSM' : ''} ${
                            matches640Down ? 'matchesXS' : ''
                        }`}
                    >
                        <SimpleCard
                            image={angularImage}
                            title={'Angular / Ionic'}
                            body={
                                'Our Angular component library is intended for use in applications built using Angular and Angular Material. They can also be used in Ionic applications that are built with Angular. '
                            }
                            packageName={'@pxblue/angular-components'}
                            url={'/angular'}
                        />
                        <SimpleCard
                            image={reactImage}
                            title={'React'}
                            body={
                                'Our React component library can be used for applications built using React v16+. They include strong type definitions so they will work well in either JavaScript or TypeScript projects.'
                            }
                            packageName={'@pxblue/react-components'}
                            url={'/react'}
                        />
                        <SimpleCard
                            image={reactImage}
                            title={'React Native'}
                            body={
                                'Our React Native component library can be used for mobile applications built with React Native v0.60+. They include strong type definitions so they will work well in either JavaScript or TypeScript projects.'
                            }
                            packageName={'@pxblue/react-native-components'}
                            url={'/react-native'}
                        />
                    </div>
                    <div className={classes.section}>
                        <div className={classes.sectionContentContainer}>
                            <Typography className={classes.sectionTitle} variant={'h4'}>
                                About
                            </Typography>
                            <ShortlineDivider />
                            <Typography>
                                These component libraries are part of the Power Xpert Blue design system. They simplify
                                development efforts and ensure consistency across products by providing out-of-the-box
                                components implementations for common UI elements. Our documentation uses Storybook to
                                showcase the various ways these components can be configured.
                            </Typography>
                            <div
                                className={classes.sectionButtonContainer}
                                style={matchesXS ? { flexDirection: 'column' } : undefined}
                            >
                                <Button
                                    className={matchesXS ? classes.sectionButtonXS : classes.sectionButton}
                                    variant="outlined"
                                    color="primary"
                                    href="https://pxblue.github.io"
                                >
                                    About Us
                                </Button>
                                <Button
                                    className={matchesXS ? classes.sectionButtonXS : classes.sectionButton}
                                    variant="outlined"
                                    color="primary"
                                    href="https://pxblue.github.io" // TODO: change to a valid link
                                >
                                    Development Roadmap
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <footer
                    className={classes.footer}
                >{`Copyright ${new Date().getFullYear()} Eaton. Licensed under BSD-3-Clause.`}</footer>
                <Fab
                    color="primary"
                    className={classes.FAB}
                    aria-label="feedback"
                    href="https://pxblue.github.io/community/contactus"
                >
                    <Feedback />
                </Fab>
            </div>
        </>
    );
};
