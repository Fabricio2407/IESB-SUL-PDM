import { StyleSheet, Text, View } from 'react-native';

function DespesaSumario({ despesas, periodo }) {
  const somaDespesas = (despesas || []).reduce(
    (sum, despesa) => sum + despesa.valor,
    0
  );

  return (
    <View style={styles.container}>
      <Text style={styles.periodo}>{periodo}</Text>
      <Text style={styles.valor}>R$ {somaDespesas.toFixed(2)}</Text>
    </View>
  );
}

export default DespesaSumario;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    borderRadius: 6,
    backgroundColor: '#e4d9fd',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  periodo: {
    fontSize: 14,
    color: '#3c285e',
  },
  valor: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2a1c42',
  },
});
