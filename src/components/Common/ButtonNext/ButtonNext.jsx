import arrowNext from "assets/icons/arrow-next.svg";

export const ButtonNext = ({ name, link }) => {
  return (
    <>
      <button className="btn-navigate mr-2">{name}</button>
      <img src={arrowNext} />
    </>
  );
};
