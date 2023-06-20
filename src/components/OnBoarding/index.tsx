import { Fragment, useRef } from "react";
import {
  Button,
  ButtonSkip,
  ButtonSkipText,
  ContentWrapper,
  Description,
  Footer,
  Image,
  Pager,
  PagerIndicator,
  PagerIndicatorWrapper,
  Title,
} from "./styles";
import { Feather } from "@expo/vector-icons";

import { Header } from "../Header";

import Image1 from "../../assets/ob-1.png";
import Image2 from "../../assets/ob-2.png";
import Image3 from "../../assets/ob-3.png";
import Image4 from "../../assets/ob-4.png";
import PagerView from "react-native-pager-view";

const items = [
  {
    title: "Viva bem",
    description:
      "Conecte mente e corpo e melhore a sua qualidade de vida. Com o app Gooday você poderá monitorar" +
      "a sua ingestão de calorias, compartilhar suas rotinas de exercício e alimentação com os amigos" +
      "e encontrar restaurantes e eventos na sua região.",
    image: Image1,
  },
  {
    title: "Treine bem",
    description:
      "A atividade física é essencial para a prevenção de doenças crônicas, melhorar a qualidade do sono, promover" +
      "o bem-estar, melhorar o humor e muito mais. Se exercite e compartilhe a sua rotina com os amigos.",
    image: Image2,
  },
  {
    title: "Alimente-se bem",
    description:
      "Encontre restaurantes, eventos, avaliações e muitas dicas de como se alimentar de forma saudável" +
      "e equilibrada no nosso feed.",
    image: Image3,
  },
  {
    title: "Compartilhe",
    description:
      "Conecte-se com pessoas do mundo inteiro, faça novos amigos, compartilhem ideias, treinos," +
      "sugestões de restaurantes e datas de eventos. Chame os amigos para o Gooday! ",
    image: Image4,
  },
];

export function OnBoarding() {
  const onBoardingRef = useRef<null | PagerView>(null);
  function handleNextPage(index: number) {
    if (onBoardingRef.current) {
      if (index + 1 < items.length) {
        onBoardingRef.current.setPage(index + 1);
        return;
      }

      handleSkip();
    }
  }

  function handleSkip() {}

  return (
    <>
      <Header isFixed secondary />

      <Pager initialPage={0} ref={onBoardingRef}>
        {items.map((item, index) => (
          <Fragment key={`item-${index}`}>
            <Image source={item.image} />

            <ContentWrapper>
              <PagerIndicatorWrapper>
                {items.map((_indicator, indicatorIndex) => (
                  <PagerIndicator
                    isActive={indicatorIndex === index}
                    key={`indicator-${indicatorIndex}`}
                  />
                ))}
              </PagerIndicatorWrapper>

              <Title>{item.title}</Title>
              <Description>{item.description}</Description>

              <Footer>
                <Button onPress={() => handleNextPage(index)}>
                  <Feather name="arrow-right" size={42} color={"white"} />
                </Button>

                <ButtonSkip>
                  <ButtonSkipText>Pular</ButtonSkipText>
                </ButtonSkip>
              </Footer>
            </ContentWrapper>
          </Fragment>
        ))}
      </Pager>
    </>
  );
}
