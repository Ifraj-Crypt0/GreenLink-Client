
import { useContext } from "react";
import Headers from "../COMPONENTS/Headers";
import AuthContext from "../CONTEXTS/AuthContext";
import Locked from "../COMPONENTS/locked";
import ExtraComponents from "../COMPONENTS/ExtraComponents";





const HomePage = () => {

  const { user } = useContext(AuthContext)
  return (

    <>
      <Headers></Headers>
      {
        !user ? <Locked></Locked> : <ExtraComponents></ExtraComponents>


      }
    </>

  );
};

export default HomePage;





//

