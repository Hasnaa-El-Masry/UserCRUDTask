import { useState } from "react";
import { BiSortUp } from "react-icons/bi";
import { BsSortDown } from "react-icons/bs";
import { FaFilter } from "react-icons/fa";

const Th = ({ text, sortHandlder, onFilter }) => {
    const [sort, setSort] = useState('asc');
    const [filter, setFilter] = useState(false);
    const [filterVal, setFilterVal] = useState('');

    const toggleSort = () => {
        setSort(prev => prev === 'asc' ? 'desc' : 'asc')
    }

    const toggleFilter = () => {
        setFilter(prev => !prev)
        setFilterVal('')
    }

    const changeFilterValueHandler = (e) => {
        onFilter(e.target.value, text)
    }

    return (
        <th className="py-1">
            <div className="d-flex">
                <FaFilter onClick={toggleFilter} />
                <span>
                    {text.toUpperCase()}
                </span>
                <span onClick={() => { sortHandlder(sort, text.toLowerCase()); toggleSort() }}>
                    {sort === 'asc' ?
                        <BsSortDown /> :
                        <BiSortUp />
                    }
                </span>
            </div>
            {filter && <input type='text' onChange={changeFilterValueHandler} />}
        </th>
    )
}

export default Th;