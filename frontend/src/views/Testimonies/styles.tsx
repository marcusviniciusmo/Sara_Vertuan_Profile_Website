import styled from 'styled-components';
import { TestimoniesToggleProps, TestimoniesItemProps } from 'types/Testimonies';

export const Container = styled.ul`
  width: 30rem;
  height: 30rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
`;

export const Toggle = styled.div<TestimoniesToggleProps>`
  background: var(--background${(props) => props.theme === 'Dark' ? 'Light' : 'Dark'});
  color: var(--colorPrimary${(props) => props.theme === 'Dark' ? 'Light' : 'Dark'});
  width: 7.5rem;
  height: 7.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  font-size: 30rem;
  cursor: pointer;
  transition: 0.5s;
  z-index: calc(var(--max-z-index) + 1);

  &.testimoniesToggle.active {
    transform: rotate(315deg);
  }
`;

export const Item = styled.li<TestimoniesItemProps>`
  position: absolute;
  list-style: none;

  &.item${(props) => props.cardId} {
    transform: translate(0rem, 0rem);
    transition: 0.5s;
    opacity: 0;
  }

  &.item${(props) => props.cardId}:hover {
    z-index: var(--max-z-index);
  }

  &.active.item${(props) => props.cardId} {
    transform-origin: 14rem;
    transform: rotate(calc(
      360deg / ${(props) => props.length} * ${(props) => props.cardId})) translateX(4rem);
    transition: 0.5s;
    opacity: 1;
  }

  &.active.item1 {
    transform: translate(-56rem, -12rem);
  }

  &.active.item2 {
    transform: translate(-30rem, 15rem);
  }

  &.active.item3 {
    transform: translate(-2rem, -12rem);
  }

  &.active.item4 {
    transform: translate(25rem, 15rem);
  }

  &.active.item5 {
    transform: translate(52rem, -12rem);
  }
`;