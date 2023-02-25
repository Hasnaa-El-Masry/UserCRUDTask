import { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import Td from "./Td";

const Tbody = ({ data, columns, onDeleteClick, onEdit, getSelectedRows }) => {

    const [selectedRows, setSelectedRows] = useState([]);

    const onSelectRow = (user) => {

        if (selectedRows.length) {

            const existedItem = selectedRows.find(item => item.id === user.id);

            if (existedItem) {

                setSelectedRows(prev => prev.filter(row => row.id !== user.id))

            } else {

                setSelectedRows(prev => [...prev, user])

            }

        } else {

            setSelectedRows(prev => [...prev, user])

        }

    }

    console.log(selectedRows)

    useEffect(() => {

        getSelectedRows(selectedRows)

    }, [selectedRows])

    return (
        <tbody>

            {data.map((user, indx) => (
                <tr key={indx}>

                    {columns?.map((c, x) => {
                        //decrease the lenght of id it' too long
                        const val = c === 'id' ? user[c].split('-')[0] : user[c]

                        return <Td
                            key={x}
                            name={c}
                            value={val}
                            onEdit={onEdit}
                            id={user.id}
                            onRowClick={() => onSelectRow(user)}
                            style={selectedRows.find(item => item.id === user.id) ? 'selected' : 'notSelected'}
                        />

                    })}

                    <td style={{ background: selectedRows.find(item => item.id === user.id) ? '#ccc' : '' }}>
                        
                        <div className="d-flex">
                            <AiFillDelete className="danger" onClick={() => onDeleteClick(user.id)} />
                            <input className="m-0" type='checkbox' checked={selectedRows.find(item => item.id === user.id)} />
                        </div>

                    </td>

                </tr>
            ))}

        </tbody>

    )
}

export default Tbody