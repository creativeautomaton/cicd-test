#!/bin/sh


python manage.py makemigrations
python manage.py showmigrations
python manage.py migrate
python manage.py collectstatic

gunicorn backend.wsgi:application --bind 0.0.0.0:8000 --env DJANGO_SETTINGS_MODULE=backend.settings


#dumpdata
# python manage.py dumpdata

#loaddata
# python manage.py loaddata
