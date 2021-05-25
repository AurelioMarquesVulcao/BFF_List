import { Button, Flex, Heading, Input } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const InputItens = () => {
  const produtoStorage = localStorage.getItem("Produtos")

  const [quantidade, setQuantidade] = useState(0);

  const [valor, setValor] = useState(0);

  const [produto, setProduto] = useState("");

  const [item, setItem] = useState([
    {
      produto: "Pipoca",
      id: "1",
      valor: "4,67"
    },
    {
      produto: "Pão sem açucar",
      id: "2",
      valor: "6,67"
    }
  ]);

  useEffect(() => {
    localStorage.setItem("Produtos", JSON.stringify(item))
  }, []);

  function insereProduto() {}

  return (
    <Flex alignContent="center" margin="3">
      <Input
        placeholder="Inserir Produto"
        variant="filled"
        mb={3}
        type="text"
        onChange={(e: any) => setProduto(e.target.value)}
      />

      <Button marginLeft="2" onClick={() => setQuantidade(0)}>
        0
      </Button>
      <Button marginLeft="2" onClick={() => setQuantidade(quantidade + 1)}>
        + 1
      </Button>
      <Button marginLeft="2" onClick={() => setQuantidade(quantidade + 2)}>
        + 2
      </Button>
      <Button marginLeft="2" onClick={() => setQuantidade(quantidade + 3)}>
        + 3
      </Button>
      <Button marginLeft="2" onClick={() => setQuantidade(quantidade + 4)}>
        + 4
      </Button>
      <Button marginLeft="2">{quantidade}</Button>
      <Input
        placeholder="Valor Unit."
        variant="filled"
        mb={3}
        type="text"
        onChange={(e: any) => setValor(e.target.value)}
      />
      {/* <Flex>
        <br />
        <br />
        <br />
        {item.map((i: any) => (
          <ul key={i.id}>{i.produto} - {i.valor}</ul>
        ))}
      </Flex> */}
    </Flex>
  );
};

export default InputItens;
