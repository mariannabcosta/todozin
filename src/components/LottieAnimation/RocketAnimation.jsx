import Lottie from "react-lottie";

import RocketAnimationJson from "../../assets/rocket.json";

export const RocketAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: RocketAnimationJson,
  };
  return <Lottie options={defaultOptions} width={300} height={300} />;
};
