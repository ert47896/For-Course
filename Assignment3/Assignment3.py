import urllib.request as request
import json
with request.urlopen("https://padax.github.io/taipei-day-trip-resources/taipei-attractions.json") as response:
    #data=response.read().decode("utf-8")
    data=json.load(response)
with open("data.txt","w+",encoding="utf-8") as output:
    for each_spot in data["result"]["results"]:
        first_url="http://"+each_spot["file"].split("http://")[1]
        combined_strings=",".join((each_spot["stitle"], each_spot["longitude"], each_spot["latitude"], first_url))
        output.write(combined_strings+"\n")
