Networking Zine notes:

PAN (personal area network)—essentially a convenient, one-person network.

LAN (local area network), which is typically a few separate computers linked to one or two printers, a scanner, and maybe a single, shared connection to the Internet.

VPN (virtual private network), which is a secure way of accessing a private network over a public one.

WANs (wide area networks), which can cover any geographical area.

Packets: all data is sent over the internet in little packets
    -packets are series of Bits (the ones and zeroes)
        -Split into header sections. No idea why its called that

-----STEPS TO DOWNLOAD AN IMAGE:------

******Step 1 : the DNS******
    get the IP address for the website you are dowloading FROM

DNS= Domain Name System
so... 
a DNS request = requesting the domain's IP Add
a DNS response = is returning that IP address

2 Kinds of DNS servers:

Recursive & Authoritative

Recursive: able to get an IP address for ANY website by asking the right authoritative server. Usually caches DNS records
Authoritative: they know where the things are


Googles recursive dns server
$dig @8.8.8.8 jvns.ca

******Step 2 : Socket******

1. ask the OS for a socket
2. connect the socket
3. write to the socket to send data

4 types sockets:
1. TCP - to use TCP
2. UDP- to use UDP
3. raw - for ultimate power, ping uses this to send ICMP packets
4. unix - to talk to programs on the same computer

...basically the OS does most of the work here

******TCP handshake******
TCP starts with a handshake to make sure both sides of connection can communicate



*******Networking Layers*******

Layer 1. wires and RADIO waves?!
Layer 2. Ethernet/wifi protocol. your network card understands it
Layer 3. IP addresses. Routers look at this to decide where to send the packet next
Layer 4. TCP or UDP. Where you get your portal

Layer 5&6 don't really exist??? "They call SSL layer 5"
Layer 7. HTP and friends. Routers ignore this layer. DNS queries, emails, etc go here.

Who uses which layers?

Layers 1 & 2: networking card
Layers 2, 3 & 4: home router
Layers 7 and 4: applications

Ports are part  of the TCP and UDP protocols
Every TCP/UDP packet has a port number between 1 and 65535 on it

netstat and lsof can tell u which ports youre using

Packets get sent across the ocean through cables under the ocean. First it stops at your home router and intermediate routers though.

if you run traceroute in your terminal followed by a website you can see what steps your packet takes to get to the website.


**********The TCP handshake:***********
Gotta establish that connection in the TCP/IP network!
client sends SYN to the server, who replies SYN-ACK, and the client responds ACK
each side must acknowledge the sequence number received in the packet by incrementing it by one
SYN=Synchronize Sequence Number
ACK=Acknowledgement Sequence Number

*****Most Useful Headers:*****
Host: most servers serve different websites, so the host header lets u pick which website you want from that server.

User-Agent:
Header used by servers to check if you're using an old browser or if you're a bot
Accept-Encoding:
THIS MIGHT HELP ME !!!
to save bandwith, set this to "gzip" and the server might compress your response
Cookie:
when logged into website, the browser sends data in this header. It is how the server knows you're logged in.

