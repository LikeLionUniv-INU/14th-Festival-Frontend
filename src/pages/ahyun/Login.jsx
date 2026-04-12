import React,{ useState } from 'react';
import {useNavigate} from 'react-router-dom';    
import Button from '../../components/common/Button';
import * as S from './style/login.style';


const Login = () => { 
    const [instaId, setInstaId] = useState('');
    const [userNum, setUserNum] = useState('');
    const navigate = useNavigate();

return (
    <S.Container>
        <S.Content>
            <S.Img src="/assets/smallbasicLion.png" />
            <S.LoginTitle>
                인스타 ID와 본인확인용 숫자를 입력해주세요
            </S.LoginTitle>
            <S.InputBox
                type="text" 
                placeholder="ex) @likelion_inu"
                value={instaId}
                onChange={(e) => setInstaId(e.target.value)}
            />
            <S.GuideText> 원활한 진행을 위해 본인 계정을 입력해주세요 </S.GuideText>
            <S.InputBox
                type="text" 
                placeholder="ex) 1234"
                value={userNum}
                onChange={(e) => setUserNum(e.target.value)}
            />
            <S.GuideText> 숫자 4자리 </S.GuideText>
        </S.Content>
        <Button onClick={() => navigate('/main')}>입력완료</Button>
    </S.Container> 
)}

export default Login; 