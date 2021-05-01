import React from 'react';
import notFound from '../../assets/not-found.svg';
import styles from './NotFound.module.scss';
export const NotFound = () => {
    return (
        <div className={styles.container}>
            <div className={styles.grid}>
                <div className={styles.image}>
                    <img src={notFound} />
                </div>
                <div className={styles.info}>
                    <h1>No hay publicaciones que coincidan con tu búsqueda.</h1>
                    <ul>
                        <li><strong>Revisá la ortografía</strong> de la palabra.</li>
                        <li>Utilizá <strong>palabras más genéricas</strong> o menos palabras.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
