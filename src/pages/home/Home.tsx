import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Tabela from "../../components/tabela/Tabela";
import { useAppSelector } from "../../store/hooks";

const Home: React.FC = () => {
  // const userLogado = useAppSelector((state) => state.userLogado);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (userLogado.id === null) {
  //     navigate("/login");
  //   }
  // }, [userLogado]);

  return (
    <>
      <Header />
      <Tabela />
    </>
  );
};

export default Home;
