import { Header } from "components/Header";
import { Sidebar } from "components/Sidebar"
import { SocialMedia } from "components/SocialMedia";
import { Form } from "components/Form";
import { Budget } from "components/Budget";
import { Interface } from "styles/Interface";

export function Contact() {
  return (
    <div>
      <Header />

      <Sidebar />

      <Interface className="contactInterface">
        <SocialMedia />

        <Form />

        <Budget />
      </Interface>
    </div>
  );
};