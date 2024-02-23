import http from 'k6/http';
import { check } from 'k6';
import { Httpx, Get } from 'https://jslib.k6.io/httpx/0.1.0/index.js';
import { describe } from 'https://jslib.k6.io/expect/0.0.4/index.js';


export const options = {
  stages: [
    { duration: "5s", target: 1 },
  ],
}

const baseURL = `https://dummy.restapiexample.com`

const baseUrls = [
  `${baseURL}/api/v1/employees`,
  `${baseURL}/api/v1/employee/1`,
]

export default function () {
  baseUrls.forEach(function (url) {
    const res = http.get(url);
    check(res, {
      [`${url}search status was 200`]: (r) => r.status === 200 
    })
  });
}
