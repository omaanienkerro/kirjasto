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

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import IconButton from '@material-ui/core/IconButton';

import DeleteIcon from '@material-ui/icons/Delete';
import ListItem from "./valikko";



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

let id = 0;

function createData(NideID, Kirja) {
    id += 1;
    return { id, NideID, Kirja};
}


const rows = [
    createData(12, "perse"),
];




class Niteet extends React.Component {
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
        kirjat: [],
        kirjaid: '',
        niteet: [],
    }



    componentDidMount() {
        axios.get("http://rtu.test/api/kirja")
            .then(res => {
                const kirjat = res.data;
                this.setState({ kirjat });
            });
        axios.get("http://rtu.test/api/nide")
            .then(res => {
                const niteet = res.data;
                console.log(niteet);
                this.setState({ niteet });
            })
    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }


    poistanide = ev => {


        axios.delete('api/nide/' + ev.currentTarget.value)
            .then((res) => {
                const niteet = res.data;

                this.setState({ niteet });

            })
    }


    handleSubmit = event => {
        event.preventDefault();

        const nide = {
            kirjaid: this.state.kirjaid,
        };

        axios.post(`api/nide/`, { nide })
            .then(res => {
                console.log(res);
                const niteet = res.data;
                this.setState({ niteet });
                alert("nide lisätty")
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
                                Uusi nide
                            </Typography>


                            <Typography variant="h6" gutterBottom>
                                {/*
                                Perustiedot
*/}
                            </Typography>
                            <Grid container spacing={24}>
                                <Grid item xs={12}>
                                    <FormControl className={classes.formControl}>
                                        <InputLabel htmlFor="kirjaid">Kirja</InputLabel>
                                        <Select
                                            value={this.state.kirjaid}
                                            onChange={this.handleChange}
                                            inputProps={{
                                                name: 'kirjaid',
                                                id: 'kirjaid',
                                            }}
                                        >
                                            <MenuItem value="">
                                                <em>Kirja</em>
                                            </MenuItem>

                                            { this.state.kirjat.map(kirja =>
                                                <MenuItem value={kirja.id}>
                                                    {kirja.nimi}</MenuItem>)
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
                                        Lisää nide
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Paper>

                    <Paper className={classes.paper}>
                        <Typography component="h1" variant="h4" align="center">
                            Niteet
                        </Typography>
                        <Grid container spacing={24}>
                            <Grid item xs={12}>
                        <Table className={classes.table}>
                            <TableHead>
                                <TableRow>
                                    <TableCell>NideID</TableCell>
                                    <TableCell> Kirja</TableCell>
                                    <TableCell> Poista</TableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.state.niteet.map(nide => (
                                    <TableRow key={nide.id}>
                                        <TableCell>{nide.id} </TableCell>
                                        <TableCell >{nide.kirja.nimi}</TableCell>
                                        <TableCell >
                                            <IconButton aria-label="Delete" className={classes.margin} value={nide.id} onClick={this.poistanide}
                                        >
                                                <DeleteIcon />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                            </Grid>
                        </Grid>
                    </Paper>
                </main>
            </React.Fragment>
        );
    }
}

Niteet.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Niteet);
