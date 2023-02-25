import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const ActionsTh = ({ action, columns }) => {
    const [open, setOpen] = useState(false);

    const handleChange = (e, value) => {
        const checked = e.target.checked;
        action({ checked, value })
    };

    const openToggle = () => {
        setOpen(prev => !prev)
    }

    return (
        <th>
            <div className="d-flex">
                <span>
                    Actions
                </span>

                <div className="dropdown_wrapper">

                    <BsThreeDotsVertical className="toggleBtn" onClick={openToggle} />
                    {open && <div className="list_wrapper">
                        <h5>Hide Column</h5>
                        <ul className="list">
                            {...columns.map((title, indx) => (

                                <li key={indx} className="d-flex">
                                    <input

                                        type="checkbox"
                                        onChange={(e) => handleChange(e, title)}
                                    />
                                    <label>{title}</label>
                                </li>

                            ))}
                        </ul>
                    </div>}

                </div>

            </div>
        </th>
    )
}

export default  ActionsTh