# SSH

### [Converting a .ppk key to an OpenSSH key](https://superuser.com/questions/232362/how-to-convert-ppk-key-to-openssh-key-under-linux)

Use the package manager to install PuTTY or PuTTY-tools.

```Bash
sudo apt-get install putty-tools
```

Place keys in some directory, preferably your home folder. Now you can convert the
PPK keys to SSH keypairs.

```Bash
# To generate the private key:
$ cd ~
$ puttygen id_dsa.ppk -O private-openssh -o id_dsa

# To generate the public key:
$ puttygen id_dsa.ppk -O public-openssh -o id_dsa.pub

# Move these to ~/.ssh and make sure the permissions are set to private for
# your private key.
$ mkdir -p ~/.ssh
$ mv -i ~/id_dsa* ~/.ssh
$ chmod 600 ~/.ssh/id_dsa
$ chmod 666 ~/.ssh/id_dsa.pub
```

### Copying your public key manually

The content of id_rsa.pub (or id_dsa as I had) will have to be added to a file at
`~/.ssh/authorized_keys` on your remote machine somehow.

```Bash
# Store the contents of your id_rsa.pub key in a bash variable.
$ public_key_string = $(cat ~/.ssh/id_rsa.pub)

# Make your .ssh directory if you haven't already. Permissions might need to be set.
$ mkdir -p ~/.ssh

# Now simply create / modify the authorized_keys file within this directory.
$ echo $(public_key_string) >> ~/.ssh/authorized_keys
```

### Authenticate to your Server Using SSH Keys

Now you'll hopefully be able to log into the remote host without needing the remote
accounts password!

```Bash
$ ssh username@remote_host
```
