import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { FoldOut } from '../DropDowns';
import styles from './styles.scss';
import grid from '../../containers/styles/gridLayouts.scss';


class ColumnLeft extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldDrop: false,
    };
  }
  toggleDropDown = () => {
    this.setState({ shouldDrop: !this.state.shouldDrop });
  }
  render() {
    return (
      <aside className={`${grid.column_left}`}>
        {this.props.menus.map((menu, i) => (
          <div key={`${menu.name}`} className="menu">
            {/* Check if we got children here */}
            {/* Toggle DropDown if we click on  a nested menu else link to menu path */}
            {menu.children ? (
              <div className="child-menu">
                <div className="child-menu-item">
                  <button onClick={() => this.toggleDropDown()}>
                    {menu.name}
                  </button>
                </div>
                <TransitionGroup className="transition">
                  {menu.children.map((child2) => (
                    <FoldOut
                      key={child2.name}
                      shouldShow={this.state.shouldDrop}
                    >
                      <div className={`${styles.sub_child_menuItem}`}>
                        <Link to={child2.path}>
                          {child2.name}
                        </Link>
                      </div>
                    </FoldOut>
                  ))}
                </TransitionGroup>
              </div>
            ) : (
              <div className="child-menu-item">
                <div>
                  <Link to={menu.path}>
                    {menu.name}
                  </Link>
                </div>
              </div>
            )}
          </div>
        ))}
      </aside>
    );
    // <TodoList />
  }
}
ColumnLeft.defaultProps = {
  menus: [
    { name: 'Dashboard', path: '/admin' },
    { name: 'Shop',
      children: [
        { name: 'Products', path: '/admin/shop/products' },
        { name: 'Categories', path: '/admin/shop' }],
    },
    { name: 'Blog', path: '/admin' },
  ],
};
ColumnLeft.propTypes = {
  menus: PropTypes.array.isRequired,
};

export default ColumnLeft;
