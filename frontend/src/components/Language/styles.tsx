import styled from 'styled-components';
import { LanguageInititalsProps } from 'types/Language';

export const LayoutLanguage = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5;
  cursor: pointer;
`;

export const FlagSection = styled.div`
  margin-inline: 1rem;
  
  &:hover {
    text-decoration: underline;
  }
`;

export const Initials = styled.strong<LanguageInititalsProps>`
  color: ${(props) => props.initials === props.language && '#D3AA01'};
  margin-left: 0.5rem;
`;