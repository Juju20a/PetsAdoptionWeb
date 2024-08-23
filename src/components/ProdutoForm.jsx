import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const ProdutoForm = () => {
  let [formData, setFormData] = useState({
    titulo: '',
    descricao: '',
    valor: '',
    imagemUrl: '',
  });

  const handleChangeFormData = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormData({ ...formData, [name]: value });
    console.log(value);
  };

  return (
    <Form>
      {/* Título */}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Comenários</Form.Label>
        <Form.Control
          onChange={handleChangeFormData}
          value={formData.titulo}
          type="text"
          placeholder="Digite seu comentário"
          name="titulo"
        />
     
      
      
      </Form.Group>
      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
  );
};

export default ProdutoForm;
