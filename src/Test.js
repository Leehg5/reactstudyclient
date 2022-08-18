import React, {useState} from 'react';
import './App.css';

function Text() {

const [content, setcontent] = useState("");
const [contentList, setcontentList] = useState([]);

const onSubmit = () => {
    let tempArr = [...contentList];
    tempArr.push(content);
    setcontentList([...tempArr]);
    setcontent(""); //초기화
};

return (
    <div className='b'>
        {contentList.map((content, idx) => {
            return <div key={idx}
            style={{
                marginTop: "1rem",
                width: "100%",
            }}>내용 : {content}</div>
        })}
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
        >
        제출</button>
    </div>
);
}

export default Text;