import http.server
import socketserver
import sys
import os

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 3000

class Handler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

    def guess_type(self, path):
        if path.endswith('.js'):
            return 'application/javascript'
        if path.endswith('.css'):
            return 'text/css'
        if path.endswith('.svg'):
            return 'image/svg+xml'
        return super().guess_type(path)

socketserver.TCPServer.allow_reuse_address = True

# Try preferred port or find available port
for p in range(PORT, PORT + 20):
    try:
        with socketserver.TCPServer(("", p), Handler) as httpd:
            print(f"Server started at http://localhost:{p}")
            sys.stdout.flush()
            httpd.serve_forever()
            break
    except OSError:
        continue
