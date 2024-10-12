import { server } from './api';

const PORT = 3000;
const HOST = '0.0.0.0';

server.listen(PORT, HOST, () => {
  console.log(`Server is up and and running http://${HOST}:${PORT}`);
});