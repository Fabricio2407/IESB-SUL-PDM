import { StyleSheet, Text, View } from 'react-native';

import DespesaLista from './DespesaLista';
import DespesaSumario from './DespesaSumario';

function DespesaSaida({ despesas, periodo, fallbackText }) {
  const despesasList = despesas || [];

  return (
    <View style={styles.container}>
      <DespesaSumario despesas={despesasList} periodo={periodo} />
      {despesasList.length > 0 ? (
        <DespesaLista despesas={despesasList} />
      ) : (
        <Text style={styles.fallbackText}>
          {fallbackText || 'Nenhuma despesa encontrada.'}
        </Text>
      )}
    </View>
  );
}

export default DespesaSaida;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f6f2ff',
  },
  fallbackText: {
    marginTop: 24,
    textAlign: 'center',
    color: '#666',
  },
});
