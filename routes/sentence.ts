import { DoneFuncWithErrOrRes, FastifyInstance, RouteOptions } from 'fastify';
import { strings } from '../strings.js';

const SentenceRoute = (
  fastify: FastifyInstance,
  options: RouteOptions,
  done: DoneFuncWithErrOrRes
) => {
  fastify.get('/api/sentence', async (req, res) => {
    try {
      const randomIndex = Math.floor(Math.random() * strings.length);
      res.send(strings[randomIndex]);
    } catch (error) {
      console.error(error);
      res.send('An error occurred.');
    }
  });

  done();
};

export default SentenceRoute;
