# MySQL Fundamentals

### [MySQL APT Repo - Quick Guide](https://dev.mysql.com/doc/mysql-apt-repo-quick-guide/en/)

> General info for starting mysql-server and then connecting to it with auth on.

```Bash
$ sudo service mysql (status|start|stop)
$ mysql -u root -p
$ mysqladmin -u root -p password #Alt Admin Login
$ mysql -h host -u user -p
$ Enter password: ********

mysql>
```

`host` and `user` represent the host name where your MySQL server is running and the user name of your MySQL account.

You can provide the password following the flag `-p` with a space, such as `-p password`.
However, it is safer not to do so because others can log into your machine and see
what commands were entered. Just let mysql prompt you for the password after issuing
the command instead.

---
### [MySQL 8.0 Reference Manual / Tutorial](https://dev.mysql.com/doc/refman/8.0/en/tutorial.html)

> Pretend DB: **alpha**

```Bash
mysql> SHOW DATABASES;
mysql> CREATE DATABASE alpha;
mysql> USE alpha;
```

Database names are case-sensitive, but SQL keywords are not.
