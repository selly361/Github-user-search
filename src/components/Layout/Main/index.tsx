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
  const formattedDate = joinedDate.toLocaleDateString("en-UK", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  const joined = `Joined ${formattedDate}`;

  const location = user?.location ? user.location : "Not Available";

  const twitter_username = user?.twitter_username
    ? user.twitter_username
    : "Not Available";

  const company = user?.company ? user.company : "Not Available";

  const bio = user?.bio ? user.bio : "This profile has no bio";

  return (
    <StyledMain>
      <ProfileImage src={user?.avatar_url} />
      <StyledArticle>
        <TopSection>
          <Name>{name}</Name>
          <Joined>{joined}</Joined>
          <Username>@{user?.login}</Username>
        </TopSection>
        <UserBio className={!user?.bio ? "no-bio" : ""}>{bio}</UserBio>
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
            <UserLocation className={!user?.location ? "unavailable" : ""}>
              {location}
            </UserLocation>
          </LinkContainer>
          <LinkContainer>
            <TwitterIcon />
            <UserLink className={!user?.twitter_username ? "unavailable" : ""}>
              {twitter_username}
            </UserLink>
          </LinkContainer>
          <LinkContainer>
            <WebsiteIcon />
            <UserLink href={user?.html_url}>{user?.html_url}</UserLink>
          </LinkContainer>
          <LinkContainer>
            <CompanyIcon />
            <UserLink className={!user?.company ? "unavailable" : ""}>
              {company}
            </UserLink>
          </LinkContainer>
        </BottomSection>
      </StyledArticle>
    </StyledMain>
  );
}

export default Main;
