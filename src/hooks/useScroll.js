//useInView serve para mostrar se um elemento está na tela ou não
import { useInView } from "react-intersection-observer";
//useAnimation serve para controlar as animaçoes baseadas num controle booleano.
import { useAnimation } from "framer-motion";

export const useScroll = () => {
  const [element, view] = useInView({ threshold: 0.2 });
  // explicando acima... o elemento é o item que será monitorado, sera feita uma referência no JSX, o view é o booleano que diz se o elemento é visível ou não.
  // O threshold é o quanto do elemento tem que estar visivel para ser considerado como visível.

  // então, se view for true, ou seja, o elemento estiver na tela, a animaçao estará no estado "show", caso contrário, estará no estado "hidden""
  const controls = useAnimation();
  if (view) {
    controls.start("show");
  } else {
    controls.start("hidden");
  }

  return [element, controls];
};
