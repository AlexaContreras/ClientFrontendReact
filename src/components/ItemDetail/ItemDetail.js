import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../../Context/Context';
import styles from './ItemDetail.module.scss';
export const ItemDetail = () => {

    const [state, setState] = useContext(AppContext);
    const { detail } = state;
    let detailToShow = null;

    if (detail !== null) {
        detailToShow = detail.item;
    }
    const { id } = useParams();
    useEffect(() => {

        setState({ ...state, id })

    }, [state.id])
    console.log(detailToShow);

    return (
        <>
        {detailToShow != null &&
        <div className={styles.itemDetailContainer}>
          
            <div className={styles.innerContainer}>
                <div className={styles.image}>
                    <img src={detailToShow.picture} />
                </div>
                <div className={styles.info}>
                    <p className={styles.condition}>{detailToShow.condition == "new" ? 'Nuevo ' : 'Usado '} - {detailToShow.sold_quantity} vendidos</p>
                    <h2 className={styles.title}>{detailToShow.title}</h2>
                    <p className={styles.price}>{detailToShow.price.currency === "ARS" ? '$ ' : 'U$S '}{detailToShow.price.amount}</p>
                    <button>Comprar</button>
                </div>
            </div>
            <div className={styles.description}>
                <h1>Descripción producto</h1>
                <p>{detailToShow.description}</p>
            </div>
        </div>
        }
        </>
    )
}
