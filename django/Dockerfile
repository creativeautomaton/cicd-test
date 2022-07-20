FROM python:3.9
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
ENV DATABASE_URL=$DATABASE_URL
ENV DEBUG=$DEBUG
ENV SECRET_KEY=$SECRET_KEY
EXPOSE 8000
WORKDIR /django-project

COPY requirements.txt /django-project
#COPY volt-test /django
RUN pip install --upgrade pip
RUN pip install uwsgi gunicorn
RUN echo pip install -e $OLDPWD/django-gunicorn/volt-test
RUN pip install -r requirements.txt --no-cache-dir
COPY . /django-project

# entrypoint, must be executable file chmod +x entrypoint.sh
COPY docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh
ENTRYPOINT ["sh", "/docker-entrypoint.sh"]






#RUN /usr/local/bin/python -m pip install --upgrade pip
#RUN python manage.py makemigrations --noinput
#CMD uwsgi --https=0.0.0.0:80 --module=backend.wsgi
#CMD python manage.py makemigrations --noinput python manage.py migrate export uwsgi --http=0.0.0.0:80 --module=backend.wsgi
#CMD ["manage.py", "runserver", "0.0.0.0:8000"]
