import { cleanup } from '@testing-library/react';
import React, {useState, useEffect } from 'react';

function Upload(props) { //업로드를 정의

  const [content, setcontent] = useState("");

const onSubmit = () => {
    let tempArr = [...props.contentList];
    tempArr.push(content);
    props.setcontentList([...tempArr]);
    setcontent(""); //초기화
};
useEffect(() => {
  // 컴포넌트가 나타날 때 싱행 코드
  console.log("Content 컴포넌트가 나타났습니다!");
}, [content]);

  return (
    <div
    style={{
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
      width: "100%",
      marginTop: "1rem",
    }}>
      <input
        type="text"
        value={content}
        onChange={(e)=> {
            setcontent(e.currentTarget.value);
        }} //currentTarget :현재입력하는타겟
        />
        <button
        onClick={() => {
            onSubmit();
        }}
        style={{ margin: "1rem"}}
        >
        제출</button>

    </div>
  );
}

export default Upload;
