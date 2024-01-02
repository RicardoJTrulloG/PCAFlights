from sqlalchemy import Table, Column
from sqlalchemy.sql.sqltypes import String, Integer, Float, DateTime
from config.db import engine, meta

flights = Table("Flights", meta,
                Column("id", Integer, primary_key=True, autoincrement="auto"),
                Column("origin", String(255), nullable=False),
                Column("destination", String(255), nullable=False),
                Column("departure_date", String(255), nullable=False),
                Column("arrival_date", String(255), nullable=False),
                Column("airline", String(255), nullable=False),
                Column("price", Float, nullable=False),
                Column("is_reserved", Integer, nullable=False))

bookings = Table("Bookings", meta,
                 Column("id", Integer, primary_key=True, autoincrement="auto"),
                 Column("user_id", Integer, nullable=False,),
                 Column("flight_id", Integer, nullable=False, primary_key=False),
                 Column("booking_date", DateTime, nullable=False))

meta.create_all(engine)