import Link from 'next/link';

const linkStyle = {
  marginRight: 15
};

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

const Header = () => (
  <section style={layoutStyle}>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
  </section>
);

export default Header;