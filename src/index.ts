/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.toml`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
	async fetch(request, env, ctx): Promise<Response> {
		console.log(request);
		return Response.json({
			"message" : " first cloudfare worker running for me",
			"your city is" : request.cf?.city
		})
	},
} satisfies ExportedHandler<Env>;


// Question - Where is the express code? HTTP Server?
// Cloudflare expects you to just write the logic to handle a request. 
// Creating an HTTP server on top is handled by cloudflareCloudflare does not expect a routing library/http server out of the box. You can write a full application with just the constructs available above.