import React from "react";
import './style.css'
import { ComboBox } from "../ComboBox";
import { Conn } from "../../axios/config";
import { useState, useEffect } from "react";
import Table from "../Table/index.tsx";
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu
} from 'cdbreact';

export const LeftMenu = props => {

    const [vendedores, setVendedores] = useState([]);

    const getVendedores = async () => {
        try {

            const response = await Conn.get("/vendedores");

            const data = response.data;

            let dados = [];

            data.map(function(rec){
                dados.push({_id: rec.idvendedor, valor: rec.nome})
            })
            

            setVendedores(dados)

        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        getVendedores();
    }, [])

    return (
        <>
            <div style={{ minWidth: '300px',display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
                <CDBSidebar textColor="#fff" backgroundColor="#333">
                    <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                        <p>
                            <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
                                PróBoi
                            </a>
                        </p>
                        <form
                            noValidate
                            encType="multipart/form-data"
                            className="row g-3 needs-validation mt-3"
                        >
                            <div className="col-md-12">
                                <label htmlFor="ano" className="form-label">Ano:</label>
                                <input
                                    className="form-control"
                                    placeholder='YYYY'
                                    defaultValue={parseInt(new Date().getFullYear())}
                                    type='number'
                                    min={1000}
                                    max={9999}
                                />
                            </div>

                            <div className="col-md-12">
                                <ComboBox
                                    lbl="Vendedor:"
                                    name="vendedor"
                                    className="form-control"
                                    data={vendedores}
                                />
                            </div>



                            <div className="col-md-12">
                                <button className="btn btn-secondary w-100" type="submit" id='botao'>Ok</button>
                            </div>

                        </form>

                    </CDBSidebarHeader>

                    <CDBSidebarContent className="sidebar-content">
                        <CDBSidebarMenu>
                            <p className="text-center">Meses:</p>
                            <Table></Table>
                        </CDBSidebarMenu>
                    </CDBSidebarContent>

                    <CDBSidebarFooter style={{ textAlign: 'center' }}>
                        <div
                            style={{
                                padding: '20px 5px',
                            }}
                        >
                            PróBoi
                        </div>
                    </CDBSidebarFooter>
                </CDBSidebar>
            </div>
        </>
    );
};
