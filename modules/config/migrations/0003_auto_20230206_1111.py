# Generated by Django 3.2.9 on 2023-02-06 11:11
import os

from django.db import migrations


def create_default_config(apps, schema_editor):
    # We can't import the Person model directly as it may be a newer
    # version than this migration expects. We use the historical version.
    Config = apps.get_model("config", "Config")
    # from modules.config.models import Config
    login_path = os.getenv("LOGIN_PATH")
    save_message_seven_days = os.getenv("SAVE_MESSAGE_SEVEN_DAYS")
    dns_port = os.getenv("DNS_PORT")
    dns_domain_ip = os.getenv("DNS_DOMAIN_IP")
    ftp_port = os.getenv("FTP_PORT")
    https_port = os.getenv("HTTPS_PORT")

    Config.objects.create(
        [
            Config(name="LOGIN_PATH", type=0, value=login_path),
            Config(name="SAVE_MESSAGE_SEVEN_DAYS", type=0, value=save_message_seven_days),
            Config(name="DNS_PORT", type=1, value=dns_port),
            Config(name="DNS_DOMAIN_IP", type=1, value=dns_domain_ip),
            Config(name="FTP_PORT", type=1, value=ftp_port),
            Config(name="HTTPS_PORT", type=1, value=https_port)
        ]
    )




class Migration(migrations.Migration):
    dependencies = [
        ('config', '0002_auto_20220826_0751'),
    ]
    operations = [
        migrations.RunPython(create_default_config),
    ]
