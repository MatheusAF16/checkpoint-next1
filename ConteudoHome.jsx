import Link from "next/link"


export default function ConteudoHome() {
    return (
      <div className="conteudo-home">
        <h2 className="conteudo-title">Com o Seguro Bike da Porto Seguro, é pedalar e relaxar</h2>
        <p className="conteudo-text">
          O Seguro Bike é uma solução completa, que cuida não só da bicicleta e do ciclista, mas dos terceiros.
        </p>
        <p className="conteudo-text">
          São garantias e serviços pensados para cada modelo e perfil de cliente, com contratação simples e rápida, sem burocracia.
        </p>
        <div className="conteudo-links">
          <Link href='./cadastro' className="link-cadastro">Fazer Cadastro</Link> | <Link href='./login' className="link-minha-conta">Minha conta</Link>
        </div>
      </div>
    );
  }