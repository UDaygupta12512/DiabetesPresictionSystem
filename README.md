Goals of this repo

Demonstrate robust Neo4j data modeling and best practices.

Show imports using LOAD CSV and APOC utilities.

Provide backend integration examples (Python & Node.js).

Show testing and CI for graph code.

Provide production notes: indexes, constraints, query profiling, and deployment suggestions.

Prerequisites

Docker & Docker Compose (for local Neo4j).

Python 3.10+ and pip for Python examples.

Node 16+ for Node.js examples.

Local quickstart (Docker)

Start Neo4j with APOC enabled (see docker/docker-compose.yml):

cd docker
docker-compose up -d

Open Browser: http://localhost:7474 (or bolt on bolt://localhost:7687) and login with credentials in compose file.

Run import scripts in cypher/ via Neo4j Browser or cypher-shell.
