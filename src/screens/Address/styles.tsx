import styled from "styled-components/native";

type ButtonSelectIconProps = {
  isSelected?: boolean;
};

export const Container = styled.ScrollView`
  background-color: #e4eaee;
  position: relative;
  padding-right: 16px;
  padding-left: 16px;
`;

export const AddressCard = styled.View`
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 8px;
`;

export const CardDivider = styled.View`
  width: 100%;
  background-color: #d7d7d7;
  height: 1px;
  margin-top: 16px;
  margin-bottom: 16px;
`;

export const AddressCardHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const AddressCardTitle = styled.Text`
  font-size: 12px;
  font-weight: 700;
  line-height: 18px;
`;

export const ButtonSelectAddress = styled.TouchableOpacity`
  flex-direction: row;
  gap: 12px;
  align-items: center;
`;

export const ButtonSelectIcon = styled.TouchableOpacity<ButtonSelectIconProps>`
  width: 24px;
  height: 24px;
  background-color: ${(props) => (props.isSelected ? "#14c871" : "#E4EAEE")};
  align-items: center;
  justify-content: center;
  border-radius: 12px;
`;

export const Button = styled.TouchableOpacity``;

export const ButtonAddAddress = styled.TouchableOpacity`
  border-radius: 5px;
  border: 1px solid #d7d7d7;
  align-items: center;
  justify-content: center;
  height: 56px;
  margin-top: 58px;
`;

export const ButtonAddAddressText = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const AddressInfo = styled.View`
  gap: 16px;
`;

export const AddressStreet = styled.Text`
  font-size: 16px;
  line-height: 25px;
  font-weight: 700;
`;

export const AddressText = styled.Text`
  color: #737e86;
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
`;
