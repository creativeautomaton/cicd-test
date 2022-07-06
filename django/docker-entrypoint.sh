#!/bin/sh
# Note: I've written this using sh so it works in the busybox container too
# entrypoint, must be executable file chmod +x entrypoint.#!/bin/sh

#dumpdata
# python manage.py dumpdata

#loaddata
# python manage.py loaddata

# python manage.py makemigrations --noinput
# python manage.py showmigrations
# python manage.py migrate --noinput
# python manage.py collectstatic --noinput
#
# uwsgi --http=0.0.0.0:80 --module=backend.wsgi
# python manage.py runserver 0.0.0.0:80

# echo "exited $0"
