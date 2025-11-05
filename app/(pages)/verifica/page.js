
export const metadata = { title: 'Verifica – Blockchain Food Trust' };
export default function Page() {
  return (
    <div className="container py-12">
      <h1 className="section-title">Verifica origine</h1>
      <p className="section-sub">Per verificare un prodotto scansiona il QR oppure visita la pagina di verifica.</p>
      <a className="btn btn-primary" href="https://verify.blockchainfoodtrust.com" target="_blank" rel="noreferrer">
        Vai alla verifica
      </a>
    </div>
  );
}
