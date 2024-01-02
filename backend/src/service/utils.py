import json
import datetime

def adapterResponse(tuplas: tuple):

    claves = ["id", "origen", "destino", "fecha_salida", "fecha_llegada", "aerolinea", "precio", "reserved"]

    lista_diccionarios = []
    for tupla in tuplas:
        diccionario = {clave: valor if not isinstance(valor, datetime.datetime) else valor.strftime("%Y-%m-%d") for clave, valor in zip(claves, tupla)}
        lista_diccionarios.append(diccionario)

    json_resultante = json.dumps(lista_diccionarios)

    return json_resultante
