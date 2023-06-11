import "./InputText.scss";
import classnames from "classnames";
export const InputText = ({
  placeholder = "",
  value = "",
  className = "",
  onChange = (value) => {},
}) => {
  const inputClass = classnames(`group-input-text w-full ${className}`);

  return (
    <div className={inputClass}>
      <input className="w-full" onChange={onChange} placeholder={placeholder} />
    </div>
  );
};
