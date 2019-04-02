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
import Laturi from "./laturi"

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
    appBar: {
        position: 'relative',
    },
    icon: {
        marginRight: theme.spacing.unit * 2,
    },
    heroUnit: {
    },
    heroContent: {
        maxWidth: 600,
        margin: '0 auto',
        padding: `${theme.spacing.unit * 1}px 0 ${theme.spacing.unit * 0}px`,
    },
    heroButtons: {
        marginTop: theme.spacing.unit * 4,
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
            width: 1100,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    cardGrid: {
        padding: `${theme.spacing.unit * 8}px 0`,
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },

    section1: {
        margin: `${theme.spacing.unit * 3}px ${theme.spacing.unit * 2}px`,
    },
    section2: {
        margin: theme.spacing.unit * 2,
    },
    section3: {
        margin: `${theme.spacing.unit * 6}px ${theme.spacing.unit * 2}px ${theme.spacing.unit * 2}px`,
    },

    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing.unit * 6,
    },
});



class KirjanTiedot extends React.Component{

    state = {
        isFetching: true,
        kirja: [
            'tyyppi',[
                'id',
                'tyyppi',
                ],
            'kategoria',[
                'id',
                'kategoria',
            ],
            'tekija', [
                'id',
                'nimi', "x",
            ],
        ]
    }



    componentDidMount() {
        axios.get("http://rtu.test/api/kirja/"+this.props.match.params.id)
            .then(res => {
                const kirja = res.data;
                console.log(kirja)
                this.setState({ kirja });
                this.setState({ isFetching: false });

            })
    }


    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <CssBaseline />
                <Valikko/>
                {this.state.isFetching ? <Laturi/> : (

                    <main>

                    <div className={classes.heroUnit}>
                        <div className={classes.heroContent}>
                            <Typography variant="h2" align="center" color="textPrimary" paragraph>
                            </Typography>
                        </div>
                    </div>


                    <div className={classNames(classes.layout, classes.cardGrid)}>
                        <Grid container spacing={40}>
                            <Grid item sm={6} md={4} lg={6}>
                                <div>
                                    <img src={'/img/'+this.state.kirja.kuva} style={{maxWidth:'100%', height:'auto'}}/>
                                </div>
                            </Grid>

                            <Grid item sm={6} md={4} lg={6}>
                                <div>
                                    <Paper className={classes.root} elevation={1}>
                                        <Typography variant="h4" align="center" color="textPrimary" paragraph>
                                            {this.state.kirja.nimi}
                                        </Typography>

                                        <Typography variant="h6" align="center" color="textSecondary" paragraph>
                                            {this.state.kirja.kuvaus}
                                        </Typography>
                                        <Divider variant="middle" />

                                        <div className={classes.section2}>
                                            <Typography gutterBottom variant="body1">
                                                Kirjailija
                                            </Typography>
                                            <div>
                                                <Typography variant="h6" align="left" color="textPrimary" paragraph>

                                                    {this.state.kirja.tekija.nimi}

                                                </Typography>
                                            </div>
                                        </div>

                                        <div className={classes.section2}>
                                            <Typography gutterBottom variant="body1">
                                                Kategoria
                                            </Typography>
                                            <div>
                                                <Typography variant="h6" align="left" color="textPrimary" paragraph>
                                                    {this.state.kirja.kategoria.kategoria}
                                                </Typography>
                                            </div>
                                        </div>

                                        <div className={classes.section2}>
                                            <Typography gutterBottom variant="body1">
                                                Julkaisuvuosi
                                            </Typography>
                                            <div>
                                                <Typography variant="h6" align="left" color="textPrimary" paragraph>
                                                    {this.state.kirja.vuosi}

                                                </Typography>
                                            </div>
                                        </div>
                                        <div className={classes.section3}>
                                            <Button variant="contained" color="primary" component={Link} to={'/lainaa/'+this.state.kirja.id} fullWidth>
                                                Lainaa
                                            </Button>
                                        </div>

                                    </Paper>

                                </div>
                            </Grid>
                        </Grid>
                    </div>

                </main>
                )}
            </React.Fragment>

        );
    }
}

KirjanTiedot.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(KirjanTiedot);
