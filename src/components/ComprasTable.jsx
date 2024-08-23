import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';

const ComprasTable = ({ produtos = [] }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>Título</th>
          <th>Descrição</th>
          <th>Animais para adoção</th>
        </tr>
      </thead>
      <tbody>
        {produtos.map((produto, i) => {
          return (
            <tr key={produto.id}>
              <td>{produto.id}</td>
              <td>{produto.titulo}</td>
              <td>{produto.descricao}</td>
              <td>{produto.animaisParaAdocao}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

ComprasTable.propTypes = {
  produtos: PropTypes.array,
};

export default ComprasTable;
