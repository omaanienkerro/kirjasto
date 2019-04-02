import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import AppBar from "./FormPersonalDetails";
import Divider from '@material-ui/core/Divider';


export class AddressForm extends Component {
    render() {
        const { values} = this.props;
        return (
            <React.Fragment>
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

                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="sukunimi"
                            name="sukunimi"
                            label="Sukunimi"
                            fullWidth
                            autoComplete="snimi"
                            value={this.props.snimi}
                            onChange={this.props.handleChange}
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
                            onChange={this.props.handleChange}
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
                            onChange={this.props.handleChange}
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
                            onChange={this.props.handleChange}
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
                            onChange={this.props.handleChange}
                        />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <TextField required id="puhelinnumero" label="Puhelinnumero"
                                   value={this.props.puhelinnumero}
                                   onChange={this.props.handleChange}
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
                                   label="Sähköposti"
                                   value={this.props.email}
                                   onChange={this.props.handleChange}
                                   fullWidth/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField required id="salasana" label="Salasana"
                                   value={this.props.salasana}
                                   onChange={this.props.handleChange}
                                   fullWidth />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            required
                            id="salasana2"
                            label="Salasana uudelleen"
                            value={this.props.salasana2}
                            onChange={this.props.handleChange}
                            fullWidth
                        />
                    </Grid>

                </Grid>
            </React.Fragment>
        );
    }
}


export default AddressForm;
