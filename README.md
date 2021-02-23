# keplr-test

# Résultat test de charge
```
ab -n 1000  -H "Accept-Encoding: gzip," -p payload.txt localhost:3000/ticket
```

```
This is ApacheBench, Version 2.3 <$Revision: 1879490 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking localhost (be patient)
Completed 100 requests
Completed 200 requests
Completed 300 requests
Completed 400 requests
Completed 500 requests
Completed 600 requests
Completed 700 requests
Completed 800 requests
Completed 900 requests
Completed 1000 requests
Finished 1000 requests


Server Software:
Server Hostname:        localhost
Server Port:            3000

Document Path:          /ticket
Document Length:        7 bytes

Concurrency Level:      1
Time taken for tests:   10.976 seconds
Complete requests:      1000
Failed requests:        0
Total transferred:      234000 bytes
Total body sent:        269000
HTML transferred:       7000 bytes
Requests per second:    91.11 [#/sec] (mean)
Time per request:       10.976 [ms] (mean)
Time per request:       10.976 [ms] (mean, across all concurrent requests)
Transfer rate:          20.82 [Kbytes/sec] received
                        23.93 kb/s sent
                        44.75 kb/s total

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.1      0       1
Processing:     6   11   4.3     10      49
Waiting:        6   10   4.2      9      48
Total:          6   11   4.4     10      49

Percentage of the requests served within a certain time (ms)
  50%     10
  66%     11
  75%     12
  80%     13
  90%     15
  95%     18
  98%     26
  99%     30
 100%     49 (longest request)
```
