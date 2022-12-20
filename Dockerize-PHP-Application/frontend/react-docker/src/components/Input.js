import React from "react";

export default function Input(props) {
    const changeHandle = (e) => {
        const {onChange} = props;
        let value = e.target.value;
        onChange && onChange(value);
        console.log(onChange,value,'input组件');
    };

    return <input onChange={changeHandle} />;
}

