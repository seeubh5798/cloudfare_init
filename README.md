
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.toml`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/

 * / Question - Where is the express code? HTTP Server?
// Cloudflare expects you to just write the logic to handle a request. 
// Creating an HTTP server on top is handled by cloudflareCloudflare does not expect a routing library/http server out of the box. You can write a full application with just the constructs available above.

#Commands:

* npm create cloudfare -- <appname>   - this goes for wrangler.toml file also.

* for deployment run:
* * npx wrangler login
  * npm run deploy  -- which internally runs
  *  wrangler deploy
 
* run npx wrangler whoami  -- for checking wrangler logged in details
