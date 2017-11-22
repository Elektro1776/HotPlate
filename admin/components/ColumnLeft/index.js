import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './styles.css';

class ColumnLeft extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={`column_left ${styles.column_left}`}>
        {this.props.menus.map((menu, i) => (
          <div key={`${menu.name}`} className="menus">
            <ul>
              <li>{menu.name}</li>
              {menu.children ? (
                <ul>
                  {menu.children.map((child2) => (
                    <li key={`${child2.name}`}>
                      <Link to={child2.path}>{child2.name} </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </ul>
          </div>
        ))}
      </div>
    );
  }
}
ColumnLeft.defaultProps = {
  menus: [{ name: 'Dashboard' }, { name: 'Shop', children: [{ name: 'Products', path: '/admin/shop/products' }, { name: 'Categories', path: '/admin/shop' }] }],
};
ColumnLeft.propTypes = {
  menus: PropTypes.array.isRequired,
};

export default ColumnLeft;
