import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { CometChatUIKit, UIKitSettingsBuilder } from "@cometchat/chat-uikit-react";

// /**
//  * CometChat Constants - Replace with your actual credentials
//  */
const COMETCHAT_CONSTANTS = {
  APP_ID: "2737806715563d9b", // Replace with your actual App ID from CometChat
  REGION: "in", // Replace with your App's Region
  AUTH_KEY: "1ffa2a4fdc613bcb1e3c76e68af32c36e2173b01", // Replace with your Auth Key (leave blank if using Auth Token)
};


// /**
//  * Configure the CometChat UI Kit using the UIKitSettingsBuilder.
//  * This setup determines how the chat UI behaves.
//  */
const UIKitSettings = new UIKitSettingsBuilder()
  .setAppId(COMETCHAT_CONSTANTS.APP_ID) // Assign the App ID
  .setRegion(COMETCHAT_CONSTANTS.REGION) // Assign the App's Region
  .setAuthKey(COMETCHAT_CONSTANTS.AUTH_KEY) // Assign the Authentication Key (if applicable)
  .subscribePresenceForAllUsers() // Enable real-time presence updates for all users
  .build(); // Build the final configuration

// /**
//  * Initialize the CometChat UI Kit with the configured settings.
//  * Once initialized successfully, you can proceed with user authentication and chat features.
//  */
CometChatUIKit.init(UIKitSettings).then(() => {
  console.log('CometChat UI Kit initialized');
  
  // Optional: log in a user before rendering
  CometChatUIKit.login('cometchat-uid-2') // Replace with valid UID
    .then(() => {
      ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
    })
    .catch((loginErr) => {
      console.error('Login failed', loginErr);
    });

}).catch(console.error);



