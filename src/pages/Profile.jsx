import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./profile.styles";
import GuideModal from "../components/modal/GuideModal";

import bear from "../assets/images/profile/bear.png";
import monkey from "../assets/images/profile/monkey.png";
import cat from "../assets/images/profile/cat.png";
import chick from "../assets/images/profile/chick.png";
import dinosaur from "../assets/images/profile/dinosaur.png";
import dog from "../assets/images/profile/dog.png";
import horse from "../assets/images/profile/horse.png";
import rabbit from "../assets/images/profile/rabbit.png";

const Profile = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  ///테스트 용                       이거 단어 바꾸면 사진이랑 글 바꿀 수 있음
  const [animalResult, setAnimalResult] = useState("rabbit");
  const [interestResult, setInterestResult] = useState("여행");

  {
    /* 백엔드 연결용 동물 사진 
        useEffect(() => {
        const fetchResult = async () => {
            try {
                // const res = await axios.get('백엔드주소/result');
                // setAnimalResult(res.data.animalType); // 예: "rabbit"
            } catch (error) {
                console.error("데이터 가져오기 실패", error);
            }
        };
        fetchResult();
    }, []);
        */
  }
  {
    /* 백엔드 연결용 개인 맨트 
        useEffect(() => {
        const fetchResult = async () => {
            try {
                // const res = await axios.get('백엔드주소/result');
                // setAnimalResult(res.data.animalType); 
                // setInterestResult(res.data.interestType);
            } catch (error) {
                console.error("데이터 가져오기 실패", error);
            }
        };
        fetchResult();
    }, []);
         */
  }

  const ANIMAL_MAP = {
    monkey: monkey,
    rabbit: rabbit,
    horse: horse,
    dinosaur: dinosaur,
    chick: chick,
    bear: bear,
    cat: cat,
    dog: dog,
  };

  const ANIMAL_NAME_KR = {
    monkey: "원숭이",
    rabbit: "토끼",
    horse: "말",
    dinosaur: "공룡",
    chick: "병아리",
    dog: "강아지",
    cat: "고양이",
    bear: "곰",
  };

  const INTEREST_ADJECTIVE = {
    스포츠: "스포츠광",
    영화: "할리우드",
    반려동물: "집사",
    여행: "탐험하는",
    맛집탐방: "맛잘알",
    자기계발: "똑똑이",
    덕질: "마니아",
    음악감상: "음잘알",
    보드게임: "게이머",
  };

  return (
    <S.Container>
      <S.Title> 나는 ...</S.Title> {/*안전장치*/}
      <S.AnimalImg src={ANIMAL_MAP[animalResult] || ANIMAL_MAP.dog} />
      <S.AnimalName>
        {INTEREST_ADJECTIVE[interestResult]} {ANIMAL_NAME_KR[animalResult]}
      </S.AnimalName>
      <S.MainGuide>매칭 결과는 18시에 공개됩니다!</S.MainGuide>
      <S.SubGuide>
        원활한 진행을 위해 인스타 계정을 '공개'로 설정해 주세요
      </S.SubGuide>
      <S.Button onClick={() => setIsModalOpen(true)}>결과 확인 방법</S.Button>
      <GuideModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </S.Container>
  );
};

export default Profile;
