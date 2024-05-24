import type { MetaFunction } from "@remix-run/node";
import Features from "~/components/Features";
import FeaturesBlocks from "~/components/FeaturesBlock";
import Hero from "~/components/Hero";
import WhyUs from "~/components/WhyUs";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <Hero />
      <Features />
      <FeaturesBlocks />
      <WhyUs />
    </>
  );
}
