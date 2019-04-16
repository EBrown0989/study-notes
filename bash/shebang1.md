## shebang

```
#!/usr/bin/env node
```

Node isn't always located at `/usr/local/bin`, so it's important to set things
up with compatibility in mind.

## To run the program as an executable:

```
chmod 755 ${filename}

$ ./${filename}
```

NOTE: Node is smart enough to ignore shebang lines, so you can still write
 scripts that can be run as executables on both platforms!
