import ActionsTh from "./ActionsTh";
import Th from "./Th";

const Thead = ({ data, columns, action, onFilter, sortHandlder }) => {

    const thElments = columns?.map((column, indx) => (

        <Th key={indx} text={column} onFilter={onFilter} sortHandlder={sortHandlder} />

    ))

    const initialColumns = data.map(col => Object.keys(col))[0]

    return (

        <thead>
            <tr>
                {thElments}
                <ActionsTh action={action} columns={initialColumns} />
            </tr>
        </thead>

    )

}

export default Thead;