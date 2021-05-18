import formatSeconds from "../utils/formatSeconds";

const formatTiempoTranscurrido = (duracion, transcurrido) => {
  const _transcurrido = formatSeconds(duracion - transcurrido);
  const _hh = _transcurrido.hh > 0 ? `${_transcurrido.hh}h` : "";
  const _min = _transcurrido.min > 0 ? `${_transcurrido.min}m` : "";
  const _seg = `${_transcurrido.seg}s`;

  return `${_hh} ${_min} ${_seg}`;
};

export default formatTiempoTranscurrido;
