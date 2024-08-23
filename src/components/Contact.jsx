import { useOutletContext } from "react-router-dom";
import ProfileCard from "./ProfileCard";

const Contact=()=>{

    const { isCardVisible, handleCloseCard } = useOutletContext();
    return (
        <div className="contat-me">
            <h1>This is my contact me page</h1>


            <div >
  {
  isCardVisible && <ProfileCard onCloseCard={handleCloseCard}/>
}
</div>

        </div>
    )
}

export default Contact;