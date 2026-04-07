import DespesaSaida from '../components/despesa/DespesaSaida';
import DUMMY_DESPESAS from '../data/dummy-despesas';
import { getDateMinusDays } from '../util/date';

function DespesaRecentes() {
  const hoje = new Date();
  const dataLimite = getDateMinusDays(hoje, 7);

  const despesasRecentes = DUMMY_DESPESAS.filter((despesa) => {
    return despesa.data >= dataLimite && despesa.data <= hoje;
  });

  return (
    <DespesaSaida
      despesas={despesasRecentes}
      periodo="\u00daltimos 7 dias"
    />
  );
}

export default DespesaRecentes;
