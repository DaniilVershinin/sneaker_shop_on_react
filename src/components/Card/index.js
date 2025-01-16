import React from "react";
import styles from "./Card.module.scss";
import ContentLoader from "react-content-loader"


function Card({ onFavorite, onPlus, imageUrl, title, price, loading = false }) {
    const [isAdded, setIsAdded] = React.useState(false);
    const [isAdd, setIsAdd] = React.useState(false);

    const onClickPlus = () => {
        onPlus({ imageUrl, title, price });
        setIsAdded(!isAdded);
    }

    const onClickLike = () => {
        setIsAdd(!isAdd);
    }

    return (<div className={styles.card}>

        {
            loading ? <ContentLoader
                speed={2}
                width={160}
                height={220}
                viewBox="0 0 145 220"
                backgroundColor="#dedede"
                foregroundColor="#ecebeb"

            >
                <rect x="0" y="0" rx="10" ry="10" width="138" height="116" />
                <rect x="0" y="127" rx="10" ry="10" width="138" height="15" />
                <rect x="0" y="145" rx="10" ry="10" width="92" height="15" />
                <rect x="1" y="190" rx="10" ry="10" width="80" height="25" />
                <rect x="101" y="183" rx="10" ry="10" width="32" height="32" />
            </ContentLoader> :
                <>
                    <div className={styles.favorite} onClick={onFavorite}>
                        <img onClick={onClickLike} src={isAdd ? "./img/islike.svg" : "./img/isnotlike.svg"} />
                    </div>
                    <img width={133} height={112} src={imageUrl} />
                    <h5> {title} </h5>
                    <div className='d-flex justify-between align-center'>
                        <div className='d-flex flex-column'>
                            <span> Цена: </span>
                            <b> {price} руб. </b>
                        </div>
                        <img className={styles.plus} onClick={onClickPlus} src={isAdded ? "./img/isbutton.svg" : "./img/plus.svg"} />
                    </div>
                </>
        }


    </div>
    )
}

export default Card;