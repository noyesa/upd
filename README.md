# upd

"updy"

Distributed uptime monitor for networks made from bits of trash.

I'm a big fan of
[louislam/uptime-kuma](https://github.com/louislam/uptime-kuma), but it has
one glaring problem: I didn't write it. 🙂 Jokes aside, it's a great tool, but
I wanted something that allows me to have distributed monitoring servers that
would be aggregated into a single UI. I also want to ensure that all hosts are
monitored only by an external host.

I run a home network that consists of various bits of garbage I've had lying
around for years. As it grew, I wanted to add monitoring to it. However, my
preference would be that all hosts are watched by a different host.

## Who watches the watcher?

Let's say I have one host, my main homelab server. If it goes down, and it's
all I've got, my monitoring goes down. That's no good, so the next logical
step is to run monitoring on a different host. Perfect, I use a Pi for DNS and
other low power services. I can put the monitoring on there. But what about
the services running on _that_ host? I have my secondary DNS server as well
as reverse proxy running there that I want to monitor as well. Perfect, I'll
set that up on my homelab server.

## Yo dawg

So now I have two servers monitoring disparate hosts. How do I monitor these?
I plan to do this using a combined UI web server/monitor host that hosts a web
application that can be used to visualize metrics as well as monitor the upd
servers running on those hosts. It monitors the monitors.
