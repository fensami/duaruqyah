"use-client";
import Categories from "./Components/Categories/Categories";
import Section from "./Components/Section/Section";
import Settings from "./Components/Settings/Settings";
export default function Home() {
  return (
    <div className="flex gap-4  mt-7">
      <Categories></Categories>

      <Section></Section>

      <Settings></Settings>
    </div>
  );
}
