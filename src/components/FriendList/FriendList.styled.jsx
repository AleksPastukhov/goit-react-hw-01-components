import styled from '@emotion/styled';

export const Friends = styled.ul`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  margin-bottom: 30px;
  background-color: transparent;
  width: 400px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
`;

export const Friend = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  background-color: rgb(243, 240, 240);
  box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.75);
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 5px;
  &: last-child {
    margin-bottom: 0;
  } ;
`;
