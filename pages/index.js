import { css } from '@emotion/react';
import styled from '@emotion/styled';

const shadowBorder = ({ width = '1px', color }) =>
  css`
    box-shadow: inset 0px 0px 0px ${width} ${color};
  `;

const StyledInput = styled.input`
  ${shadowBorder({ color: 'red', width: '4px' })}
`;

export default function IndexPage() {
  return <StyledInput />;
}
