Source:
https://altarmoss.wordpress.com/2017/05/27/how-to-kill-results-from-ps-grep/

$ ps aux | grep mongod | grep -v grep | awk '{print $2}' | xargs kill
