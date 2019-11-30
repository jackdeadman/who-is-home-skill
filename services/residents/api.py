from flask import Flask
app = Flask(__name__)

import residents

@app.route('/')
def index():
    return str(residents.is_online('192.168.1.79'))

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80)