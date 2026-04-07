import DespesaSaida from '../components/despesa/DespesaSaida';
import DUMMY_DESPESAS from '../data/dummy-despesas';

function TodasDespesas() {
  return <DespesaSaida despesas={DUMMY_DESPESAS} periodo="Total" />;
}

export default TodasDespesas;
