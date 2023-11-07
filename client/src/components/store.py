import sys


retrieve=sys.argv[1]

f=open("entries.txt","w")

for i in range(len(retrieve)):
    f.write([retrieve[i].entity,retrieve[i].details,retrieve[i].lat,retrieve[i].long,retrieve[i].batch])

f.close()