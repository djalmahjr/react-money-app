import React from 'react'
import './FormLoading.css'



export default props => {
    return (
        <div className="row form">
            <div className="column collectionInput">
                <h2>Saldo</h2>
                <div className="column inputColumn">
                    <label>Salário:</label>
                    <div className='loadingExtern'>
                        <div className='loadingIntern'></div>
                    </div>
                </div>
                <div className="column inputColumn">
                    <label>Ajuda:</label>
                    <div className='loadingExtern'>
                        <div className='loadingIntern'></div>
                    </div>
                </div>
                <div className="column inputColumn">
                    <label>Crédito:</label>
                    <div className='loadingExtern'>
                        <div className='loadingIntern'></div>
                    </div>
                </div>
                <div className="column inputColumn">
                    <label>Guardado:</label>
                    <div className='loadingExtern'>
                        <div className='loadingIntern'></div>
                    </div>
                </div>

            </div>
            <div classas="column collectionInput">
                <h2>Contas</h2>
                <div className="column inputColumn">
                    <label>Carro:</label>
                    <div className='loadingExtern'>
                        <div className='loadingIntern'></div>
                    </div>
                </div>
                <div className="column inputColumn">
                    <label>Cheque Especial/Emprestimo:</label>
                    <div className='loadingExtern'>
                        <div className='loadingIntern'></div>
                    </div>
                </div>
                <div className="column inputColumn">
                    <label>Celular:</label>
                    <div className='loadingExtern'>
                        <div className='loadingIntern'></div>
                    </div>
                </div>
                <div className="column inputColumn">
                    <label>Seguro de Vida/Carro:</label>
                    <div className='loadingExtern'>
                        <div className='loadingIntern'></div>
                    </div>
                </div>
                <div className="column inputColumn">
                    <label>Cartao de Crédito 1:</label>
                    <div className='loadingExtern'>
                        <div className='loadingIntern'></div>
                    </div>
                </div>
                <div className="column inputColumn">
                    <label>Cartao de Crédito 2:</label>
                    <div className='loadingExtern'>
                        <div className='loadingIntern'></div>
                    </div>
                </div>
            </div>

        </div>
    )
}


