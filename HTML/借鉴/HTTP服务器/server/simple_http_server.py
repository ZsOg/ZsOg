
from server.base_http_server import BaseHTTPServer


class SimpleHTTPServer(BaseHTTPServer):

    def __init__(self, server_address, handler_class):
        self.server_name = 'SimpleHTTPServer'
        self.version = 'v0.1'
        BaseHTTPServer.__init__(self, server_address, handler_class)


if __name__ == '__main__':
    from handler.simple_http_handler import SimpleHTTPRequestHandler
    SimpleHTTPServer(('127.0.0.1', 8888), SimpleHTTPRequestHandler).serve_forever()
