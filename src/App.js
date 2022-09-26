import Form from "./components/Form";
import Input from "./components/Input";

export default function App() {
  console.log("teste");

  const handleSubmit = (data) => {
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit} scheme={{ name: "", email: "" }}>
      <Input label="Name" name="name" />
      <Input label="E-mail" name="email" />
      <button type="submit">Validar</button>
    </Form>
  );
}
