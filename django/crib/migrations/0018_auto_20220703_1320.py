# Generated by Django 3.2.13 on 2022-07-03 13:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('crib', '0017_auto_20220703_1319'),
    ]

    operations = [
        migrations.AlterField(
            model_name='pagemeta',
            name='description',
            field=models.TextField(blank=True, db_column='description_content', max_length=400),
        ),
        migrations.AlterField(
            model_name='pagemeta',
            name='title',
            field=models.CharField(blank=True, db_column='repeater_title', max_length=200),
        ),
    ]
