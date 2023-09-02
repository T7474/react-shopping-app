import Item from './Item';
import useCart from '../context/CartContext';
export default function Cart(){
    const {products} = useCart()
    return (
        <div>
            <Item/>
            <Item/>
        </div>
    );
}