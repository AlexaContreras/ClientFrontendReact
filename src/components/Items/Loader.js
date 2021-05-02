import React from 'react';
import ContentLoader from 'react-content-loader';

const Loader = (props) => (
  <ContentLoader
    width="100%"
    height={240}
    backgroundColor="#f5f5f5"
    foregroundColor="#dbdbdb"
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  >
    <rect x="4" y="8" rx="3" ry="3" width="7" height="225" />
    <rect x="6" y="230" rx="3" ry="3" width="100%" height="8" />
    <rect x="99.2%" y="9" rx="2" ry="0" width="17" height="225" />
    <rect x="32" y="32" rx="16" ry="16" width="180" height="180" />
    <rect x="240" y="120" rx="3" ry="3" width="450" height="20" />
    <rect x="80%" y="50" rx="3" ry="3" width="102" height="7" />
    <rect x="5" y="8" rx="3" ry="3" width="100%" height="7" />
    <rect x="240" y="41" rx="3" ry="3" width="200" height="29" />
  </ContentLoader>
);

export default Loader;
