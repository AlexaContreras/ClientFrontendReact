import React from 'react';
import PropTypes from 'prop-types';
import styles from './Category.module.scss';

const Category = ({ categories }) => (
  <div className={styles.container}>
    <div className={styles.categories}>
      {categories.map((category) => (
        <>
          <span>{category.name}</span>
          <span className={styles.arrow}>{'>'}</span>
        </>
      ))}
    </div>
  </div>
);

export default Category;

Category.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
