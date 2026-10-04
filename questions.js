window.CCST_QUESTIONS = [
  {
    "id": 1,
    "page": 5,
    "category": "Standard Concepts",
    "type": "multiple_choice",
    "image": null,
    "question": "How is given the IP Address 172.16.199.25 and the subnet mask 255.255.252.0. What is the CIDR notation for this address?",
    "options": [
      "A. 172.16.100.25/22",
      "B. 172.16.100.25/21",
      "C. 172.16.100.25/23",
      "D. 172.16.100.25/20"
    ],
    "correct_letters": [
      "A"
    ],
    "correct_answers": [
      "A. 172.16.100.25/22"
    ],
    "is_multiple_response": false,
    "explanation": "Subnet mask 255.255.252.0 has 22 bits (8 + 8 + 6 = 22 bits), represented as CIDR prefix /22."
  },
  {
    "id": 2,
    "page": 6,
    "category": "Standard Concepts",
    "type": "multiple_choice",
    "image": null,
    "question": "How is the following IP address written when using a CIDR notation? IP Address: 192.168.0.16 Subnet Mask: 255.255.255.240",
    "options": [
      "A. 192.168.0.16/30",
      "B. 192.168.0.16/15",
      "C. 192.168.0.16/28",
      "D. 192.168.0.16/24"
    ],
    "correct_letters": [
      "C"
    ],
    "correct_answers": [
      "C. 192.168.0.16/28"
    ],
    "is_multiple_response": false,
    "explanation": "Subnet mask 255.255.255.240 has 28 bits (8 + 8 + 8 + 4 = 28), so the CIDR notation is 192.168.0.16/28."
  },
  {
    "id": 3,
    "page": 7,
    "category": "Standard Concepts",
    "type": "multiple_choice",
    "image": null,
    "question": "What is the CIDR prefix notation for a subnet mask of 255.255.0.0?",
    "options": [
      "A. /24",
      "B. /8",
      "C. /16",
      "D. 32"
    ],
    "correct_letters": [
      "C"
    ],
    "correct_answers": [
      "C. /16"
    ],
    "is_multiple_response": false,
    "explanation": "Subnet mask 255.255.0.0 has 16 network bits (8 + 8), written as /16."
  },
  {
    "id": 4,
    "page": 8,
    "category": "Standard Concepts",
    "type": "multiple_choice",
    "image": null,
    "question": "A host is given the IP address 172.16.100.25 and the subnet mask 255.255.252.0.",
    "options": [
      "A. 172.16.100.25 /23",
      "B. 172.16.100.25 /20",
      "C. 172.16.100.25 /21",
      "D. 172.16.100.25 /22"
    ],
    "correct_letters": [
      "D"
    ],
    "correct_answers": [
      "D. 172.16.100.25 /22"
    ],
    "is_multiple_response": false,
    "explanation": "Subnet mask 255.255.252.0 is 22 bits, written as /22 in CIDR notation."
  },
  {
    "id": 5,
    "page": 9,
    "category": "Standard Concepts",
    "type": "multiple_choice",
    "image": null,
    "question": "Which address is included in the 192.168.200.0/24 network?",
    "options": [
      "A. 192.168.199.13",
      "B. 192.168.200.13",
      "C. 192.168.201.13",
      "D. 192.168.1.13"
    ],
    "correct_letters": [
      "B"
    ],
    "correct_answers": [
      "B. 192.168.200.13"
    ],
    "is_multiple_response": false,
    "explanation": "The /24 network 192.168.200.0/24 includes valid host IP addresses ranging from 192.168.200.1 to 192.168.200.254."
  },
  {
    "id": 6,
    "page": 10,
    "category": "Standard Concepts",
    "type": "multiple_choice",
    "image": null,
    "question": "What is the most compressed valid format of the IPv6 address 2001 :0db8:0000:0016:0000:001b: 2000:0056?",
    "options": [
      "A. 2001:db8: : 16: : 1b:2:56",
      "B. 2001:db8: : 16: : 1b: 2000: 56",
      "C. 2001:db8: 16: :1b:2:56",
      "D. 2001:db8: 0:16: :1b: 2000:56"
    ],
    "correct_letters": [
      "D"
    ],
    "correct_answers": [
      "D. 2001:db8: 0:16: :1b: 2000:56"
    ],
    "is_multiple_response": false,
    "explanation": "In IPv6 compression, leading zeros in each 16-bit block are omitted, and one consecutive run of zeros can be replaced by '::'."
  },
  {
    "id": 7,
    "page": 11,
    "category": "Standard Concepts",
    "type": "multiple_choice",
    "image": null,
    "question": "Which address is included in the 192.168.200.0/24 network?",
    "options": [
      "A. 192.168.200.13",
      "B. 192.168.201.13",
      "C. 192.168.1.13",
      "D. 192.168.199.13"
    ],
    "correct_letters": [
      "A"
    ],
    "correct_answers": [
      "A. 192.168.200.13"
    ],
    "is_multiple_response": false,
    "explanation": "The /24 network 192.168.200.0/24 includes valid host IP addresses ranging from 192.168.200.1 to 192.168.200.254."
  },
  {
    "id": 8,
    "page": 12,
    "category": "Standard Concepts",
    "type": "multiple_choice",
    "image": null,
    "question": "Which address is a link-local IPV6 address?",
    "options": [
      "A. FDF8:F535:82EF::53",
      "B. FE80::261:2EFE:FE10:765",
      "C. 2001:0db8:85a3:0000:0000:8a2e:0370:7334",
      "D. 2401:db00:21:70e4:face:0:3:0"
    ],
    "correct_letters": [
      "B"
    ],
    "correct_answers": [
      "B. FE80::261:2EFE:FE10:765"
    ],
    "is_multiple_response": false,
    "explanation": "IPv6 Link-Local unicast addresses always begin with the prefix FE80::/10 (FE80 to FEBF)."
  },
  {
    "id": 9,
    "page": 13,
    "category": "Standard Concepts",
    "type": "multiple_choice",
    "image": null,
    "question": "At which OSI layer is the data stream broken up into segments that include source and destination port numbers?",
    "options": [
      "A. Network",
      "B. Session",
      "C. Transport",
      "D. Data Link"
    ],
    "correct_letters": [
      "C"
    ],
    "correct_answers": [
      "C. Transport"
    ],
    "is_multiple_response": false,
    "explanation": "The Transport Layer (OSI Layer 4) segments data streams and adds source and destination port numbers."
  },
  {
    "id": 10,
    "page": 14,
    "category": "Standard Concepts",
    "type": "multiple_choice",
    "image": null,
    "question": "Which information is included in the header of UDP segment?",
    "options": [
      "A. Port Numbers",
      "B. IP Address",
      "C. Sequence Numbers",
      "D. Mac Address"
    ],
    "correct_letters": [
      "A"
    ],
    "correct_answers": [
      "A. Port Numbers"
    ],
    "is_multiple_response": false,
    "explanation": "The UDP header is a lightweight 8-byte header consisting of Source Port (16 bits), Destination Port (16 bits), Length (16 bits), and Checksum (16 bits)."
  },
  {
    "id": 11,
    "page": 15,
    "category": "Standard Concepts",
    "type": "multiple_choice",
    "image": null,
    "question": "During the data encapsulation process which OSI layer adds a header that contains MAC addressing information and a trailer used for error checking.",
    "options": [
      "A. Network",
      "B. Session",
      "C. Transport",
      "D. Data Link"
    ],
    "correct_letters": [
      "D"
    ],
    "correct_answers": [
      "D. Data Link"
    ],
    "is_multiple_response": false,
    "explanation": "The Data Link Layer (OSI Layer 2) encapsulates packets into frames, adding source and destination MAC addresses in the header and an FCS (Frame Check Sequence/CRC) trailer for error detection."
  },
  {
    "id": 12,
    "page": 16,
    "category": "Standard Concepts",
    "type": "multiple_choice",
    "image": null,
    "question": "Which protocol allows you to securely upload files to another computer on the internet?",
    "options": [
      "A. SFTP",
      "B. HTTP",
      "C. NTP",
      "D. ICMP"
    ],
    "correct_letters": [
      "A"
    ],
    "correct_answers": [
      "A. SFTP"
    ],
    "is_multiple_response": false,
    "explanation": "SFTP (SSH File Transfer Protocol) provides secure encrypted file upload/download over port 22."
  },
  {
    "id": 13,
    "page": 17,
    "category": "Standard Concepts",
    "type": "matching",
    "question": "Move each protocol to its correct characteristic on the right:",
    "options": [
      "SFTP",
      "TFTP",
      "DNS",
      "DHCP",
      "ICMP"
    ],
    "pairs": [
      {
        "prompt": "Enables the use of SSH keys to prevent impostor from connecting to the server.",
        "answer": "SFTP"
      },
      {
        "prompt": "Ensures data integrity and data security for the file transfers using port 22.",
        "answer": "SFTP"
      },
      {
        "prompt": "Enables backup of network and router configuration files using UDP.",
        "answer": "TFTP"
      },
      {
        "prompt": "Transfer small files within a LAN using port 69.",
        "answer": "TFTP"
      },
      {
        "prompt": "Perform a query to translate companypro.net to an IP Address.",
        "answer": "DNS"
      },
      {
        "prompt": "Assign the reserved IP Address 10.10.10.200 to a web server at your company.",
        "answer": "DHCP"
      },
      {
        "prompt": "Perform a ping to ensure that a server is responding to network connections.",
        "answer": "ICMP"
      }
    ],
    "explanation": "SFTP uses SSH (port 22) with key auth; TFTP uses UDP (port 69); DNS resolves hostnames to IPs; DHCP assigns IP addresses; ICMP is used by ping."
  },
  {
    "id": 14,
    "page": 18,
    "category": "Standard Concepts",
    "type": "matching",
    "question": "Move each protocol or device type from the list to the correct OSI layer:",
    "options": [
      "Physical",
      "Data Link",
      "Network",
      "Transport",
      "Application"
    ],
    "pairs": [
      {
        "prompt": "SMTP, FTP",
        "answer": "Application"
      },
      {
        "prompt": "TCP, UDP",
        "answer": "Transport"
      },
      {
        "prompt": "Router",
        "answer": "Network"
      },
      {
        "prompt": "Switch",
        "answer": "Data Link"
      },
      {
        "prompt": "Cable Hub, NIC",
        "answer": "Physical"
      }
    ],
    "explanation": "SMTP/FTP operate at Layer 7 (Application); TCP/UDP at Layer 4 (Transport); Routers at Layer 3 (Network); Switches at Layer 2 (Data Link); Cable Hubs and physical NIC signals at Layer 1 (Physical)."
  },
  {
    "id": 15,
    "page": 19,
    "category": "Standard Concepts",
    "type": "matching",
    "question": "Move each protocol from the list to the correct TCP/IP model layer:",
    "options": [
      "Application",
      "Transport",
      "Internetwork",
      "Network"
    ],
    "pairs": [
      {
        "prompt": "FTP",
        "answer": "Application"
      },
      {
        "prompt": "TCP",
        "answer": "Transport"
      },
      {
        "prompt": "IP",
        "answer": "Internetwork"
      },
      {
        "prompt": "Ethernet",
        "answer": "Network"
      }
    ],
    "explanation": "In the TCP/IP 4-layer model: Application (FTP, HTTP), Transport (TCP, UDP), Internet / Internetwork (IP, ICMP), Network Access / Network (Ethernet)."
  },
  {
    "id": 16,
    "page": 20,
    "category": "Standard Concepts",
    "type": "matching",
    "question": "Move each category to its correct definition:",
    "options": [
      "PAN",
      "LAN",
      "WAN"
    ],
    "pairs": [
      {
        "prompt": "Connects devices such as computers, telephones, tablets, and printers within a range of about 10 meters.",
        "answer": "PAN"
      },
      {
        "prompt": "Spans a small area such as a room, home, office building or small group of buildings.",
        "answer": "LAN"
      },
      {
        "prompt": "Spans a large geographical distance and connects smaller networks over leased lines and VPNs or tunnels.",
        "answer": "WAN"
      }
    ],
    "explanation": "PAN = Personal Area Network (~10m); LAN = Local Area Network (home/office); WAN = Wide Area Network (large geographical span)."
  },
  {
    "id": 17,
    "page": 21,
    "category": "Standard Concepts",
    "type": "multiple_choice",
    "image": null,
    "question": "Which command will display all the current operational settings configured on a Cisco router?",
    "options": [
      "A. show protocols",
      "B. show startup-config",
      "C. show version",
      "D. show running-config"
    ],
    "correct_letters": [
      "D"
    ],
    "correct_answers": [
      "D. show running-config"
    ],
    "is_multiple_response": false,
    "explanation": "'show running-config' displays the active running configuration currently in RAM on a Cisco device."
  },
  {
    "id": 18,
    "page": 22,
    "category": "Standard Concepts",
    "type": "true_false_group",
    "question": "For each statement about bandwidth and throughput, select True or False:",
    "items": [
      {
        "statement": "High levels of network latency decreases network bandwidth.",
        "answer": "False",
        "explanation": "Bandwidth is the physical transmission capacity of the link. Latency affects throughput and TCP transfer speed, but does not decrease the bandwidth itself."
      },
      {
        "statement": "Low Bandwidth can increase network latency.",
        "answer": "True",
        "explanation": "Low bandwidth causes queueing delays when traffic builds up, increasing perceived latency."
      },
      {
        "statement": "You can increase throughput by decreasing network latency.",
        "answer": "True",
        "explanation": "Lower latency reduces Round Trip Time (RTT), allowing TCP congestion windows to grow faster and increasing throughput."
      }
    ]
  },
  {
    "id": 19,
    "page": 23,
    "category": "Standard Concepts",
    "type": "matching",
    "question": "Move each cloud computing service model to the correct example:",
    "options": [
      "IaaS",
      "PaaS",
      "SaaS"
    ],
    "pairs": [
      {
        "prompt": "A company develops application using cloud-based resources and tools.",
        "answer": "PaaS"
      },
      {
        "prompt": "These virtual machines are connected by a virtual network in the cloud.",
        "answer": "IaaS"
      },
      {
        "prompt": "User access a web-based graphics design application in the cloud for a monthly fee.",
        "answer": "SaaS"
      }
    ],
    "explanation": "PaaS provides application runtime/tools; IaaS provides virtual compute/networking; SaaS delivers ready-to-use software applications."
  },
  {
    "id": 20,
    "page": 24,
    "category": "Standard Concepts",
    "type": "matching",
    "question": "Move each cloud service model to its correct description:",
    "options": [
      "IaaS",
      "PaaS",
      "SaaS"
    ],
    "pairs": [
      {
        "prompt": "Provides the hardware and software needed for developing, running, and managing applications.",
        "answer": "PaaS"
      },
      {
        "prompt": "Provide pay-as-you-go access to resources provided on virtual machines and virtual storage.",
        "answer": "IaaS"
      },
      {
        "prompt": "Provide on-demand access to applications delivered remotely over the internet.",
        "answer": "SaaS"
      }
    ],
    "explanation": "PaaS = development platform/environment; IaaS = raw compute/storage infrastructure; SaaS = on-demand software applications."
  },
  {
    "id": 21,
    "page": 25,
    "category": "Standard Concepts",
    "type": "multiple_choice",
    "image": null,
    "question": "Which protocol does an IPv6 host use to resolve the MAC address associated with a destination IPv6 address?",
    "options": [
      "A. Address Resolution Protocol (ARP)",
      "B. Cisco Discovery Protocol (CDP)",
      "C. Neighbor Discovery Protocol (NDP)",
      "D. Dynamic Host Configuration Protocol (DHCP)"
    ],
    "correct_letters": [
      "C"
    ],
    "correct_answers": [
      "C. Neighbor Discovery Protocol (NDP)"
    ],
    "is_multiple_response": false,
    "explanation": "IPv6 uses Neighbor Discovery Protocol (NDP) with ICMPv6 messages (Neighbor Solicitation/Advertisement) instead of ARP to resolve MAC addresses."
  },
  {
    "id": 22,
    "page": 26,
    "category": "Standard Concepts",
    "type": "multiple_choice",
    "image": null,
    "question": "Which protocol is used by IPV6 enabled host to perform automatic stateless address configuration?",
    "options": [
      "A. DHCPV6",
      "B. ICMPV6",
      "C. TFTP",
      "D. DNS"
    ],
    "correct_letters": [
      "B"
    ],
    "correct_answers": [
      "B. ICMPV6"
    ],
    "is_multiple_response": false,
    "explanation": "SLAAC (Stateless Address Autoconfiguration) uses ICMPv6 Router Solicitation (RS) and Router Advertisement (RA) messages to automatically configure IPv6 host addresses."
  },
  {
    "id": 23,
    "page": 27,
    "category": "Standard Concepts",
    "type": "multiple_choice",
    "image": null,
    "question": "During the data encapsulation process, which OSI layer adds a header that contains MAC addressing information and a trailer used for error checking?",
    "options": [
      "A. Network",
      "B. Transport",
      "C. Data Link",
      "D. Session"
    ],
    "correct_letters": [
      "C"
    ],
    "correct_answers": [
      "C. Data Link"
    ],
    "is_multiple_response": false,
    "explanation": "The Data Link Layer (OSI Layer 2) encapsulates packets into frames, adding source and destination MAC addresses in the header and an FCS (Frame Check Sequence/CRC) trailer for error detection."
  },
  {
    "id": 24,
    "page": 28,
    "category": "Standard Concepts",
    "type": "multiple_choice",
    "image": null,
    "question": "A user initiates a trouble ticket stating that an external web page is not loading. You determine that other resources both internal and external are still reachable. Which command can you use to help locate where the issue is in the network path to the external web page?",
    "options": [
      "A. ping -t",
      "B. tracert",
      "C. ipconfig/all",
      "D. nslookup"
    ],
    "correct_letters": [
      "B"
    ],
    "correct_answers": [
      "B. tracert"
    ],
    "is_multiple_response": false,
    "explanation": "Tracert (traceroute) identifies each hop along the path to determine where packet forwarding fails or experiences delays."
  },
  {
    "id": 25,
    "page": 29,
    "category": "Standard Concepts",
    "type": "multiple_choice",
    "image": null,
    "question": "Which two statements are true about the IPv4 address of the default gateway configured on a host? (Choose 2.)Note: You will receive partial credit for each correct selection.",
    "options": [
      "A. The IPv4 address of the default gateway must be the first host address in the subnet.",
      "B. The same default gateway IPv4 address is configured on each host on the local network.",
      "C. The default gateway is the Loopback0 interface IPv4 address of the router connected to the same local network as the host.",
      "D. The default gateway is the IPv4 address of the router interface connected to the same local network as the host.",
      "E. Hosts learn the default gateway IPv4 address through router advertisement messages."
    ],
    "correct_letters": [
      "B",
      "D"
    ],
    "correct_answers": [
      "B. The same default gateway IPv4 address is configured on each host on the local network.",
      "D. The default gateway is the IPv4 address of the router interface connected to the same local network as the host."
    ],
    "is_multiple_response": true,
    "explanation": "On an IPv4 network, all hosts in the same local subnet point to the same default gateway (router's local interface IP address) to route packets off-network."
  },
  {
    "id": 26,
    "page": 30,
    "category": "Standard Concepts",
    "type": "multiple_choice",
    "image": null,
    "question": "Which two statements are true about the IPv4 address of the default gateway configured on a host? (Choose 2.)Note: You will receive partial credit for each correct selection.",
    "options": [
      "A. The IPv4 address of the default gateway must be the first host address in the subnet.",
      "B. The same default gateway IPv4 address is configured on each host on the local network.",
      "C. The default gateway is the Loopback0 interface IPv4 address of the router connected to the same local network as the host.",
      "D. The default gateway is the IPv4 address of the router interface connected to the same local network as the host.",
      "E. Hosts learn the default gateway IPv4 address through router advertisement messages."
    ],
    "correct_letters": [
      "B",
      "D"
    ],
    "correct_answers": [
      "B. The same default gateway IPv4 address is configured on each host on the local network.",
      "D. The default gateway is the IPv4 address of the router interface connected to the same local network as the host."
    ],
    "is_multiple_response": true,
    "explanation": "On an IPv4 network, all hosts in the same local subnet point to the same default gateway (router's local interface IP address) to route packets off-network."
  },
  {
    "id": 27,
    "page": 31,
    "category": "Standard Concepts",
    "type": "multiple_choice",
    "image": null,
    "question": "An engineer configured a new VLAN named VLAN2 for the Data Center team. When the team tries to ping addresses outside VLAN2 from a computer in VLAN2, they are unable to reach them. What should the engineer configure?",
    "options": [
      "A. Additional VLAN",
      "B. Default route",
      "C. Default gateway",
      "D. Static route"
    ],
    "correct_letters": [
      "C"
    ],
    "correct_answers": [
      "C. Default gateway"
    ],
    "is_multiple_response": false,
    "explanation": "To communicate outside of a local VLAN, devices need Layer 3 routing via a default gateway (router or Layer 3 switch SVI)."
  },
  {
    "id": 28,
    "page": 32,
    "category": "Standard Concepts",
    "type": "multiple_choice",
    "image": null,
    "question": "Which information is included in the header of a UDP segment?",
    "options": [
      "A. IP addresses",
      "B. Sequence numbers",
      "C. Port numbers",
      "D. MAC addresses"
    ],
    "correct_letters": [
      "C"
    ],
    "correct_answers": [
      "C. Port numbers"
    ],
    "is_multiple_response": false,
    "explanation": "The UDP header is a lightweight 8-byte header consisting of Source Port (16 bits), Destination Port (16 bits), Length (16 bits), and Checksum (16 bits)."
  },
  {
    "id": 29,
    "page": 33,
    "category": "Standard Concepts",
    "type": "multiple_choice",
    "image": null,
    "question": "What is the purpose of assigning an IP address to the management VLAN interface on a Layer 2 switch?",
    "options": [
      "A. To enable access to the CLI on the switch through Telnet or SSH",
      "B. To enable the switch to provide DHCP services to other switches in the network",
      "C. To enable the switch to act as a default gateway for the attached devices",
      "D. To enable the switch to resolve URLs for the attached the devices"
    ],
    "correct_letters": [
      "A"
    ],
    "correct_answers": [
      "A. To enable access to the CLI on the switch through Telnet or SSH"
    ],
    "is_multiple_response": false,
    "explanation": "Assigning an IP address to a management VLAN interface (such as SVI VLAN 1) on a Layer 2 switch enables in-band remote CLI access via Telnet or SSH."
  },
  {
    "id": 30,
    "page": 34,
    "category": "Standard Concepts",
    "type": "multiple_choice",
    "image": null,
    "question": "Which of the following is a characteristic of the Spanning Tree Protocol (STP)?",
    "options": [
      "A. prevents loops in a network by blocking redundant links.",
      "B. provides load balancing across multiple paths in a network.",
      "C. prioritizes network traffic based on Quality of Service (QoS) settings.",
      "D. allows for rapid convergence by eliminating the need for spanning tree calculations."
    ],
    "correct_letters": [
      "A"
    ],
    "correct_answers": [
      "A. prevents loops in a network by blocking redundant links."
    ],
    "is_multiple_response": false,
    "explanation": "Spanning Tree Protocol (STP, IEEE 802.1D) prevents Layer 2 switching loops in redundant topologies by blocking redundant ports."
  },
  {
    "id": 31,
    "page": 35,
    "category": "Standard Concepts",
    "type": "multiple_choice",
    "image": null,
    "question": "What protocol is used by OSPF to form neighbor relationships and exchange routing information?",
    "options": [
      "A. CP (Control Protocol)",
      "B. P (Protocol)",
      "C. MP (Multiprotocol)",
      "D. Llo (Link-Local Operations)"
    ],
    "correct_letters": [
      "D"
    ],
    "correct_answers": [
      "D. Llo (Link-Local Operations)"
    ],
    "is_multiple_response": false,
    "explanation": "OSPF uses Hello packets (Protocol 89) to discover neighbors, establish adjacencies, and maintain keepalives."
  },
  {
    "id": 32,
    "page": 36,
    "category": "Standard Concepts",
    "type": "multiple_choice",
    "image": null,
    "question": "What information is contained in the MAC address table of a switch?",
    "options": [
      "A. Dynamically learned Layer2 and Layer3 addresses of devices communicating on active ports on the switch",
      "B. The MAC addresses of devices communicating on active ports and static MAC addresses configured by the administrator",
      "C. All active ports on the switch and the host Layer3 addresses that were dynamically learned on each port.",
      "D. MAC addresses to IP Address mappings learned through ARP requests or manually configured by the administrator"
    ],
    "correct_letters": [
      "B"
    ],
    "correct_answers": [
      "B. The MAC addresses of devices communicating on active ports and static MAC addresses configured by the administrator"
    ],
    "is_multiple_response": false,
    "explanation": "The switch MAC address table contains dynamically learned MAC addresses recorded from incoming frames on active switchports, as well as static MAC entries configured by the administrator."
  },
  {
    "id": 33,
    "page": 37,
    "category": "Standard Concepts",
    "type": "multiple_choice",
    "image": null,
    "question": "What is the purpose of a subnet mask?",
    "options": [
      "A. determine the network portion of an IP address",
      "B. determine the host portion of an IP address",
      "C. determine the default gateway for a network",
      "D. determine the DNS server for a network"
    ],
    "correct_letters": [
      "A"
    ],
    "correct_answers": [
      "A. determine the network portion of an IP address"
    ],
    "is_multiple_response": false,
    "explanation": "A subnet mask determines which bits of an IP address represent the network portion and which represent the host portion."
  },
  {
    "id": 34,
    "page": 38,
    "category": "Standard Concepts",
    "type": "multiple_choice",
    "image": null,
    "question": "A user at you company cannot connect to website on the internet. However, they can connect to network resources on the company LAN. You want to use the divide and conquer approach to troubleshoot the issue. What should you do first?",
    "options": [
      "A. Run the Telnet command from the user’s computer",
      "B. Ping the default gateway from the user’s computer",
      "C. Check the computer’s cable connections",
      "D. Check the computer's network adapter"
    ],
    "correct_letters": [
      "B"
    ],
    "correct_answers": [
      "B. Ping the default gateway from the user’s computer"
    ],
    "is_multiple_response": false,
    "explanation": "In the 'divide and conquer' network troubleshooting methodology, pinging the default gateway tests the boundary between the local LAN and the external network."
  },
  {
    "id": 35,
    "page": 39,
    "category": "Standard Concepts",
    "type": "multiple_choice",
    "image": null,
    "question": "Your company has 20 Cisco switches throughout its building. You need to view the configuration of each switch from the command line. Which protocol should you use?",
    "options": [
      "A. FTP (File Transfer Protocol)",
      "B. RDP (Remote Desktop Protocol)",
      "C. SMTP (Simple Mail Transfer Protocol)",
      "D. SNMP (Simple Network Management Protocol)"
    ],
    "correct_letters": [
      "D"
    ],
    "correct_answers": [
      "D. SNMP (Simple Network Management Protocol)"
    ],
    "is_multiple_response": false,
    "explanation": "SSH (Secure Shell) is the secure industry standard protocol for command-line access to Cisco switches, while SNMP is used by network monitoring systems."
  },
  {
    "id": 36,
    "page": 42,
    "category": "Security",
    "type": "multiple_choice",
    "image": null,
    "question": "Which device protects the network by permitting or denying traffic based on IP address, port number, or application?",
    "options": [
      "A. Firewall",
      "B. Access point",
      "C. VPN gateway",
      "D. Intrusion detection system"
    ],
    "correct_letters": [
      "A"
    ],
    "correct_answers": [
      "A. Firewall"
    ],
    "is_multiple_response": false,
    "explanation": "A firewall inspects and filters network traffic, permitting or denying packets based on IP addresses, port numbers, or application protocols."
  },
  {
    "id": 37,
    "page": 43,
    "category": "Security",
    "type": "multiple_choice",
    "image": null,
    "question": "How does a firewall determine which traffic to block?",
    "options": [
      "A. The firewall matches traffic based on the IP address in the ARP table",
      "B. The firewall performs a one-to-many network address translation",
      "C. The firewall matches the traffic based on source and destination IP address",
      "D. The firewall performs a one-to-one network address translation."
    ],
    "correct_letters": [
      "C"
    ],
    "correct_answers": [
      "C. The firewall matches the traffic based on source and destination IP address"
    ],
    "is_multiple_response": false,
    "explanation": "Packet filtering firewalls evaluate traffic based on source and destination IP addresses, ports, and transport protocols."
  },
  {
    "id": 38,
    "page": 44,
    "category": "Security",
    "type": "true_false_group",
    "question": "You plan to use a network firewall to protect computers at a small office. Select True or False for each:",
    "items": [
      {
        "statement": "A firewall can block traffic to specific ports on internal computers.",
        "answer": "True",
        "explanation": "Firewalls filter traffic based on port numbers."
      },
      {
        "statement": "A firewall can direct all web traffic to a specific IP address.",
        "answer": "True",
        "explanation": "Firewalls with port forwarding or NAT can redirect incoming web requests (ports 80/443) to a specific internal web server IP."
      },
      {
        "statement": "A firewall can prevent specific apps from running on a computer.",
        "answer": "False",
        "explanation": "Network firewalls control network packet flow, not endpoint operating system process execution (which is managed by endpoint security/app control policies)."
      }
    ]
  },
  {
    "id": 39,
    "page": 45,
    "category": "Security",
    "type": "multiple_choice",
    "image": null,
    "question": "Which best describes confidentiality with regards to network security?",
    "options": [
      "A. Ensures data is available for access by providing redundant systems.",
      "B. Ensures data is not changed during transit between system.",
      "C. Ensures data is kept secret using safeguards to prevent unauthorized access.",
      "D. Ensures data is trusted and has not been tampered with or changed"
    ],
    "correct_letters": [
      "C"
    ],
    "correct_answers": [
      "C. Ensures data is kept secret using safeguards to prevent unauthorized access."
    ],
    "is_multiple_response": false,
    "explanation": "Confidentiality ensures that information is accessible only to those authorized to have access, typically enforced using cryptography and access controls."
  },
  {
    "id": 40,
    "page": 46,
    "category": "Security",
    "type": "multiple_choice",
    "image": null,
    "question": "Which component of the AAA service security model provides identify verification?",
    "options": [
      "A. Authentication",
      "B. Accounting",
      "C. Auditing",
      "D. Authorization"
    ],
    "correct_letters": [
      "A"
    ],
    "correct_answers": [
      "A. Authentication"
    ],
    "is_multiple_response": false,
    "explanation": "In the AAA (Authentication, Authorization, Accounting) framework, Authentication verifies the identity of the user or device."
  },
  {
    "id": 41,
    "page": 47,
    "category": "Security",
    "type": "multiple_choice",
    "image": null,
    "question": "When setting up a wireless network which security benefit is provided by enabling WPA3?",
    "options": [
      "A. Limits network access to only specified devices",
      "B. Sends traffic through an encrypted tunnel",
      "C. Secures authentication between client and access point",
      "D. Makes it more difficult to discover wireless network"
    ],
    "correct_letters": [
      "C"
    ],
    "correct_answers": [
      "C. Secures authentication between client and access point"
    ],
    "is_multiple_response": false,
    "explanation": "WPA3 uses Simultaneous Authentication of Equals (SAE) to protect against brute-force dictionary attacks and secure client authentication."
  },
  {
    "id": 42,
    "page": 48,
    "category": "Security",
    "type": "matching",
    "question": "Move the CIA security principles to their corresponding example:",
    "options": [
      "Confidentiality",
      "Integrity",
      "Availability"
    ],
    "pairs": [
      {
        "prompt": "You generate a digital signature and attach it to a message",
        "answer": "Integrity"
      },
      {
        "prompt": "You encrypt a sensitive email message",
        "answer": "Confidentiality"
      },
      {
        "prompt": "You configure three redundant web servers at your company",
        "answer": "Availability"
      }
    ],
    "explanation": "Digital signatures guarantee integrity; encryption guarantees confidentiality; redundancy guarantees availability."
  },
  {
    "id": 43,
    "page": 49,
    "category": "Security",
    "type": "matching",
    "question": "Move the MFA factors to their correct examples:",
    "options": [
      "Knowledge",
      "Possession",
      "Inherence"
    ],
    "pairs": [
      {
        "prompt": "Specifying your name and password to log on to a service",
        "answer": "Knowledge"
      },
      {
        "prompt": "Entering a one-time security code sent to your device after logging in",
        "answer": "Possession"
      },
      {
        "prompt": "Holding your phone to your face to be recognized",
        "answer": "Inherence"
      }
    ],
    "explanation": "Password = something you know (Knowledge); Phone/OTP code = something you have (Possession); Facial recognition/biometrics = something you are (Inherence)."
  },
  {
    "id": 44,
    "page": 50,
    "category": "Security",
    "type": "matching",
    "question": "Move the security options to their characteristics. You may use each security option once, more than once, or not at all:",
    "options": [
      "WEP",
      "WPA2-Personal",
      "WPA-Enterprise"
    ],
    "pairs": [
      {
        "prompt": "Uses a minimum of 40 bits for encryption",
        "answer": "WEP"
      },
      {
        "prompt": "Use a RADIUS Server for authentication",
        "answer": "WPA-Enterprise"
      },
      {
        "prompt": "Use AES and a pre-shared key for authentication",
        "answer": "WPA2-Personal"
      }
    ],
    "explanation": "WEP uses 40/64-bit or 104/128-bit keys; Enterprise wireless uses RADIUS 802.1X; WPA2-Personal uses AES-CCMP and a PSK."
  },
  {
    "id": 45,
    "page": 51,
    "category": "Security",
    "type": "matching",
    "question": "You need to configure wireless settings for a home router. Move the actions to the correct scenarios:",
    "options": [
      "Disable WPS",
      "Set the security mode to WPA2-PSK",
      "Disable SSID broadcasting"
    ],
    "pairs": [
      {
        "prompt": "You want to prevent users from using the push-button method for accessing the network.",
        "answer": "Disable WPS"
      },
      {
        "prompt": "You want devices to use a pre-shared key when connecting to the network.",
        "answer": "Set the security mode to WPA2-PSK"
      },
      {
        "prompt": "You want to prevent devices from discovering the name of the Wi-Fi network.",
        "answer": "Disable SSID broadcasting"
      }
    ],
    "explanation": "WPS uses push-button or PIN; WPA2-PSK uses pre-shared keys; hiding network name is disabling SSID broadcast."
  },
  {
    "id": 46,
    "page": 52,
    "category": "Security",
    "type": "multiple_choice",
    "image": null,
    "question": "Which component of the AAA service security model provides identity verification?",
    "options": [
      "A. Authorization",
      "B. Auditing",
      "C. Authentication",
      "D. Accounting"
    ],
    "correct_letters": [
      "C"
    ],
    "correct_answers": [
      "C. Authentication"
    ],
    "is_multiple_response": false,
    "explanation": "In the AAA (Authentication, Authorization, Accounting) framework, Authentication verifies the identity of the user or device."
  },
  {
    "id": 47,
    "page": 55,
    "category": "Endpoints & Media Types",
    "type": "multiple_choice",
    "image": null,
    "question": "Which wireless security option uses a pre-shared key to authenticate clients?",
    "options": [
      "A. WPA2-Personal",
      "B. 802.1x",
      "C. 802.1q",
      "D. WPA2-Enterprise"
    ],
    "correct_letters": [
      "A"
    ],
    "correct_answers": [
      "A. WPA2-Personal"
    ],
    "is_multiple_response": false,
    "explanation": "WPA2-Personal (WPA2-PSK) uses a pre-shared passphrase key to authenticate Wi-Fi clients."
  },
  {
    "id": 48,
    "page": 56,
    "category": "Endpoints & Media Types",
    "type": "multiple_choice",
    "image": null,
    "question": "You need to connect a computer's network adapter to a switch using a 1000BASE-T cable. Which connector should you use?",
    "options": [
      "A. Coax",
      "B. RJ-11",
      "C. OS2 LC",
      "D. RJ-45"
    ],
    "correct_letters": [
      "D"
    ],
    "correct_answers": [
      "D. RJ-45"
    ],
    "is_multiple_response": false,
    "explanation": "1000BASE-T and unshielded twisted pair (UTP) copper Ethernet cables use 8-pin RJ-45 connectors."
  },
  {
    "id": 49,
    "page": 57,
    "category": "Endpoints & Media Types",
    "type": "multiple_choice",
    "image": null,
    "question": "Which type of connector should you use to terminate unshielded twisted pair (UTP) cable?",
    "options": [
      "A. ST (Straight Tip)",
      "B. SC (Subscriber Connector)",
      "C. RJ-45 (Registered Jack 45)",
      "D. OS2 LC"
    ],
    "correct_letters": [
      "C"
    ],
    "correct_answers": [
      "C. RJ-45 (Registered Jack 45)"
    ],
    "is_multiple_response": false,
    "explanation": "1000BASE-T and unshielded twisted pair (UTP) copper Ethernet cables use 8-pin RJ-45 connectors."
  },
  {
    "id": 50,
    "page": 58,
    "category": "Endpoints & Media Types",
    "type": "multiple_choice",
    "image": null,
    "question": "You want to store files that will be accessible by every user on your network. Which endpoint device do you need?",
    "options": [
      "A. Access point",
      "B. Server",
      "C. Hub",
      "D. Switch"
    ],
    "correct_letters": [
      "B"
    ],
    "correct_answers": [
      "B. Server"
    ],
    "is_multiple_response": false,
    "explanation": "A server (such as a file server or NAS) acts as a centralized repository allowing all authorized users on a network to store and access files."
  },
  {
    "id": 51,
    "page": 59,
    "category": "Endpoints & Media Types",
    "type": "multiple_choice",
    "image": "images/page_59.png",
    "question": "What type of interface is the administrator installing in the router?",
    "options": [
      "A. USB (Universal Serial Bus)",
      "B. SFP (Small Form-factor Pluggable)",
      "C. Serial",
      "D. PoE (Power over Ethernet)"
    ],
    "correct_letters": [
      "B"
    ],
    "correct_answers": [
      "B. SFP (Small Form-factor Pluggable)"
    ],
    "is_multiple_response": false,
    "explanation": "The administrator is inserting an SFP (Small Form-factor Pluggable) modular transceiver into the router interface slot."
  },
  {
    "id": 52,
    "page": 60,
    "category": "Endpoints & Media Types",
    "type": "multiple_choice",
    "image": "images/page_60.png",
    "question": "A Cisco PoE switch is shown in the following image. Which type of port will provide both data connectivity and power to an IP phone?",
    "options": [
      "A. Port identified with number 2",
      "B. Ports identified with number 6",
      "C. Ports identified with number 7",
      "D. Ports identified with number 3 and 4."
    ],
    "correct_letters": [
      "B"
    ],
    "correct_answers": [
      "B. Ports identified with number 6"
    ],
    "is_multiple_response": false,
    "explanation": "RJ-45 Ethernet ports (number 6) provide PoE (Power over Ethernet) data connectivity and electric power directly to IP phones and APs."
  },
  {
    "id": 53,
    "page": 61,
    "category": "Endpoints & Media Types",
    "type": "multiple_choice",
    "image": null,
    "question": "Which standard contains the specifications for Wi-Fi networks?",
    "options": [
      "A. GSM",
      "B. LTE",
      "C. IEEE 802.11",
      "D. IEEE 802.3",
      "E. EIA/TIA 568A"
    ],
    "correct_letters": [
      "C"
    ],
    "correct_answers": [
      "C. IEEE 802.11"
    ],
    "is_multiple_response": false,
    "explanation": "IEEE 802.11 defines the international standards and protocols for wireless local area networks (Wi-Fi)."
  },
  {
    "id": 54,
    "page": 62,
    "category": "Endpoints & Media Types",
    "type": "multiple_choice",
    "image": null,
    "question": "Which device is an Internet of Things (IoT) device?",
    "options": [
      "A. An internet-accessible thermostat",
      "B. A video streaming server",
      "C. A virtual private network concentrator",
      "D. A Cloud-based file storage array"
    ],
    "correct_letters": [
      "A"
    ],
    "correct_answers": [
      "A. An internet-accessible thermostat"
    ],
    "is_multiple_response": false,
    "explanation": "An internet-accessible thermostat is a smart connected IoT device that communicates environmental sensor data and commands over the network."
  },
  {
    "id": 55,
    "page": 63,
    "category": "Endpoints & Media Types",
    "type": "multiple_choice",
    "image": null,
    "question": "Which network technology is not impacted by electromagnetic and radio wave interference?",
    "options": [
      "A. Wireless",
      "B. Twisted Pair",
      "C. Fiber",
      "D. Copper"
    ],
    "correct_letters": [
      "C"
    ],
    "correct_answers": [
      "C. Fiber"
    ],
    "is_multiple_response": false,
    "explanation": "Fiber optic cables transmit pulses of light along glass/plastic strands and are completely immune to electromagnetic interference (EMI) and radio frequency interference (RFI)."
  },
  {
    "id": 56,
    "page": 64,
    "category": "Endpoints & Media Types",
    "type": "multiple_choice",
    "image": null,
    "question": "A cisco switch is not accessible from the network. You need to view its running configuration. Which out of band method can you use to access it?",
    "options": [
      "A. SSH",
      "B. SNMP",
      "C. Console",
      "D. Telnet"
    ],
    "correct_letters": [
      "C"
    ],
    "correct_answers": [
      "C. Console"
    ],
    "is_multiple_response": false,
    "explanation": "When a switch is inaccessible over the network (in-band), the physical Console port provides direct out-of-band serial administrative access."
  },
  {
    "id": 57,
    "page": 67,
    "category": "Infrastructure",
    "type": "matching",
    "image": "images/page_67.png",
    "question": "Examine the connections shown in the image. Move the cable types to the appropriate connection description:",
    "options": [
      "Straight-through UTP Cable",
      "Fiber Optic Cable",
      "Crossover UTP Cable"
    ],
    "pairs": [
      {
        "prompt": "Connects Switch to Router R1 Gi0/0/1 interface",
        "answer": "Straight-through UTP Cable"
      },
      {
        "prompt": "Connects Router R2 Gi0/0/0 to Router R3 Gi0/0/0 via underground conduit",
        "answer": "Fiber Optic Cable"
      },
      {
        "prompt": "Connects Router R1 Gi0/0/0 to Router R2 Gi0/0/1",
        "answer": "Crossover UTP Cable"
      },
      {
        "prompt": "Connects Switch S3 to Server0 network interface card",
        "answer": "Straight-through UTP Cable"
      }
    ],
    "explanation": "Switch to router/server uses Straight-through; Router to router Ethernet link without Auto-MDIX traditionally uses Crossover; long-distance underground run between buildings uses Fiber Optic."
  },
  {
    "id": 58,
    "page": 68,
    "category": "Infrastructure",
    "type": "multiple_choice",
    "image": null,
    "question": "A local company requires two networks in two new buildings. The addresses used in these networks must be in the private network range. Which two address ranges should the company use? (Choose 2.)",
    "options": [
      "A. 172.16.0.0 to 172.31.255.255",
      "B. 192.16.0.0 to 192.16.255.255",
      "C. 11.0.0.0 to 11.255.255.255",
      "D. 192.168.0.0 to 192.168.255.255"
    ],
    "correct_letters": [
      "A",
      "D"
    ],
    "correct_answers": [
      "A. 172.16.0.0 to 172.31.255.255",
      "D. 192.168.0.0 to 192.168.255.255"
    ],
    "is_multiple_response": true,
    "explanation": "RFC 1918 private IPv4 address blocks are: 10.0.0.0/8 (10.0.0.0 - 10.255.255.255), 172.16.0.0/12 (172.16.0.0 - 172.31.255.255), and 192.168.0.0/16 (192.168.0.0 - 192.168.255.255)."
  },
  {
    "id": 59,
    "page": 71,
    "category": "Diagnosing Problems",
    "type": "multiple_choice",
    "image": "images/page_71.png",
    "question": "Examine the following Command Output Which two conclusions can you make from the output of the tracert command? (Choose 2.)",
    "options": [
      "A. The trace successfully reached the www.cisco.com server.",
      "B. The trace failed after the fourth hop.",
      "C. The IPv6 address associated with the www.cisco.com server is 2600:1408: c400: 38d: : b33.",
      "D. The routers at hops 5 and 6 are offline.",
      "E. The device sending the trace has IPv6 address 2600:1408:c400:38d :: b33."
    ],
    "correct_letters": [
      "A",
      "C"
    ],
    "correct_answers": [
      "A. The trace successfully reached the www.cisco.com server.",
      "C. The IPv6 address associated with the www.cisco.com server is 2600:1408: c400: 38d: : b33."
    ],
    "is_multiple_response": true,
    "explanation": "The tracert output shows hop 12 finishing with 'Trace complete' to the target IPv6 address 2600:1408:c400:38d::b33, confirming success."
  },
  {
    "id": 60,
    "page": 72,
    "category": "Diagnosing Problems",
    "type": "multiple_choice",
    "image": null,
    "question": "Which two pieces of information should you include when you initially create a support ticket? (Choose 2.)",
    "options": [
      "A. A detailed description of the fault",
      "B. Details about the computers connected to the network",
      "C. A description of the conditions when the fault occurs",
      "D. The actions taken to resolve the fault",
      "E. The description of the top-down fault-finding procedure"
    ],
    "correct_letters": [
      "A",
      "C"
    ],
    "correct_answers": [
      "A. A detailed description of the fault",
      "C. A description of the conditions when the fault occurs"
    ],
    "is_multiple_response": true,
    "explanation": "Initial support tickets must contain a detailed description of the problem/fault and the specific conditions/context when it occurred."
  },
  {
    "id": 61,
    "page": 73,
    "category": "Diagnosing Problems",
    "type": "multiple_choice",
    "image": null,
    "question": "Which two statements are true about the IPv4 address of the default gateway configured on a host? (Choose 2.)",
    "options": [
      "A. The IPv4 address of the default gateway must be the first host address in the subnet.",
      "B. The same default gateway IPv4 address is configured on each host on the local network.",
      "C. The default gateway is the Loopback0 interface IPv4 address of the router connected to the same local network as the host.",
      "D. The default gateway is the IPv4 address of the router interface connected to the same local network as the host.",
      "E. Hosts learn the default gateway IPv4 address through router advertisement messages."
    ],
    "correct_letters": [
      "B",
      "D"
    ],
    "correct_answers": [
      "B. The same default gateway IPv4 address is configured on each host on the local network.",
      "D. The default gateway is the IPv4 address of the router interface connected to the same local network as the host."
    ],
    "is_multiple_response": true,
    "explanation": "On an IPv4 network, all hosts in the same local subnet point to the same default gateway (router's local interface IP address) to route packets off-network."
  },
  {
    "id": 62,
    "page": 74,
    "category": "Diagnosing Problems",
    "type": "interactive_config",
    "image": "images/page_74.png",
    "question": "An administrator is configuring the host PC-A on the network shown in the graphic. PC-A must be able to communicate on the local network and on the internet. There is no DHCP server. What information does the administrator need to input in the IPv4 protocol properties window?",
    "fields": [
      {
        "label": "IP address",
        "valid_pattern": "^172\\.100\\.(?!0\\.1$|0\\.0$|255\\.255$|0\\.254$)\\d{1,3}\\.\\d{1,3}$",
        "example": "172.100.0.10",
        "description": "Any unused host address in 172.100.0.0/16 (e.g., 172.100.0.10)"
      },
      {
        "label": "Subnet mask",
        "expected": "255.255.0.0",
        "description": "255.255.0.0 (corresponds to /16 prefix)"
      },
      {
        "label": "Default gateway",
        "expected": "172.100.0.1",
        "description": "172.100.0.1 (Router1 G0/0 interface IP)"
      },
      {
        "label": "Preferred DNS server",
        "expected": "172.100.0.254",
        "description": "172.100.0.254 (DNS server shown in network diagram)"
      }
    ],
    "explanation": "Network is 172.100.0.0/16, so subnet mask is 255.255.0.0. Router1 G0/0 (172.100.0.1) is the default gateway. Local DNS server is 172.100.0.254. PC-A can take any valid unused host IP in 172.100.0.0/16."
  },
  {
    "id": 63,
    "page": 75,
    "category": "Diagnosing Problems",
    "type": "multiple_choice",
    "image": null,
    "question": "A help desk technician receives the four trouble tickets listed below. Which ticket should receive the highest priority and be addressed first?",
    "options": [
      "A. Ticket 1: A user requests relocation of a printer to a different network jack in the same office. The jack must be patched and made active.",
      "B. Ticket 2: An online webinar is taking place in the conference room. The video conferencing equipment lost internet access.",
      "C. Ticket 3: A user reports that response time for a cloud-based application is slower than usual.",
      "D. Ticket 4: Two users report that wireless access in the cafeteria has been down for the last hour."
    ],
    "correct_letters": [
      "B"
    ],
    "correct_answers": [
      "B. Ticket 2: An online webinar is taking place in the conference room. The video conferencing equipment lost internet access."
    ],
    "is_multiple_response": false,
    "explanation": "An ongoing company-wide online webinar in a conference room with broken video conferencing impacts live business operations and warrants highest priority (P1/Urgent)."
  },
  {
    "id": 64,
    "page": 76,
    "category": "Diagnosing Problems",
    "type": "multiple_choice",
    "image": null,
    "question": "An engineer configured a new VLAN named VLAN2 for the Data Center team. When the team tries to ping addresses outside VLAN2 from a computer in VLAN2, they are unable to reach them. What should the engineer configure?",
    "options": [
      "A. Additional VLAN",
      "B. Default route",
      "C. Default gateway",
      "D. Static route"
    ],
    "correct_letters": [
      "C"
    ],
    "correct_answers": [
      "C. Default gateway"
    ],
    "is_multiple_response": false,
    "explanation": "To communicate outside of a local VLAN, devices need Layer 3 routing via a default gateway (router or Layer 3 switch SVI)."
  },
  {
    "id": 65,
    "page": 77,
    "category": "Diagnosing Problems",
    "type": "multiple_choice",
    "image": null,
    "question": "You are a senior network administrator tasked with diagnosing intermittent connectivity issues on the executive floor of a multinational corporation, which primarily uses iOS devices. After initial checks, you suspect that the problem may be related to SSID settings and network configuration specifics not aligning correctly with the corporate security protocols. Given the high-security requirements and the exclusive use of iOS devices on this floor, which approach should you take to verify and rectify the network settings directly on the affected devices?",
    "options": [
      "A. Network Reset",
      "B. Manual Configuration",
      "C. Use Fing",
      "D. SSID Reconfiguration"
    ],
    "correct_letters": [
      "B"
    ],
    "correct_answers": [
      "B. Manual Configuration"
    ],
    "is_multiple_response": false,
    "explanation": "For secure corporate Wi-Fi configurations on iOS devices, manual profile or settings configuration ensures appropriate certificate and authentication settings."
  },
  {
    "id": 66,
    "page": 78,
    "category": "Diagnosing Problems",
    "type": "multiple_choice",
    "image": "images/page_78.png",
    "question": "Which two statements are true about the impact to communication on the network while the router is temporarily offline. Evaluate the Graphic.",
    "options": [
      "A. None of the PC’s can access the file server (File-Srv)",
      "B. The file server (File-Srv) can still access the internet",
      "C. PC-A and PC-B can still communicate with each other.",
      "D. PC-A , PC-B, PC-C and PC-D can still communicate with each other",
      "E. PC-C and PC-D can still communicate with the file server (File-Srv)"
    ],
    "correct_letters": [
      "A",
      "D"
    ],
    "correct_answers": [
      "A. None of the PC’s can access the file server (File-Srv)",
      "D. PC-A , PC-B, PC-C and PC-D can still communicate with each other"
    ],
    "is_multiple_response": true,
    "explanation": "Because the router is offline, inter-VLAN routing is unavailable. Hosts within the same VLAN and switch (PC-A and PC-B in VLAN 100) can still communicate directly at Layer 2."
  },
  {
    "id": 67,
    "page": 79,
    "category": "Diagnosing Problems",
    "type": "multiple_choice",
    "image": "images/page_79.png",
    "question": "Which action does Switch1 take?",
    "options": [
      "A. Switch1 queries Switch2 for the MAC address of PC-C",
      "B. Switch1 drops the frame and sends an error message back to PC-A",
      "C. Switch1 sends an ARP request to obtain the MAC address of PC-C",
      "D. Switch1 floods the frame out all active ports except port Gi0/1"
    ],
    "correct_letters": [
      "D"
    ],
    "correct_answers": [
      "D. Switch1 floods the frame out all active ports except port Gi0/1"
    ],
    "is_multiple_response": false,
    "explanation": "When a Layer 2 switch receives a frame with an unknown destination MAC address, it floods the frame out all ports in that VLAN except the arrival port."
  },
  {
    "id": 68,
    "page": 80,
    "category": "Diagnosing Problems",
    "type": "multiple_choice",
    "image": "images/page_80.png",
    "question": "Which port should you identify?",
    "options": [
      "A. D only",
      "B. A,B and D only",
      "C. B and C only",
      "D. B, C and D only"
    ],
    "correct_letters": [
      "D"
    ],
    "correct_answers": [
      "D. B, C and D only"
    ],
    "is_multiple_response": false,
    "explanation": "Broadcast frames received on port A are forwarded out all other active ports in the broadcast domain (ports B, C, and D)."
  },
  {
    "id": 69,
    "page": 81,
    "category": "Diagnosing Problems",
    "type": "multiple_choice",
    "image": null,
    "question": "A support technician examines the front panel of a Cisco switch and sees 4 Ethernet cables connected in the first four ports. Port 1,2 and 3 have a green LED. Port 4 has a blinking green light. What is the state of the Port 4?",
    "options": [
      "A. Link is up and not stable",
      "B. Link is up and there is no activity",
      "C. Link is up with cable malfunctions",
      "D. Link is up and active"
    ],
    "correct_letters": [
      "D"
    ],
    "correct_answers": [
      "D. Link is up and active"
    ],
    "is_multiple_response": false,
    "explanation": "A solid green LED indicates an established link; blinking green indicates active data transmission/activity across the link."
  },
  {
    "id": 70,
    "page": 82,
    "category": "Diagnosing Problems",
    "type": "multiple_choice",
    "image": null,
    "question": "A user reports a problem connecting to network resources. Other users connected to the same switch are not experiencing the same problem. The user's computer is patched to a switch port Gi0/15. The status indicator for this port is blinking alternately green then amber. What does the light pattern indicate about the status of port Gi0/15?",
    "options": [
      "A. The port is administratively shutdown",
      "B. The port is experiencing a high rate of errors.",
      "C. The port is blocked by a firewall rule.",
      "D. The port is not connected to a powered -on device."
    ],
    "correct_letters": [
      "B"
    ],
    "correct_answers": [
      "B. The port is experiencing a high rate of errors."
    ],
    "is_multiple_response": false,
    "explanation": "An alternating green-and-amber blinking port LED on Cisco switches signifies link fault or high rate of transmission errors (such as frame check sequence or collision errors)."
  },
  {
    "id": 71,
    "page": 83,
    "category": "Diagnosing Problems",
    "type": "multiple_choice",
    "image": "images/page_83.png",
    "question": "What can you tell from the command output? A user report that a company website is not available. The help desk technician issues a tracert command to determine if the server hosting the website is reachable over the network. The output of the command is shown as follows:",
    "options": [
      "A. The server with address 192.168.1.10 is reachable over the network",
      "B. The router at hop 3 is not forwarding packets to the IP address 192.168.1.10",
      "C. Requests to the web server at 192.168.1.10 are being delayed and time out.",
      "D. The server address 192.168.1.10 is being blocked by a firewall on the router at hop3."
    ],
    "correct_letters": [
      "A"
    ],
    "correct_answers": [
      "A. The server with address 192.168.1.10 is reachable over the network"
    ],
    "is_multiple_response": false,
    "explanation": "Hop 5 reaches the destination 192.168.1.10 in 1 ms with 0 ms latency, proving the server is online and reachable over the network despite hop 3 dropping ICMP probes."
  },
  {
    "id": 72,
    "page": 84,
    "category": "Diagnosing Problems",
    "type": "multiple_choice",
    "image": "images/page_84.png",
    "question": "Which action can be run directly from the Cisco router’s IOS mode shown?",
    "options": [
      "A. Enable a routing process",
      "B. Show running system information",
      "C. Enter interface IP configuration subcommands",
      "D. Select an interface to configure"
    ],
    "correct_letters": [
      "B"
    ],
    "correct_answers": [
      "B. Show running system information"
    ],
    "is_multiple_response": false,
    "explanation": "The prompt 'router1#' denotes Privileged EXEC mode (enable mode), allowing execution of show and debug commands to view running system status."
  },
  {
    "id": 73,
    "page": 85,
    "category": "Diagnosing Problems",
    "type": "multiple_choice",
    "image": "images/page_85.png",
    "question": "What can you determine about this switch from the command output? Examine the output of the show mac-address-table command on a Cisco 24 ports Ethernet switch",
    "options": [
      "A. There are eleven active ports on this switch",
      "B. Port Fa0/5 is set to administratively down.",
      "C. All entries were learned by examining incoming frames.",
      "D. Port Gi0/1 connects to another switch"
    ],
    "correct_letters": [
      "D"
    ],
    "correct_answers": [
      "D. Port Gi0/1 connects to another switch"
    ],
    "is_multiple_response": false,
    "explanation": "Multiple different MAC addresses appearing on GigabitEthernet0/1 across different VLANs indicates that Gi0/1 connects to an upstream/downstream trunk switch."
  },
  {
    "id": 74,
    "page": 86,
    "category": "Diagnosing Problems",
    "type": "true_false_group",
    "image": "images/page_86.png",
    "question": "You connect to a Cisco switch and run 'show ip interface brief'. Based on the partial output shown, select True or False for each statement:",
    "items": [
      {
        "statement": "A device connected to GigabitEthernet0/1 can send out broadcast traffic.",
        "answer": "False",
        "explanation": "The status of GigabitEthernet0/1 is 'down/down', so no traffic can be sent or received."
      },
      {
        "statement": "A technician issued the shutdown command on interface GigabitEthernet0/2.",
        "answer": "True",
        "explanation": "The status displays 'administratively down', which occurs when the 'shutdown' command is issued."
      },
      {
        "statement": "A technician set the IP address for GigabitEthernet0/0 by using the CLI.",
        "answer": "True",
        "explanation": "The Method column explicitly indicates 'manual', which means configured manually via CLI."
      }
    ]
  },
  {
    "id": 75,
    "page": 87,
    "category": "Diagnosing Problems",
    "type": "multiple_choice",
    "image": "images/page_87.png",
    "question": "You purchase a new Cisco switch, turn it on and connect to its console port. You run '#show running-config | section include interface'. Which statement is correct?",
    "options": [
      "A. The two interfaces can communicate over Layer 2.",
      "B. The two interfaces are administratively shut down.",
      "C. The two interfaces have default IP address assigned."
    ],
    "correct_answers": [
      "A. The two interfaces can communicate over Layer 2."
    ],
    "is_multiple_response": false,
    "explanation": "On Cisco Catalyst switches, switchports default to 'no shutdown' and are in VLAN 1 (Layer 2 enabled). Without manual shutdown or routing config, they can immediately switch Ethernet frames at Layer 2.",
    "correct_letters": [
      "A"
    ]
  },
  {
    "id": 76,
    "page": 88,
    "category": "Diagnosing Problems",
    "type": "text_input",
    "image": "images/page_88.png",
    "question": "A help desk technician is working on a computer unable to resolve URLs. The ipconfig/all output shows DNS Servers: 64.100.8.8. You need to issue a command to view the network devices in the path from the computer to the server that resolves the host name. What command should you issue?",
    "accepted_answers": [
      "tracert 64.100.8.8",
      "traceroute 64.100.8.8",
      "tracert",
      "traceroute"
    ],
    "explanation": "The command 'tracert 64.100.8.8' traces the hop-by-hop route across intermediate network devices to reach the configured DNS server (64.100.8.8)."
  },
  {
    "id": 77,
    "page": 89,
    "category": "Diagnosing Problems",
    "type": "text_input",
    "question": "An app on a user's computer is having problems downloading data. The app uses the URL https://www.companypro.net:7100/api. You need to use Wireshark to capture packets sent to and received from that URL. What Wireshark filter options would you use?",
    "accepted_answers": [
      "tcp.port == 7100",
      "tcp.port==7100",
      "port 7100",
      "tcp.port == 7100 || ip.addr == www.companypro.net",
      "tcp.dstport == 7100 || tcp.srcport == 7100"
    ],
    "explanation": "In Wireshark display filters, filtering by 'tcp.port == 7100' captures all traffic on port 7100 used by this API endpoint."
  },
  {
    "id": 78,
    "page": 90,
    "category": "Diagnosing Problems",
    "type": "text_input",
    "image": "images/page_90.png",
    "question": "Computers in a small office are unable to access companypro.net. The ipconfig output shows Default Gateway: 192.168.0.1. You need to determine if you can reach the router. Which command should you use?",
    "accepted_answers": [
      "ping 192.168.0.1",
      "ping -t 192.168.0.1"
    ],
    "explanation": "To verify network layer reachability to the local router (Default Gateway 192.168.0.1), use 'ping 192.168.0.1'."
  },
  {
    "id": 79,
    "page": 91,
    "category": "Diagnosing Problems",
    "type": "text_input",
    "question": "You want to list the IPv4 addresses associated with the host name www.companypro.net. What is the command to execute in this scenario?",
    "accepted_answers": [
      "nslookup www.companypro.net",
      "nslookup",
      "dig www.companypro.net",
      "host www.companypro.net"
    ],
    "explanation": "'nslookup www.companypro.net' queries DNS servers to display IP address records associated with the specified hostname."
  },
  {
    "id": 80,
    "page": 92,
    "category": "Diagnosing Problems",
    "type": "multiple_choice",
    "image": null,
    "question": "A support technician examines the front panel of a Cisco switch and sees 4 Ethernet cables connected in the first four ports. Ports 1, 2, and 3 have a green LED. Port 4 has a blinking green light.",
    "options": [
      "A. Link is up with cable malfunctions.",
      "B. Link is up and not stable.",
      "C. Link is up and active.",
      "D. Link is up and there is no activity."
    ],
    "correct_letters": [
      "C"
    ],
    "correct_answers": [
      "C. Link is up and active."
    ],
    "is_multiple_response": false,
    "explanation": "A solid green LED indicates an established link; blinking green indicates active data transmission/activity across the link."
  },
  {
    "id": 81,
    "page": 93,
    "category": "Diagnosing Problems",
    "type": "multiple_choice",
    "image": null,
    "question": "What is the purpose of assigning an IP address to the management VLAN interface on a Layer 2 switch?",
    "options": [
      "A. To enable the switch to act as a default gateway for the attached devices",
      "B. To enable the switch to resolve URLs for the attached the devices",
      "C. To enable the switch to provide DHCP services to other switches in the network",
      "D. To enable access to the CLI on the switch through Telnet or SSH"
    ],
    "correct_letters": [
      "D"
    ],
    "correct_answers": [
      "D. To enable access to the CLI on the switch through Telnet or SSH"
    ],
    "is_multiple_response": false,
    "explanation": "Assigning an IP address to a management VLAN interface (such as SVI VLAN 1) on a Layer 2 switch enables in-band remote CLI access via Telnet or SSH."
  },
  {
    "id": 82,
    "page": 94,
    "category": "Diagnosing Problems",
    "type": "multiple_choice",
    "image": "images/page_94.png",
    "question": "What command will display the output shown (displaying Device ID, Local Intfce, Holdtme, Capability, Platform, Port ID)?",
    "options": [
      "A. show cdp neighbors",
      "B. show ip interface brief",
      "C. show mac-address-table",
      "D. show running-config"
    ],
    "correct_answers": [
      "A. show cdp neighbors"
    ],
    "is_multiple_response": false,
    "explanation": "'show cdp neighbors' is the Cisco Discovery Protocol command that displays neighboring directly connected Cisco/compatible devices, their local interface, holdtime, capabilities, hardware platform, and remote port ID.",
    "correct_letters": [
      "A"
    ]
  },
  {
    "id": 83,
    "page": 95,
    "category": "Diagnosing Problems",
    "type": "multiple_choice",
    "image": null,
    "question": "A network administrator can successfully ping the URL www.cisco.com, but cannot ping a corporate server located at a remote branch in another city. You need to identify the specific router where packets are being dropped in the path to the remote branch. Which utility should you use?",
    "options": [
      "A. Traceroute",
      "B. Netstat",
      "C. telnet",
      "D. ipconfig"
    ],
    "correct_letters": [
      "A"
    ],
    "correct_answers": [
      "A. Traceroute"
    ],
    "is_multiple_response": false,
    "explanation": "Traceroute (or tracert) maps the router hops along the path and identifies where packet drops or unreachable responses occur."
  },
  {
    "id": 84,
    "page": 96,
    "category": "Diagnosing Problems",
    "type": "multiple_choice",
    "image": null,
    "question": "You need to determine whether a remote host is reachable through the network. Which two commands can you see? Each correct command is a complete solution.",
    "options": [
      "A. Netstat",
      "B. Ping",
      "C. Route print",
      "D. Ipconfig",
      "E. Traceroute or tracert"
    ],
    "correct_letters": [
      "B",
      "E"
    ],
    "correct_answers": [
      "B. Ping",
      "E. Traceroute or tracert"
    ],
    "is_multiple_response": true,
    "explanation": "Both ping (ICMP echo) and traceroute/tracert can be used to test and confirm reachability to a remote host across a network."
  },
  {
    "id": 85,
    "page": 97,
    "category": "Diagnosing Problems",
    "type": "multiple_choice",
    "image": null,
    "question": "In a network with multiple VLANs, a user is unable to communicate with other users in the same VLAN but can communicate with users in different VLANs. Which of the following could be the cause of this issue?",
    "options": [
      "A. user's switchport is not configured as an access port.",
      "B. user's switchport is not assigned to the correct VLAN.",
      "C. user's switchport is configured with the wrong duplex setting.",
      "D. user's switchport is experiencing a spanning tree loop."
    ],
    "correct_letters": [
      "B"
    ],
    "correct_answers": [
      "B. user's switchport is not assigned to the correct VLAN."
    ],
    "is_multiple_response": false,
    "explanation": "If a user is mistakenly placed into a different VLAN than intended, they will be isolated from their colleagues and only able to reach other VLANs via router."
  },
  {
    "id": 86,
    "page": 98,
    "category": "Diagnosing Problems",
    "type": "multiple_choice",
    "image": null,
    "question": "A user initiates a trouble ticket stating that an external web page is not loading. You determine that other resources both internal and external are still reachable. Which command can you use to help locate where the issue is in the network path to the external web page?",
    "options": [
      "A. ping -t",
      "B. tracert",
      "C. ipconfig/all",
      "D. Nslookup"
    ],
    "correct_letters": [
      "B"
    ],
    "correct_answers": [
      "B. tracert"
    ],
    "is_multiple_response": false,
    "explanation": "Tracert (traceroute) identifies each hop along the path to determine where packet forwarding fails or experiences delays."
  }
];