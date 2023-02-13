import styled from '@emotion/styled';

export const FriendStatus = styled.span`
  width: 30px;
  height: 30px;
  margin-right: 40px;
  margin-left: 30px;
  border-radius: 50%;
  background-color: ${isOnline => (isOnline.children ? 'red' : 'green')};
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  background-color: white;
  border-radius: 8px;
  margin-right: 20px;
  box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.75);
  padding: 3px;
`;

export const FriendName = styled.p`
  font-size: 34px;
  color: #212121;
`;
