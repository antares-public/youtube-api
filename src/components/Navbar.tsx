import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import styled from "styled-components";

import { removeToken } from "../Actions/RemoveToken";

const Navbar: React.FC<{ removeToken: () => void }> = ({ removeToken }) => {
  return (
    <Menu>
      <div>
        <img
          src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
          width="50"
          alt="logo"
          style={{ paddingRight: "20px" }}
        />
        <NavLink
          to="/search"
          className="nav_link"
          activeClassName="link_active"
        >
          Поиск
        </NavLink>
        <NavLink
          to="/favorites"
          className="nav_link"
          activeClassName="link_active"
        >
          Избранное
        </NavLink>
      </div>
      <div>
        <button className="nav_link" onClick={() => removeToken()}>
          Выйти
        </button>
      </div>
    </Menu>
  );
};

export default connect(null, { removeToken })(Navbar);

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 55px;
  padding: 0 150px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(150, 150, 150, 0.5);
`;
