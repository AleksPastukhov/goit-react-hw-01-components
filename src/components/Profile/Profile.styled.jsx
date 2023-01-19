import styled from '@emotion/styled';

export const UserProfile = styled.div`
  width: 350px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  box-shadow: 0px 0px 300px 24px rgba(0, 0, 0, 0.28);
  border-radius: 10px;
`;

export const UserAvatar = styled.img`
  width: 150px;
  border-radius: 50%;
`;

export const UserName = styled.p`
  font-size: large;
  font-weight: 700;
  display: flex;
  justify-content: center;
`;

export const UserTag = styled.p`
  display: flex;
  justify-content: center;
  color: rgb(121, 119, 119);
`;

export const Location = styled.p`
  display: flex;
  justify-content: center;
  color: rgb(121, 119, 119);
`;

export const UserStats = styled.ul`
  width: 100%;
  margin: 0;
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  & li {
    border: 2px solid hsla(0, 1%, 33%, 0.47);
    width: 100%;
    margin: 0;
    box-shadow: inset 0px 0px 79px -66px rgba(0, 0, 0, 0.47);
    border-radius: 10px;
    transform: translateY(10px);
    background-color: #fff;
  }
`;

export const Label = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(121, 119, 119);
`;

export const Quantity = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: large;
  font-weight: 700;
`;
