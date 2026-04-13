import React,{ useState } from 'react';
import {useNavigate} from 'react-router-dom';    
import Button from '../../../components/common/Button';
import * as S from '../style/result.style';


const Result = () => { 
    const [instaId, setInstaId] = useState('');
    const [userNum, setUserNum] = useState('');
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false); 


return (
    <S.Container>
        <S.Content>
            <S.Img src="/assets/smallbasicLion.png" />
            <S.ResultTitle>
                결과 확인을 위해 <br/>본인 확인을 해주세요!
            </S.ResultTitle>
            <S.InputBox
                type="text" 
                placeholder="ex) @likelion_inu"
                value={instaId}
                onChange={(e) => setInstaId(e.target.value)}
            />
            <S.InputBox
                type="text" 
                placeholder="ex) 1234"
                value={userNum}
                onChange={(e) => setUserNum(e.target.value)}
            />
            <S.ButtonWrapper>
                <Button onClick={() => setIsModalOpen(true)}>결과 확인하기</Button>
            </S.ButtonWrapper>
        </S.Content>
    </S.Container> 
)}

export default Result;     