import styled from 'styled-components';


export const NavWrapper = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 80px;
  @media (max-width: 870px){
    display: none;
  }
`;

export const Ul = styled.ul`
   display: flex;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  li {
   margin-right: 10px;
  }
  li > a {
    color: #fff;
    text-decoration: none;
     display: flex;
     align-items: center;
     padding: 10px;
     :hover {
       opacity: 0.7;
       color: blue;
       border-bottom: 2px solid blue;
     }
  }
  li > a > span {
    margin-left: 6px;
  }
`

export const BoxWrapper = styled.div`
  position: absolute;
  right: 0;
 @media (max-width: 411px){
  button {
    font-size: 8px;
    min-width: 10px;
    padding: 0 5px;
  }
 }
`

export const SideNav = styled.ul`
list-style-type: none;
margin: 0;
padding: 0;

li > a {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #000;
  padding: 10px;
  margin: 10px 0;
  :hover {
    background-color: #ccc;
    border-radius: 10px;
  }
}
`

export const cName = {
  borderBottom: '2px solid blue',
  opacity: '0.7',
  color: 'blue'
}