import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = () => {
    return (
        <div>
            <p className='white f3'>
                {'O cérebro irá detectar rostos em suas fotos.Tente'}
            </p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-5'>
                <input className='f4 pa2 w-70 center' type='text' />
                <button className='w-50 grow f3 link ph2 pv2 dib white bg-light-purple'>Detectar!</button>
            </div>
        </div>
        </div>
    );
}

export default ImageLinkForm;