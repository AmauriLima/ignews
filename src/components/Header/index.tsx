import Logo from '../../assets/images/logo.svg';
import { Container, Content } from './styles';

function Header() {
  return (
    <Container>
      <Content>
        <Logo />
        <nav>
          <a className="active">Home</a>
          <a>Posts</a>
        </nav>
      </Content>
    </Container>
  );
}

export default Header;
