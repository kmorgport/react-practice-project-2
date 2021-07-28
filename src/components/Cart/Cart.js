import classes from './Cart.module.css'
import Modal from '../UI/Modal'
const Cart = props =>{
    const cartItems = [{
        id: 'c1',
        name: 'Sushi',
        amount: 2,
        price: 12.99
    }].map((item)=> (
        <li>{item.name}</li>
    ))
    return (
        <Modal>
            {cartItems}
            <div>
                <span></span>
                <span></span>
            </div>
            <div className={classes.action}>
                <button className={classes['button--alt']} onclick={props.onClose}>
                    Close
                    </button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
}
export default Cart