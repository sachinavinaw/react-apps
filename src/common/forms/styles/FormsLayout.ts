import styled from 'styled-components';
import Colors from '../../global/Color';
import { Button } from '../../layout/styles/Common';

export const Container = styled.div`
  padding: 20px;
  border: 1px dotted rgb(173, 181, 189);
  margin-bottom: 15px;
  background: #fbfbfbad;
  border-radius: 8px;
`;
export const UploadButton = styled(Button)`
  width: 70%;
  background-color: ${Colors.OceanGreen};
`;

export const HintText = styled.span`
  display: block;
  font-size: 12px;
  color: ${Colors.Grey};
  font-weight: 500;
  &.error {
    color: ${Colors.Red};
  }
`;
export const StyledPContainer = styled.div`
  border-radius: 5px;
  margin: 0 auto;
  margin-bottom: 10px;
  height: 30px;
  display: flex;
  &.error {
    color: #c13838;
  }
`;
export const StyledP = styled.p`
  margin-top: 0;
  margin-bottom: 1rem;
  flex: auto;
  font-weight: 600;
  font-size: 15px;

  & span {
    margin-right: 5px;
    color: white;
    padding-left: 5px;
    background-color: ${Colors.Grey};
  }
`;
