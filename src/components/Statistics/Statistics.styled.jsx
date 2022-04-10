import styled from '@emotion/styled';

export const CardStats = styled.section`
  background-color: #f5f6f7;
  margin: 20px auto;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: block;
  width: 200px;
  height: auto;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;

export const CardTitle = styled.h2`
  color: #424241;
  font-weight: 700;
  font-size: 20px;
`;
export const StatList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
  background-color: #b2b5b8;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;

export const Stat = styled.li`
  font-weight: 200;
  font-size: 10px;
  text-align: center;
  padding: 6px;
  border: 1px solid #e4e6eb;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  width: calc(100% / 5);
  height: 40px;
  background-color: ${function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }};
  color: white;
`;
export const Label = styled.span`
  font-size: 12px;
`;
export const Percentage = styled.span`
  font-size: 14px;
  font-weight: 500;
`;
