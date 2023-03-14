// component แสดงรายละเอียดสินค้าแต่ละรายการ
import plus from '../../images/plus.svg'
import minus from '../../images/minus.svg'
import deleteicon from '../../images/delete-icn.svg'
import { MyCartContext } from '../../management/context'


const CartItem = ({id,name,image_url,price,quantity})=>{
    const {removeItem,toggleQuantity,formatNumber} = MyCartContext(id)
    return(
        <div className="item">
            <div className="product_image">
                <img src={image_url} alt=""/>
            </div>
            <div className="description">
                <span>{name}</span>
                <span>{formatNumber(price)} บาท</span>
            </div>
            <div className="quantity">
                <button className='plus-btn' onClick={()=>toggleQuantity(id,"increment")}>
                    <img src={plus} alt=""/>
                </button>
                <input type="text" value={quantity} disabled/>
                <button className='minus-btn'  onClick={()=>toggleQuantity(id,"decrement")}>
                <img src={minus} alt=""/>    
                </button>  
            </div>
            <div className='total-price'>
                {formatNumber(quantity * price)}
            </div>
            <div className='remove' onClick={()=>removeItem(id)}>
                <img src={deleteicon} alt=""/>
            </div>
        </div>
    )
}

export default CartItem;