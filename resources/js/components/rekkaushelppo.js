import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import axios from 'axios';


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
});



class Checkout extends React.Component {
    /*constructor(props) {
        super(props);
        // Set the initial input values
        this.state = {
            enimi: '',
            snimi: '',
            osoite: '',
            postinumero: '',
            ptoimipaikka: '',
            hetu: '',
            email: '',
            puhelinnumero: '',
            salasana: '',
            salasana2: '',
        }
        // Bind the submission to handleChange()
        this.handleChange = this.handleChange.bind(this)
    }*/

    state = {
        enimi: '',
        snimi: '',
        osoite: '',
        postinumero: '',
        ptoimipaikka: '',
        hetu: '',
        email: '',
        puhelinnumero: '',
        salasana: '',
        salasana2: '',
    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })    }

    handleSubmit = event => {
        event.preventDefault();

        const user = {
            name: this.state.enimi,
            enimi: this.state.enimi,
            snimi: this.state.snimi,
            osoite: this.state.osoite,
            postinumero: this.state.postinumero,
            ptoimipaikka: this.state.ptoimipaikka,
            hetu: this.state.hetu,
            email: this.state.email,
            puhelinnumero: this.state.puhelinnumero,
            salasana: this.state.salasana,
            salasana2: this.state.salasana2,
        };

        axios.post(`api/user/`, { user })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    render() {
        const { classes } = this.props;
        const {enimi, snimi, osoite, postinumero, ptoimipaikka, hetu, email, puhelinnumero, salasana, salasana2 } = this.state;

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
                            Reskiteröidy
                        </Typography>


                        <Typography variant="h6" gutterBottom>
                            Perustiedot
                        </Typography>
                        <Grid container spacing={24}>

                            <Grid item xs={12} sm={6}>

                                <TextField
                                    required
                                    className="form-control"
                                    id="enimi"
                                    name="enimi"
                                    label="Etunimi"
                                    type="text"
                                    autoComplete="enimi"
                                    onChange={this.handleChange}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="sukunimi"
                                    name="snimi"
                                    label="Sukunimi"
                                    fullWidth
                                    autoComplete="snimi"
                                    value={this.props.snimi}
                                    onChange={this.handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    id="osoite"
                                    name="osoite"
                                    label="Osoite"
                                    fullWidth
                                    autoComplete="osoite"
                                    value={this.props.osoite}
                                    onChange={this.handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="postinumero"
                                    name="postinumero"
                                    label="Postinumero"
                                    fullWidth
                                    autoComplete="postinumero"
                                    value={this.props.postinumero}
                                    onChange={this.handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField

                                    id="ptoimipaikka"
                                    name="ptoimipaikka"
                                    label="Postitoimipaikka"
                                    fullWidth
                                    autoComplete="ptoimipaikka"
                                    value={this.props.ptoimipaikka}
                                    onChange={this.handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="hetu"
                                    name="hetu"
                                    label="Henkilötunnus"
                                    fullWidth
                                    value={this.props.hetu}
                                    onChange={this.handleChange}

                                />
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <TextField required
                                           id="puhelinnumero"
                                           name="puhelinnumero"
                                           label="Puhelinnumero"
                                           value={this.props.puhelinnumero}
                                           onChange={this.handleChange}
                                           fullWidth />
                            </Grid>
                            <Grid item xs={12}>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h6" gutterBottom>
                                    Käyttäjätunnus
                                    {/*
                            <Divider  />
*/}

                                </Typography>
                            </Grid>

                            <Grid item xs={12}>
                                <TextField required
                                           id="email"
                                           name="email"
                                           label="Sähköposti"
                                           value={this.props.email}
                                           onChange={this.handleChange}
                                           fullWidth/>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField required id="salasana" label="Salasana"
                                           value={this.props.salasana}
                                           type="password"
                                            name="salasana"
                                           onChange={this.handleChange}
                                           fullWidth />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    required
                                    id="salasana2"
                                    name="salasana2"
                                    label="Salasana uudelleen"
                                    type="password"
                                    value={this.props.salasana2}
                                    onChange={this.handleChange}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    className={classes.button}
                                    fullWidth
                                >

                                    Rekisteöridy
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

Checkout.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Checkout);
