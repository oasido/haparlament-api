import { FastifyRequest, FastifyInstance, RouteOptions, DoneFuncWithErrOrRes } from 'fastify';
import { strings } from '../strings.js';
import sampleSize from 'lodash/sampleSize.js';

type Params = FastifyRequest<{ Params: { amount: number } }>;

const SentencesRoute = (
  fastify: FastifyInstance,
  options: RouteOptions,
  done: DoneFuncWithErrOrRes
) => {
  fastify.get('/api/sentences/:amount', async (req: Params, res) => {
    const { amount } = req?.params;
    res.send(sampleSize(strings, amount));
  });

  done();
};

export default SentencesRoute;
