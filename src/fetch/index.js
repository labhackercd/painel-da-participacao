import axios from 'axios';

export default async function fetchDataFromApi(sessionDate) {
  const date = sessionDate;
  const url =  API_CD_EVENTOS_PLENARIO+"&dataInicio="+date+"&dataFim="+date+"&ordem=ASC&ordenarPor=dataHoraInicio";

  const response = await axios.get(url);
  return response.data;

}
