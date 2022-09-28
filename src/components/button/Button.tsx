import * as s from './button.styles';

export type ButtonProps = {
  variant?: 'primary' | 'secondary';
  isFullWidth?: boolean;
};

const Button = ({ variant = 'primary', isFullWidth = false }: ButtonProps) => {
  return (
    <s.ButtonWrapper variant={variant} isFullWidth={isFullWidth}>
      botão topzera
    </s.ButtonWrapper>
  );
};

export { Button };
