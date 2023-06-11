import './SelectBox.scss'
export const SelectBox = ({ options }) => {
    
  return (
    <div className="w-full select-box-container">
      {options?.length && (
        <select className="w-full">
          {options.map((item) => (
            <option value={item?.value}>{item?.label}</option>
          ))}
        </select>
      )}
    </div>
  );
};
