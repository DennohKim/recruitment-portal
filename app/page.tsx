import Hero from "./components/Hero";
import Images from "./components/Images";
import Jobs from "./components/Jobs";



export default async function Home() {
  return (
    <main >
      <Hero/>
      <Images/>
      <Jobs/>
    </main>
  );
}
