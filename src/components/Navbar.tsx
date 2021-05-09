import styled from "styled-components";

export const Navbar: React.FC = () => {
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
        <Link href="#">Выйти</Link>
      </div>
    </Menu>
  );
};

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
