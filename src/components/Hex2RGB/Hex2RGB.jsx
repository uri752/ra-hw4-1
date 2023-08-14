import React from 'react';
import { useState } from 'react';
import hex2Rgb from './../../hex2Rgb.js';
import changeLightness from './../../changeLightness.js';
const ERROR_BG_COLOR = 'rgb(100,100,100)';
const DEFAULT_COLOR = 'rgb(255,255,255)';

export default function Hex2RGB() {

    const [hex, setHex] = useState('#');
    const [rgb, setRgb] = useState('');
    const [isError, setIsError] = useState(false);

    const handleColorHexChange = event => {
        const { value } = event.target;
        if (value.length <=7) {
            !value ? setHex('#') : setHex(value);
            setRgb('');
            setIsError(false);
        }
        if (value.length === 7) {
            const res = hex2Rgb(value);
            setRgb(res || ERROR_BG_COLOR);
            if(!res) setIsError(true);
        }
    }

    return (        
        
        <form className='converter' style={{ background: rgb }}>
            <input
                type='text'
                id='colorHex' name='colorHex'
                value={hex}                
                onChange={handleColorHexChange}/>

            <input 
                type='text'
                className='colorRGB'
                style={{background: rgb ? changeLightness(rgb,10) : DEFAULT_COLOR}}
                id='colorRGB' name='colorRGB'                
                value={isError ? 'Ошибка' : rgb}/>

        </form>        
        
    )
}
