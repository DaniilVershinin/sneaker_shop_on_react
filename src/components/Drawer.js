function Drawer({ onClose, onRemove, items = [] }) {
    return (
        <div className='overlay'>
            <div className='drawer'>
                <h2 className='mb-30 d-flex justify-between'>
                    Корзина
                    <img className="cu-p" onClick={onClose} src="./img/isremove.svg" />
                </h2>
                <div className='items'>

                    {items.map((obj) => (
                        <div className='cartItem d-flex align-center mb-20'>
                            <img className="mr-20 ml-30" width={70} height={70} src={obj.imageUrl} />
                            <div>
                                <p className='mb-5'> {obj.title} </p>
                                <b> {obj.price} руб. </b>
                            </div>
                            <img onClick={() => onRemove(obj.id)} className="removeBtn mr-20 ml-20" src="./img/isremove.svg" />
                        </div>
                    ))}
                </div>


                <div className='cardTotalBlock'>
                    <ul>
                        <li>
                            <span> Итог: </span>
                            <div> </div>
                            <b> 21498 руб. </b>
                        </li>
                        <li>
                            <span> Налог 5%: </span>
                            <div> </div>
                            <b> 1074 руб. </b>
                        </li>
                    </ul>
                    <button> Оформить заказ </button>
                </div>

            </div>
        </div>
    )
}

export default Drawer;