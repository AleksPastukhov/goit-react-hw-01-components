import styled from '@emotion/styled';

export const UserStatistics = styled.section`
  margin-right: auto;
  margin-left: auto;
  margin-top: 20px;
  background-color: rgb(233, 233, 233);
  max-width: 800px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 1px 10px 1px rgba(0, 0, 0, 0.75);
`;

export const Title = styled.h2`
  font-size: 44px;
  color: rgb(84, 84, 84);
  text-transform: uppercase;
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: center;
  background-color: white;
`;

export const StatList = styled.ul`
  display: flex;
  width: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const StatItem = styled.li`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  flex-basis: calc(100% / 5);
  padding: 30px;
  border-top: 2px solid rgba(84, 84, 84, 0.458);
  background-color: ${() => {
    return (
      '#' +
      (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase()
    );
  }};
`;

export const Label = styled.span`
  margin-bottom: 8px;
  font-size: 24px;
  color: rgb(255, 255, 255);
  text-shadow: 1px 2px 3px #212121;
`;
export const Percentage = styled.span`
  font-size: 34px;
  color: rgb(255, 255, 255);
  text-shadow: 1px 2px 3px #212121;
  font-weight: 700;
`;
