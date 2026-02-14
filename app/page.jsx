import Contacts from "@/components/Contacts/Contacts";
import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services/Services";
import Steps from "@/components/Steps/Steps";
import Team from "@/components/Team/Team";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Services/>
      <Steps/>
      <Team/>
      <Contacts />
    </div>
  );
}
