import Navbar from "../Navbar";
import Header from "../Header";
import Footer from "../Footer";
import './index.css'
import EmergencyContacts from "../EmergencyContacts";

const WebsitePage=()=>{
    return(
        <div className="web-container">
            <Navbar/>
            <Header/>
            
            <Footer/>
        </div>
    )

}
export default WebsitePage;