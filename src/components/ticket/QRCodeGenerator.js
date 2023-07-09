import React from 'react';
import QRCode from 'qrcode.react';
function QRCodeGenerator({ url }) {
    return (
      <div>
        <h2>QR Code</h2>
        <QRCode value={url} />
      </div>
    );
  }
  
  export default QRCodeGenerator;
  