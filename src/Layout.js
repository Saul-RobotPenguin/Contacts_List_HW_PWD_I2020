import Contacts from "./components/Contacts";
import Data from "./data/contacts.json";
const Layout = () => {
  return (
    <>
      {Data.results.map((contact) => {
        return <Contacts ContactInfo={contact} />;
      })}
    </>
  );
};

export default Layout;
