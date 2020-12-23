Self updater
============

A simple node service that updates docker files

```sh
rsync -aPvv index.js deploy.sh site:/var/www/self-updater/
```

For the systemd config

```sh
rsync -aPvv updater.service site:/lib/systemd/system/
ssh systemctl daemon-reload
systemctl start updater
systemctl enable updater
```

To view logs

```sh
journalctl -u updater
```
