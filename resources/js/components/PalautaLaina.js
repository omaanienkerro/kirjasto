import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Valikko from "./valikko"
import Kirjacard from "./kirjacard"
import Footer from "./footer"
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import { BrowserRouter, Route, Link, withRouter } from "react-router-dom";
import ReactDOM from 'react-dom';
import axios from "axios";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Table from "./niteet";



const styles = theme => ({
    appBar: {
        position: 'relative',
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 2,
        marginRight: theme.spacing.unit * 2,
        [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing.unit * 3,
        marginBottom: theme.spacing.unit * 3,
        padding: theme.spacing.unit * 2,
        [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
            marginTop: theme.spacing.unit * 6,
            marginBottom: theme.spacing.unit * 6,
            padding: theme.spacing.unit * 3,
        },
    },
    stepper: {
        padding: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 5}px`,
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing.unit * 3,
        marginLeft: theme.spacing.unit,
    },
    heroUnit: {
    },
    heroContent: {
        maxWidth: 600,
        margin: '0 auto',
        padding: `${theme.spacing.unit * 10}px 0 ${theme.spacing.unit * 0}px`,
    },
    heroButtons: {
        marginTop: theme.spacing.unit * 4,
    },
    formControl: {
        minWidth: '100%',
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
    table: {
        minWidth: 100,
    },
});


class PalautaLaina extends React.Component{

    state = {
        isFetching: true,
        lainat: [],
        kirja: [],
        lainaid: '',
    }


    handleChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })    }

    handleSubmit = event => {
        event.preventDefault();

        const palautus = {
            lainaid: this.state.lainaid,
        };

        axios.post("/api/palauta/"+this.state.lainaid)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    componentDidMount() {
        axios.get("http://rtu.test/api/laina")
            .then(res => {
                const lainat = res.data;
                console.log(lainat);
                this.setState({ lainat });


            })

    }


    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <CssBaseline />
                <main className={classes.layout}>
                    <div className={classes.heroUnit}>
                        <div className={classes.heroContent}>
                            <Typography variant="h2" align="center" color="textPrimary" paragraph>
                            </Typography>
                        </div>
                    </div>
                    <Paper className={classes.paper}>
                        <form onSubmit={this.handleSubmit}>

                            <Typography component="h1" variant="h4" align="center">
                                Palauta laina
                            </Typography>


                            <Typography variant="h6" gutterBottom>
                                {/*
                                Perustiedot
*/}
                            </Typography>
                            <Grid container spacing={24}>
                                <Grid item xs={12}>
                                    <FormControl className={classes.formControl}>
                                        <InputLabel htmlFor="lainaid">Laina</InputLabel>
                                        <Select
                                            value={this.state.lainaid}
                                            onChange={this.handleChange}
                                            inputProps={{
                                                name: 'lainaid',
                                                id: 'lainaid',
                                            }}
                                        >

                                            { this.state.lainat.map(laina =>

                                            (laina.lainaplautettiin == null ?
                                                    <MenuItem value={laina.id}>
                                                        {"Asiakas:"+laina.userID+" Laina:"+ laina.lainattavaID +" pvm:"+laina.lainaAlkaa}
                                                    </MenuItem>
                                                    : ''
                                            )

                                                )
                                            }
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                        className={classes.button}
                                        fullWidth
                                    >
                                        Palauta
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Paper>
                </main>
            </React.Fragment>

        );
    }
}

PalautaLaina.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PalautaLaina);
