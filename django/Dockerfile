FROM python:3.9-slim-buster
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
ENV DATABASE_URL=$DATABASE_URL
ENV DEBUG=$DEBUG
ENV SECRET_KEY=$SECRET_KEY
EXPOSE 8000
EXPOSE 8001
EXPOSE 443
WORKDIR /django-project

COPY requirements.txt /django-project
#COPY volt-test /django
RUN echo pip install --upgrade pip
RUN echo pip install -e $OLDPWD/django-gunicorn/volt-test
RUN pip install psycopg2-binary
RUN pip install -r requirements.txt --no-cache-dir
COPY . /django-project

# entrypoint, must be executable file chmod +x entrypoint.sh
COPY docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh
ENTRYPOINT ["sh", "/docker-entrypoint.sh"]
