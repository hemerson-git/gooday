import { useState } from "react";
import { Header } from "../../components/Header";
import Icons from "@expo/vector-icons/Feather";

import {
  AddressCard,
  AddressCardHeader,
  AddressCardTitle,
  AddressInfo,
  AddressStreet,
  AddressText,
  Button,
  ButtonAddAddress,
  ButtonAddAddressText,
  ButtonSelectAddress,
  ButtonSelectIcon,
  CardDivider,
  Container,
} from "./styles";

const addresses = [
  {
    id: "address-1",
    title: "Endereço casa",
    street: "Jardim das Flores",
    number: 3750,
    city: "Jundiaí",
    neighborhood: "Bairro Jardins",
    postalCode: 13238614,
    references: "Ao lado da empresa Máquinas e Acessórios",
  },
  {
    id: "address-2",
    title: "Endereço Trabalho",
    street: "Jardim Marsola",
    number: 157,
    city: "Jundiaí",
    neighborhood: "Vila Arena",
    postalCode: 13238612,
    references: "Ao lado do Mc Donald's",
  },
];

export function Address() {
  const [selectedAddress, setSelectedAddress] = useState(addresses[0].id);

  function handleSelectAddress(id: string) {
    setSelectedAddress(id);
  }

  return (
    <Container style={{ paddingTop: 46 }}>
      <Header />

      {addresses.map((address) => (
        <AddressCard key={address.id}>
          <AddressCardHeader>
            <ButtonSelectAddress
              onPress={() => handleSelectAddress(address.id)}
            >
              <ButtonSelectIcon isSelected={selectedAddress === address.id}>
                <Icons name="check" color="white" />
              </ButtonSelectIcon>

              <AddressCardTitle>{address.title}</AddressCardTitle>
            </ButtonSelectAddress>

            <Button>
              <Icons name="more-vertical" size={16} />
            </Button>
          </AddressCardHeader>

          <CardDivider />

          <AddressInfo>
            <AddressStreet>{`${address.street}, ${address.number} - ${address.city}`}</AddressStreet>
            <AddressText>{`${address.neighborhood}, ${address.postalCode}`}</AddressText>
            <AddressText>{address.references}</AddressText>
          </AddressInfo>
        </AddressCard>
      ))}

      <ButtonAddAddress>
        <ButtonAddAddressText>Novo endereço</ButtonAddAddressText>
      </ButtonAddAddress>
    </Container>
  );
}
