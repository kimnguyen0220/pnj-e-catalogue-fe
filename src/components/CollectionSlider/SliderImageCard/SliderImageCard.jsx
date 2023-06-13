import "./SliderImageCard.scss";
export const SliderImageCard = (props) => {
  const { data, dataIndex } = props;
  const { cover } = data[dataIndex];
  return (
    <div className="slider-image" style={{ backgroundImage: `url(${cover})` }}>
      <div>
        <img
          alt="slider-image"
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            borderRadius: 0,
          }}
          draggable={false}
          src={cover}
        />
      </div>
    </div>
  );
};
