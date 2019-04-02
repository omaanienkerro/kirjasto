import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import logo from "./logo.png"



const styles = theme => ({
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing.unit * 6,
    },
});


function Footer(props) {
    const { classes } = props;

    return (
        <React.Fragment>
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
{/*
                    <img src={logo} alt="Logo" align="center"/>;
*/}
                CampusKirjasto
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    kalluntie 609<br/>
                    00420 Havumäki
                </Typography>
            </footer>
        </React.Fragment>
    );
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Footer);
