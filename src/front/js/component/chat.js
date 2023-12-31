import React, { useState, useEffect } from "react";
import { Loader } from "../component/loader";
const Chat = ({ horse, messages, postMessage, userInterestedId }) => {
  const [message, setMessage] = useState([]);
  const [loading, setLoading] = useState(false);
  const [messageInput, setMessageInput] = useState();
  const sendMessage = async (horse, message, userInterestedId) => {
    setLoading(true);
    messageInput.value = "";
    await postMessage(horse, message, userInterestedId);
    setLoading(false);
  };

  
  return (
    <>
      <div className="container text-center messagesBox">
        <div className="row borber border-bottom messagesTitle">
          <div className="col p-3 text-start">
            <span className="material-symbols-outlined align-center me-2">
              person
            </span>
            <span className="align-center">
              {!!userInterestedId
                ? messages[0].userOwner.name
                : horse.userOwner.name}
            </span>
          </div>
        </div>
        <div className="row mt-3 messages justify-content-start">
          <div className="d-flex justify-content-start align-items-stretch flex-column w-100">
            {messages.map((item) => {
              if (item.senderId === item.userOwnerId) {
                return (
                  <>
                    <div className="w-50 owner mb-2">{item.text}</div>
                  </>
                );
              } else
                return (
                  <>
                    <div className="w-50 interested mb-2">{item.text}</div>
                  </>
                );
            })}
            {loading && <Loader />}
          </div>
        </div>
        <div className="row messageToSend align-items-center border-top">
          <div className="col justify-content-end mt-3 me-2">
            <div className="row ">
              <div className="col-11 p-0">
                <input
                  type="message"
                  className="aling-items-center "
                  onChange={(e) => {
                    setMessage({ ...message, text: e.target.value });
                    setMessageInput(e.target);
                  }}
                ></input>
              </div>
              <div className="col-1 p-0">
                <span
                  className="material-symbols-outlined send"
                  id="send"
                  onClick={() => sendMessage(horse, message, userInterestedId)}
                >
                  send
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Chat;
