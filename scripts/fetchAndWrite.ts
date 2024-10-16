import { $ } from 'bun';

// eslint-disable-next-line dot-notation
let url = `${Bun.env['NEXT_PUBLIC_API_URL']}`;

if (!url) {
  throw new Error('NEXT_PUBLIC_API_URL is not set');
}

url += '/api-json';

// await $`rm ../src/types/schema.d.ts`;

await $`bunx openapi-typescript ${url} -o ../src/types/schema.d.ts`;
