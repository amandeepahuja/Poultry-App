# import sys


# retrieve=sys.argv[1]

from flask import Flask,request
from flask_cors import CORS, cross_origin
app = Flask(__name__)
import pyqrcode 
import png 
from pyqrcode import QRCode 
import json
from PIL import Image
import os

#Open image using Image module

 
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
    final_dict=list()
    with open("entries.txt","r") as f: 
        l=eval(f.read())

    for i in range(len(l)):
        a=l[i]
        if batchid==int(a[2]):
            result[i]=l[i]
    for i in result.values():
        final_dict.append({"Entity":i[0],"Details":i[1],"Batch ID":i[2],"Latitude":i[3],"Longitude":i[4],"Timestamp":i[5],"Address":i[6]})
    final_dict=json.dumps(final_dict)
    qrcode(final_dict)
    return final_dict

def qrcode(result):
    result=str(result)
    url = pyqrcode.create(result)
    url.png('myqr.png',scale=6)
    im = Image.open("myqr.png")
    rgb_im = im.convert('RGB')
    rgb_im.save('myqr_new.jpg')
    
app.run(debug=True)