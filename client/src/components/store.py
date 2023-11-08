# import sys


# retrieve=sys.argv[1]

from flask import Flask,request
from flask_cors import CORS, cross_origin
app = Flask(__name__)
import pyqrcode 
import png 
from pyqrcode import QRCode 
import json
 
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
# Route for seeing a data
@app.route('/store',methods=['POST'])
def store_data():
    retrieve=request.json
    f=open("entries.txt","w")
    f.write(str(retrieve))
    f.close()
    return "Stored"

@app.route('/search',methods=['POST'])
def search_data():
    batchid=int(request.data)
    l=[]
    result={}
    with open("entries.txt","r") as f: 
        l=eval(f.read())
    for i in range(len(l)):
        a=l[i]
        if batchid==int(a[2]):
            result[i]=l[i]
    qrcode(result)
    return result

def qrcode(result):
    result=str(result)
    url = pyqrcode.create(result)
    url.png('myqr.png',scale=6)
    
app.run(debug=True)