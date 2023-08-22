import Lottie from "react-lottie";
import RocketAnimationJson from "../../assets/rocket.json";
import { useEffect, useState } from "react";

export const RocketAnimation = () => {
  const [animationSize, setAnimationSize] = useState({
    width: 300,
    height: 300,
  });

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: RocketAnimationJson,
  };

  useEffect(() => {
    // Função para atualizar o tamanho da animação com base na largura da janela
    const updateAnimationSize = () => {
      const windowWidth = window.innerWidth;
      // Determine o tamanho da animação com base na largura da janela
      let newSize = { width: 300, height: 300 };
      if (windowWidth < 768) {
        newSize = { width: 150, height: 150 }; // Tamanho menor para telas menores
      }
      setAnimationSize(newSize);
    };

    // Adicione um ouvinte de redimensionamento para atualizar o tamanho da animação
    window.addEventListener("resize", updateAnimationSize);

    // Chame a função de atualização inicialmente
    updateAnimationSize();

    // Remova o ouvinte de redimensionamento quando o componente for desmontado
    return () => {
      window.removeEventListener("resize", updateAnimationSize);
    };
  }, []);

  return (
    <Lottie
      options={defaultOptions}
      width={animationSize.width}
      height={animationSize.height}
    />
  );
};
