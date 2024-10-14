import * as http from 'node:http';
import * as https from 'node:https';
import * as fs from 'node:fs';
import { promisify } from 'node:util';
import { safeDestr } from 'destr';

const writeFile = promisify(fs.writeFile);
// eslint-disable-next-line dot-notation
let url = `${Bun.env['NEXT_PUBLIC_API_URL']}`;

if (!url) {
  throw new Error('NEXT_PUBLIC_API_URL is not set');
}

url += '/api-json';

// Parse the URL to determine the protocol
const parsedUrl = new URL(url);
const getFunction = parsedUrl.protocol === 'https:' ? https.get : http.get;

getFunction(url, (res: any) => {
  let body = '';

  res.on('data', (chunk: Buffer) => {
    body += chunk.toString();
  });

  res.on('end', async () => {
    try {
      const fetchedJson = safeDestr(body);

      await writeFile('swagger.json', JSON.stringify(fetchedJson, null, 2));
      console.log('Successfully wrote Swagger JSON to swagger.json');
    } catch (error) {
      console.error('Error in parsing or writing JSON', error);
    }
  });
}).on('error', (error: Error) => {
  console.error('Got an error:', error);
});
