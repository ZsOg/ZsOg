from server.socket_server import TCPServer


class BaseHTTPServer(TCPServer):

    def __init__(self, server_address, handler_class):
        self.server_name = 'BaseHTTPServer'
        self.version = 'v0.1'
        TCPServer.__init__(self, server_address, handler_class)
