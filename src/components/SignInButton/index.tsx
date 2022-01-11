import { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

import { Button } from './styles';

type IButtonProps = {
  [buttonType: string]: {
    color: string,
    label: string,
  },
}

export function SignInButton() {
  const [userStatus] = useState<'loggedIn' | 'loggedOut'>('loggedIn');

  const buttonProps = {
    loggedIn: {
      color: '#04d361',
      label: 'Diego Fernandes',
    },
    loggedOut: {
      color: '#eba417',
      label: 'Sign in with Github',
    },
  } as IButtonProps;

  return (
    <Button type="button">
      <FaGithub color={buttonProps[userStatus].color} />
      {buttonProps[userStatus].label}
      {userStatus === 'loggedIn' && (
        <FiX className="closeIcon" color="737380" />
      )}
    </Button>
  );
}
