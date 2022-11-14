import styled from "styled-components";
import { FormButtonProps, FormSpanProps, FormInputProps, FormLabelProps } from "types/Form";

export const Strong = styled.strong`
  font-size: 2.5rem;
  text-align: center;
  width: 85%;
  height: 8rem;
  margin: 0 auto 2rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
`;

export const Span = styled.span<FormSpanProps>`
  color: var(--colorSecondary${(props) => props.theme});
  font-weight: bold;
  text-align: center;
  margin-bottom: 3rem;
  display: block;
`;

export const Input = styled.input<FormInputProps>`
  background: var(--background${props => props.theme});
  color: var(--colorPrimary${props => props.theme});
  height: 2.5rem;
  padding: 0.5rem 1rem;
  border-radius: 0.4rem;
  transform: translate(0rem 2.9rem) scale(1);
  transform-origin: top left;
  transition: 0.2s cubic-bezier(0, 0, 0.2, 1) 0s;
`;

export const Label = styled.label<FormLabelProps>`
  background: var(--background${props => props.theme});
  color: var(--colorPrimary${props => props.theme});
  font-size: 1.8rem;
  margin: 1rem;
  position: absolute;
  pointer-events: none;
  transition: 0.5s;
  opacity: 0.5;
`;

export const Column = styled.div`
  margin-bottom: 1.5rem;
  padding-inline: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: relative;

  &:focus-within ${Label},
  .filled {
    padding-inline: 2rem;
    transform: translate(0rem, -2rem) scale(0.8);
    transition: all 0.3s ease-in-out;
    opacity: 1;
  }
`;

export const Row = styled.div`
  margin-top: 5rem;
  padding-inline: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: right;
  gap: 1rem;
`;

export const Textarea = styled.textarea.attrs(props => ({
  theme: props.theme
}))`
  background: var(--background${props => props.theme});
  color: var(--colorPrimary${props => props.theme});
  border-radius: 0.4rem;
  padding: 1rem;
`;

export const Button = styled.input<FormButtonProps>`
  background: ${(props) => props.background};
  color: #FFFFFF;
  width: 10rem;
  height: 3rem;
  border-radius: 0.5rem;
  border: none;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;