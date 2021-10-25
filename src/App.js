import {MdOutlineKeyboardArrowDown} from "react-icons/md";
import {FaMicrophone} from "react-icons/all";
function App() {
  return (
    <div className="container">
      <div className="chatbot">
       <nav className="navbar">
         <div className="left-side">
           <div className="circle"></div>
          <p>Axis AHA!</p>
         </div>
         <div className="right-side">
         <MdOutlineKeyboardArrowDown/>
         </div>
       </nav>
       <div className="right-sender">
       <div className="sender-side">
         Fund transfer
        </div>
        <div className="chat-circle"></div>
       </div>
       <div className="left-receiver">
        <div className="chat-circle"></div>
       <div className="receiver-side">
        Please select benificiary account
       </div>
      </div>
          <div className="right-sender">
          <div className="sender-side">
         Person Name
        </div>
        <div className="chat-circle"></div>
       </div>
       <div className="left-receiver">
        <div className="chat-circle"></div>
       <div className="receiver-side">
        Please enter the amount to transfer
       </div>
      </div>
          <div className="right-sender">
          <div className="sender-side">
          Rs.50,000
        </div>
        <div className="chat-circle"></div>
       </div>
      <div className="left-receiver">
        <div className="chat-circle"></div>
       <div className="receiver-side">
        Please select debit account
       </div>
      </div>
       <form>
         <input type="text" className="text">
         </input>
          <FaMicrophone className="mic"/>
       </form>
      </div>
    </div>
  );
}


export default App;

