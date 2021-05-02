import React from 'react';
import ContentLoader from 'react-content-loader';

const ItemDetailLoader = (props) => (
  <ContentLoader
    width="100%"
    height="100%"
    backgroundColor="#f5f5f5"
    foregroundColor="#dbdbdb"
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  >
    <rect x="4" y="8" rx="3" ry="3" width="7" height="730" />
    <rect x="6" y="733" rx="3" ry="3" width="100%" height="6" />
    <rect x="99.2%" y="9" rx="2" ry="0" width="17" height="725" />
    <rect x="32" y="32" rx="16" ry="16" width="50%" height="400" />
    <rect x="60%" y="160" rx="3" ry="3" width="30%" height="40" />
    <rect x="32" y="490" rx="3" ry="3" width="90%" height="210" />
    <rect x="32" y="450" rx="3" ry="3" width="450" height="20" />
    <rect x="5" y="8" rx="3" ry="3" width="100%" height="7" />
    <rect x="60%" y="41" rx="3" ry="3" width="20%" height="20" />
    <rect x="60%" y="80" rx="3" ry="3" width="30%" height="29" />
    <rect x="60%" y="240" rx="3" ry="3" width="35%" height="40" />
  </ContentLoader>
);

export default ItemDetailLoader;
