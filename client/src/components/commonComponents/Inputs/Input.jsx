import "./input.css"

const Input = ({type, name, id, value, onChange, variant, placeholder}) => {
  return (
    <input type={type} name={name} id={id} value={value} onChange={onChange} className={variant} placeholder={placeholder} />
  )
}

export const TitleInput = (props) => <Input {...props} variant="title__input--large" />

export default Input;