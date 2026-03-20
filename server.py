#!/usr/bin/env python3
"""
TrainEnglish dev server
Usage: python3 server.py [port]
Default port: 3000
"""

import sys
import os
import http.server
import socketserver
from datetime import datetime

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 3000
ROOT = os.path.dirname(os.path.abspath(__file__))

MIME = {
    ".html": "text/html; charset=utf-8",
    ".css":  "text/css; charset=utf-8",
    ".js":   "application/javascript; charset=utf-8",
    ".json": "application/json; charset=utf-8",
    ".yaml": "text/yaml; charset=utf-8",
    ".yml":  "text/yaml; charset=utf-8",
    ".md":   "text/markdown; charset=utf-8",
    ".png":  "image/png",
    ".jpg":  "image/jpeg",
    ".jpeg": "image/jpeg",
    ".svg":  "image/svg+xml",
    ".ico":  "image/x-icon",
    ".woff": "font/woff",
    ".woff2":"font/woff2",
    ".ttf":  "font/ttf",
}

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=ROOT, **kwargs)

    def guess_type(self, path):
        ext = os.path.splitext(str(path))[1].lower()
        return MIME.get(ext, "application/octet-stream")

    def log_message(self, fmt, *args):
        code = args[1] if len(args) > 1 else "???"
        method_path = args[0] if args else ""
        ts = datetime.now().strftime("%H:%M:%S")

        # Color codes
        if str(code).startswith("2"):
            color = "\033[32m"   # green
        elif str(code).startswith("3"):
            color = "\033[33m"   # yellow
        elif str(code).startswith("4"):
            color = "\033[31m"   # red
        else:
            color = "\033[0m"

        reset = "\033[0m"
        print(f"  {ts}  {color}{code}{reset}  {method_path}")

    def end_headers(self):
        # Allow file:// and localhost cross-origin (dev only)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Cache-Control", "no-store")
        super().end_headers()


class ReusableTCPServer(socketserver.TCPServer):
    allow_reuse_address = True


if __name__ == "__main__":
    os.chdir(ROOT)
    with ReusableTCPServer(("", PORT), Handler) as httpd:
        print(f"\n  \033[1mTrainEnglish dev server\033[0m")
        print(f"  ─────────────────────────────────")
        print(f"  Local:  \033[36mhttp://localhost:{PORT}\033[0m")
        print(f"  Root:   {ROOT}")
        print(f"  ─────────────────────────────────")
        print(f"  Ctrl+C to stop\n")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n\n  Server stopped.\n")
