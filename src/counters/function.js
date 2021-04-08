import React, {useState} from 'react';

export default function(props){
    let [cnt, setCnt] = useState(0);
    let [other, setOther] = useState(0);

    let increase = () => {
        setCnt(cnt + 1);
        setOther(Math.random());
    };

    return (
        <div>
            <strong>{cnt}</strong>
            {other}
            <br/>
            <button onClick={increase}>Plus 1</button>
        </div>
    );
}