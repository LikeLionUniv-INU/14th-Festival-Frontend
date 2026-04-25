import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./profile.styles";
import GuideModal from "../components/modal/GuideModal";
import PopTransition from "../components/common/PopTransition.jsx";

import bear from "../assets/images/profile/bear.webp";
import monkey from "../assets/images/profile/monkey.webp";
import cat from "../assets/images/profile/cat.webp";
import chick from "../assets/images/profile/chick.webp";
import dinosaur from "../assets/images/profile/dinosaur.webp";
import dog from "../assets/images/profile/dog.webp";
import horse from "../assets/images/profile/horse.webp";
import rabbit from "../assets/images/profile/rabbit.webp";

const Profile = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [animalResult, setAnimalResult] = useState("");
  const [profileTag, setProfileTag] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  /** 생성된 프로필 조회 API */
  const handleProfile = async () => {
    try {
      const response = await axios.get("/api/profile");

      if (response.data.isSuccess) {
        setAnimalResult(response.data.result.animalType);
        setProfileTag(response.data.result.profileTag);
      }
    } catch (error) {
      const errorCode = error.response?.data?.code;

      if (errorCode === "USER_4011") {
        setErrorMsg("인증이 필요합니다.");
      }
      if (errorCode === "USER_4041") {
        setErrorMsg("생성된 프로필 정보를 찾을 수 없습니다.");
      }
    }
  };

  useEffect(() => {
    handleProfile();
  }, []);

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

  return (
    <PopTransition>
      <S.Container>
        <S.Title> 나는 ...</S.Title>
        <S.AnimalImg src={ANIMAL_MAP[animalResult]} />
        <S.AnimalName>{profileTag}</S.AnimalName>
        <S.MainGuide>매칭 결과는 18시에 공개됩니다!</S.MainGuide>
        <S.SubGuide>
          원활한 진행을 위해 인스타 계정을 '공개'로 설정해 주세요
        </S.SubGuide>
        <S.Button onClick={() => setIsModalOpen(true)}>결과 확인 방법</S.Button>
        <GuideModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </S.Container>
    </PopTransition>
  );
};

export default Profile;
