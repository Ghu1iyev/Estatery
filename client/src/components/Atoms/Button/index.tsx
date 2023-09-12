import { ReactNode, HTMLProps } from 'react';
import { styled } from 'styled-components';

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}


const Btn = ({ children, className, ...props }: ButtonProps) => {
  return (
    <Button {...props} className={className}>
      {children}
    </Button>
  );
};

export default Btn;

const Button = styled.button<ButtonProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1.5px solid var(--shades-of-purple-purple-94, #E8E6F9);
    background: var(--main-color-white, #FFF);
    border-radius: 8px;
`;
