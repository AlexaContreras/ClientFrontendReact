import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../../Context/Context';
import styles from './Item.module.scss';
import freeShipping from '../../assets/free-shipping.png';

const Item = ({
  item: { id, title, location, price, picture, free_shipping },
}) => {
  const history = useHistory();
  const [state, setState] = useContext(AppContext);

  // The status change is set with the click event and the user is redirected to the desired view.
  const handleClick = () => {
    setState({ ...state, id });
    if (id === state.id) {
      history.push(`/items/${state.id}`);
    }
  };

  return (
    <div
      role='button'
      tabIndex={0}
      className={styles.link}
      onClick={handleClick}
    >
      <div className={styles.image}>
        <img src={picture} alt='product detail' />
      </div>
      <div className={styles.info}>
        <div className={styles.price}>
          {price.currency === 'ARS' ? '$ ' : 'U$S '}
          {price.amount}{price.decimals != '' ? `,${price.decimals}` : ''}
          {free_shipping && <img src={freeShipping} alt='free shipping' />}
        </div>
        <p className={styles.title}>{title}</p>
      </div>
      <div className={styles.info}>
        <p className={styles.location}>{location}</p>
      </div>
    </div>
  );
};

export default Item;

Item.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  item: PropTypes.object.isRequired,
};
