# Generated by Django 3.2.13 on 2022-07-03 00:13

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('crib', '0011_auto_20220702_2338'),
    ]

    operations = [
        migrations.AddField(
            model_name='membership',
            name='status',
            field=models.CharField(choices=[('draft', 'Draft'), ('publish', 'Publish')], db_column='membership_status', default='draft', max_length=40),
        ),
        migrations.AddField(
            model_name='membership',
            name='template',
            field=models.CharField(choices=[('default', 'Default'), ('homepage', 'Homepage')], db_column='membership_template', default='default', max_length=40),
        ),
        migrations.AddField(
            model_name='membership',
            name='updated_on',
            field=models.DateTimeField(auto_now=True, db_column='membership_updated_on'),
        ),
        migrations.AlterField(
            model_name='membership',
            name='date_joined',
            field=models.DateField(db_column='membership_date_joined'),
        ),
        migrations.AlterField(
            model_name='membership',
            name='group',
            field=models.ForeignKey(db_column='membership_group', on_delete=django.db.models.deletion.CASCADE, to='crib.group'),
        ),
        migrations.AlterField(
            model_name='membership',
            name='invite_reason',
            field=models.CharField(db_column='membership_invite_reason', max_length=64),
        ),
        migrations.AlterField(
            model_name='membership',
            name='person',
            field=models.ForeignKey(db_column='membership_person', on_delete=django.db.models.deletion.CASCADE, to='crib.person'),
        ),
    ]