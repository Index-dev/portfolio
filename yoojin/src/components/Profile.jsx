import React from "react";
import styled, { keyframes } from "styled-components";

const Profile = () => {
  return (
    <Wrapper>
      <Proflie>
        <Profileimage></Profileimage>
        <div className="personal_info">
          <div>Dev. Daisy (박유진)</div>
          <div>Java / Web Dev.</div>
          <div>010. 6477. 5919</div>
        </div>
      </Proflie>
      <Education>
        <div className="edu_item">
          <div>2010.03 ~ 2012.02</div>
          <div>동탄고등학교 졸업</div>
        </div>
        <div className="edu_item">
          <div>2013.03 ~ 2018.02</div>
          <div>동탄고등학교 졸업</div>
        </div>
        <div className="edu_item">
          <div>2017.05 ~ 2018.01</div>
          <div>멀티캠퍼스</div>
          <div>SAP HANA Cloud기반 IoT개발자 양성과정 이수</div>
        </div>
        <div className="edu_item">
          <div>2019.07 ~ 2020.06</div>
          <div>SSAFY</div>
          <div>삼성전자 소프트웨어 아카데미 이수</div>
        </div>
      </Education>
      <Career>
        <div>
          <span>2020.10~2020.12</span>
          <span>LH 전세임대 챗봇 구축</span>
        </div>
        <div>
          <span>2021.02~2021.06</span>
          <span>사내 리액트 세미나프로젝트</span>
        </div>
        <div>
          <span>2021.07~2021.08</span>
          <span>GitLab 세미나 발표</span>
        </div>
        <div>
          <span>2021.07~2022.03</span>
          <span>한국신용정보원 홈페이지개편 및 신규 프로젝트</span>
        </div>
      </Career>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  padding: 0.5rem;
`;

const Profileimage = styled.div`
  margin: 10px;
  width: 10rem;
  height: 10rem;
  background-color: #f36d5e;
`;

const Proflie = styled.div`
  display: flex;
  flex-flow: row;
  text-align: left;
  justify-content: center;
  align-items: center;
  .personal_info {
    div {
      margin: 1rem;
    }
  }
`;
const Education = styled.div`
  margin-top: 1rem;
  border: 1px solid #5e9cf3;
  padding: 1rem;
`;
const Career = styled.div`
  margin-top: 1rem;
  border: 1px solid #5e9cf3;
  padding: 1rem;
`;
export default Profile;
