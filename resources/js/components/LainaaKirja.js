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


class LainaaKirja extends React.Component{

    state = {
        isFetching: true,
        nide: [],
        kirja: [],
        asiakas: '',
    }


    handleChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })    }

    handleSubmit = event => {
        event.preventDefault();

        const laina = {
            asiakas: this.state.asiakas,
            nide: this.state.nide[0].id,
        };

        axios.post(`/api/laina/`, { laina })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    componentDidMount() {
        axios.get("http://rtu.test/api/vapaanide/"+this.props.match.params.id)
            .then(res => {
                const nide = res.data;
                console.log(nide);
                this.setState({ nide });
                console.log(this.state.nide[0])


            })
        axios.get("http://rtu.test/api/kirja/"+this.props.match.params.id)
            .then(res => {
                const kirja = res.data;
                console.log(kirja);
                this.setState({ kirja });
                this.setState({ isFetching: false });

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
                                {this.state.kirja.nimi}
                            </Typography>
                            <Typography component="h3" variant="h7" align="center">
                                Vapaana: {this.state.nide.length} kpl
                            </Typography>

                            <Typography variant="h6" gutterBottom>
                                {/*
                                Perustiedot
*/}
                            </Typography>
                            <Grid container spacing={24}>
                                <Grid item xs={12}>
                                    <FormControl className={classes.formControl}>
                                        <TextField
                                            required
                                            className="form-control"
                                            id="asiakas"
                                            name="asiakas"
                                            label="Asiakasnumero"
                                            type="text"
                                            autoComplete="asiakas"
                                            onChange={this.handleChange}
                                            fullWidth
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                        className={classes.button}

                                        disabled={this.state.nide == 0}



                                        fullWidth
                                    >
                                        Lainaa
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

LainaaKirja.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LainaaKirja);
