import classes from './styles.module.css'
import Card from '../Card';

const Modal = ({ onConfirm, onClose, loading }) => {
    return (
        <div className={classes.overlay} onClick={(e) => { onClose() }}>

            <div className={classes.backdrop} onClick={(e) => { e.stopPropagation() }}>
                    <Card>
                        <p className={classes.text}>Are you sure to delete?</p>

                        <div className={classes.actions}>
                            <button className='btn' onClick={(e) => { onConfirm() }}>{loading ? 'submiting...' : 'Yes'}</button>
                            <button className={'btn danger'} onClick={onClose}>Cancel</button>
                        </div>

                    </Card>
            </div>

        </div>
    )
}



export default Modal