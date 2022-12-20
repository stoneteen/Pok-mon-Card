import logo from './logo.svg';
import './App.css';
import MyComponent from "./components/MyComponent";
import * as React from 'react';
import Game from "./components/Game";


import Button from '@mui/material/Button';
import Album from "./components/Album";
import NestedModal from "./components/NestedModal";
import MyInput from "./components/InputButton";
import InputValueButton from "./components/getInputValue";
import {useState} from "react";
import MyCard from "./components/MyCard";



function App() {
    const [cards,setCard]=useState([]);

    return (

        <div className="App">

            {/*<NestedModal data={'123adc'}/>*/}
            <MyComponent data={setCard} />

            {/*<InputValueButton/>*/}

        </div>
    );
}

export default App;
