import styled from 'styled-components';
import Colors from '../../global/Color';
import { Button } from '../../layout/styles/Common';

export const UploadButton = styled(Button)`
  width: 70%;
  background-color: ${Colors.OceanGreen};
`;

export const HintText = styled.span`
  display: block;
  font-size: 12px;
  color: ${Colors.Grey};
  margin-bottom: 20px;
  &.error {
    color: ${Colors.Red};
  }
`;
export const StyledPContainer = styled.div`
  background-color: #eefbee;
  width: 50%;
  border-radius: 5px;
  margin: 0 auto;
  margin-bottom: 10px;
  height: 30px;
  display: flex;
  &.error {
    color: #c13838;
    border: 1px solid #fadbdb;
    background-color: #ffeded;
  }
`;
export const StyledP = styled.p`
  margin-top: 0;
  margin-bottom: 1rem;
  flex: auto;
`;
