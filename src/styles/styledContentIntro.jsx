import { styled } from "styled-components";

//고정
export const Container = styled.div`
  width: 390px;
  height: 1425px;
  margin: 0 auto;
  background: #fff;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  background-color: black;
`;

//고정
export const Item = styled.div`
  margin-left: 12%;
  position: relative;
  z-index: 0;
`;

//뒤로가기 버튼
export const BackBtn = styled.button`
  width: 11px;
  height: 19px;
  background-image: url("/images/BackBtn.svg");
  background-color: transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  outline: none;
  margin-left: 10px;
  margin-top: 10px;
`;

//하단바 시작

export const NavBar = styled.div`
  width: 390px;
  height: 74px;
  flex-shrink: 0;
  border-radius: 20px 20px 0px 0px;
  border: 1px solid gray;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  bottom: 0;
  z-index: 999;
  display: flex;
  margin-left: -48px;
`;

export const NavBtnContainer = styled.div`
  display: column;
`;

export const NavIcon = styled.button`
  width: 21px;
  height: 39px;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  background-color: transparent;
  border: none;
  margin-left: 30px;
  margin-top: 11px;
  cursor: pointer;
  margin-right: 15px;
`;

export const NavText = styled.div`
  color: #fff;
  font-family: "Pretendard Variable";
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.715px;
  margin-left: 33px;
  margin-top: -5px;
`;

//하단바 끝

export const ExhibitPoster = styled.div`
  img {
    width: 290px;
    height: 360px;
    border-radius: 10px;
  }
`;

export const ExhibitTitle = styled.div`
  color: #fff;
  font-family: "Pretendard Variable";
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  margin-top: 10%;
  margin-left: 3%;
`;

export const ExhibitDetail = styled.div`
  color: #fff;
  font-family: "Pretendard Variable";
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 24px;
`;

//고정
export const PurpleBlur = styled.div`
  width: 185px;
  height: 184px;
  background-color: #a259ff;
  filter: blur(140px);
  margin-left: 16%;
  margin-top: -150px;
  position: relative;
  z-index: -1;
`;

export const CalendarIcon = styled.div`
  width: 18px;
  height: 18px;
  margin-bottom: 5px;
`;

export const InfoText = styled.div`
  color: #fff;
  font-family: "Pretendard Variable";
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  margin-top: -25px;
  margin-left: 25px;
`;

export const LocationIcon = styled.div`
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  margin-top: -20px;
`;

export const LocationText = styled.div`
  color: #fff;
  font-family: "Pretendard Variable";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  margin-top: -62px;
  margin-left: 5%;
  margin-bottom: 30px;
`;

export const BtnContainer = styled.div`
  display: flex;
`;

export const ScrapBtn = styled.button`
  width: 70px;
  height: 22px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-top: 10px;
  margin-left: 45%;
  h3 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 10px;
    font-style: normal;
    font-weight: 600;
    line-height: 160.5%;
    text-align: right;
    position: absolute;
    margin-top: -22px;
    margin-left: 53.5px;
  }
`;

export const ShareBtn = styled.button`
  width: 70px;
  height: 22px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-top: 10px;
  margin-left: 5px;
`;

export const goRecBtn = styled.button`
  width: 278px;
  height: 41px;
  flex-shrink: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const CommentIcon = styled.div`
  width: 18px;
  height: 17px;
  flex-shrink: 0;
  margin: 50px 0 0 -15px;
`;

export const CommentInputContainer = styled.div`
  display: flex;
  margin-top: 30px;
  gap: 5px;
  margin-bottom: 30px;
`;

export const ProfileImg = styled.div`
  width: 27px;
  height: 27px;
  flex-shrink: 0;
`;

export const CommentInput = styled.input`
  width: 240px;
  height: 29px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #000;
  color: #9c9c9c;
  font-family: "Pretendard Variable";
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  border: none;
  padding-left: 10px;
`;

export const CommentBtn = styled.button`
  width: 48px;
  height: 29px;
  flex-shrink: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-left: -61px;
`;

export const PinkBlur = styled.div`
  width: 185px;
  height: 184px;
  background-color: #fe3796;
  filter: blur(140px);
  position: relative;
  z-index: -1;
  margin-top: 70%;
`;

export const CommentContent = styled.div`
  color: #fff;
  font-family: "Pretendard Variable";
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;

export const CommentNickname = styled.div`
  color: #fff;
  font-family: "Pretendard Variable";
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;

export const CommentProfile = styled.div`
  img {
    width: 11px;
    height: 11px;
    margin-left: 45px;
    position: absolute;
    margin-top: -16px;
  }
`;

export const CommentDate = styled.div`
  color: #fff;
  font-family: "Pretendard Variable";
  font-size: 8px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  margin-left: 75%;
  position: absolute;
  margin-top: -25px;
`;

export const CommentLine = styled.div`
  width: 300px;
  height: 0px;
  flex-shrink: 0;
  border: 1px solid #281d36;
  margin-top: 5px;
  margin-left: -5px;
`;
