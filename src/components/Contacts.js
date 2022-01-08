import "./Contacts.css";
const Contacts = (props) => {
  const { ContactInfo } = props;
  return (
    <>
      <div className="imgContainer">
        <img src={ContactInfo.picture.large} />
        <div classname="Container">
          <h2>
            Name : {ContactInfo.name.first} {ContactInfo.name.last}
          </h2>
          <h3>Home : {ContactInfo.phone}</h3>
          <h3>Mobile : {ContactInfo.cell}</h3>
        </div>
      </div>

      <hr></hr>
    </>
  );
};

export default Contacts;
