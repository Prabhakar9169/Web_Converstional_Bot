
import './App.css';
import React, { useState } from 'react';

function App() {
  const [showButtons, setShowButtons] = useState(false);
  const [showButtons1, setShowButtons1] = useState(false);
  const [showLearnContent, setShowLearnContent] = useState(false);
  const [showQuizContent, setQuizContent] = useState(false);
  const [showMemoryContent, setMemoryContent] = useState(false);
  const [showAskContent, setAskContent] = useState(false);
  const [showChatContent, setChatContent] = useState(false);


  
  const toggleButtons = () => {
    setShowButtons(!showButtons);
  };
  const toggleButtons1 = () => {
    setShowButtons1(!showButtons1);
  };

  const toggleLearnContent = () => {
    setShowLearnContent(!showLearnContent);
  };
  const toggleQuizContent = () => {
    setQuizContent(!showQuizContent);
  };
  const toggleMemoryContent = () => {
    setMemoryContent(!showMemoryContent);
  };
  const toggleAskContent = () => {
    setAskContent(!showAskContent);
  };
  const toggleChatContent = () => {
    setChatContent(!showChatContent);
  };


  return (
    <div>
      <div className='mainBtn'>
      <button className='webConversation' onClick={toggleButtons}>Web Conversation</button></div>
      {showButtons && (
        <div className='middleBtn'>
      <button className="additional-button"  onClick={toggleButtons1}>Study</button>

      {showButtons1 && (
        <div className='studyDiv'>
      <button className="study-childDiv" onClick={toggleLearnContent}>Learn</button>
      {showLearnContent && (
                <div className='learnContent'>
                  <div className='bot'>"What Do You Want To learn? If You Want to Go deep, Give me a more specific topic or concept"</div>
                  <textarea className='tex-area' placeholder="Input Box" />
                </div>
              )}
      <button className="study-childDiv" onClick={toggleQuizContent}>Quiz</button>
      {showQuizContent && (
                <div className='learnContent'>
                  <div className='bot'>"Give me a topic or concept, I will make a multiple choice question for you."</div>
                  <textarea className='tex-area' placeholder="Input Box" />
                </div>
              )}
      <button className="study-childDiv" onClick={toggleMemoryContent}>Memory Card</button>
      {showMemoryContent && (
                <div className='learnContent'>
                  <div className='bot'>"I can help you memorize anything, give me a more specific topic or concept i will send you a memory card."</div>
                  <textarea className='tex-area' placeholder="Input Box" />
                </div>
              )}
        </div>
      )}
      <button className="additional-button"  onClick={toggleAskContent}>Ask</button>
      {showAskContent &&(
          <div className='ask-childDiv'>
           <div className='bot'>"You are in ask Mode"</div>
                  <textarea className='tex-area' placeholder="Input Box" />

          </div>
      
      )}
      <button className="additional-button"  onClick={toggleChatContent}>Chat</button>
      {showChatContent &&(
          <div className='ask-childDiv'>
           <div className='bot'>"Work Like Chat-GPT."</div>
                  <textarea className='tex-area' placeholder="Input Box" />

          </div>
      
      )}
        </div>
      )}
    </div>
  );
}

export default App;
