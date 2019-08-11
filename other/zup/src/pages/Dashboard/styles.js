import styled from 'styled-components';

export const Container = styled.div`
  max-width: 980px;
  margin: auto;
`;

export const SignOutButton = styled.button`
  position: fixed;
  top: 8px;
  right: 8px;

  padding: 8px;
  border: 0;
  border-radius: 4px;
  background: #ddd;
`;

export const Filter = styled.input`
  width: 100%;
  height: 50px;
  margin-top: 50px;
  border-radius: 4px;
  padding: 0 15px;
  font-size: 18px;

  &::placeholder {
    color: '#ccc';
  }
`;

export const List = styled.ul`
  grid-template-columns: repeat(3, 1fr);
  list-style: none;
  display: grid;
  grid-gap: 30px;
  margin: 0 auto;
  padding: 50px 0;

  li {
    background: #fff;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    padding: 20px;

    img {
      align-self: center;
      width: 100%;
      border-bottom: 1px solid #eee;
    }

    > strong {
      font-size: 16px;
      line-height: 20px;
      color: #333;
      margin-top: 8px;
    }

    > span {
      font-size: 21px;
      font-weight: bold;
      margin-top: auto;
    }
  }
`;
