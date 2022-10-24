import React, { useRef, useState, useEffect } from 'react';
import Pagination from 'rc-pagination';
import { offtakerClients } from '../../../Data/offtakerClients';
import '../pagination.css';
import cloneDeep from 'lodash/cloneDeep';
import throttle from 'lodash/throttle';
import SomeProducts from '../Products/SomeProducts';

const tableHead = {
    name: "Campaign Name",
    clientId: "Campaign Id",
    item: "Type",
    amount: "Status",
    status: "Channel",
    id: "#"
  };

  
const FarmersDebts = () => {

    const countPerPage = 5;
    const [value, setValue] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [collection, setCollection] = useState(
        cloneDeep(offtakerClients.slice(0, countPerPage))
     );
    const searchData = useRef(
    throttle(val => {
      const query = val.toLowerCase();
      setCurrentPage(1);
      const data = cloneDeep(
        offtakerClients
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
        setCollection(cloneDeep(offtakerClients.slice(from, to)));
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
                <table className='table table-text-small mb-0'> 
                    {/* <thread className="thead-primary table-sorting"> */}
                    <tr style={{backgroundColor:'#0f1015', color:'white'}}>
                        <th>#</th>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Gender</th>
                        <th>Email</th>
                        <th>Salary</th>
                    </tr>
                    {/* </thread> */}
                    <tbody>

                        {
                            collection.map((key, index) =>{
                                return (
                            <tr key={key.id}>
                                {/* <td>{tableData()}</td> */}
                                <td> {key.id} </td>
                                <td> {key.name} </td>
                                <td> {key.clientId} </td>
                                <td> {key.item} </td>
                                <td> {key.amount} </td>
                                <td> {key.status} </td>
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
                    total={offtakerClients.length}
                />
            
            </div>  
        </>
    );
};

export default FarmersDebts;