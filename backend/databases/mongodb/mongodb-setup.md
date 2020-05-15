# MongoDB Basics

> #### [The MongoDB Manual](https://docs.mongodb.com/manual/)

## [Install MongoDB Community Edition on Ubuntu](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/)

The `mongodb-org` package is officially maintained and supported by
MongoDB Inc. and kept up-to-date with the most recent MongoDB releases.

1. Import the public key used by the package management system.
2. Create a list file for MongoDB.
3. Reload local package database.
4. Install the MongoDB packages.

> To check if Ubuntu’s mongodb package is installed on the system, run
sudo apt list --installed | grep mongodb. You can use sudo apt remove
mongodb and sudo apt purge mongodb to remove and purge the mongodb
package before attempting this procedure.

### FURTHER INSTALLATION NOTES

This is where things can vary. The official instructions are to run
`sudo service mongod start` and then you should be able to connect to
the service.

However, I am using WSL and this never seems to be a
recognized service for my installations. In my case, the main process
that seems to work is to first install the unofficial `mongodb` package
provided by Ubuntu. Then I **UNINSTALL** this package, run `sudo apt
autoremove`, and proceed to install the official `mongodb-org` packages
instead. After this, I find that I am able to run `sudo service mongodb
start` and `mongo`to utilize my mongod with a conf file. This may not be
the best practice, but it works for me! Also, notice that I said that my
service is called `mongodb` and not `mongod` as the docs usually
describe.

#### [> Install MongoDB on WSL](https://github.com/microsoft/WSL/issues/796#issuecomment-238048520)

| Item | Location |
| --- | --- |
| Configuration File | `/etc/mongod.conf` |
| Library | `/var/lib/mongodb` |
| Log | `/var/log/mongodb` |
| Data (no conf) | `/data/db` |

You'll need to create the default data directory and assign `rwx`
permission to the user. Alternatively, you can specify this location
when starting the mongod server: `mongod --dbpath=/var/lib/mongodb`

Once you have the service running, open another terminal and use the
`mongo` Shell.

#### Running MongoDB Community Edition

- Production Notes
    + Before deploying MongoDB in a production environment, consider the Production Notes document.    
- ulimit Considerations
    + Most Unix-like operating systems limit the system resources that a
    session may use. These limits may negatively impact MongoDB
    operation. See UNIX ulimit Settings for more information.    
- Directories
    + If you installed via the package manager, the data directory /var
    /lib/mongodb and the log directory /var/log/mongodb are created
    during the installation.
    + By default, MongoDB runs using the mongodb user account. If you
    change the user that runs the MongoDB process, you must also modify
    the permission to the data and log directories to give this user
    access to these directories.
- Configuration File
    + The official MongoDB package includes a configuration file (/etc/
    mongod.conf). These settings (such as the data directory and log
    directory specifications) take effect upon startup. That is, if you
    change the configuration file while the MongoDB instance is running,
    you must restart the instance for the changes to take effect.
