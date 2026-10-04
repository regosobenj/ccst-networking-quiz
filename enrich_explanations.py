import json

questions = json.load(open("dataset_final.json", encoding="utf-8"))

for q in questions:
    p = q["page"]
    if p in [29, 30, 73]:
        q["explanation"] = "On an IPv4 network, all hosts in the same local subnet point to the same default gateway (router's local interface IP address) to route packets off-network."
    elif p == 5:
        q["explanation"] = "Subnet mask 255.255.252.0 has 22 bits (8 + 8 + 6 = 22 bits), represented as CIDR prefix /22."
    elif p == 6:
        q["explanation"] = "Subnet mask 255.255.255.240 has 28 bits (8 + 8 + 8 + 4 = 28), so the CIDR notation is 192.168.0.16/28."
    elif p == 7:
        q["explanation"] = "Subnet mask 255.255.0.0 has 16 network bits (8 + 8), written as /16."
    elif p == 8:
        q["explanation"] = "Subnet mask 255.255.252.0 is 22 bits, written as /22 in CIDR notation."
    elif p in [9, 11]:
        q["explanation"] = "The /24 network 192.168.200.0/24 includes valid host IP addresses ranging from 192.168.200.1 to 192.168.200.254."
    elif p == 10:
        q["explanation"] = "In IPv6 compression, leading zeros in each 16-bit block are omitted, and one consecutive run of zeros can be replaced by '::'."
    elif p == 12:
        q["explanation"] = "IPv6 Link-Local unicast addresses always begin with the prefix FE80::/10 (FE80 to FEBF)."
    elif p == 13:
        q["explanation"] = "The Transport Layer (OSI Layer 4) segments data streams and adds source and destination port numbers."
    elif p in [14, 32]:
        q["explanation"] = "The UDP header is a lightweight 8-byte header consisting of Source Port (16 bits), Destination Port (16 bits), Length (16 bits), and Checksum (16 bits)."
    elif p in [15, 27]:
        q["explanation"] = "The Data Link Layer (OSI Layer 2) encapsulates packets into frames, adding source and destination MAC addresses in the header and an FCS (Frame Check Sequence/CRC) trailer for error detection."
    elif p == 16:
        q["explanation"] = "SFTP (SSH File Transfer Protocol) provides secure encrypted file upload/download over port 22."
    elif p == 21:
        q["explanation"] = "'show running-config' displays the active running configuration currently in RAM on a Cisco device."
    elif p == 25:
        q["explanation"] = "IPv6 uses Neighbor Discovery Protocol (NDP) with ICMPv6 messages (Neighbor Solicitation/Advertisement) instead of ARP to resolve MAC addresses."
    elif p == 26:
        q["explanation"] = "SLAAC (Stateless Address Autoconfiguration) uses ICMPv6 Router Solicitation (RS) and Router Advertisement (RA) messages to automatically configure IPv6 host addresses."
    elif p in [28, 98]:
        q["explanation"] = "Tracert (traceroute) identifies each hop along the path to determine where packet forwarding fails or experiences delays."
    elif p in [31, 76]:
        q["explanation"] = "To communicate outside of a local VLAN, devices need Layer 3 routing via a default gateway (router or Layer 3 switch SVI)."
    elif p in [33, 93]:
        q["explanation"] = "Assigning an IP address to a management VLAN interface (such as SVI VLAN 1) on a Layer 2 switch enables in-band remote CLI access via Telnet or SSH."
    elif p == 34:
        q["explanation"] = "Spanning Tree Protocol (STP, IEEE 802.1D) prevents Layer 2 switching loops in redundant topologies by blocking redundant ports."
    elif p == 35:
        q["explanation"] = "OSPF uses Hello packets (Protocol 89) to discover neighbors, establish adjacencies, and maintain keepalives."
    elif p == 36:
        q["explanation"] = "The switch MAC address table contains dynamically learned MAC addresses recorded from incoming frames on active switchports, as well as static MAC entries configured by the administrator."
    elif p == 37:
        q["explanation"] = "A subnet mask determines which bits of an IP address represent the network portion and which represent the host portion."
    elif p == 38:
        q["explanation"] = "In the 'divide and conquer' network troubleshooting methodology, pinging the default gateway tests the boundary between the local LAN and the external network."
    elif p == 39:
        q["explanation"] = "SSH (Secure Shell) is the secure industry standard protocol for command-line access to Cisco switches, while SNMP is used by network monitoring systems."
    elif p == 42:
        q["explanation"] = "A firewall inspects and filters network traffic, permitting or denying packets based on IP addresses, port numbers, or application protocols."
    elif p == 43:
        q["explanation"] = "Packet filtering firewalls evaluate traffic based on source and destination IP addresses, ports, and transport protocols."
    elif p == 45:
        q["explanation"] = "Confidentiality ensures that information is accessible only to those authorized to have access, typically enforced using cryptography and access controls."
    elif p in [46, 52]:
        q["explanation"] = "In the AAA (Authentication, Authorization, Accounting) framework, Authentication verifies the identity of the user or device."
    elif p == 47:
        q["explanation"] = "WPA3 uses Simultaneous Authentication of Equals (SAE) to protect against brute-force dictionary attacks and secure client authentication."
    elif p == 55:
        q["explanation"] = "WPA2-Personal (WPA2-PSK) uses a pre-shared passphrase key to authenticate Wi-Fi clients."
    elif p in [56, 57]:
        q["explanation"] = "1000BASE-T and unshielded twisted pair (UTP) copper Ethernet cables use 8-pin RJ-45 connectors."
    elif p == 58:
        q["explanation"] = "A server (such as a file server or NAS) acts as a centralized repository allowing all authorized users on a network to store and access files."
    elif p == 59:
        q["explanation"] = "The administrator is inserting an SFP (Small Form-factor Pluggable) modular transceiver into the router interface slot."
    elif p == 60:
        q["explanation"] = "RJ-45 Ethernet ports (number 6) provide PoE (Power over Ethernet) data connectivity and electric power directly to IP phones and APs."
    elif p == 61:
        q["explanation"] = "IEEE 802.11 defines the international standards and protocols for wireless local area networks (Wi-Fi)."
    elif p == 62:
        q["explanation"] = "An internet-accessible thermostat is a smart connected IoT device that communicates environmental sensor data and commands over the network."
    elif p == 63:
        q["explanation"] = "Fiber optic cables transmit pulses of light along glass/plastic strands and are completely immune to electromagnetic interference (EMI) and radio frequency interference (RFI)."
    elif p == 64:
        q["explanation"] = "When a switch is inaccessible over the network (in-band), the physical Console port provides direct out-of-band serial administrative access."
    elif p == 68:
        q["explanation"] = "RFC 1918 private IPv4 address blocks are: 10.0.0.0/8 (10.0.0.0 - 10.255.255.255), 172.16.0.0/12 (172.16.0.0 - 172.31.255.255), and 192.168.0.0/16 (192.168.0.0 - 192.168.255.255)."
    elif p == 71:
        q["explanation"] = "The tracert output shows hop 12 finishing with 'Trace complete' to the target IPv6 address 2600:1408:c400:38d::b33, confirming success."
    elif p == 72:
        q["explanation"] = "Initial support tickets must contain a detailed description of the problem/fault and the specific conditions/context when it occurred."
    elif p == 75:
        q["explanation"] = "An ongoing company-wide online webinar in a conference room with broken video conferencing impacts live business operations and warrants highest priority (P1/Urgent)."
    elif p == 77:
        q["explanation"] = "For secure corporate Wi-Fi configurations on iOS devices, manual profile or settings configuration ensures appropriate certificate and authentication settings."
    elif p == 78:
        q["explanation"] = "Because the router is offline, inter-VLAN routing is unavailable. Hosts within the same VLAN and switch (PC-A and PC-B in VLAN 100) can still communicate directly at Layer 2."
    elif p == 79:
        q["explanation"] = "When a Layer 2 switch receives a frame with an unknown destination MAC address, it floods the frame out all ports in that VLAN except the arrival port."
    elif p == 80:
        q["explanation"] = "Broadcast frames received on port A are forwarded out all other active ports in the broadcast domain (ports B, C, and D)."
    elif p in [81, 92]:
        q["explanation"] = "A solid green LED indicates an established link; blinking green indicates active data transmission/activity across the link."
    elif p == 82:
        q["explanation"] = "An alternating green-and-amber blinking port LED on Cisco switches signifies link fault or high rate of transmission errors (such as frame check sequence or collision errors)."
    elif p == 83:
        q["explanation"] = "Hop 5 reaches the destination 192.168.1.10 in 1 ms with 0 ms latency, proving the server is online and reachable over the network despite hop 3 dropping ICMP probes."
    elif p == 84:
        q["explanation"] = "The prompt 'router1#' denotes Privileged EXEC mode (enable mode), allowing execution of show and debug commands to view running system status."
    elif p == 85:
        q["explanation"] = "Multiple different MAC addresses appearing on GigabitEthernet0/1 across different VLANs indicates that Gi0/1 connects to an upstream/downstream trunk switch."
    elif p == 95:
        q["explanation"] = "Traceroute (or tracert) maps the router hops along the path and identifies where packet drops or unreachable responses occur."
    elif p == 96:
        q["explanation"] = "Both ping (ICMP echo) and traceroute/tracert can be used to test and confirm reachability to a remote host across a network."
    elif p == 97:
        q["explanation"] = "If a user is mistakenly placed into a different VLAN than intended, they will be isolated from their colleagues and only able to reach other VLANs via router."

with open("dataset_final.json", "w", encoding="utf-8") as f:
    json.dump(questions, f, indent=2, ensure_ascii=False)

print("All explanations and question metadata enriched.")
