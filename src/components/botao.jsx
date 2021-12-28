import React from 'react';
import './components.css';
function Botao({children, onClick, isInput}) {
    
    function ehNum(val){
        if (!isNaN(val) || val === '.') {
            return true;
        }
        return false;
    }

    function ehIgual(val){
        if (val === '=') {
            return true;
        }
        return false;
    }

    return(
        <>
        {isInput ? (
            <div className='input'>{children}</div>
        ):(
            <div className={`botao-wrapper botao ${ehIgual(children) ? 'btn-igual' : null} 
                ${ehNum(children) ? null : 'operacao'}`}
                onClick={() => onClick(children)}
            >
                {children}
            </div>
        )}
        </>
    );
    
};

export default Botao;