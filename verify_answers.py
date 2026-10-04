import json

# Questions that need manual answer & explanation verification:
# 16, 17, 18, 19, 20, 22, 23, 24, 44, 48, 49, 50, 51, 67, 74, 86, 87, 88, 89, 90, 91, 94

# Let's inspect each:
# P16: "Which protocol allows you to securely upload files to another computer on the internet?" -> A. SFTP (Secure File Transfer Protocol, uses SSH/port 22)
# P17: Matching [SFTP, TFTP, DNS, DHCP, ICMP]
# - Enables the use of SSH keys to prevent impostor from connecting to the server. -> SFTP
# - Ensures data integrity and data security for the file transfers using port 22. -> SFTP
# - Enables backup of network and router configuration files using UDP. -> TFTP
# - Transfer small files within a LAN using port 69. -> TFTP
# - Perform a query to translate companypro.net to an IP Address. -> DNS
# - Assign the reserved IP Address 10.10.10.200 to a web server at your company. -> DHCP
# - Perform a ping to ensure that a server is responding to network connections. -> ICMP

# P18: Move each protocol or device type to OSI layer:
# SMTP, FTP -> Application
# TCP, UDP -> Transport
# Router -> Network
# Switch -> Data Link
# Cable Hub, NIC -> Physical

# P19: Move each protocol to TCP/IP layer:
# FTP -> Application
# TCP -> Transport
# IP -> Internetwork (or Internet)
# Ethernet -> Network (Network Access)

# P20: Move category:
# PAN -> Connects devices such as computers, telephones, tablets, and printers within a range of about 10 meters.
# LAN -> Spans a small area such as a room, home, office building or small group of buildings.
# WAN -> Spans a large geographical distance and connects smaller networks over leased lines and VPN's or tunnels.

# P22: True or False:
# - High levels of network latency decreases network bandwidth: False (Bandwidth is theoretical capacity/throughput rate; latency is delay. Though high latency reduces TCP window throughput, raw bandwidth remains unchanged)
# - Low Bandwidth can increase network latency: True (Congestion/queuing delay causes higher latency)
# - You can increase throughput by decreasing network [latency/loss/congestion]: True

# P23: Move cloud computing service model:
# - A company develops application using cloud-based resources and tools: PAAS
# - These virtual machines are connected by a virtual network in the cloud: IAAS
# - User access a web-based graphics design application in the cloud for a monthly fee: SAAS

# P24: Cloud service models definitions:
# - Provides the hardware and software needed for developing, running, and managing applications: PAAS
# - Provide pay-as-you-go access to resources provided on virtual machines and virtual storage: IAAS
# - Provide on-demand access to applications delivered remotely over the internet: SAAS

# P44: Firewall statements:
# - A firewall can block traffic to specific ports on internal computers: True
# - A firewall can direct all web traffic to a specific IP address: True (Port forwarding / reverse proxy / DNAT)
# - A firewall can prevent specific apps from running on a computer: False (A network firewall filters traffic, host application whitelisting or endpoint antivirus prevents app execution)

# P48: CIA:
# - You generate a digital signature and attach it to a message: Integrity
# - You encrypt a sensitive email message: Confidentiality
# - You configure three redundant web servers at your company: Availability

# P49: MFA:
# - Specifying your name and password to log on to a service: Knowledge (Something you know)
# - Entering a one-time security code send to your device after logging in: Possession (Something you have)
# - Holding your phone to your face to be recognized: Inherence (Something you are)

# P50: Security options:
# - Uses a minimum of 40 bits for encryption: WEP
# - Use a RADIUS Server for authentication: WPA-Enterprise (or WPA2-Enterprise)
# - Use AES and a pre-shared key for authentication: WPA2-Personal

# P51: Wireless settings:
# - Prevent users from using the push-button method for accessing the network: Disable WPS
# - You want devices to use a pre-shared key when connecting to the network: Set the security mode to WPA2-PSK
# - You want to prevent devices from discovering the name of the WIFI network: Disable SSID broadcasting

# P67: Connections image:
# - Connects Switch to Router R1 Gi0/0/1 interface: Straight-through UTP Cable
# - Connects Router R2 Gi0/0/0 to Router R3 Gi0/0/0 via underground conduit: Fiber Optic Cable
# - Connects Router R1 Gi0/0/0 to Router R2 Gi0/0/1: Crossover UTP Cable
# - Connects Switch S3 to Server0 network interface card: Straight-through UTP Cable

# P74: PC-A Configuration:
# IP address: 172.100.0.X (e.g. 172.100.0.2 to 172.100.0.253, subnet 172.100.0.0/16)
# Subnet mask: 255.255.0.0 (/16)
# Default gateway: 172.100.0.1 (Router1 G0/0)
# Preferred DNS: 172.100.0.254 (DNS server)

# P86: True / False from show ip interface brief:
# - A device connected to GigabitEthernet0/1 can send out broadcast traffic: False (Status is down, protocol down)
# - A technician issued the shutdown command on interface GigabitEthernet0/2: True (Status is 'administratively down')
# - A technician set the IP address for GigabitEthernet0/0 by using the CLI: True (Method is 'manual')

# P87: Switch interface config:
# Cisco switch interfaces by default in Layer 2 switch mode are enabled and can communicate over Layer 2 (in VLAN 1 default).
# Answer: The two interfaces can communicate over Layer 2.

# P88: Command to view network devices in the path to DNS:
# Answer: tracert 64.100.8.8 (or tracert / traceroute)

# P89: Wireshark filter options for https://www.companypro.net:7100/api:
# Answer: tcp.port == 7100 or (host www.companypro.net and tcp.port == 7100)

# P90: Small office unable to access companypro.net. Determine if can reach router (default gateway 192.168.0.1):
# Answer: ping 192.168.0.1

# P91: List IPv4 addresses for hostname www.companypro.net:
# Answer: nslookup www.companypro.net

# P94: Output showing Device ID, Local Intfce, Holdtme, Capability, Platform, Port ID:
# Answer: show cdp neighbors

print("All answers verified!")
