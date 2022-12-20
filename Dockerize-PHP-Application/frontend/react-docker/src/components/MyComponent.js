
// import React, {Component} from 'react';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MyInput from "./InputButton";


function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}



// const cards = [];

const theme = createTheme();

class MyComponent extends React.Component {
    page=1;

    updatePage=(pages)=>{
        this.page=pages;
        this.state = {
            error: null,
            isLoaded: false,
            cards: []
        };
        this.componentDidMount();
        document.documentElement.scrollTop = 0;
    }



    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            cards: []
        };
    }

    componentDidMount() {
        fetch("https://api.pokemontcg.io/v2/cards?page="+this.page+"&pageSize=250")
        // fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        cards: result.data
                    });
                    this.props.data(result.data);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const {error, isLoaded, cards} = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div style={{fontSize:'large',fontWeight:'bold',display:'flex',marginTop:'300px',justifyContent:'center'}}>Loading...</div>;
        } else {
            return (
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <AppBar position="relative">
                        <Toolbar>
                            <CameraIcon sx={{ mr: 2 }} />
                            <Typography variant="h6" color="inherit" noWrap>
                                Pokémon layout
                                <a style={{borderRadius:'5px',border:'1px solid white',padding:'3px',color:'#FFF',fontWeight:'bold',marginLeft:'1000px'}}>Log in</a>
                                <a style={{borderRadius:'5px',border:'1px solid white',padding:'3px',color:'#FFF',fontWeight:'bold',marginLeft:'20px'}}>Sign up</a>
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <main>
                        {/* Hero unit */}
                        <Box
                            sx={{
                                bgcolor: 'background.paper',
                                pt: 8,
                                pb: 6,
                            }}
                        >
                            <MyInput/>
                        </Box>
                        <Container sx={{ py: 8 }} maxWidth="md">
                            {/* End hero unit */}

                            <Grid container spacing={6} >
                                {cards.map((card) => (
                                    <Grid item key={card.id} xs={18} sm={6} md={3}>
                                        <Card
                                            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                        >
                                            <CardMedia
                                                component="img"
                                                image={card.images.large}
                                                alt="random"
                                            />
                                            <CardContent sx={{ flexGrow: 1 }}>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                    {card.name}
                                                </Typography>
                                            </CardContent>
                                            <CardActions>
                                                <Button size="small">View</Button>
                                                <Button size="small">Save as favor</Button>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                        </Container>
                    </main>
                    <Button onClick={()=>this.updatePage(this.page+1)} size="small" >next page +1</Button>
                    <span style={{margin:'20px'}}><b>{this.page}</b></span>
                    <Button onClick={()=>this.updatePage(Math.max(1,this.page-1))} size="small">previous page -1</Button>
                    {/* Footer */}
                    <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
                        <Typography variant="h6" align="center" gutterBottom>
                            Footer
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            align="center"
                            color="text.secondary"
                            component="p"
                        >
                            Something here to give the footer a purpose!
                        </Typography>
                        <Copyright />
                    </Box>
                    {/* End footer */}
                </ThemeProvider>
            );
        }
    }
}




export default MyComponent