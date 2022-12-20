import react from "react";
import {Button} from "antd-mobile";
import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import NestedModal from "./NestedModal";
import {ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

let open = false;

let item = null;
const handleOpen = () => {

    open = (true);
    // alert(open);
};
const handleClose = () => {
    alert(open);
    // open =(false);
};
function ChildModal(item) {

    return (
        <React.Fragment>
            {/*<Button onClick={handleOpen}>Open Child Modal</Button>*/}
            <Modal
                hideBackdrop
                open={open}
                //onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >


                <Box sx={{ ...style, width: 200 }}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={item.images.large}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {item.name}
                            </Typography>
                            {/*<Typography variant="body2" color="text.secondary">*/}
                            {/*    Lizards are a widespread group of squamate reptiles, with over 6,000*/}
                            {/*    species, ranging across all continents except Antarctica*/}
                            {/*</Typography>*/}
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Box>


                <Button onClick={handleClose}>Close Child Modal</Button>

            </Modal>
        </React.Fragment>
    );
}
export default class MyInput extends react.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: true,
            value: null,
            card: null

        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (val) => {
        this.setState({ value: val.target.value })
    }
    handleSubmit(val){


        //  alert("https://api.pokemontcg.io/v2/cards/"+this.state.value);


        console.log('formData:',this.state.value);
        const error= null;
        const isLoaded= false

        fetch("https://api.pokemontcg.io/v2/cards/"+this.state.value)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        card:result.data
                    });
                    item = result.data;
                    // alert('it=');
                    // alert(JSON.stringify(item));
                    handleOpen();
                    // ChildModal(item);
                    //    alert(item.images.large);
                },
                (error) => {
                    // alert("error in card request");
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )

    }


    render() {
        const {error, isLoaded, card} = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else if (!item) {

            return <div>
                <input
                    style={{
                        width: 250,
                    }}
                    value={this.state.value}
                    // value={'pl3-1'}
                    onChange={this.handleChange}

                />
                <Button onClick={this.handleSubmit}>Search By Id2</Button>
            </div>;
        }else {
            return (
                <div>
                    <input
                        style={{
                            width: 250,
                        }}
                        value={this.state.value}
                        // value={'pl3-1'}
                        onChange={this.handleChange}

                    />
                    <Button onClick={this.handleSubmit}>Search By Id2</Button>
                    <NestedModal data={item}/>

                </div>

            );
        }
    }
}