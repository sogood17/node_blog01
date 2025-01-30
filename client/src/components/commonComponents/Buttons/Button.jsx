import "./button.css"

const Button = ({text, onClick, size, variant, disabled, type}) => {
  const sizeClass= `button--${size}`;
  const variantClass =`button--${variant}`;
  const disabledClass = disabled? "disabled":"";

  return (
  <button
  type={type}
  onClick={onClick}
  className={`button ${sizeClass} ${variantClass} ${disabledClass}`}
  disabled={disabled}>
    {text}
  </button>
  );
}

export const PrimaryButton = (props) => <Button {...props} variant="primary" />

export const SecondaryButton = (props) => <Button {...props} variant="secondary" />

export const DangerButton = (props) => <Button {...props} variant="danger" />

export const PageButton = (props) => <Button {...props} variant="page" />

export const LinkButton = (props) => <Button {...props} variant="link" />

export default Button;