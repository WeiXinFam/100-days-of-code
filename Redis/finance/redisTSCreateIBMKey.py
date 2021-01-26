
import json
from user import data
import time
from datetime import datetime
from redistimeseries.client import Client 
rts = Client(host='127.0.0.1', port=6379)

rts.create('DAILYOPEN:IBM', labels={  'SYMBOL': 'IBM'
                             , 'DESC':'OPEN'
                             , 'TIMEFRAME': '1_DAY'
                             , 'COMPANYNAME': 'IBM'})



dtFmt = '%Y-%m-%d'
epoch = datetime(1970, 1, 1)

dict_price={}

for date in data['Time Series (Daily)']:
    for price_type in data['Time Series (Daily)'][date]:
        price_data = data['Time Series (Daily)'][date][price_type]
        add_price_data=( 'DAILYOPEN:IBM'
                        , int((datetime.strptime(str(date), dtFmt) - epoch).total_seconds()*1000)
                        , price_data)
        if price_type not in dict_price:
            dict_price[price_type]=[add_price_data]
        else:
            dict_price[price_type].append(add_price_data)

rts.madd(dict_price['1. open'])
