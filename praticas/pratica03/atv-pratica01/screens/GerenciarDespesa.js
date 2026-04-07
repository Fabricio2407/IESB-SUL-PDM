import { useState } from 'react';
import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import { getFormattedDate } from '../util/date';

function GerenciarDespesa() {
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [data, setData] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  function abrirDatePicker() {
    setShowPicker(true);
  }

  function cancelarDatePicker() {
    setShowPicker(false);
  }

  function mudarData(event, selectedDate) {
    if (event.type === 'dismissed') {
      cancelarDatePicker();
      return;
    }

    setData(selectedDate || data);
    setShowPicker(false);
  }

  function salvarDespesa() {
    console.log('Despesa informada:', {
      descricao,
      valor,
      data: getFormattedDate(data),
    });
  }

  function cancelarFormulario() {
    setDescricao('');
    setValor('');
    setData(new Date());
    setShowPicker(false);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Descricao</Text>
      <TextInput
        style={styles.input}
        value={descricao}
        onChangeText={setDescricao}
        placeholder="Digite a descricao"
      />

      <Text style={styles.label}>Valor</Text>
      <TextInput
        style={styles.input}
        value={valor}
        onChangeText={setValor}
        placeholder="0.00"
        keyboardType="decimal-pad"
      />

      <Text style={styles.label}>Data</Text>
      <Pressable style={styles.dateBox} onPress={abrirDatePicker}>
        <Text style={styles.dateText}>{getFormattedDate(data)}</Text>
      </Pressable>

      {showPicker ? (
        <DateTimePicker value={data} mode="date" display="default" onChange={mudarData} />
      ) : null}

      <View style={styles.buttonsContainer}>
        <View style={styles.button}>
          <Button title="Cancelar" onPress={cancelarFormulario} color="#6b7280" />
        </View>
        <View style={styles.button}>
          <Button title="Salvar" onPress={salvarDespesa} />
        </View>
      </View>
    </View>
  );
}

export default GerenciarDespesa;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#222',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 16,
    fontSize: 16,
  },
  dateBox: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 14,
    marginBottom: 24,
  },
  dateText: {
    fontSize: 16,
    color: '#222',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    marginHorizontal: 4,
  },
});
