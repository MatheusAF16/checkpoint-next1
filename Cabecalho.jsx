import Link from "next/link";

export default function Cabecalho() {
  return (
    <header className="porto-seguro-header">
      <img className="porto-seguro-logo" src="./porto-logo.png" alt="Logo Porto Seguro" />
      <nav className="porto-seguro-nav">
        <Link href='/' className="porto-seguro-link">Home</Link> | 
        <Link href='/sobre' className="porto-seguro-link">Sobre nós</Link> | 
        <Link href='/servico' className="porto-seguro-link">Serviço</Link> | 
        <Link href='/servico/impressao' className="porto-seguro-link">Impressões</Link>
      </nav>
    </header>
  );
}

