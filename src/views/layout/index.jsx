import React from 'react';
import NavBar from '../../components/NavBar';

const AppLayout = (props) => {
  
  return (
      <>
        <header>
            <NavBar {...props} />
        </header>
        <main>
           <section className="container">
                {props.children}
           </section>
        </main>
      </>
  );
};

export default AppLayout;
