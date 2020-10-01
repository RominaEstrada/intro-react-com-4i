import React from 'react';

const Layout = ({ children }) => {
  console.log(children);
  return (
    <>
      <header>
        <h1>Soy un header</h1>
      </header>
      {children}
      <footer>
        <h2>Soy un footer</h2>
      </footer>
    </>
  );
}
 
export default Layout;

/*
<Layout>

</Layout>
*/