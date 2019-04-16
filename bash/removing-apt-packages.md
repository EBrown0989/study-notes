Just some helpful reminders for an example.

## Removing mysql completely from your system:
sudo apt-get remove --purge mysql*
rm -rf /etc/mysql /var/lib/mysql
apt-get autoremove
apt-get autoclean
