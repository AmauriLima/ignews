import { SignInButton } from '..';
import Logo from '../../assets/images/logo.svg';
import { Container, Content } from './styles';

export function Header() {
  return (
    <Container>
      <Content>
        <Logo />
        <nav>
          <a className="active">Home</a>
          <a>Posts</a>
        </nav>

        <SignInButton />
      </Content>
    </Container>
  );
}
