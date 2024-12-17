from flask_sqlalchemy import SQLALchemy 
from datatime import datatime

db = SQLALchemy()

class User(db.Model):
    id = db.Col