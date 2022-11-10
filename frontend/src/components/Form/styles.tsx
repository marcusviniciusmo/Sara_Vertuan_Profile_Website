import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import styled from "styled-components";

interface InputProps extends InputHTMLAttributes<HTMLElement> {};
interface TextareaProps extends TextareaHTMLAttributes<HTMLElement> {};

interface ButtonProps {
  background?: string;
};

export const Strong = styled.strong`
  font-size: 2.5rem;
  text-align: center;
  text-transform: uppercase;
  display: block;
`;

export const Span = styled.span`
  color: var(--colorSecondary${(props) => props.theme});
  font-weight: bold;
  text-align: center;
  margin-block: 3rem;
  display: block;
`;

export const Column = styled.div`
  margin-bottom: 1.5rem;
  padding-inline: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Input = styled.input<InputProps>`
  height: 2.5rem;
  border-radius: 0.4rem;
  padding: 0.5rem 1rem;
  `;

export const Row = styled.div`
  padding-inline: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: right;
  gap: 1rem;
  `;

export const Textarea = styled.textarea<TextareaProps>`
  border-radius: 0.4rem;
  padding: 0.5rem 1rem;
`;

export const Button = styled.input<ButtonProps>`
  background: ${(props) => props.background};
  color: #FFFFFF;
  width: 10rem;
  height: 3rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;