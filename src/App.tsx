import React from 'react';
import { SimpleCard } from './SimpleCard';
import { makeStyles, createStyles, Theme, useTheme } from '@material-ui/core/styles';
import { Typography, Button, Fab } from '@material-ui/core';
import * as Colors from '@pxblue/colors';
import { Feedback } from '@material-ui/icons';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const ellipseBackgroundImage = require('./assets/bg.png');
const angularImage = require('./assets/angular-ionic-logo.svg');
const reactImage = require('./assets/react-logo.svg');
const reactNativeImage = require('./assets/react-native-logo.png');
const titleImage = require('./assets/title.svg');
const titleImageSM = require('./assets/titleSM.svg');

const cardShift = -100;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
        },
        content: {
            flex: '1',
        },
        ellipseBackground: {
            background: `url(${ellipseBackgroundImage}) ${theme.palette.primary.main}`,
            backgroundSize: 'cover',
            clipPath: 'ellipse(70% 200px at 50% 50px)',
            width: '100%',
            height: 250,
        },
        SimpleCardContainer: {
            margin: '0 auto',
            justifyContent: 'center',
            position: 'relative',
            top: cardShift,
            display: 'flex',
        },
        title: {
            backgroundImage: `url("${titleImage}")`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            position: 'absolute',
            top: theme.spacing(4),
            left: '50%',
            transform: 'translateX(-50%)',
            maxWidth: 500,
            width: '90%',
            height: 120,
        },
        section: {
            backgroundColor: theme.palette.background.default,
            padding: `${theme.spacing(3)}px 0`,
            marginTop: cardShift + theme.spacing(2),
        },
        sectionContentContainer: {
            maxWidth: 600,
            margin: '0 auto',
            padding: theme.spacing(1),
        },
        sectionTitle: {
            textAlign: 'center',
            marginBottom: theme.spacing(1),
            fontWeight: 'bold',
        },
        sectionButtonContainer: {
            display: 'flex',
            justifyContent: 'center',
        },
        sectionButton: {
            margin: `${theme.spacing(2)}px ${theme.spacing(1)}px`,
        },
        sectionButtonXS: {
            margin: `${theme.spacing(1)}px 0`,
        },
        footer: {
            backgroundColor: Colors.black[500],
            padding: theme.spacing(2),
            color: Colors.white[50],
            flexShrink: 0,
        },
        FAB: {
            position: 'fixed',
            right: theme.spacing(3),
            bottom: theme.spacing(3),
            boxShadow: theme.shadows[10],
        },
    })
);

function App() {
    const theme = useTheme();
    const classes = useStyles(theme);
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
    const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));
    return (
        <div className={classes.root}>
            <div className={classes.content}>
                <div className={classes.ellipseBackground} />
                <div
                    className={classes.title}
                    style={matchesXS ? { backgroundImage: `url(${titleImageSM})`, width: '70%' } : undefined}
                />
                <div
                    className={classes.SimpleCardContainer}
                    style={matchesSM ? { flexDirection: 'column', alignItems: 'center' } : undefined}
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
                        image={reactNativeImage}
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
                        <Typography className={classes.sectionTitle} variant={'h6'}>
                            About
                        </Typography>
                        <Typography>
                            Power Xpert Blue is a complete design system for front-end development at Eaton. This system
                            will help your team build beautiful applications that adhere to our design guidelines while
                            ensuring flexibility and code reusability.
                        </Typography>
                        <div
                            className={classes.sectionButtonContainer}
                            style={matchesXS ? { flexDirection: 'column' } : undefined}
                        >
                            <Button
                                className={matchesXS ? classes.sectionButtonXS : classes.sectionButton}
                                variant="outlined"
                                color="primary"
                            >
                                release plan
                            </Button>
                            <Button
                                className={matchesXS ? classes.sectionButtonXS : classes.sectionButton}
                                variant="outlined"
                                color="primary"
                                href="https://pxblue.github.io/get-started/new-project"
                            >
                                choose a framework
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <footer className={classes.footer}>Copyright 2020 Eaton. Licensed under BSD-3-Clause.</footer>
            <Fab
                color="primary"
                className={classes.FAB}
                aria-label="feedback"
                href="https://pxblue.github.io/community/contactus"
            >
                <Feedback />
            </Fab>
        </div>
    );
}

export default App;
