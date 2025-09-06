export async function handler(event, context) {
  const responseBody = `
    <h1>函数工作正常！</h1>
    <p>你访问的路径是: ${event.request.url}</p>
    <p>当前时间: ${new Date().toISOString()}</p>
  `;
  return new Response(responseBody, {
    status: 200,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
    },
  });
}
