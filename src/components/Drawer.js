function Drawer(props) {
    return (
        <div className='overlay'>
            <div className='drawer'>
                <h2 className='mb-30 d-flex justify-between'>
                    Корзина
                    <img className="cu-p" onClick={props.onClose} src="./img/isremove.svg" />
                </h2>
                <div className='items'>
                    <div className='cartItem d-flex align-center mb-20'>
                        <img className="mr-20 ml-30" width={70} height={70} src="./img/sneakers/1.png" />
                        <div>
                            <p className='mb-5'> Мужские Кроссовки Nike Blazer Mid Suede </p>
                            <b> 12 999руб. </b>
                        </div>
                        <img className="removeBtn mr-20 ml-20" src="./img/isremove.svg" />
                    </div>

                    <div className='cartItem d-flex align-center mb-20'>
                        <img className="mr-20 ml-30" width={70} height={70} src="./img/sneakers/1.png" />
                        <div>
                            <p className='mb-5'> Мужские Кроссовки Nike Blazer Mid Suede </p>
                            <b> 12 999руб. </b>
                        </div>
                        <img className="removeBtn mr-20 ml-20" src="./img/isremove.svg" />
                    </div>
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