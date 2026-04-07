import { Pressable, StyleSheet, Text, View } from 'react-native';

import { getFormattedDate } from '../../util/date';

function DespesaItem({ despesa, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.pressable, pressed && styles.pressed]}
    >
      <View style={styles.item}>
        <View>
          <Text style={styles.descricao}>{despesa.descricao}</Text>
          <Text style={styles.data}>{getFormattedDate(despesa.data)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.valor}>R$ {despesa.valor.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default DespesaItem;

const styles = StyleSheet.create({
  pressable: {
    marginVertical: 4,
  },
  pressed: {
    opacity: 0.75,
  },
  item: {
    padding: 12,
    borderRadius: 6,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  descricao: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
  },
  data: {
    color: '#666',
    marginTop: 4,
  },
  amountContainer: {
    minWidth: 80,
    alignItems: 'flex-end',
    backgroundColor: '#f1ecff',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
  },
  valor: {
    fontWeight: 'bold',
    color: '#5e3ea1',
  },
});
