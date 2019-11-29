import React, { Component } from 'react';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import {inject, observer} from "mobx-react";
// import Select from "react-select-search";

class Table2 extends Component{
    render(){
        const products = [

            { id: 0, name: 'good', price: 1000 },
            { id: 1, name: 'soso', price: 1500 },
            { id: 2, name: 'bad', price: 500 },
            { id: 3, name: 'good3', price: 41000 },
            { id: 4, name: 'soso4', price: 800 }

        ];
        const columns = [
            {
                dataField: 'id',
                text: 'Product ID',
                sort: true
            },{
                dataField: 'name',
                text: 'Product Name',
                sort: true  
            },{
                dataField: 'price',
                text: 'Product Price',
                sort: true  
            }
        ]; 

        const defaultSorted = [{
            dataField: 'name',
            order: 'desc'
          }];
          
        return(
            <div>
                <BootstrapTable keyField='id' data={ products } columns={ columns } 
                defaultSorted={ defaultSorted }
                striped
                hover
                />
            </div>
        );
    }
}

export default Table2;