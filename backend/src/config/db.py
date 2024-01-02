import os
from dotenv import load_dotenv
from sqlalchemy import create_engine, MetaData

load_dotenv()
user = os.getenv('USER_DB')
password = os.getenv('PASS_DB')
domain = os.getenv('DOMAIN_DB')
port = os.getenv('PORT_DB')
table = os.getenv('TABLE_DB')

dbUri = f"mysql+pymysql://{user}:{password}@{domain}:{port}/{table}"

engine = create_engine(dbUri)

meta = MetaData()

conx = engine.connect()