import styled from '@emotion/styled';

export const Card = styled.div`
  background-color: #f5f6f7;
  width: 200px;
  height: auto;
  display: block;
  margin: 10px auto;
  padding-top: 20px;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
export const Description = styled.div`
  padding: 10px;
`;

export const Username = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #424241;
  font-weight: 700;
  font-size: 20px;
  margin-top: 16px;
  margin-bottom: 14px;
`;

export const Info = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #787877;
  font-weight: 400;
  font-size: 12px;
  margin: 6px;
`;

export const Photo = styled.img`
  display: block;
  margin: 0 auto;
  width: 150px;
  border-radius: 50%;
  background-color: #e4e6eb;
`;

export const Container = styled.div`
  background-color: #b2b5b8;
  margin: auto 0;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;
export const Stats = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;
export const ListStats = styled.li`
  font-weight: 200;
  font-size: 10px;
  padding: 8px;
  border: 1px solid #e4e6eb;
  text-align: center;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  width: calc(100% / 3);
`;
export const Label = styled.span`
  color: #787877;
  font-weight: 400;
  font-size: 12px;
`;

export const Quantity = styled.span`
  color: #424241;
  font-weight: 700;
  font-size: 12px;
  padding-top: 6px;
`;
