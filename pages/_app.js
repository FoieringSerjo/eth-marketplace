import '../styles/globals.css';

const Noop = ({ children }) => <>{children}</>;

//* Everything rendered though _app.js
function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout ?? Noop;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
