import { FlatList } from 'react-native';

import DespesaItem from './DespesaItem';

function renderDespesaItem(itemData) {
  const { item } = itemData;

  return <DespesaItem despesa={item} />;
}

function DespesaLista({ despesas }) {
  return (
    <FlatList
      data={despesas || []}
      renderItem={renderDespesaItem}
      keyExtractor={(item) => item.id}
    />
  );
}

export default DespesaLista;
