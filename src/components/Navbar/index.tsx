import { useMemo } from "react";
import { Container, Item } from "./styles";
import { Link, Props } from "./types";

const Navbar = ({ type }: Props) => {

  const links = useMemo<Array<Link>>(() => {
    return [{
      label: "About me",
      url: '/about'
    }]
  }, [type])

  return (
    <Container>
      <Item>Bla</Item>
      <Item>Bla</Item>
      <Item>Bla</Item>
      <Item>Bla</Item>
    </Container>
  )
}

export default Navbar