import { useEffect, useState } from "react"
import DeleteModal from "../Modal";
import Tbody from "./Tbody";
import Thead from "./Thead"

const getUserKeys = (arr) => arr?.map(item => Object.keys(item))[0];

const Table = ({ data, editHandler, onDelete, onSort, onFilter, getSelectedRows }) => {

    //Handle delete modal visibilaty based on delete button reaction
    const [confirmModalOpen, setConfirmModalOpen] = useState(false);

    // Handle selected user to delete and confirm the deletion by delete modal
    const [selectedUserId, setSelectedUSerId] = useState('');

    // Handle state for columns to be hidden with actions
    const [columns, setColumns] = useState([]);

    // function to change the delete modal form visibilaity and set user id
    const onOpenModel = (id) => {
        setConfirmModalOpen(true)
        setSelectedUSerId(id)
    }

    // Close delete modal and reset user id
    const onCloseModal = () => {
        setConfirmModalOpen(false)
        setSelectedUSerId(null)
    }

    const hideColumnHandler = (columnData) => {
        let updatedColumn;

        if (columnData.checked) {

            updatedColumn = columns.filter(item => item !== columnData.value)
            setColumns([...updatedColumn])

        } else {

            const elmIdx = data?.map(item => Object.keys(item))[0].findIndex(item => item === columnData.value)

            const nextColumns = [
                ...columns.slice(0, elmIdx),
                columnData.value,
                ...columns.slice(elmIdx)
            ];

            setColumns(nextColumns)
        }

    }

    // Set column based on data object keys to control hide function
    useEffect(() => {

        if (data) {
            setColumns(getUserKeys(data))
        }

    }, [data]);

    // Handle component returned content
    if (!data) {

        return <p>Something went wrong!</p>

    } else if (data && data.length == 0) {

        return <p> There is no data yet!</p>
    }

    return (
        <>
            <table>
                <Thead data={data} columns={columns} action={hideColumnHandler} onFilter={onFilter} sortHandlder={onSort} />
                <Tbody data={data} columns={columns} onDeleteClick={(id) => onOpenModel(id)} onEdit={editHandler} getSelectedRows={getSelectedRows} />
            </table>

            {confirmModalOpen && <DeleteModal onConfirm={() => { onDelete(selectedUserId); onCloseModal() }} onClose={onCloseModal} />}
        </>
    )
}

export default Table