import { ispMetrics } from './isp-metrics';

export const datasetsByTab = {
  download: ispMetrics.map(isp => ({
    label: isp.label,
    data: isp.download,
    borderColor: isp.color,
    backgroundColor: isp.color,
    tension: 0.4,
    fill: false,
  })),
  upload: ispMetrics.map(isp => ({
    label: isp.label,
    data: isp.upload,
    borderColor: isp.color,
    backgroundColor: isp.color,
    tension: 0.4,
    fill: false,
  })),
  ping: ispMetrics.map(isp => ({
    label: isp.label,
    data: isp.ping,
    borderColor: isp.color,
    backgroundColor: isp.color,
    tension: 0.4,
    fill: false,
  })),
};
