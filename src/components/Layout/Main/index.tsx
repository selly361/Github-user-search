import {
  BottomSection,
  Joined,
  LinkContainer,
  Name,
  ProfileImage,
  Stat,
  StatLabel,
  StyledArticle,
  StyledMain,
  TopSection,
  UserBio,
  UserLink,
  UserLocation,
  UserStat,
  UserStatsContainer,
  Username,
} from "./Main.styles";
import { CompanyIcon, LocationIcon, TwitterIcon, WebsiteIcon } from "assets";

import { IMainProps } from "types/main";
import React from "react";

function Main({ user }: IMainProps) {
  const name = user?.name ? user.name : user?.login;

  const joinedDate = new Date(user?.created_at ? user.created_at : "");
  const formattedDate = joinedDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  const joined = `Joined ${formattedDate}`;


  const bio = user?.bio ? user.bio : "This profile has no bio"

  return (
    <StyledMain>
      <ProfileImage src={user?.avatar_url} />
      <StyledArticle>
        <TopSection>
          <Name>{name}</Name>
          <Joined>{joined}</Joined>
          <Username>@{user?.login}</Username>
        </TopSection>
        <UserBio className={!user?.bio ? "no-bio" : ''}>{bio}</UserBio>
        <UserStatsContainer>
          <UserStat>
            <StatLabel>Repos</StatLabel>
            <Stat>{user?.public_repos}</Stat>
          </UserStat>

          <UserStat>
            <StatLabel>Followers</StatLabel>
            <Stat>{user?.followers}</Stat>
          </UserStat>

          <UserStat>
            <StatLabel>Following</StatLabel>
            <Stat>{user?.following}</Stat>
          </UserStat>
        </UserStatsContainer>
        <BottomSection>
          <LinkContainer>
            <LocationIcon />
            <UserLocation>{user?.location}</UserLocation>
          </LinkContainer>
          <LinkContainer>
            <TwitterIcon />
            <UserLink>{user?.twitter_username}</UserLink>
          </LinkContainer>
          <LinkContainer>
            <WebsiteIcon />
            <UserLink href={user?.html_url}>{user?.html_url}</UserLink>
          </LinkContainer>
          <LinkContainer>
            <CompanyIcon />
            <UserLink>{user?.company}</UserLink>
          </LinkContainer>
        </BottomSection>
      </StyledArticle>
    </StyledMain>
  );
}

export default Main;
