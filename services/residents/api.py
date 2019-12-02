from collections import namedtuple
from flask import Flask, jsonify

import residents

# TODO: Store this data in a DB. Separate Config service... 

Resident = namedtuple('Resident', [
    'name', 'ip'
])

residents_list = [
    Resident("Jack", "192.168.1.79"),
    Resident("Simon", "192.168.1.59"),
    Resident("Greg", "192.168.1.69"),
]


app = Flask(__name__)

@app.route('/')
def index():
    # TODO: Do check async
    return jsonify(
        residents=[
            {
                'name': resident.name,
                'active': residents.is_online(resident.ip)
            }
            for resident in residents_list
        ]
    )

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80, debug=True)