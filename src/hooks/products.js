import CozinhaSolidariaImage from "assets/cozinha-solidaria.jpg";
import ArmazemDoCampoImage from "assets/armazem-campo.jpeg";
import CooperativaImage from "assets/cooperativa.jpg";
import ProdutorImage from "assets/produtor.jpg";
import EducacaoImage from "assets/escola.jpg";
import AssentamentoImage from "assets/assentamento.jpg";

const products = [
  { id: 1, title: "Cozinha solidária", slang: "cozinha-solidaria", summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit", image: CozinhaSolidariaImage },
  { id: 2, title: "Armazém do Campo", slang: "armazem-do-campo", summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit", image: ArmazemDoCampoImage },
  { id: 3, title: "Cooperativas", slang: "cooperativas", summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit", image: CooperativaImage },
  { id: 4, title: "Apoio ao pequeno produtor", slang: "apoio-pequeno-produtor", summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit", image: ProdutorImage },
  { id: 5, title: "Educação no campo", slang: "educacao-no-campo", summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit", image: EducacaoImage },
  { id: 6, title: "Assentamentos", slang: "assentamentos", summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit", image: AssentamentoImage }
];


export const useProducts = () => {
  return products;
}

export const useProduct = ({ slang }) => {
  return products.find(product => product.slang === slang);
}
