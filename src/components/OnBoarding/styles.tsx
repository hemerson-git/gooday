import styled from "styled-components/native";
import PagerView from "react-native-pager-view";
import { ViewProps } from "react-native";

type PagerIndicatorProps = ViewProps & {
  isActive?: boolean;
};

export const Pager = styled(PagerView)`
  flex: 1;
  position: relative;
  background-color: #14c871;
`;

export const PagerIndicatorWrapper = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 4px;
  margin-bottom: 13px;
`;

export const PagerIndicator = styled.View<PagerIndicatorProps>`
  height: 3px;
  background-color: ${(props) => (props.isActive ? "#14c871" : "#D7D7D7")};
  width: 36px;
  border-radius: 3px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 200px;
  object-fit: contain;
  flex: 1;
  margin-top: 32px;
  margin-bottom: 32px;
`;

export const ContentWrapper = styled.View`
  background-color: white;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
  padding-top: 40px;
  padding-right: 36px;
  padding-left: 36px;
  height: 48%;
`;

export const Title = styled.Text`
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 46.8px;
  margin-bottom: 10px;

  text-align: center;

  color: #14c871;
`;

export const Description = styled.Text`
  font-weight: 700;
  font-size: 12px;
  line-height: 19px;
  text-align: justify;
  color: #2e3e4b;
  margin-bottom: 11px;
`;

export const Button = styled.TouchableOpacity`
  background-color: #14c871;
  border-radius: 42px;
  width: 84px;
  height: 84px;
  align-items: center;
  justify-content: center;
  margin-bottom: 18px;
`;

export const ButtonSkip = styled.TouchableOpacity``;

export const ButtonSkipText = styled.Text`
  font-weight: 700;
  font-size: 12px;
  line-height: 19px;
  color: #2e3e4b;
`;

export const Footer = styled.View`
  align-items: center;
`;
