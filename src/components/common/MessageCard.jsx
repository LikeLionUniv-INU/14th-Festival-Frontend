// 사자 이미지 있는 메시지카드 컴포넌트
// <MessageCard imageUrl="/assets/basicLion.png" text="김아현 바보" /> 이런 식으로 갖다쓰세요

import React, { useState, useEffect } from "react";
import styled from "styled-components";

const MessageCard = ({ imageUrl, text }) => {
  // 몇 번째 글자까지 보여줄지 상태로 관리
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!text) return;
    setCount(0); // 텍스트가 바뀌면 다시 0부터 시작

    const typingInterval = setInterval(() => {
      setCount((prev) => {
        // 목표 글자 수에 도달하면 타이머 정지
        if (prev >= text.length) {
          clearInterval(typingInterval);
          return prev;
        }
        return prev + 1;
      });
    }, 50);

    return () => clearInterval(typingInterval);
  }, [text]);

  return (
    <Container>
      <ProfileImage src={imageUrl} alt="캐릭터 이미지" />
      <TextBox>
        <MessageText>
          {text.split("").map((char, index) => (
            <span key={index} style={{ opacity: index < count ? 1 : 0 }}>
              {char}
            </span>
          ))}
        </MessageText>
      </TextBox>
    </Container>
  );
};

export default MessageCard;

// --- 스타일 ---
const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
  z-index: 2;
`;

const TextBox = styled.div`
  background-color: #ffffff;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  border: 1px solid #aa6734;

  margin-left: -25px;
  z-index: 1;
  display: flex;

  justify-content: center;
  align-items: center;

  width: 300px;
  height: 60px;
  box-sizing: border-box;
`;

const MessageText = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 900;

  text-align: center;
  line-height: 1.4;
  word-break: keep-all;
`;
