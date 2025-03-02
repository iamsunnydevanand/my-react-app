import { useState, useEffect, useRef } from "react";
import "./agent.css";
import axios from "axios"; 

function Agent() {
  const [data, setData] = useState([]); 
  const [dev, setDev] = useState(""); 
  const chatRef = useRef(null); 
  const lastMessageRef = useRef(null);

  const jj = async () => {
    if (dev.trim() === "") return;

    try {
      const response = await axios.post(
        "http://localhost:8080/me", 
        { dev: dev }, 
        { headers: { "Content-Type": "application/json" } }
      );

      console.log("Response from backend:", response.data);

    
      setData((prevData) => [...prevData, { sender: "user", text: dev }, { sender: "bot", textt: response.data }]);

      setDev(""); 

    } catch (error) {
      console.error("Error sending message:", error.response || error.message);
    }
  };


  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [data]);

  return (
    <>
      <div className="Agent">
        <input
          type="text"
          placeholder="Type your query here"
          value={dev} 
          onChange={(e) => setDev(e.target.value)}
        />
        <button onClick={jj}>Send Message</button>
      </div>

      <div className="nn" ref={chatRef}>
        <div className="ds1"><span></span></div>
        <div className="ds1"><span></span></div>
        <div className="ds1"><span></span></div>
        <div className="ds1"><span></span></div>
        <div className="ds1"><span></span></div>
        <div className="ds1"><span></span></div>
        <div className="ds1"><span></span></div>
        <div className="ds2"><span>Hello sir, how can I help you today?</span></div>
        {data.map((message, index) => (
  <div 
    key={index} 
    className={`dh ${message.sender === "user" ? "user-message" : "bot-message"}`}
  >
    <span>{message.text || message.textt}</span>
  </div>
))}

        {}
        <div ref={lastMessageRef}></div>
      </div>
    </>
  );
}

export default Agent;
