import { ProfileImage, StyledMain } from './Main.styles'

import { GithubUser } from "types/github-data"
import { IMainProps } from "types/main"
import React from 'react'

function Main({ user }: IMainProps) {
  return (
    <StyledMain>
      <ProfileImage src={user?.avatar_url} />
    </StyledMain>
  )
}

export default Main