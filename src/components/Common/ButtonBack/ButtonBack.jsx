import arrowBack from "assets/icons/arrow-back.svg";

export const ButtonBack = ({ name, link }) => {
  return (
    <div className="flex">
      <img src={arrowBack} alt="arrow back" />
      <button className="btn-navigate ml-2">{name}</button>
    </div>
  );
};
