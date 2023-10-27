import React, { useState } from 'react';
import { NextPage } from 'next';
import { linkStyles } from './styles';
import { LinkPropsInterface as Props } from './types';
import ChevronIcon from '@/src/assets/chevron.svg';
import Flex from '@/src/ui-kit/Flex';

const { StyledLink, Underline } = linkStyles;

const Link: NextPage<Props> = ({ hasMenu, href, title }) => {
  const [hovered, setHovered] = useState(false);

  const onMouseEnter = () => setHovered(true);
  const onMouseLeave = () => setHovered(false);
  return (
    <StyledLink
      href={href}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Flex flexDirection="row" justifyContent="flex-start" alignItems="center">
        {title}
        {hasMenu && <ChevronIcon />}
      </Flex>
      <Underline opacity={hovered ? 1 : 0} />
    </StyledLink>
  );
};

export default Link;
