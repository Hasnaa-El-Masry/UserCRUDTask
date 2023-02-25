import React, { useEffect, useState } from 'react'
import { CSVLink } from 'react-csv';

const TableHeader = ({ data, headers, value, onSearch, selectedRows }) => {

    const [exportedData, setExportedData] = useState([]);

    useEffect(() => {

        if (data) {
            
            if (selectedRows.length > 0) {

                setExportedData(selectedRows)

            } else {

                setExportedData(data)

            }
        }

    }, [data, selectedRows])

    return (
        <div className='table_actions d-flex justify-center'>
            {data && <button className='btn my-1'>
                <CSVLink data={exportedData} headers={headers} filename='Users.csv'>Export</CSVLink>
            </button>}
            <input type='text' placeholder='search' value={value} onChange={(e) => onSearch(e.target.value)} />
        </div>
    )
}

export default TableHeader