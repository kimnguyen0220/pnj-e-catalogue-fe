import arrowBack from "assets/icons/arrow-back.svg";

export const ButtonBack = ({ name, link }) => {
  return (
    <>
      <img src={arrowBack} />
      <button className="btn-navigate ml-2">{name}</button>
    </>
  );
};
