import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const TypewriterExample = () => {
  const [text] = useTypewriter({
    words: ['Hola Mundo!', '¡Bienvenido a mi portafolio!'],
    loop: true,
    delay: 1200,
  });

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', color: 'white' }}>
      <h2>
        {text}
        <Cursor />
      </h2>
    </div>
  );
};

export default TypewriterExample;

