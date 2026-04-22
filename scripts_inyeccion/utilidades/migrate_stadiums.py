import os
import json

base_dir = r'c:\Users\gonza\futbolhistoria\clubes\app\src\data\clubes\uruguay'

for filename in os.listdir(base_dir):
    if filename.endswith('.json'):
        filepath = os.path.join(base_dir, filename)
        with open(filepath, 'r', encoding='utf-8') as f:
            data = json.load(f)
        
        datos = data.get('datos', {})
        if 'estadios' in datos:
            continue
            
        estadio = {
            'nombre': datos.get('estadio_actual', ''),
            'apodo': datos.get('estadio_apodo', ''),
            'capacidad': datos.get('estadio_capacidad', 0),
            'inauguracion': datos.get('estadio_inauguracion', ''),
            'direccion': datos.get('estadio_direccion', ''),
            'lat': datos.get('estadio_lat', 0.0),
            'lng': datos.get('estadio_lng', 0.0),
            'condicion': 'actual'
        }
        
        datos['estadios'] = [estadio]
        
        # Add historical stadiums for known clubs
        if filename == 'penarol.json':
            datos['estadios'].insert(0, {
                'nombre': 'Estadio Las Acacias',
                'apodo': 'Las Acacias',
                'capacidad': 12000,
                'inauguracion': '19 de abril de 1916',
                'direccion': 'Possolo 4097, Montevideo',
                'lat': -34.8252,
                'lng': -56.1432,
                'condicion': 'historico'
            })
        elif filename == 'nacional.json':
            pass # Nacional has basically always used Gran Parque Central.
        elif filename == 'liverpool.json':
            pass
            
        keys_to_remove = ['estadio_actual', 'estadio_apodo', 'estadio_capacidad', 'estadio_inauguracion', 'estadio_direccion', 'estadio_lat', 'estadio_lng']
        for k in keys_to_remove:
            if k in datos:
                del datos[k]
                
        with open(filepath, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
