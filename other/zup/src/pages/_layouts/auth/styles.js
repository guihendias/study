import styled from 'styled-components';
import { lighten } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: ${`linear-gradient(-90deg, #310f32, ${lighten(0.1, '#310f32')})`};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 500px;
  text-align: center;

  header {
    display: flex;
    height: 60px;
    background: ${lighten(0.1, '#310f32')};
    box-shadow: 5px 5px 10px #111;
    justify-content: flex-start;
    padding-left: 20px;
    align-items: center;
    color: #fff;

    span {
      font-weight: 600;
    }
  }

  form {
    box-shadow: 5px 5px 10px #111;
    display: flex;
    flex-direction: column;
    padding: 20px;
    background: #eee;
    position: relative;

    input {
      width: 100%;
      background: rgba(0, 0, 0, 0.03);
      border: 0.1em solid #ddd;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      margin: 0 0 10px;

      &::placeholder {
        color: #aaa;
        font-weight: 600;
      }
    }

    span {
      color: #fb6f91;
      align-self: flex-start;
      font-weight: bold;
    }

    #btn-container {
      display: flex;
      flex: 1;
      margin-top: 8px;
      flex-direction: row;
      align-items: center;
    }

    button {
      height: 44px;
      width: 140px;
      background: ${lighten(0.1, '#310f32')};
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: #310f32;
      }
    }

    a {
      color: #aaa;
      font-weight: 600;
      margin-left: 30px;
      font-size: 16px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
