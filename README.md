
# Star Wars Character Search

Welcome to the Star Wars Character Search! This application allows you to explore information about various characters from the Star Wars universe, including details such as age, place of birth, height, films they appeared in, and the ships and vehicles they used. Additionally, you can save your favorite characters for easy access.

## Built Using
- React
- Vite
- Axios
- Styled Components


## Installation

To run this project locally, follow these steps:

1.  Clone the repository to your local machine.
2.  Navigate to the project directory.
3.  Run `npm install` to install the dependencies.
4.  After the installation is complete, run `npm run dev` to start the development server.

## Inspiration

- [Create React App](https://github.com/facebook/create-react-app/tree/main/packages/cra-template)
- [Vite](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react)
- [Vitest](https://github.com/vitest-dev/vitest/tree/main/examples/react-testing-lib)

##  Relational model for a database

Here is an example of a relational model for a favorites API database:

**Users Table (users):**
user_id (primary key)
username
email
password

**Favorites Table (favorites):**
favorite_id (primary key)
user_id (foreign key referencing the users table)

![Relational model](https://1drv.ms/i/s!Ar-lIwdGyGk4gVH8SO2dvtW80-v3)

##  Key exchange process behind SSL
The SSL key exchange process involves several steps:

-   The client sends a request indicating that it wants to establish a secure connection using HTTPS to the server.
-   The server responds to the request by sending the SSL certificate.
-   The client verifies the certificate to ensure authenticity.
-   After verifying the server's certificate, the client generates a symmetric session key.
-   The client encrypts the session key with the server's public key contained in the SSL certificate and sends it back to the server.
-   The server receives the encrypted session key from the client and decrypts it using its corresponding private key.
-   With the shared session key, the client and server can establish secure communication.

## DNS

  
The Domain Name System (DNS) is a fundamental system of the Internet that translates human-readable domain names into Internet Protocol (IP) addresses associated with computers and devices connected to the network. Essentially, DNS serves as an Internet directory, translating the domain names we use to access websites, send emails, and perform other online activities into IP addresses that computers and servers can understand.

Here's an overview of how DNS works and its usage on the Internet:

- Domain Name Translation to IP Addresses: When we type a domain name (e.g., "example.com") into a web browser, our device's operating system needs to find the corresponding IP address of the web server hosting that site. It does this by querying DNS servers to obtain this information.

- Hierarchy of DNS Servers: DNS is organized into a hierarchy of servers, including root servers, top-level domain (TLD) servers, authoritative domain name servers, and local cache servers. When our device makes a DNS query, it is forwarded through these servers in a series of steps until the correct IP address is found.

- Name Resolution: The process of translating domain names into IP addresses is known as name resolution. It begins with a query to our Internet Service Provider's (ISP) local DNS server or a DNS server configured on our device. If the local server doesn't have the information cached, it will query other DNS servers on the Internet until it finds the correct answer.

- Caching: To improve performance and reduce the load on DNS servers, the results of DNS queries are often cached on local and intermediary servers. This means that subsequent queries for the same domain name can be answered more quickly without needing to consult remote DNS servers.

- Updates and Maintenance: DNS is a distributed and decentralized system, with millions of DNS servers worldwide. DNS records are maintained and updated by domain registrars and system administrators responsible for the DNS servers of each domain. This includes configuring DNS records such as A records (to map domain names to IP addresses), MX records (to route emails), and other types of DNS records.

- In summary, DNS plays a crucial role in the operation of the Internet, allowing users to access websites and services using easy-to-remember domain names, while computers and Internet servers communicate with each other using IP addresses.
