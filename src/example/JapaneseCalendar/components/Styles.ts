import styled, { css } from 'styled-components';
import { Color } from '../constants/Colors';
import Space from '../constants/Spaces';
import { FontSize } from '../constants/Fonts';

export const LabelContainer = styled.div`
  padding-bottom: 4px;
`;
export const FormLabel = styled.label`
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 4px;
`;

export const DropDown = styled.select`
  padding: 0px 6px;
  border: 1px solid rgb(204, 204, 204);
  border-radius: 4px;
  outline: none;
  height: 32px;
  min-width: 80px;
`;

export const TextInput = styled.input<{ width?: string; error?: boolean; disabled?: boolean }>`
  padding: 0px ${Space.Sp12};
  border: ${`solid 1px ${Color.Grey400}`};
  border-radius: ${Space.Sp4};
  &:focus {
    border: ${`solid 1px ${Color.AxaBlue300}`};
  }
  outline: none;
  height: ${Space.Sp32};
  width: 50px;

  &:focus {
    border: ${`solid 1px ${Color.AxaBlue300}`};
  }

  ${({ width }) => `width: ${width ?? 'unset'};`}
  ${({ error }) =>
    error &&
    css`
      border: ${`solid 1px ${Color.Red}`};
      background-color: #ffeeee;
      &:focus {
        border: ${`solid 1px ${Color.Red}`};
      }
    `}
`;
export const ErrorMessage = styled.span`
  color: ${Color.Red};
  font-size: ${FontSize.Small};
`;

export const Button = styled.button<{ disabled?: boolean; color?: string }>`
  height: 35px;
  min-width: 100px;
  border-radius: 3px;
  border: ${`solid 1px ${Color.Grey400}`};
  background-color: ${Color.AxaBlue300};
  color: ${Color.White};
  cursor: pointer;
`;

export const Container = styled.div<{ width?: string }>`
  display: flex;
  flex-direction: column;
  ${({ width }) => `width: ${width ?? 'unset'};`}
`;

export const FormRow = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
`;

export const FormContainer = styled.div`
  padding: 10px 20px;
`;
