# Generated by Django 3.2.13 on 2022-06-30 18:34

import ckeditor_uploader.fields
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('crib', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(db_column='post_title', max_length=200, unique=True)),
                ('slug', models.SlugField(db_column='post_slug', max_length=200, unique=True)),
                ('updated_on', models.DateTimeField(auto_now=True, db_column='post_updated_on')),
                ('status', models.IntegerField(choices=[(0, 'Draft'), (1, 'Publish')], db_column='post_status', default=0)),
                ('created_on', models.DateTimeField(auto_now_add=True, db_column='post_created_on')),
                ('excerpt', ckeditor_uploader.fields.RichTextUploadingField(db_column='post_excerpt')),
                ('content', ckeditor_uploader.fields.RichTextUploadingField(db_column='post_content')),
                ('author', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'ordering': ['-created_on'],
            },
        ),
        migrations.CreateModel(
            name='Page',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(db_column='page_title', max_length=200, unique=True)),
                ('slug', models.SlugField(db_column='page_slug', max_length=200, unique=True)),
                ('updated_on', models.DateTimeField(auto_now=True, db_column='page_updated_on')),
                ('status', models.IntegerField(choices=[(0, 'Draft'), (1, 'Publish')], db_column='page_status', default=0)),
                ('created_on', models.DateTimeField(auto_now_add=True, db_column='page_created_on')),
                ('excerpt', ckeditor_uploader.fields.RichTextUploadingField(db_column='page_excerpt')),
                ('content', ckeditor_uploader.fields.RichTextUploadingField(db_column='page_content')),
                ('author', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'ordering': ['-created_on'],
            },
        ),
    ]
