import { Button, DivList } from './styles';

const ListItem = ({ activity, deletar }) => {
  return (
    <DivList>
      <Button onClick={deletar}></Button>
      <span style={{ textAlign: 'center' }}>{activity}</span>
    </DivList>
  );
};

export default ListItem;
