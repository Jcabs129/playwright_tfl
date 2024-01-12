import http from 'k6/http';
import { check } from 'k6';

export const options = {
  stages: [
    { duration: "3s", target: 1 },
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

