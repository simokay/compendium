import Head from "next/head";
import MonsterListStatic from '../../components/MonsterListStatic'
export default function Monsters() {
  return (
    <>
      <Head>
        <title>Compendium - Monsters</title>
      </Head>
      <main>
        <div>
          <div><button className="btn btn-primary">Monsters</button></div>
          <MonsterListStatic />
        </div>
      </main>
    </>
  );
}
