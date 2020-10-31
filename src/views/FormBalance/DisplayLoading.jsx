import React from 'react'
import './DisplayLoading.css'

export default props => {
    return (
        <table className='loadingTable'>
            <thead>
                <tr>
                    <th>Saldo Disponivel</th>
                    <th>Debitos Somados</th>
                    <th>Saldo Total Restante</th>
                    <th>Salário Restante</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <div className="loadingExtern">
                            <div className="loadingIntern"></div>
                        </div>
                    </td>
                    <td>
                        <div className="loadingExtern">
                            <div className="loadingIntern"></div>
                        </div>
                    </td>
                    <td>
                        <div className="loadingExtern">
                            <div className="loadingIntern"></div>
                        </div>
                    </td>
                    <td>
                        <div className="loadingExtern">
                            <div className="loadingIntern"></div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}