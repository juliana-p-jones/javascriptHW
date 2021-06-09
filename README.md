Networking Zine notes & PluralSight Notes:

==============================NETWORKING ZINE NOTES=============================
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

===========================PLURAL SIGHT NOTES================================

OSI= Open Systems Interconnection

The OSI Model is a 7 layer model that describes how networks communicate. How data is sent and received over a network

Layer 1: PHYSICAL LAYER

First and lowerst layer, concerned w transmitting raw bits over a communication channel.

Bits are represented by 1's and 0's- they are the smalled unit of data in computing, and are binary (on/off, tru/false, 1/0)

Cables- twisted pair is how the physical cables that transmit data are often twisted together to improve electromagnetic compatability. Twisting pair reduces electromagnetic radiation, or intereference during travel.

Fios or fiber optics is another physical way info is transmitted physically through cables. Fiber optics is mad fast, and sends data via flashing lights in tubes w fiber optic cables in them.

OSI Model Data Link Layer:
Layer 2.
Takes packets from the Network Layer and encapsulates them into Frames. Each frame is sent bit-by-bit on the hardware.

Consists of 2 sublayers- Media Access Control -MAC- and the Logical Link Control -LLC. MAC controls device interaction and LLC addresses multiplexing.

multiplexing is a technique where analog and digital streams of transmission can be simultaneously processed over a shared link. multiple streams @ once.
1. framing- makes the bits meaningful to reciever. can be done by attatching special bit patterns to beginning or end of the frame
2. physical addressing- after creating frames, DLL adds physical addresses (MAC addies) of the sender and/or receiver in the header of each frame.
3. error control- detects and retransmits damaged or lost frames
4. flow control- data rate must be constant on both sides else the data could be corrupted, flow control coordinates that amount of data sent
5. access control- when a single comm channel is shared by multi devices, MAC sub layer helps determine which device has control over the channel at a time

OSI Network Layer:
Layer 3
Two main functions: break up segments into network packets and reasembling the packets on the receiving end, AND routing packets by discovering best path across physical network.
Routing & Logical Addressing
If there are a million different paths to take to get to a server, routers at this layer figure that out efficiently.

OSI Transport Layer
Layer 4
Deals w the coordination of data between end systs and hosts- aka how much data to send and at what rate, where it goes.
TCP, UDP, DCCP and SCTP are protocols used to control volume of data, where data gets sent and at what rate.
"Load balancing"
Internet Protocol- IP

OSI Model Session Layer
Layer 5
in order for two computers or serves to "speak", a session has to be created. A session involes setup, coordination (how long to wait for a response), and termination between apps at the end of each session.
The example in video is talking on the telephone. To get the data being transferred, aka the message, you have to pick up the phone dial, and establish connection to the other end of the call.

OSI Presentation Layer
Layer 6
represents the preparation or translation of application format to network format.
the layer PRESENTS data for the application or the network. 
Example of this is encryption and decryption of data for secure transmission.

OSI Application Layer
Layer 7
Top layer, and what most users see.
"Closest to the end user"
This layer facilitates communication through lower layers.
Web browsers  & email clients are examples of communications that rely on application layer.

Two subplayers are CASE and SASE:
Common application service element
specific application service element
Holy list of acronyms.


Protocols and Port Nums:
There are 65,353 possible port numbers. Port is like which phone line the application needs to be listening on. the protocol is the language that the two apps on either end agree to speak in.

HTTP and HTTPS
hypertext transfer protocol.

A stateless system, meaning  meaning it enabkes connectio on demand.
HTTP cares about the presentation of info, less about safety of info as it travels so it is vulnerable.

HTTPS is hypertext transfer protocol SECURE- the secure younger cousin of HTTP, that enables requested web data to be presented on your screen, but different than HTTP. more advanced, more secure.

HTTPS is necessary for sensitive information, like username/password, credit card or bank details being sent across the web. You should always check a site is using HTTPS before sending that info out into the web!

File Transfer Protocol:
transfers computer files from a server to a client on a computer network. 
sFTP is SECURE file transfer protocol, sort of like HTTPS
trivial file transfer protocol- used for simple file transfer, software of TFTP is smalled the FTP and not secure
SMB: server message block protocol- allows apps and services on networked computers to talk to eachother. SMB enables the core set of network services such as file, print and device sharing

Email Protocols.
POP3- Post Office Protocol version 3 is a standard mail protocol used to RECIEVE emails from remote server to a local client.
Works on 2 ports:
110 & 995(this ones the secure)
IMAP is Internet Message Access Protocol- used to ACCESS email on a remote web server from local

Port 143 and 993(secure)

SMTP- Simple Mail Transfer Protocol, standard protocol for sending emails
3 ports:
25, 2525, and 465(secure)

LDAP- lightweight directory application protocol

LDAPs- lightweight directory application protocol secure

the connection protocol used between application and the network directory or domain controller in the infrastructure

DHCP- Dynamic Host configuration protocol is a netowrk management protocol that automatically assigns IP addresses to devices

DNS- domain name system:
the system that turns domain names into UP addresses so that we can load internet pages on our browsers

NTP- network time protocol
the internet protocol used to synchronize the clocks of computers to a time reference

Telnet- netowrk protocol that allows users to communicate w a remote device. Telnet rarely used today because all the data sent is exposed and vulnerable

SSH- Secure Shell uses encryption to remotely access a device. SSH uses public key encryption.

SNMP- Simple netowrk Management Protocol
used for the management and monitoring of network-connected devices in internet protocol networks.

RDP- remote desktop protocol- enables remote connections to other computers typically over port 3389. usually ovr an encrypted channel


TCP and UDP:
tcp- transmission control protocol
User datagram protocol- UDP

TCP is reliable as it guarantees delivery of data to the destination router. delivery cant be guaranteed in UDP
TCP is used for traffic that you need all the data for. UDP is used for traffic that doesn't suffer much if a packet is dropped (like streaming, video etc)

3 Way Handshake:
client sends Ack, server sends ACK SYN, client sends back SYN to establish a connection

4-way Disconnect: process by which the TCP connection is terminated
Client will Send the FIN Bit in TCP header and It Will Wait for FIN from Server as well and ACK in the response of its own FIN This stage is Called FIN wait-1 Stage

User Datagram Protocol -UDP, communications protocol that is used to establish low-latency and loss-tolerating connections.

Binary and Hexadecimal
All computer data is represented using a binary number system of 1's and 0's, on/offs.
binary digits can be grouped into bytes

Converting decimal to binary
1. divide number by 2
2. get the integer quotient for the next iteration
3.get remainder
4. repeat steps til the quotient is 0

examples: 13log10 to binary = 1101log2
Use a calculator.

Hexadecimal- numeral system made of 16 symbols.
Counts up to 9, then A-F in place of numbers 10-15

IP Address: Internet Protocol Address
a numerical label assigned to each device

32 bit number, formatted as four 8 digit long decimal numbers, ranging from 0 to 255 separated by dots.

CIDR notation- classless inter-domain routing
Private IP address is the address the network router assigns to your device.
public IP identifies u to wider internet, while private identifies u to your local network.

Subnetwork is a logical subnivision of an ip network- dividing netowrk into two or more networks.
traffic can travel a shorter distance and its more efficient w subnetworks

IPv6- internet protocol version 6, is the most recent version of the IP, set to replace version 4 that is slowly being adopted

Ethernet:
connects computers together in a LAN (local area network)
cables are way faster for communication

duplex- the ability to send and recieve data at the same time
ethernet operates in half duplex.
speed is measured in megabits per second (Mbps)

VLAN is a virtual LAN- allows devices to be on the same LAN virtually

Power over Ethernet- PoE
allows installation of remote or outside equipment without having to connect ot AC power... poE requires special wiring

IP routing: the path that data follows in order to travel across multiple netowrks from its source to destination. 


Network topologies: phsicial and logical
physical is how nodes are connected to eachother in computer network, logical describes the way data flows from one comp to another

DHCP: dynamic host configuration protocol
role of DHCP is to assign unique ip addresses and configure devices automatically.

Port forwarding is when you redirect communcation from one port to another. Like forwarding your mail to a new address

Reverse DNS lookup is a DNS query for the domain name associated w a given IP address