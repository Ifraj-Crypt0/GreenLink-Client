
import { useContext } from "react";
import Headers from "../COMPONENTS/Headers";
import AuthContext from "../CONTEXTS/AuthContext";
import Locked from "../COMPONENTS/locked";




const HomePage = () => {

  const { user } = useContext(AuthContext)
  return (

    <>
      <Headers></Headers>
      {
        !user? <Locked></Locked> : <>
        here goes more components
        </>
      }
    </>

  );
};

export default HomePage;





//

