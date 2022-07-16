import fastify, { FastifyRequest } from 'fastify';
import { sentences } from './sentences';
import sampleSize from 'lodash/sampleSize';

const server = fastify();

server.get('/ping', async (request, reply) => {
  return 'pong\n';
});

server.get('/api/sentence', async (request, reply) => {
  const randomIndex = Math.floor(Math.random() * sentences.length);
  reply.send(sentences[randomIndex]);
});

type Params = FastifyRequest<{ Params: { amount: number } }>;

server.get('/api/sentences/:amount', async (request: Params, reply) => {
  const { amount } = request?.params;
  reply.send(sampleSize(sentences, amount));
});

server.listen({ port: 3000 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
