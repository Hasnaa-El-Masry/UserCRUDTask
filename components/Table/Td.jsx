import { useState } from "react";

const Td = ({ value, onEdit, id, name, onRowClick, style }) => {

    const [inputVal, setInputVal] = useState(value);
    const [editMode, setEditMode] = useState(false);

    const changeHandler = (event) => {
        setInputVal(event.target.value)
    }

    const blurHandler = () => {
        onEdit({ [name]: inputVal }, id)
        setEditMode(false)
    }

    return (
        <td onClick={onRowClick} style={{ background: style === 'selected' ? '#ccc' : '' }}>
            {editMode ?
                <input value={inputVal} onChange={changeHandler} onBlur={blurHandler} /> :
                <span onClick={() => setEditMode(true)}>{value}</span>
            }
        </td>
    )
}

export default Td;