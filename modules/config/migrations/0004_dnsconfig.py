# Generated by Django 3.2.9 on 2023-02-15 16:11
import os

from django.db import migrations, models


def create_default_config(apps, schema_editor):
    DnsConfig = apps.get_model('config', "DnsConfig")
    dns_domain = os.environ.get('DNS_DOMAIN')
    dns_domain_ip = [os.environ.get('DNS_DOMAIN_IP')]

    DnsConfig.objects.bulk_create(
        [
            DnsConfig(domain="*." + str(dns_domain), value=dns_domain_ip),
            DnsConfig(domain=dns_domain, value=dns_domain_ip)
        ]
    )


class Migration(migrations.Migration):
    dependencies = [
        ('config', '0003_auto_20230206_1111'),
    ]

    operations = [
        migrations.CreateModel(
            name='DnsConfig',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('domain', models.CharField(help_text='域名', max_length=32)),
                ('value', models.JSONField(default=list, help_text='解析类型', max_length=128)),
            ],
            options={
                'db_table': 'dnsconfig',
            },
        ),
        migrations.RunPython(create_default_config),
    ]
