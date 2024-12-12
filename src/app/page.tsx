import {PokedexGrid} from './components/PokeGrid';

export default function Home() {
  return (
    <main className="container mx-auto p-4 bg-slate-100">
        <h1 className='text-center text-3xl font-bold mb-4'>🐦‍🔥Pokémon</h1>
      <PokedexGrid />
    </main>
  );
}