import Hero from "@/components/Hero";
import SkillSection from "@/components/Skills";

export default async function Home() {
  await new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });
  return (
    <main>
      <Hero />
      <SkillSection />
    </main>
  );
}
