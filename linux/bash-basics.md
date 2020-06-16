# Bash Fundamentals

#### Grant executable rights to the current user:

```Bash
$ touch $FILENAME
$ ./$FILENAME
-bash: ./$FILENAME: Permission denied
$ ls -l
-rw-r--r-- # Something like this, missing x
$ chmod u+x $FILENAME
```

#### Add directory / script to $PATH:
> [Helpful Answer for Ubuntu](https://askubuntu.com/questions/60218/how-to-add-a-directory-to-the-path)

```Bash
$ echo $PATH # Obtain your current list of folders of where your shell looks for executables.
```

- One option is to copy a script to `/usr/local/bin/` so that your shell sees the executable.

- Another option is to add an export to `.bashrc`.

```Bash
if [ -d "/$HOME/bin" ] ; then
    export PATH="/$HOME/bin:$PATH"
fi
```

#### Add an alias

Simply edit `.bashrc`. I wanted to have a short command to navigate to my GitHub desktop source folder, so I added an alias called `cdgh` to point to it.

```Bash
alias cdgh='cd /mnt/c/Users/$USER/Documents/GitHub'
```

#### tar

Compress: `tar -czvf name-of-archive.tar.gz /path/to/directory-or-file`

> You can list multiple directories to be compressed into the archive.

Extract: `tar -xzvf name-of-archive.tar.gz`

> Use `c` to **compress** and `x` to **extract**.
