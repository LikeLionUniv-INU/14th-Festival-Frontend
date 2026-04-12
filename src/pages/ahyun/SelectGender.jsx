import React,{ useState } from 'react';
import {useNavigate} from 'react-router-dom'    
import *as S from './style/gender.style'; 

// 공통 버튼 불러오기 
import Button from '../../components/common/Button';
import MessageCard from '../../components/common/MessageCard';

const Gender = () => {
    const [selectedGender, setSelectedGender] = useState(null);
    const navigate = useNavigate();


return(
    <S.Container>
        <S.Guide>
            <MessageCard imageUrl="/assets/smallbasicLion.png" text="성별을 선택해 주세요" />
        </S.Guide>
        <S.BSection>
            <S.GenderButton
                onClick={() => setSelectedGender('male')}
                isSelected={selectedGender === 'male'}>
                남성
            </S.GenderButton>
            <S.GenderButton onClick={() => setSelectedGender('female')} 
            isSelected={selectedGender === 'female'}>
                여성
            </S.GenderButton>
        </S.BSection>
        <S.NButton>
            <Button onClick={() => navigate('jiyeon/complete')}>
                다음
            </Button>
        </S.NButton>
    </S.Container>
)}

export default Gender; 
