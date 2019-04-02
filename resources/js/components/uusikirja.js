import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

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
import FormControl from '@material-ui/core/FormControl';
import FilledInput from '@material-ui/core/FilledInput';
import FormHelperText from '@material-ui/core/FormHelperText';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';

import OutlinedInput from '@material-ui/core/OutlinedInput';



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
});



class UusiKirja extends React.Component {
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
        nimi: '',
        kuvaus: '',
        kirjailija: '',
        vuosi: '',
        Kategoria: '',
        tyyppi: '',
        kuva: '',
    }

/*    componentDidMount() {
        this.setState({
            labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
        });
    }*/

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }



    handleSubmit = event => {
        event.preventDefault();

        const rkirja = {
            nimi: this.state.nimi,
            kuvaus: this.state.kuvaus,
            kirjailija: this.state.kirjailija,
            vuosi: this.state.vuosi,
            Kategoria: this.state.Kategoria,
            tyyppi: this.state.tyyppi,
            kuva: this.state.kuva,
        };

        axios.post(`api/kirja/`, { rkirja })
            .then(res => {
                console.log(res);
                console.log(res.data);
                alert("kirja lisätty")
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
                                Uusi kirja
                            </Typography>


                            <Typography variant="h6" gutterBottom>
{/*
                                Perustiedot
*/}
                            </Typography>
                            <Grid container spacing={24}>

                                <Grid item xs={12}>

                                    <TextField
                                        required
                                        className="form-control"
                                        id="nimi"
                                        name="nimi"
                                        label="Kirjan nimi"
                                        type="text"
                                        value={this.props.nimi}
                                        onChange={this.handleChange}
                                        fullWidth
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        id="kuvaus"
                                        name="kuvaus"
                                        label="Kuvaus"
                                        fullWidth
                                        autoComplete="kuvaus"
                                        value={this.props.kuvaus}
                                        onChange={this.handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <FormControl className={classes.formControl}>
                                        <InputLabel htmlFor="kirjailija">kirjailija</InputLabel>
                                        <Select
                                            value={this.state.kirjailija}
                                            onChange={this.handleChange}
                                            inputProps={{
                                                name: 'kirjailija',
                                                id: 'kirjailija',
                                            }}
                                        >
                                            <MenuItem value="">
                                                <em>Kirjailija</em>
                                            </MenuItem>
                                            <MenuItem value={1}>John Doe</MenuItem>
                                            <MenuItem value={2}>Nyymi Nyyminen</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="vuosi"
                                        name="vuosi"
                                        label="Vuosi"
                                        fullWidth
                                        value={this.props.vuosi}
                                        onChange={this.handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <FormControl className={classes.formControl}>
                                        <InputLabel htmlFor="Kategoria">Kategoria</InputLabel>
                                        <Select

                                            value={this.state.Kategoria}
                                            onChange={this.handleChange}
                                            inputProps={{
                                                name: 'Kategoria',
                                                id: 'Kategoria',
                                            }}
                                        >
                                            <MenuItem value="">
                                                <em>Kategoria</em>
                                            </MenuItem>
                                            <MenuItem value={1}>Tietokirjat</MenuItem>
                                            <MenuItem value={3}>Hyvinvointi</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>

                                <Grid item xs={12} md={6}>
                                    <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="tyyppi">Tyyppi</InputLabel>
                                    <Select
                                        value={this.state.tyyppi}
                                        onChange={this.handleChange}
                                        inputProps={{
                                            name: 'tyyppi',
                                            id: 'tyyppi',
                                        }}
                                    >
                                        <MenuItem value="">
                                            <em>Tyyppi</em>
                                        </MenuItem>
                                        <MenuItem value={1}>Kirja</MenuItem>
                                        <MenuItem value={2}>E-kirja</MenuItem>
                                        <MenuItem value={3}>Audiokirja</MenuItem>
                                    </Select>
                                </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        id="kuva"
                                        name="kuva"
                                        label="kuva"
                                        fullWidth
                                        autoComplete="kuva"
                                        value={this.props.kuva}
                                        onChange={this.handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                </Grid>

                                <Grid item xs={12}>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                        className={classes.button}
                                        fullWidth
                                    >
                                        Lisää Kirja
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

UusiKirja.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UusiKirja);
