import arrowNext from "assets/icons/arrow-next.svg";

export const ButtonNext = ({ name, link }) => {
  return (
    <div className="flex">
      <button className="btn-navigate mr-2">{name}</button>
      <img src={arrowNext} alt="arrow next" />
    </div>
  );
};
