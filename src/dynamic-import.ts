// ChatInput.js
import React, { lazy, Suspense, useReducer } from "react";
import Send from "./icons/Send";
import Emoji from "./icons/Emoji";

// Dynamischer Import mit Code-Splitting
const EmojiPicker = lazy(() =>
  import(/* webpackChunkName: "emoji-picker" */ "./EmojiPicker")
);

const ChatInput = () => {
  const [pickerOpen, togglePicker] = useReducer(state => !state, false);

  return (
    <div className="chat-input-container">
      <input type="text" placeholder="Type a message..." />
      <Emoji onClick={togglePicker} />
      
      {/* Wird nur geladen, wenn nötig */}
      <Suspense fallback={<p>Lade Emoji-Picker...</p>}>
        {pickerOpen && <EmojiPicker />}
      </Suspense>

      <Send />
    </div>
  );
};

export default ChatInput;
