import React, { useState } from "react";
import Input from "./Input";
import { Button } from "antd-mobile";

export default function InputValueButton() {
    const [formData, setFormData] = useState({});

    const changeHandle = (field) => {
        return (value) => {
            formData[field] = value;
            setFormData(Object.assign({}, formData));
        };
    };

    const show=()=>{
        alert(123);
        console.log('formData值为',formData);
    }
    return (
        <div>
            <Input type='text' value={this.state.value} onChange={changeHandle("input1")} />
            <Button onClick={show()}>Search By Id</Button>
        </div>
    );
}

