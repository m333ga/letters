from os import system
from datetime import date, datetime

date_ = str(date.today().strftime('%d-%m-%Y'))
time_ = datetime.now().strftime('%H:%M')

commands = [
    'git add .',
    f'git commit -m "{date_} {time_}"',
    'git push'
]

for command in commands:
    system(f'echo "{"~"*3} {command} {"~"*3}"')
    system(command)
