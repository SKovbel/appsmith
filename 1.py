# script for import orders from queare to magento mysql
import json
import time
import requests
from datetime import date, timedelta

connections = 0

def sqlQuery(query):
    try:
        query = query +";\n" + "COMMIT;\n"
        # return execute_query(1, query) # qa
        return execute_query(6, query) # prod
        #return execute_query(16, query)
        # print(query)
    except Exception as ex:
        print(ex)

def toNumber(value):
    try:
        return int(value)  # Try converting the string to a float
    except ValueError:
        return value  # Conversion failed

def normalize(data):
    global toNumber
    result = {}
    for row in data['rows']:
        result[row['Variable_name']] = toNumber(row['Value'])
    return result

def makeRow(name, a, b):
    global connections
    diff = 0 if a == 0 else (b - a) / a
    return {
        'Name': name,
        'A': a,
        'B': b,
        'Diff': b - a,
        'Per second': (b - a) / int({{seconds}}),
        'Per connection': (b - a) / connections,
        'Var': str(round(diff, 2)) + '%'
    }


# add dates to result
result = {
    'columns': [
        {"name": "Name", "type": "string"},
        {"name": "A"},
        {"name": "B"},
        {"name": "Diff"},
        {"name": "Per second"},
        {"name": "Per connection"},
        {"name": "Var", "type": "number"}
    ],
    'rows': []
}

statusA = normalize(sqlQuery('show global status'))
time.sleep({{seconds}})
statusB = normalize(sqlQuery('show global status'))
connections = int(statusB.get('Connections')) - int(statusA.get('Connections'))


result['rows'].append(makeRow(
    'Connections', 
    statusA.get('Connections'),
    statusB.get('Connections')
))

result['rows'].append(makeRow(
    'Queries', 
    statusA.get('Questions'),
    statusB.get('Questions')
))

result['rows'].append(makeRow(
    'Cache hits', 
    statusA.get('Qcache_hits'),
    statusB.get('Qcache_hits')
))

result['rows'].append(makeRow(
    'Cache miss', 
    statusA.get('Qcache_inserts'),
    statusB.get('Qcache_inserts')
))

result['rows'].append(makeRow(
    'Created tmp files', 
    statusA.get('Created_tmp_files'),
    statusB.get('Created_tmp_files')
))

result['rows'].append(makeRow(
    'Created tmp tables (all)', 
    statusA.get('Created_tmp_tables'),
    statusB.get('Created_tmp_tables')
))

result['rows'].append(makeRow(
    'Created tmp tables (on disk)', 
    statusA.get('Created_tmp_disk_tables'),
    statusB.get('Created_tmp_disk_tables')
))

result['rows'].append(makeRow(
    'Sort rows (all)', 
    statusA.get('Sort_rows'),
    statusB.get('Sort_rows')
))

result['rows'].append(makeRow(
    'Sort rows (temp, inc sort_buffer_size)', 
    statusA.get('Sort_merge_passes'),
    statusB.get('Sort_merge_passes')
))

result['rows'].append(makeRow(
    'Table locks (all)', 
    statusA.get('Table_locks_immediate') + statusA.get('Table_locks_waited'),
    statusB.get('Table_locks_immediate') + statusB.get('Table_locks_waited')
))

result['rows'].append(makeRow(
    'Table locks (waited)', 
    statusA.get('Table_locks_waited'),
    statusB.get('Table_locks_waited')
))

result['rows'].append(makeRow(
    'Rows locks (all)', 
    statusA.get('Innodb_row_lock_time'),
    statusB.get('Innodb_row_lock_time')
))

result['rows'].append(makeRow(
    'Rows locks (waited)', 
    statusA.get('Innodb_row_lock_waits'),
    statusB.get('Innodb_row_lock_waits')
))



#result['columns'].insert(0, {"name": "To", "type": "string"})
#result['columns'].insert(0, {"name": "From", "type": "string"})
#result['columns'].insert(4, {"name": "Return", "type": "string"})

#result['rows'] = rows
#result['rows'][0]["To"] = 
#result['rows'][0]["From"] = 
#result['rows'][0]["To"] = 


'''
print(status)
par = int(status.get('questions')) 
print('Questions: ' + str(par))

par = int(status.get('slow_queries'))
print('Slow queries: ' + str(par))

par = int(status.get('qcache_hits'))
print('Queries hits: ' + str(par))

par = int(status.get('sort_rows')) 
print('Sort, count of sort rows: ' + str(par))

par = 100 * int(status.get('sort_merge_passes')) / int(status.get('uptime'))
print('Sort, merge: ' + str(par))

#par = 100 * int(status.get('sort_merge_passes')) / (int(status.get('sort_scan')) + int(status.get('sort_range')))
#print('Sort, percentage of sorts that cause temporary tables: ' + str(par))

par = 100.0 * (int(status.get('select_range_check')) + int(status.get('select_scan')) + int(status.get('select_full_join'))) / int(status.get('uptime'))
print('Joins, rate of joins without indexes: ' + str(par))


par = 100.0 * (int(status.get('created_tmp_tables')) + int(status.get('created_tmp_disk_tables'))) / int(status.get('uptime'))
print('Temp, difference between tmp_table_size and max_heap_table_size:  ' + str(par))


par = (int(status.get('table_locks_immediate')))
print('Lock, immediate table:  ' + str(par))


par = (int(status.get('table_locks_immediate')))
print('Lock, count:  ' + str(par))
'''
