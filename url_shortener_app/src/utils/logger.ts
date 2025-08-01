export function log(message: string) {
  const entry = `[LOG - ${new Date().toISOString()}]: ${message}`;
  const logs = JSON.parse(localStorage.getItem('logs') || '[]');
  logs.push(entry);
  localStorage.setItem('logs', JSON.stringify(logs));
}