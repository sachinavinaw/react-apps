import styled from "styled-components";
import { Color } from "../constants/Colors";
import { FontSize, FontWeight } from "../constants/Fonts";

type HelpButtonProps = {
    onClick?: () => void;
  };
  
  function HelpButton({ onClick }: Readonly<HelpButtonProps>) {
    return <HelpButtonContainer onClick={onClick}>?</HelpButtonContainer>;
  }
  export default HelpButton;
  
  const HelpButtonContainer = styled.span`
    background: ${Color.AxaBlue100};
    border: 1px solid ${Color.AxaBlue300};
    border-radius: 10px;
    color: ${Color.White};
    display: 'inline-block';
    font-size: ${FontSize.Small};
    font-weight: ${FontWeight.Bold};
    margin-left: 5px;
    padding: 1px 6px;
    text-align: 'center';
    cursor: pointer;
  `;
  