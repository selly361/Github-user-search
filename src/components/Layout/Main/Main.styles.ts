import styled from "styled-components";

export const StyledMain = styled.main`
  background-color: ${(props) => props.theme.bgSecondary};
  width: 738px;
  min-height: 300px;
  border-radius: 14px;
  padding: 40px;
  display: flex;
  gap: 20px;


  path {
    fill: ${(props) => props.theme.textMidContrast};
  }
`;

export const ProfileImage = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50%;
`;
export const StyledArticle = styled.article`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  min-width: 481px;
  gap: 30px;
`;

export const TopSection = styled.section`
  display: grid;
  align-items: center;
  justify-content: space-between;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(2, auto);
  row-gap: 2px;
`;

export const UserStatsContainer = styled.div`
  background-color: ${(props) => props.theme.bg};
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 16px 32px;
  border-radius: 10px;
`;

export const UserStat = styled.div`
  display: flex;
  flex-flow: column;
`

export const Stat = styled.h2`
  color: ${props => props.theme.textHighContrast};
`

export const StatLabel = styled.h4`
  color: ${props => props.theme.textMidContrast};
  
`

export const Name = styled.h1`
  color: ${(props) => props.theme.textHighContrast};

`;

export const Joined = styled.time`
  color: ${(props) => props.theme.textLowContrast};

`;

export const Username = styled.h3`
  color: ${(props) => props.theme.primary};

`;

export const UserBio = styled.p`
  color: ${(props) => props.theme.textMidContrast};


  &.no-bio {
    opacity: .75;
  }
`;

export const UserLocation = styled.span`
  color: ${(props) => props.theme.textMidContrast};


  
  &.unavailable {
    opacity: .75;
  }
`;


export const UserLink = styled.a`
  color: ${(props) => props.theme.textMidContrast};

  &.unavailable {
    opacity: .75;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`


export const BottomSection = styled.section`
    display: grid;
    justify-content: space-between;
    align-items: flex-start;
    grid-template-columns: repeat(2, auto);
    grid-template-rows: repeat(2, auto);
    column-gap: 18px;
    row-gap: 18px;

`