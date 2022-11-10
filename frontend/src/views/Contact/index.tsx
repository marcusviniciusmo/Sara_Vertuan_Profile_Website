import { Header } from "components/Header";
import { Sidebar } from "components/Sidebar"
import { Form } from "components/Form";
import { Budget } from "components/Budget";
import { Interface } from "styles/Interface";

export function Contact() {
  return (
    <div>
      <Header />

      <Sidebar />

      <Interface>
        <h1>CONTATO View</h1>
        <h4>Gostou do que  viu? Entre em contato e vamos conversar!</h4>
        <h5>CONFIRA MINHAS REDES SOCIAIS</h5>
        <h6>Facebook</h6>
        <h6>Instagram</h6>

        <Form />

        <Budget />
      </Interface>
    </div>
  );
};