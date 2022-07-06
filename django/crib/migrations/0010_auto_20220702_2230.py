# Generated by Django 3.2.13 on 2022-07-02 22:30

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('crib', '0009_repeaterrelationship'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='RepeaterRelationship',
            new_name='Repeater',
        ),
        migrations.CreateModel(
            name='PageRepeaterRelationship',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('order', models.IntegerField(db_column='repeater_order')),
                ('object', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='crib.page')),
                ('term_taxonomy', models.ForeignKey(db_column='repeater_id', on_delete=django.db.models.deletion.CASCADE, related_name='relationships', to='crib.repeater')),
            ],
            options={
                'ordering': ['order'],
                'managed': True,
            },
        ),
        migrations.AddField(
            model_name='page',
            name='repeater_content',
            field=models.ManyToManyField(blank=True, through='crib.PageRepeaterRelationship', to='crib.Repeater'),
        ),
    ]
