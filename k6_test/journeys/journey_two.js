
import { Httpx, Get } from 'https://jslib.k6.io/httpx/0.1.0/index.js';
import { describe } from 'https://jslib.k6.io/expect/0.0.4/index.js';


export const options = {
  stages: [
    { duration: "3s", target: 1 },
  ],
}

const session = new Httpx({ baseURL: 'https://rickandmortyapi.com/api' });

export default function () {
  describe('check status for ricky and morty api', (t) => {
    const responses = session.batch(
      [
        new Get('/character'),
        new Get('/location'),
        new Get('/episode'),
      ],
    );

    responses.forEach((response) => {
      t.expect(response.status)
        .as('response status')
        .toEqual(200)
        .and(response)
        .toHaveValidJson()
        // .and(response.json('age'))
        // .as('croc age')
        // .toBeGreaterThan(7);
    });
  });
}