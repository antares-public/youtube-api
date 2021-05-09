import styled from "styled-components";
import { connect } from "react-redux";
import { removeToken } from "../Actions/removeToken";

const Navbar: React.FC<{ removeToken: any }> = (props) => {
  const removeHandler = () => {
    localStorage.removeItem("user");
    props.removeToken();
  };

  return (
    <Menu>
      <div>
        <img
          src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
          width="50"
          alt="logo"
          style={{ paddingRight: "20px" }}
        />
        <Link href="#">Поиск</Link>
        <Link href="#">Избранное</Link>
      </div>
      <div>
        <Link onClick={() => removeHandler()}>Выйти</Link>
      </div>
    </Menu>
  );
};
export default connect(null, { removeToken })(Navbar);

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 150px;
`;

const Link = styled.a`
  display: inline;
  color: #1890ff;
  border-bottom: 1px solid transparent;
  transition: 0.5s;
  padding: 20px;
  font-weight: 600;

  &:hover {
    border-bottom: 1px solid #1890ff;
  }
`;
