import React from "react";
import './style.css'
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';

export const LeftMenu = props => {


    return (
        <>
            <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
                <CDBSidebar textColor="#fff" backgroundColor="#333">
                    <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                        <p>
                            <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
                                Gráficos e Relatórios
                            </a>
                        </p>
                        <form
                            noValidate
                            encType="multipart/form-data"
                            className="row g-3 needs-validation mt-3"
                        >
                            <div className="col-md-12">
                                <label htmlFor="ano" className="form-label">Ano:</label>
                                <input type="date" name="ano" className="form-control"/>
                            </div>
                           

                            <div className="col-md-12">
                                <button className="btn btn-secondary w-100" type="submit" id='botao'>Enviar</button>
                            </div>

                        </form>

                        {/* aqui vai o campo do ano e o select do vendedor */}

                    </CDBSidebarHeader>

                    <CDBSidebarContent className="sidebar-content">
                        <CDBSidebarMenu>

                        </CDBSidebarMenu>
                    </CDBSidebarContent>

                    <CDBSidebarFooter style={{ textAlign: 'center' }}>
                        <div
                            style={{
                                padding: '20px 5px',
                            }}
                        >
                            Gráficos e Relatórios
                        </div>
                    </CDBSidebarFooter>
                </CDBSidebar>
            </div>
        </>
    );
};
