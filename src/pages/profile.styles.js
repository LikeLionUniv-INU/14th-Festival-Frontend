import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  ///배경 수정 그라데이션 이상함
  background: linear-gradient(180deg, rgba(240, 140, 151, 0.25), #fff9e7 100%);
  box-sizing: border-box;
  padding-top: 60px;
  padding-bottom: 60px;
`;

export const Title = styled.h2`
  font-size: 40px;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
  margin-bottom: 60px;
`;

export const MainGuide = styled.div`
  font-family: "NEXON Lv1 Gothic", sans-serif;
  font-size: 22px;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
  margin-bottom: 14px;
`;

export const SubGuide = styled.div`
  font-family: "NEXON Lv1 Gothic", sans-serif;
  font-size: 14px;
  font-weight: 300;
  color: rgba(0, 0, 0, 1);
  margin-bottom: 42px;
  letter-spacing: -0.5px;
`;
/// 강아지만 높이 230px
export const AnimalImg = styled.img`
  width: 250px;
  height: auto;
  margin-bottom: 60px;
`;
export const AnimalName = styled.h2`
  width: 350px;
  height: 47px;
  font-weight: 400;
  font-size: 40px;
  text-overflow: ellipsis;
  text-align: center;
  margin-bottom: 46px;
`;

export const Button = styled.button`
  width: 312px;
  height: 60px;
  border: none;
  border-radius: 12px;
  padding: 16px 80px;

  background-color: rgb(125, 78, 40);
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);

  font-size: 24px;
  color: white;

  transition:
    transform 0.1s ease,
    box-shadow 0.1s ease;

  &:active {
    background-color: rgb(183, 124, 76);
    box-shadow: inset 2px 5px 5px rgba(0, 0, 0, 0.3);
  }
`;
