import { describe, expect, test as spec } from 'bun:test';

import { sendMessage } from '#src';

describe('Send Message', () => {
  spec('Hello!', async () => {
    return sendMessage('Hello!').then((parameter) => {
      expect(parameter).toEqual('Hello!');
    });
  });
});
