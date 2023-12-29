// Chat.js

import React, { useEffect } from 'react';
import tawkTo from 'tawkto';

const Chat = () => {
  useEffect(() => {
    // Replace 'YOUR_TAWKTO_WIDGET_KEY' with the actual widget key from your Tawk.to account
    const Tawk_API = tawkTo('657fdd7507843602b8031bb5/1hhtni50q');

    return () => {
      // Remove the Tawk.to widget when the component unmounts
      Tawk_API.remove();
    };
  }, []);

  return (
    <div>
      {/* Add any additional UI elements or styling for the chat component */}
    </div>
  );
};

export default Chat;

// <!--Start of Tawk.to Script-->
// <script type="text/javascript">
// var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
// (function(){
// var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
// s1.async=true;
// s1.src='https://embed.tawk.to/657fdd7507843602b8031bb5/1hhtni50q';
// s1.charset='UTF-8';
// s1.setAttribute('crossorigin','*');
// s0.parentNode.insertBefore(s1,s0);
// })();
// </script>
// <!--End of Tawk.to Script-->