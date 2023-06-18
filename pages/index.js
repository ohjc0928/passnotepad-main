import React, { useState } from 'react';

const IndexPage = () => {
  const [passcode, setPasscode] = useState('');
  const [originalContent, setOriginalContent] = useState('');
  const [encryptedContent, setEncryptedContent] = useState('');
  const [decryptedContent, setDecryptedContent] = useState('');

  const handleEncrypt = () => {
    setEncryptedContent(encryptContent(originalContent, passcode));
  };

  const handleDecrypt = () => {
    setDecryptedContent(decryptContent(originalContent, passcode));
  };

  const handleLoad = () => {
    // 불러오기 버튼의 동작을 처리하는 함수를 구현하세요.
  };

  const encryptContent = (content, passcode) => {
    let result = '';
    const passLen = passcode.length;
    for (let i = 0; i < content.length; i++) {
      const passOffset = i % passLen;
      const charCode = content.charCodeAt(i) + passcode.charCodeAt(passOffset);
      const encryptedChar = String.fromCharCode(charCode);
      result += encryptedChar;
    }
    return result;
  };

  const decryptContent = (content, passcode) => {
    let result = '';
    const passLen = passcode.length;
    for (let i = 0; i < content.length; i++) {
      const passOffset = i % passLen;
      const charCode = content.charCodeAt(i) - passcode.charCodeAt(passOffset);
      const decryptedChar = String.fromCharCode(charCode);
      result += decryptedChar;
    }
    return result;
  };

  return (
    <div className="center top-relative" style={{ width: '600px', padding: '20px', textAlign: 'center' }}>
      <h2>로그인</h2>
      <div style={{ marginBottom: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <span style={{ marginRight: '10px' }}>사용자명:</span>
        <input type="text" style={{ width: '300px' }} />
      </div>
      <div style={{ marginBottom: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <span style={{ marginRight: '10px' }}>비밀번호:</span>
        <input type="password" style={{ width: '300px' }} />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <button style={{ marginRight: '10px' }}>로그인</button>
        <button>취소</button>
      </div>
      <div style={{ marginTop: '20px' }}>
        <h2>암호화된 노트패드</h2>
      </div>
      <div className="content voilet1" style={{ marginTop: '20px' }}>
        <span>암호화를 위한 비밀번호 입력</span>
        <input
          className="f15pt"
          type="password"
          id="passcode"
          placeholder="비밀번호"
          value={passcode}
          onChange={(e) => setPasscode(e.target.value)}
          style={{ width: '100%' }}
        />
      </div>
      <div className="content voilet2" style={{ marginTop: '20px' }}>
        <span>텍스트를 입력하세요</span>
        <textarea
          id="originalContent"
          value={originalContent}
          onChange={(e) => setOriginalContent(e.target.value)}
          style={{ width: '100%', height: '150px' }}
        ></textarea>
      </div>
      <div className="content voilet0" style={{ marginTop: '20px' }}>
        <span>암호화된 형태</span>
        <textarea
          id="encryptedContent"
          value={encryptedContent}
          readOnly
          style={{ width: '100%', height: '150px' }}
        ></textarea>
      </div>
      <div className="content voilet0" style={{ marginTop: '20px' }}>
        <span>복호화된 형태</span>
        <textarea
          id="decryptedContent"
          value={decryptedContent}
          readOnly
          style={{ width: '100%', height: '150px' }}
        ></textarea>
      </div>
      <div style={{ marginTop: '20px' }}>
        <button className="encrypt" onClick={handleEncrypt}>
          암호화
        </button>
        <button className="encrypt" onClick={handleDecrypt}>
          복호화
        </button>
        <button onClick={handleLoad}>불러오기</button>
      </div>
    </div>
  );
};

export default IndexPage;
