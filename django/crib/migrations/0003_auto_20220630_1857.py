# Generated by Django 3.2.13 on 2022-06-30 18:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('crib', '0002_page_post'),
    ]

    operations = [
        migrations.AlterField(
            model_name='page',
            name='excerpt',
            field=models.TextField(db_column='page_excerpt'),
        ),
        migrations.AlterField(
            model_name='post',
            name='excerpt',
            field=models.TextField(db_column='post_excerpt'),
        ),
    ]