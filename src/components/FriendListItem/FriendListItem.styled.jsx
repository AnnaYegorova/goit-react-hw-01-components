import styled from '@emotion/styled';

export const Item = styled.li`
  background-color: #f5f6f7;
  margin: 20px auto;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  width: 200px;
  height: auto;
  display: flex;
  align-items: center;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;
export const Status = styled.span`
  border-radius: 50%;
  margin-left: 8px;
  margin-right: 8px;
  width: 14px;
  height: 14px;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;
export const Avatar = styled.img`
  width: 40px;
  height: 40px;
`;
export const Name = styled.p`
  margin-left: 8px;
`;
