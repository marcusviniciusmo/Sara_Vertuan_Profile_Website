import styled from 'styled-components';
import * as Switch from '@radix-ui/react-switch';
import { ThemeRootProps } from 'types/Theme';

export const Root = styled(Switch.Root)<ThemeRootProps>`
  all: unset;
  box-shadow: 0 0.2rem 1rem var(--boxShadow${(props) => props.theme});
  background-color: rgb(0 0 0 / 0.9);
  width: 4.2rem;
  height: 2.5rem;
  margin-right: 4rem;
  border-radius: 10rem;
  position: relative;
  cursor: pointer;
  `;

export const Thumb = styled(Switch.Thumb)`
  background: var(--backgroundLight);
  width: 2.1rem;
  height: 2.1rem;
  border-radius: 10rem;
  box-shadow: 0 0.2rem 0.2rem rgb(0 0 0 / 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.1s;
  transform: translateX(0.2rem);
  will-change: transform;

  &[data-state="checked"] {
    transform: translateX(1.9rem);
  }

  .switchIconLightMode {
    color: var(--iconLightMode);
  }

  .switchIconDarkMode {
    color: var(--iconDarkMode);
  }
`;