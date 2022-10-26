import React, { useRef, useState, useEffect } from 'react';
import Pagination from 'rc-pagination';
import { agrodealerClients } from '../../../Data/agrodealerClients';
import '../../OfftakerPage/pagination.css';
import cloneDeep from 'lodash/cloneDeep';
import throttle from 'lodash/throttle';
const tableHead = {
    name: "Campaign Name",
    orderNo: "Campaign Id",
    loanItem: "Type",
    quantity: "Status",
    amount: "Channel",
    payment:'Payment',
    date: 'Date',
    status: 'Payment Status',
    id: "#"
  };

  
const ClientTransactions = () => {

    const countPerPage = 5;
    const [value, setValue] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [collection, setCollection] = useState(
        cloneDeep(agrodealerClients.slice(0, countPerPage))
     );
    const searchData = useRef(
    throttle(val => {
      const query = val.toLowerCase();
      setCurrentPage(1);
      const data = cloneDeep(
        agrodealerClients
          .filter(item => item.name.toLowerCase().indexOf(query) > -1)
          .slice(0, countPerPage)
      );
      setCollection(data);
    }, 400)
  );

    useEffect(() => {
        if (!value) {
        updatePage(1);
        } else {
        searchData.current(value);
        }
    }, [value]);

    const updatePage = p => {
        setCurrentPage(p);
        const to = countPerPage * p;
        const from = to - countPerPage;
        setCollection(cloneDeep(agrodealerClients.slice(from, to)));
    };
    const tableRows = rowData => {
        const { key, index } = rowData;
        const tableCell = Object.keys(tableHead);
        const columnData = tableCell.map((keyD, i) => {
          return <td key={i}>{key[keyD]}</td>;
        });
    
        return <tr key={index}>{columnData}</tr>;
      };
    
      const tableData = () => {
        return collection.map((key, index) => tableRows({ key, index }));
      };
      const headRow = () => {
        return Object.values(tableHead).map((title, index) => (
          <td key={index}>{title}</td>
        ));
      };

    return (
        <>
          <div className='table-row' >
              
                <h4>Clients Debts</h4>
                
                <input
                className='form-control'
                style={{width:'30%'}}
                placeholder="Search Name"
                value={value}
                onChange={e => setValue(e.target.value)}
                />
            </div>  
            <div className='table-responsive' style={{paddingTop:20}}>
                <table className='table'> 
                    {/* <thread className="thead-primary table-sorting"> */}
                    <tr style={{backgroundColor:'#0f1015', color:'white'}}>
                        <th>#</th>
                        <th>Client Name</th>
                        <th>Order No.</th>
                        <th>Loan Item</th>
                        <th>Quantity</th>
                        <th>Amount(Ksh)</th>
                        <th>Payment</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                    <tbody>

                        {
                            collection.map((key, index) =>{
                                return (
                            <tr key={key.id}>
                                {/* <td>{tableData()}</td> */}
                                <td> {key.id} </td>
                                <td> {key.name} </td>
                                <td> {key.orderNo} </td>
                                <td> {key.loanItem} </td>
                                <td> {key.quantity} </td>
                                <td> {key.amount} </td>
                                <td> {key.payment} </td>
                                <td> {key.date} </td>
                                <td> {key.status} </td>
                                <td>
                                    <input type='checkbox' />
                                </td>
                            </tr>
                                )
                           })
                        }
                    </tbody>
                </table>
            </div>
            <div  className="table-filter-info">
                <Pagination
                    className="pagination-data"
                    pageSize={countPerPage}
                    onChange={updatePage}
                    current={currentPage}
                    total={agrodealerClients.length}
                />
            
            </div>  
        </>
    );
};

export default ClientTransactions;