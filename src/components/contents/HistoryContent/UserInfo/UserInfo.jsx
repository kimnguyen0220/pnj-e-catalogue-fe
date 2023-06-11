import './UserInfo.scss';

export const UserInfo = ({
  id,
  status,
  name,
  address,
  phone,
  paymentMethod,
}) => {
  return (
    <div className="info-container flex flex-col gap-4">
      <div className="block-id flex flex-row gap-2">
        <h3>#{id}</h3>
        <div className="status-tag">{status}</div>
      </div>
      <div className="block-user flex flex-col gap-1">
        <div className="group-info flex justify-between">
          <label>Customer:</label>
          <span>{name}</span>
        </div>
        <div className="group-info flex justify-between">
          <label>Address:</label>
          <span>{address}</span>
        </div>
        <div className="group-info flex justify-between">
          <label>Phone:</label>
          <span>{phone}</span>
        </div>
        <div className="group-info flex justify-between">
          <label>Payment</label>
          <span>{paymentMethod}</span>
        </div>
      </div>
    </div>
  );
};
