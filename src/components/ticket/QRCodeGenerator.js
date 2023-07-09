import React from 'react';
import QRCode from 'qrcode.react';
const QRCodeGenerator = () => {
    const [url, setUrl] = React.useState('');
  
    
    // Function to handle changes in the input field
    const handleInputChange = (event) => {
      setUrl(event.target.value);
    };
    console.log(url)
    return (
      <div>
        <input type="text" value={url} onChange={handleInputChange} />
        <QRCode value={url} />
      </div>
    );
  };
  
  export default QRCodeGenerator;
  