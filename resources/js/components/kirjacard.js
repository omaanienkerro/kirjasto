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
import axios from 'axios';
import { Link } from 'react-router-dom';

const styles = theme => ({
    icon: {
        marginRight: theme.spacing.unit * 2,
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
        paddingTop: '135%',
    },
    cardContent: {
        flexGrow: 1,
    },
});



function Kortti(props) {
    const { classes } = props;
    return (
        <Grid item key={props.key} sm={6} md={4} lg={4}>
        <Card className={classes.card}>
            <CardMedia
                className={classes.cardMedia}
                image={props.kuva}
                title="Image title"
            />
            <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                    {props.otsikko}
                </Typography>
                <Typography>
                    {props.kuvaus}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary" component={Link} to={props.url}>
                    Lue lisää
                </Button>
                <Button size="small" color="primary" component={Link} to={props.lainaa}>
                    Lainaa
                </Button>
            </CardActions>
        </Card>
        </Grid>
    );
}





class kirjahylly extends React.Component {
    state = {
        kirjat: []
    }

    componentDidMount() {
        axios.get("http://rtu.test/api/kirja")
            .then(res => {
                const kirjat = res.data;
                this.setState({ kirjat });
            })
    }


    render() {
        let Korttia = (withStyles(styles)(Kortti));

        return (
            <React.Fragment>
            { this.state.kirjat.map(kirja => <Korttia key={kirja.id}kuva={"img/"+kirja.kuva} otsikko={kirja.nimi} kuvaus={kirja.kuvaus} url={"/kirja/"+kirja.id} lainaa={"/lainaa/"+kirja.id}/>)}
            </React.Fragment>



                )
    }
}

Kortti.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default kirjahylly;
